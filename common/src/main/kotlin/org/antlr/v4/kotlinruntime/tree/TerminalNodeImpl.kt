/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

package org.antlr.v4.kotlinruntime.tree

import org.antlr.v4.runtime.Parser
import org.antlr.v4.runtime.RuleContext
import org.antlr.v4.runtime.Token
import org.antlr.v4.runtime.misc.Interval

open class TerminalNodeImpl(override var symbol: Token?) : TerminalNode {
    override var parent: ParseTree

    override val sourceInterval: Interval
        get() {
            if (symbol == null) return Interval.INVALID

            val tokenIndex = symbol!!.getTokenIndex()
            return Interval(tokenIndex, tokenIndex)
        }

    override val childCount: Int
        get() = 0

    override val text: String
        get() = symbol!!.getText()

    override fun getChild(i: Int): ParseTree? {
        return null
    }

    override fun setParent(parent: RuleContext) {
        this.parent = parent
    }

    override fun getPayload(): Token? {
        return symbol
    }

    override fun <T> accept(visitor: ParseTreeVisitor<out T>): T {
        return visitor.visitTerminal(this)
    }

    override fun toStringTree(parser: Parser): String {
        return toString()
    }

    override fun toString(): String {
        return if (symbol!!.getType() === Token.EOF) "<EOF>" else symbol!!.getText()
    }

    override fun toStringTree(): String {
        return toString()
    }
}
