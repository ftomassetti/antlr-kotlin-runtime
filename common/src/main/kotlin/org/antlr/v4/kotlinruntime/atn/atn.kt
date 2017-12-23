package org.antlr.v4.kotlinruntime.atn

/** An ATN transition between any two ATN states.  Subclasses define
 * atom, set, epsilon, action, predicate, rule transitions.
 *
 *
 * This is a one way link.  It emanates from a state (usually via a list of
 * transitions) and has a target state.
 *
 *
 * Since we never have to change the ATN transitions once we construct it,
 * we can fix these transitions as specific classes. The DFA transitions
 * on the other hand need to update the labels as it adds transitions to
 * the states. We'll use the term Edge for the DFA to distinguish them from
 * ATN transitions.
 */
abstract class Transition protected constructor(
        /** The target of this transition.  */

        var target: ATNState?) {

    abstract val serializationType: Int

    /**
     * Determines if the transition is an "epsilon" transition.
     *
     *
     * The default implementation returns `false`.
     *
     * @return `true` if traversing this transition in the ATN does not
     * consume an input symbol; otherwise, `false` if traversing this
     * transition consumes (matches) an input symbol.
     */
    val isEpsilon: Boolean
        get() = false

    init {
        if (target == null) {
            throw NullPointerException("target cannot be null.")
        }
    }


    open fun label(): IntervalSet? {
        return null
    }

    abstract fun matches(symbol: Int, minVocabSymbol: Int, maxVocabSymbol: Int): Boolean

    companion object {
        // constants for serialization
        val EPSILON = 1
        val RANGE = 2
        val RULE = 3
        val PREDICATE = 4 // e.g., {isType(input.LT(1))}?
        val ATOM = 5
        val ACTION = 6
        val SET = 7 // ~(A|B) or ~atom, wildcard, which convert to next 2
        val NOT_SET = 8
        val WILDCARD = 9
        val PRECEDENCE = 10


        val serializationNames = Collections.unmodifiableList(Arrays.asList(
                "INVALID",
                "EPSILON",
                "RANGE",
                "RULE",
                "PREDICATE",
                "ATOM",
                "ACTION",
                "SET",
                "NOT_SET",
                "WILDCARD",
                "PRECEDENCE"
        ))

        val serializationTypes = Collections.unmodifiableMap(object : HashMap<Class<out Transition>, Int>() {
            init {
                put(EpsilonTransition::class.java, EPSILON)
                put(RangeTransition::class.java, RANGE)
                put(RuleTransition::class.java, RULE)
                put(PredicateTransition::class.java, PREDICATE)
                put(AtomTransition::class.java, ATOM)
                put(ActionTransition::class.java, ACTION)
                put(SetTransition::class.java, SET)
                put(NotSetTransition::class.java, NOT_SET)
                put(WildcardTransition::class.java, WILDCARD)
                put(PrecedencePredicateTransition::class.java, PRECEDENCE)
            }
        })
    }
}


/**
 * Represents the type of recognizer an ATN applies to.
 *
 * @author Sam Harwell
 */
enum class ATNType {

    /**
     * A lexer grammar.
     */
    LEXER,

    /**
     * A parser grammar.
     */
    PARSER

}

/**
 * The following images show the relation of states and
 * [ATNState.transitions] for various grammar constructs.
 *
 *
 *
 *  * Solid edges marked with an &#0949; indicate a required
 * [EpsilonTransition].
 *
 *  * Dashed edges indicate locations where any transition derived from
 * [Transition] might appear.
 *
 *  * Dashed nodes are place holders for either a sequence of linked
 * [BasicState] states or the inclusion of a block representing a nested
 * construct in one of the forms below.
 *
 *  * Nodes showing multiple outgoing alternatives with a `...` support
 * any number of alternatives (one or more). Nodes without the `...` only
 * support the exact number of alternatives shown in the diagram.
 *
 *
 *
 * <h2>Basic Blocks</h2>
 *
 * <h3>Rule</h3>
 *
 * <embed src="images/Rule.svg" type="image/svg+xml"></embed>
 *
 * <h3>Block of 1 or more alternatives</h3>
 *
 * <embed src="images/Block.svg" type="image/svg+xml"></embed>
 *
 * <h2>Greedy Loops</h2>
 *
 * <h3>Greedy Closure: `(...)*`</h3>
 *
 * <embed src="images/ClosureGreedy.svg" type="image/svg+xml"></embed>
 *
 * <h3>Greedy Positive Closure: `(...)+`</h3>
 *
 * <embed src="images/PositiveClosureGreedy.svg" type="image/svg+xml"></embed>
 *
 * <h3>Greedy Optional: `(...)?`</h3>
 *
 * <embed src="images/OptionalGreedy.svg" type="image/svg+xml"></embed>
 *
 * <h2>Non-Greedy Loops</h2>
 *
 * <h3>Non-Greedy Closure: `(...)*?`</h3>
 *
 * <embed src="images/ClosureNonGreedy.svg" type="image/svg+xml"></embed>
 *
 * <h3>Non-Greedy Positive Closure: `(...)+?`</h3>
 *
 * <embed src="images/PositiveClosureNonGreedy.svg" type="image/svg+xml"></embed>
 *
 * <h3>Non-Greedy Optional: `(...)??`</h3>
 *
 * <embed src="images/OptionalNonGreedy.svg" type="image/svg+xml"></embed>
 */
abstract class ATNState {

    /** Which ATN are we in?  */
    var atn: ATN? = null

    var stateNumber = INVALID_STATE_NUMBER

    var ruleIndex: Int = 0 // at runtime, we don't have Rule objects

    var epsilonOnlyTransitions = false

    /** Track the transitions emanating from this ATN state.  */
    protected val transitions: MutableList<Transition> = ArrayList<Transition>(INITIAL_NUM_TRANSITIONS)

    /** Used to cache lookahead during parsing, not used during construction  */
    var nextTokenWithinRule: IntervalSet? = null

    val isNonGreedyExitState: Boolean
        get() = false

    val numberOfTransitions: Int
        get() = transitions.size

    abstract val stateType: Int

    override fun hashCode(): Int {
        return stateNumber
    }

    override fun equals(o: Any?): Boolean {
        // are these states same object?
        return if (o is ATNState) stateNumber == o.stateNumber else false
    }

    override fun toString(): String {
        return stateNumber.toString()
    }

    fun getTransitions(): Array<Transition> {
        return transitions.toTypedArray<Transition>()
    }

    fun addTransition(e: Transition) {
        addTransition(transitions.size, e)
    }

    fun addTransition(index: Int, e: Transition) {
        if (transitions.isEmpty()) {
            epsilonOnlyTransitions = e.isEpsilon()
        } else if (epsilonOnlyTransitions != e.isEpsilon()) {
            System.err.format(Locale.getDefault(), "ATN state %d has both epsilon and non-epsilon transitions.\n", stateNumber)
            epsilonOnlyTransitions = false
        }

        var alreadyPresent = false
        for (t in transitions) {
            if (t.target.stateNumber == e.target.stateNumber) {
                if (t.label() != null && e.label() != null && t.label() == e.label()) {
                    //					System.err.println("Repeated transition upon "+e.label()+" from "+stateNumber+"->"+t.target.stateNumber);
                    alreadyPresent = true
                    break
                } else if (t.isEpsilon() && e.isEpsilon()) {
                    //					System.err.println("Repeated epsilon transition from "+stateNumber+"->"+t.target.stateNumber);
                    alreadyPresent = true
                    break
                }
            }
        }
        if (!alreadyPresent) {
            transitions.add(index, e)
        }
    }

    fun transition(i: Int): Transition {
        return transitions[i]
    }

    fun setTransition(i: Int, e: Transition) {
        transitions[i] = e
    }

    fun removeTransition(index: Int): Transition {
        return transitions.removeAt(index)
    }

    fun onlyHasEpsilonTransitions(): Boolean {
        return epsilonOnlyTransitions
    }

    fun setRuleIndex(ruleIndex: Int) {
        this.ruleIndex = ruleIndex
    }

    companion object {
        val INITIAL_NUM_TRANSITIONS = 4

        // constants for serialization
        val INVALID_TYPE = 0
        val BASIC = 1
        val RULE_START = 2
        val BLOCK_START = 3
        val PLUS_BLOCK_START = 4
        val STAR_BLOCK_START = 5
        val TOKEN_START = 6
        val RULE_STOP = 7
        val BLOCK_END = 8
        val STAR_LOOP_BACK = 9
        val STAR_LOOP_ENTRY = 10
        val PLUS_LOOP_BACK = 11
        val LOOP_END = 12

        val serializationNames = Collections.unmodifiableList(Arrays.asList(
                "INVALID",
                "BASIC",
                "RULE_START",
                "BLOCK_START",
                "PLUS_BLOCK_START",
                "STAR_BLOCK_START",
                "TOKEN_START",
                "RULE_STOP",
                "BLOCK_END",
                "STAR_LOOP_BACK",
                "STAR_LOOP_ENTRY",
                "PLUS_LOOP_BACK",
                "LOOP_END"
        ))

        val INVALID_STATE_NUMBER = -1
    }
}


class ATN
/** Used for runtime deserialization of ATNs from strings  */
(
        /**
         * The type of the ATN.
         */
        val grammarType: ATNType,
        /**
         * The maximum value for any symbol recognized by a transition in the ATN.
         */
        val maxTokenType: Int) {


    val states: MutableList<ATNState> = ArrayList<ATNState>()

    /** Each subrule/rule is a decision point and we must track them so we
     * can go back later and build DFA predictors for them.  This includes
     * all the rules, subrules, optional blocks, ()+, ()* etc...
     */
    val decisionToState: MutableList<DecisionState> = ArrayList<DecisionState>()

    /**
     * Maps from rule index to starting state number.
     */
    var ruleToStartState: Array<RuleStartState>? = null

    /**
     * Maps from rule index to stop state number.
     */
    var ruleToStopState: Array<RuleStopState>? = null


    val modeNameToStartState: Map<String, TokensStartState> = LinkedHashMap<String, TokensStartState>()

    /**
     * For lexer ATNs, this maps the rule index to the resulting token type.
     * For parser ATNs, this maps the rule index to the generated bypass token
     * type if the
     * [ATNDeserializationOptions.isGenerateRuleBypassTransitions]
     * deserialization option was specified; otherwise, this is `null`.
     */
    var ruleToTokenType: IntArray? = null

    /**
     * For lexer ATNs, this is an array of [LexerAction] objects which may
     * be referenced by action transitions in the ATN.
     */
    var lexerActions: Array<LexerAction>? = null

    val modeToStartState: List<TokensStartState> = ArrayList<TokensStartState>()

    val numberOfDecisions: Int
        get() = decisionToState.size

    /** Compute the set of valid tokens that can occur starting in state `s`.
     * If `ctx` is null, the set of tokens will not include what can follow
     * the rule surrounding `s`. In other words, the set will be
     * restricted to tokens reachable staying within `s`'s rule.
     */
    fun nextTokens(s: ATNState, ctx: RuleContext?): IntervalSet {
        val anal = LL1Analyzer(this)
        return anal.LOOK(s, ctx)
    }

    /**
     * Compute the set of valid tokens that can occur starting in `s` and
     * staying in same rule. [Token.EPSILON] is in set if we reach end of
     * rule.
     */
    fun nextTokens(s: ATNState): IntervalSet {
        if (s.nextTokenWithinRule != null) return s.nextTokenWithinRule
        s.nextTokenWithinRule = nextTokens(s, null)
        s.nextTokenWithinRule.setReadonly(true)
        return s.nextTokenWithinRule
    }

    fun addState(state: ATNState?) {
        if (state != null) {
            state!!.atn = this
            state!!.stateNumber = states.size
        }

        states.add(state)
    }

    fun removeState(state: ATNState) {
        states[state.stateNumber] = null // just free mem, don't shift states in list
    }

    fun defineDecisionState(s: DecisionState): Int {
        decisionToState.add(s)
        s.decision = decisionToState.size - 1
        return s.decision
    }

    fun getDecisionState(decision: Int): DecisionState? {
        return if (!decisionToState.isEmpty()) {
            decisionToState[decision]
        } else null
    }

    /**
     * Computes the set of input symbols which could follow ATN state number
     * `stateNumber` in the specified full `context`. This method
     * considers the complete parser context, but does not evaluate semantic
     * predicates (i.e. all predicates encountered during the calculation are
     * assumed true). If a path in the ATN exists from the starting state to the
     * [RuleStopState] of the outermost context without matching any
     * symbols, [Token.EOF] is added to the returned set.
     *
     *
     * If `context` is `null`, it is treated as [ParserRuleContext.EMPTY].
     *
     * Note that this does NOT give you the set of all tokens that could
     * appear at a given token position in the input phrase.  In other words,
     * it does not answer:
     *
     * "Given a specific partial input phrase, return the set of all tokens
     * that can follow the last token in the input phrase."
     *
     * The big difference is that with just the input, the parser could
     * land right in the middle of a lookahead decision. Getting
     * all *possible* tokens given a partial input stream is a separate
     * computation. See https://github.com/antlr/antlr4/issues/1428
     *
     * For this function, we are specifying an ATN state and call stack to compute
     * what token(s) can come next and specifically: outside of a lookahead decision.
     * That is what you want for error reporting and recovery upon parse error.
     *
     * @param stateNumber the ATN state number
     * @param context the full parse context
     * @return The set of potentially valid input symbols which could follow the
     * specified state in the specified context.
     * @throws IllegalArgumentException if the ATN does not contain a state with
     * number `stateNumber`
     */
    fun getExpectedTokens(stateNumber: Int, context: RuleContext): IntervalSet {
        if (stateNumber < 0 || stateNumber >= states.size) {
            throw IllegalArgumentException("Invalid state number.")
        }

        var ctx: RuleContext? = context
        val s = states[stateNumber]
        var following = nextTokens(s)
        if (!following.contains(Token.EPSILON)) {
            return following
        }

        val expected = IntervalSet()
        expected.addAll(following)
        expected.remove(Token.EPSILON)
        while (ctx != null && ctx!!.invokingState >= 0 && following.contains(Token.EPSILON)) {
            val invokingState = states[ctx!!.invokingState]
            val rt = invokingState.transition(0) as RuleTransition
            following = nextTokens(rt.followState)
            expected.addAll(following)
            expected.remove(Token.EPSILON)
            ctx = ctx!!.parent
        }

        if (following.contains(Token.EPSILON)) {
            expected.add(Token.EOF)
        }

        return expected
    }

    companion object {
        val INVALID_ALT_NUMBER = 0
    }
}
