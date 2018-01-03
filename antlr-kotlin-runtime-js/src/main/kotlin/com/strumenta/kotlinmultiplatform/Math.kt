package com.strumenta.kotlinmultiplatform

actual object Math {
    actual fun min(a: Int, b: Int): Int {
        return if (a <= b) a else b
    }

    actual fun max(a: Int, b: Int): Int {
        return if (a >= b) a else b
    }

    actual fun floor(d: Double): Double {
        TODO("Math not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}