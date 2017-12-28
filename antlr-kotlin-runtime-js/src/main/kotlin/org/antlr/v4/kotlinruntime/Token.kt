package org.antlr.v4.kotlinruntime.facade

actual interface Token {
    actual fun getText(): String
    actual fun getType(): Int
}

data class TokenImpl(val type: Int, val text: String) : Token {
    override fun getText() = text

    override fun getType() = type
}