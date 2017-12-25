if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'antlr-kotlin-runtime-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'antlr-kotlin-runtime-js'.");
}
this['antlr-kotlin-runtime-js'] = function (_, Kotlin) {
  'use strict';
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  LexerATNSimulator.prototype = Object.create(ATNSimulator.prototype);
  LexerATNSimulator.prototype.constructor = LexerATNSimulator;
  function Arrays() {
    Arrays_instance = this;
  }
  Arrays.prototype.asList_i5x0yv$ = function (elements) {
    return asList(elements);
  };
  Arrays.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Arrays',
    interfaces: []
  };
  var Arrays_instance = null;
  function Arrays_getInstance() {
    if (Arrays_instance === null) {
      new Arrays();
    }
    return Arrays_instance;
  }
  function ATN() {
  }
  ATN.prototype.getNumberOfDecisions = function () {
    console.log('ATN.getNumberOfDecisions');
    return 0;
  };
  ATN.prototype.getDecisionState_za3lpa$ = function (i) {
    console.log('ATN.getDecisionState');
    return new DecisionState();
  };
  ATN.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATN',
    interfaces: []
  };
  function ATNDeserializer() {
    this.wrapped_0 = null;
  }
  ATNDeserializer.prototype.deserialize_61zpoe$ = function (serializedATN) {
    console.log('ATNDeserializer.deserialize');
    return new ATN();
  };
  ATNDeserializer.prototype.deserializeIntegers_9mvhws$ = function (serializedIntegersATN) {
    console.log('ATNDeserializer.deserializeIntegers');
    return new ATN();
  };
  ATNDeserializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNDeserializer',
    interfaces: []
  };
  function ATNDeserializer_init($this) {
    $this = $this || Object.create(ATNDeserializer.prototype);
    ATNDeserializer.call($this);
    $this.wrapped_0 = new window.antlr4.atn.ATNDeserializer();
    return $this;
  }
  function ATNSimulator() {
  }
  ATNSimulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNSimulator',
    interfaces: []
  };
  function CharStream() {
  }
  CharStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharStream',
    interfaces: []
  };
  function DFA() {
  }
  DFA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFA',
    interfaces: []
  };
  function DFA_init(atnStartState, decision, $this) {
    if (decision === void 0)
      decision = 0;
    $this = $this || Object.create(DFA.prototype);
    DFA.call($this);
    console.log('DFA');
    return $this;
  }
  function DecisionState() {
  }
  DecisionState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecisionState',
    interfaces: []
  };
  function Lexer() {
  }
  Lexer.prototype.getGrammarFileName = function () {
    console.log('Lexer.getGrammarFileName');
    return '';
  };
  Lexer.prototype.setInterpreter_rarhcv$ = function (interpreter) {
    console.log('Lexer.setInterpreter');
  };
  function Lexer$getNextToken$ObjectLiteral() {
  }
  Lexer$getNextToken$ObjectLiteral.prototype.getText = function () {
    console.log('Lexer.getNextToken getText');
    return '';
  };
  Lexer$getNextToken$ObjectLiteral.prototype.getType = function () {
    console.log('Lexer.getNextToken getType');
    return -1;
  };
  Lexer$getNextToken$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Token]
  };
  Lexer.prototype.getNextToken = function () {
    console.log('Lexer.getNextToken');
    return new Lexer$getNextToken$ObjectLiteral();
  };
  Lexer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lexer',
    interfaces: []
  };
  function Lexer_init(grammarFileName, input, $this) {
    $this = $this || Object.create(Lexer.prototype);
    Lexer.call($this);
    console.log('Lexer');
    return $this;
  }
  function createLexerATNSimulator(recog, atn, decisionToDFA, sharedContextCache) {
    console.log('createLexerATNSimulator');
    return new LexerATNSimulator();
  }
  function LexerATNSimulator() {
    ATNSimulator.call(this);
  }
  LexerATNSimulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerATNSimulator',
    interfaces: [ATNSimulator]
  };
  function PredictionContextCache() {
    this.wrapped_0 = null;
  }
  PredictionContextCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredictionContextCache',
    interfaces: []
  };
  function PredictionContextCache_init($this) {
    $this = $this || Object.create(PredictionContextCache.prototype);
    PredictionContextCache.call($this);
    $this.wrapped_0 = new window.antlr4.PredictionContextCache();
    return $this;
  }
  function Token() {
  }
  Token.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Token',
    interfaces: []
  };
  function VocabularyImpl() {
    this.literalNames_0 = null;
    this.symbolicNames_0 = null;
  }
  VocabularyImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VocabularyImpl',
    interfaces: []
  };
  function VocabularyImpl_init(literalNames, symbolicNames, $this) {
    $this = $this || Object.create(VocabularyImpl.prototype);
    VocabularyImpl.call($this);
    $this.literalNames_0 = literalNames;
    $this.symbolicNames_0 = symbolicNames;
    return $this;
  }
  function createDFA(atnStartState, decision) {
    console.log('createDFA');
    return DFA_init(new DecisionState());
  }
  function createDFA_0(atnStartState) {
    return createDFA(atnStartState, 0);
  }
  var package$com = _.com || (_.com = {});
  var package$strumenta = package$com.strumenta || (package$com.strumenta = {});
  var package$kotlinmultiplatform = package$strumenta.kotlinmultiplatform || (package$strumenta.kotlinmultiplatform = {});
  Object.defineProperty(package$kotlinmultiplatform, 'Arrays', {
    get: Arrays_getInstance
  });
  var package$org = _.org || (_.org = {});
  var package$antlr = package$org.antlr || (package$org.antlr = {});
  var package$v4 = package$antlr.v4 || (package$antlr.v4 = {});
  var package$kotlinruntime = package$v4.kotlinruntime || (package$v4.kotlinruntime = {});
  var package$facade = package$kotlinruntime.facade || (package$kotlinruntime.facade = {});
  package$facade.ATN = ATN;
  package$facade.ATNDeserializer_init = ATNDeserializer_init;
  package$facade.ATNDeserializer = ATNDeserializer;
  package$facade.ATNSimulator = ATNSimulator;
  package$facade.CharStream = CharStream;
  package$facade.DFA_init_n1uhgv$ = DFA_init;
  package$facade.DFA = DFA;
  package$facade.DecisionState = DecisionState;
  package$facade.Lexer_init_puj7f4$ = Lexer_init;
  package$facade.Lexer = Lexer;
  package$facade.createLexerATNSimulator_7ik3hl$ = createLexerATNSimulator;
  package$facade.LexerATNSimulator = LexerATNSimulator;
  package$facade.PredictionContextCache_init = PredictionContextCache_init;
  package$facade.PredictionContextCache = PredictionContextCache;
  package$facade.Token = Token;
  package$facade.VocabularyImpl_init_pcwvpw$ = VocabularyImpl_init;
  package$facade.VocabularyImpl = VocabularyImpl;
  package$facade.createDFA_n1uhgv$ = createDFA;
  package$facade.createDFA_wsotr7$ = createDFA_0;
  Kotlin.defineModule('antlr-kotlin-runtime-js', _);
  return _;
}(typeof this['antlr-kotlin-runtime-js'] === 'undefined' ? {} : this['antlr-kotlin-runtime-js'], kotlin);
