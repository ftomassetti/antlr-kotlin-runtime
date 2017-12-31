package org.antlr.v4.kotlinruntime

actual class ATN {

    val wrapped : dynamic

    constructor(wrapped: dynamic) {
        this.wrapped = wrapped
    }

    actual fun getNumberOfDecisions(): Int {
        return wrapped.decisionToState.length
    }

    actual fun getDecisionState(i: Int): DecisionState {
        return wrapped.decisionToState[i]
    }
}