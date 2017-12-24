package org.antlr.v4.kotlinruntime.facade

actual abstract class CharStream : org.antlr.v4.runtime.CharStream

actual class DecisionState(val wrapped: org.antlr.v4.runtime.atn.DecisionState)

//actual class DFA(atnStartState: DecisionState, decision: Int = 0) : org.antlr.v4.runtime.dfa.DFA(atnStartState, decision) {
//}
//
//actual class ATN(grammarType: ATNType, maxTokenType: Int) : org.antlr.v4.runtime.atn.ATN(grammarType, maxTokenType){
//}
//
//actual class ATNDeserializer : ATNDeserializer()
//
//actual class VocabularyImpl(literalNames: List<String?>, symbolicNames: List<String?>) : VocabularyImpl(literalNames.toTypedArray(), symbolicNames.toTypedArray())
//
//actual abstract class ATNSimulator(atn: ATN, sharedContextCache: PredictionContextCache) : org.antlr.v4.runtime.atn.ATNSimulator(atn, sharedContextCache)
//
//actual class LexerATNSimulator(recog: Lexer, atn: ATN, decisionToDFA: Array<DFA>,
//                               sharedContextCache: PredictionContextCache ) : LexerATNSimulator(recog, atn, decisionToDFA, sharedContextCache) {
//}