package org.antlr.v4.kotlinruntime.facade

actual fun createLexerATNSimulator(recog: Lexer?, atn: ATN, decisionToDFA: Array<DFA>, sharedContextCache: PredictionContextCache) : LexerATNSimulator {
    return LexerATNSimulator(org.antlr.v4.runtime.atn.LexerATNSimulator(recog, atn.wrapped, decisionToDFA.map { it.wrapped }.toTypedArray(), sharedContextCache))
}

actual class LexerATNSimulator(override val wrapped: org.antlr.v4.runtime.atn.LexerATNSimulator) : ATNSimulator(wrapped)