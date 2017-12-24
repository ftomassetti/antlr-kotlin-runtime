package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.VocabularyImpl
import org.antlr.v4.runtime.atn.*
import org.antlr.v4.runtime.atn.ATNDeserializer
import org.antlr.v4.runtime.atn.LexerATNSimulator

actual abstract class Lexer(input: CharStream) : org.antlr.v4.runtime.Lexer(input) {

    actual protected abstract var interpreter : ATNSimulator

    actual abstract fun getGrammarFileName(): String
}

actual abstract class CharStream : org.antlr.v4.runtime.CharStream {

}

actual abstract class DecisionState : org.antlr.v4.runtime.atn.DecisionState()

actual class DFA(atnStartState: DecisionState, decision: Int = 0) : org.antlr.v4.runtime.dfa.DFA(atnStartState, decision) {
}

actual class PredictionContextCache : org.antlr.v4.runtime.atn.PredictionContextCache()

actual class ATN(grammarType: ATNType, maxTokenType: Int) : org.antlr.v4.runtime.atn.ATN(grammarType, maxTokenType){
}

actual class ATNDeserializer : ATNDeserializer()

actual class VocabularyImpl(literalNames: List<String?>, symbolicNames: List<String?>) : VocabularyImpl(literalNames.toTypedArray(), symbolicNames.toTypedArray())

actual abstract class ATNSimulator(atn: ATN, sharedContextCache: PredictionContextCache) : org.antlr.v4.runtime.atn.ATNSimulator(atn, sharedContextCache)

actual class LexerATNSimulator(recog: Lexer, atn: ATN, decisionToDFA: Array<DFA>,
                               sharedContextCache: PredictionContextCache ) : LexerATNSimulator(recog, atn, decisionToDFA, sharedContextCache) {
}