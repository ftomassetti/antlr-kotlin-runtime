package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.IntStream
import org.antlr.v4.runtime.ParserRuleContext
import org.antlr.v4.runtime.Recognizer

actual class RecognitionException : org.antlr.v4.runtime.RecognitionException {
    constructor(recognizer: Recognizer<*, *>?,
                             input: IntStream,
                             ctx: ParserRuleContext) : super(recognizer, input, ctx)

    constructor(message: String,
                             recognizer: Recognizer<*, *>,
                             input: IntStream,
                             ctx: ParserRuleContext) : super(message, recognizer, input, ctx)
}