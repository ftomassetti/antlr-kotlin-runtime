package com.strumenta.kotlinmultiplatform

import java.util.Arrays

actual object Arrays {
    actual fun <T> asList(vararg elements: T): List<T> {
        return Arrays.asList(*elements)
    }
}