package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.Parser

actual abstract class Parser {
    private val _grammarFileName: String
    actual constructor(grammarFileName: String, input: TokenStream) {
        this.wrapped = Parser(input)
        this._grammarFileName = grammarFileName
        if (true) TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    protected var _ctx: ParserRuleContext? = null

    open fun getGrammarFileName() : String = _grammarFileName

    open fun enterRule(localctx: ParserRuleContext?, state: Int, ruleIndex: Int) {
        TODO("not implemented")
        //super.enterRule(localctx.wrapped, state, ruleIndex)
    }

    val wrapped: Parser
}