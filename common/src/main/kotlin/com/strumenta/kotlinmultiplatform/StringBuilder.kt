package com.strumenta.kotlinmultiplatform

expect class StringBuilder {
    constructor()

    fun <T> append(t: T)
}