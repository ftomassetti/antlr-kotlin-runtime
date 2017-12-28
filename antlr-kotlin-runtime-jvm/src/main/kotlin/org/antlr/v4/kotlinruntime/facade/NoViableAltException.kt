package org.antlr.v4.kotlinruntime.facade

actual class NoViableAltException : RuntimeException {
    actual constructor() : super()
    actual constructor(parser: Parser) : super()
}