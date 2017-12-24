if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'antlr-kotlin-runtime-examples-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'antlr-kotlin-runtime-examples-js'.");
}
if (typeof this['antlr-kotlin-runtime-js'] === 'undefined') {
  throw new Error("Error loading module 'antlr-kotlin-runtime-examples-js'. Its dependency 'antlr-kotlin-runtime-js' was not found. Please, check whether 'antlr-kotlin-runtime-js' is loaded prior to 'antlr-kotlin-runtime-examples-js'.");
}
this['antlr-kotlin-runtime-examples-js'] = function (_, Kotlin, $module$antlr_kotlin_runtime_js) {
  'use strict';
  var throwUPAE = Kotlin.throwUPAE;
  var PredictionContextCache_init = $module$antlr_kotlin_runtime_js.org.antlr.v4.kotlinruntime.facade.PredictionContextCache_init;
  var kotlinmultiplatform = $module$antlr_kotlin_runtime_js.com.strumenta.kotlinmultiplatform;
  var VocabularyImpl_init = $module$antlr_kotlin_runtime_js.org.antlr.v4.kotlinruntime.facade.VocabularyImpl_init_pcwvpw$;
  var ATNDeserializer_init = $module$antlr_kotlin_runtime_js.org.antlr.v4.kotlinruntime.facade.ATNDeserializer_init;
  var createDFA = $module$antlr_kotlin_runtime_js.org.antlr.v4.kotlinruntime.facade.createDFA_n1uhgv$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Lexer_init = $module$antlr_kotlin_runtime_js.org.antlr.v4.kotlinruntime.facade.Lexer_init_puj7f4$;
  var createLexerATNSimulator = $module$antlr_kotlin_runtime_js.org.antlr.v4.kotlinruntime.facade.createLexerATNSimulator_7ik3hl$;
  var Lexer = $module$antlr_kotlin_runtime_js.org.antlr.v4.kotlinruntime.facade.Lexer;
  var toString = Kotlin.toString;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  MiniCalcLexer$Tokens.prototype = Object.create(Enum.prototype);
  MiniCalcLexer$Tokens.prototype.constructor = MiniCalcLexer$Tokens;
  MiniCalcLexer$Channels.prototype = Object.create(Enum.prototype);
  MiniCalcLexer$Channels.prototype.constructor = MiniCalcLexer$Channels;
  MiniCalcLexer$Modes.prototype = Object.create(Enum.prototype);
  MiniCalcLexer$Modes.prototype.constructor = MiniCalcLexer$Modes;
  MiniCalcLexer$Rules.prototype = Object.create(Enum.prototype);
  MiniCalcLexer$Rules.prototype.constructor = MiniCalcLexer$Rules;
  MiniCalcLexer.prototype = Object.create(Lexer.prototype);
  MiniCalcLexer.prototype.constructor = MiniCalcLexer;
  function MiniCalcLexer(input) {
    MiniCalcLexer$Companion_getInstance();
    Lexer_init('MiniCalcLexer.g4', input, this);
    this.input = input;
    this.setInterpreter_rarhcv$(createLexerATNSimulator(this, MiniCalcLexer$Companion_getInstance().ATN, MiniCalcLexer$Companion_getInstance().decisionToDFA, MiniCalcLexer$Companion_getInstance().sharedContextCache));
  }
  var Array_0 = Array;
  function MiniCalcLexer$Companion() {
    MiniCalcLexer$Companion_instance = this;
    this.decisionToDFA_iobzwi$_0 = this.decisionToDFA_iobzwi$_0;
    this.sharedContextCache = PredictionContextCache_init();
    this.LITERAL_NAMES_0 = kotlinmultiplatform.Arrays.asList_i5x0yv$([null, null, null, "'input'", "'var'", "'print'", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "'\\\"'", "'\\\\'", "'\\n'", "'\\#'", null, "'#{'", null, "'}'"]);
    this.SYMBOLIC_NAMES_0 = kotlinmultiplatform.Arrays.asList_i5x0yv$([null, 'NEWLINE', 'WS', 'INPUT', 'VAR', 'PRINT', 'AS', 'INT', 'DECIMAL', 'STRING', 'ID', 'INTLIT', 'DECLIT', 'PLUS', 'MINUS', 'ASTERISK', 'DIVISION', 'ASSIGN', 'LPAREN', 'RPAREN', 'STRING_OPEN', 'UNMATCHED', 'ESCAPE_STRING_DELIMITER', 'ESCAPE_SLASH', 'ESCAPE_NEWLINE', 'ESCAPE_SHARP', 'STRING_CLOSE', 'INTERPOLATION_OPEN', 'STRING_CONTENT', 'INTERPOLATION_CLOSE']);
    this.VOCABULARY = VocabularyImpl_init(this.LITERAL_NAMES_0, this.SYMBOLIC_NAMES_0);
    this.serializedIntegersATN = [3, 24715, 42794, 33075, 47597, 16764, 15335, 30598, 22884, 2, 31, 362, 8, 1, 8, 1, 8, 1, 4, 2, 9, 2, 4, 3, 9, 3, 4, 4, 9, 4, 4, 5, 9, 5, 4, 6, 9, 6, 4, 7, 9, 7, 4, 8, 9, 8, 4, 9, 9, 9, 4, 10, 9, 10, 4, 11, 9, 11, 4, 12, 9, 12, 4, 13, 9, 13, 4, 14, 9, 14, 4, 15, 9, 15, 4, 16, 9, 16, 4, 17, 9, 17, 4, 18, 9, 18, 4, 19, 9, 19, 4, 20, 9, 20, 4, 21, 9, 21, 4, 22, 9, 22, 4, 23, 9, 23, 4, 24, 9, 24, 4, 25, 9, 25, 4, 26, 9, 26, 4, 27, 9, 27, 4, 28, 9, 28, 4, 29, 9, 29, 4, 30, 9, 30, 4, 31, 9, 31, 4, 32, 9, 32, 4, 33, 9, 33, 4, 34, 9, 34, 4, 35, 9, 35, 4, 36, 9, 36, 4, 37, 9, 37, 4, 38, 9, 38, 4, 39, 9, 39, 4, 40, 9, 40, 4, 41, 9, 41, 4, 42, 9, 42, 4, 43, 9, 43, 4, 44, 9, 44, 4, 45, 9, 45, 4, 46, 9, 46, 4, 47, 9, 47, 4, 48, 9, 48, 3, 2, 3, 2, 3, 2, 5, 2, 103, 10, 2, 3, 3, 6, 3, 106, 10, 3, 13, 3, 14, 3, 107, 3, 3, 3, 3, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 5, 3, 5, 3, 5, 3, 5, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 3, 7, 3, 7, 3, 8, 3, 8, 3, 8, 3, 8, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 9, 3, 10, 3, 10, 3, 10, 3, 10, 3, 10, 3, 10, 3, 10, 3, 11, 7, 11, 151, 10, 11, 12, 11, 14, 11, 154, 11, 11, 3, 11, 3, 11, 7, 11, 158, 10, 11, 12, 11, 14, 11, 161, 11, 11, 3, 12, 3, 12, 3, 12, 7, 12, 166, 10, 12, 12, 12, 14, 12, 169, 11, 12, 5, 12, 171, 10, 12, 3, 13, 3, 13, 3, 13, 7, 13, 176, 10, 13, 12, 13, 14, 13, 179, 11, 13, 3, 13, 3, 13, 6, 13, 183, 10, 13, 13, 13, 14, 13, 184, 5, 13, 187, 10, 13, 3, 14, 3, 14, 3, 15, 3, 15, 3, 16, 3, 16, 3, 17, 3, 17, 3, 18, 3, 18, 3, 19, 3, 19, 3, 20, 3, 20, 3, 21, 3, 21, 3, 21, 3, 21, 3, 22, 3, 22, 3, 23, 3, 23, 3, 23, 3, 24, 3, 24, 3, 24, 3, 25, 3, 25, 3, 25, 3, 26, 3, 26, 3, 26, 3, 27, 3, 27, 3, 27, 3, 27, 3, 28, 3, 28, 3, 28, 3, 28, 3, 28, 3, 29, 6, 29, 231, 10, 29, 13, 29, 14, 29, 232, 3, 30, 3, 30, 3, 30, 3, 30, 3, 31, 3, 31, 3, 31, 3, 31, 3, 32, 6, 32, 244, 10, 32, 13, 32, 14, 32, 245, 3, 32, 3, 32, 3, 32, 3, 33, 3, 33, 3, 33, 3, 33, 3, 33, 3, 34, 3, 34, 3, 34, 3, 34, 3, 34, 3, 34, 3, 35, 3, 35, 3, 35, 3, 35, 3, 35, 3, 35, 3, 35, 3, 35, 3, 35, 3, 35, 3, 36, 3, 36, 3, 36, 3, 36, 3, 36, 3, 36, 3, 36, 3, 36, 3, 36, 3, 37, 3, 37, 3, 37, 7, 37, 284, 10, 37, 12, 37, 14, 37, 287, 11, 37, 5, 37, 289, 10, 37, 3, 37, 3, 37, 3, 38, 3, 38, 3, 38, 7, 38, 296, 10, 38, 12, 38, 14, 38, 299, 11, 38, 5, 38, 301, 10, 38, 3, 38, 3, 38, 6, 38, 305, 10, 38, 13, 38, 14, 38, 306, 3, 38, 3, 38, 3, 39, 3, 39, 3, 39, 3, 39, 3, 40, 3, 40, 3, 40, 3, 40, 3, 41, 3, 41, 3, 41, 3, 41, 3, 42, 3, 42, 3, 42, 3, 42, 3, 43, 3, 43, 3, 43, 3, 43, 3, 44, 3, 44, 3, 44, 3, 44, 3, 45, 3, 45, 3, 45, 3, 45, 3, 46, 7, 46, 340, 10, 46, 12, 46, 14, 46, 343, 11, 46, 3, 46, 3, 46, 7, 46, 347, 10, 46, 12, 46, 14, 46, 350, 11, 46, 3, 46, 3, 46, 3, 47, 3, 47, 3, 47, 3, 47, 3, 47, 3, 48, 3, 48, 3, 48, 3, 48, 2, 2, 49, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16, 33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22, 45, 23, 47, 24, 49, 25, 51, 26, 53, 27, 55, 28, 57, 29, 59, 30, 61, 2, 63, 31, 65, 2, 67, 2, 69, 2, 71, 2, 73, 2, 75, 2, 77, 2, 79, 2, 81, 2, 83, 2, 85, 2, 87, 2, 89, 2, 91, 2, 93, 2, 95, 2, 97, 2, 5, 2, 3, 4, 10, 4, 2, 12, 12, 15, 15, 4, 2, 11, 11, 34, 34, 3, 2, 97, 97, 3, 2, 99, 124, 6, 2, 50, 59, 67, 92, 97, 97, 99, 124, 3, 2, 51, 59, 3, 2, 50, 59, 6, 2, 11, 12, 15, 15, 36, 37, 94, 94, 2, 377, 2, 5, 3, 2, 2, 2, 2, 7, 3, 2, 2, 2, 2, 9, 3, 2, 2, 2, 2, 11, 3, 2, 2, 2, 2, 13, 3, 2, 2, 2, 2, 15, 3, 2, 2, 2, 2, 17, 3, 2, 2, 2, 2, 19, 3, 2, 2, 2, 2, 21, 3, 2, 2, 2, 2, 23, 3, 2, 2, 2, 2, 25, 3, 2, 2, 2, 2, 27, 3, 2, 2, 2, 2, 29, 3, 2, 2, 2, 2, 31, 3, 2, 2, 2, 2, 33, 3, 2, 2, 2, 2, 35, 3, 2, 2, 2, 2, 37, 3, 2, 2, 2, 2, 39, 3, 2, 2, 2, 2, 41, 3, 2, 2, 2, 2, 43, 3, 2, 2, 2, 2, 45, 3, 2, 2, 2, 3, 47, 3, 2, 2, 2, 3, 49, 3, 2, 2, 2, 3, 51, 3, 2, 2, 2, 3, 53, 3, 2, 2, 2, 3, 55, 3, 2, 2, 2, 3, 57, 3, 2, 2, 2, 3, 59, 3, 2, 2, 2, 3, 61, 3, 2, 2, 2, 4, 63, 3, 2, 2, 2, 4, 65, 3, 2, 2, 2, 4, 67, 3, 2, 2, 2, 4, 69, 3, 2, 2, 2, 4, 71, 3, 2, 2, 2, 4, 73, 3, 2, 2, 2, 4, 75, 3, 2, 2, 2, 4, 77, 3, 2, 2, 2, 4, 79, 3, 2, 2, 2, 4, 81, 3, 2, 2, 2, 4, 83, 3, 2, 2, 2, 4, 85, 3, 2, 2, 2, 4, 87, 3, 2, 2, 2, 4, 89, 3, 2, 2, 2, 4, 91, 3, 2, 2, 2, 4, 93, 3, 2, 2, 2, 4, 95, 3, 2, 2, 2, 4, 97, 3, 2, 2, 2, 5, 102, 3, 2, 2, 2, 7, 105, 3, 2, 2, 2, 9, 111, 3, 2, 2, 2, 11, 117, 3, 2, 2, 2, 13, 121, 3, 2, 2, 2, 15, 127, 3, 2, 2, 2, 17, 130, 3, 2, 2, 2, 19, 134, 3, 2, 2, 2, 21, 142, 3, 2, 2, 2, 23, 152, 3, 2, 2, 2, 25, 170, 3, 2, 2, 2, 27, 186, 3, 2, 2, 2, 29, 188, 3, 2, 2, 2, 31, 190, 3, 2, 2, 2, 33, 192, 3, 2, 2, 2, 35, 194, 3, 2, 2, 2, 37, 196, 3, 2, 2, 2, 39, 198, 3, 2, 2, 2, 41, 200, 3, 2, 2, 2, 43, 202, 3, 2, 2, 2, 45, 206, 3, 2, 2, 2, 47, 208, 3, 2, 2, 2, 49, 211, 3, 2, 2, 2, 51, 214, 3, 2, 2, 2, 53, 217, 3, 2, 2, 2, 55, 220, 3, 2, 2, 2, 57, 224, 3, 2, 2, 2, 59, 230, 3, 2, 2, 2, 61, 234, 3, 2, 2, 2, 63, 238, 3, 2, 2, 2, 65, 243, 3, 2, 2, 2, 67, 250, 3, 2, 2, 2, 69, 255, 3, 2, 2, 2, 71, 261, 3, 2, 2, 2, 73, 271, 3, 2, 2, 2, 75, 288, 3, 2, 2, 2, 77, 300, 3, 2, 2, 2, 79, 310, 3, 2, 2, 2, 81, 314, 3, 2, 2, 2, 83, 318, 3, 2, 2, 2, 85, 322, 3, 2, 2, 2, 87, 326, 3, 2, 2, 2, 89, 330, 3, 2, 2, 2, 91, 334, 3, 2, 2, 2, 93, 341, 3, 2, 2, 2, 95, 353, 3, 2, 2, 2, 97, 358, 3, 2, 2, 2, 99, 100, 7, 15, 2, 2, 100, 103, 7, 12, 2, 2, 101, 103, 9, 2, 2, 2, 102, 99, 3, 2, 2, 2, 102, 101, 3, 2, 2, 2, 103, 6, 3, 2, 2, 2, 104, 106, 9, 3, 2, 2, 105, 104, 3, 2, 2, 2, 106, 107, 3, 2, 2, 2, 107, 105, 3, 2, 2, 2, 107, 108, 3, 2, 2, 2, 108, 109, 3, 2, 2, 2, 109, 110, 8, 3, 2, 2, 110, 8, 3, 2, 2, 2, 111, 112, 7, 107, 2, 2, 112, 113, 7, 112, 2, 2, 113, 114, 7, 114, 2, 2, 114, 115, 7, 119, 2, 2, 115, 116, 7, 118, 2, 2, 116, 10, 3, 2, 2, 2, 117, 118, 7, 120, 2, 2, 118, 119, 7, 99, 2, 2, 119, 120, 7, 116, 2, 2, 120, 12, 3, 2, 2, 2, 121, 122, 7, 114, 2, 2, 122, 123, 7, 116, 2, 2, 123, 124, 7, 107, 2, 2, 124, 125, 7, 112, 2, 2, 125, 126, 7, 118, 2, 2, 126, 14, 3, 2, 2, 2, 127, 128, 7, 99, 2, 2, 128, 129, 7, 117, 2, 2, 129, 16, 3, 2, 2, 2, 130, 131, 7, 75, 2, 2, 131, 132, 7, 112, 2, 2, 132, 133, 7, 118, 2, 2, 133, 18, 3, 2, 2, 2, 134, 135, 7, 70, 2, 2, 135, 136, 7, 103, 2, 2, 136, 137, 7, 101, 2, 2, 137, 138, 7, 107, 2, 2, 138, 139, 7, 111, 2, 2, 139, 140, 7, 99, 2, 2, 140, 141, 7, 110, 2, 2, 141, 20, 3, 2, 2, 2, 142, 143, 7, 85, 2, 2, 143, 144, 7, 118, 2, 2, 144, 145, 7, 116, 2, 2, 145, 146, 7, 107, 2, 2, 146, 147, 7, 112, 2, 2, 147, 148, 7, 105, 2, 2, 148, 22, 3, 2, 2, 2, 149, 151, 9, 4, 2, 2, 150, 149, 3, 2, 2, 2, 151, 154, 3, 2, 2, 2, 152, 150, 3, 2, 2, 2, 152, 153, 3, 2, 2, 2, 153, 155, 3, 2, 2, 2, 154, 152, 3, 2, 2, 2, 155, 159, 9, 5, 2, 2, 156, 158, 9, 6, 2, 2, 157, 156, 3, 2, 2, 2, 158, 161, 3, 2, 2, 2, 159, 157, 3, 2, 2, 2, 159, 160, 3, 2, 2, 2, 160, 24, 3, 2, 2, 2, 161, 159, 3, 2, 2, 2, 162, 171, 7, 50, 2, 2, 163, 167, 9, 7, 2, 2, 164, 166, 9, 8, 2, 2, 165, 164, 3, 2, 2, 2, 166, 169, 3, 2, 2, 2, 167, 165, 3, 2, 2, 2, 167, 168, 3, 2, 2, 2, 168, 171, 3, 2, 2, 2, 169, 167, 3, 2, 2, 2, 170, 162, 3, 2, 2, 2, 170, 163, 3, 2, 2, 2, 171, 26, 3, 2, 2, 2, 172, 187, 7, 50, 2, 2, 173, 177, 9, 7, 2, 2, 174, 176, 9, 8, 2, 2, 175, 174, 3, 2, 2, 2, 176, 179, 3, 2, 2, 2, 177, 175, 3, 2, 2, 2, 177, 178, 3, 2, 2, 2, 178, 180, 3, 2, 2, 2, 179, 177, 3, 2, 2, 2, 180, 182, 7, 48, 2, 2, 181, 183, 9, 8, 2, 2, 182, 181, 3, 2, 2, 2, 183, 184, 3, 2, 2, 2, 184, 182, 3, 2, 2, 2, 184, 185, 3, 2, 2, 2, 185, 187, 3, 2, 2, 2, 186, 172, 3, 2, 2, 2, 186, 173, 3, 2, 2, 2, 187, 28, 3, 2, 2, 2, 188, 189, 7, 45, 2, 2, 189, 30, 3, 2, 2, 2, 190, 191, 7, 47, 2, 2, 191, 32, 3, 2, 2, 2, 192, 193, 7, 44, 2, 2, 193, 34, 3, 2, 2, 2, 194, 195, 7, 49, 2, 2, 195, 36, 3, 2, 2, 2, 196, 197, 7, 63, 2, 2, 197, 38, 3, 2, 2, 2, 198, 199, 7, 42, 2, 2, 199, 40, 3, 2, 2, 2, 200, 201, 7, 43, 2, 2, 201, 42, 3, 2, 2, 2, 202, 203, 7, 36, 2, 2, 203, 204, 3, 2, 2, 2, 204, 205, 8, 21, 3, 2, 205, 44, 3, 2, 2, 2, 206, 207, 11, 2, 2, 2, 207, 46, 3, 2, 2, 2, 208, 209, 7, 94, 2, 2, 209, 210, 7, 36, 2, 2, 210, 48, 3, 2, 2, 2, 211, 212, 7, 94, 2, 2, 212, 213, 7, 94, 2, 2, 213, 50, 3, 2, 2, 2, 214, 215, 7, 94, 2, 2, 215, 216, 7, 112, 2, 2, 216, 52, 3, 2, 2, 2, 217, 218, 7, 94, 2, 2, 218, 219, 7, 37, 2, 2, 219, 54, 3, 2, 2, 2, 220, 221, 7, 36, 2, 2, 221, 222, 3, 2, 2, 2, 222, 223, 8, 27, 4, 2, 223, 56, 3, 2, 2, 2, 224, 225, 7, 37, 2, 2, 225, 226, 7, 125, 2, 2, 226, 227, 3, 2, 2, 2, 227, 228, 8, 28, 5, 2, 228, 58, 3, 2, 2, 2, 229, 231, 10, 9, 2, 2, 230, 229, 3, 2, 2, 2, 231, 232, 3, 2, 2, 2, 232, 230, 3, 2, 2, 2, 232, 233, 3, 2, 2, 2, 233, 60, 3, 2, 2, 2, 234, 235, 11, 2, 2, 2, 235, 236, 3, 2, 2, 2, 236, 237, 8, 30, 6, 2, 237, 62, 3, 2, 2, 2, 238, 239, 7, 127, 2, 2, 239, 240, 3, 2, 2, 2, 240, 241, 8, 31, 4, 2, 241, 64, 3, 2, 2, 2, 242, 244, 9, 3, 2, 2, 243, 242, 3, 2, 2, 2, 244, 245, 3, 2, 2, 2, 245, 243, 3, 2, 2, 2, 245, 246, 3, 2, 2, 2, 246, 247, 3, 2, 2, 2, 247, 248, 8, 32, 2, 2, 248, 249, 8, 32, 7, 2, 249, 66, 3, 2, 2, 2, 250, 251, 7, 99, 2, 2, 251, 252, 7, 117, 2, 2, 252, 253, 3, 2, 2, 2, 253, 254, 8, 33, 8, 2, 254, 68, 3, 2, 2, 2, 255, 256, 7, 75, 2, 2, 256, 257, 7, 112, 2, 2, 257, 258, 7, 118, 2, 2, 258, 259, 3, 2, 2, 2, 259, 260, 8, 34, 9, 2, 260, 70, 3, 2, 2, 2, 261, 262, 7, 70, 2, 2, 262, 263, 7, 103, 2, 2, 263, 264, 7, 101, 2, 2, 264, 265, 7, 107, 2, 2, 265, 266, 7, 111, 2, 2, 266, 267, 7, 99, 2, 2, 267, 268, 7, 110, 2, 2, 268, 269, 3, 2, 2, 2, 269, 270, 8, 35, 10, 2, 270, 72, 3, 2, 2, 2, 271, 272, 7, 85, 2, 2, 272, 273, 7, 118, 2, 2, 273, 274, 7, 116, 2, 2, 274, 275, 7, 107, 2, 2, 275, 276, 7, 112, 2, 2, 276, 277, 7, 105, 2, 2, 277, 278, 3, 2, 2, 2, 278, 279, 8, 36, 11, 2, 279, 74, 3, 2, 2, 2, 280, 289, 7, 50, 2, 2, 281, 285, 9, 7, 2, 2, 282, 284, 9, 8, 2, 2, 283, 282, 3, 2, 2, 2, 284, 287, 3, 2, 2, 2, 285, 283, 3, 2, 2, 2, 285, 286, 3, 2, 2, 2, 286, 289, 3, 2, 2, 2, 287, 285, 3, 2, 2, 2, 288, 280, 3, 2, 2, 2, 288, 281, 3, 2, 2, 2, 289, 290, 3, 2, 2, 2, 290, 291, 8, 37, 12, 2, 291, 76, 3, 2, 2, 2, 292, 301, 7, 50, 2, 2, 293, 297, 9, 7, 2, 2, 294, 296, 9, 8, 2, 2, 295, 294, 3, 2, 2, 2, 296, 299, 3, 2, 2, 2, 297, 295, 3, 2, 2, 2, 297, 298, 3, 2, 2, 2, 298, 301, 3, 2, 2, 2, 299, 297, 3, 2, 2, 2, 300, 292, 3, 2, 2, 2, 300, 293, 3, 2, 2, 2, 301, 302, 3, 2, 2, 2, 302, 304, 7, 48, 2, 2, 303, 305, 9, 8, 2, 2, 304, 303, 3, 2, 2, 2, 305, 306, 3, 2, 2, 2, 306, 304, 3, 2, 2, 2, 306, 307, 3, 2, 2, 2, 307, 308, 3, 2, 2, 2, 308, 309, 8, 38, 13, 2, 309, 78, 3, 2, 2, 2, 310, 311, 7, 45, 2, 2, 311, 312, 3, 2, 2, 2, 312, 313, 8, 39, 14, 2, 313, 80, 3, 2, 2, 2, 314, 315, 7, 47, 2, 2, 315, 316, 3, 2, 2, 2, 316, 317, 8, 40, 15, 2, 317, 82, 3, 2, 2, 2, 318, 319, 7, 44, 2, 2, 319, 320, 3, 2, 2, 2, 320, 321, 8, 41, 16, 2, 321, 84, 3, 2, 2, 2, 322, 323, 7, 49, 2, 2, 323, 324, 3, 2, 2, 2, 324, 325, 8, 42, 17, 2, 325, 86, 3, 2, 2, 2, 326, 327, 7, 63, 2, 2, 327, 328, 3, 2, 2, 2, 328, 329, 8, 43, 18, 2, 329, 88, 3, 2, 2, 2, 330, 331, 7, 42, 2, 2, 331, 332, 3, 2, 2, 2, 332, 333, 8, 44, 19, 2, 333, 90, 3, 2, 2, 2, 334, 335, 7, 43, 2, 2, 335, 336, 3, 2, 2, 2, 336, 337, 8, 45, 20, 2, 337, 92, 3, 2, 2, 2, 338, 340, 9, 4, 2, 2, 339, 338, 3, 2, 2, 2, 340, 343, 3, 2, 2, 2, 341, 339, 3, 2, 2, 2, 341, 342, 3, 2, 2, 2, 342, 344, 3, 2, 2, 2, 343, 341, 3, 2, 2, 2, 344, 348, 9, 5, 2, 2, 345, 347, 9, 6, 2, 2, 346, 345, 3, 2, 2, 2, 347, 350, 3, 2, 2, 2, 348, 346, 3, 2, 2, 2, 348, 349, 3, 2, 2, 2, 349, 351, 3, 2, 2, 2, 350, 348, 3, 2, 2, 2, 351, 352, 8, 46, 21, 2, 352, 94, 3, 2, 2, 2, 353, 354, 7, 36, 2, 2, 354, 355, 3, 2, 2, 2, 355, 356, 8, 47, 22, 2, 356, 357, 8, 47, 3, 2, 357, 96, 3, 2, 2, 2, 358, 359, 11, 2, 2, 2, 359, 360, 3, 2, 2, 2, 360, 361, 8, 48, 6, 2, 361, 98, 3, 2, 2, 2, 23, 2, 3, 4, 102, 107, 152, 159, 167, 170, 177, 184, 186, 232, 245, 285, 288, 297, 300, 306, 341, 348, 23, 2, 4, 2, 7, 3, 2, 6, 2, 2, 7, 4, 2, 9, 23, 2, 9, 4, 2, 9, 8, 2, 9, 9, 2, 9, 10, 2, 9, 11, 2, 9, 13, 2, 9, 14, 2, 9, 15, 2, 9, 16, 2, 9, 17, 2, 9, 18, 2, 9, 19, 2, 9, 20, 2, 9, 21, 2, 9, 12, 2, 9, 22, 2];
    this.ATN = ATNDeserializer_init().deserializeIntegers_9mvhws$(this.serializedIntegersATN);
    var array = Array_0(this.ATN.getNumberOfDecisions());
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = createDFA(this.ATN.getDecisionState_za3lpa$(i), i);
    }
    this.decisionToDFA = array;
  }
  Object.defineProperty(MiniCalcLexer$Companion.prototype, 'decisionToDFA', {
    get: function () {
      if (this.decisionToDFA_iobzwi$_0 == null)
        return throwUPAE('decisionToDFA');
      return this.decisionToDFA_iobzwi$_0;
    },
    set: function (decisionToDFA) {
      this.decisionToDFA_iobzwi$_0 = decisionToDFA;
    }
  });
  MiniCalcLexer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MiniCalcLexer$Companion_instance = null;
  function MiniCalcLexer$Companion_getInstance() {
    if (MiniCalcLexer$Companion_instance === null) {
      new MiniCalcLexer$Companion();
    }
    return MiniCalcLexer$Companion_instance;
  }
  function MiniCalcLexer$Tokens(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MiniCalcLexer$Tokens_initFields() {
    MiniCalcLexer$Tokens_initFields = function () {
    };
    MiniCalcLexer$Tokens$NEWLINE_instance = new MiniCalcLexer$Tokens('NEWLINE', 0, 1);
    MiniCalcLexer$Tokens$WS_instance = new MiniCalcLexer$Tokens('WS', 1, 2);
    MiniCalcLexer$Tokens$INPUT_instance = new MiniCalcLexer$Tokens('INPUT', 2, 3);
    MiniCalcLexer$Tokens$VAR_instance = new MiniCalcLexer$Tokens('VAR', 3, 4);
    MiniCalcLexer$Tokens$PRINT_instance = new MiniCalcLexer$Tokens('PRINT', 4, 5);
    MiniCalcLexer$Tokens$AS_instance = new MiniCalcLexer$Tokens('AS', 5, 6);
    MiniCalcLexer$Tokens$INT_instance = new MiniCalcLexer$Tokens('INT', 6, 7);
    MiniCalcLexer$Tokens$DECIMAL_instance = new MiniCalcLexer$Tokens('DECIMAL', 7, 8);
    MiniCalcLexer$Tokens$STRING_instance = new MiniCalcLexer$Tokens('STRING', 8, 9);
    MiniCalcLexer$Tokens$ID_instance = new MiniCalcLexer$Tokens('ID', 9, 10);
    MiniCalcLexer$Tokens$INTLIT_instance = new MiniCalcLexer$Tokens('INTLIT', 10, 11);
    MiniCalcLexer$Tokens$DECLIT_instance = new MiniCalcLexer$Tokens('DECLIT', 11, 12);
    MiniCalcLexer$Tokens$PLUS_instance = new MiniCalcLexer$Tokens('PLUS', 12, 13);
    MiniCalcLexer$Tokens$MINUS_instance = new MiniCalcLexer$Tokens('MINUS', 13, 14);
    MiniCalcLexer$Tokens$ASTERISK_instance = new MiniCalcLexer$Tokens('ASTERISK', 14, 15);
    MiniCalcLexer$Tokens$DIVISION_instance = new MiniCalcLexer$Tokens('DIVISION', 15, 16);
    MiniCalcLexer$Tokens$ASSIGN_instance = new MiniCalcLexer$Tokens('ASSIGN', 16, 17);
    MiniCalcLexer$Tokens$LPAREN_instance = new MiniCalcLexer$Tokens('LPAREN', 17, 18);
    MiniCalcLexer$Tokens$RPAREN_instance = new MiniCalcLexer$Tokens('RPAREN', 18, 19);
    MiniCalcLexer$Tokens$STRING_OPEN_instance = new MiniCalcLexer$Tokens('STRING_OPEN', 19, 20);
    MiniCalcLexer$Tokens$UNMATCHED_instance = new MiniCalcLexer$Tokens('UNMATCHED', 20, 21);
    MiniCalcLexer$Tokens$ESCAPE_STRING_DELIMITER_instance = new MiniCalcLexer$Tokens('ESCAPE_STRING_DELIMITER', 21, 22);
    MiniCalcLexer$Tokens$ESCAPE_SLASH_instance = new MiniCalcLexer$Tokens('ESCAPE_SLASH', 22, 23);
    MiniCalcLexer$Tokens$ESCAPE_NEWLINE_instance = new MiniCalcLexer$Tokens('ESCAPE_NEWLINE', 23, 24);
    MiniCalcLexer$Tokens$ESCAPE_SHARP_instance = new MiniCalcLexer$Tokens('ESCAPE_SHARP', 24, 25);
    MiniCalcLexer$Tokens$STRING_CLOSE_instance = new MiniCalcLexer$Tokens('STRING_CLOSE', 25, 26);
    MiniCalcLexer$Tokens$INTERPOLATION_OPEN_instance = new MiniCalcLexer$Tokens('INTERPOLATION_OPEN', 26, 27);
    MiniCalcLexer$Tokens$STRING_CONTENT_instance = new MiniCalcLexer$Tokens('STRING_CONTENT', 27, 28);
    MiniCalcLexer$Tokens$INTERPOLATION_CLOSE_instance = new MiniCalcLexer$Tokens('INTERPOLATION_CLOSE', 28, 29);
  }
  var MiniCalcLexer$Tokens$NEWLINE_instance;
  function MiniCalcLexer$Tokens$NEWLINE_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$NEWLINE_instance;
  }
  var MiniCalcLexer$Tokens$WS_instance;
  function MiniCalcLexer$Tokens$WS_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$WS_instance;
  }
  var MiniCalcLexer$Tokens$INPUT_instance;
  function MiniCalcLexer$Tokens$INPUT_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$INPUT_instance;
  }
  var MiniCalcLexer$Tokens$VAR_instance;
  function MiniCalcLexer$Tokens$VAR_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$VAR_instance;
  }
  var MiniCalcLexer$Tokens$PRINT_instance;
  function MiniCalcLexer$Tokens$PRINT_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$PRINT_instance;
  }
  var MiniCalcLexer$Tokens$AS_instance;
  function MiniCalcLexer$Tokens$AS_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$AS_instance;
  }
  var MiniCalcLexer$Tokens$INT_instance;
  function MiniCalcLexer$Tokens$INT_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$INT_instance;
  }
  var MiniCalcLexer$Tokens$DECIMAL_instance;
  function MiniCalcLexer$Tokens$DECIMAL_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$DECIMAL_instance;
  }
  var MiniCalcLexer$Tokens$STRING_instance;
  function MiniCalcLexer$Tokens$STRING_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$STRING_instance;
  }
  var MiniCalcLexer$Tokens$ID_instance;
  function MiniCalcLexer$Tokens$ID_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$ID_instance;
  }
  var MiniCalcLexer$Tokens$INTLIT_instance;
  function MiniCalcLexer$Tokens$INTLIT_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$INTLIT_instance;
  }
  var MiniCalcLexer$Tokens$DECLIT_instance;
  function MiniCalcLexer$Tokens$DECLIT_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$DECLIT_instance;
  }
  var MiniCalcLexer$Tokens$PLUS_instance;
  function MiniCalcLexer$Tokens$PLUS_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$PLUS_instance;
  }
  var MiniCalcLexer$Tokens$MINUS_instance;
  function MiniCalcLexer$Tokens$MINUS_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$MINUS_instance;
  }
  var MiniCalcLexer$Tokens$ASTERISK_instance;
  function MiniCalcLexer$Tokens$ASTERISK_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$ASTERISK_instance;
  }
  var MiniCalcLexer$Tokens$DIVISION_instance;
  function MiniCalcLexer$Tokens$DIVISION_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$DIVISION_instance;
  }
  var MiniCalcLexer$Tokens$ASSIGN_instance;
  function MiniCalcLexer$Tokens$ASSIGN_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$ASSIGN_instance;
  }
  var MiniCalcLexer$Tokens$LPAREN_instance;
  function MiniCalcLexer$Tokens$LPAREN_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$LPAREN_instance;
  }
  var MiniCalcLexer$Tokens$RPAREN_instance;
  function MiniCalcLexer$Tokens$RPAREN_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$RPAREN_instance;
  }
  var MiniCalcLexer$Tokens$STRING_OPEN_instance;
  function MiniCalcLexer$Tokens$STRING_OPEN_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$STRING_OPEN_instance;
  }
  var MiniCalcLexer$Tokens$UNMATCHED_instance;
  function MiniCalcLexer$Tokens$UNMATCHED_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$UNMATCHED_instance;
  }
  var MiniCalcLexer$Tokens$ESCAPE_STRING_DELIMITER_instance;
  function MiniCalcLexer$Tokens$ESCAPE_STRING_DELIMITER_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$ESCAPE_STRING_DELIMITER_instance;
  }
  var MiniCalcLexer$Tokens$ESCAPE_SLASH_instance;
  function MiniCalcLexer$Tokens$ESCAPE_SLASH_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$ESCAPE_SLASH_instance;
  }
  var MiniCalcLexer$Tokens$ESCAPE_NEWLINE_instance;
  function MiniCalcLexer$Tokens$ESCAPE_NEWLINE_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$ESCAPE_NEWLINE_instance;
  }
  var MiniCalcLexer$Tokens$ESCAPE_SHARP_instance;
  function MiniCalcLexer$Tokens$ESCAPE_SHARP_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$ESCAPE_SHARP_instance;
  }
  var MiniCalcLexer$Tokens$STRING_CLOSE_instance;
  function MiniCalcLexer$Tokens$STRING_CLOSE_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$STRING_CLOSE_instance;
  }
  var MiniCalcLexer$Tokens$INTERPOLATION_OPEN_instance;
  function MiniCalcLexer$Tokens$INTERPOLATION_OPEN_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$INTERPOLATION_OPEN_instance;
  }
  var MiniCalcLexer$Tokens$STRING_CONTENT_instance;
  function MiniCalcLexer$Tokens$STRING_CONTENT_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$STRING_CONTENT_instance;
  }
  var MiniCalcLexer$Tokens$INTERPOLATION_CLOSE_instance;
  function MiniCalcLexer$Tokens$INTERPOLATION_CLOSE_getInstance() {
    MiniCalcLexer$Tokens_initFields();
    return MiniCalcLexer$Tokens$INTERPOLATION_CLOSE_instance;
  }
  MiniCalcLexer$Tokens.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tokens',
    interfaces: [Enum]
  };
  function MiniCalcLexer$Tokens$values() {
    return [MiniCalcLexer$Tokens$NEWLINE_getInstance(), MiniCalcLexer$Tokens$WS_getInstance(), MiniCalcLexer$Tokens$INPUT_getInstance(), MiniCalcLexer$Tokens$VAR_getInstance(), MiniCalcLexer$Tokens$PRINT_getInstance(), MiniCalcLexer$Tokens$AS_getInstance(), MiniCalcLexer$Tokens$INT_getInstance(), MiniCalcLexer$Tokens$DECIMAL_getInstance(), MiniCalcLexer$Tokens$STRING_getInstance(), MiniCalcLexer$Tokens$ID_getInstance(), MiniCalcLexer$Tokens$INTLIT_getInstance(), MiniCalcLexer$Tokens$DECLIT_getInstance(), MiniCalcLexer$Tokens$PLUS_getInstance(), MiniCalcLexer$Tokens$MINUS_getInstance(), MiniCalcLexer$Tokens$ASTERISK_getInstance(), MiniCalcLexer$Tokens$DIVISION_getInstance(), MiniCalcLexer$Tokens$ASSIGN_getInstance(), MiniCalcLexer$Tokens$LPAREN_getInstance(), MiniCalcLexer$Tokens$RPAREN_getInstance(), MiniCalcLexer$Tokens$STRING_OPEN_getInstance(), MiniCalcLexer$Tokens$UNMATCHED_getInstance(), MiniCalcLexer$Tokens$ESCAPE_STRING_DELIMITER_getInstance(), MiniCalcLexer$Tokens$ESCAPE_SLASH_getInstance(), MiniCalcLexer$Tokens$ESCAPE_NEWLINE_getInstance(), MiniCalcLexer$Tokens$ESCAPE_SHARP_getInstance(), MiniCalcLexer$Tokens$STRING_CLOSE_getInstance(), MiniCalcLexer$Tokens$INTERPOLATION_OPEN_getInstance(), MiniCalcLexer$Tokens$STRING_CONTENT_getInstance(), MiniCalcLexer$Tokens$INTERPOLATION_CLOSE_getInstance()];
  }
  MiniCalcLexer$Tokens.values = MiniCalcLexer$Tokens$values;
  function MiniCalcLexer$Tokens$valueOf(name) {
    switch (name) {
      case 'NEWLINE':
        return MiniCalcLexer$Tokens$NEWLINE_getInstance();
      case 'WS':
        return MiniCalcLexer$Tokens$WS_getInstance();
      case 'INPUT':
        return MiniCalcLexer$Tokens$INPUT_getInstance();
      case 'VAR':
        return MiniCalcLexer$Tokens$VAR_getInstance();
      case 'PRINT':
        return MiniCalcLexer$Tokens$PRINT_getInstance();
      case 'AS':
        return MiniCalcLexer$Tokens$AS_getInstance();
      case 'INT':
        return MiniCalcLexer$Tokens$INT_getInstance();
      case 'DECIMAL':
        return MiniCalcLexer$Tokens$DECIMAL_getInstance();
      case 'STRING':
        return MiniCalcLexer$Tokens$STRING_getInstance();
      case 'ID':
        return MiniCalcLexer$Tokens$ID_getInstance();
      case 'INTLIT':
        return MiniCalcLexer$Tokens$INTLIT_getInstance();
      case 'DECLIT':
        return MiniCalcLexer$Tokens$DECLIT_getInstance();
      case 'PLUS':
        return MiniCalcLexer$Tokens$PLUS_getInstance();
      case 'MINUS':
        return MiniCalcLexer$Tokens$MINUS_getInstance();
      case 'ASTERISK':
        return MiniCalcLexer$Tokens$ASTERISK_getInstance();
      case 'DIVISION':
        return MiniCalcLexer$Tokens$DIVISION_getInstance();
      case 'ASSIGN':
        return MiniCalcLexer$Tokens$ASSIGN_getInstance();
      case 'LPAREN':
        return MiniCalcLexer$Tokens$LPAREN_getInstance();
      case 'RPAREN':
        return MiniCalcLexer$Tokens$RPAREN_getInstance();
      case 'STRING_OPEN':
        return MiniCalcLexer$Tokens$STRING_OPEN_getInstance();
      case 'UNMATCHED':
        return MiniCalcLexer$Tokens$UNMATCHED_getInstance();
      case 'ESCAPE_STRING_DELIMITER':
        return MiniCalcLexer$Tokens$ESCAPE_STRING_DELIMITER_getInstance();
      case 'ESCAPE_SLASH':
        return MiniCalcLexer$Tokens$ESCAPE_SLASH_getInstance();
      case 'ESCAPE_NEWLINE':
        return MiniCalcLexer$Tokens$ESCAPE_NEWLINE_getInstance();
      case 'ESCAPE_SHARP':
        return MiniCalcLexer$Tokens$ESCAPE_SHARP_getInstance();
      case 'STRING_CLOSE':
        return MiniCalcLexer$Tokens$STRING_CLOSE_getInstance();
      case 'INTERPOLATION_OPEN':
        return MiniCalcLexer$Tokens$INTERPOLATION_OPEN_getInstance();
      case 'STRING_CONTENT':
        return MiniCalcLexer$Tokens$STRING_CONTENT_getInstance();
      case 'INTERPOLATION_CLOSE':
        return MiniCalcLexer$Tokens$INTERPOLATION_CLOSE_getInstance();
      default:throwISE('No enum constant MiniCalcLexer.Tokens.' + name);
    }
  }
  MiniCalcLexer$Tokens.valueOf_61zpoe$ = MiniCalcLexer$Tokens$valueOf;
  function MiniCalcLexer$Channels(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MiniCalcLexer$Channels_initFields() {
    MiniCalcLexer$Channels_initFields = function () {
    };
    MiniCalcLexer$Channels$DEFAULT_TOKEN_CHANNEL_instance = new MiniCalcLexer$Channels('DEFAULT_TOKEN_CHANNEL', 0, 0);
    MiniCalcLexer$Channels$HIDDEN_instance = new MiniCalcLexer$Channels('HIDDEN', 1, 1);
    MiniCalcLexer$Channels$WHITESPACE_instance = new MiniCalcLexer$Channels('WHITESPACE', 2, 2);
  }
  var MiniCalcLexer$Channels$DEFAULT_TOKEN_CHANNEL_instance;
  function MiniCalcLexer$Channels$DEFAULT_TOKEN_CHANNEL_getInstance() {
    MiniCalcLexer$Channels_initFields();
    return MiniCalcLexer$Channels$DEFAULT_TOKEN_CHANNEL_instance;
  }
  var MiniCalcLexer$Channels$HIDDEN_instance;
  function MiniCalcLexer$Channels$HIDDEN_getInstance() {
    MiniCalcLexer$Channels_initFields();
    return MiniCalcLexer$Channels$HIDDEN_instance;
  }
  var MiniCalcLexer$Channels$WHITESPACE_instance;
  function MiniCalcLexer$Channels$WHITESPACE_getInstance() {
    MiniCalcLexer$Channels_initFields();
    return MiniCalcLexer$Channels$WHITESPACE_instance;
  }
  MiniCalcLexer$Channels.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Channels',
    interfaces: [Enum]
  };
  function MiniCalcLexer$Channels$values() {
    return [MiniCalcLexer$Channels$DEFAULT_TOKEN_CHANNEL_getInstance(), MiniCalcLexer$Channels$HIDDEN_getInstance(), MiniCalcLexer$Channels$WHITESPACE_getInstance()];
  }
  MiniCalcLexer$Channels.values = MiniCalcLexer$Channels$values;
  function MiniCalcLexer$Channels$valueOf(name) {
    switch (name) {
      case 'DEFAULT_TOKEN_CHANNEL':
        return MiniCalcLexer$Channels$DEFAULT_TOKEN_CHANNEL_getInstance();
      case 'HIDDEN':
        return MiniCalcLexer$Channels$HIDDEN_getInstance();
      case 'WHITESPACE':
        return MiniCalcLexer$Channels$WHITESPACE_getInstance();
      default:throwISE('No enum constant MiniCalcLexer.Channels.' + name);
    }
  }
  MiniCalcLexer$Channels.valueOf_61zpoe$ = MiniCalcLexer$Channels$valueOf;
  function MiniCalcLexer$Modes(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MiniCalcLexer$Modes_initFields() {
    MiniCalcLexer$Modes_initFields = function () {
    };
    MiniCalcLexer$Modes$DEFAULT_MODE_instance = new MiniCalcLexer$Modes('DEFAULT_MODE', 0, 0);
    MiniCalcLexer$Modes$MODE_IN_STRING_instance = new MiniCalcLexer$Modes('MODE_IN_STRING', 1, 1);
    MiniCalcLexer$Modes$MODE_IN_INTERPOLATION_instance = new MiniCalcLexer$Modes('MODE_IN_INTERPOLATION', 2, 2);
  }
  var MiniCalcLexer$Modes$DEFAULT_MODE_instance;
  function MiniCalcLexer$Modes$DEFAULT_MODE_getInstance() {
    MiniCalcLexer$Modes_initFields();
    return MiniCalcLexer$Modes$DEFAULT_MODE_instance;
  }
  var MiniCalcLexer$Modes$MODE_IN_STRING_instance;
  function MiniCalcLexer$Modes$MODE_IN_STRING_getInstance() {
    MiniCalcLexer$Modes_initFields();
    return MiniCalcLexer$Modes$MODE_IN_STRING_instance;
  }
  var MiniCalcLexer$Modes$MODE_IN_INTERPOLATION_instance;
  function MiniCalcLexer$Modes$MODE_IN_INTERPOLATION_getInstance() {
    MiniCalcLexer$Modes_initFields();
    return MiniCalcLexer$Modes$MODE_IN_INTERPOLATION_instance;
  }
  MiniCalcLexer$Modes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Modes',
    interfaces: [Enum]
  };
  function MiniCalcLexer$Modes$values() {
    return [MiniCalcLexer$Modes$DEFAULT_MODE_getInstance(), MiniCalcLexer$Modes$MODE_IN_STRING_getInstance(), MiniCalcLexer$Modes$MODE_IN_INTERPOLATION_getInstance()];
  }
  MiniCalcLexer$Modes.values = MiniCalcLexer$Modes$values;
  function MiniCalcLexer$Modes$valueOf(name) {
    switch (name) {
      case 'DEFAULT_MODE':
        return MiniCalcLexer$Modes$DEFAULT_MODE_getInstance();
      case 'MODE_IN_STRING':
        return MiniCalcLexer$Modes$MODE_IN_STRING_getInstance();
      case 'MODE_IN_INTERPOLATION':
        return MiniCalcLexer$Modes$MODE_IN_INTERPOLATION_getInstance();
      default:throwISE('No enum constant MiniCalcLexer.Modes.' + name);
    }
  }
  MiniCalcLexer$Modes.valueOf_61zpoe$ = MiniCalcLexer$Modes$valueOf;
  function MiniCalcLexer$Rules(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MiniCalcLexer$Rules_initFields() {
    MiniCalcLexer$Rules_initFields = function () {
    };
    MiniCalcLexer$Rules$NEWLINE_instance = new MiniCalcLexer$Rules('NEWLINE', 0);
    MiniCalcLexer$Rules$WS_instance = new MiniCalcLexer$Rules('WS', 1);
    MiniCalcLexer$Rules$INPUT_instance = new MiniCalcLexer$Rules('INPUT', 2);
    MiniCalcLexer$Rules$VAR_instance = new MiniCalcLexer$Rules('VAR', 3);
    MiniCalcLexer$Rules$PRINT_instance = new MiniCalcLexer$Rules('PRINT', 4);
    MiniCalcLexer$Rules$AS_instance = new MiniCalcLexer$Rules('AS', 5);
    MiniCalcLexer$Rules$INT_instance = new MiniCalcLexer$Rules('INT', 6);
    MiniCalcLexer$Rules$DECIMAL_instance = new MiniCalcLexer$Rules('DECIMAL', 7);
    MiniCalcLexer$Rules$STRING_instance = new MiniCalcLexer$Rules('STRING', 8);
    MiniCalcLexer$Rules$ID_instance = new MiniCalcLexer$Rules('ID', 9);
    MiniCalcLexer$Rules$INTLIT_instance = new MiniCalcLexer$Rules('INTLIT', 10);
    MiniCalcLexer$Rules$DECLIT_instance = new MiniCalcLexer$Rules('DECLIT', 11);
    MiniCalcLexer$Rules$PLUS_instance = new MiniCalcLexer$Rules('PLUS', 12);
    MiniCalcLexer$Rules$MINUS_instance = new MiniCalcLexer$Rules('MINUS', 13);
    MiniCalcLexer$Rules$ASTERISK_instance = new MiniCalcLexer$Rules('ASTERISK', 14);
    MiniCalcLexer$Rules$DIVISION_instance = new MiniCalcLexer$Rules('DIVISION', 15);
    MiniCalcLexer$Rules$ASSIGN_instance = new MiniCalcLexer$Rules('ASSIGN', 16);
    MiniCalcLexer$Rules$LPAREN_instance = new MiniCalcLexer$Rules('LPAREN', 17);
    MiniCalcLexer$Rules$RPAREN_instance = new MiniCalcLexer$Rules('RPAREN', 18);
    MiniCalcLexer$Rules$STRING_OPEN_instance = new MiniCalcLexer$Rules('STRING_OPEN', 19);
    MiniCalcLexer$Rules$UNMATCHED_instance = new MiniCalcLexer$Rules('UNMATCHED', 20);
    MiniCalcLexer$Rules$ESCAPE_STRING_DELIMITER_instance = new MiniCalcLexer$Rules('ESCAPE_STRING_DELIMITER', 21);
    MiniCalcLexer$Rules$ESCAPE_SLASH_instance = new MiniCalcLexer$Rules('ESCAPE_SLASH', 22);
    MiniCalcLexer$Rules$ESCAPE_NEWLINE_instance = new MiniCalcLexer$Rules('ESCAPE_NEWLINE', 23);
    MiniCalcLexer$Rules$ESCAPE_SHARP_instance = new MiniCalcLexer$Rules('ESCAPE_SHARP', 24);
    MiniCalcLexer$Rules$STRING_CLOSE_instance = new MiniCalcLexer$Rules('STRING_CLOSE', 25);
    MiniCalcLexer$Rules$INTERPOLATION_OPEN_instance = new MiniCalcLexer$Rules('INTERPOLATION_OPEN', 26);
    MiniCalcLexer$Rules$STRING_CONTENT_instance = new MiniCalcLexer$Rules('STRING_CONTENT', 27);
    MiniCalcLexer$Rules$STR_UNMATCHED_instance = new MiniCalcLexer$Rules('STR_UNMATCHED', 28);
    MiniCalcLexer$Rules$INTERPOLATION_CLOSE_instance = new MiniCalcLexer$Rules('INTERPOLATION_CLOSE', 29);
    MiniCalcLexer$Rules$INTERP_WS_instance = new MiniCalcLexer$Rules('INTERP_WS', 30);
    MiniCalcLexer$Rules$INTERP_AS_instance = new MiniCalcLexer$Rules('INTERP_AS', 31);
    MiniCalcLexer$Rules$INTERP_INT_instance = new MiniCalcLexer$Rules('INTERP_INT', 32);
    MiniCalcLexer$Rules$INTERP_DECIMAL_instance = new MiniCalcLexer$Rules('INTERP_DECIMAL', 33);
    MiniCalcLexer$Rules$INTERP_STRING_instance = new MiniCalcLexer$Rules('INTERP_STRING', 34);
    MiniCalcLexer$Rules$INTERP_INTLIT_instance = new MiniCalcLexer$Rules('INTERP_INTLIT', 35);
    MiniCalcLexer$Rules$INTERP_DECLIT_instance = new MiniCalcLexer$Rules('INTERP_DECLIT', 36);
    MiniCalcLexer$Rules$INTERP_PLUS_instance = new MiniCalcLexer$Rules('INTERP_PLUS', 37);
    MiniCalcLexer$Rules$INTERP_MINUS_instance = new MiniCalcLexer$Rules('INTERP_MINUS', 38);
    MiniCalcLexer$Rules$INTERP_ASTERISK_instance = new MiniCalcLexer$Rules('INTERP_ASTERISK', 39);
    MiniCalcLexer$Rules$INTERP_DIVISION_instance = new MiniCalcLexer$Rules('INTERP_DIVISION', 40);
    MiniCalcLexer$Rules$INTERP_ASSIGN_instance = new MiniCalcLexer$Rules('INTERP_ASSIGN', 41);
    MiniCalcLexer$Rules$INTERP_LPAREN_instance = new MiniCalcLexer$Rules('INTERP_LPAREN', 42);
    MiniCalcLexer$Rules$INTERP_RPAREN_instance = new MiniCalcLexer$Rules('INTERP_RPAREN', 43);
    MiniCalcLexer$Rules$INTERP_ID_instance = new MiniCalcLexer$Rules('INTERP_ID', 44);
    MiniCalcLexer$Rules$INTERP_STRING_OPEN_instance = new MiniCalcLexer$Rules('INTERP_STRING_OPEN', 45);
    MiniCalcLexer$Rules$INTERP_UNMATCHED_instance = new MiniCalcLexer$Rules('INTERP_UNMATCHED', 46);
  }
  var MiniCalcLexer$Rules$NEWLINE_instance;
  function MiniCalcLexer$Rules$NEWLINE_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$NEWLINE_instance;
  }
  var MiniCalcLexer$Rules$WS_instance;
  function MiniCalcLexer$Rules$WS_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$WS_instance;
  }
  var MiniCalcLexer$Rules$INPUT_instance;
  function MiniCalcLexer$Rules$INPUT_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INPUT_instance;
  }
  var MiniCalcLexer$Rules$VAR_instance;
  function MiniCalcLexer$Rules$VAR_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$VAR_instance;
  }
  var MiniCalcLexer$Rules$PRINT_instance;
  function MiniCalcLexer$Rules$PRINT_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$PRINT_instance;
  }
  var MiniCalcLexer$Rules$AS_instance;
  function MiniCalcLexer$Rules$AS_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$AS_instance;
  }
  var MiniCalcLexer$Rules$INT_instance;
  function MiniCalcLexer$Rules$INT_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INT_instance;
  }
  var MiniCalcLexer$Rules$DECIMAL_instance;
  function MiniCalcLexer$Rules$DECIMAL_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$DECIMAL_instance;
  }
  var MiniCalcLexer$Rules$STRING_instance;
  function MiniCalcLexer$Rules$STRING_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$STRING_instance;
  }
  var MiniCalcLexer$Rules$ID_instance;
  function MiniCalcLexer$Rules$ID_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$ID_instance;
  }
  var MiniCalcLexer$Rules$INTLIT_instance;
  function MiniCalcLexer$Rules$INTLIT_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTLIT_instance;
  }
  var MiniCalcLexer$Rules$DECLIT_instance;
  function MiniCalcLexer$Rules$DECLIT_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$DECLIT_instance;
  }
  var MiniCalcLexer$Rules$PLUS_instance;
  function MiniCalcLexer$Rules$PLUS_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$PLUS_instance;
  }
  var MiniCalcLexer$Rules$MINUS_instance;
  function MiniCalcLexer$Rules$MINUS_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$MINUS_instance;
  }
  var MiniCalcLexer$Rules$ASTERISK_instance;
  function MiniCalcLexer$Rules$ASTERISK_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$ASTERISK_instance;
  }
  var MiniCalcLexer$Rules$DIVISION_instance;
  function MiniCalcLexer$Rules$DIVISION_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$DIVISION_instance;
  }
  var MiniCalcLexer$Rules$ASSIGN_instance;
  function MiniCalcLexer$Rules$ASSIGN_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$ASSIGN_instance;
  }
  var MiniCalcLexer$Rules$LPAREN_instance;
  function MiniCalcLexer$Rules$LPAREN_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$LPAREN_instance;
  }
  var MiniCalcLexer$Rules$RPAREN_instance;
  function MiniCalcLexer$Rules$RPAREN_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$RPAREN_instance;
  }
  var MiniCalcLexer$Rules$STRING_OPEN_instance;
  function MiniCalcLexer$Rules$STRING_OPEN_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$STRING_OPEN_instance;
  }
  var MiniCalcLexer$Rules$UNMATCHED_instance;
  function MiniCalcLexer$Rules$UNMATCHED_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$UNMATCHED_instance;
  }
  var MiniCalcLexer$Rules$ESCAPE_STRING_DELIMITER_instance;
  function MiniCalcLexer$Rules$ESCAPE_STRING_DELIMITER_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$ESCAPE_STRING_DELIMITER_instance;
  }
  var MiniCalcLexer$Rules$ESCAPE_SLASH_instance;
  function MiniCalcLexer$Rules$ESCAPE_SLASH_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$ESCAPE_SLASH_instance;
  }
  var MiniCalcLexer$Rules$ESCAPE_NEWLINE_instance;
  function MiniCalcLexer$Rules$ESCAPE_NEWLINE_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$ESCAPE_NEWLINE_instance;
  }
  var MiniCalcLexer$Rules$ESCAPE_SHARP_instance;
  function MiniCalcLexer$Rules$ESCAPE_SHARP_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$ESCAPE_SHARP_instance;
  }
  var MiniCalcLexer$Rules$STRING_CLOSE_instance;
  function MiniCalcLexer$Rules$STRING_CLOSE_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$STRING_CLOSE_instance;
  }
  var MiniCalcLexer$Rules$INTERPOLATION_OPEN_instance;
  function MiniCalcLexer$Rules$INTERPOLATION_OPEN_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERPOLATION_OPEN_instance;
  }
  var MiniCalcLexer$Rules$STRING_CONTENT_instance;
  function MiniCalcLexer$Rules$STRING_CONTENT_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$STRING_CONTENT_instance;
  }
  var MiniCalcLexer$Rules$STR_UNMATCHED_instance;
  function MiniCalcLexer$Rules$STR_UNMATCHED_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$STR_UNMATCHED_instance;
  }
  var MiniCalcLexer$Rules$INTERPOLATION_CLOSE_instance;
  function MiniCalcLexer$Rules$INTERPOLATION_CLOSE_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERPOLATION_CLOSE_instance;
  }
  var MiniCalcLexer$Rules$INTERP_WS_instance;
  function MiniCalcLexer$Rules$INTERP_WS_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_WS_instance;
  }
  var MiniCalcLexer$Rules$INTERP_AS_instance;
  function MiniCalcLexer$Rules$INTERP_AS_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_AS_instance;
  }
  var MiniCalcLexer$Rules$INTERP_INT_instance;
  function MiniCalcLexer$Rules$INTERP_INT_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_INT_instance;
  }
  var MiniCalcLexer$Rules$INTERP_DECIMAL_instance;
  function MiniCalcLexer$Rules$INTERP_DECIMAL_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_DECIMAL_instance;
  }
  var MiniCalcLexer$Rules$INTERP_STRING_instance;
  function MiniCalcLexer$Rules$INTERP_STRING_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_STRING_instance;
  }
  var MiniCalcLexer$Rules$INTERP_INTLIT_instance;
  function MiniCalcLexer$Rules$INTERP_INTLIT_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_INTLIT_instance;
  }
  var MiniCalcLexer$Rules$INTERP_DECLIT_instance;
  function MiniCalcLexer$Rules$INTERP_DECLIT_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_DECLIT_instance;
  }
  var MiniCalcLexer$Rules$INTERP_PLUS_instance;
  function MiniCalcLexer$Rules$INTERP_PLUS_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_PLUS_instance;
  }
  var MiniCalcLexer$Rules$INTERP_MINUS_instance;
  function MiniCalcLexer$Rules$INTERP_MINUS_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_MINUS_instance;
  }
  var MiniCalcLexer$Rules$INTERP_ASTERISK_instance;
  function MiniCalcLexer$Rules$INTERP_ASTERISK_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_ASTERISK_instance;
  }
  var MiniCalcLexer$Rules$INTERP_DIVISION_instance;
  function MiniCalcLexer$Rules$INTERP_DIVISION_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_DIVISION_instance;
  }
  var MiniCalcLexer$Rules$INTERP_ASSIGN_instance;
  function MiniCalcLexer$Rules$INTERP_ASSIGN_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_ASSIGN_instance;
  }
  var MiniCalcLexer$Rules$INTERP_LPAREN_instance;
  function MiniCalcLexer$Rules$INTERP_LPAREN_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_LPAREN_instance;
  }
  var MiniCalcLexer$Rules$INTERP_RPAREN_instance;
  function MiniCalcLexer$Rules$INTERP_RPAREN_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_RPAREN_instance;
  }
  var MiniCalcLexer$Rules$INTERP_ID_instance;
  function MiniCalcLexer$Rules$INTERP_ID_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_ID_instance;
  }
  var MiniCalcLexer$Rules$INTERP_STRING_OPEN_instance;
  function MiniCalcLexer$Rules$INTERP_STRING_OPEN_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_STRING_OPEN_instance;
  }
  var MiniCalcLexer$Rules$INTERP_UNMATCHED_instance;
  function MiniCalcLexer$Rules$INTERP_UNMATCHED_getInstance() {
    MiniCalcLexer$Rules_initFields();
    return MiniCalcLexer$Rules$INTERP_UNMATCHED_instance;
  }
  MiniCalcLexer$Rules.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rules',
    interfaces: [Enum]
  };
  function MiniCalcLexer$Rules$values() {
    return [MiniCalcLexer$Rules$NEWLINE_getInstance(), MiniCalcLexer$Rules$WS_getInstance(), MiniCalcLexer$Rules$INPUT_getInstance(), MiniCalcLexer$Rules$VAR_getInstance(), MiniCalcLexer$Rules$PRINT_getInstance(), MiniCalcLexer$Rules$AS_getInstance(), MiniCalcLexer$Rules$INT_getInstance(), MiniCalcLexer$Rules$DECIMAL_getInstance(), MiniCalcLexer$Rules$STRING_getInstance(), MiniCalcLexer$Rules$ID_getInstance(), MiniCalcLexer$Rules$INTLIT_getInstance(), MiniCalcLexer$Rules$DECLIT_getInstance(), MiniCalcLexer$Rules$PLUS_getInstance(), MiniCalcLexer$Rules$MINUS_getInstance(), MiniCalcLexer$Rules$ASTERISK_getInstance(), MiniCalcLexer$Rules$DIVISION_getInstance(), MiniCalcLexer$Rules$ASSIGN_getInstance(), MiniCalcLexer$Rules$LPAREN_getInstance(), MiniCalcLexer$Rules$RPAREN_getInstance(), MiniCalcLexer$Rules$STRING_OPEN_getInstance(), MiniCalcLexer$Rules$UNMATCHED_getInstance(), MiniCalcLexer$Rules$ESCAPE_STRING_DELIMITER_getInstance(), MiniCalcLexer$Rules$ESCAPE_SLASH_getInstance(), MiniCalcLexer$Rules$ESCAPE_NEWLINE_getInstance(), MiniCalcLexer$Rules$ESCAPE_SHARP_getInstance(), MiniCalcLexer$Rules$STRING_CLOSE_getInstance(), MiniCalcLexer$Rules$INTERPOLATION_OPEN_getInstance(), MiniCalcLexer$Rules$STRING_CONTENT_getInstance(), MiniCalcLexer$Rules$STR_UNMATCHED_getInstance(), MiniCalcLexer$Rules$INTERPOLATION_CLOSE_getInstance(), MiniCalcLexer$Rules$INTERP_WS_getInstance(), MiniCalcLexer$Rules$INTERP_AS_getInstance(), MiniCalcLexer$Rules$INTERP_INT_getInstance(), MiniCalcLexer$Rules$INTERP_DECIMAL_getInstance(), MiniCalcLexer$Rules$INTERP_STRING_getInstance(), MiniCalcLexer$Rules$INTERP_INTLIT_getInstance(), MiniCalcLexer$Rules$INTERP_DECLIT_getInstance(), MiniCalcLexer$Rules$INTERP_PLUS_getInstance(), MiniCalcLexer$Rules$INTERP_MINUS_getInstance(), MiniCalcLexer$Rules$INTERP_ASTERISK_getInstance(), MiniCalcLexer$Rules$INTERP_DIVISION_getInstance(), MiniCalcLexer$Rules$INTERP_ASSIGN_getInstance(), MiniCalcLexer$Rules$INTERP_LPAREN_getInstance(), MiniCalcLexer$Rules$INTERP_RPAREN_getInstance(), MiniCalcLexer$Rules$INTERP_ID_getInstance(), MiniCalcLexer$Rules$INTERP_STRING_OPEN_getInstance(), MiniCalcLexer$Rules$INTERP_UNMATCHED_getInstance()];
  }
  MiniCalcLexer$Rules.values = MiniCalcLexer$Rules$values;
  function MiniCalcLexer$Rules$valueOf(name) {
    switch (name) {
      case 'NEWLINE':
        return MiniCalcLexer$Rules$NEWLINE_getInstance();
      case 'WS':
        return MiniCalcLexer$Rules$WS_getInstance();
      case 'INPUT':
        return MiniCalcLexer$Rules$INPUT_getInstance();
      case 'VAR':
        return MiniCalcLexer$Rules$VAR_getInstance();
      case 'PRINT':
        return MiniCalcLexer$Rules$PRINT_getInstance();
      case 'AS':
        return MiniCalcLexer$Rules$AS_getInstance();
      case 'INT':
        return MiniCalcLexer$Rules$INT_getInstance();
      case 'DECIMAL':
        return MiniCalcLexer$Rules$DECIMAL_getInstance();
      case 'STRING':
        return MiniCalcLexer$Rules$STRING_getInstance();
      case 'ID':
        return MiniCalcLexer$Rules$ID_getInstance();
      case 'INTLIT':
        return MiniCalcLexer$Rules$INTLIT_getInstance();
      case 'DECLIT':
        return MiniCalcLexer$Rules$DECLIT_getInstance();
      case 'PLUS':
        return MiniCalcLexer$Rules$PLUS_getInstance();
      case 'MINUS':
        return MiniCalcLexer$Rules$MINUS_getInstance();
      case 'ASTERISK':
        return MiniCalcLexer$Rules$ASTERISK_getInstance();
      case 'DIVISION':
        return MiniCalcLexer$Rules$DIVISION_getInstance();
      case 'ASSIGN':
        return MiniCalcLexer$Rules$ASSIGN_getInstance();
      case 'LPAREN':
        return MiniCalcLexer$Rules$LPAREN_getInstance();
      case 'RPAREN':
        return MiniCalcLexer$Rules$RPAREN_getInstance();
      case 'STRING_OPEN':
        return MiniCalcLexer$Rules$STRING_OPEN_getInstance();
      case 'UNMATCHED':
        return MiniCalcLexer$Rules$UNMATCHED_getInstance();
      case 'ESCAPE_STRING_DELIMITER':
        return MiniCalcLexer$Rules$ESCAPE_STRING_DELIMITER_getInstance();
      case 'ESCAPE_SLASH':
        return MiniCalcLexer$Rules$ESCAPE_SLASH_getInstance();
      case 'ESCAPE_NEWLINE':
        return MiniCalcLexer$Rules$ESCAPE_NEWLINE_getInstance();
      case 'ESCAPE_SHARP':
        return MiniCalcLexer$Rules$ESCAPE_SHARP_getInstance();
      case 'STRING_CLOSE':
        return MiniCalcLexer$Rules$STRING_CLOSE_getInstance();
      case 'INTERPOLATION_OPEN':
        return MiniCalcLexer$Rules$INTERPOLATION_OPEN_getInstance();
      case 'STRING_CONTENT':
        return MiniCalcLexer$Rules$STRING_CONTENT_getInstance();
      case 'STR_UNMATCHED':
        return MiniCalcLexer$Rules$STR_UNMATCHED_getInstance();
      case 'INTERPOLATION_CLOSE':
        return MiniCalcLexer$Rules$INTERPOLATION_CLOSE_getInstance();
      case 'INTERP_WS':
        return MiniCalcLexer$Rules$INTERP_WS_getInstance();
      case 'INTERP_AS':
        return MiniCalcLexer$Rules$INTERP_AS_getInstance();
      case 'INTERP_INT':
        return MiniCalcLexer$Rules$INTERP_INT_getInstance();
      case 'INTERP_DECIMAL':
        return MiniCalcLexer$Rules$INTERP_DECIMAL_getInstance();
      case 'INTERP_STRING':
        return MiniCalcLexer$Rules$INTERP_STRING_getInstance();
      case 'INTERP_INTLIT':
        return MiniCalcLexer$Rules$INTERP_INTLIT_getInstance();
      case 'INTERP_DECLIT':
        return MiniCalcLexer$Rules$INTERP_DECLIT_getInstance();
      case 'INTERP_PLUS':
        return MiniCalcLexer$Rules$INTERP_PLUS_getInstance();
      case 'INTERP_MINUS':
        return MiniCalcLexer$Rules$INTERP_MINUS_getInstance();
      case 'INTERP_ASTERISK':
        return MiniCalcLexer$Rules$INTERP_ASTERISK_getInstance();
      case 'INTERP_DIVISION':
        return MiniCalcLexer$Rules$INTERP_DIVISION_getInstance();
      case 'INTERP_ASSIGN':
        return MiniCalcLexer$Rules$INTERP_ASSIGN_getInstance();
      case 'INTERP_LPAREN':
        return MiniCalcLexer$Rules$INTERP_LPAREN_getInstance();
      case 'INTERP_RPAREN':
        return MiniCalcLexer$Rules$INTERP_RPAREN_getInstance();
      case 'INTERP_ID':
        return MiniCalcLexer$Rules$INTERP_ID_getInstance();
      case 'INTERP_STRING_OPEN':
        return MiniCalcLexer$Rules$INTERP_STRING_OPEN_getInstance();
      case 'INTERP_UNMATCHED':
        return MiniCalcLexer$Rules$INTERP_UNMATCHED_getInstance();
      default:throwISE('No enum constant MiniCalcLexer.Rules.' + name);
    }
  }
  MiniCalcLexer$Rules.valueOf_61zpoe$ = MiniCalcLexer$Rules$valueOf;
  MiniCalcLexer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MiniCalcLexer',
    interfaces: [Lexer]
  };
  function main(args) {
    var lexer = new MiniCalcLexer('1 + 2');
    var token = null;
    do {
      token = lexer.getNextToken();
      println('TOKEN ' + toString(token));
    }
     while ((token != null ? token.getType() : null) !== -1);
  }
  Object.defineProperty(MiniCalcLexer, 'Companion', {
    get: MiniCalcLexer$Companion_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'NEWLINE', {
    get: MiniCalcLexer$Tokens$NEWLINE_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'WS', {
    get: MiniCalcLexer$Tokens$WS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'INPUT', {
    get: MiniCalcLexer$Tokens$INPUT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'VAR', {
    get: MiniCalcLexer$Tokens$VAR_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'PRINT', {
    get: MiniCalcLexer$Tokens$PRINT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'AS', {
    get: MiniCalcLexer$Tokens$AS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'INT', {
    get: MiniCalcLexer$Tokens$INT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'DECIMAL', {
    get: MiniCalcLexer$Tokens$DECIMAL_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'STRING', {
    get: MiniCalcLexer$Tokens$STRING_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'ID', {
    get: MiniCalcLexer$Tokens$ID_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'INTLIT', {
    get: MiniCalcLexer$Tokens$INTLIT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'DECLIT', {
    get: MiniCalcLexer$Tokens$DECLIT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'PLUS', {
    get: MiniCalcLexer$Tokens$PLUS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'MINUS', {
    get: MiniCalcLexer$Tokens$MINUS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'ASTERISK', {
    get: MiniCalcLexer$Tokens$ASTERISK_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'DIVISION', {
    get: MiniCalcLexer$Tokens$DIVISION_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'ASSIGN', {
    get: MiniCalcLexer$Tokens$ASSIGN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'LPAREN', {
    get: MiniCalcLexer$Tokens$LPAREN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'RPAREN', {
    get: MiniCalcLexer$Tokens$RPAREN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'STRING_OPEN', {
    get: MiniCalcLexer$Tokens$STRING_OPEN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'UNMATCHED', {
    get: MiniCalcLexer$Tokens$UNMATCHED_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'ESCAPE_STRING_DELIMITER', {
    get: MiniCalcLexer$Tokens$ESCAPE_STRING_DELIMITER_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'ESCAPE_SLASH', {
    get: MiniCalcLexer$Tokens$ESCAPE_SLASH_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'ESCAPE_NEWLINE', {
    get: MiniCalcLexer$Tokens$ESCAPE_NEWLINE_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'ESCAPE_SHARP', {
    get: MiniCalcLexer$Tokens$ESCAPE_SHARP_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'STRING_CLOSE', {
    get: MiniCalcLexer$Tokens$STRING_CLOSE_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'INTERPOLATION_OPEN', {
    get: MiniCalcLexer$Tokens$INTERPOLATION_OPEN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'STRING_CONTENT', {
    get: MiniCalcLexer$Tokens$STRING_CONTENT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Tokens, 'INTERPOLATION_CLOSE', {
    get: MiniCalcLexer$Tokens$INTERPOLATION_CLOSE_getInstance
  });
  MiniCalcLexer.Tokens = MiniCalcLexer$Tokens;
  Object.defineProperty(MiniCalcLexer$Channels, 'DEFAULT_TOKEN_CHANNEL', {
    get: MiniCalcLexer$Channels$DEFAULT_TOKEN_CHANNEL_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Channels, 'HIDDEN', {
    get: MiniCalcLexer$Channels$HIDDEN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Channels, 'WHITESPACE', {
    get: MiniCalcLexer$Channels$WHITESPACE_getInstance
  });
  MiniCalcLexer.Channels = MiniCalcLexer$Channels;
  Object.defineProperty(MiniCalcLexer$Modes, 'DEFAULT_MODE', {
    get: MiniCalcLexer$Modes$DEFAULT_MODE_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Modes, 'MODE_IN_STRING', {
    get: MiniCalcLexer$Modes$MODE_IN_STRING_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Modes, 'MODE_IN_INTERPOLATION', {
    get: MiniCalcLexer$Modes$MODE_IN_INTERPOLATION_getInstance
  });
  MiniCalcLexer.Modes = MiniCalcLexer$Modes;
  Object.defineProperty(MiniCalcLexer$Rules, 'NEWLINE', {
    get: MiniCalcLexer$Rules$NEWLINE_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'WS', {
    get: MiniCalcLexer$Rules$WS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INPUT', {
    get: MiniCalcLexer$Rules$INPUT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'VAR', {
    get: MiniCalcLexer$Rules$VAR_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'PRINT', {
    get: MiniCalcLexer$Rules$PRINT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'AS', {
    get: MiniCalcLexer$Rules$AS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INT', {
    get: MiniCalcLexer$Rules$INT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'DECIMAL', {
    get: MiniCalcLexer$Rules$DECIMAL_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'STRING', {
    get: MiniCalcLexer$Rules$STRING_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'ID', {
    get: MiniCalcLexer$Rules$ID_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTLIT', {
    get: MiniCalcLexer$Rules$INTLIT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'DECLIT', {
    get: MiniCalcLexer$Rules$DECLIT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'PLUS', {
    get: MiniCalcLexer$Rules$PLUS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'MINUS', {
    get: MiniCalcLexer$Rules$MINUS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'ASTERISK', {
    get: MiniCalcLexer$Rules$ASTERISK_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'DIVISION', {
    get: MiniCalcLexer$Rules$DIVISION_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'ASSIGN', {
    get: MiniCalcLexer$Rules$ASSIGN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'LPAREN', {
    get: MiniCalcLexer$Rules$LPAREN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'RPAREN', {
    get: MiniCalcLexer$Rules$RPAREN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'STRING_OPEN', {
    get: MiniCalcLexer$Rules$STRING_OPEN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'UNMATCHED', {
    get: MiniCalcLexer$Rules$UNMATCHED_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'ESCAPE_STRING_DELIMITER', {
    get: MiniCalcLexer$Rules$ESCAPE_STRING_DELIMITER_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'ESCAPE_SLASH', {
    get: MiniCalcLexer$Rules$ESCAPE_SLASH_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'ESCAPE_NEWLINE', {
    get: MiniCalcLexer$Rules$ESCAPE_NEWLINE_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'ESCAPE_SHARP', {
    get: MiniCalcLexer$Rules$ESCAPE_SHARP_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'STRING_CLOSE', {
    get: MiniCalcLexer$Rules$STRING_CLOSE_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERPOLATION_OPEN', {
    get: MiniCalcLexer$Rules$INTERPOLATION_OPEN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'STRING_CONTENT', {
    get: MiniCalcLexer$Rules$STRING_CONTENT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'STR_UNMATCHED', {
    get: MiniCalcLexer$Rules$STR_UNMATCHED_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERPOLATION_CLOSE', {
    get: MiniCalcLexer$Rules$INTERPOLATION_CLOSE_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_WS', {
    get: MiniCalcLexer$Rules$INTERP_WS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_AS', {
    get: MiniCalcLexer$Rules$INTERP_AS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_INT', {
    get: MiniCalcLexer$Rules$INTERP_INT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_DECIMAL', {
    get: MiniCalcLexer$Rules$INTERP_DECIMAL_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_STRING', {
    get: MiniCalcLexer$Rules$INTERP_STRING_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_INTLIT', {
    get: MiniCalcLexer$Rules$INTERP_INTLIT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_DECLIT', {
    get: MiniCalcLexer$Rules$INTERP_DECLIT_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_PLUS', {
    get: MiniCalcLexer$Rules$INTERP_PLUS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_MINUS', {
    get: MiniCalcLexer$Rules$INTERP_MINUS_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_ASTERISK', {
    get: MiniCalcLexer$Rules$INTERP_ASTERISK_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_DIVISION', {
    get: MiniCalcLexer$Rules$INTERP_DIVISION_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_ASSIGN', {
    get: MiniCalcLexer$Rules$INTERP_ASSIGN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_LPAREN', {
    get: MiniCalcLexer$Rules$INTERP_LPAREN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_RPAREN', {
    get: MiniCalcLexer$Rules$INTERP_RPAREN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_ID', {
    get: MiniCalcLexer$Rules$INTERP_ID_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_STRING_OPEN', {
    get: MiniCalcLexer$Rules$INTERP_STRING_OPEN_getInstance
  });
  Object.defineProperty(MiniCalcLexer$Rules, 'INTERP_UNMATCHED', {
    get: MiniCalcLexer$Rules$INTERP_UNMATCHED_getInstance
  });
  MiniCalcLexer.Rules = MiniCalcLexer$Rules;
  _.MiniCalcLexer = MiniCalcLexer;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('antlr-kotlin-runtime-examples-js', _);
  return _;
}(typeof this['antlr-kotlin-runtime-examples-js'] === 'undefined' ? {} : this['antlr-kotlin-runtime-examples-js'], kotlin, this['antlr-kotlin-runtime-js']);

//# sourceMappingURL=antlr-kotlin-runtime-examples-js.js.map
