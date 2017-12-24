if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'antlr-kotlin-runtime-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'antlr-kotlin-runtime-js'.");
}
this['antlr-kotlin-runtime-js'] = function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  LexerATNSimulator.prototype = Object.create(ATNSimulator.prototype);
  LexerATNSimulator.prototype.constructor = LexerATNSimulator;
  function Arrays() {
    Arrays_instance = this;
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  Arrays.prototype.asList_i5x0yv$ = function (elements) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
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
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ATN.prototype.getDecisionState_za3lpa$ = function (i) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ATN.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATN',
    interfaces: []
  };
  function ATNDeserializer() {
  }
  ATNDeserializer.prototype.deserialize_61zpoe$ = function (serializedATN) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ATNDeserializer.prototype.deserializeIntegers_9mvhws$ = function (serializedIntegersATN) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ATNDeserializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNDeserializer',
    interfaces: []
  };
  function ATNDeserializer_init($this) {
    $this = $this || Object.create(ATNDeserializer.prototype);
    ATNDeserializer.call($this);
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
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
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
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
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Lexer.prototype.setInterpreter_rarhcv$ = function (interpreter) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Lexer.prototype.getNextToken = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Lexer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lexer',
    interfaces: []
  };
  function Lexer_init(grammarFileName, input, $this) {
    $this = $this || Object.create(Lexer.prototype);
    Lexer.call($this);
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  }
  function createLexerATNSimulator(recog, atn, decisionToDFA, sharedContextCache) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented');
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
  }
  PredictionContextCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredictionContextCache',
    interfaces: []
  };
  function PredictionContextCache_init($this) {
    $this = $this || Object.create(PredictionContextCache.prototype);
    PredictionContextCache.call($this);
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  }
  function Token() {
  }
  Token.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Token',
    interfaces: []
  };
  function VocabularyImpl() {
  }
  VocabularyImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VocabularyImpl',
    interfaces: []
  };
  function VocabularyImpl_init(literalNames, symbolicNames, $this) {
    $this = $this || Object.create(VocabularyImpl.prototype);
    VocabularyImpl.call($this);
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  }
  function createDFA(atnStartState, decision) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
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
