/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

package org.antlr.v4.kotlinruntime.misc

import org.antlr.v4.kotlinruntime.BailErrorStrategy
import org.antlr.v4.kotlinruntime.RecognitionException

import java.util.concurrent.CancellationException

/**
 * This exception is thrown to cancel a parsing operation. This exception does
 * not extend [RecognitionException], allowing it to bypass the standard
 * error recovery mechanisms. [BailErrorStrategy] throws this exception in
 * response to a parse error.
 *
 * @author Sam Harwell
 */
class ParseCancellationException : CancellationException {

    constructor() {}

    constructor(message: String) : super(message) {}

    constructor(cause: Throwable) {
        initCause(cause)
    }

    constructor(message: String, cause: Throwable) : super(message) {
        initCause(cause)
    }

}
