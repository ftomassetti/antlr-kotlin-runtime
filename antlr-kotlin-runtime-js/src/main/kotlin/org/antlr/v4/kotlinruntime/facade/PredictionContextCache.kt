package org.antlr.v4.kotlinruntime.facade

actual class PredictionContextCache {
    val wrapped: dynamic

    actual constructor() {
        wrapped = js("new window.antlr4.PredictionContextCache()")
    }
}