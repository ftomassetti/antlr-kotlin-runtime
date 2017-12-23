package org.antlr.v4.kotlinruntime.facade

expect open class Lexer {
    constructor(input: CharStream)
    open val grammarFileName : String
    protected var interpreter : ATNSimulator
}

expect class CharStream {

}

expect class DecisionState {

}

expect class DFA {
    constructor(atnStartState: DecisionState, decision: Int = 0)
}

expect class PredictionContextCache {
    constructor()
}

expect class ATN {
    val numberOfDecisions : Int
    fun getDecisionState(i: Int): DecisionState
}

expect class ATNDeserializer {
    constructor()
    fun deserialize(serializedATN: String) : ATN
}

expect class VocabularyImpl {
    constructor(literalNames: List<String?>, symbolicNames: List<String?>)
}

expect open class ATNSimulator

expect class LexerATNSimulator : ATNSimulator {
    constructor(recog: Lexer?, atn: ATN, decisionToDFA: Array<DFA>, sharedContextCache: PredictionContextCache)
}