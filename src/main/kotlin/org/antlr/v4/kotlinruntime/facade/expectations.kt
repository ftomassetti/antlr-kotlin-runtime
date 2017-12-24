package org.antlr.v4.kotlinruntime.facade

expect abstract class Lexer {
    constructor(grammarFileName: String, input: String)
    open fun getGrammarFileName() : String
    protected var interpreter : ATNSimulator
}

expect abstract class CharStream

expect abstract class DecisionState

expect class DFA {
    constructor(atnStartState: DecisionState, decision: Int = 0)
}

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
}

expect class VocabularyImpl {
    constructor(literalNames: List<String?>, symbolicNames: List<String?>)
}

expect abstract open class ATNSimulator

expect class LexerATNSimulator : ATNSimulator {
    constructor(recog: Lexer?, atn: ATN, decisionToDFA: Array<DFA>, sharedContextCache: PredictionContextCache)
}