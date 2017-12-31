package com.strumenta.kotlinmultiplatform

import java.util.Arrays


actual fun <T> Array<T>.indices(): List<Int> {
    TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
}

actual fun IntArray.indices(): List<Int> {
    TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
}


actual object Arrays {
    actual fun <T> asList(vararg elements: T): List<T> {
        return java.util.Arrays.asList(*elements)
    }
    actual fun <T> copyOf(original: Array<T>, size: Int): Array<T> {
        TODO()
    }

    actual fun equals(a: Array<*>, b: Array<*>) : Boolean {
        TODO()
    }

    actual fun toString(a: Array<*>): String {
        kotlin.TODO()
    }
}