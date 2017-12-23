/*
 * Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

package org.antlr.v4.kotlinruntime.atn

class ActionTransition @JvmOverloads constructor(target: ATNState, val ruleIndex: Int, val actionIndex: Int = -1, val isCtxDependent: Boolean = false // e.g., $i ref in action
) : Transition(target) {

    override fun getSerializationType(): Int {
        return Transition.ACTION
    }

    override fun isEpsilon(): Boolean {
        return true // we are to be ignored by analysis 'cept for predicates
    }

    override fun matches(symbol: Int, minVocabSymbol: Int, maxVocabSymbol: Int): Boolean {
        return false
    }

    override fun toString(): String {
        return "action_$ruleIndex:$actionIndex"
    }
}
