package org.antlr.v4.kotlinruntime

actual class ATNDeserializer {

    private val wrapped: dynamic

    actual constructor() {
        wrapped = js("new window.antlr4.atn.ATNDeserializer()")
    }

    actual fun deserialize(serializedATN: String): ATN {
        //console.log("ATNDeserializer.deserialize")
        //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        //return ATN()
        return ATN(wrapped.deserialize(serializedATN))
    }

    actual fun deserializeIntegers(serializedIntegersATN: Array<Int>) : ATN {
        //console.log("ATNDeserializer.deserializeIntegers")
        //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.

        val sb = StringBuilder()
        serializedIntegersATN.forEach {
            sb.append(it.toChar()) }
        return deserialize(sb.toString())
    }
}