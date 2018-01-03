package com.strumenta.kotlinmultiplatform

actual fun assert(condition: Boolean) {
    if (!condition) throw RuntimeException("Assertion failed")
}