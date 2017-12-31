/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

package org.antlr.v4.kotlinruntime

interface WritableToken : Token {

    override var text: String?

    fun setText(text: String)

    fun setType(ttype: Int)

    fun setLine(line: Int)

    fun setCharPositionInLine(pos: Int)

    fun setChannel(channel: Int)

    fun setTokenIndex(index: Int)
}
