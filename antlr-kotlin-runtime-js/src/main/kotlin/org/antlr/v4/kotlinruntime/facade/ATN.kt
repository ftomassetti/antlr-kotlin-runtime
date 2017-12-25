package org.antlr.v4.kotlinruntime.facade

actual class ATN {
    actual fun getNumberOfDecisions(): Int {
        console.log("ATN.getNumberOfDecisions")
        //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        return 0
    }

    actual fun getDecisionState(i: Int): DecisionState {
        console.log("ATN.getDecisionState")
        //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        return DecisionState()
    }
}