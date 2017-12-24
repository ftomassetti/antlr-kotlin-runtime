package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.ANTLRInputStream
import org.antlr.v4.runtime.atn.ATN
import org.antlr.v4.runtime.atn.LexerATNSimulator

actual abstract class Lexer : org.antlr.v4.runtime.Lexer {
    private val _grammarFileName: String
    actual constructor(grammarFileName: String, input: String) : super(ANTLRInputStream(input)){
        this._grammarFileName = grammarFileName
    }

    actual override open fun getGrammarFileName() = _grammarFileName

    actual protected fun setInterpreter(interpreter: ATNSimulator) {
        _interp = interpreter.wrapped as LexerATNSimulator
    }

    //protected actual var interpreter: ATNSimulator
    //    get() = TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    //    set(value) { _interp = value.wrapped as LexerATNSimulator; field = interpreter}

    actual final fun getNextToken() : Token {
        return TokenImpl(super.nextToken())
    }

    override fun getATN(): ATN {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun getRuleNames(): Array<String> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}