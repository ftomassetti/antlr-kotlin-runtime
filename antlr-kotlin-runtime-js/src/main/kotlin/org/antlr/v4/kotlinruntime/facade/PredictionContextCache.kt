package org.antlr.v4.kotlinruntime.facade

actual class PredictionContextCache {
    private val wrapped: dynamic

    actual constructor() {
        wrapped = js("new window.antlr4.PredictionContextCache()")
    }
}