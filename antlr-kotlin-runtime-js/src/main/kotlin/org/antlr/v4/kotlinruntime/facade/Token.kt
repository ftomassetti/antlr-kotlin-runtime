package org.antlr.v4.kotlinruntime.facade

actual interface Token {
    actual fun getText(): String
    actual fun getType(): Int
}