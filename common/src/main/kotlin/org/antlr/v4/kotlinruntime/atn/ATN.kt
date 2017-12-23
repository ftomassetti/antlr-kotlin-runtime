/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

package org.antlr.v4.kotlinruntime.atn

import org.antlr.v4.runtime.ParserRuleContext
import org.antlr.v4.runtime.RuleContext
import org.antlr.v4.runtime.Token
import org.antlr.v4.runtime.misc.IntervalSet

import java.util.ArrayList
import java.util.LinkedHashMap

/**  */
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
    fun nextTokens(s: ATNState): IntervalSet? {
        if (s.nextTokenWithinRule != null) return s.nextTokenWithinRule
        s.nextTokenWithinRule = nextTokens(s, null)
        s.nextTokenWithinRule!!.setReadonly(true)
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
        if (!following!!.contains(Token.EPSILON)) {
            return following
        }

        val expected = IntervalSet()
        expected.addAll(following)
        expected.remove(Token.EPSILON)
        while (ctx != null && ctx!!.invokingState >= 0 && following!!.contains(Token.EPSILON)) {
            val invokingState = states[ctx!!.invokingState]
            val rt = invokingState.transition(0) as RuleTransition
            following = nextTokens(rt.followState)
            expected.addAll(following)
            expected.remove(Token.EPSILON)
            ctx = ctx!!.parent
        }

        if (following!!.contains(Token.EPSILON)) {
            expected.add(Token.EOF)
        }

        return expected
    }

    companion object {
        val INVALID_ALT_NUMBER = 0
    }
}
