package org.antlr.v4.kotlinruntime

actual class VocabularyImpl {

    private val literalNames: List<String?>
    private val symbolicNames: List<String?>

    actual constructor(literalNames: List<String?>, symbolicNames: List<String?>) {
        this.literalNames = literalNames
        this.symbolicNames = symbolicNames
    }
}