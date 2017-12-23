/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

package org.antlr.v4.kotlinruntime.tree.pattern

import org.antlr.v4.runtime.CommonToken
import org.antlr.v4.runtime.Token

/**
 * A [Token] object representing a token of a particular type; e.g.,
 * `<ID>`. These tokens are created for [TagChunk] chunks where the
 * tag corresponds to a lexer rule or token type.
 */
class TokenTagToken
/**
 * Constructs a new instance of [TokenTagToken] with the specified
 * token name, type, and label.
 *
 * @param tokenName The token name.
 * @param type The token type.
 * @param label The label associated with the token tag, or `null` if
 * the token tag is unlabeled.
 */
@JvmOverloads constructor(
        /**
         * This is the backing field for [.getTokenName].
         */

        /**
         * Gets the token name.
         * @return The token name.
         */

        val tokenName: String, type: Int,
        /**
         * This is the backing field for [.getLabel].
         */

        /**
         * Gets the label associated with the rule tag.
         *
         * @return The name of the label associated with the rule tag, or
         * `null` if this is an unlabeled rule tag.
         */

        val label: String? = null) : CommonToken(type) {

    /**
     * {@inheritDoc}
     *
     *
     * The implementation for [TokenTagToken] returns the token tag
     * formatted with `<` and `>` delimiters.
     */
    val text: String
        get() = if (label != null) {
            "<$label:$tokenName>"
        } else "<$tokenName>"

    /**
     * {@inheritDoc}
     *
     *
     * The implementation for [TokenTagToken] returns a string of the form
     * `tokenName:type`.
     */
    fun toString(): String {
        return tokenName + ":" + type
    }
}
/**
 * Constructs a new instance of [TokenTagToken] for an unlabeled tag
 * with the specified token name and type.
 *
 * @param tokenName The token name.
 * @param type The token type.
 */
