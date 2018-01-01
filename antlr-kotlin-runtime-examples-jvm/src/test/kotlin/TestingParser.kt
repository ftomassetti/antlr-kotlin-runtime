import org.antlr.v4.kotlinruntime.ANTLRInputStream
import org.antlr.v4.kotlinruntime.CommonTokenStream
import org.antlr.v4.kotlinruntime.tree.TerminalNode
import org.junit.Test as test
import org.junit.Assert.*

class TestingParser {

    @test fun simplestFileUsingHomogeneousAPI() {
        val input = ANTLRInputStream("input Int width\n")
        val lexer = MiniCalcLexer(input)
        var parser = MiniCalcParser(CommonTokenStream(lexer))

        val root = parser.miniCalcFile()
        assertEquals(1, root.childCount)

        val line = root.children!![0]
        assertTrue(line is MiniCalcParser.LineContext)
        assertEquals(2, line.childCount)

        val statement = (line as MiniCalcParser.LineContext).children!![0]
        assertTrue(statement is MiniCalcParser.StatementContext)
        assertEquals(1, statement.childCount)

        val inputDecl = (statement as MiniCalcParser.StatementContext).children!![0]
        assertTrue(inputDecl is MiniCalcParser.InputDeclarationContext)
        assertEquals(3, inputDecl.childCount)

        val inputKw = (inputDecl as MiniCalcParser.InputDeclarationContext).children!![0]
        assertTrue(inputKw is TerminalNode)
        assertEquals(0, inputKw.childCount)

        val type = (inputDecl as MiniCalcParser.InputDeclarationContext).children!![1]
        assertTrue(type is MiniCalcParser.TypeContext)
        assertEquals(1, type.childCount)

        val intKw = (type as MiniCalcParser.TypeContext).children!![0]
        assertTrue(intKw is TerminalNode)
        assertEquals(0, intKw.childCount)

        val id = (inputDecl as MiniCalcParser.InputDeclarationContext).children!![2]
        assertTrue(id is TerminalNode)
        assertEquals(0, id.childCount)

        val newline = line.children!![1]
        assertTrue(newline is TerminalNode)
        assertEquals("\n", newline.text)
    }

    @test fun simplestFileUsingHetereogeneousAPI() {
        val input = ANTLRInputStream("input Int width\n")
        val lexer = MiniCalcLexer(input)
        var parser = MiniCalcParser(CommonTokenStream(lexer))

        val root = parser.miniCalcFile()

        val line = root.line()[0]

        val statement = line.statement()!!

        println("STATEMENT is ${statement.javaClass}")

        val inputDeclStmt = statement as MiniCalcParser.InputDeclarationStatementContext
        val inputDecl = statement.inputDeclaration()!!

        val inputKw = inputDecl.INPUT()
        assertEquals("input", inputKw.text)

        val type = inputDecl.type()!!

        val intKw = (type as MiniCalcParser.IntegerContext).INT()
        assertEquals("Int", intKw.text)

        val id = inputDecl.ID()!!
        assertEquals("width", id.text)

        val newline = line.NEWLINE()!!
        assertEquals("\n", newline.text)
    }
}