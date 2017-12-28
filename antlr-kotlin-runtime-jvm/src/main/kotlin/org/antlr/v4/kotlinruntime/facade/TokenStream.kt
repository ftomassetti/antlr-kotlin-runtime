package org.antlr.v4.kotlinruntime.facade

actual interface TokenStream {
    val wrapped: org.antlr.v4.runtime.TokenStream

    actual fun LA(i: Int): Int
    actual fun LT(k: Int): Token
}

class TokenStreamImpl(override val wrapped: org.antlr.v4.runtime.TokenStream): TokenStream {
    override fun LA(i: Int): Int = wrapped.LA(i)
    override fun LT(k: Int): Token {
        val w = wrapped.LT(k)
        return TokenImpl(w)
    }

}