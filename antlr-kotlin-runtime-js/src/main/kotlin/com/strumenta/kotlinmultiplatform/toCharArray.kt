package com.strumenta.kotlinmultiplatform

actual fun String.toCharArray(): CharArray {

    return this.split("").map { it[0] }.toCharArray()
    //TODO("String.toCharArray not implemented") //To change body of created functions use File | Settings | File Templates.
}