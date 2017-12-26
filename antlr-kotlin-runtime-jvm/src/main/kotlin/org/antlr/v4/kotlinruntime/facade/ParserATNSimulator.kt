package org.antlr.v4.kotlinruntime.facade

actual fun createParserATNSimulator(recog: Parser?, atn: ATN, decisionToDFA: Array<DFA>, sharedContextCache: PredictionContextCache): ParserATNSimulator {
    return ParserATNSimulator(org.antlr.v4.runtime.atn.ParserATNSimulator(recog, atn.wrapped, decisionToDFA.map { it.wrapped }.toTypedArray(), sharedContextCache))
}

actual class ParserATNSimulator(override val wrapped: org.antlr.v4.runtime.atn.ParserATNSimulator) : ATNSimulator(wrapped)