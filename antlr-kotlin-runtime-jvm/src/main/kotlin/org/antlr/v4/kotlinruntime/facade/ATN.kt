package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.atn.ATNSerializer
import org.antlr.v4.runtime.atn.ATNType

fun convertATN(javaRuntime: org.antlr.v4.runtime.atn.ATN) {
    ATNSerializer.getSerialized(javaRuntime)
}

actual class ATN(val wrapped: org.antlr.v4.runtime.atn.ATN) {

    final actual fun getNumberOfDecisions() = wrapped.numberOfDecisions

    final actual fun getDecisionState(i: Int) = DecisionState(wrapped.getDecisionState(i))
}