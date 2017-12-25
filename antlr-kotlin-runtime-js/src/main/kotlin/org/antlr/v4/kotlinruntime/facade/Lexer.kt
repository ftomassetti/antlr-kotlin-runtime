package org.antlr.v4.kotlinruntime.facade

actual abstract class Lexer {
    private val grammarFileName : String
    val wrapped : dynamic

    actual constructor(grammarFileName: String, input: String) {
        this.grammarFileName = grammarFileName
        this.wrapped = js("new window.antlr4.Lexer(new window.antlr4.InputStream(input))")
    }

    actual open fun getGrammarFileName(): String {
        return grammarFileName
    }

    actual protected fun setInterpreter(interpreter: ATNSimulator) {
        wrapped._interp = (interpreter as LexerATNSimulator).wrapped
    }

    actual final fun getNextToken() : Token {
        val tokenWrapped = wrapped.nextToken()
        //console.log("TokenWrapped= $tokenWrapped")

        //TODO("not implemented")
        //console.log("Lexer.getNextToken")
        return TokenImpl(tokenWrapped.type, tokenWrapped.text)
    }
}