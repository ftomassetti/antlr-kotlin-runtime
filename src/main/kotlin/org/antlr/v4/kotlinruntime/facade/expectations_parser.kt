package org.antlr.v4.kotlinruntime.facade

expect interface TokenStream {
    fun LA(i: Int): Int
    fun LT(k: Int): Token
}

expect abstract class Parser {
    constructor(grammarFileName: String, input: TokenStream)
    fun setCtxStop(token: Token)
    fun getInterpreter() : ATNSimulator
}

expect class ParserATNSimulator : ATNSimulator {

}

expect fun createParserATNSimulator(recog: Parser?, atn: ATN, decisionToDFA: Array<DFA>, sharedContextCache: PredictionContextCache) : ParserATNSimulator

expect interface ParseTreeListener

expect open class ParserRuleContext {
    constructor(parent: ParserRuleContext?, invokingStateNumber: Int)
    constructor()
    open fun enterRule(listener: ParseTreeListener)
    open fun exitRule(listener: ParseTreeListener)
    fun <T : ParserRuleContext> getRuleContext(ctxType: String, i: Int): T?
    fun <T : ParserRuleContext> getRuleContexts(ctxType: String) : List<T>
    open fun getRuleIndex() : Int
}

expect class TerminalNode

expect class ErrorNode

expect class NoViableAltException {
    constructor()
    constructor(parser: Parser)
}

expect class RecognitionException

expect class FailedPredicateException {
    constructor(parser: Parser, message: String)
}