package com.strumenta.kotlinmultiplatform

//expect fun <T> Array<T>.indices() : List<Int>
//
//expect fun IntArray.indices() : List<Int>
//
//expect fun String.toCharArray() : CharArray
//
//expect class RuntimeException : Throwable {
//    constructor(message: String)
//}
//
//expect fun assert(condition: Boolean)
//
actual object Arrays {
    //    fun <T> equals(a: Array<T>, b: Array<T>): Boolean
//    fun equals(a: IntArray, b: IntArray): Boolean
    actual fun <T> asList(vararg elements: T): List<T> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}