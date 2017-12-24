package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.Token

actual interface Token : Token{
    actual override fun getText(): String
    actual override fun getType(): Int
}