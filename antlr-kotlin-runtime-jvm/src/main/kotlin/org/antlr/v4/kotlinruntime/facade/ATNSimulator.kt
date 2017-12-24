package org.antlr.v4.kotlinruntime.facade

actual abstract open class ATNSimulator : org.antlr.v4.runtime.atn.ATNSimulator {
    constructor(atn: ATN, sharedContextCache: PredictionContextCache) : super(atn, sharedContextCache)

    override fun reset() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}