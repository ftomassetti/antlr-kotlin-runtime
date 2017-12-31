package com.strumenta.kotlinmultiplatform

expect fun <T> Array<T>.indices() : List<Int>

expect fun IntArray.indices() : List<Int>

expect fun String.toCharArray() : CharArray

expect class RuntimeException : Throwable {
    constructor(message: String)
}

expect fun assert(condition: Boolean)

expect object Arrays {
//    fun <T> equals(a: Array<T>, b: Array<T>): Boolean
//    fun equals(a: IntArray, b: IntArray): Boolean
    fun <T> asList(vararg elements: T): List<T>

    fun <T> copyOf(original: Array<T>, size: Int): Array<T>

    fun equals(a: Array<*>, b: Array<*>) : Boolean

    fun toString(a: Array<*>): String
}

expect class BitSet {
    constructor()

    fun set(value: Int)
    fun clear(ruleIndex: Int)
    fun get(ruleIndex: Int): Boolean
    fun cardinality(): Int
    fun nextSetBit(i: Int): Int
    fun or(alts: BitSet)
}

//expect class ArrayList<T> : List<T>

expect object Collections {
    fun unmodifiableList(asList: Any): Any
    fun <T, U> unmodifiableMap(t: T): U
    fun <T : Comparable<T>>min(precedencePredicates: List<T>): T
    fun <T : Comparable<T>>max(precedencePredicates: List<T>): T

}

object Math {

    fun min(a: Int, b: Int) : Int {
        TODO()
    }

    fun max(a: Int, b: Int) : Int {
        TODO()
    }

    fun floor(d: Double): Double {
        TODO()
    }
}

fun Char.Companion.isUpperCase(firstChar: Char): Boolean {
    TODO()
}

fun Char.Companion.isLowerCase(firstChar: Char): Boolean {
    TODO()
}

//expect open class CopyOnWriteArrayList<T> : MutableList<T> {
//
//}

expect class NullPointerException : Throwable {
    constructor()
    constructor(message: String)
}

expect class WeakHashMap<K, V> {
    constructor()
}

expect class IdentityHashMap<K, V> : MutableMap<K, V> {
    constructor()
}

expect class UUID {
    companion object {
        fun fromString(encoded: String) : UUID
    }
}

expect fun errMessage(message: String)
expect fun outMessage(message: String)

expect fun Char.Companion.isSupplementaryCodePoint(codePoint: Int): Boolean

expect fun Char.Companion.toChars(codePoint: Int, resultArray: CharArray, resultIdx: Int): Int

expect fun Char.Companion.charCount(i: Int): Byte

expect fun <T> Array<T>.clone(): Array<T>