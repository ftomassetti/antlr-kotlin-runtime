package com.strumenta.kotlinmultiplatform

actual class WeakHashMap<K, V> : MutableMap<K, V> {
    override val size: Int
        get() = TODO("WeakHashMap not implemented") //To change initializer of created properties use File | Settings | File Templates.

    override fun containsKey(key: K): Boolean {
        TODO("WeakHashMap not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun containsValue(value: V): Boolean {
        TODO("WeakHashMap not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun get(key: K): V? {
        TODO("WeakHashMap not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun isEmpty(): Boolean {
        TODO("WeakHashMap not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override val entries: MutableSet<MutableMap.MutableEntry<K, V>>
        get() = TODO("WeakHashMap not implemented") //To change initializer of created properties use File | Settings | File Templates.
    override val keys: MutableSet<K>
        get() = TODO("WeakHashMap not implemented") //To change initializer of created properties use File | Settings | File Templates.
    override val values: MutableCollection<V>
        get() = TODO("WeakHashMap not implemented") //To change initializer of created properties use File | Settings | File Templates.

    override fun clear() {
        TODO("WeakHashMap not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun put(key: K, value: V): V? {
        TODO("WeakHashMap not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun putAll(from: Map<out K, V>) {
        TODO("WeakHashMap not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun remove(key: K): V? {
        TODO("WeakHashMap not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    actual constructor() {
        TODO("WeakHashMap not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}