import org.antlr.v4.kotlinruntime.ANTLRInputStream
import org.junit.Test as test
import org.junit.Assert.*

class TestingLexer {

    @test fun firstTokenDebug1() {
        val input = ANTLRInputStream("1 + 2")
        val lexer = MiniCalcLexer(input)
        val interpreter = lexer.interpreter
        val result = interpreter!!.match(input, 0)
        assertEquals(11, result)
    }

    @test fun firstTokenDebug2() {
        val input = ANTLRInputStream("1 + 2")
        val lexer = MiniCalcLexer(input)
        val interpreter = lexer.interpreter
        val decisionToDFA = interpreter!!.decisionToDFA
        val mode = 0
        val dfa = decisionToDFA[mode]
        assertEquals(true, dfa!!.s0 != null)
        assertEquals(0, dfa!!.s0!!.stateNumber)
    }

    @test fun firstTokenDebug3() {
        val input = ANTLRInputStream("1 + 2")
        val lexer = MiniCalcLexer(input)
        val interpreter = lexer.interpreter
        val atn = interpreter!!.atn
        val mode = 0
        val startState = atn.modeToStartState[mode]
        val s0_closure = interpreter!!.computeStartState(input, startState)
        assertEquals(true, s0_closure.uniqueAlt)
        assertEquals(0, dfa!!.s0!!.stateNumber)
    }



    @test fun simpleTokens() {
        val lexer = MiniCalcLexer(ANTLRInputStream("1 + 2"))
        val tokens = lexer.allTokens
        assertEquals(5, tokens.size)

        var i = 0
        assertEquals("1", tokens[i].text)
        assertEquals(MiniCalcLexer.Tokens.INTLIT.id, tokens[i].type)

        i++
        assertEquals(" ", tokens[i].text)
        assertEquals(MiniCalcLexer.Tokens.WS.id, tokens[i].type)

        i++
        assertEquals("+", tokens[i].text)
        assertEquals(MiniCalcLexer.Tokens.PLUS.id, tokens[i].type)

        i++
        assertEquals(" ", tokens[i].text)
        assertEquals(MiniCalcLexer.Tokens.WS.id, tokens[i].type)

        i++
        assertEquals("2", tokens[i].text)
        assertEquals(MiniCalcLexer.Tokens.INTLIT.id, tokens[i].type)
    }
}