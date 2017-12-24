package org.antlr.v4.kotlinruntime.facade

actual fun createDFA(atnStartState: DecisionState, decision: Int): DFA {
    return DFA(org.antlr.v4.runtime.dfa.DFA(atnStartState.wrapped, decision))
}

actual class DFA(val wrapped: org.antlr.v4.runtime.dfa.DFA)