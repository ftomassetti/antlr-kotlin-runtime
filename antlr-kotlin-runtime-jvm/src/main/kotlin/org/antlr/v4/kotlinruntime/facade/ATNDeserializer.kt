package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.Token
import org.antlr.v4.runtime.atn.*
import org.antlr.v4.runtime.atn.ATNDeserializer
import org.antlr.v4.runtime.atn.DecisionState
import org.antlr.v4.runtime.misc.IntervalSet
import org.antlr.v4.runtime.misc.Pair
import java.io.InvalidClassException
import java.util.*


actual class ATNDeserializer : ATNDeserializer{
    actual constructor() {

    }

    actual fun deserialize(serializedATN: String): ATN {
        return ATN(super.deserialize(serializedATN.toCharArray()))
    }

    actual fun deserializeIntegers(serializedIntegersATN: Array<Int>) : ATN {
        val chars = serializedIntegersATN.map { it.toChar() }.toCharArray()
        return deserialize(String(chars))
    }

}