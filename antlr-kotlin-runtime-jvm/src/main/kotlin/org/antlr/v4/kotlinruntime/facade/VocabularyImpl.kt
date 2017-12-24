package org.antlr.v4.kotlinruntime.facade

import org.antlr.v4.runtime.VocabularyImpl

actual class VocabularyImpl : VocabularyImpl {
    actual constructor(literalNames: List<String?>, symbolicNames: List<String?>) : super(literalNames.toTypedArray(), symbolicNames.toTypedArray())
}