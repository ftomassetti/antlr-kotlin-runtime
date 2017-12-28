package org.antlr.v4.kotlinruntime.facade

actual abstract class Parser : org.antlr.v4.runtime.Parser {
    private val _grammarFileName: String
    actual constructor(grammarFileName: String, input: TokenStream) : super(input.wrapped) {
        this._grammarFileName = grammarFileName
        if (true) TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    protected var _wrappingCtx: ParserRuleContext? = null
        set(value) {
            field = value
            this._ctx = value
        }

    protected var _wrappingInput: TokenStream? = null
        set(value) {
            field = value
            this._input = value?.wrapped
        }

    override fun setTokenStream(input: org.antlr.v4.runtime.TokenStream) {
        this._wrappingInput = null
        reset()
        this._wrappingInput = TokenStreamImpl(input)
    }

    override open fun getGrammarFileName() : String = _grammarFileName

    open fun enterRule(localctx: ParserRuleContext?, state: Int, ruleIndex: Int) {
        TODO("not implemented")
        //super.enterRule(localctx.wrapped, state, ruleIndex)
    }

    override fun enterOuterAlt(localctx: org.antlr.v4.runtime.ParserRuleContext?, altNum: Int) {
        super.enterOuterAlt(localctx, altNum)
        _wrappingCtx = localctx as ParserRuleContext
    }

    override fun enterRecursionRule(localctx: org.antlr.v4.runtime.ParserRuleContext?, state: Int, ruleIndex: Int, precedence: Int) {
        _wrappingCtx = localctx as ParserRuleContext
        super.enterRecursionRule(localctx, state, ruleIndex, precedence)
    }

    override fun enterRule(localctx: org.antlr.v4.runtime.ParserRuleContext?, state: Int, ruleIndex: Int) {
        _wrappingCtx = localctx as ParserRuleContext
        super.enterRule(localctx, state, ruleIndex)
    }

    override fun exitRule() {
        super.exitRule()
        _wrappingCtx = _ctx.parent as ParserRuleContext
    }

    override fun pushNewRecursionContext(localctx: org.antlr.v4.runtime.ParserRuleContext?, state: Int, ruleIndex: Int) {
        val previous = _ctx
        previous.parent = localctx
        previous.invokingState = state
        previous.stop = _input.LT(-1)

        _wrappingCtx = localctx as ParserRuleContext?
        _ctx.start = previous.start
        if (_buildParseTrees) {
            _ctx.addChild(previous)
        }

        if (_parseListeners != null) {
            triggerEnterRuleEvent() // simulates rule entry for left-recursive rules
        }
    }

    override fun reset() {
        if (inputStream != null) inputStream.seek(0)
        _errHandler.reset(this)
        _wrappingCtx = null
        _syntaxErrors = 0
        matchedEOF = false
        isTrace = false
        _precedenceStack.clear()
        _precedenceStack.push(0)
        val interpreter = interpreter
        interpreter?.reset()
    }

    override fun setContext(ctx: org.antlr.v4.runtime.ParserRuleContext?) {
        _wrappingCtx = ctx as ParserRuleContext?
    }

    override fun unrollRecursionContexts(_parentctx: org.antlr.v4.runtime.ParserRuleContext?) {
        _precedenceStack.pop()
        _ctx.stop = _input.LT(-1)
        val retctx = _ctx // save current ctx (return value)

        // unroll so _ctx is as it was before call to recursive method
        if (_parseListeners != null) {
            while (_ctx !== _parentctx) {
                triggerExitRuleEvent()
                _ctx = _ctx.parent as org.antlr.v4.runtime.ParserRuleContext
            }
        } else {
            _wrappingCtx = _parentctx as ParserRuleContext?
        }

        // hook into tree
        retctx.parent = _parentctx

        if (_buildParseTrees && _parentctx != null) {
            // add return ctx into invoking rule's tree
            _parentctx.addChild(retctx)
        }
    }

    actual fun setCtxStop(token: Token) {
        // only needed for debugging so ignoring this
    }

    actual override fun getInterpreter() : ATNSimulator {
        TODO()
    }
}