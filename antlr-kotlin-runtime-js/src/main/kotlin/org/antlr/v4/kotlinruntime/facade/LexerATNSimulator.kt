package org.antlr.v4.kotlinruntime.facade

actual fun createLexerATNSimulator(recog: Lexer?, atn: ATN, decisionToDFA: Array<DFA>, sharedContextCache: PredictionContextCache) : LexerATNSimulator {
    //TODO("Not implemented")
    console.log("createLexerATNSimulator")
    return LexerATNSimulator()
}

actual class LexerATNSimulator : ATNSimulator()