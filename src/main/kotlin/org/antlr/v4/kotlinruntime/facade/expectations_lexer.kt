package org.antlr.v4.kotlinruntime.facade

expect interface Token {
    fun getText() : String
    fun getType() : Int
}

expect abstract class Lexer {
    constructor(grammarFileName: String, input: String)
    open fun getGrammarFileName() : String
    protected fun setInterpreter(interpreter: ATNSimulator)
    fun getNextToken() : Token
}

expect abstract class CharStream

expect class DecisionState

expect class DFA

expect fun createDFA(atnStartState: DecisionState, decision: Int) : DFA
fun createDFA(atnStartState: DecisionState) = createDFA(atnStartState, 0)

expect class PredictionContextCache {
    constructor()
}

expect class ATN {
    fun getNumberOfDecisions() : Int
    fun getDecisionState(i: Int): DecisionState
}

expect class ATNDeserializer {
    constructor()
    fun deserialize(serializedATN: String) : ATN
    fun deserializeIntegers(serializedIntegersATN: Array<Int>) : ATN
}

expect class VocabularyImpl {
    constructor(literalNames: List<String?>, symbolicNames: List<String?>)
}

expect open class ATNSimulator {
    fun adaptivePredict(input: TokenStream, decision: Int,
                        outerContext: ParserRuleContext): Int
}

expect class LexerATNSimulator : ATNSimulator

expect fun createLexerATNSimulator(recog: Lexer?, atn: ATN, decisionToDFA: Array<DFA>, sharedContextCache: PredictionContextCache) : LexerATNSimulator