import org.antlr.v4.kotlinruntime.facade.Token

fun main(args: Array<String>) {
    val lexer = MiniCalcLexer("1 + 2")
    var token : Token? = null
    do {
        token = lexer.nextToken()

    } while (token?.getType() != -1)
}