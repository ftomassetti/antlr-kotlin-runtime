package org.antlr.v4.kotlinruntime.facade

actual class LexerATNSimulator : ATNSimulator {
    actual constructor(recog: Lexer?, atn: ATN, decisionToDFA: Array<DFA>, sharedContextCache: PredictionContextCache)
            : super(atn, sharedContextCache)
}