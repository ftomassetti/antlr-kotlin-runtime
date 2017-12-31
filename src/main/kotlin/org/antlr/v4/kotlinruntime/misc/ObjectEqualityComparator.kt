/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
package org.antlr.v4.kotlinruntime.misc

/**
 * This default implementation of [EqualityComparator] uses object equality
 * for comparisons by calling [Object.hashCode] and [Object.equals].
 *
 * @author Sam Harwell
 */
class ObjectEqualityComparator<in T> : AbstractEqualityComparator<T>() {
    override fun hashCode(obj: T): Int {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun equals(a: T?, b: T?): Boolean {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    /**
     * {@inheritDoc}
     *
     *
     * This implementation returns
     * `obj.`[hashCode()][Object.hashCode].
     */
    fun hashCode(obj: Any?): Int {
        return obj?.hashCode() ?: 0

    }



    /**
     * {@inheritDoc}
     *
     *
     * This implementation relies on object equality. If both objects are
     * `null`, this method returns `true`. Otherwise if only
     * `a` is `null`, this method returns `false`. Otherwise,
     * this method returns the result of
     * `a.`[equals][Object.equals]`(b)`.
     */
    fun equals(a: Any?, b: Any?): Boolean {
        return if (a == null) {
            b == null
        } else a == b

    }


    companion object {
        val INSTANCE = ObjectEqualityComparator<Any?>()
    }

}
