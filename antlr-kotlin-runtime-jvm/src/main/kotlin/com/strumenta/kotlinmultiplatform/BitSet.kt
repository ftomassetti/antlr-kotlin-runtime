package com.strumenta.kotlinmultiplatform

actual class BitSet {
    private val _wrapped = java.util.BitSet()

    actual constructor() {

    }

    actual fun set(value: Int) {
        _wrapped.set(value)
    }
    actual fun clear(ruleIndex: Int) {
        _wrapped.clear(ruleIndex)
    }
    actual fun get(ruleIndex: Int): Boolean {
        return _wrapped.get(ruleIndex)
    }

    actual fun cardinality(): Int {
        return _wrapped.cardinality()
    }

    actual fun nextSetBit(i: Int): Int {
        return _wrapped.nextSetBit(i)
    }

    actual fun or(alts: BitSet) {
        return _wrapped.or(alts._wrapped)
    }

}