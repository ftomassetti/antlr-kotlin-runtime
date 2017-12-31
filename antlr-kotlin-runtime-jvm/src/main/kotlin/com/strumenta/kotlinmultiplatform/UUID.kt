package com.strumenta.kotlinmultiplatform

actual class UUID(val value : String) {

    actual companion object {
        actual fun fromString(encoded: String) : UUID {
            return UUID(encoded)
        }
    }
}