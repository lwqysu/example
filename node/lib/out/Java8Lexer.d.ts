import { ATN, CharStream, DFA, Lexer } from "antlr4";
export default class Java8Lexer extends Lexer {
    static readonly ABSTRACT = 1;
    static readonly ASSERT = 2;
    static readonly BOOLEAN = 3;
    static readonly BREAK = 4;
    static readonly BYTE = 5;
    static readonly CASE = 6;
    static readonly CATCH = 7;
    static readonly CHAR = 8;
    static readonly CLASS = 9;
    static readonly CONST = 10;
    static readonly CONTINUE = 11;
    static readonly DEFAULT = 12;
    static readonly DO = 13;
    static readonly DOUBLE = 14;
    static readonly ELSE = 15;
    static readonly ENUM = 16;
    static readonly EXTENDS = 17;
    static readonly FINAL = 18;
    static readonly FINALLY = 19;
    static readonly FLOAT = 20;
    static readonly FOR = 21;
    static readonly IF = 22;
    static readonly GOTO = 23;
    static readonly IMPLEMENTS = 24;
    static readonly IMPORT = 25;
    static readonly INSTANCEOF = 26;
    static readonly INT = 27;
    static readonly INTERFACE = 28;
    static readonly LONG = 29;
    static readonly NATIVE = 30;
    static readonly NEW = 31;
    static readonly PACKAGE = 32;
    static readonly PRIVATE = 33;
    static readonly PROTECTED = 34;
    static readonly PUBLIC = 35;
    static readonly RETURN = 36;
    static readonly SHORT = 37;
    static readonly STATIC = 38;
    static readonly STRICTFP = 39;
    static readonly SUPER = 40;
    static readonly SWITCH = 41;
    static readonly SYNCHRONIZED = 42;
    static readonly THIS = 43;
    static readonly THROW = 44;
    static readonly THROWS = 45;
    static readonly TRANSIENT = 46;
    static readonly TRY = 47;
    static readonly VOID = 48;
    static readonly VOLATILE = 49;
    static readonly WHILE = 50;
    static readonly IntegerLiteral = 51;
    static readonly FloatingPointLiteral = 52;
    static readonly BooleanLiteral = 53;
    static readonly CharacterLiteral = 54;
    static readonly StringLiteral = 55;
    static readonly NullLiteral = 56;
    static readonly LPAREN = 57;
    static readonly RPAREN = 58;
    static readonly LBRACE = 59;
    static readonly RBRACE = 60;
    static readonly LBRACK = 61;
    static readonly RBRACK = 62;
    static readonly SEMI = 63;
    static readonly COMMA = 64;
    static readonly DOT = 65;
    static readonly ASSIGN = 66;
    static readonly GT = 67;
    static readonly LT = 68;
    static readonly BANG = 69;
    static readonly TILDE = 70;
    static readonly QUESTION = 71;
    static readonly COLON = 72;
    static readonly EQUAL = 73;
    static readonly LE = 74;
    static readonly GE = 75;
    static readonly NOTEQUAL = 76;
    static readonly AND = 77;
    static readonly OR = 78;
    static readonly INC = 79;
    static readonly DEC = 80;
    static readonly ADD = 81;
    static readonly SUB = 82;
    static readonly MUL = 83;
    static readonly DIV = 84;
    static readonly BITAND = 85;
    static readonly BITOR = 86;
    static readonly CARET = 87;
    static readonly MOD = 88;
    static readonly ARROW = 89;
    static readonly COLONCOLON = 90;
    static readonly ADD_ASSIGN = 91;
    static readonly SUB_ASSIGN = 92;
    static readonly MUL_ASSIGN = 93;
    static readonly DIV_ASSIGN = 94;
    static readonly AND_ASSIGN = 95;
    static readonly OR_ASSIGN = 96;
    static readonly XOR_ASSIGN = 97;
    static readonly MOD_ASSIGN = 98;
    static readonly LSHIFT_ASSIGN = 99;
    static readonly RSHIFT_ASSIGN = 100;
    static readonly URSHIFT_ASSIGN = 101;
    static readonly Identifier = 102;
    static readonly AT = 103;
    static readonly ELLIPSIS = 104;
    static readonly WS = 105;
    static readonly COMMENT = 106;
    static readonly LINE_COMMENT = 107;
    static readonly EOF: number;
    static readonly channelNames: string[];
    static readonly literalNames: string[];
    static readonly symbolicNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    constructor(input: CharStream);
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    get channelNames(): string[];
    get modeNames(): string[];
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): ATN;
    static DecisionsToDFA: DFA[];
}
//# sourceMappingURL=Java8Lexer.d.ts.map