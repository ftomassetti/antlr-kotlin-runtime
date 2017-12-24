package org.antlr.v4.kotlinruntime.facade

actual interface Token{
    actual fun getText(): String
    actual fun getType(): Int
}

data class TokenImpl(val wrapped: org.antlr.v4.runtime.Token) : Token {
    override fun getText(): String {
        return wrapped.getText()
    }

    override fun getType(): Int {
        return wrapped.getType()
    }

}