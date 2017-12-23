package com.strumenta.kotlinmultiplatform

expect fun <T> Array<T>.indices() : List<Int>

expect fun String.toCharArray() : CharArray

expect class RuntimeException : Throwable {
    constructor(message: String)
}