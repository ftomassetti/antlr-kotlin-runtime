package com.strumenta.kotlinmultiplatform

actual class UUID {
    actual constructor(most: Long, least: Long) {

    }
    actual companion object {
        actual fun fromString(encoded: String) : UUID {
            TODO()
        }
    }
}