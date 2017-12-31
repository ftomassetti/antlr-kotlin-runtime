package org.antlr.v4.kotlinruntime

actual fun createLexerATNSimulator(recog: Lexer?, atn: ATN, decisionToDFA: Array<DFA>, sharedContextCache: PredictionContextCache) : LexerATNSimulator {
    val decisionToDFAunwrapped = decisionToDFA.map { it.wrapped }.toTypedArray()
    val atnWrapped = atn.wrapped
    val recogWwrapped = recog?.wrapped
    val sharedContextCacheWrapped = sharedContextCache.wrapped
    return LexerATNSimulator(js("new window.antlr4.atn.LexerATNSimulator(recogWwrapped, atnWrapped, decisionToDFAunwrapped, sharedContextCacheWrapped)"))
}

actual class LexerATNSimulator : ATNSimulator {
    val wrapped: dynamic

    constructor(wrapped: dynamic) : super() {
        this.wrapped = wrapped
    }
}