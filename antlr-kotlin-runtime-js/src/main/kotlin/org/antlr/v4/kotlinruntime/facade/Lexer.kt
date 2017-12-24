package org.antlr.v4.kotlinruntime.facade

actual abstract class Lexer {
    actual constructor(grammarFileName: String, input: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    actual open fun getGrammarFileName(): String {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    actual protected fun setInterpreter(interpreter: ATNSimulator) {
        TODO("not implemented")
    }

    actual final fun getNextToken() : Token {
        TODO("not implemented")
    }
}