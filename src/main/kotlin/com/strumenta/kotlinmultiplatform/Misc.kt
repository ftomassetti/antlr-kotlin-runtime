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
expect object Arrays {
//    fun <T> equals(a: Array<T>, b: Array<T>): Boolean
//    fun equals(a: IntArray, b: IntArray): Boolean
    fun <T> asList(vararg elements: T): List<T>
}
//
//expect class BitSet {
//
//}
//
//expect class ArrayList<T> : List<T>
//
//expect object Collections {
//    fun unmodifiableList(asList: Any): Any
//    fun <T, U> unmodifiableMap(t: T): U
//
//}