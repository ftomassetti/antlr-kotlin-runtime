package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.ANTLRInputStream

actual abstract class Lexer : org.antlr.v4.runtime.Lexer {
    private val _grammarFileName: String
    actual constructor(grammarFileName: String, input: String) : super(ANTLRInputStream(input)){
        this._grammarFileName = grammarFileName
    }

    actual override open fun getGrammarFileName() = _grammarFileName

    protected actual var interpreter: ATNSimulator
        get() = TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        set(value) {}
}