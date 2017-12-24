package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.atn.ATNType

actual class ATN(grammarType: ATNType, maxTokenType: Int) : org.antlr.v4.runtime.atn.ATN(grammarType, maxTokenType) {

    final actual override fun getNumberOfDecisions() : Int = super.getNumberOfDecisions()

    final actual override fun getDecisionState(i: Int): DecisionState {
        return super.getDecisionState(i) as DecisionState
    }
}