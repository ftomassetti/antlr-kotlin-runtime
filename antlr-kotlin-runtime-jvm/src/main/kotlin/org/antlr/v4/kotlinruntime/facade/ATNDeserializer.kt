package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.atn.ATNDeserializer

actual class ATNDeserializer : ATNDeserializer{
    actual constructor() {

    }

    actual fun deserialize(serializedATN: String): ATN {
        return super.deserialize(serializedATN.toCharArray()) as ATN
    }
}