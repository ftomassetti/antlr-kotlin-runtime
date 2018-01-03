package com.strumenta.kotlinmultiplatform

import kotlin.math.roundToInt

actual object Math {
    actual fun min(a: Int, b: Int): Int {
        return if (a <= b) a else b
    }

    actual fun max(a: Int, b: Int): Int {
        return if (a >= b) a else b
    }

    actual fun floor(d: Double): Double {
        return kotlin.js.Math.floor(d).toDouble()
    }

}