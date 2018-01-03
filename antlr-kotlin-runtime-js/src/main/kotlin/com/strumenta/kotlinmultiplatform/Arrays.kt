package com.strumenta.kotlinmultiplatform

actual object Arrays {

    actual fun <T> asList(vararg elements: T): List<T> {
        return elements.asList()
    }

    actual fun <T> copyOf(original: Array<T>, size: Int): Array<T> {
        TODO()
    }

    actual fun equals(a: Array<*>, b: Array<*>) : Boolean {
        TODO()
    }

    actual fun toString(a: Array<*>): String {
        TODO()
    }
}