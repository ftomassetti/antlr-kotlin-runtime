/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
package org.antlr.v4.kotlinruntime

import org.antlr.v4.runtime.atn.ATNState
import org.antlr.v4.runtime.atn.AbstractPredicateTransition
import org.antlr.v4.runtime.atn.PredicateTransition

import java.util.Locale

/** A semantic predicate failed during validation.  Validation of predicates
 * occurs when normally parsing the alternative just like matching a token.
 * Disambiguating predicate evaluation occurs when we test a predicate during
 * prediction.
 */
class FailedPredicateException @JvmOverloads constructor(recognizer: Parser,
                                                         val predicate: String? = null,
                                                         message: String? = null) : RecognitionException(formatMessage(predicate, message), recognizer, recognizer.inputStream, recognizer.context) {
    val ruleIndex: Int
    val predIndex: Int

    init {
        val s = recognizer.interpreter.atn.states.get(recognizer.state)

        val trans = s.transition(0) as AbstractPredicateTransition
        if (trans is PredicateTransition) {
            this.ruleIndex = (trans as PredicateTransition).ruleIndex
            this.predIndex = (trans as PredicateTransition).predIndex
        } else {
            this.ruleIndex = 0
            this.predIndex = 0
        }
        this.offendingToken = recognizer.currentToken
    }


    private fun formatMessage(predicate: String?, message: String?): String {
        return message ?: String.format(Locale.getDefault(), "failed predicate: {%s}?", predicate)

    }
}
