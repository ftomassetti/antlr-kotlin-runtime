package com.strumenta.kotlinmultiplatform

actual fun String.toCharArray(): CharArray {
    val res = CharArray(this.length) {
        this[it]
    }
    return res
}