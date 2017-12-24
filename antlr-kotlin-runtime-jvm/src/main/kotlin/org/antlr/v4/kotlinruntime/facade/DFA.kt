package org.antlr.v4.kotlinruntime.facade

actual class DFA : org.antlr.v4.runtime.dfa.DFA{
    actual constructor(atnStartState: DecisionState, decision: Int = 0) : super(atnStartState, decision)
}