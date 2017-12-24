package org.antlr.v4.kotlinruntime.facade

actual open class ATNSimulator(open val wrapped: org.antlr.v4.runtime.atn.ATNSimulator) {
    //constructor(atn: ATN, sharedContextCache: PredictionContextCache) : super(atn, sharedContextCache)

}