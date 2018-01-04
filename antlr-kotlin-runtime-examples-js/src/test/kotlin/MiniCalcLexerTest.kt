import org.antlr.v4.kotlinruntime.ANTLRInputStream
import kotlin.test.*

class TestingLexer {

    @Test fun firstToken() {
        val input = ANTLRInputStream("1 + 2")
        val lexer = MiniCalcLexer(input)
        val token = lexer.nextToken()

        assertEquals("1", token.text)
        assertEquals(MiniCalcLexer.Tokens.INTLIT.id, token.type)
    }

//    @Test fun simpleTokens() {
//        val input = ANTLRInputStream("1 + 2")
//        val lexer = MiniCalcLexer(input)
//        val tokens = lexer.allTokens
//        assertEquals(5, tokens.size)
//
//        var i = 0
//        assertEquals("1", tokens[i].text)
//        assertEquals(MiniCalcLexer.Tokens.INTLIT.id, tokens[i].type)
//
//        i++
//        assertEquals(" ", tokens[i].text)
//        assertEquals(MiniCalcLexer.Tokens.WS.id, tokens[i].type)
//
//        i++
//        assertEquals("+", tokens[i].text)
//        assertEquals(MiniCalcLexer.Tokens.PLUS.id, tokens[i].type)
//
//        i++
//        assertEquals(" ", tokens[i].text)
//        assertEquals(MiniCalcLexer.Tokens.WS.id, tokens[i].type)
//
//        i++
//        assertEquals("2", tokens[i].text)
//        assertEquals(MiniCalcLexer.Tokens.INTLIT.id, tokens[i].type)
//    }
}