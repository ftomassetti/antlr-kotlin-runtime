package org.antlr.v4.kotlinruntime.facade

actual open class ParserRuleContext {
    actual constructor(parent: ParserRuleContext, invokingStateNumber: Int) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    actual open fun enterRule(listener: ParseTreeListener) {}
    actual open fun exitRule(listener: ParseTreeListener) {}
    actual fun <T : ParserRuleContext> getRuleContext(ctxType: String, i: Int): T? {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    actual fun <T : ParserRuleContext> getRuleContexts(ctxType: String): List<T> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    actual open fun getRuleIndex(): Int {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}