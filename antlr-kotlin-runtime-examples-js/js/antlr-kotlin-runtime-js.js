if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'antlr-kotlin-runtime-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'antlr-kotlin-runtime-js'.");
}
this['antlr-kotlin-runtime-js'] = function (_, Kotlin) {
  'use strict';
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var toChar = Kotlin.toChar;
  var throwCCE = Kotlin.throwCCE;
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
    this.wrapped = null;
  }
  ATN.prototype.getNumberOfDecisions = function () {
    return this.wrapped.decisionToState.length;
  };
  ATN.prototype.getDecisionState_za3lpa$ = function (i) {
    return this.wrapped.decisionToState[i];
  };
  ATN.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATN',
    interfaces: []
  };
  function ATN_init(wrapped, $this) {
    $this = $this || Object.create(ATN.prototype);
    ATN.call($this);
    $this.wrapped = wrapped;
    return $this;
  }
  function ATNDeserializer() {
    this.wrapped_0 = null;
  }
  ATNDeserializer.prototype.deserialize_61zpoe$ = function (serializedATN) {
    return ATN_init(this.wrapped_0.deserialize(serializedATN));
  };
  ATNDeserializer.prototype.deserializeIntegers_9mvhws$ = function (serializedIntegersATN) {
    var sb = new StringBuilder();
    var tmp$;
    for (tmp$ = 0; tmp$ !== serializedIntegersATN.length; ++tmp$) {
      var element = serializedIntegersATN[tmp$];
      sb.append_s8itvh$(toChar(element));
    }
    return this.deserialize_61zpoe$(sb.toString());
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
  function createDFA(atnStartState, decision) {
    return DFA_init(atnStartState, decision);
  }
  function DFA() {
    this.wrapped = null;
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
    $this.wrapped = new window.antlr4.dfa.DFA(atnStartState.wrapped, decision);
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
    this.grammarFileName_3t1uoq$_0 = null;
    this.wrapped = null;
  }
  Lexer.prototype.getGrammarFileName = function () {
    return this.grammarFileName_3t1uoq$_0;
  };
  Lexer.prototype.setInterpreter_rarhcv$ = function (interpreter) {
    var tmp$;
    this.wrapped._interp = (Kotlin.isType(tmp$ = interpreter, LexerATNSimulator) ? tmp$ : throwCCE()).wrapped;
  };
  Lexer.prototype.getNextToken = function () {
    var tokenWrapped = this.wrapped.nextToken();
    return new TokenImpl(tokenWrapped.type, tokenWrapped.text);
  };
  Lexer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lexer',
    interfaces: []
  };
  function Lexer_init(grammarFileName, input, $this) {
    $this = $this || Object.create(Lexer.prototype);
    Lexer.call($this);
    $this.grammarFileName_3t1uoq$_0 = grammarFileName;
    $this.wrapped = new window.antlr4.Lexer(new window.antlr4.InputStream(input));
    return $this;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function createLexerATNSimulator(recog, atn, decisionToDFA, sharedContextCache) {
    var destination = ArrayList_init(decisionToDFA.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== decisionToDFA.length; ++tmp$) {
      var item = decisionToDFA[tmp$];
      destination.add_11rb$(item.wrapped);
    }
    var decisionToDFAunwrapped = copyToArray(destination);
    var atnWrapped = atn.wrapped;
    var recogWwrapped = recog != null ? recog.wrapped : null;
    var sharedContextCacheWrapped = sharedContextCache.wrapped;
    return LexerATNSimulator_init(new window.antlr4.atn.LexerATNSimulator(recogWwrapped, atnWrapped, decisionToDFAunwrapped, sharedContextCacheWrapped));
  }
  function LexerATNSimulator() {
    this.wrapped = null;
  }
  LexerATNSimulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerATNSimulator',
    interfaces: [ATNSimulator]
  };
  function LexerATNSimulator_init(wrapped, $this) {
    $this = $this || Object.create(LexerATNSimulator.prototype);
    ATNSimulator.call($this);
    LexerATNSimulator.call($this);
    $this.wrapped = wrapped;
    return $this;
  }
  function PredictionContextCache() {
    this.wrapped = null;
  }
  PredictionContextCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredictionContextCache',
    interfaces: []
  };
  function PredictionContextCache_init($this) {
    $this = $this || Object.create(PredictionContextCache.prototype);
    PredictionContextCache.call($this);
    $this.wrapped = new window.antlr4.PredictionContextCache();
    return $this;
  }
  function Token() {
  }
  Token.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Token',
    interfaces: []
  };
  function TokenImpl(type, text) {
    this.type = type;
    this.text = text;
  }
  TokenImpl.prototype.getText = function () {
    return this.text;
  };
  TokenImpl.prototype.getType = function () {
    return this.type;
  };
  TokenImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenImpl',
    interfaces: [Token]
  };
  TokenImpl.prototype.component1 = function () {
    return this.type;
  };
  TokenImpl.prototype.component2 = function () {
    return this.text;
  };
  TokenImpl.prototype.copy_19mbxw$ = function (type, text) {
    return new TokenImpl(type === void 0 ? this.type : type, text === void 0 ? this.text : text);
  };
  TokenImpl.prototype.toString = function () {
    return 'TokenImpl(type=' + Kotlin.toString(this.type) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  TokenImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  TokenImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.text, other.text)))));
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
  package$facade.ATN_init_za3rmp$ = ATN_init;
  package$facade.ATN = ATN;
  package$facade.ATNDeserializer_init = ATNDeserializer_init;
  package$facade.ATNDeserializer = ATNDeserializer;
  package$facade.ATNSimulator = ATNSimulator;
  package$facade.CharStream = CharStream;
  package$facade.createDFA_n1uhgv$ = createDFA;
  package$facade.DFA_init_n1uhgv$ = DFA_init;
  package$facade.DFA = DFA;
  package$facade.DecisionState = DecisionState;
  package$facade.Lexer_init_puj7f4$ = Lexer_init;
  package$facade.Lexer = Lexer;
  package$facade.createLexerATNSimulator_7ik3hl$ = createLexerATNSimulator;
  package$facade.LexerATNSimulator_init_za3rmp$ = LexerATNSimulator_init;
  package$facade.LexerATNSimulator = LexerATNSimulator;
  package$facade.PredictionContextCache_init = PredictionContextCache_init;
  package$facade.PredictionContextCache = PredictionContextCache;
  package$facade.Token = Token;
  package$facade.TokenImpl = TokenImpl;
  package$facade.VocabularyImpl_init_pcwvpw$ = VocabularyImpl_init;
  package$facade.VocabularyImpl = VocabularyImpl;
  package$facade.createDFA_wsotr7$ = createDFA_0;
  Kotlin.defineModule('antlr-kotlin-runtime-js', _);
  return _;
}(typeof this['antlr-kotlin-runtime-js'] === 'undefined' ? {} : this['antlr-kotlin-runtime-js'], kotlin);
