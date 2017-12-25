package org.antlr.v4.kotlinruntime.facade

actual abstract class Lexer {
    actual constructor(grammarFileName: String, input: String) {
        //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        console.log("Lexer")
    }

    actual open fun getGrammarFileName(): String {
        //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        console.log("Lexer.getGrammarFileName")
        return ""
    }

    actual protected fun setInterpreter(interpreter: ATNSimulator) {
        //TODO("not implemented")
        console.log("Lexer.setInterpreter")
    }

    actual final fun getNextToken() : Token {
        //TODO("not implemented")
        console.log("Lexer.getNextToken")
        return object : Token {
            override fun getText(): String {
                //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
                console.log("Lexer.getNextToken getText")
                return ""
            }

            override fun getType(): Int {
                //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
                console.log("Lexer.getNextToken getType")
                return -1
            }
        }
    }
}