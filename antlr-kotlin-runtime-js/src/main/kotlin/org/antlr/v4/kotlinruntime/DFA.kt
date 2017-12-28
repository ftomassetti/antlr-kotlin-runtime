package org.antlr.v4.kotlinruntime.facade

actual fun createDFA(atnStartState: DecisionState, decision: Int): DFA {
    return DFA(atnStartState, decision)
}

actual class DFA {

    val wrapped: dynamic

    constructor(atnStartState: DecisionState, decision: Int = 0) {
        wrapped = js("new window.antlr4.dfa.DFA(atnStartState.wrapped, decision)")
    }
}