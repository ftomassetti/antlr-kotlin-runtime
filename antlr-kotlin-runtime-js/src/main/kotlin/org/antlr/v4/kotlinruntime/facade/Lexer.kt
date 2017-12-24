package org.antlr.v4.kotlinruntime.facade

actual abstract class Lexer {
    actual constructor(grammarFileName: String, input: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    actual open fun getGrammarFileName(): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    protected actual var interpreter: ATNSimulator
        get() = TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        set(value) {}
}