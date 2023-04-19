/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
// Generated from Java8Parser.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import Java8ParserListener from "./Java8ParserListener.js";
import Java8ParserVisitor from "./Java8ParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class Java8Parser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly ASSERT = 2;
	public static readonly BOOLEAN = 3;
	public static readonly BREAK = 4;
	public static readonly BYTE = 5;
	public static readonly CASE = 6;
	public static readonly CATCH = 7;
	public static readonly CHAR = 8;
	public static readonly CLASS = 9;
	public static readonly CONST = 10;
	public static readonly CONTINUE = 11;
	public static readonly DEFAULT = 12;
	public static readonly DO = 13;
	public static readonly DOUBLE = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXTENDS = 17;
	public static readonly FINAL = 18;
	public static readonly FINALLY = 19;
	public static readonly FLOAT = 20;
	public static readonly FOR = 21;
	public static readonly IF = 22;
	public static readonly GOTO = 23;
	public static readonly IMPLEMENTS = 24;
	public static readonly IMPORT = 25;
	public static readonly INSTANCEOF = 26;
	public static readonly INT = 27;
	public static readonly INTERFACE = 28;
	public static readonly LONG = 29;
	public static readonly NATIVE = 30;
	public static readonly NEW = 31;
	public static readonly PACKAGE = 32;
	public static readonly PRIVATE = 33;
	public static readonly PROTECTED = 34;
	public static readonly PUBLIC = 35;
	public static readonly RETURN = 36;
	public static readonly SHORT = 37;
	public static readonly STATIC = 38;
	public static readonly STRICTFP = 39;
	public static readonly SUPER = 40;
	public static readonly SWITCH = 41;
	public static readonly SYNCHRONIZED = 42;
	public static readonly THIS = 43;
	public static readonly THROW = 44;
	public static readonly THROWS = 45;
	public static readonly TRANSIENT = 46;
	public static readonly TRY = 47;
	public static readonly VOID = 48;
	public static readonly VOLATILE = 49;
	public static readonly WHILE = 50;
	public static readonly IntegerLiteral = 51;
	public static readonly FloatingPointLiteral = 52;
	public static readonly BooleanLiteral = 53;
	public static readonly CharacterLiteral = 54;
	public static readonly StringLiteral = 55;
	public static readonly NullLiteral = 56;
	public static readonly LPAREN = 57;
	public static readonly RPAREN = 58;
	public static readonly LBRACE = 59;
	public static readonly RBRACE = 60;
	public static readonly LBRACK = 61;
	public static readonly RBRACK = 62;
	public static readonly SEMI = 63;
	public static readonly COMMA = 64;
	public static readonly DOT = 65;
	public static readonly ASSIGN = 66;
	public static readonly GT = 67;
	public static readonly LT = 68;
	public static readonly BANG = 69;
	public static readonly TILDE = 70;
	public static readonly QUESTION = 71;
	public static readonly COLON = 72;
	public static readonly EQUAL = 73;
	public static readonly LE = 74;
	public static readonly GE = 75;
	public static readonly NOTEQUAL = 76;
	public static readonly AND = 77;
	public static readonly OR = 78;
	public static readonly INC = 79;
	public static readonly DEC = 80;
	public static readonly ADD = 81;
	public static readonly SUB = 82;
	public static readonly MUL = 83;
	public static readonly DIV = 84;
	public static readonly BITAND = 85;
	public static readonly BITOR = 86;
	public static readonly CARET = 87;
	public static readonly MOD = 88;
	public static readonly ARROW = 89;
	public static readonly COLONCOLON = 90;
	public static readonly ADD_ASSIGN = 91;
	public static readonly SUB_ASSIGN = 92;
	public static readonly MUL_ASSIGN = 93;
	public static readonly DIV_ASSIGN = 94;
	public static readonly AND_ASSIGN = 95;
	public static readonly OR_ASSIGN = 96;
	public static readonly XOR_ASSIGN = 97;
	public static readonly MOD_ASSIGN = 98;
	public static readonly LSHIFT_ASSIGN = 99;
	public static readonly RSHIFT_ASSIGN = 100;
	public static readonly URSHIFT_ASSIGN = 101;
	public static readonly Identifier = 102;
	public static readonly AT = 103;
	public static readonly ELLIPSIS = 104;
	public static readonly WS = 105;
	public static readonly COMMENT = 106;
	public static readonly LINE_COMMENT = 107;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_literal = 0;
	public static readonly RULE_primitiveType = 1;
	public static readonly RULE_numericType = 2;
	public static readonly RULE_integralType = 3;
	public static readonly RULE_floatingPointType = 4;
	public static readonly RULE_referenceType = 5;
	public static readonly RULE_classOrInterfaceType = 6;
	public static readonly RULE_classType = 7;
	public static readonly RULE_classType_lf_classOrInterfaceType = 8;
	public static readonly RULE_classType_lfno_classOrInterfaceType = 9;
	public static readonly RULE_interfaceType = 10;
	public static readonly RULE_interfaceType_lf_classOrInterfaceType = 11;
	public static readonly RULE_interfaceType_lfno_classOrInterfaceType = 12;
	public static readonly RULE_typeVariable = 13;
	public static readonly RULE_arrayType = 14;
	public static readonly RULE_dims = 15;
	public static readonly RULE_typeParameter = 16;
	public static readonly RULE_typeParameterModifier = 17;
	public static readonly RULE_typeBound = 18;
	public static readonly RULE_additionalBound = 19;
	public static readonly RULE_typeArguments = 20;
	public static readonly RULE_typeArgumentList = 21;
	public static readonly RULE_typeArgument = 22;
	public static readonly RULE_wildcard = 23;
	public static readonly RULE_wildcardBounds = 24;
	public static readonly RULE_packageName = 25;
	public static readonly RULE_typeName = 26;
	public static readonly RULE_packageOrTypeName = 27;
	public static readonly RULE_expressionName = 28;
	public static readonly RULE_methodName = 29;
	public static readonly RULE_ambiguousName = 30;
	public static readonly RULE_compilationUnit = 31;
	public static readonly RULE_packageDeclaration = 32;
	public static readonly RULE_packageModifier = 33;
	public static readonly RULE_importDeclaration = 34;
	public static readonly RULE_singleTypeImportDeclaration = 35;
	public static readonly RULE_typeImportOnDemandDeclaration = 36;
	public static readonly RULE_singleStaticImportDeclaration = 37;
	public static readonly RULE_staticImportOnDemandDeclaration = 38;
	public static readonly RULE_typeDeclaration = 39;
	public static readonly RULE_classDeclaration = 40;
	public static readonly RULE_normalClassDeclaration = 41;
	public static readonly RULE_classModifier = 42;
	public static readonly RULE_typeParameters = 43;
	public static readonly RULE_typeParameterList = 44;
	public static readonly RULE_superclass = 45;
	public static readonly RULE_superinterfaces = 46;
	public static readonly RULE_interfaceTypeList = 47;
	public static readonly RULE_classBody = 48;
	public static readonly RULE_classBodyDeclaration = 49;
	public static readonly RULE_classMemberDeclaration = 50;
	public static readonly RULE_fieldDeclaration = 51;
	public static readonly RULE_fieldModifier = 52;
	public static readonly RULE_variableDeclaratorList = 53;
	public static readonly RULE_variableDeclarator = 54;
	public static readonly RULE_variableDeclaratorId = 55;
	public static readonly RULE_variableInitializer = 56;
	public static readonly RULE_unannType = 57;
	public static readonly RULE_unannPrimitiveType = 58;
	public static readonly RULE_unannReferenceType = 59;
	public static readonly RULE_unannClassOrInterfaceType = 60;
	public static readonly RULE_unannClassType = 61;
	public static readonly RULE_unannClassType_lf_unannClassOrInterfaceType = 62;
	public static readonly RULE_unannClassType_lfno_unannClassOrInterfaceType = 63;
	public static readonly RULE_unannInterfaceType = 64;
	public static readonly RULE_unannInterfaceType_lf_unannClassOrInterfaceType = 65;
	public static readonly RULE_unannInterfaceType_lfno_unannClassOrInterfaceType = 66;
	public static readonly RULE_unannTypeVariable = 67;
	public static readonly RULE_unannArrayType = 68;
	public static readonly RULE_methodDeclaration = 69;
	public static readonly RULE_methodModifier = 70;
	public static readonly RULE_methodHeader = 71;
	public static readonly RULE_result = 72;
	public static readonly RULE_methodDeclarator = 73;
	public static readonly RULE_formalParameterList = 74;
	public static readonly RULE_formalParameters = 75;
	public static readonly RULE_formalParameter = 76;
	public static readonly RULE_variableModifier = 77;
	public static readonly RULE_lastFormalParameter = 78;
	public static readonly RULE_receiverParameter = 79;
	public static readonly RULE_throws_ = 80;
	public static readonly RULE_exceptionTypeList = 81;
	public static readonly RULE_exceptionType = 82;
	public static readonly RULE_methodBody = 83;
	public static readonly RULE_instanceInitializer = 84;
	public static readonly RULE_staticInitializer = 85;
	public static readonly RULE_constructorDeclaration = 86;
	public static readonly RULE_constructorModifier = 87;
	public static readonly RULE_constructorDeclarator = 88;
	public static readonly RULE_simpleTypeName = 89;
	public static readonly RULE_constructorBody = 90;
	public static readonly RULE_explicitConstructorInvocation = 91;
	public static readonly RULE_enumDeclaration = 92;
	public static readonly RULE_enumBody = 93;
	public static readonly RULE_enumConstantList = 94;
	public static readonly RULE_enumConstant = 95;
	public static readonly RULE_enumConstantModifier = 96;
	public static readonly RULE_enumBodyDeclarations = 97;
	public static readonly RULE_interfaceDeclaration = 98;
	public static readonly RULE_normalInterfaceDeclaration = 99;
	public static readonly RULE_interfaceModifier = 100;
	public static readonly RULE_extendsInterfaces = 101;
	public static readonly RULE_interfaceBody = 102;
	public static readonly RULE_interfaceMemberDeclaration = 103;
	public static readonly RULE_constantDeclaration = 104;
	public static readonly RULE_constantModifier = 105;
	public static readonly RULE_interfaceMethodDeclaration = 106;
	public static readonly RULE_interfaceMethodModifier = 107;
	public static readonly RULE_annotationTypeDeclaration = 108;
	public static readonly RULE_annotationTypeBody = 109;
	public static readonly RULE_annotationTypeMemberDeclaration = 110;
	public static readonly RULE_annotationTypeElementDeclaration = 111;
	public static readonly RULE_annotationTypeElementModifier = 112;
	public static readonly RULE_defaultValue = 113;
	public static readonly RULE_annotation = 114;
	public static readonly RULE_normalAnnotation = 115;
	public static readonly RULE_elementValuePairList = 116;
	public static readonly RULE_elementValuePair = 117;
	public static readonly RULE_elementValue = 118;
	public static readonly RULE_elementValueArrayInitializer = 119;
	public static readonly RULE_elementValueList = 120;
	public static readonly RULE_markerAnnotation = 121;
	public static readonly RULE_singleElementAnnotation = 122;
	public static readonly RULE_arrayInitializer = 123;
	public static readonly RULE_variableInitializerList = 124;
	public static readonly RULE_block = 125;
	public static readonly RULE_blockStatements = 126;
	public static readonly RULE_blockStatement = 127;
	public static readonly RULE_localVariableDeclarationStatement = 128;
	public static readonly RULE_localVariableDeclaration = 129;
	public static readonly RULE_statement = 130;
	public static readonly RULE_statementNoShortIf = 131;
	public static readonly RULE_statementWithoutTrailingSubstatement = 132;
	public static readonly RULE_emptyStatement_ = 133;
	public static readonly RULE_labeledStatement = 134;
	public static readonly RULE_labeledStatementNoShortIf = 135;
	public static readonly RULE_expressionStatement = 136;
	public static readonly RULE_statementExpression = 137;
	public static readonly RULE_ifThenStatement = 138;
	public static readonly RULE_ifThenElseStatement = 139;
	public static readonly RULE_ifThenElseStatementNoShortIf = 140;
	public static readonly RULE_assertStatement = 141;
	public static readonly RULE_switchStatement = 142;
	public static readonly RULE_switchBlock = 143;
	public static readonly RULE_switchBlockStatementGroup = 144;
	public static readonly RULE_switchLabels = 145;
	public static readonly RULE_switchLabel = 146;
	public static readonly RULE_enumConstantName = 147;
	public static readonly RULE_whileStatement = 148;
	public static readonly RULE_whileStatementNoShortIf = 149;
	public static readonly RULE_doStatement = 150;
	public static readonly RULE_forStatement = 151;
	public static readonly RULE_forStatementNoShortIf = 152;
	public static readonly RULE_basicForStatement = 153;
	public static readonly RULE_basicForStatementNoShortIf = 154;
	public static readonly RULE_forInit = 155;
	public static readonly RULE_forUpdate = 156;
	public static readonly RULE_statementExpressionList = 157;
	public static readonly RULE_enhancedForStatement = 158;
	public static readonly RULE_enhancedForStatementNoShortIf = 159;
	public static readonly RULE_breakStatement = 160;
	public static readonly RULE_continueStatement = 161;
	public static readonly RULE_returnStatement = 162;
	public static readonly RULE_throwStatement = 163;
	public static readonly RULE_synchronizedStatement = 164;
	public static readonly RULE_tryStatement = 165;
	public static readonly RULE_catches = 166;
	public static readonly RULE_catchClause = 167;
	public static readonly RULE_catchFormalParameter = 168;
	public static readonly RULE_catchType = 169;
	public static readonly RULE_finally_ = 170;
	public static readonly RULE_tryWithResourcesStatement = 171;
	public static readonly RULE_resourceSpecification = 172;
	public static readonly RULE_resourceList = 173;
	public static readonly RULE_resource = 174;
	public static readonly RULE_primary = 175;
	public static readonly RULE_primaryNoNewArray = 176;
	public static readonly RULE_primaryNoNewArray_lf_arrayAccess = 177;
	public static readonly RULE_primaryNoNewArray_lfno_arrayAccess = 178;
	public static readonly RULE_primaryNoNewArray_lf_primary = 179;
	public static readonly RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary = 180;
	public static readonly RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary = 181;
	public static readonly RULE_primaryNoNewArray_lfno_primary = 182;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary = 183;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary = 184;
	public static readonly RULE_classInstanceCreationExpression = 185;
	public static readonly RULE_classInstanceCreationExpression_lf_primary = 186;
	public static readonly RULE_classInstanceCreationExpression_lfno_primary = 187;
	public static readonly RULE_typeArgumentsOrDiamond = 188;
	public static readonly RULE_fieldAccess = 189;
	public static readonly RULE_fieldAccess_lf_primary = 190;
	public static readonly RULE_fieldAccess_lfno_primary = 191;
	public static readonly RULE_arrayAccess = 192;
	public static readonly RULE_arrayAccess_lf_primary = 193;
	public static readonly RULE_arrayAccess_lfno_primary = 194;
	public static readonly RULE_methodInvocation = 195;
	public static readonly RULE_methodInvocation_lf_primary = 196;
	public static readonly RULE_methodInvocation_lfno_primary = 197;
	public static readonly RULE_argumentList = 198;
	public static readonly RULE_methodReference = 199;
	public static readonly RULE_methodReference_lf_primary = 200;
	public static readonly RULE_methodReference_lfno_primary = 201;
	public static readonly RULE_arrayCreationExpression = 202;
	public static readonly RULE_dimExprs = 203;
	public static readonly RULE_dimExpr = 204;
	public static readonly RULE_constantExpression = 205;
	public static readonly RULE_expression = 206;
	public static readonly RULE_lambdaExpression = 207;
	public static readonly RULE_lambdaParameters = 208;
	public static readonly RULE_inferredFormalParameterList = 209;
	public static readonly RULE_lambdaBody = 210;
	public static readonly RULE_assignmentExpression = 211;
	public static readonly RULE_assignment = 212;
	public static readonly RULE_leftHandSide = 213;
	public static readonly RULE_assignmentOperator = 214;
	public static readonly RULE_conditionalExpression = 215;
	public static readonly RULE_conditionalOrExpression = 216;
	public static readonly RULE_conditionalAndExpression = 217;
	public static readonly RULE_inclusiveOrExpression = 218;
	public static readonly RULE_exclusiveOrExpression = 219;
	public static readonly RULE_andExpression = 220;
	public static readonly RULE_equalityExpression = 221;
	public static readonly RULE_relationalExpression = 222;
	public static readonly RULE_shiftExpression = 223;
	public static readonly RULE_additiveExpression = 224;
	public static readonly RULE_multiplicativeExpression = 225;
	public static readonly RULE_unaryExpression = 226;
	public static readonly RULE_preIncrementExpression = 227;
	public static readonly RULE_preDecrementExpression = 228;
	public static readonly RULE_unaryExpressionNotPlusMinus = 229;
	public static readonly RULE_postfixExpression = 230;
	public static readonly RULE_postIncrementExpression = 231;
	public static readonly RULE_postIncrementExpression_lf_postfixExpression = 232;
	public static readonly RULE_postDecrementExpression = 233;
	public static readonly RULE_postDecrementExpression_lf_postfixExpression = 234;
	public static readonly RULE_castExpression = 235;
	public static readonly literalNames: (string | null)[] = [ null, "'abstract'", 
                                                            "'assert'", 
                                                            "'boolean'", 
                                                            "'break'", "'byte'", 
                                                            "'case'", "'catch'", 
                                                            "'char'", "'class'", 
                                                            "'const'", "'continue'", 
                                                            "'default'", 
                                                            "'do'", "'double'", 
                                                            "'else'", "'enum'", 
                                                            "'extends'", 
                                                            "'final'", "'finally'", 
                                                            "'float'", "'for'", 
                                                            "'if'", "'goto'", 
                                                            "'implements'", 
                                                            "'import'", 
                                                            "'instanceof'", 
                                                            "'int'", "'interface'", 
                                                            "'long'", "'native'", 
                                                            "'new'", "'package'", 
                                                            "'private'", 
                                                            "'protected'", 
                                                            "'public'", 
                                                            "'return'", 
                                                            "'short'", "'static'", 
                                                            "'strictfp'", 
                                                            "'super'", "'switch'", 
                                                            "'synchronized'", 
                                                            "'this'", "'throw'", 
                                                            "'throws'", 
                                                            "'transient'", 
                                                            "'try'", "'void'", 
                                                            "'volatile'", 
                                                            "'while'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'null'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "';'", 
                                                            "','", "'.'", 
                                                            "'='", "'>'", 
                                                            "'<'", "'!'", 
                                                            "'~'", "'?'", 
                                                            "':'", "'=='", 
                                                            "'<='", "'>='", 
                                                            "'!='", "'&&'", 
                                                            "'||'", "'++'", 
                                                            "'--'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'&'", 
                                                            "'|'", "'^'", 
                                                            "'%'", "'->'", 
                                                            "'::'", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'%='", "'<<='", 
                                                            "'>>='", "'>>>='", 
                                                            null, "'@'", 
                                                            "'...'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "ABSTRACT", 
                                                             "ASSERT", "BOOLEAN", 
                                                             "BREAK", "BYTE", 
                                                             "CASE", "CATCH", 
                                                             "CHAR", "CLASS", 
                                                             "CONST", "CONTINUE", 
                                                             "DEFAULT", 
                                                             "DO", "DOUBLE", 
                                                             "ELSE", "ENUM", 
                                                             "EXTENDS", 
                                                             "FINAL", "FINALLY", 
                                                             "FLOAT", "FOR", 
                                                             "IF", "GOTO", 
                                                             "IMPLEMENTS", 
                                                             "IMPORT", "INSTANCEOF", 
                                                             "INT", "INTERFACE", 
                                                             "LONG", "NATIVE", 
                                                             "NEW", "PACKAGE", 
                                                             "PRIVATE", 
                                                             "PROTECTED", 
                                                             "PUBLIC", "RETURN", 
                                                             "SHORT", "STATIC", 
                                                             "STRICTFP", 
                                                             "SUPER", "SWITCH", 
                                                             "SYNCHRONIZED", 
                                                             "THIS", "THROW", 
                                                             "THROWS", "TRANSIENT", 
                                                             "TRY", "VOID", 
                                                             "VOLATILE", 
                                                             "WHILE", "IntegerLiteral", 
                                                             "FloatingPointLiteral", 
                                                             "BooleanLiteral", 
                                                             "CharacterLiteral", 
                                                             "StringLiteral", 
                                                             "NullLiteral", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACE", "RBRACE", 
                                                             "LBRACK", "RBRACK", 
                                                             "SEMI", "COMMA", 
                                                             "DOT", "ASSIGN", 
                                                             "GT", "LT", 
                                                             "BANG", "TILDE", 
                                                             "QUESTION", 
                                                             "COLON", "EQUAL", 
                                                             "LE", "GE", 
                                                             "NOTEQUAL", 
                                                             "AND", "OR", 
                                                             "INC", "DEC", 
                                                             "ADD", "SUB", 
                                                             "MUL", "DIV", 
                                                             "BITAND", "BITOR", 
                                                             "CARET", "MOD", 
                                                             "ARROW", "COLONCOLON", 
                                                             "ADD_ASSIGN", 
                                                             "SUB_ASSIGN", 
                                                             "MUL_ASSIGN", 
                                                             "DIV_ASSIGN", 
                                                             "AND_ASSIGN", 
                                                             "OR_ASSIGN", 
                                                             "XOR_ASSIGN", 
                                                             "MOD_ASSIGN", 
                                                             "LSHIFT_ASSIGN", 
                                                             "RSHIFT_ASSIGN", 
                                                             "URSHIFT_ASSIGN", 
                                                             "Identifier", 
                                                             "AT", "ELLIPSIS", 
                                                             "WS", "COMMENT", 
                                                             "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"literal", "primitiveType", "numericType", "integralType", "floatingPointType", 
		"referenceType", "classOrInterfaceType", "classType", "classType_lf_classOrInterfaceType", 
		"classType_lfno_classOrInterfaceType", "interfaceType", "interfaceType_lf_classOrInterfaceType", 
		"interfaceType_lfno_classOrInterfaceType", "typeVariable", "arrayType", 
		"dims", "typeParameter", "typeParameterModifier", "typeBound", "additionalBound", 
		"typeArguments", "typeArgumentList", "typeArgument", "wildcard", "wildcardBounds", 
		"packageName", "typeName", "packageOrTypeName", "expressionName", "methodName", 
		"ambiguousName", "compilationUnit", "packageDeclaration", "packageModifier", 
		"importDeclaration", "singleTypeImportDeclaration", "typeImportOnDemandDeclaration", 
		"singleStaticImportDeclaration", "staticImportOnDemandDeclaration", "typeDeclaration", 
		"classDeclaration", "normalClassDeclaration", "classModifier", "typeParameters", 
		"typeParameterList", "superclass", "superinterfaces", "interfaceTypeList", 
		"classBody", "classBodyDeclaration", "classMemberDeclaration", "fieldDeclaration", 
		"fieldModifier", "variableDeclaratorList", "variableDeclarator", "variableDeclaratorId", 
		"variableInitializer", "unannType", "unannPrimitiveType", "unannReferenceType", 
		"unannClassOrInterfaceType", "unannClassType", "unannClassType_lf_unannClassOrInterfaceType", 
		"unannClassType_lfno_unannClassOrInterfaceType", "unannInterfaceType", 
		"unannInterfaceType_lf_unannClassOrInterfaceType", "unannInterfaceType_lfno_unannClassOrInterfaceType", 
		"unannTypeVariable", "unannArrayType", "methodDeclaration", "methodModifier", 
		"methodHeader", "result", "methodDeclarator", "formalParameterList", "formalParameters", 
		"formalParameter", "variableModifier", "lastFormalParameter", "receiverParameter", 
		"throws_", "exceptionTypeList", "exceptionType", "methodBody", "instanceInitializer", 
		"staticInitializer", "constructorDeclaration", "constructorModifier", 
		"constructorDeclarator", "simpleTypeName", "constructorBody", "explicitConstructorInvocation", 
		"enumDeclaration", "enumBody", "enumConstantList", "enumConstant", "enumConstantModifier", 
		"enumBodyDeclarations", "interfaceDeclaration", "normalInterfaceDeclaration", 
		"interfaceModifier", "extendsInterfaces", "interfaceBody", "interfaceMemberDeclaration", 
		"constantDeclaration", "constantModifier", "interfaceMethodDeclaration", 
		"interfaceMethodModifier", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeMemberDeclaration", "annotationTypeElementDeclaration", 
		"annotationTypeElementModifier", "defaultValue", "annotation", "normalAnnotation", 
		"elementValuePairList", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"elementValueList", "markerAnnotation", "singleElementAnnotation", "arrayInitializer", 
		"variableInitializerList", "block", "blockStatements", "blockStatement", 
		"localVariableDeclarationStatement", "localVariableDeclaration", "statement", 
		"statementNoShortIf", "statementWithoutTrailingSubstatement", "emptyStatement_", 
		"labeledStatement", "labeledStatementNoShortIf", "expressionStatement", 
		"statementExpression", "ifThenStatement", "ifThenElseStatement", "ifThenElseStatementNoShortIf", 
		"assertStatement", "switchStatement", "switchBlock", "switchBlockStatementGroup", 
		"switchLabels", "switchLabel", "enumConstantName", "whileStatement", "whileStatementNoShortIf", 
		"doStatement", "forStatement", "forStatementNoShortIf", "basicForStatement", 
		"basicForStatementNoShortIf", "forInit", "forUpdate", "statementExpressionList", 
		"enhancedForStatement", "enhancedForStatementNoShortIf", "breakStatement", 
		"continueStatement", "returnStatement", "throwStatement", "synchronizedStatement", 
		"tryStatement", "catches", "catchClause", "catchFormalParameter", "catchType", 
		"finally_", "tryWithResourcesStatement", "resourceSpecification", "resourceList", 
		"resource", "primary", "primaryNoNewArray", "primaryNoNewArray_lf_arrayAccess", 
		"primaryNoNewArray_lfno_arrayAccess", "primaryNoNewArray_lf_primary", 
		"primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary", "primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary", 
		"primaryNoNewArray_lfno_primary", "primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary", 
		"primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary", "classInstanceCreationExpression", 
		"classInstanceCreationExpression_lf_primary", "classInstanceCreationExpression_lfno_primary", 
		"typeArgumentsOrDiamond", "fieldAccess", "fieldAccess_lf_primary", "fieldAccess_lfno_primary", 
		"arrayAccess", "arrayAccess_lf_primary", "arrayAccess_lfno_primary", "methodInvocation", 
		"methodInvocation_lf_primary", "methodInvocation_lfno_primary", "argumentList", 
		"methodReference", "methodReference_lf_primary", "methodReference_lfno_primary", 
		"arrayCreationExpression", "dimExprs", "dimExpr", "constantExpression", 
		"expression", "lambdaExpression", "lambdaParameters", "inferredFormalParameterList", 
		"lambdaBody", "assignmentExpression", "assignment", "leftHandSide", "assignmentOperator", 
		"conditionalExpression", "conditionalOrExpression", "conditionalAndExpression", 
		"inclusiveOrExpression", "exclusiveOrExpression", "andExpression", "equalityExpression", 
		"relationalExpression", "shiftExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "preIncrementExpression", "preDecrementExpression", 
		"unaryExpressionNotPlusMinus", "postfixExpression", "postIncrementExpression", 
		"postIncrementExpression_lf_postfixExpression", "postDecrementExpression", 
		"postDecrementExpression_lf_postfixExpression", "castExpression",
	];
	public get grammarFileName(): string { return "Java8Parser.g4"; }
	public get literalNames(): (string | null)[] { return Java8Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return Java8Parser.symbolicNames; }
	public get ruleNames(): string[] { return Java8Parser.ruleNames; }
	public get serializedATN(): number[] { return Java8Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, Java8Parser._ATN, Java8Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, Java8Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 472;
			_la = this._input.LA(1);
			if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 63) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, Java8Parser.RULE_primitiveType);
		let _la: number;
		try {
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 477;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 474;
					this.annotation();
					}
					}
					this.state = 479;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 480;
				this.numericType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 481;
					this.annotation();
					}
					}
					this.state = 486;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 487;
				this.match(Java8Parser.BOOLEAN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericType(): NumericTypeContext {
		let localctx: NumericTypeContext = new NumericTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, Java8Parser.RULE_numericType);
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 8:
			case 27:
			case 29:
			case 37:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 490;
				this.integralType();
				}
				break;
			case 14:
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 491;
				this.floatingPointType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integralType(): IntegralTypeContext {
		let localctx: IntegralTypeContext = new IntegralTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, Java8Parser.RULE_integralType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 494;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 671088928) !== 0) || _la===37)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public floatingPointType(): FloatingPointTypeContext {
		let localctx: FloatingPointTypeContext = new FloatingPointTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, Java8Parser.RULE_floatingPointType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 496;
			_la = this._input.LA(1);
			if(!(_la===14 || _la===20)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public referenceType(): ReferenceTypeContext {
		let localctx: ReferenceTypeContext = new ReferenceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, Java8Parser.RULE_referenceType);
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 498;
				this.classOrInterfaceType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 499;
				this.typeVariable();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 500;
				this.arrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, Java8Parser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 505;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 503;
				this.classType_lfno_classOrInterfaceType();
				}
				break;
			case 2:
				{
				this.state = 504;
				this.interfaceType_lfno_classOrInterfaceType();
				}
				break;
			}
			this.state = 511;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 509;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						this.state = 507;
						this.classType_lf_classOrInterfaceType();
						}
						break;
					case 2:
						{
						this.state = 508;
						this.interfaceType_lf_classOrInterfaceType();
						}
						break;
					}
					}
				}
				this.state = 513;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let localctx: ClassTypeContext = new ClassTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, Java8Parser.RULE_classType);
		let _la: number;
		try {
			this.state = 536;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 514;
					this.annotation();
					}
					}
					this.state = 519;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 520;
				this.match(Java8Parser.Identifier);
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 521;
					this.typeArguments();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 524;
				this.classOrInterfaceType();
				this.state = 525;
				this.match(Java8Parser.DOT);
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 526;
					this.annotation();
					}
					}
					this.state = 531;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 532;
				this.match(Java8Parser.Identifier);
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 533;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		let localctx: ClassType_lf_classOrInterfaceTypeContext = new ClassType_lf_classOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, Java8Parser.RULE_classType_lf_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 538;
			this.match(Java8Parser.DOT);
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 539;
				this.annotation();
				}
				}
				this.state = 544;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 545;
			this.match(Java8Parser.Identifier);
			this.state = 547;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 546;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		let localctx: ClassType_lfno_classOrInterfaceTypeContext = new ClassType_lfno_classOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, Java8Parser.RULE_classType_lfno_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 549;
				this.annotation();
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 555;
			this.match(Java8Parser.Identifier);
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 556;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceType(): InterfaceTypeContext {
		let localctx: InterfaceTypeContext = new InterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, Java8Parser.RULE_interfaceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 559;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext {
		let localctx: InterfaceType_lf_classOrInterfaceTypeContext = new InterfaceType_lf_classOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, Java8Parser.RULE_interfaceType_lf_classOrInterfaceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 561;
			this.classType_lf_classOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext {
		let localctx: InterfaceType_lfno_classOrInterfaceTypeContext = new InterfaceType_lfno_classOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, Java8Parser.RULE_interfaceType_lfno_classOrInterfaceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 563;
			this.classType_lfno_classOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeVariable(): TypeVariableContext {
		let localctx: TypeVariableContext = new TypeVariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, Java8Parser.RULE_typeVariable);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 565;
				this.annotation();
				}
				}
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 571;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let localctx: ArrayTypeContext = new ArrayTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, Java8Parser.RULE_arrayType);
		try {
			this.state = 582;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 573;
				this.primitiveType();
				this.state = 574;
				this.dims();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 576;
				this.classOrInterfaceType();
				this.state = 577;
				this.dims();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 579;
				this.typeVariable();
				this.state = 580;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dims(): DimsContext {
		let localctx: DimsContext = new DimsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, Java8Parser.RULE_dims);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 584;
				this.annotation();
				}
				}
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 590;
			this.match(Java8Parser.LBRACK);
			this.state = 591;
			this.match(Java8Parser.RBRACK);
			this.state = 602;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 595;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===103) {
						{
						{
						this.state = 592;
						this.annotation();
						}
						}
						this.state = 597;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 598;
					this.match(Java8Parser.LBRACK);
					this.state = 599;
					this.match(Java8Parser.RBRACK);
					}
					}
				}
				this.state = 604;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let localctx: TypeParameterContext = new TypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, Java8Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 605;
				this.typeParameterModifier();
				}
				}
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 611;
			this.match(Java8Parser.Identifier);
			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 612;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameterModifier(): TypeParameterModifierContext {
		let localctx: TypeParameterModifierContext = new TypeParameterModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, Java8Parser.RULE_typeParameterModifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 615;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let localctx: TypeBoundContext = new TypeBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, Java8Parser.RULE_typeBound);
		let _la: number;
		try {
			this.state = 627;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 617;
				this.match(Java8Parser.EXTENDS);
				this.state = 618;
				this.typeVariable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 619;
				this.match(Java8Parser.EXTENDS);
				this.state = 620;
				this.classOrInterfaceType();
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===85) {
					{
					{
					this.state = 621;
					this.additionalBound();
					}
					}
					this.state = 626;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additionalBound(): AdditionalBoundContext {
		let localctx: AdditionalBoundContext = new AdditionalBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, Java8Parser.RULE_additionalBound);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 629;
			this.match(Java8Parser.BITAND);
			this.state = 630;
			this.interfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let localctx: TypeArgumentsContext = new TypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, Java8Parser.RULE_typeArguments);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 632;
			this.match(Java8Parser.LT);
			this.state = 633;
			this.typeArgumentList();
			this.state = 634;
			this.match(Java8Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgumentList(): TypeArgumentListContext {
		let localctx: TypeArgumentListContext = new TypeArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, Java8Parser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 636;
			this.typeArgument();
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 637;
				this.match(Java8Parser.COMMA);
				this.state = 638;
				this.typeArgument();
				}
				}
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let localctx: TypeArgumentContext = new TypeArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, Java8Parser.RULE_typeArgument);
		try {
			this.state = 646;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 644;
				this.referenceType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 645;
				this.wildcard();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wildcard(): WildcardContext {
		let localctx: WildcardContext = new WildcardContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, Java8Parser.RULE_wildcard);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 651;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 648;
				this.annotation();
				}
				}
				this.state = 653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 654;
			this.match(Java8Parser.QUESTION);
			this.state = 656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17 || _la===40) {
				{
				this.state = 655;
				this.wildcardBounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wildcardBounds(): WildcardBoundsContext {
		let localctx: WildcardBoundsContext = new WildcardBoundsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, Java8Parser.RULE_wildcardBounds);
		try {
			this.state = 662;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 658;
				this.match(Java8Parser.EXTENDS);
				this.state = 659;
				this.referenceType();
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 660;
				this.match(Java8Parser.SUPER);
				this.state = 661;
				this.referenceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public packageName(): PackageNameContext;
	public packageName(_p: number): PackageNameContext;
	// @RuleVersion(0)
	public packageName(_p?: number): PackageNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: PackageNameContext = new PackageNameContext(this, this._ctx, _parentState);
		let _prevctx: PackageNameContext = localctx;
		let _startState: number = 50;
		this.enterRecursionRule(localctx, 50, Java8Parser.RULE_packageName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 665;
			this.match(Java8Parser.Identifier);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 672;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new PackageNameContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_packageName);
					this.state = 667;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 668;
					this.match(Java8Parser.DOT);
					this.state = 669;
					this.match(Java8Parser.Identifier);
					}
					}
				}
				this.state = 674;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let localctx: TypeNameContext = new TypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, Java8Parser.RULE_typeName);
		try {
			this.state = 680;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 675;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 676;
				this.packageOrTypeName(0);
				this.state = 677;
				this.match(Java8Parser.DOT);
				this.state = 678;
				this.match(Java8Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public packageOrTypeName(): PackageOrTypeNameContext;
	public packageOrTypeName(_p: number): PackageOrTypeNameContext;
	// @RuleVersion(0)
	public packageOrTypeName(_p?: number): PackageOrTypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: PackageOrTypeNameContext = new PackageOrTypeNameContext(this, this._ctx, _parentState);
		let _prevctx: PackageOrTypeNameContext = localctx;
		let _startState: number = 54;
		this.enterRecursionRule(localctx, 54, Java8Parser.RULE_packageOrTypeName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 683;
			this.match(Java8Parser.Identifier);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 690;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new PackageOrTypeNameContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_packageOrTypeName);
					this.state = 685;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 686;
					this.match(Java8Parser.DOT);
					this.state = 687;
					this.match(Java8Parser.Identifier);
					}
					}
				}
				this.state = 692;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionName(): ExpressionNameContext {
		let localctx: ExpressionNameContext = new ExpressionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, Java8Parser.RULE_expressionName);
		try {
			this.state = 698;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 693;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 694;
				this.ambiguousName(0);
				this.state = 695;
				this.match(Java8Parser.DOT);
				this.state = 696;
				this.match(Java8Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodName(): MethodNameContext {
		let localctx: MethodNameContext = new MethodNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, Java8Parser.RULE_methodName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 700;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public ambiguousName(): AmbiguousNameContext;
	public ambiguousName(_p: number): AmbiguousNameContext;
	// @RuleVersion(0)
	public ambiguousName(_p?: number): AmbiguousNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AmbiguousNameContext = new AmbiguousNameContext(this, this._ctx, _parentState);
		let _prevctx: AmbiguousNameContext = localctx;
		let _startState: number = 60;
		this.enterRecursionRule(localctx, 60, Java8Parser.RULE_ambiguousName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 703;
			this.match(Java8Parser.Identifier);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 710;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new AmbiguousNameContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_ambiguousName);
					this.state = 705;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 706;
					this.match(Java8Parser.DOT);
					this.state = 707;
					this.match(Java8Parser.Identifier);
					}
					}
				}
				this.state = 712;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, Java8Parser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 714;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 713;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===25) {
				{
				{
				this.state = 716;
				this.importDeclaration();
				}
				}
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268763650) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1073741927) !== 0) || _la===103) {
				{
				{
				this.state = 722;
				this.typeDeclaration();
				}
				}
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 728;
			this.match(Java8Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let localctx: PackageDeclarationContext = new PackageDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, Java8Parser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 730;
				this.packageModifier();
				}
				}
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 736;
			this.match(Java8Parser.PACKAGE);
			this.state = 737;
			this.packageName(0);
			this.state = 738;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packageModifier(): PackageModifierContext {
		let localctx: PackageModifierContext = new PackageModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, Java8Parser.RULE_packageModifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 740;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, Java8Parser.RULE_importDeclaration);
		try {
			this.state = 746;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 742;
				this.singleTypeImportDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 743;
				this.typeImportOnDemandDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 744;
				this.singleStaticImportDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 745;
				this.staticImportOnDemandDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext {
		let localctx: SingleTypeImportDeclarationContext = new SingleTypeImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, Java8Parser.RULE_singleTypeImportDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 748;
			this.match(Java8Parser.IMPORT);
			this.state = 749;
			this.typeName();
			this.state = 750;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext {
		let localctx: TypeImportOnDemandDeclarationContext = new TypeImportOnDemandDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, Java8Parser.RULE_typeImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 752;
			this.match(Java8Parser.IMPORT);
			this.state = 753;
			this.packageOrTypeName(0);
			this.state = 754;
			this.match(Java8Parser.DOT);
			this.state = 755;
			this.match(Java8Parser.MUL);
			this.state = 756;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext {
		let localctx: SingleStaticImportDeclarationContext = new SingleStaticImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, Java8Parser.RULE_singleStaticImportDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 758;
			this.match(Java8Parser.IMPORT);
			this.state = 759;
			this.match(Java8Parser.STATIC);
			this.state = 760;
			this.typeName();
			this.state = 761;
			this.match(Java8Parser.DOT);
			this.state = 762;
			this.match(Java8Parser.Identifier);
			this.state = 763;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext {
		let localctx: StaticImportOnDemandDeclarationContext = new StaticImportOnDemandDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, Java8Parser.RULE_staticImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 765;
			this.match(Java8Parser.IMPORT);
			this.state = 766;
			this.match(Java8Parser.STATIC);
			this.state = 767;
			this.typeName();
			this.state = 768;
			this.match(Java8Parser.DOT);
			this.state = 769;
			this.match(Java8Parser.MUL);
			this.state = 770;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let localctx: TypeDeclarationContext = new TypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, Java8Parser.RULE_typeDeclaration);
		try {
			this.state = 775;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 772;
				this.classDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 773;
				this.interfaceDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 774;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, Java8Parser.RULE_classDeclaration);
		try {
			this.state = 779;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 777;
				this.normalClassDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 778;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public normalClassDeclaration(): NormalClassDeclarationContext {
		let localctx: NormalClassDeclarationContext = new NormalClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, Java8Parser.RULE_normalClassDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===18 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0) || _la===103) {
				{
				{
				this.state = 781;
				this.classModifier();
				}
				}
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 787;
			this.match(Java8Parser.CLASS);
			this.state = 788;
			this.match(Java8Parser.Identifier);
			this.state = 790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 789;
				this.typeParameters();
				}
			}

			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 792;
				this.superclass();
				}
			}

			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 795;
				this.superinterfaces();
				}
			}

			this.state = 798;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classModifier(): ClassModifierContext {
		let localctx: ClassModifierContext = new ClassModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, Java8Parser.RULE_classModifier);
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 800;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 801;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 802;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 803;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 804;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 805;
				this.match(Java8Parser.STATIC);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 806;
				this.match(Java8Parser.FINAL);
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 807;
				this.match(Java8Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let localctx: TypeParametersContext = new TypeParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, Java8Parser.RULE_typeParameters);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 810;
			this.match(Java8Parser.LT);
			this.state = 811;
			this.typeParameterList();
			this.state = 812;
			this.match(Java8Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeParameterList(): TypeParameterListContext {
		let localctx: TypeParameterListContext = new TypeParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, Java8Parser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 814;
			this.typeParameter();
			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 815;
				this.match(Java8Parser.COMMA);
				this.state = 816;
				this.typeParameter();
				}
				}
				this.state = 821;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public superclass(): SuperclassContext {
		let localctx: SuperclassContext = new SuperclassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, Java8Parser.RULE_superclass);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 822;
			this.match(Java8Parser.EXTENDS);
			this.state = 823;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public superinterfaces(): SuperinterfacesContext {
		let localctx: SuperinterfacesContext = new SuperinterfacesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, Java8Parser.RULE_superinterfaces);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 825;
			this.match(Java8Parser.IMPLEMENTS);
			this.state = 826;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceTypeList(): InterfaceTypeListContext {
		let localctx: InterfaceTypeListContext = new InterfaceTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, Java8Parser.RULE_interfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 828;
			this.interfaceType();
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 829;
				this.match(Java8Parser.COMMA);
				this.state = 830;
				this.interfaceType();
				}
				}
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let localctx: ClassBodyContext = new ClassBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, Java8Parser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 836;
			this.match(Java8Parser.LBRACE);
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1140957815) !== 0) || _la===68 || _la===102 || _la===103) {
				{
				{
				this.state = 837;
				this.classBodyDeclaration();
				}
				}
				this.state = 842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 843;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, Java8Parser.RULE_classBodyDeclaration);
		try {
			this.state = 849;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 845;
				this.classMemberDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 846;
				this.instanceInitializer();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 847;
				this.staticInitializer();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 848;
				this.constructorDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		let localctx: ClassMemberDeclarationContext = new ClassMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, Java8Parser.RULE_classMemberDeclaration);
		try {
			this.state = 856;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 851;
				this.fieldDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 852;
				this.methodDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 853;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 854;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 855;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let localctx: FieldDeclarationContext = new FieldDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, Java8Parser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & 2417197057) !== 0) || _la===103) {
				{
				{
				this.state = 858;
				this.fieldModifier();
				}
				}
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 864;
			this.unannType();
			this.state = 865;
			this.variableDeclaratorList();
			this.state = 866;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldModifier(): FieldModifierContext {
		let localctx: FieldModifierContext = new FieldModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, Java8Parser.RULE_fieldModifier);
		try {
			this.state = 876;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 868;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 869;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 870;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 871;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 872;
				this.match(Java8Parser.STATIC);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 873;
				this.match(Java8Parser.FINAL);
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 874;
				this.match(Java8Parser.TRANSIENT);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 875;
				this.match(Java8Parser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorList(): VariableDeclaratorListContext {
		let localctx: VariableDeclaratorListContext = new VariableDeclaratorListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, Java8Parser.RULE_variableDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 878;
			this.variableDeclarator();
			this.state = 883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 879;
				this.match(Java8Parser.COMMA);
				this.state = 880;
				this.variableDeclarator();
				}
				}
				this.state = 885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, Java8Parser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 886;
			this.variableDeclaratorId();
			this.state = 889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===66) {
				{
				this.state = 887;
				this.match(Java8Parser.ASSIGN);
				this.state = 888;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, Java8Parser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 891;
			this.match(Java8Parser.Identifier);
			this.state = 893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61 || _la===103) {
				{
				this.state = 892;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let localctx: VariableInitializerContext = new VariableInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, Java8Parser.RULE_variableInitializer);
		try {
			this.state = 897;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 31:
			case 37:
			case 40:
			case 43:
			case 48:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 69:
			case 70:
			case 79:
			case 80:
			case 81:
			case 82:
			case 102:
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 895;
				this.expression();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 896;
				this.arrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannType(): UnannTypeContext {
		let localctx: UnannTypeContext = new UnannTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, Java8Parser.RULE_unannType);
		try {
			this.state = 901;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 899;
				this.unannPrimitiveType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 900;
				this.unannReferenceType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		let localctx: UnannPrimitiveTypeContext = new UnannPrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, Java8Parser.RULE_unannPrimitiveType);
		try {
			this.state = 905;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 37:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 903;
				this.numericType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 904;
				this.match(Java8Parser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannReferenceType(): UnannReferenceTypeContext {
		let localctx: UnannReferenceTypeContext = new UnannReferenceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, Java8Parser.RULE_unannReferenceType);
		try {
			this.state = 910;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 907;
				this.unannClassOrInterfaceType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 908;
				this.unannTypeVariable();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 909;
				this.unannArrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		let localctx: UnannClassOrInterfaceTypeContext = new UnannClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, Java8Parser.RULE_unannClassOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 912;
				this.unannClassType_lfno_unannClassOrInterfaceType();
				}
				break;
			case 2:
				{
				this.state = 913;
				this.unannInterfaceType_lfno_unannClassOrInterfaceType();
				}
				break;
			}
			this.state = 920;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 918;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
					case 1:
						{
						this.state = 916;
						this.unannClassType_lf_unannClassOrInterfaceType();
						}
						break;
					case 2:
						{
						this.state = 917;
						this.unannInterfaceType_lf_unannClassOrInterfaceType();
						}
						break;
					}
					}
				}
				this.state = 922;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannClassType(): UnannClassTypeContext {
		let localctx: UnannClassTypeContext = new UnannClassTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, Java8Parser.RULE_unannClassType);
		let _la: number;
		try {
			this.state = 939;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 923;
				this.match(Java8Parser.Identifier);
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 924;
					this.typeArguments();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 927;
				this.unannClassOrInterfaceType();
				this.state = 928;
				this.match(Java8Parser.DOT);
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 929;
					this.annotation();
					}
					}
					this.state = 934;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 935;
				this.match(Java8Parser.Identifier);
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 936;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		let localctx: UnannClassType_lf_unannClassOrInterfaceTypeContext = new UnannClassType_lf_unannClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, Java8Parser.RULE_unannClassType_lf_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 941;
			this.match(Java8Parser.DOT);
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 942;
				this.annotation();
				}
				}
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 948;
			this.match(Java8Parser.Identifier);
			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 949;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		let localctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext = new UnannClassType_lfno_unannClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, Java8Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 952;
			this.match(Java8Parser.Identifier);
			this.state = 954;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 953;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType(): UnannInterfaceTypeContext {
		let localctx: UnannInterfaceTypeContext = new UnannInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, Java8Parser.RULE_unannInterfaceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 956;
			this.unannClassType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext {
		let localctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lf_unannClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, Java8Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 958;
			this.unannClassType_lf_unannClassOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext {
		let localctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, Java8Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 960;
			this.unannClassType_lfno_unannClassOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannTypeVariable(): UnannTypeVariableContext {
		let localctx: UnannTypeVariableContext = new UnannTypeVariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, Java8Parser.RULE_unannTypeVariable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 962;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unannArrayType(): UnannArrayTypeContext {
		let localctx: UnannArrayTypeContext = new UnannArrayTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, Java8Parser.RULE_unannArrayType);
		try {
			this.state = 973;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 964;
				this.unannPrimitiveType();
				this.state = 965;
				this.dims();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 967;
				this.unannClassOrInterfaceType();
				this.state = 968;
				this.dims();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 970;
				this.unannTypeVariable();
				this.state = 971;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let localctx: MethodDeclarationContext = new MethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, Java8Parser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 978;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1074003970) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 615) !== 0) || _la===103) {
				{
				{
				this.state = 975;
				this.methodModifier();
				}
				}
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 981;
			this.methodHeader();
			this.state = 982;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodModifier(): MethodModifierContext {
		let localctx: MethodModifierContext = new MethodModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, Java8Parser.RULE_methodModifier);
		try {
			this.state = 994;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 984;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 985;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 986;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 987;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 988;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 989;
				this.match(Java8Parser.STATIC);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 990;
				this.match(Java8Parser.FINAL);
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 991;
				this.match(Java8Parser.SYNCHRONIZED);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 992;
				this.match(Java8Parser.NATIVE);
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 993;
				this.match(Java8Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodHeader(): MethodHeaderContext {
		let localctx: MethodHeaderContext = new MethodHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, Java8Parser.RULE_methodHeader);
		let _la: number;
		try {
			this.state = 1013;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 37:
			case 48:
			case 102:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 996;
				this.result();
				this.state = 997;
				this.methodDeclarator();
				this.state = 999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===45) {
					{
					this.state = 998;
					this.throws_();
					}
				}

				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1001;
				this.typeParameters();
				this.state = 1005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 1002;
					this.annotation();
					}
					}
					this.state = 1007;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1008;
				this.result();
				this.state = 1009;
				this.methodDeclarator();
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===45) {
					{
					this.state = 1010;
					this.throws_();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public result(): ResultContext {
		let localctx: ResultContext = new ResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, Java8Parser.RULE_result);
		try {
			this.state = 1017;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 37:
			case 102:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1015;
				this.unannType();
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1016;
				this.match(Java8Parser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodDeclarator(): MethodDeclaratorContext {
		let localctx: MethodDeclaratorContext = new MethodDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, Java8Parser.RULE_methodDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1019;
			this.match(Java8Parser.Identifier);
			this.state = 1020;
			this.match(Java8Parser.LPAREN);
			this.state = 1022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || _la===37 || _la===102 || _la===103) {
				{
				this.state = 1021;
				this.formalParameterList();
				}
			}

			this.state = 1024;
			this.match(Java8Parser.RPAREN);
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61 || _la===103) {
				{
				this.state = 1025;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let localctx: FormalParameterListContext = new FormalParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, Java8Parser.RULE_formalParameterList);
		try {
			this.state = 1034;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1028;
				this.receiverParameter();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1029;
				this.formalParameters();
				this.state = 1030;
				this.match(Java8Parser.COMMA);
				this.state = 1031;
				this.lastFormalParameter();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1033;
				this.lastFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let localctx: FormalParametersContext = new FormalParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, Java8Parser.RULE_formalParameters);
		try {
			let _alt: number;
			this.state = 1052;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1036;
				this.formalParameter();
				this.state = 1041;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 83, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1037;
						this.match(Java8Parser.COMMA);
						this.state = 1038;
						this.formalParameter();
						}
						}
					}
					this.state = 1043;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 83, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1044;
				this.receiverParameter();
				this.state = 1049;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1045;
						this.match(Java8Parser.COMMA);
						this.state = 1046;
						this.formalParameter();
						}
						}
					}
					this.state = 1051;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let localctx: FormalParameterContext = new FormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, Java8Parser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1057;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===103) {
				{
				{
				this.state = 1054;
				this.variableModifier();
				}
				}
				this.state = 1059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1060;
			this.unannType();
			this.state = 1061;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let localctx: VariableModifierContext = new VariableModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, Java8Parser.RULE_variableModifier);
		try {
			this.state = 1065;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1063;
				this.annotation();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1064;
				this.match(Java8Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameter(): LastFormalParameterContext {
		let localctx: LastFormalParameterContext = new LastFormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, Java8Parser.RULE_lastFormalParameter);
		let _la: number;
		try {
			this.state = 1084;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===18 || _la===103) {
					{
					{
					this.state = 1067;
					this.variableModifier();
					}
					}
					this.state = 1072;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1073;
				this.unannType();
				this.state = 1077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 1074;
					this.annotation();
					}
					}
					this.state = 1079;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1080;
				this.match(Java8Parser.ELLIPSIS);
				this.state = 1081;
				this.variableDeclaratorId();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1083;
				this.formalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public receiverParameter(): ReceiverParameterContext {
		let localctx: ReceiverParameterContext = new ReceiverParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, Java8Parser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1089;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 1086;
				this.annotation();
				}
				}
				this.state = 1091;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1092;
			this.unannType();
			this.state = 1095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===102) {
				{
				this.state = 1093;
				this.match(Java8Parser.Identifier);
				this.state = 1094;
				this.match(Java8Parser.DOT);
				}
			}

			this.state = 1097;
			this.match(Java8Parser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public throws_(): Throws_Context {
		let localctx: Throws_Context = new Throws_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 160, Java8Parser.RULE_throws_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1099;
			this.match(Java8Parser.THROWS);
			this.state = 1100;
			this.exceptionTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exceptionTypeList(): ExceptionTypeListContext {
		let localctx: ExceptionTypeListContext = new ExceptionTypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, Java8Parser.RULE_exceptionTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1102;
			this.exceptionType();
			this.state = 1107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 1103;
				this.match(Java8Parser.COMMA);
				this.state = 1104;
				this.exceptionType();
				}
				}
				this.state = 1109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exceptionType(): ExceptionTypeContext {
		let localctx: ExceptionTypeContext = new ExceptionTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, Java8Parser.RULE_exceptionType);
		try {
			this.state = 1112;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1110;
				this.classType();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1111;
				this.typeVariable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let localctx: MethodBodyContext = new MethodBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, Java8Parser.RULE_methodBody);
		try {
			this.state = 1116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1114;
				this.block();
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1115;
				this.match(Java8Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public instanceInitializer(): InstanceInitializerContext {
		let localctx: InstanceInitializerContext = new InstanceInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, Java8Parser.RULE_instanceInitializer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1118;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public staticInitializer(): StaticInitializerContext {
		let localctx: StaticInitializerContext = new StaticInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, Java8Parser.RULE_staticInitializer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1120;
			this.match(Java8Parser.STATIC);
			this.state = 1121;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, Java8Parser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0) || _la===103) {
				{
				{
				this.state = 1123;
				this.constructorModifier();
				}
				}
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1129;
			this.constructorDeclarator();
			this.state = 1131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 1130;
				this.throws_();
				}
			}

			this.state = 1133;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorModifier(): ConstructorModifierContext {
		let localctx: ConstructorModifierContext = new ConstructorModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, Java8Parser.RULE_constructorModifier);
		try {
			this.state = 1139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1135;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1136;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1137;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1138;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorDeclarator(): ConstructorDeclaratorContext {
		let localctx: ConstructorDeclaratorContext = new ConstructorDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, Java8Parser.RULE_constructorDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 1141;
				this.typeParameters();
				}
			}

			this.state = 1144;
			this.simpleTypeName();
			this.state = 1145;
			this.match(Java8Parser.LPAREN);
			this.state = 1147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || _la===37 || _la===102 || _la===103) {
				{
				this.state = 1146;
				this.formalParameterList();
				}
			}

			this.state = 1149;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleTypeName(): SimpleTypeNameContext {
		let localctx: SimpleTypeNameContext = new SimpleTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, Java8Parser.RULE_simpleTypeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1151;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructorBody(): ConstructorBodyContext {
		let localctx: ConstructorBodyContext = new ConstructorBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, Java8Parser.RULE_constructorBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1153;
			this.match(Java8Parser.LBRACE);
			this.state = 1155;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 1154;
				this.explicitConstructorInvocation();
				}
				break;
			}
			this.state = 1158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2826267454) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1174327295) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
				{
				this.state = 1157;
				this.blockStatements();
				}
			}

			this.state = 1160;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		let localctx: ExplicitConstructorInvocationContext = new ExplicitConstructorInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, Java8Parser.RULE_explicitConstructorInvocation);
		let _la: number;
		try {
			this.state = 1208;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 1162;
					this.typeArguments();
					}
				}

				this.state = 1165;
				this.match(Java8Parser.THIS);
				this.state = 1166;
				this.match(Java8Parser.LPAREN);
				this.state = 1168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 1167;
					this.argumentList();
					}
				}

				this.state = 1170;
				this.match(Java8Parser.RPAREN);
				this.state = 1171;
				this.match(Java8Parser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 1172;
					this.typeArguments();
					}
				}

				this.state = 1175;
				this.match(Java8Parser.SUPER);
				this.state = 1176;
				this.match(Java8Parser.LPAREN);
				this.state = 1178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 1177;
					this.argumentList();
					}
				}

				this.state = 1180;
				this.match(Java8Parser.RPAREN);
				this.state = 1181;
				this.match(Java8Parser.SEMI);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1182;
				this.expressionName();
				this.state = 1183;
				this.match(Java8Parser.DOT);
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 1184;
					this.typeArguments();
					}
				}

				this.state = 1187;
				this.match(Java8Parser.SUPER);
				this.state = 1188;
				this.match(Java8Parser.LPAREN);
				this.state = 1190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 1189;
					this.argumentList();
					}
				}

				this.state = 1192;
				this.match(Java8Parser.RPAREN);
				this.state = 1193;
				this.match(Java8Parser.SEMI);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1195;
				this.primary();
				this.state = 1196;
				this.match(Java8Parser.DOT);
				this.state = 1198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 1197;
					this.typeArguments();
					}
				}

				this.state = 1200;
				this.match(Java8Parser.SUPER);
				this.state = 1201;
				this.match(Java8Parser.LPAREN);
				this.state = 1203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 1202;
					this.argumentList();
					}
				}

				this.state = 1205;
				this.match(Java8Parser.RPAREN);
				this.state = 1206;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let localctx: EnumDeclarationContext = new EnumDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, Java8Parser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===18 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0) || _la===103) {
				{
				{
				this.state = 1210;
				this.classModifier();
				}
				}
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1216;
			this.match(Java8Parser.ENUM);
			this.state = 1217;
			this.match(Java8Parser.Identifier);
			this.state = 1219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 1218;
				this.superinterfaces();
				}
			}

			this.state = 1221;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let localctx: EnumBodyContext = new EnumBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, Java8Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1223;
			this.match(Java8Parser.LBRACE);
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===102 || _la===103) {
				{
				this.state = 1224;
				this.enumConstantList();
				}
			}

			this.state = 1228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 1227;
				this.match(Java8Parser.COMMA);
				}
			}

			this.state = 1231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===63) {
				{
				this.state = 1230;
				this.enumBodyDeclarations();
				}
			}

			this.state = 1233;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumConstantList(): EnumConstantListContext {
		let localctx: EnumConstantListContext = new EnumConstantListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, Java8Parser.RULE_enumConstantList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1235;
			this.enumConstant();
			this.state = 1240;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1236;
					this.match(Java8Parser.COMMA);
					this.state = 1237;
					this.enumConstant();
					}
					}
				}
				this.state = 1242;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 117, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let localctx: EnumConstantContext = new EnumConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, Java8Parser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 1243;
				this.enumConstantModifier();
				}
				}
				this.state = 1248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1249;
			this.match(Java8Parser.Identifier);
			this.state = 1255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 1250;
				this.match(Java8Parser.LPAREN);
				this.state = 1252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 1251;
					this.argumentList();
					}
				}

				this.state = 1254;
				this.match(Java8Parser.RPAREN);
				}
			}

			this.state = 1258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 1257;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumConstantModifier(): EnumConstantModifierContext {
		let localctx: EnumConstantModifierContext = new EnumConstantModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, Java8Parser.RULE_enumConstantModifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1260;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, Java8Parser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1262;
			this.match(Java8Parser.SEMI);
			this.state = 1266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1140957815) !== 0) || _la===68 || _la===102 || _la===103) {
				{
				{
				this.state = 1263;
				this.classBodyDeclaration();
				}
				}
				this.state = 1268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, Java8Parser.RULE_interfaceDeclaration);
		try {
			this.state = 1271;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1269;
				this.normalInterfaceDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1270;
				this.annotationTypeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		let localctx: NormalInterfaceDeclarationContext = new NormalInterfaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, Java8Parser.RULE_normalInterfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0) || _la===103) {
				{
				{
				this.state = 1273;
				this.interfaceModifier();
				}
				}
				this.state = 1278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1279;
			this.match(Java8Parser.INTERFACE);
			this.state = 1280;
			this.match(Java8Parser.Identifier);
			this.state = 1282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 1281;
				this.typeParameters();
				}
			}

			this.state = 1285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 1284;
				this.extendsInterfaces();
				}
			}

			this.state = 1287;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceModifier(): InterfaceModifierContext {
		let localctx: InterfaceModifierContext = new InterfaceModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, Java8Parser.RULE_interfaceModifier);
		try {
			this.state = 1296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1289;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1290;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1291;
				this.match(Java8Parser.PROTECTED);
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1292;
				this.match(Java8Parser.PRIVATE);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1293;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1294;
				this.match(Java8Parser.STATIC);
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1295;
				this.match(Java8Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extendsInterfaces(): ExtendsInterfacesContext {
		let localctx: ExtendsInterfacesContext = new ExtendsInterfacesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, Java8Parser.RULE_extendsInterfaces);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1298;
			this.match(Java8Parser.EXTENDS);
			this.state = 1299;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let localctx: InterfaceBodyContext = new InterfaceBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, Java8Parser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1301;
			this.match(Java8Parser.LBRACE);
			this.state = 1305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 940921642) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1073774711) !== 0) || _la===68 || _la===102 || _la===103) {
				{
				{
				this.state = 1302;
				this.interfaceMemberDeclaration();
				}
				}
				this.state = 1307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1308;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, Java8Parser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 1315;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1310;
				this.constantDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1311;
				this.interfaceMethodDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1312;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1313;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1314;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantDeclaration(): ConstantDeclarationContext {
		let localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, Java8Parser.RULE_constantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & 1179649) !== 0) || _la===103) {
				{
				{
				this.state = 1317;
				this.constantModifier();
				}
				}
				this.state = 1322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1323;
			this.unannType();
			this.state = 1324;
			this.variableDeclaratorList();
			this.state = 1325;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantModifier(): ConstantModifierContext {
		let localctx: ConstantModifierContext = new ConstantModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, Java8Parser.RULE_constantModifier);
		try {
			this.state = 1331;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1327;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1328;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1329;
				this.match(Java8Parser.STATIC);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1330;
				this.match(Java8Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, Java8Parser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===12 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 25) !== 0) || _la===103) {
				{
				{
				this.state = 1333;
				this.interfaceMethodModifier();
				}
				}
				this.state = 1338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1339;
			this.methodHeader();
			this.state = 1340;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, Java8Parser.RULE_interfaceMethodModifier);
		try {
			this.state = 1348;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1342;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1343;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1344;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1345;
				this.match(Java8Parser.DEFAULT);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1346;
				this.match(Java8Parser.STATIC);
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1347;
				this.match(Java8Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, Java8Parser.RULE_annotationTypeDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1353;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1350;
					this.interfaceModifier();
					}
					}
				}
				this.state = 1355;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
			}
			this.state = 1356;
			this.match(Java8Parser.AT);
			this.state = 1357;
			this.match(Java8Parser.INTERFACE);
			this.state = 1358;
			this.match(Java8Parser.Identifier);
			this.state = 1359;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, Java8Parser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1361;
			this.match(Java8Parser.LBRACE);
			this.state = 1365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 940917546) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1073741943) !== 0) || _la===102 || _la===103) {
				{
				{
				this.state = 1362;
				this.annotationTypeMemberDeclaration();
				}
				}
				this.state = 1367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1368;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext {
		let localctx: AnnotationTypeMemberDeclarationContext = new AnnotationTypeMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, Java8Parser.RULE_annotationTypeMemberDeclaration);
		try {
			this.state = 1375;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1370;
				this.annotationTypeElementDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1371;
				this.constantDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1372;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1373;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1374;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, Java8Parser.RULE_annotationTypeElementDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===35 || _la===103) {
				{
				{
				this.state = 1377;
				this.annotationTypeElementModifier();
				}
				}
				this.state = 1382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1383;
			this.unannType();
			this.state = 1384;
			this.match(Java8Parser.Identifier);
			this.state = 1385;
			this.match(Java8Parser.LPAREN);
			this.state = 1386;
			this.match(Java8Parser.RPAREN);
			this.state = 1388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61 || _la===103) {
				{
				this.state = 1387;
				this.dims();
				}
			}

			this.state = 1391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 1390;
				this.defaultValue();
				}
			}

			this.state = 1393;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementModifier(): AnnotationTypeElementModifierContext {
		let localctx: AnnotationTypeElementModifierContext = new AnnotationTypeElementModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, Java8Parser.RULE_annotationTypeElementModifier);
		try {
			this.state = 1398;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1395;
				this.annotation();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1396;
				this.match(Java8Parser.PUBLIC);
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1397;
				this.match(Java8Parser.ABSTRACT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let localctx: DefaultValueContext = new DefaultValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, Java8Parser.RULE_defaultValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1400;
			this.match(Java8Parser.DEFAULT);
			this.state = 1401;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, Java8Parser.RULE_annotation);
		try {
			this.state = 1406;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1403;
				this.normalAnnotation();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1404;
				this.markerAnnotation();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1405;
				this.singleElementAnnotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public normalAnnotation(): NormalAnnotationContext {
		let localctx: NormalAnnotationContext = new NormalAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, Java8Parser.RULE_normalAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1408;
			this.match(Java8Parser.AT);
			this.state = 1409;
			this.typeName();
			this.state = 1410;
			this.match(Java8Parser.LPAREN);
			this.state = 1412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===102) {
				{
				this.state = 1411;
				this.elementValuePairList();
				}
			}

			this.state = 1414;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValuePairList(): ElementValuePairListContext {
		let localctx: ElementValuePairListContext = new ElementValuePairListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, Java8Parser.RULE_elementValuePairList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1416;
			this.elementValuePair();
			this.state = 1421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 1417;
				this.match(Java8Parser.COMMA);
				this.state = 1418;
				this.elementValuePair();
				}
				}
				this.state = 1423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let localctx: ElementValuePairContext = new ElementValuePairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, Java8Parser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1424;
			this.match(Java8Parser.Identifier);
			this.state = 1425;
			this.match(Java8Parser.ASSIGN);
			this.state = 1426;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let localctx: ElementValueContext = new ElementValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, Java8Parser.RULE_elementValue);
		try {
			this.state = 1431;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1428;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1429;
				this.elementValueArrayInitializer();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1430;
				this.annotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, Java8Parser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1433;
			this.match(Java8Parser.LBRACE);
			this.state = 1435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 6277193) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
				{
				this.state = 1434;
				this.elementValueList();
				}
			}

			this.state = 1438;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 1437;
				this.match(Java8Parser.COMMA);
				}
			}

			this.state = 1440;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementValueList(): ElementValueListContext {
		let localctx: ElementValueListContext = new ElementValueListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, Java8Parser.RULE_elementValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1442;
			this.elementValue();
			this.state = 1447;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 147, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1443;
					this.match(Java8Parser.COMMA);
					this.state = 1444;
					this.elementValue();
					}
					}
				}
				this.state = 1449;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 147, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public markerAnnotation(): MarkerAnnotationContext {
		let localctx: MarkerAnnotationContext = new MarkerAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, Java8Parser.RULE_markerAnnotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1450;
			this.match(Java8Parser.AT);
			this.state = 1451;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleElementAnnotation(): SingleElementAnnotationContext {
		let localctx: SingleElementAnnotationContext = new SingleElementAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, Java8Parser.RULE_singleElementAnnotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1453;
			this.match(Java8Parser.AT);
			this.state = 1454;
			this.typeName();
			this.state = 1455;
			this.match(Java8Parser.LPAREN);
			this.state = 1456;
			this.elementValue();
			this.state = 1457;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let localctx: ArrayInitializerContext = new ArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, Java8Parser.RULE_arrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1459;
			this.match(Java8Parser.LBRACE);
			this.state = 1461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 6277193) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
				{
				this.state = 1460;
				this.variableInitializerList();
				}
			}

			this.state = 1464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 1463;
				this.match(Java8Parser.COMMA);
				}
			}

			this.state = 1466;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableInitializerList(): VariableInitializerListContext {
		let localctx: VariableInitializerListContext = new VariableInitializerListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, Java8Parser.RULE_variableInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1468;
			this.variableInitializer();
			this.state = 1473;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1469;
					this.match(Java8Parser.COMMA);
					this.state = 1470;
					this.variableInitializer();
					}
					}
				}
				this.state = 1475;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, Java8Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1476;
			this.match(Java8Parser.LBRACE);
			this.state = 1478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2826267454) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1174327295) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
				{
				this.state = 1477;
				this.blockStatements();
				}
			}

			this.state = 1480;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockStatements(): BlockStatementsContext {
		let localctx: BlockStatementsContext = new BlockStatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, Java8Parser.RULE_blockStatements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1482;
				this.blockStatement();
				}
				}
				this.state = 1485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2826267454) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1174327295) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let localctx: BlockStatementContext = new BlockStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, Java8Parser.RULE_blockStatement);
		try {
			this.state = 1490;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1487;
				this.localVariableDeclarationStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1488;
				this.classDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1489;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, Java8Parser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1492;
			this.localVariableDeclaration();
			this.state = 1493;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, Java8Parser.RULE_localVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===103) {
				{
				{
				this.state = 1495;
				this.variableModifier();
				}
				}
				this.state = 1500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1501;
			this.unannType();
			this.state = 1502;
			this.variableDeclaratorList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, Java8Parser.RULE_statement);
		try {
			this.state = 1510;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1504;
				this.statementWithoutTrailingSubstatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1505;
				this.labeledStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1506;
				this.ifThenStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1507;
				this.ifThenElseStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1508;
				this.whileStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1509;
				this.forStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementNoShortIf(): StatementNoShortIfContext {
		let localctx: StatementNoShortIfContext = new StatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, Java8Parser.RULE_statementNoShortIf);
		try {
			this.state = 1517;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1512;
				this.statementWithoutTrailingSubstatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1513;
				this.labeledStatementNoShortIf();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1514;
				this.ifThenElseStatementNoShortIf();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1515;
				this.whileStatementNoShortIf();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1516;
				this.forStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		let localctx: StatementWithoutTrailingSubstatementContext = new StatementWithoutTrailingSubstatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, Java8Parser.RULE_statementWithoutTrailingSubstatement);
		try {
			this.state = 1531;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1519;
				this.block();
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1520;
				this.emptyStatement_();
				}
				break;
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 31:
			case 37:
			case 40:
			case 43:
			case 48:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 79:
			case 80:
			case 102:
			case 103:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1521;
				this.expressionStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1522;
				this.assertStatement();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1523;
				this.switchStatement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1524;
				this.doStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1525;
				this.breakStatement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1526;
				this.continueStatement();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1527;
				this.returnStatement();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1528;
				this.synchronizedStatement();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1529;
				this.throwStatement();
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1530;
				this.tryStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let localctx: EmptyStatement_Context = new EmptyStatement_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 266, Java8Parser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1533;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let localctx: LabeledStatementContext = new LabeledStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, Java8Parser.RULE_labeledStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1535;
			this.match(Java8Parser.Identifier);
			this.state = 1536;
			this.match(Java8Parser.COLON);
			this.state = 1537;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext {
		let localctx: LabeledStatementNoShortIfContext = new LabeledStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, Java8Parser.RULE_labeledStatementNoShortIf);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1539;
			this.match(Java8Parser.Identifier);
			this.state = 1540;
			this.match(Java8Parser.COLON);
			this.state = 1541;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, Java8Parser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1543;
			this.statementExpression();
			this.state = 1544;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let localctx: StatementExpressionContext = new StatementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, Java8Parser.RULE_statementExpression);
		try {
			this.state = 1553;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1546;
				this.assignment();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1547;
				this.preIncrementExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1548;
				this.preDecrementExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1549;
				this.postIncrementExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1550;
				this.postDecrementExpression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1551;
				this.methodInvocation();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1552;
				this.classInstanceCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifThenStatement(): IfThenStatementContext {
		let localctx: IfThenStatementContext = new IfThenStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, Java8Parser.RULE_ifThenStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1555;
			this.match(Java8Parser.IF);
			this.state = 1556;
			this.match(Java8Parser.LPAREN);
			this.state = 1557;
			this.expression();
			this.state = 1558;
			this.match(Java8Parser.RPAREN);
			this.state = 1559;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatement(): IfThenElseStatementContext {
		let localctx: IfThenElseStatementContext = new IfThenElseStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, Java8Parser.RULE_ifThenElseStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1561;
			this.match(Java8Parser.IF);
			this.state = 1562;
			this.match(Java8Parser.LPAREN);
			this.state = 1563;
			this.expression();
			this.state = 1564;
			this.match(Java8Parser.RPAREN);
			this.state = 1565;
			this.statementNoShortIf();
			this.state = 1566;
			this.match(Java8Parser.ELSE);
			this.state = 1567;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext {
		let localctx: IfThenElseStatementNoShortIfContext = new IfThenElseStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, Java8Parser.RULE_ifThenElseStatementNoShortIf);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1569;
			this.match(Java8Parser.IF);
			this.state = 1570;
			this.match(Java8Parser.LPAREN);
			this.state = 1571;
			this.expression();
			this.state = 1572;
			this.match(Java8Parser.RPAREN);
			this.state = 1573;
			this.statementNoShortIf();
			this.state = 1574;
			this.match(Java8Parser.ELSE);
			this.state = 1575;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let localctx: AssertStatementContext = new AssertStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, Java8Parser.RULE_assertStatement);
		try {
			this.state = 1587;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1577;
				this.match(Java8Parser.ASSERT);
				this.state = 1578;
				this.expression();
				this.state = 1579;
				this.match(Java8Parser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1581;
				this.match(Java8Parser.ASSERT);
				this.state = 1582;
				this.expression();
				this.state = 1583;
				this.match(Java8Parser.COLON);
				this.state = 1584;
				this.expression();
				this.state = 1585;
				this.match(Java8Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let localctx: SwitchStatementContext = new SwitchStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, Java8Parser.RULE_switchStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1589;
			this.match(Java8Parser.SWITCH);
			this.state = 1590;
			this.match(Java8Parser.LPAREN);
			this.state = 1591;
			this.expression();
			this.state = 1592;
			this.match(Java8Parser.RPAREN);
			this.state = 1593;
			this.switchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchBlock(): SwitchBlockContext {
		let localctx: SwitchBlockContext = new SwitchBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, Java8Parser.RULE_switchBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1595;
			this.match(Java8Parser.LBRACE);
			this.state = 1599;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1596;
					this.switchBlockStatementGroup();
					}
					}
				}
				this.state = 1601;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
			}
			this.state = 1605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || _la===12) {
				{
				{
				this.state = 1602;
				this.switchLabel();
				}
				}
				this.state = 1607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1608;
			this.match(Java8Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, Java8Parser.RULE_switchBlockStatementGroup);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1610;
			this.switchLabels();
			this.state = 1611;
			this.blockStatements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchLabels(): SwitchLabelsContext {
		let localctx: SwitchLabelsContext = new SwitchLabelsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, Java8Parser.RULE_switchLabels);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1613;
			this.switchLabel();
			this.state = 1617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6 || _la===12) {
				{
				{
				this.state = 1614;
				this.switchLabel();
				}
				}
				this.state = 1619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let localctx: SwitchLabelContext = new SwitchLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, Java8Parser.RULE_switchLabel);
		try {
			this.state = 1630;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1620;
				this.match(Java8Parser.CASE);
				this.state = 1621;
				this.constantExpression();
				this.state = 1622;
				this.match(Java8Parser.COLON);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1624;
				this.match(Java8Parser.CASE);
				this.state = 1625;
				this.enumConstantName();
				this.state = 1626;
				this.match(Java8Parser.COLON);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1628;
				this.match(Java8Parser.DEFAULT);
				this.state = 1629;
				this.match(Java8Parser.COLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumConstantName(): EnumConstantNameContext {
		let localctx: EnumConstantNameContext = new EnumConstantNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, Java8Parser.RULE_enumConstantName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1632;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, Java8Parser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1634;
			this.match(Java8Parser.WHILE);
			this.state = 1635;
			this.match(Java8Parser.LPAREN);
			this.state = 1636;
			this.expression();
			this.state = 1637;
			this.match(Java8Parser.RPAREN);
			this.state = 1638;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext {
		let localctx: WhileStatementNoShortIfContext = new WhileStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, Java8Parser.RULE_whileStatementNoShortIf);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1640;
			this.match(Java8Parser.WHILE);
			this.state = 1641;
			this.match(Java8Parser.LPAREN);
			this.state = 1642;
			this.expression();
			this.state = 1643;
			this.match(Java8Parser.RPAREN);
			this.state = 1644;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doStatement(): DoStatementContext {
		let localctx: DoStatementContext = new DoStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, Java8Parser.RULE_doStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1646;
			this.match(Java8Parser.DO);
			this.state = 1647;
			this.statement();
			this.state = 1648;
			this.match(Java8Parser.WHILE);
			this.state = 1649;
			this.match(Java8Parser.LPAREN);
			this.state = 1650;
			this.expression();
			this.state = 1651;
			this.match(Java8Parser.RPAREN);
			this.state = 1652;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let localctx: ForStatementContext = new ForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, Java8Parser.RULE_forStatement);
		try {
			this.state = 1656;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1654;
				this.basicForStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1655;
				this.enhancedForStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStatementNoShortIf(): ForStatementNoShortIfContext {
		let localctx: ForStatementNoShortIfContext = new ForStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, Java8Parser.RULE_forStatementNoShortIf);
		try {
			this.state = 1660;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1658;
				this.basicForStatementNoShortIf();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1659;
				this.enhancedForStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basicForStatement(): BasicForStatementContext {
		let localctx: BasicForStatementContext = new BasicForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, Java8Parser.RULE_basicForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1662;
			this.match(Java8Parser.FOR);
			this.state = 1663;
			this.match(Java8Parser.LPAREN);
			this.state = 1665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819899688) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
				{
				this.state = 1664;
				this.forInit();
				}
			}

			this.state = 1667;
			this.match(Java8Parser.SEMI);
			this.state = 1669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
				{
				this.state = 1668;
				this.expression();
				}
			}

			this.state = 1671;
			this.match(Java8Parser.SEMI);
			this.state = 1673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
				{
				this.state = 1672;
				this.forUpdate();
				}
			}

			this.state = 1675;
			this.match(Java8Parser.RPAREN);
			this.state = 1676;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext {
		let localctx: BasicForStatementNoShortIfContext = new BasicForStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, Java8Parser.RULE_basicForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1678;
			this.match(Java8Parser.FOR);
			this.state = 1679;
			this.match(Java8Parser.LPAREN);
			this.state = 1681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819899688) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
				{
				this.state = 1680;
				this.forInit();
				}
			}

			this.state = 1683;
			this.match(Java8Parser.SEMI);
			this.state = 1685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
				{
				this.state = 1684;
				this.expression();
				}
			}

			this.state = 1687;
			this.match(Java8Parser.SEMI);
			this.state = 1689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
				{
				this.state = 1688;
				this.forUpdate();
				}
			}

			this.state = 1691;
			this.match(Java8Parser.RPAREN);
			this.state = 1692;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let localctx: ForInitContext = new ForInitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, Java8Parser.RULE_forInit);
		try {
			this.state = 1696;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1694;
				this.statementExpressionList();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1695;
				this.localVariableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let localctx: ForUpdateContext = new ForUpdateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, Java8Parser.RULE_forUpdate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1698;
			this.statementExpressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementExpressionList(): StatementExpressionListContext {
		let localctx: StatementExpressionListContext = new StatementExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, Java8Parser.RULE_statementExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1700;
			this.statementExpression();
			this.state = 1705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 1701;
				this.match(Java8Parser.COMMA);
				this.state = 1702;
				this.statementExpression();
				}
				}
				this.state = 1707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatement(): EnhancedForStatementContext {
		let localctx: EnhancedForStatementContext = new EnhancedForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, Java8Parser.RULE_enhancedForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1708;
			this.match(Java8Parser.FOR);
			this.state = 1709;
			this.match(Java8Parser.LPAREN);
			this.state = 1713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===103) {
				{
				{
				this.state = 1710;
				this.variableModifier();
				}
				}
				this.state = 1715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1716;
			this.unannType();
			this.state = 1717;
			this.variableDeclaratorId();
			this.state = 1718;
			this.match(Java8Parser.COLON);
			this.state = 1719;
			this.expression();
			this.state = 1720;
			this.match(Java8Parser.RPAREN);
			this.state = 1721;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext {
		let localctx: EnhancedForStatementNoShortIfContext = new EnhancedForStatementNoShortIfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, Java8Parser.RULE_enhancedForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1723;
			this.match(Java8Parser.FOR);
			this.state = 1724;
			this.match(Java8Parser.LPAREN);
			this.state = 1728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===103) {
				{
				{
				this.state = 1725;
				this.variableModifier();
				}
				}
				this.state = 1730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1731;
			this.unannType();
			this.state = 1732;
			this.variableDeclaratorId();
			this.state = 1733;
			this.match(Java8Parser.COLON);
			this.state = 1734;
			this.expression();
			this.state = 1735;
			this.match(Java8Parser.RPAREN);
			this.state = 1736;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let localctx: BreakStatementContext = new BreakStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, Java8Parser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1738;
			this.match(Java8Parser.BREAK);
			this.state = 1740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===102) {
				{
				this.state = 1739;
				this.match(Java8Parser.Identifier);
				}
			}

			this.state = 1742;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let localctx: ContinueStatementContext = new ContinueStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, Java8Parser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1744;
			this.match(Java8Parser.CONTINUE);
			this.state = 1746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===102) {
				{
				this.state = 1745;
				this.match(Java8Parser.Identifier);
				}
			}

			this.state = 1748;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, Java8Parser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1750;
			this.match(Java8Parser.RETURN);
			this.state = 1752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
				{
				this.state = 1751;
				this.expression();
				}
			}

			this.state = 1754;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let localctx: ThrowStatementContext = new ThrowStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, Java8Parser.RULE_throwStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1756;
			this.match(Java8Parser.THROW);
			this.state = 1757;
			this.expression();
			this.state = 1758;
			this.match(Java8Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public synchronizedStatement(): SynchronizedStatementContext {
		let localctx: SynchronizedStatementContext = new SynchronizedStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, Java8Parser.RULE_synchronizedStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1760;
			this.match(Java8Parser.SYNCHRONIZED);
			this.state = 1761;
			this.match(Java8Parser.LPAREN);
			this.state = 1762;
			this.expression();
			this.state = 1763;
			this.match(Java8Parser.RPAREN);
			this.state = 1764;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let localctx: TryStatementContext = new TryStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, Java8Parser.RULE_tryStatement);
		let _la: number;
		try {
			this.state = 1778;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1766;
				this.match(Java8Parser.TRY);
				this.state = 1767;
				this.block();
				this.state = 1768;
				this.catches();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1770;
				this.match(Java8Parser.TRY);
				this.state = 1771;
				this.block();
				this.state = 1773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 1772;
					this.catches();
					}
				}

				this.state = 1775;
				this.finally_();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1777;
				this.tryWithResourcesStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catches(): CatchesContext {
		let localctx: CatchesContext = new CatchesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, Java8Parser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1780;
			this.catchClause();
			this.state = 1784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 1781;
				this.catchClause();
				}
				}
				this.state = 1786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let localctx: CatchClauseContext = new CatchClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, Java8Parser.RULE_catchClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1787;
			this.match(Java8Parser.CATCH);
			this.state = 1788;
			this.match(Java8Parser.LPAREN);
			this.state = 1789;
			this.catchFormalParameter();
			this.state = 1790;
			this.match(Java8Parser.RPAREN);
			this.state = 1791;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchFormalParameter(): CatchFormalParameterContext {
		let localctx: CatchFormalParameterContext = new CatchFormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, Java8Parser.RULE_catchFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===103) {
				{
				{
				this.state = 1793;
				this.variableModifier();
				}
				}
				this.state = 1798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1799;
			this.catchType();
			this.state = 1800;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let localctx: CatchTypeContext = new CatchTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, Java8Parser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1802;
			this.unannClassType();
			this.state = 1807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===86) {
				{
				{
				this.state = 1803;
				this.match(Java8Parser.BITOR);
				this.state = 1804;
				this.classType();
				}
				}
				this.state = 1809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public finally_(): Finally_Context {
		let localctx: Finally_Context = new Finally_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 340, Java8Parser.RULE_finally_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1810;
			this.match(Java8Parser.FINALLY);
			this.state = 1811;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tryWithResourcesStatement(): TryWithResourcesStatementContext {
		let localctx: TryWithResourcesStatementContext = new TryWithResourcesStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, Java8Parser.RULE_tryWithResourcesStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1813;
			this.match(Java8Parser.TRY);
			this.state = 1814;
			this.resourceSpecification();
			this.state = 1815;
			this.block();
			this.state = 1817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 1816;
				this.catches();
				}
			}

			this.state = 1820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 1819;
				this.finally_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, Java8Parser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1822;
			this.match(Java8Parser.LPAREN);
			this.state = 1823;
			this.resourceList();
			this.state = 1825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===63) {
				{
				this.state = 1824;
				this.match(Java8Parser.SEMI);
				}
			}

			this.state = 1827;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resourceList(): ResourceListContext {
		let localctx: ResourceListContext = new ResourceListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 346, Java8Parser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1829;
			this.resource();
			this.state = 1834;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 187, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1830;
					this.match(Java8Parser.SEMI);
					this.state = 1831;
					this.resource();
					}
					}
				}
				this.state = 1836;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 187, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let localctx: ResourceContext = new ResourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 348, Java8Parser.RULE_resource);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===103) {
				{
				{
				this.state = 1837;
				this.variableModifier();
				}
				}
				this.state = 1842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1843;
			this.unannType();
			this.state = 1844;
			this.variableDeclaratorId();
			this.state = 1845;
			this.match(Java8Parser.ASSIGN);
			this.state = 1846;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, Java8Parser.RULE_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1850;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				this.state = 1848;
				this.primaryNoNewArray_lfno_primary();
				}
				break;
			case 2:
				{
				this.state = 1849;
				this.arrayCreationExpression();
				}
				break;
			}
			this.state = 1855;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 190, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1852;
					this.primaryNoNewArray_lf_primary();
					}
					}
				}
				this.state = 1857;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 190, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray(): PrimaryNoNewArrayContext {
		let localctx: PrimaryNoNewArrayContext = new PrimaryNoNewArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 352, Java8Parser.RULE_primaryNoNewArray);
		let _la: number;
		try {
			this.state = 1887;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1858;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1859;
				this.typeName();
				this.state = 1864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===61) {
					{
					{
					this.state = 1860;
					this.match(Java8Parser.LBRACK);
					this.state = 1861;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1866;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1867;
				this.match(Java8Parser.DOT);
				this.state = 1868;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1870;
				this.match(Java8Parser.VOID);
				this.state = 1871;
				this.match(Java8Parser.DOT);
				this.state = 1872;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1873;
				this.match(Java8Parser.THIS);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1874;
				this.typeName();
				this.state = 1875;
				this.match(Java8Parser.DOT);
				this.state = 1876;
				this.match(Java8Parser.THIS);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1878;
				this.match(Java8Parser.LPAREN);
				this.state = 1879;
				this.expression();
				this.state = 1880;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1882;
				this.classInstanceCreationExpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1883;
				this.fieldAccess();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1884;
				this.arrayAccess();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1885;
				this.methodInvocation();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1886;
				this.methodReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext {
		let localctx: PrimaryNoNewArray_lf_arrayAccessContext = new PrimaryNoNewArray_lf_arrayAccessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 354, Java8Parser.RULE_primaryNoNewArray_lf_arrayAccess);
		try {
			this.enterOuterAlt(localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext {
		let localctx: PrimaryNoNewArray_lfno_arrayAccessContext = new PrimaryNoNewArray_lfno_arrayAccessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 356, Java8Parser.RULE_primaryNoNewArray_lfno_arrayAccess);
		let _la: number;
		try {
			this.state = 1919;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1891;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1892;
				this.typeName();
				this.state = 1897;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===61) {
					{
					{
					this.state = 1893;
					this.match(Java8Parser.LBRACK);
					this.state = 1894;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1899;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1900;
				this.match(Java8Parser.DOT);
				this.state = 1901;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1903;
				this.match(Java8Parser.VOID);
				this.state = 1904;
				this.match(Java8Parser.DOT);
				this.state = 1905;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1906;
				this.match(Java8Parser.THIS);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1907;
				this.typeName();
				this.state = 1908;
				this.match(Java8Parser.DOT);
				this.state = 1909;
				this.match(Java8Parser.THIS);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1911;
				this.match(Java8Parser.LPAREN);
				this.state = 1912;
				this.expression();
				this.state = 1913;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1915;
				this.classInstanceCreationExpression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1916;
				this.fieldAccess();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1917;
				this.methodInvocation();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1918;
				this.methodReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext {
		let localctx: PrimaryNoNewArray_lf_primaryContext = new PrimaryNoNewArray_lf_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 358, Java8Parser.RULE_primaryNoNewArray_lf_primary);
		try {
			this.state = 1926;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1921;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1922;
				this.fieldAccess_lf_primary();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1923;
				this.arrayAccess_lf_primary();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1924;
				this.methodInvocation_lf_primary();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1925;
				this.methodReference_lf_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext {
		let localctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 360, Java8Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary);
		try {
			this.enterOuterAlt(localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext {
		let localctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 362, Java8Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary);
		try {
			this.state = 1934;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1930;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1931;
				this.fieldAccess_lf_primary();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1932;
				this.methodInvocation_lf_primary();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1933;
				this.methodReference_lf_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext {
		let localctx: PrimaryNoNewArray_lfno_primaryContext = new PrimaryNoNewArray_lfno_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 364, Java8Parser.RULE_primaryNoNewArray_lfno_primary);
		let _la: number;
		try {
			this.state = 1976;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1936;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1937;
				this.typeName();
				this.state = 1942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===61) {
					{
					{
					this.state = 1938;
					this.match(Java8Parser.LBRACK);
					this.state = 1939;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1944;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1945;
				this.match(Java8Parser.DOT);
				this.state = 1946;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1948;
				this.unannPrimitiveType();
				this.state = 1953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===61) {
					{
					{
					this.state = 1949;
					this.match(Java8Parser.LBRACK);
					this.state = 1950;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1955;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1956;
				this.match(Java8Parser.DOT);
				this.state = 1957;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1959;
				this.match(Java8Parser.VOID);
				this.state = 1960;
				this.match(Java8Parser.DOT);
				this.state = 1961;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1962;
				this.match(Java8Parser.THIS);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1963;
				this.typeName();
				this.state = 1964;
				this.match(Java8Parser.DOT);
				this.state = 1965;
				this.match(Java8Parser.THIS);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1967;
				this.match(Java8Parser.LPAREN);
				this.state = 1968;
				this.expression();
				this.state = 1969;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1971;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1972;
				this.fieldAccess_lfno_primary();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1973;
				this.arrayAccess_lfno_primary();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1974;
				this.methodInvocation_lfno_primary();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1975;
				this.methodReference_lfno_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext {
		let localctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 366, Java8Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary);
		try {
			this.enterOuterAlt(localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext {
		let localctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 368, Java8Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary);
		let _la: number;
		try {
			this.state = 2019;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1980;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1981;
				this.typeName();
				this.state = 1986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===61) {
					{
					{
					this.state = 1982;
					this.match(Java8Parser.LBRACK);
					this.state = 1983;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1988;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1989;
				this.match(Java8Parser.DOT);
				this.state = 1990;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1992;
				this.unannPrimitiveType();
				this.state = 1997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===61) {
					{
					{
					this.state = 1993;
					this.match(Java8Parser.LBRACK);
					this.state = 1994;
					this.match(Java8Parser.RBRACK);
					}
					}
					this.state = 1999;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2000;
				this.match(Java8Parser.DOT);
				this.state = 2001;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2003;
				this.match(Java8Parser.VOID);
				this.state = 2004;
				this.match(Java8Parser.DOT);
				this.state = 2005;
				this.match(Java8Parser.CLASS);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2006;
				this.match(Java8Parser.THIS);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2007;
				this.typeName();
				this.state = 2008;
				this.match(Java8Parser.DOT);
				this.state = 2009;
				this.match(Java8Parser.THIS);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2011;
				this.match(Java8Parser.LPAREN);
				this.state = 2012;
				this.expression();
				this.state = 2013;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2015;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2016;
				this.fieldAccess_lfno_primary();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 2017;
				this.methodInvocation_lfno_primary();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 2018;
				this.methodReference_lfno_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		let localctx: ClassInstanceCreationExpressionContext = new ClassInstanceCreationExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 370, Java8Parser.RULE_classInstanceCreationExpression);
		let _la: number;
		try {
			this.state = 2104;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2021;
				this.match(Java8Parser.NEW);
				this.state = 2023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2022;
					this.typeArguments();
					}
				}

				this.state = 2028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 2025;
					this.annotation();
					}
					}
					this.state = 2030;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2031;
				this.match(Java8Parser.Identifier);
				this.state = 2042;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 2032;
					this.match(Java8Parser.DOT);
					this.state = 2036;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===103) {
						{
						{
						this.state = 2033;
						this.annotation();
						}
						}
						this.state = 2038;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2039;
					this.match(Java8Parser.Identifier);
					}
					}
					this.state = 2044;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2045;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2048;
				this.match(Java8Parser.LPAREN);
				this.state = 2050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2049;
					this.argumentList();
					}
				}

				this.state = 2052;
				this.match(Java8Parser.RPAREN);
				this.state = 2054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 2053;
					this.classBody();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2056;
				this.expressionName();
				this.state = 2057;
				this.match(Java8Parser.DOT);
				this.state = 2058;
				this.match(Java8Parser.NEW);
				this.state = 2060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2059;
					this.typeArguments();
					}
				}

				this.state = 2065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 2062;
					this.annotation();
					}
					}
					this.state = 2067;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2068;
				this.match(Java8Parser.Identifier);
				this.state = 2070;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2069;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2072;
				this.match(Java8Parser.LPAREN);
				this.state = 2074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2073;
					this.argumentList();
					}
				}

				this.state = 2076;
				this.match(Java8Parser.RPAREN);
				this.state = 2078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 2077;
					this.classBody();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2080;
				this.primary();
				this.state = 2081;
				this.match(Java8Parser.DOT);
				this.state = 2082;
				this.match(Java8Parser.NEW);
				this.state = 2084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2083;
					this.typeArguments();
					}
				}

				this.state = 2089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 2086;
					this.annotation();
					}
					}
					this.state = 2091;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2092;
				this.match(Java8Parser.Identifier);
				this.state = 2094;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2093;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2096;
				this.match(Java8Parser.LPAREN);
				this.state = 2098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2097;
					this.argumentList();
					}
				}

				this.state = 2100;
				this.match(Java8Parser.RPAREN);
				this.state = 2102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 2101;
					this.classBody();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext {
		let localctx: ClassInstanceCreationExpression_lf_primaryContext = new ClassInstanceCreationExpression_lf_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 372, Java8Parser.RULE_classInstanceCreationExpression_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2106;
			this.match(Java8Parser.DOT);
			this.state = 2107;
			this.match(Java8Parser.NEW);
			this.state = 2109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 2108;
				this.typeArguments();
				}
			}

			this.state = 2114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 2111;
				this.annotation();
				}
				}
				this.state = 2116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2117;
			this.match(Java8Parser.Identifier);
			this.state = 2119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 2118;
				this.typeArgumentsOrDiamond();
				}
			}

			this.state = 2121;
			this.match(Java8Parser.LPAREN);
			this.state = 2123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
				{
				this.state = 2122;
				this.argumentList();
				}
			}

			this.state = 2125;
			this.match(Java8Parser.RPAREN);
			this.state = 2127;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				{
				this.state = 2126;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext {
		let localctx: ClassInstanceCreationExpression_lfno_primaryContext = new ClassInstanceCreationExpression_lfno_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 374, Java8Parser.RULE_classInstanceCreationExpression_lfno_primary);
		let _la: number;
		try {
			this.state = 2188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 31:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2129;
				this.match(Java8Parser.NEW);
				this.state = 2131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2130;
					this.typeArguments();
					}
				}

				this.state = 2136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 2133;
					this.annotation();
					}
					}
					this.state = 2138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2139;
				this.match(Java8Parser.Identifier);
				this.state = 2150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 2140;
					this.match(Java8Parser.DOT);
					this.state = 2144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===103) {
						{
						{
						this.state = 2141;
						this.annotation();
						}
						}
						this.state = 2146;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2147;
					this.match(Java8Parser.Identifier);
					}
					}
					this.state = 2152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2153;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2156;
				this.match(Java8Parser.LPAREN);
				this.state = 2158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2157;
					this.argumentList();
					}
				}

				this.state = 2160;
				this.match(Java8Parser.RPAREN);
				this.state = 2162;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
				case 1:
					{
					this.state = 2161;
					this.classBody();
					}
					break;
				}
				}
				break;
			case 102:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2164;
				this.expressionName();
				this.state = 2165;
				this.match(Java8Parser.DOT);
				this.state = 2166;
				this.match(Java8Parser.NEW);
				this.state = 2168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2167;
					this.typeArguments();
					}
				}

				this.state = 2173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===103) {
					{
					{
					this.state = 2170;
					this.annotation();
					}
					}
					this.state = 2175;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2176;
				this.match(Java8Parser.Identifier);
				this.state = 2178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2177;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2180;
				this.match(Java8Parser.LPAREN);
				this.state = 2182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2181;
					this.argumentList();
					}
				}

				this.state = 2184;
				this.match(Java8Parser.RPAREN);
				this.state = 2186;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
				case 1:
					{
					this.state = 2185;
					this.classBody();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this, this._ctx, this.state);
		this.enterRule(localctx, 376, Java8Parser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 2193;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 239, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2190;
				this.typeArguments();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2191;
				this.match(Java8Parser.LT);
				this.state = 2192;
				this.match(Java8Parser.GT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldAccess(): FieldAccessContext {
		let localctx: FieldAccessContext = new FieldAccessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 378, Java8Parser.RULE_fieldAccess);
		try {
			this.state = 2208;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2195;
				this.primary();
				this.state = 2196;
				this.match(Java8Parser.DOT);
				this.state = 2197;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2199;
				this.match(Java8Parser.SUPER);
				this.state = 2200;
				this.match(Java8Parser.DOT);
				this.state = 2201;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2202;
				this.typeName();
				this.state = 2203;
				this.match(Java8Parser.DOT);
				this.state = 2204;
				this.match(Java8Parser.SUPER);
				this.state = 2205;
				this.match(Java8Parser.DOT);
				this.state = 2206;
				this.match(Java8Parser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext {
		let localctx: FieldAccess_lf_primaryContext = new FieldAccess_lf_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 380, Java8Parser.RULE_fieldAccess_lf_primary);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2210;
			this.match(Java8Parser.DOT);
			this.state = 2211;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext {
		let localctx: FieldAccess_lfno_primaryContext = new FieldAccess_lfno_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 382, Java8Parser.RULE_fieldAccess_lfno_primary);
		try {
			this.state = 2222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 40:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2213;
				this.match(Java8Parser.SUPER);
				this.state = 2214;
				this.match(Java8Parser.DOT);
				this.state = 2215;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 102:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2216;
				this.typeName();
				this.state = 2217;
				this.match(Java8Parser.DOT);
				this.state = 2218;
				this.match(Java8Parser.SUPER);
				this.state = 2219;
				this.match(Java8Parser.DOT);
				this.state = 2220;
				this.match(Java8Parser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayAccess(): ArrayAccessContext {
		let localctx: ArrayAccessContext = new ArrayAccessContext(this, this._ctx, this.state);
		this.enterRule(localctx, 384, Java8Parser.RULE_arrayAccess);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2234;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 2224;
				this.expressionName();
				this.state = 2225;
				this.match(Java8Parser.LBRACK);
				this.state = 2226;
				this.expression();
				this.state = 2227;
				this.match(Java8Parser.RBRACK);
				}
				break;
			case 2:
				{
				this.state = 2229;
				this.primaryNoNewArray_lfno_arrayAccess();
				this.state = 2230;
				this.match(Java8Parser.LBRACK);
				this.state = 2231;
				this.expression();
				this.state = 2232;
				this.match(Java8Parser.RBRACK);
				}
				break;
			}
			this.state = 2243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===61) {
				{
				{
				this.state = 2236;
				this.primaryNoNewArray_lf_arrayAccess();
				this.state = 2237;
				this.match(Java8Parser.LBRACK);
				this.state = 2238;
				this.expression();
				this.state = 2239;
				this.match(Java8Parser.RBRACK);
				}
				}
				this.state = 2245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext {
		let localctx: ArrayAccess_lf_primaryContext = new ArrayAccess_lf_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 386, Java8Parser.RULE_arrayAccess_lf_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2246;
			this.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary();
			this.state = 2247;
			this.match(Java8Parser.LBRACK);
			this.state = 2248;
			this.expression();
			this.state = 2249;
			this.match(Java8Parser.RBRACK);
			}
			this.state = 2258;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 244, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2251;
					this.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary();
					this.state = 2252;
					this.match(Java8Parser.LBRACK);
					this.state = 2253;
					this.expression();
					this.state = 2254;
					this.match(Java8Parser.RBRACK);
					}
					}
				}
				this.state = 2260;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 244, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext {
		let localctx: ArrayAccess_lfno_primaryContext = new ArrayAccess_lfno_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 388, Java8Parser.RULE_arrayAccess_lfno_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2271;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				{
				this.state = 2261;
				this.expressionName();
				this.state = 2262;
				this.match(Java8Parser.LBRACK);
				this.state = 2263;
				this.expression();
				this.state = 2264;
				this.match(Java8Parser.RBRACK);
				}
				break;
			case 2:
				{
				this.state = 2266;
				this.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary();
				this.state = 2267;
				this.match(Java8Parser.LBRACK);
				this.state = 2268;
				this.expression();
				this.state = 2269;
				this.match(Java8Parser.RBRACK);
				}
				break;
			}
			this.state = 2280;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2273;
					this.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary();
					this.state = 2274;
					this.match(Java8Parser.LBRACK);
					this.state = 2275;
					this.expression();
					this.state = 2276;
					this.match(Java8Parser.RBRACK);
					}
					}
				}
				this.state = 2282;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodInvocation(): MethodInvocationContext {
		let localctx: MethodInvocationContext = new MethodInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 390, Java8Parser.RULE_methodInvocation);
		let _la: number;
		try {
			this.state = 2351;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2283;
				this.methodName();
				this.state = 2284;
				this.match(Java8Parser.LPAREN);
				this.state = 2286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2285;
					this.argumentList();
					}
				}

				this.state = 2288;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2290;
				this.typeName();
				this.state = 2291;
				this.match(Java8Parser.DOT);
				this.state = 2293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2292;
					this.typeArguments();
					}
				}

				this.state = 2295;
				this.match(Java8Parser.Identifier);
				this.state = 2296;
				this.match(Java8Parser.LPAREN);
				this.state = 2298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2297;
					this.argumentList();
					}
				}

				this.state = 2300;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2302;
				this.expressionName();
				this.state = 2303;
				this.match(Java8Parser.DOT);
				this.state = 2305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2304;
					this.typeArguments();
					}
				}

				this.state = 2307;
				this.match(Java8Parser.Identifier);
				this.state = 2308;
				this.match(Java8Parser.LPAREN);
				this.state = 2310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2309;
					this.argumentList();
					}
				}

				this.state = 2312;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2314;
				this.primary();
				this.state = 2315;
				this.match(Java8Parser.DOT);
				this.state = 2317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2316;
					this.typeArguments();
					}
				}

				this.state = 2319;
				this.match(Java8Parser.Identifier);
				this.state = 2320;
				this.match(Java8Parser.LPAREN);
				this.state = 2322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2321;
					this.argumentList();
					}
				}

				this.state = 2324;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2326;
				this.match(Java8Parser.SUPER);
				this.state = 2327;
				this.match(Java8Parser.DOT);
				this.state = 2329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2328;
					this.typeArguments();
					}
				}

				this.state = 2331;
				this.match(Java8Parser.Identifier);
				this.state = 2332;
				this.match(Java8Parser.LPAREN);
				this.state = 2334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2333;
					this.argumentList();
					}
				}

				this.state = 2336;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2337;
				this.typeName();
				this.state = 2338;
				this.match(Java8Parser.DOT);
				this.state = 2339;
				this.match(Java8Parser.SUPER);
				this.state = 2340;
				this.match(Java8Parser.DOT);
				this.state = 2342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2341;
					this.typeArguments();
					}
				}

				this.state = 2344;
				this.match(Java8Parser.Identifier);
				this.state = 2345;
				this.match(Java8Parser.LPAREN);
				this.state = 2347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2346;
					this.argumentList();
					}
				}

				this.state = 2349;
				this.match(Java8Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext {
		let localctx: MethodInvocation_lf_primaryContext = new MethodInvocation_lf_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 392, Java8Parser.RULE_methodInvocation_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2353;
			this.match(Java8Parser.DOT);
			this.state = 2355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 2354;
				this.typeArguments();
				}
			}

			this.state = 2357;
			this.match(Java8Parser.Identifier);
			this.state = 2358;
			this.match(Java8Parser.LPAREN);
			this.state = 2360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
				{
				this.state = 2359;
				this.argumentList();
				}
			}

			this.state = 2362;
			this.match(Java8Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext {
		let localctx: MethodInvocation_lfno_primaryContext = new MethodInvocation_lfno_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 394, Java8Parser.RULE_methodInvocation_lfno_primary);
		let _la: number;
		try {
			this.state = 2420;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2364;
				this.methodName();
				this.state = 2365;
				this.match(Java8Parser.LPAREN);
				this.state = 2367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2366;
					this.argumentList();
					}
				}

				this.state = 2369;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2371;
				this.typeName();
				this.state = 2372;
				this.match(Java8Parser.DOT);
				this.state = 2374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2373;
					this.typeArguments();
					}
				}

				this.state = 2376;
				this.match(Java8Parser.Identifier);
				this.state = 2377;
				this.match(Java8Parser.LPAREN);
				this.state = 2379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2378;
					this.argumentList();
					}
				}

				this.state = 2381;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2383;
				this.expressionName();
				this.state = 2384;
				this.match(Java8Parser.DOT);
				this.state = 2386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2385;
					this.typeArguments();
					}
				}

				this.state = 2388;
				this.match(Java8Parser.Identifier);
				this.state = 2389;
				this.match(Java8Parser.LPAREN);
				this.state = 2391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2390;
					this.argumentList();
					}
				}

				this.state = 2393;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2395;
				this.match(Java8Parser.SUPER);
				this.state = 2396;
				this.match(Java8Parser.DOT);
				this.state = 2398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2397;
					this.typeArguments();
					}
				}

				this.state = 2400;
				this.match(Java8Parser.Identifier);
				this.state = 2401;
				this.match(Java8Parser.LPAREN);
				this.state = 2403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2402;
					this.argumentList();
					}
				}

				this.state = 2405;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2406;
				this.typeName();
				this.state = 2407;
				this.match(Java8Parser.DOT);
				this.state = 2408;
				this.match(Java8Parser.SUPER);
				this.state = 2409;
				this.match(Java8Parser.DOT);
				this.state = 2411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2410;
					this.typeArguments();
					}
				}

				this.state = 2413;
				this.match(Java8Parser.Identifier);
				this.state = 2414;
				this.match(Java8Parser.LPAREN);
				this.state = 2416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la===102 || _la===103) {
					{
					this.state = 2415;
					this.argumentList();
					}
				}

				this.state = 2418;
				this.match(Java8Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 396, Java8Parser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2422;
			this.expression();
			this.state = 2427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 2423;
				this.match(Java8Parser.COMMA);
				this.state = 2424;
				this.expression();
				}
				}
				this.state = 2429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodReference(): MethodReferenceContext {
		let localctx: MethodReferenceContext = new MethodReferenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 398, Java8Parser.RULE_methodReference);
		let _la: number;
		try {
			this.state = 2477;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2430;
				this.expressionName();
				this.state = 2431;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2432;
					this.typeArguments();
					}
				}

				this.state = 2435;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2437;
				this.referenceType();
				this.state = 2438;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2439;
					this.typeArguments();
					}
				}

				this.state = 2442;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2444;
				this.primary();
				this.state = 2445;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2446;
					this.typeArguments();
					}
				}

				this.state = 2449;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2451;
				this.match(Java8Parser.SUPER);
				this.state = 2452;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2453;
					this.typeArguments();
					}
				}

				this.state = 2456;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2457;
				this.typeName();
				this.state = 2458;
				this.match(Java8Parser.DOT);
				this.state = 2459;
				this.match(Java8Parser.SUPER);
				this.state = 2460;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2461;
					this.typeArguments();
					}
				}

				this.state = 2464;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2466;
				this.classType();
				this.state = 2467;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2468;
					this.typeArguments();
					}
				}

				this.state = 2471;
				this.match(Java8Parser.NEW);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2473;
				this.arrayType();
				this.state = 2474;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2475;
				this.match(Java8Parser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodReference_lf_primary(): MethodReference_lf_primaryContext {
		let localctx: MethodReference_lf_primaryContext = new MethodReference_lf_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 400, Java8Parser.RULE_methodReference_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2479;
			this.match(Java8Parser.COLONCOLON);
			this.state = 2481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68) {
				{
				this.state = 2480;
				this.typeArguments();
				}
			}

			this.state = 2483;
			this.match(Java8Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext {
		let localctx: MethodReference_lfno_primaryContext = new MethodReference_lfno_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 402, Java8Parser.RULE_methodReference_lfno_primary);
		let _la: number;
		try {
			this.state = 2525;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 285, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2485;
				this.expressionName();
				this.state = 2486;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2487;
					this.typeArguments();
					}
				}

				this.state = 2490;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2492;
				this.referenceType();
				this.state = 2493;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2494;
					this.typeArguments();
					}
				}

				this.state = 2497;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2499;
				this.match(Java8Parser.SUPER);
				this.state = 2500;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2501;
					this.typeArguments();
					}
				}

				this.state = 2504;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2505;
				this.typeName();
				this.state = 2506;
				this.match(Java8Parser.DOT);
				this.state = 2507;
				this.match(Java8Parser.SUPER);
				this.state = 2508;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2509;
					this.typeArguments();
					}
				}

				this.state = 2512;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2514;
				this.classType();
				this.state = 2515;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 2516;
					this.typeArguments();
					}
				}

				this.state = 2519;
				this.match(Java8Parser.NEW);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2521;
				this.arrayType();
				this.state = 2522;
				this.match(Java8Parser.COLONCOLON);
				this.state = 2523;
				this.match(Java8Parser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		let localctx: ArrayCreationExpressionContext = new ArrayCreationExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 404, Java8Parser.RULE_arrayCreationExpression);
		try {
			this.state = 2549;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2527;
				this.match(Java8Parser.NEW);
				this.state = 2528;
				this.primitiveType();
				this.state = 2529;
				this.dimExprs();
				this.state = 2531;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 286, this._ctx) ) {
				case 1:
					{
					this.state = 2530;
					this.dims();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2533;
				this.match(Java8Parser.NEW);
				this.state = 2534;
				this.classOrInterfaceType();
				this.state = 2535;
				this.dimExprs();
				this.state = 2537;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 287, this._ctx) ) {
				case 1:
					{
					this.state = 2536;
					this.dims();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2539;
				this.match(Java8Parser.NEW);
				this.state = 2540;
				this.primitiveType();
				this.state = 2541;
				this.dims();
				this.state = 2542;
				this.arrayInitializer();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2544;
				this.match(Java8Parser.NEW);
				this.state = 2545;
				this.classOrInterfaceType();
				this.state = 2546;
				this.dims();
				this.state = 2547;
				this.arrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimExprs(): DimExprsContext {
		let localctx: DimExprsContext = new DimExprsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 406, Java8Parser.RULE_dimExprs);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2551;
			this.dimExpr();
			this.state = 2555;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 289, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2552;
					this.dimExpr();
					}
					}
				}
				this.state = 2557;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 289, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimExpr(): DimExprContext {
		let localctx: DimExprContext = new DimExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 408, Java8Parser.RULE_dimExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 2558;
				this.annotation();
				}
				}
				this.state = 2563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2564;
			this.match(Java8Parser.LBRACK);
			this.state = 2565;
			this.expression();
			this.state = 2566;
			this.match(Java8Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let localctx: ConstantExpressionContext = new ConstantExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 410, Java8Parser.RULE_constantExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2568;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 412, Java8Parser.RULE_expression);
		try {
			this.state = 2572;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 291, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2570;
				this.lambdaExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2571;
				this.assignmentExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let localctx: LambdaExpressionContext = new LambdaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 414, Java8Parser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2574;
			this.lambdaParameters();
			this.state = 2575;
			this.match(Java8Parser.ARROW);
			this.state = 2576;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let localctx: LambdaParametersContext = new LambdaParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 416, Java8Parser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 2588;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 293, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2578;
				this.match(Java8Parser.Identifier);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2579;
				this.match(Java8Parser.LPAREN);
				this.state = 2581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || _la===37 || _la===102 || _la===103) {
					{
					this.state = 2580;
					this.formalParameterList();
					}
				}

				this.state = 2583;
				this.match(Java8Parser.RPAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2584;
				this.match(Java8Parser.LPAREN);
				this.state = 2585;
				this.inferredFormalParameterList();
				this.state = 2586;
				this.match(Java8Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inferredFormalParameterList(): InferredFormalParameterListContext {
		let localctx: InferredFormalParameterListContext = new InferredFormalParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 418, Java8Parser.RULE_inferredFormalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2590;
			this.match(Java8Parser.Identifier);
			this.state = 2595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===64) {
				{
				{
				this.state = 2591;
				this.match(Java8Parser.COMMA);
				this.state = 2592;
				this.match(Java8Parser.Identifier);
				}
				}
				this.state = 2597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let localctx: LambdaBodyContext = new LambdaBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 420, Java8Parser.RULE_lambdaBody);
		try {
			this.state = 2600;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 31:
			case 37:
			case 40:
			case 43:
			case 48:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 69:
			case 70:
			case 79:
			case 80:
			case 81:
			case 82:
			case 102:
			case 103:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2598;
				this.expression();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2599;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 422, Java8Parser.RULE_assignmentExpression);
		try {
			this.state = 2604;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2602;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2603;
				this.assignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 424, Java8Parser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2606;
			this.leftHandSide();
			this.state = 2607;
			this.assignmentOperator();
			this.state = 2608;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public leftHandSide(): LeftHandSideContext {
		let localctx: LeftHandSideContext = new LeftHandSideContext(this, this._ctx, this.state);
		this.enterRule(localctx, 426, Java8Parser.RULE_leftHandSide);
		try {
			this.state = 2613;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 297, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2610;
				this.expressionName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2611;
				this.fieldAccess();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2612;
				this.arrayAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 428, Java8Parser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2615;
			_la = this._input.LA(1);
			if(!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261412865) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 430, Java8Parser.RULE_conditionalExpression);
		try {
			this.state = 2624;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 298, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2617;
				this.conditionalOrExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2618;
				this.conditionalOrExpression(0);
				this.state = 2619;
				this.match(Java8Parser.QUESTION);
				this.state = 2620;
				this.expression();
				this.state = 2621;
				this.match(Java8Parser.COLON);
				this.state = 2622;
				this.conditionalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public conditionalOrExpression(): ConditionalOrExpressionContext;
	public conditionalOrExpression(_p: number): ConditionalOrExpressionContext;
	// @RuleVersion(0)
	public conditionalOrExpression(_p?: number): ConditionalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ConditionalOrExpressionContext = localctx;
		let _startState: number = 432;
		this.enterRecursionRule(localctx, 432, Java8Parser.RULE_conditionalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2627;
			this.conditionalAndExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2634;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 299, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ConditionalOrExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_conditionalOrExpression);
					this.state = 2629;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2630;
					this.match(Java8Parser.OR);
					this.state = 2631;
					this.conditionalAndExpression(0);
					}
					}
				}
				this.state = 2636;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 299, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public conditionalAndExpression(): ConditionalAndExpressionContext;
	public conditionalAndExpression(_p: number): ConditionalAndExpressionContext;
	// @RuleVersion(0)
	public conditionalAndExpression(_p?: number): ConditionalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ConditionalAndExpressionContext = localctx;
		let _startState: number = 434;
		this.enterRecursionRule(localctx, 434, Java8Parser.RULE_conditionalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2638;
			this.inclusiveOrExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2645;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ConditionalAndExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_conditionalAndExpression);
					this.state = 2640;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2641;
					this.match(Java8Parser.AND);
					this.state = 2642;
					this.inclusiveOrExpression(0);
					}
					}
				}
				this.state = 2647;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 300, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public inclusiveOrExpression(): InclusiveOrExpressionContext;
	public inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
	// @RuleVersion(0)
	public inclusiveOrExpression(_p?: number): InclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this, this._ctx, _parentState);
		let _prevctx: InclusiveOrExpressionContext = localctx;
		let _startState: number = 436;
		this.enterRecursionRule(localctx, 436, Java8Parser.RULE_inclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2649;
			this.exclusiveOrExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2656;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 301, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new InclusiveOrExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_inclusiveOrExpression);
					this.state = 2651;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2652;
					this.match(Java8Parser.BITOR);
					this.state = 2653;
					this.exclusiveOrExpression(0);
					}
					}
				}
				this.state = 2658;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 301, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public exclusiveOrExpression(): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
	// @RuleVersion(0)
	public exclusiveOrExpression(_p?: number): ExclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExclusiveOrExpressionContext = localctx;
		let _startState: number = 438;
		this.enterRecursionRule(localctx, 438, Java8Parser.RULE_exclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2660;
			this.andExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2667;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 302, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ExclusiveOrExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_exclusiveOrExpression);
					this.state = 2662;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2663;
					this.match(Java8Parser.CARET);
					this.state = 2664;
					this.andExpression(0);
					}
					}
				}
				this.state = 2669;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 302, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	// @RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AndExpressionContext = new AndExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AndExpressionContext = localctx;
		let _startState: number = 440;
		this.enterRecursionRule(localctx, 440, Java8Parser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2671;
			this.equalityExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2678;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 303, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new AndExpressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_andExpression);
					this.state = 2673;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2674;
					this.match(Java8Parser.BITAND);
					this.state = 2675;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 2680;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 303, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = localctx;
		let _startState: number = 442;
		this.enterRecursionRule(localctx, 442, Java8Parser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2682;
			this.relationalExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2692;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 305, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2690;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 304, this._ctx) ) {
					case 1:
						{
						localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_equalityExpression);
						this.state = 2684;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2685;
						this.match(Java8Parser.EQUAL);
						this.state = 2686;
						this.relationalExpression(0);
						}
						break;
					case 2:
						{
						localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_equalityExpression);
						this.state = 2687;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2688;
						this.match(Java8Parser.NOTEQUAL);
						this.state = 2689;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2694;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 305, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = localctx;
		let _startState: number = 444;
		this.enterRecursionRule(localctx, 444, Java8Parser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2696;
			this.shiftExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2715;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 307, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2713;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 306, this._ctx) ) {
					case 1:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2698;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 2699;
						this.match(Java8Parser.LT);
						this.state = 2700;
						this.shiftExpression(0);
						}
						break;
					case 2:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2701;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 2702;
						this.match(Java8Parser.GT);
						this.state = 2703;
						this.shiftExpression(0);
						}
						break;
					case 3:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2704;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2705;
						this.match(Java8Parser.LE);
						this.state = 2706;
						this.shiftExpression(0);
						}
						break;
					case 4:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2707;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2708;
						this.match(Java8Parser.GE);
						this.state = 2709;
						this.shiftExpression(0);
						}
						break;
					case 5:
						{
						localctx = new RelationalExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_relationalExpression);
						this.state = 2710;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2711;
						this.match(Java8Parser.INSTANCEOF);
						this.state = 2712;
						this.referenceType();
						}
						break;
					}
					}
				}
				this.state = 2717;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 307, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	// @RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ShiftExpressionContext = new ShiftExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = localctx;
		let _startState: number = 446;
		this.enterRecursionRule(localctx, 446, Java8Parser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2719;
			this.additiveExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2736;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 309, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2734;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 308, this._ctx) ) {
					case 1:
						{
						localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_shiftExpression);
						this.state = 2721;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2722;
						this.match(Java8Parser.LT);
						this.state = 2723;
						this.match(Java8Parser.LT);
						this.state = 2724;
						this.additiveExpression(0);
						}
						break;
					case 2:
						{
						localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_shiftExpression);
						this.state = 2725;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2726;
						this.match(Java8Parser.GT);
						this.state = 2727;
						this.match(Java8Parser.GT);
						this.state = 2728;
						this.additiveExpression(0);
						}
						break;
					case 3:
						{
						localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_shiftExpression);
						this.state = 2729;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2730;
						this.match(Java8Parser.GT);
						this.state = 2731;
						this.match(Java8Parser.GT);
						this.state = 2732;
						this.match(Java8Parser.GT);
						this.state = 2733;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2738;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 309, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = localctx;
		let _startState: number = 448;
		this.enterRecursionRule(localctx, 448, Java8Parser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2740;
			this.multiplicativeExpression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2750;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 311, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2748;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 310, this._ctx) ) {
					case 1:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_additiveExpression);
						this.state = 2742;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2743;
						this.match(Java8Parser.ADD);
						this.state = 2744;
						this.multiplicativeExpression(0);
						}
						break;
					case 2:
						{
						localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_additiveExpression);
						this.state = 2745;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2746;
						this.match(Java8Parser.SUB);
						this.state = 2747;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2752;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 311, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = localctx;
		let _startState: number = 450;
		this.enterRecursionRule(localctx, 450, Java8Parser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2754;
			this.unaryExpression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2767;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 313, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 2765;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_multiplicativeExpression);
						this.state = 2756;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 2757;
						this.match(Java8Parser.MUL);
						this.state = 2758;
						this.unaryExpression();
						}
						break;
					case 2:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_multiplicativeExpression);
						this.state = 2759;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 2760;
						this.match(Java8Parser.DIV);
						this.state = 2761;
						this.unaryExpression();
						}
						break;
					case 3:
						{
						localctx = new MultiplicativeExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Java8Parser.RULE_multiplicativeExpression);
						this.state = 2762;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 2763;
						this.match(Java8Parser.MOD);
						this.state = 2764;
						this.unaryExpression();
						}
						break;
					}
					}
				}
				this.state = 2769;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 313, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 452, Java8Parser.RULE_unaryExpression);
		try {
			this.state = 2777;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 79:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2770;
				this.preIncrementExpression();
				}
				break;
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2771;
				this.preDecrementExpression();
				}
				break;
			case 81:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2772;
				this.match(Java8Parser.ADD);
				this.state = 2773;
				this.unaryExpression();
				}
				break;
			case 82:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2774;
				this.match(Java8Parser.SUB);
				this.state = 2775;
				this.unaryExpression();
				}
				break;
			case 3:
			case 5:
			case 8:
			case 14:
			case 20:
			case 27:
			case 29:
			case 31:
			case 37:
			case 40:
			case 43:
			case 48:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 69:
			case 70:
			case 102:
			case 103:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2776;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public preIncrementExpression(): PreIncrementExpressionContext {
		let localctx: PreIncrementExpressionContext = new PreIncrementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 454, Java8Parser.RULE_preIncrementExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2779;
			this.match(Java8Parser.INC);
			this.state = 2780;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public preDecrementExpression(): PreDecrementExpressionContext {
		let localctx: PreDecrementExpressionContext = new PreDecrementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 456, Java8Parser.RULE_preDecrementExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2782;
			this.match(Java8Parser.DEC);
			this.state = 2783;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		let localctx: UnaryExpressionNotPlusMinusContext = new UnaryExpressionNotPlusMinusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 458, Java8Parser.RULE_unaryExpressionNotPlusMinus);
		try {
			this.state = 2791;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 315, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2785;
				this.postfixExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2786;
				this.match(Java8Parser.TILDE);
				this.state = 2787;
				this.unaryExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2788;
				this.match(Java8Parser.BANG);
				this.state = 2789;
				this.unaryExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2790;
				this.castExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 460, Java8Parser.RULE_postfixExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2795;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 316, this._ctx) ) {
			case 1:
				{
				this.state = 2793;
				this.primary();
				}
				break;
			case 2:
				{
				this.state = 2794;
				this.expressionName();
				}
				break;
			}
			this.state = 2801;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 318, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2799;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 79:
						{
						this.state = 2797;
						this.postIncrementExpression_lf_postfixExpression();
						}
						break;
					case 80:
						{
						this.state = 2798;
						this.postDecrementExpression_lf_postfixExpression();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 2803;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 318, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postIncrementExpression(): PostIncrementExpressionContext {
		let localctx: PostIncrementExpressionContext = new PostIncrementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 462, Java8Parser.RULE_postIncrementExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2804;
			this.postfixExpression();
			this.state = 2805;
			this.match(Java8Parser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext {
		let localctx: PostIncrementExpression_lf_postfixExpressionContext = new PostIncrementExpression_lf_postfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 464, Java8Parser.RULE_postIncrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2807;
			this.match(Java8Parser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postDecrementExpression(): PostDecrementExpressionContext {
		let localctx: PostDecrementExpressionContext = new PostDecrementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 466, Java8Parser.RULE_postDecrementExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2809;
			this.postfixExpression();
			this.state = 2810;
			this.match(Java8Parser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext {
		let localctx: PostDecrementExpression_lf_postfixExpressionContext = new PostDecrementExpression_lf_postfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 468, Java8Parser.RULE_postDecrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2812;
			this.match(Java8Parser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let localctx: CastExpressionContext = new CastExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 470, Java8Parser.RULE_castExpression);
		let _la: number;
		try {
			this.state = 2841;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 321, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2814;
				this.match(Java8Parser.LPAREN);
				this.state = 2815;
				this.primitiveType();
				this.state = 2816;
				this.match(Java8Parser.RPAREN);
				this.state = 2817;
				this.unaryExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2819;
				this.match(Java8Parser.LPAREN);
				this.state = 2820;
				this.referenceType();
				this.state = 2824;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===85) {
					{
					{
					this.state = 2821;
					this.additionalBound();
					}
					}
					this.state = 2826;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2827;
				this.match(Java8Parser.RPAREN);
				this.state = 2828;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2830;
				this.match(Java8Parser.LPAREN);
				this.state = 2831;
				this.referenceType();
				this.state = 2835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===85) {
					{
					{
					this.state = 2832;
					this.additionalBound();
					}
					}
					this.state = 2837;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2838;
				this.match(Java8Parser.RPAREN);
				this.state = 2839;
				this.lambdaExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 25:
			return this.packageName_sempred(localctx as PackageNameContext, predIndex);
		case 27:
			return this.packageOrTypeName_sempred(localctx as PackageOrTypeNameContext, predIndex);
		case 30:
			return this.ambiguousName_sempred(localctx as AmbiguousNameContext, predIndex);
		case 216:
			return this.conditionalOrExpression_sempred(localctx as ConditionalOrExpressionContext, predIndex);
		case 217:
			return this.conditionalAndExpression_sempred(localctx as ConditionalAndExpressionContext, predIndex);
		case 218:
			return this.inclusiveOrExpression_sempred(localctx as InclusiveOrExpressionContext, predIndex);
		case 219:
			return this.exclusiveOrExpression_sempred(localctx as ExclusiveOrExpressionContext, predIndex);
		case 220:
			return this.andExpression_sempred(localctx as AndExpressionContext, predIndex);
		case 221:
			return this.equalityExpression_sempred(localctx as EqualityExpressionContext, predIndex);
		case 222:
			return this.relationalExpression_sempred(localctx as RelationalExpressionContext, predIndex);
		case 223:
			return this.shiftExpression_sempred(localctx as ShiftExpressionContext, predIndex);
		case 224:
			return this.additiveExpression_sempred(localctx as AdditiveExpressionContext, predIndex);
		case 225:
			return this.multiplicativeExpression_sempred(localctx as MultiplicativeExpressionContext, predIndex);
		}
		return true;
	}
	private packageName_sempred(localctx: PackageNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private packageOrTypeName_sempred(localctx: PackageOrTypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private ambiguousName_sempred(localctx: AmbiguousNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalOrExpression_sempred(localctx: ConditionalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalAndExpression_sempred(localctx: ConditionalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveOrExpression_sempred(localctx: InclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveOrExpression_sempred(localctx: ExclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);
		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 5);
		case 11:
			return this.precpred(this._ctx, 4);
		case 12:
			return this.precpred(this._ctx, 3);
		case 13:
			return this.precpred(this._ctx, 2);
		case 14:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 3);
		case 16:
			return this.precpred(this._ctx, 2);
		case 17:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 18:
			return this.precpred(this._ctx, 2);
		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 3);
		case 21:
			return this.precpred(this._ctx, 2);
		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,107,2844,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,2,181,
	7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,2,187,
	7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,2,193,
	7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,2,199,
	7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,2,205,
	7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,2,211,
	7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,
	7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,
	7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,
	7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
	7,235,1,0,1,0,1,1,5,1,476,8,1,10,1,12,1,479,9,1,1,1,1,1,5,1,483,8,1,10,
	1,12,1,486,9,1,1,1,3,1,489,8,1,1,2,1,2,3,2,493,8,2,1,3,1,3,1,4,1,4,1,5,
	1,5,1,5,3,5,502,8,5,1,6,1,6,3,6,506,8,6,1,6,1,6,5,6,510,8,6,10,6,12,6,513,
	9,6,1,7,5,7,516,8,7,10,7,12,7,519,9,7,1,7,1,7,3,7,523,8,7,1,7,1,7,1,7,5,
	7,528,8,7,10,7,12,7,531,9,7,1,7,1,7,3,7,535,8,7,3,7,537,8,7,1,8,1,8,5,8,
	541,8,8,10,8,12,8,544,9,8,1,8,1,8,3,8,548,8,8,1,9,5,9,551,8,9,10,9,12,9,
	554,9,9,1,9,1,9,3,9,558,8,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,5,13,567,
	8,13,10,13,12,13,570,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
	1,14,1,14,3,14,583,8,14,1,15,5,15,586,8,15,10,15,12,15,589,9,15,1,15,1,
	15,1,15,5,15,594,8,15,10,15,12,15,597,9,15,1,15,1,15,5,15,601,8,15,10,15,
	12,15,604,9,15,1,16,5,16,607,8,16,10,16,12,16,610,9,16,1,16,1,16,3,16,614,
	8,16,1,17,1,17,1,18,1,18,1,18,1,18,1,18,5,18,623,8,18,10,18,12,18,626,9,
	18,3,18,628,8,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,5,21,
	640,8,21,10,21,12,21,643,9,21,1,22,1,22,3,22,647,8,22,1,23,5,23,650,8,23,
	10,23,12,23,653,9,23,1,23,1,23,3,23,657,8,23,1,24,1,24,1,24,1,24,3,24,663,
	8,24,1,25,1,25,1,25,1,25,1,25,1,25,5,25,671,8,25,10,25,12,25,674,9,25,1,
	26,1,26,1,26,1,26,1,26,3,26,681,8,26,1,27,1,27,1,27,1,27,1,27,1,27,5,27,
	689,8,27,10,27,12,27,692,9,27,1,28,1,28,1,28,1,28,1,28,3,28,699,8,28,1,
	29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,5,30,709,8,30,10,30,12,30,712,9,30,
	1,31,3,31,715,8,31,1,31,5,31,718,8,31,10,31,12,31,721,9,31,1,31,5,31,724,
	8,31,10,31,12,31,727,9,31,1,31,1,31,1,32,5,32,732,8,32,10,32,12,32,735,
	9,32,1,32,1,32,1,32,1,32,1,33,1,33,1,34,1,34,1,34,1,34,3,34,747,8,34,1,
	35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,
	1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,3,39,776,8,
	39,1,40,1,40,3,40,780,8,40,1,41,5,41,783,8,41,10,41,12,41,786,9,41,1,41,
	1,41,1,41,3,41,791,8,41,1,41,3,41,794,8,41,1,41,3,41,797,8,41,1,41,1,41,
	1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,809,8,42,1,43,1,43,1,43,1,
	43,1,44,1,44,1,44,5,44,818,8,44,10,44,12,44,821,9,44,1,45,1,45,1,45,1,46,
	1,46,1,46,1,47,1,47,1,47,5,47,832,8,47,10,47,12,47,835,9,47,1,48,1,48,5,
	48,839,8,48,10,48,12,48,842,9,48,1,48,1,48,1,49,1,49,1,49,1,49,3,49,850,
	8,49,1,50,1,50,1,50,1,50,1,50,3,50,857,8,50,1,51,5,51,860,8,51,10,51,12,
	51,863,9,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
	3,52,877,8,52,1,53,1,53,1,53,5,53,882,8,53,10,53,12,53,885,9,53,1,54,1,
	54,1,54,3,54,890,8,54,1,55,1,55,3,55,894,8,55,1,56,1,56,3,56,898,8,56,1,
	57,1,57,3,57,902,8,57,1,58,1,58,3,58,906,8,58,1,59,1,59,1,59,3,59,911,8,
	59,1,60,1,60,3,60,915,8,60,1,60,1,60,5,60,919,8,60,10,60,12,60,922,9,60,
	1,61,1,61,3,61,926,8,61,1,61,1,61,1,61,5,61,931,8,61,10,61,12,61,934,9,
	61,1,61,1,61,3,61,938,8,61,3,61,940,8,61,1,62,1,62,5,62,944,8,62,10,62,
	12,62,947,9,62,1,62,1,62,3,62,951,8,62,1,63,1,63,3,63,955,8,63,1,64,1,64,
	1,65,1,65,1,66,1,66,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,
	68,3,68,974,8,68,1,69,5,69,977,8,69,10,69,12,69,980,9,69,1,69,1,69,1,69,
	1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,995,8,70,1,71,1,
	71,1,71,3,71,1000,8,71,1,71,1,71,5,71,1004,8,71,10,71,12,71,1007,9,71,1,
	71,1,71,1,71,3,71,1012,8,71,3,71,1014,8,71,1,72,1,72,3,72,1018,8,72,1,73,
	1,73,1,73,3,73,1023,8,73,1,73,1,73,3,73,1027,8,73,1,74,1,74,1,74,1,74,1,
	74,1,74,3,74,1035,8,74,1,75,1,75,1,75,5,75,1040,8,75,10,75,12,75,1043,9,
	75,1,75,1,75,1,75,5,75,1048,8,75,10,75,12,75,1051,9,75,3,75,1053,8,75,1,
	76,5,76,1056,8,76,10,76,12,76,1059,9,76,1,76,1,76,1,76,1,77,1,77,3,77,1066,
	8,77,1,78,5,78,1069,8,78,10,78,12,78,1072,9,78,1,78,1,78,5,78,1076,8,78,
	10,78,12,78,1079,9,78,1,78,1,78,1,78,1,78,3,78,1085,8,78,1,79,5,79,1088,
	8,79,10,79,12,79,1091,9,79,1,79,1,79,1,79,3,79,1096,8,79,1,79,1,79,1,80,
	1,80,1,80,1,81,1,81,1,81,5,81,1106,8,81,10,81,12,81,1109,9,81,1,82,1,82,
	3,82,1113,8,82,1,83,1,83,3,83,1117,8,83,1,84,1,84,1,85,1,85,1,85,1,86,5,
	86,1125,8,86,10,86,12,86,1128,9,86,1,86,1,86,3,86,1132,8,86,1,86,1,86,1,
	87,1,87,1,87,1,87,3,87,1140,8,87,1,88,3,88,1143,8,88,1,88,1,88,1,88,3,88,
	1148,8,88,1,88,1,88,1,89,1,89,1,90,1,90,3,90,1156,8,90,1,90,3,90,1159,8,
	90,1,90,1,90,1,91,3,91,1164,8,91,1,91,1,91,1,91,3,91,1169,8,91,1,91,1,91,
	1,91,3,91,1174,8,91,1,91,1,91,1,91,3,91,1179,8,91,1,91,1,91,1,91,1,91,1,
	91,3,91,1186,8,91,1,91,1,91,1,91,3,91,1191,8,91,1,91,1,91,1,91,1,91,1,91,
	1,91,3,91,1199,8,91,1,91,1,91,1,91,3,91,1204,8,91,1,91,1,91,1,91,3,91,1209,
	8,91,1,92,5,92,1212,8,92,10,92,12,92,1215,9,92,1,92,1,92,1,92,3,92,1220,
	8,92,1,92,1,92,1,93,1,93,3,93,1226,8,93,1,93,3,93,1229,8,93,1,93,3,93,1232,
	8,93,1,93,1,93,1,94,1,94,1,94,5,94,1239,8,94,10,94,12,94,1242,9,94,1,95,
	5,95,1245,8,95,10,95,12,95,1248,9,95,1,95,1,95,1,95,3,95,1253,8,95,1,95,
	3,95,1256,8,95,1,95,3,95,1259,8,95,1,96,1,96,1,97,1,97,5,97,1265,8,97,10,
	97,12,97,1268,9,97,1,98,1,98,3,98,1272,8,98,1,99,5,99,1275,8,99,10,99,12,
	99,1278,9,99,1,99,1,99,1,99,3,99,1283,8,99,1,99,3,99,1286,8,99,1,99,1,99,
	1,100,1,100,1,100,1,100,1,100,1,100,1,100,3,100,1297,8,100,1,101,1,101,
	1,101,1,102,1,102,5,102,1304,8,102,10,102,12,102,1307,9,102,1,102,1,102,
	1,103,1,103,1,103,1,103,1,103,3,103,1316,8,103,1,104,5,104,1319,8,104,10,
	104,12,104,1322,9,104,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,3,
	105,1332,8,105,1,106,5,106,1335,8,106,10,106,12,106,1338,9,106,1,106,1,
	106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,3,107,1349,8,107,1,108,5,
	108,1352,8,108,10,108,12,108,1355,9,108,1,108,1,108,1,108,1,108,1,108,1,
	109,1,109,5,109,1364,8,109,10,109,12,109,1367,9,109,1,109,1,109,1,110,1,
	110,1,110,1,110,1,110,3,110,1376,8,110,1,111,5,111,1379,8,111,10,111,12,
	111,1382,9,111,1,111,1,111,1,111,1,111,1,111,3,111,1389,8,111,1,111,3,111,
	1392,8,111,1,111,1,111,1,112,1,112,1,112,3,112,1399,8,112,1,113,1,113,1,
	113,1,114,1,114,1,114,3,114,1407,8,114,1,115,1,115,1,115,1,115,3,115,1413,
	8,115,1,115,1,115,1,116,1,116,1,116,5,116,1420,8,116,10,116,12,116,1423,
	9,116,1,117,1,117,1,117,1,117,1,118,1,118,1,118,3,118,1432,8,118,1,119,
	1,119,3,119,1436,8,119,1,119,3,119,1439,8,119,1,119,1,119,1,120,1,120,1,
	120,5,120,1446,8,120,10,120,12,120,1449,9,120,1,121,1,121,1,121,1,122,1,
	122,1,122,1,122,1,122,1,122,1,123,1,123,3,123,1462,8,123,1,123,3,123,1465,
	8,123,1,123,1,123,1,124,1,124,1,124,5,124,1472,8,124,10,124,12,124,1475,
	9,124,1,125,1,125,3,125,1479,8,125,1,125,1,125,1,126,4,126,1484,8,126,11,
	126,12,126,1485,1,127,1,127,1,127,3,127,1491,8,127,1,128,1,128,1,128,1,
	129,5,129,1497,8,129,10,129,12,129,1500,9,129,1,129,1,129,1,129,1,130,1,
	130,1,130,1,130,1,130,1,130,3,130,1511,8,130,1,131,1,131,1,131,1,131,1,
	131,3,131,1518,8,131,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,
	132,1,132,1,132,1,132,3,132,1532,8,132,1,133,1,133,1,134,1,134,1,134,1,
	134,1,135,1,135,1,135,1,135,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,
	137,1,137,1,137,3,137,1554,8,137,1,138,1,138,1,138,1,138,1,138,1,138,1,
	139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,140,1,140,1,140,1,140,1,
	140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,
	141,1,141,3,141,1588,8,141,1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,
	143,5,143,1598,8,143,10,143,12,143,1601,9,143,1,143,5,143,1604,8,143,10,
	143,12,143,1607,9,143,1,143,1,143,1,144,1,144,1,144,1,145,1,145,5,145,1616,
	8,145,10,145,12,145,1619,9,145,1,146,1,146,1,146,1,146,1,146,1,146,1,146,
	1,146,1,146,1,146,3,146,1631,8,146,1,147,1,147,1,148,1,148,1,148,1,148,
	1,148,1,148,1,149,1,149,1,149,1,149,1,149,1,149,1,150,1,150,1,150,1,150,
	1,150,1,150,1,150,1,150,1,151,1,151,3,151,1657,8,151,1,152,1,152,3,152,
	1661,8,152,1,153,1,153,1,153,3,153,1666,8,153,1,153,1,153,3,153,1670,8,
	153,1,153,1,153,3,153,1674,8,153,1,153,1,153,1,153,1,154,1,154,1,154,3,
	154,1682,8,154,1,154,1,154,3,154,1686,8,154,1,154,1,154,3,154,1690,8,154,
	1,154,1,154,1,154,1,155,1,155,3,155,1697,8,155,1,156,1,156,1,157,1,157,
	1,157,5,157,1704,8,157,10,157,12,157,1707,9,157,1,158,1,158,1,158,5,158,
	1712,8,158,10,158,12,158,1715,9,158,1,158,1,158,1,158,1,158,1,158,1,158,
	1,158,1,159,1,159,1,159,5,159,1727,8,159,10,159,12,159,1730,9,159,1,159,
	1,159,1,159,1,159,1,159,1,159,1,159,1,160,1,160,3,160,1741,8,160,1,160,
	1,160,1,161,1,161,3,161,1747,8,161,1,161,1,161,1,162,1,162,3,162,1753,8,
	162,1,162,1,162,1,163,1,163,1,163,1,163,1,164,1,164,1,164,1,164,1,164,1,
	164,1,165,1,165,1,165,1,165,1,165,1,165,1,165,3,165,1774,8,165,1,165,1,
	165,1,165,3,165,1779,8,165,1,166,1,166,5,166,1783,8,166,10,166,12,166,1786,
	9,166,1,167,1,167,1,167,1,167,1,167,1,167,1,168,5,168,1795,8,168,10,168,
	12,168,1798,9,168,1,168,1,168,1,168,1,169,1,169,1,169,5,169,1806,8,169,
	10,169,12,169,1809,9,169,1,170,1,170,1,170,1,171,1,171,1,171,1,171,3,171,
	1818,8,171,1,171,3,171,1821,8,171,1,172,1,172,1,172,3,172,1826,8,172,1,
	172,1,172,1,173,1,173,1,173,5,173,1833,8,173,10,173,12,173,1836,9,173,1,
	174,5,174,1839,8,174,10,174,12,174,1842,9,174,1,174,1,174,1,174,1,174,1,
	174,1,175,1,175,3,175,1851,8,175,1,175,5,175,1854,8,175,10,175,12,175,1857,
	9,175,1,176,1,176,1,176,1,176,5,176,1863,8,176,10,176,12,176,1866,9,176,
	1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,
	1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,176,3,176,1888,8,176,1,177,
	1,177,1,178,1,178,1,178,1,178,5,178,1896,8,178,10,178,12,178,1899,9,178,
	1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,
	1,178,1,178,1,178,1,178,1,178,1,178,1,178,3,178,1920,8,178,1,179,1,179,
	1,179,1,179,1,179,3,179,1927,8,179,1,180,1,180,1,181,1,181,1,181,1,181,
	3,181,1935,8,181,1,182,1,182,1,182,1,182,5,182,1941,8,182,10,182,12,182,
	1944,9,182,1,182,1,182,1,182,1,182,1,182,1,182,5,182,1952,8,182,10,182,
	12,182,1955,9,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,
	1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,1,182,3,182,
	1977,8,182,1,183,1,183,1,184,1,184,1,184,1,184,5,184,1985,8,184,10,184,
	12,184,1988,9,184,1,184,1,184,1,184,1,184,1,184,1,184,5,184,1996,8,184,
	10,184,12,184,1999,9,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,
	1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,3,184,
	2020,8,184,1,185,1,185,3,185,2024,8,185,1,185,5,185,2027,8,185,10,185,12,
	185,2030,9,185,1,185,1,185,1,185,5,185,2035,8,185,10,185,12,185,2038,9,
	185,1,185,5,185,2041,8,185,10,185,12,185,2044,9,185,1,185,3,185,2047,8,
	185,1,185,1,185,3,185,2051,8,185,1,185,1,185,3,185,2055,8,185,1,185,1,185,
	1,185,1,185,3,185,2061,8,185,1,185,5,185,2064,8,185,10,185,12,185,2067,
	9,185,1,185,1,185,3,185,2071,8,185,1,185,1,185,3,185,2075,8,185,1,185,1,
	185,3,185,2079,8,185,1,185,1,185,1,185,1,185,3,185,2085,8,185,1,185,5,185,
	2088,8,185,10,185,12,185,2091,9,185,1,185,1,185,3,185,2095,8,185,1,185,
	1,185,3,185,2099,8,185,1,185,1,185,3,185,2103,8,185,3,185,2105,8,185,1,
	186,1,186,1,186,3,186,2110,8,186,1,186,5,186,2113,8,186,10,186,12,186,2116,
	9,186,1,186,1,186,3,186,2120,8,186,1,186,1,186,3,186,2124,8,186,1,186,1,
	186,3,186,2128,8,186,1,187,1,187,3,187,2132,8,187,1,187,5,187,2135,8,187,
	10,187,12,187,2138,9,187,1,187,1,187,1,187,5,187,2143,8,187,10,187,12,187,
	2146,9,187,1,187,5,187,2149,8,187,10,187,12,187,2152,9,187,1,187,3,187,
	2155,8,187,1,187,1,187,3,187,2159,8,187,1,187,1,187,3,187,2163,8,187,1,
	187,1,187,1,187,1,187,3,187,2169,8,187,1,187,5,187,2172,8,187,10,187,12,
	187,2175,9,187,1,187,1,187,3,187,2179,8,187,1,187,1,187,3,187,2183,8,187,
	1,187,1,187,3,187,2187,8,187,3,187,2189,8,187,1,188,1,188,1,188,3,188,2194,
	8,188,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,
	1,189,1,189,3,189,2209,8,189,1,190,1,190,1,190,1,191,1,191,1,191,1,191,
	1,191,1,191,1,191,1,191,1,191,3,191,2223,8,191,1,192,1,192,1,192,1,192,
	1,192,1,192,1,192,1,192,1,192,1,192,3,192,2235,8,192,1,192,1,192,1,192,
	1,192,1,192,5,192,2242,8,192,10,192,12,192,2245,9,192,1,193,1,193,1,193,
	1,193,1,193,1,193,1,193,1,193,1,193,1,193,5,193,2257,8,193,10,193,12,193,
	2260,9,193,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,
	3,194,2272,8,194,1,194,1,194,1,194,1,194,1,194,5,194,2279,8,194,10,194,
	12,194,2282,9,194,1,195,1,195,1,195,3,195,2287,8,195,1,195,1,195,1,195,
	1,195,1,195,3,195,2294,8,195,1,195,1,195,1,195,3,195,2299,8,195,1,195,1,
	195,1,195,1,195,1,195,3,195,2306,8,195,1,195,1,195,1,195,3,195,2311,8,195,
	1,195,1,195,1,195,1,195,1,195,3,195,2318,8,195,1,195,1,195,1,195,3,195,
	2323,8,195,1,195,1,195,1,195,1,195,1,195,3,195,2330,8,195,1,195,1,195,1,
	195,3,195,2335,8,195,1,195,1,195,1,195,1,195,1,195,1,195,3,195,2343,8,195,
	1,195,1,195,1,195,3,195,2348,8,195,1,195,1,195,3,195,2352,8,195,1,196,1,
	196,3,196,2356,8,196,1,196,1,196,1,196,3,196,2361,8,196,1,196,1,196,1,197,
	1,197,1,197,3,197,2368,8,197,1,197,1,197,1,197,1,197,1,197,3,197,2375,8,
	197,1,197,1,197,1,197,3,197,2380,8,197,1,197,1,197,1,197,1,197,1,197,3,
	197,2387,8,197,1,197,1,197,1,197,3,197,2392,8,197,1,197,1,197,1,197,1,197,
	1,197,3,197,2399,8,197,1,197,1,197,1,197,3,197,2404,8,197,1,197,1,197,1,
	197,1,197,1,197,1,197,3,197,2412,8,197,1,197,1,197,1,197,3,197,2417,8,197,
	1,197,1,197,3,197,2421,8,197,1,198,1,198,1,198,5,198,2426,8,198,10,198,
	12,198,2429,9,198,1,199,1,199,1,199,3,199,2434,8,199,1,199,1,199,1,199,
	1,199,1,199,3,199,2441,8,199,1,199,1,199,1,199,1,199,1,199,3,199,2448,8,
	199,1,199,1,199,1,199,1,199,1,199,3,199,2455,8,199,1,199,1,199,1,199,1,
	199,1,199,1,199,3,199,2463,8,199,1,199,1,199,1,199,1,199,1,199,3,199,2470,
	8,199,1,199,1,199,1,199,1,199,1,199,1,199,3,199,2478,8,199,1,200,1,200,
	3,200,2482,8,200,1,200,1,200,1,201,1,201,1,201,3,201,2489,8,201,1,201,1,
	201,1,201,1,201,1,201,3,201,2496,8,201,1,201,1,201,1,201,1,201,1,201,3,
	201,2503,8,201,1,201,1,201,1,201,1,201,1,201,1,201,3,201,2511,8,201,1,201,
	1,201,1,201,1,201,1,201,3,201,2518,8,201,1,201,1,201,1,201,1,201,1,201,
	1,201,3,201,2526,8,201,1,202,1,202,1,202,1,202,3,202,2532,8,202,1,202,1,
	202,1,202,1,202,3,202,2538,8,202,1,202,1,202,1,202,1,202,1,202,1,202,1,
	202,1,202,1,202,1,202,3,202,2550,8,202,1,203,1,203,5,203,2554,8,203,10,
	203,12,203,2557,9,203,1,204,5,204,2560,8,204,10,204,12,204,2563,9,204,1,
	204,1,204,1,204,1,204,1,205,1,205,1,206,1,206,3,206,2573,8,206,1,207,1,
	207,1,207,1,207,1,208,1,208,1,208,3,208,2582,8,208,1,208,1,208,1,208,1,
	208,1,208,3,208,2589,8,208,1,209,1,209,1,209,5,209,2594,8,209,10,209,12,
	209,2597,9,209,1,210,1,210,3,210,2601,8,210,1,211,1,211,3,211,2605,8,211,
	1,212,1,212,1,212,1,212,1,213,1,213,1,213,3,213,2614,8,213,1,214,1,214,
	1,215,1,215,1,215,1,215,1,215,1,215,1,215,3,215,2625,8,215,1,216,1,216,
	1,216,1,216,1,216,1,216,5,216,2633,8,216,10,216,12,216,2636,9,216,1,217,
	1,217,1,217,1,217,1,217,1,217,5,217,2644,8,217,10,217,12,217,2647,9,217,
	1,218,1,218,1,218,1,218,1,218,1,218,5,218,2655,8,218,10,218,12,218,2658,
	9,218,1,219,1,219,1,219,1,219,1,219,1,219,5,219,2666,8,219,10,219,12,219,
	2669,9,219,1,220,1,220,1,220,1,220,1,220,1,220,5,220,2677,8,220,10,220,
	12,220,2680,9,220,1,221,1,221,1,221,1,221,1,221,1,221,1,221,1,221,1,221,
	5,221,2691,8,221,10,221,12,221,2694,9,221,1,222,1,222,1,222,1,222,1,222,
	1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,1,222,
	1,222,5,222,2714,8,222,10,222,12,222,2717,9,222,1,223,1,223,1,223,1,223,
	1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,
	5,223,2735,8,223,10,223,12,223,2738,9,223,1,224,1,224,1,224,1,224,1,224,
	1,224,1,224,1,224,1,224,5,224,2749,8,224,10,224,12,224,2752,9,224,1,225,
	1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,5,225,
	2766,8,225,10,225,12,225,2769,9,225,1,226,1,226,1,226,1,226,1,226,1,226,
	1,226,3,226,2778,8,226,1,227,1,227,1,227,1,228,1,228,1,228,1,229,1,229,
	1,229,1,229,1,229,1,229,3,229,2792,8,229,1,230,1,230,3,230,2796,8,230,1,
	230,1,230,5,230,2800,8,230,10,230,12,230,2803,9,230,1,231,1,231,1,231,1,
	232,1,232,1,233,1,233,1,233,1,234,1,234,1,235,1,235,1,235,1,235,1,235,1,
	235,1,235,1,235,5,235,2823,8,235,10,235,12,235,2826,9,235,1,235,1,235,1,
	235,1,235,1,235,1,235,5,235,2834,8,235,10,235,12,235,2837,9,235,1,235,1,
	235,1,235,3,235,2842,8,235,1,235,0,13,50,54,60,432,434,436,438,440,442,
	444,446,448,450,236,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
	38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
	86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
	126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,
	162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,
	198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,
	234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,
	270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,
	306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,
	342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,
	378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,
	414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,448,
	450,452,454,456,458,460,462,464,466,468,470,0,4,1,0,51,56,5,0,5,5,8,8,27,
	27,29,29,37,37,2,0,14,14,20,20,2,0,66,66,91,101,3085,0,472,1,0,0,0,2,488,
	1,0,0,0,4,492,1,0,0,0,6,494,1,0,0,0,8,496,1,0,0,0,10,501,1,0,0,0,12,505,
	1,0,0,0,14,536,1,0,0,0,16,538,1,0,0,0,18,552,1,0,0,0,20,559,1,0,0,0,22,
	561,1,0,0,0,24,563,1,0,0,0,26,568,1,0,0,0,28,582,1,0,0,0,30,587,1,0,0,0,
	32,608,1,0,0,0,34,615,1,0,0,0,36,627,1,0,0,0,38,629,1,0,0,0,40,632,1,0,
	0,0,42,636,1,0,0,0,44,646,1,0,0,0,46,651,1,0,0,0,48,662,1,0,0,0,50,664,
	1,0,0,0,52,680,1,0,0,0,54,682,1,0,0,0,56,698,1,0,0,0,58,700,1,0,0,0,60,
	702,1,0,0,0,62,714,1,0,0,0,64,733,1,0,0,0,66,740,1,0,0,0,68,746,1,0,0,0,
	70,748,1,0,0,0,72,752,1,0,0,0,74,758,1,0,0,0,76,765,1,0,0,0,78,775,1,0,
	0,0,80,779,1,0,0,0,82,784,1,0,0,0,84,808,1,0,0,0,86,810,1,0,0,0,88,814,
	1,0,0,0,90,822,1,0,0,0,92,825,1,0,0,0,94,828,1,0,0,0,96,836,1,0,0,0,98,
	849,1,0,0,0,100,856,1,0,0,0,102,861,1,0,0,0,104,876,1,0,0,0,106,878,1,0,
	0,0,108,886,1,0,0,0,110,891,1,0,0,0,112,897,1,0,0,0,114,901,1,0,0,0,116,
	905,1,0,0,0,118,910,1,0,0,0,120,914,1,0,0,0,122,939,1,0,0,0,124,941,1,0,
	0,0,126,952,1,0,0,0,128,956,1,0,0,0,130,958,1,0,0,0,132,960,1,0,0,0,134,
	962,1,0,0,0,136,973,1,0,0,0,138,978,1,0,0,0,140,994,1,0,0,0,142,1013,1,
	0,0,0,144,1017,1,0,0,0,146,1019,1,0,0,0,148,1034,1,0,0,0,150,1052,1,0,0,
	0,152,1057,1,0,0,0,154,1065,1,0,0,0,156,1084,1,0,0,0,158,1089,1,0,0,0,160,
	1099,1,0,0,0,162,1102,1,0,0,0,164,1112,1,0,0,0,166,1116,1,0,0,0,168,1118,
	1,0,0,0,170,1120,1,0,0,0,172,1126,1,0,0,0,174,1139,1,0,0,0,176,1142,1,0,
	0,0,178,1151,1,0,0,0,180,1153,1,0,0,0,182,1208,1,0,0,0,184,1213,1,0,0,0,
	186,1223,1,0,0,0,188,1235,1,0,0,0,190,1246,1,0,0,0,192,1260,1,0,0,0,194,
	1262,1,0,0,0,196,1271,1,0,0,0,198,1276,1,0,0,0,200,1296,1,0,0,0,202,1298,
	1,0,0,0,204,1301,1,0,0,0,206,1315,1,0,0,0,208,1320,1,0,0,0,210,1331,1,0,
	0,0,212,1336,1,0,0,0,214,1348,1,0,0,0,216,1353,1,0,0,0,218,1361,1,0,0,0,
	220,1375,1,0,0,0,222,1380,1,0,0,0,224,1398,1,0,0,0,226,1400,1,0,0,0,228,
	1406,1,0,0,0,230,1408,1,0,0,0,232,1416,1,0,0,0,234,1424,1,0,0,0,236,1431,
	1,0,0,0,238,1433,1,0,0,0,240,1442,1,0,0,0,242,1450,1,0,0,0,244,1453,1,0,
	0,0,246,1459,1,0,0,0,248,1468,1,0,0,0,250,1476,1,0,0,0,252,1483,1,0,0,0,
	254,1490,1,0,0,0,256,1492,1,0,0,0,258,1498,1,0,0,0,260,1510,1,0,0,0,262,
	1517,1,0,0,0,264,1531,1,0,0,0,266,1533,1,0,0,0,268,1535,1,0,0,0,270,1539,
	1,0,0,0,272,1543,1,0,0,0,274,1553,1,0,0,0,276,1555,1,0,0,0,278,1561,1,0,
	0,0,280,1569,1,0,0,0,282,1587,1,0,0,0,284,1589,1,0,0,0,286,1595,1,0,0,0,
	288,1610,1,0,0,0,290,1613,1,0,0,0,292,1630,1,0,0,0,294,1632,1,0,0,0,296,
	1634,1,0,0,0,298,1640,1,0,0,0,300,1646,1,0,0,0,302,1656,1,0,0,0,304,1660,
	1,0,0,0,306,1662,1,0,0,0,308,1678,1,0,0,0,310,1696,1,0,0,0,312,1698,1,0,
	0,0,314,1700,1,0,0,0,316,1708,1,0,0,0,318,1723,1,0,0,0,320,1738,1,0,0,0,
	322,1744,1,0,0,0,324,1750,1,0,0,0,326,1756,1,0,0,0,328,1760,1,0,0,0,330,
	1778,1,0,0,0,332,1780,1,0,0,0,334,1787,1,0,0,0,336,1796,1,0,0,0,338,1802,
	1,0,0,0,340,1810,1,0,0,0,342,1813,1,0,0,0,344,1822,1,0,0,0,346,1829,1,0,
	0,0,348,1840,1,0,0,0,350,1850,1,0,0,0,352,1887,1,0,0,0,354,1889,1,0,0,0,
	356,1919,1,0,0,0,358,1926,1,0,0,0,360,1928,1,0,0,0,362,1934,1,0,0,0,364,
	1976,1,0,0,0,366,1978,1,0,0,0,368,2019,1,0,0,0,370,2104,1,0,0,0,372,2106,
	1,0,0,0,374,2188,1,0,0,0,376,2193,1,0,0,0,378,2208,1,0,0,0,380,2210,1,0,
	0,0,382,2222,1,0,0,0,384,2234,1,0,0,0,386,2246,1,0,0,0,388,2271,1,0,0,0,
	390,2351,1,0,0,0,392,2353,1,0,0,0,394,2420,1,0,0,0,396,2422,1,0,0,0,398,
	2477,1,0,0,0,400,2479,1,0,0,0,402,2525,1,0,0,0,404,2549,1,0,0,0,406,2551,
	1,0,0,0,408,2561,1,0,0,0,410,2568,1,0,0,0,412,2572,1,0,0,0,414,2574,1,0,
	0,0,416,2588,1,0,0,0,418,2590,1,0,0,0,420,2600,1,0,0,0,422,2604,1,0,0,0,
	424,2606,1,0,0,0,426,2613,1,0,0,0,428,2615,1,0,0,0,430,2624,1,0,0,0,432,
	2626,1,0,0,0,434,2637,1,0,0,0,436,2648,1,0,0,0,438,2659,1,0,0,0,440,2670,
	1,0,0,0,442,2681,1,0,0,0,444,2695,1,0,0,0,446,2718,1,0,0,0,448,2739,1,0,
	0,0,450,2753,1,0,0,0,452,2777,1,0,0,0,454,2779,1,0,0,0,456,2782,1,0,0,0,
	458,2791,1,0,0,0,460,2795,1,0,0,0,462,2804,1,0,0,0,464,2807,1,0,0,0,466,
	2809,1,0,0,0,468,2812,1,0,0,0,470,2841,1,0,0,0,472,473,7,0,0,0,473,1,1,
	0,0,0,474,476,3,228,114,0,475,474,1,0,0,0,476,479,1,0,0,0,477,475,1,0,0,
	0,477,478,1,0,0,0,478,480,1,0,0,0,479,477,1,0,0,0,480,489,3,4,2,0,481,483,
	3,228,114,0,482,481,1,0,0,0,483,486,1,0,0,0,484,482,1,0,0,0,484,485,1,0,
	0,0,485,487,1,0,0,0,486,484,1,0,0,0,487,489,5,3,0,0,488,477,1,0,0,0,488,
	484,1,0,0,0,489,3,1,0,0,0,490,493,3,6,3,0,491,493,3,8,4,0,492,490,1,0,0,
	0,492,491,1,0,0,0,493,5,1,0,0,0,494,495,7,1,0,0,495,7,1,0,0,0,496,497,7,
	2,0,0,497,9,1,0,0,0,498,502,3,12,6,0,499,502,3,26,13,0,500,502,3,28,14,
	0,501,498,1,0,0,0,501,499,1,0,0,0,501,500,1,0,0,0,502,11,1,0,0,0,503,506,
	3,18,9,0,504,506,3,24,12,0,505,503,1,0,0,0,505,504,1,0,0,0,506,511,1,0,
	0,0,507,510,3,16,8,0,508,510,3,22,11,0,509,507,1,0,0,0,509,508,1,0,0,0,
	510,513,1,0,0,0,511,509,1,0,0,0,511,512,1,0,0,0,512,13,1,0,0,0,513,511,
	1,0,0,0,514,516,3,228,114,0,515,514,1,0,0,0,516,519,1,0,0,0,517,515,1,0,
	0,0,517,518,1,0,0,0,518,520,1,0,0,0,519,517,1,0,0,0,520,522,5,102,0,0,521,
	523,3,40,20,0,522,521,1,0,0,0,522,523,1,0,0,0,523,537,1,0,0,0,524,525,3,
	12,6,0,525,529,5,65,0,0,526,528,3,228,114,0,527,526,1,0,0,0,528,531,1,0,
	0,0,529,527,1,0,0,0,529,530,1,0,0,0,530,532,1,0,0,0,531,529,1,0,0,0,532,
	534,5,102,0,0,533,535,3,40,20,0,534,533,1,0,0,0,534,535,1,0,0,0,535,537,
	1,0,0,0,536,517,1,0,0,0,536,524,1,0,0,0,537,15,1,0,0,0,538,542,5,65,0,0,
	539,541,3,228,114,0,540,539,1,0,0,0,541,544,1,0,0,0,542,540,1,0,0,0,542,
	543,1,0,0,0,543,545,1,0,0,0,544,542,1,0,0,0,545,547,5,102,0,0,546,548,3,
	40,20,0,547,546,1,0,0,0,547,548,1,0,0,0,548,17,1,0,0,0,549,551,3,228,114,
	0,550,549,1,0,0,0,551,554,1,0,0,0,552,550,1,0,0,0,552,553,1,0,0,0,553,555,
	1,0,0,0,554,552,1,0,0,0,555,557,5,102,0,0,556,558,3,40,20,0,557,556,1,0,
	0,0,557,558,1,0,0,0,558,19,1,0,0,0,559,560,3,14,7,0,560,21,1,0,0,0,561,
	562,3,16,8,0,562,23,1,0,0,0,563,564,3,18,9,0,564,25,1,0,0,0,565,567,3,228,
	114,0,566,565,1,0,0,0,567,570,1,0,0,0,568,566,1,0,0,0,568,569,1,0,0,0,569,
	571,1,0,0,0,570,568,1,0,0,0,571,572,5,102,0,0,572,27,1,0,0,0,573,574,3,
	2,1,0,574,575,3,30,15,0,575,583,1,0,0,0,576,577,3,12,6,0,577,578,3,30,15,
	0,578,583,1,0,0,0,579,580,3,26,13,0,580,581,3,30,15,0,581,583,1,0,0,0,582,
	573,1,0,0,0,582,576,1,0,0,0,582,579,1,0,0,0,583,29,1,0,0,0,584,586,3,228,
	114,0,585,584,1,0,0,0,586,589,1,0,0,0,587,585,1,0,0,0,587,588,1,0,0,0,588,
	590,1,0,0,0,589,587,1,0,0,0,590,591,5,61,0,0,591,602,5,62,0,0,592,594,3,
	228,114,0,593,592,1,0,0,0,594,597,1,0,0,0,595,593,1,0,0,0,595,596,1,0,0,
	0,596,598,1,0,0,0,597,595,1,0,0,0,598,599,5,61,0,0,599,601,5,62,0,0,600,
	595,1,0,0,0,601,604,1,0,0,0,602,600,1,0,0,0,602,603,1,0,0,0,603,31,1,0,
	0,0,604,602,1,0,0,0,605,607,3,34,17,0,606,605,1,0,0,0,607,610,1,0,0,0,608,
	606,1,0,0,0,608,609,1,0,0,0,609,611,1,0,0,0,610,608,1,0,0,0,611,613,5,102,
	0,0,612,614,3,36,18,0,613,612,1,0,0,0,613,614,1,0,0,0,614,33,1,0,0,0,615,
	616,3,228,114,0,616,35,1,0,0,0,617,618,5,17,0,0,618,628,3,26,13,0,619,620,
	5,17,0,0,620,624,3,12,6,0,621,623,3,38,19,0,622,621,1,0,0,0,623,626,1,0,
	0,0,624,622,1,0,0,0,624,625,1,0,0,0,625,628,1,0,0,0,626,624,1,0,0,0,627,
	617,1,0,0,0,627,619,1,0,0,0,628,37,1,0,0,0,629,630,5,85,0,0,630,631,3,20,
	10,0,631,39,1,0,0,0,632,633,5,68,0,0,633,634,3,42,21,0,634,635,5,67,0,0,
	635,41,1,0,0,0,636,641,3,44,22,0,637,638,5,64,0,0,638,640,3,44,22,0,639,
	637,1,0,0,0,640,643,1,0,0,0,641,639,1,0,0,0,641,642,1,0,0,0,642,43,1,0,
	0,0,643,641,1,0,0,0,644,647,3,10,5,0,645,647,3,46,23,0,646,644,1,0,0,0,
	646,645,1,0,0,0,647,45,1,0,0,0,648,650,3,228,114,0,649,648,1,0,0,0,650,
	653,1,0,0,0,651,649,1,0,0,0,651,652,1,0,0,0,652,654,1,0,0,0,653,651,1,0,
	0,0,654,656,5,71,0,0,655,657,3,48,24,0,656,655,1,0,0,0,656,657,1,0,0,0,
	657,47,1,0,0,0,658,659,5,17,0,0,659,663,3,10,5,0,660,661,5,40,0,0,661,663,
	3,10,5,0,662,658,1,0,0,0,662,660,1,0,0,0,663,49,1,0,0,0,664,665,6,25,-1,
	0,665,666,5,102,0,0,666,672,1,0,0,0,667,668,10,1,0,0,668,669,5,65,0,0,669,
	671,5,102,0,0,670,667,1,0,0,0,671,674,1,0,0,0,672,670,1,0,0,0,672,673,1,
	0,0,0,673,51,1,0,0,0,674,672,1,0,0,0,675,681,5,102,0,0,676,677,3,54,27,
	0,677,678,5,65,0,0,678,679,5,102,0,0,679,681,1,0,0,0,680,675,1,0,0,0,680,
	676,1,0,0,0,681,53,1,0,0,0,682,683,6,27,-1,0,683,684,5,102,0,0,684,690,
	1,0,0,0,685,686,10,1,0,0,686,687,5,65,0,0,687,689,5,102,0,0,688,685,1,0,
	0,0,689,692,1,0,0,0,690,688,1,0,0,0,690,691,1,0,0,0,691,55,1,0,0,0,692,
	690,1,0,0,0,693,699,5,102,0,0,694,695,3,60,30,0,695,696,5,65,0,0,696,697,
	5,102,0,0,697,699,1,0,0,0,698,693,1,0,0,0,698,694,1,0,0,0,699,57,1,0,0,
	0,700,701,5,102,0,0,701,59,1,0,0,0,702,703,6,30,-1,0,703,704,5,102,0,0,
	704,710,1,0,0,0,705,706,10,1,0,0,706,707,5,65,0,0,707,709,5,102,0,0,708,
	705,1,0,0,0,709,712,1,0,0,0,710,708,1,0,0,0,710,711,1,0,0,0,711,61,1,0,
	0,0,712,710,1,0,0,0,713,715,3,64,32,0,714,713,1,0,0,0,714,715,1,0,0,0,715,
	719,1,0,0,0,716,718,3,68,34,0,717,716,1,0,0,0,718,721,1,0,0,0,719,717,1,
	0,0,0,719,720,1,0,0,0,720,725,1,0,0,0,721,719,1,0,0,0,722,724,3,78,39,0,
	723,722,1,0,0,0,724,727,1,0,0,0,725,723,1,0,0,0,725,726,1,0,0,0,726,728,
	1,0,0,0,727,725,1,0,0,0,728,729,5,0,0,1,729,63,1,0,0,0,730,732,3,66,33,
	0,731,730,1,0,0,0,732,735,1,0,0,0,733,731,1,0,0,0,733,734,1,0,0,0,734,736,
	1,0,0,0,735,733,1,0,0,0,736,737,5,32,0,0,737,738,3,50,25,0,738,739,5,63,
	0,0,739,65,1,0,0,0,740,741,3,228,114,0,741,67,1,0,0,0,742,747,3,70,35,0,
	743,747,3,72,36,0,744,747,3,74,37,0,745,747,3,76,38,0,746,742,1,0,0,0,746,
	743,1,0,0,0,746,744,1,0,0,0,746,745,1,0,0,0,747,69,1,0,0,0,748,749,5,25,
	0,0,749,750,3,52,26,0,750,751,5,63,0,0,751,71,1,0,0,0,752,753,5,25,0,0,
	753,754,3,54,27,0,754,755,5,65,0,0,755,756,5,83,0,0,756,757,5,63,0,0,757,
	73,1,0,0,0,758,759,5,25,0,0,759,760,5,38,0,0,760,761,3,52,26,0,761,762,
	5,65,0,0,762,763,5,102,0,0,763,764,5,63,0,0,764,75,1,0,0,0,765,766,5,25,
	0,0,766,767,5,38,0,0,767,768,3,52,26,0,768,769,5,65,0,0,769,770,5,83,0,
	0,770,771,5,63,0,0,771,77,1,0,0,0,772,776,3,80,40,0,773,776,3,196,98,0,
	774,776,5,63,0,0,775,772,1,0,0,0,775,773,1,0,0,0,775,774,1,0,0,0,776,79,
	1,0,0,0,777,780,3,82,41,0,778,780,3,184,92,0,779,777,1,0,0,0,779,778,1,
	0,0,0,780,81,1,0,0,0,781,783,3,84,42,0,782,781,1,0,0,0,783,786,1,0,0,0,
	784,782,1,0,0,0,784,785,1,0,0,0,785,787,1,0,0,0,786,784,1,0,0,0,787,788,
	5,9,0,0,788,790,5,102,0,0,789,791,3,86,43,0,790,789,1,0,0,0,790,791,1,0,
	0,0,791,793,1,0,0,0,792,794,3,90,45,0,793,792,1,0,0,0,793,794,1,0,0,0,794,
	796,1,0,0,0,795,797,3,92,46,0,796,795,1,0,0,0,796,797,1,0,0,0,797,798,1,
	0,0,0,798,799,3,96,48,0,799,83,1,0,0,0,800,809,3,228,114,0,801,809,5,35,
	0,0,802,809,5,34,0,0,803,809,5,33,0,0,804,809,5,1,0,0,805,809,5,38,0,0,
	806,809,5,18,0,0,807,809,5,39,0,0,808,800,1,0,0,0,808,801,1,0,0,0,808,802,
	1,0,0,0,808,803,1,0,0,0,808,804,1,0,0,0,808,805,1,0,0,0,808,806,1,0,0,0,
	808,807,1,0,0,0,809,85,1,0,0,0,810,811,5,68,0,0,811,812,3,88,44,0,812,813,
	5,67,0,0,813,87,1,0,0,0,814,819,3,32,16,0,815,816,5,64,0,0,816,818,3,32,
	16,0,817,815,1,0,0,0,818,821,1,0,0,0,819,817,1,0,0,0,819,820,1,0,0,0,820,
	89,1,0,0,0,821,819,1,0,0,0,822,823,5,17,0,0,823,824,3,14,7,0,824,91,1,0,
	0,0,825,826,5,24,0,0,826,827,3,94,47,0,827,93,1,0,0,0,828,833,3,20,10,0,
	829,830,5,64,0,0,830,832,3,20,10,0,831,829,1,0,0,0,832,835,1,0,0,0,833,
	831,1,0,0,0,833,834,1,0,0,0,834,95,1,0,0,0,835,833,1,0,0,0,836,840,5,59,
	0,0,837,839,3,98,49,0,838,837,1,0,0,0,839,842,1,0,0,0,840,838,1,0,0,0,840,
	841,1,0,0,0,841,843,1,0,0,0,842,840,1,0,0,0,843,844,5,60,0,0,844,97,1,0,
	0,0,845,850,3,100,50,0,846,850,3,168,84,0,847,850,3,170,85,0,848,850,3,
	172,86,0,849,845,1,0,0,0,849,846,1,0,0,0,849,847,1,0,0,0,849,848,1,0,0,
	0,850,99,1,0,0,0,851,857,3,102,51,0,852,857,3,138,69,0,853,857,3,80,40,
	0,854,857,3,196,98,0,855,857,5,63,0,0,856,851,1,0,0,0,856,852,1,0,0,0,856,
	853,1,0,0,0,856,854,1,0,0,0,856,855,1,0,0,0,857,101,1,0,0,0,858,860,3,104,
	52,0,859,858,1,0,0,0,860,863,1,0,0,0,861,859,1,0,0,0,861,862,1,0,0,0,862,
	864,1,0,0,0,863,861,1,0,0,0,864,865,3,114,57,0,865,866,3,106,53,0,866,867,
	5,63,0,0,867,103,1,0,0,0,868,877,3,228,114,0,869,877,5,35,0,0,870,877,5,
	34,0,0,871,877,5,33,0,0,872,877,5,38,0,0,873,877,5,18,0,0,874,877,5,46,
	0,0,875,877,5,49,0,0,876,868,1,0,0,0,876,869,1,0,0,0,876,870,1,0,0,0,876,
	871,1,0,0,0,876,872,1,0,0,0,876,873,1,0,0,0,876,874,1,0,0,0,876,875,1,0,
	0,0,877,105,1,0,0,0,878,883,3,108,54,0,879,880,5,64,0,0,880,882,3,108,54,
	0,881,879,1,0,0,0,882,885,1,0,0,0,883,881,1,0,0,0,883,884,1,0,0,0,884,107,
	1,0,0,0,885,883,1,0,0,0,886,889,3,110,55,0,887,888,5,66,0,0,888,890,3,112,
	56,0,889,887,1,0,0,0,889,890,1,0,0,0,890,109,1,0,0,0,891,893,5,102,0,0,
	892,894,3,30,15,0,893,892,1,0,0,0,893,894,1,0,0,0,894,111,1,0,0,0,895,898,
	3,412,206,0,896,898,3,246,123,0,897,895,1,0,0,0,897,896,1,0,0,0,898,113,
	1,0,0,0,899,902,3,116,58,0,900,902,3,118,59,0,901,899,1,0,0,0,901,900,1,
	0,0,0,902,115,1,0,0,0,903,906,3,4,2,0,904,906,5,3,0,0,905,903,1,0,0,0,905,
	904,1,0,0,0,906,117,1,0,0,0,907,911,3,120,60,0,908,911,3,134,67,0,909,911,
	3,136,68,0,910,907,1,0,0,0,910,908,1,0,0,0,910,909,1,0,0,0,911,119,1,0,
	0,0,912,915,3,126,63,0,913,915,3,132,66,0,914,912,1,0,0,0,914,913,1,0,0,
	0,915,920,1,0,0,0,916,919,3,124,62,0,917,919,3,130,65,0,918,916,1,0,0,0,
	918,917,1,0,0,0,919,922,1,0,0,0,920,918,1,0,0,0,920,921,1,0,0,0,921,121,
	1,0,0,0,922,920,1,0,0,0,923,925,5,102,0,0,924,926,3,40,20,0,925,924,1,0,
	0,0,925,926,1,0,0,0,926,940,1,0,0,0,927,928,3,120,60,0,928,932,5,65,0,0,
	929,931,3,228,114,0,930,929,1,0,0,0,931,934,1,0,0,0,932,930,1,0,0,0,932,
	933,1,0,0,0,933,935,1,0,0,0,934,932,1,0,0,0,935,937,5,102,0,0,936,938,3,
	40,20,0,937,936,1,0,0,0,937,938,1,0,0,0,938,940,1,0,0,0,939,923,1,0,0,0,
	939,927,1,0,0,0,940,123,1,0,0,0,941,945,5,65,0,0,942,944,3,228,114,0,943,
	942,1,0,0,0,944,947,1,0,0,0,945,943,1,0,0,0,945,946,1,0,0,0,946,948,1,0,
	0,0,947,945,1,0,0,0,948,950,5,102,0,0,949,951,3,40,20,0,950,949,1,0,0,0,
	950,951,1,0,0,0,951,125,1,0,0,0,952,954,5,102,0,0,953,955,3,40,20,0,954,
	953,1,0,0,0,954,955,1,0,0,0,955,127,1,0,0,0,956,957,3,122,61,0,957,129,
	1,0,0,0,958,959,3,124,62,0,959,131,1,0,0,0,960,961,3,126,63,0,961,133,1,
	0,0,0,962,963,5,102,0,0,963,135,1,0,0,0,964,965,3,116,58,0,965,966,3,30,
	15,0,966,974,1,0,0,0,967,968,3,120,60,0,968,969,3,30,15,0,969,974,1,0,0,
	0,970,971,3,134,67,0,971,972,3,30,15,0,972,974,1,0,0,0,973,964,1,0,0,0,
	973,967,1,0,0,0,973,970,1,0,0,0,974,137,1,0,0,0,975,977,3,140,70,0,976,
	975,1,0,0,0,977,980,1,0,0,0,978,976,1,0,0,0,978,979,1,0,0,0,979,981,1,0,
	0,0,980,978,1,0,0,0,981,982,3,142,71,0,982,983,3,166,83,0,983,139,1,0,0,
	0,984,995,3,228,114,0,985,995,5,35,0,0,986,995,5,34,0,0,987,995,5,33,0,
	0,988,995,5,1,0,0,989,995,5,38,0,0,990,995,5,18,0,0,991,995,5,42,0,0,992,
	995,5,30,0,0,993,995,5,39,0,0,994,984,1,0,0,0,994,985,1,0,0,0,994,986,1,
	0,0,0,994,987,1,0,0,0,994,988,1,0,0,0,994,989,1,0,0,0,994,990,1,0,0,0,994,
	991,1,0,0,0,994,992,1,0,0,0,994,993,1,0,0,0,995,141,1,0,0,0,996,997,3,144,
	72,0,997,999,3,146,73,0,998,1000,3,160,80,0,999,998,1,0,0,0,999,1000,1,
	0,0,0,1000,1014,1,0,0,0,1001,1005,3,86,43,0,1002,1004,3,228,114,0,1003,
	1002,1,0,0,0,1004,1007,1,0,0,0,1005,1003,1,0,0,0,1005,1006,1,0,0,0,1006,
	1008,1,0,0,0,1007,1005,1,0,0,0,1008,1009,3,144,72,0,1009,1011,3,146,73,
	0,1010,1012,3,160,80,0,1011,1010,1,0,0,0,1011,1012,1,0,0,0,1012,1014,1,
	0,0,0,1013,996,1,0,0,0,1013,1001,1,0,0,0,1014,143,1,0,0,0,1015,1018,3,114,
	57,0,1016,1018,5,48,0,0,1017,1015,1,0,0,0,1017,1016,1,0,0,0,1018,145,1,
	0,0,0,1019,1020,5,102,0,0,1020,1022,5,57,0,0,1021,1023,3,148,74,0,1022,
	1021,1,0,0,0,1022,1023,1,0,0,0,1023,1024,1,0,0,0,1024,1026,5,58,0,0,1025,
	1027,3,30,15,0,1026,1025,1,0,0,0,1026,1027,1,0,0,0,1027,147,1,0,0,0,1028,
	1035,3,158,79,0,1029,1030,3,150,75,0,1030,1031,5,64,0,0,1031,1032,3,156,
	78,0,1032,1035,1,0,0,0,1033,1035,3,156,78,0,1034,1028,1,0,0,0,1034,1029,
	1,0,0,0,1034,1033,1,0,0,0,1035,149,1,0,0,0,1036,1041,3,152,76,0,1037,1038,
	5,64,0,0,1038,1040,3,152,76,0,1039,1037,1,0,0,0,1040,1043,1,0,0,0,1041,
	1039,1,0,0,0,1041,1042,1,0,0,0,1042,1053,1,0,0,0,1043,1041,1,0,0,0,1044,
	1049,3,158,79,0,1045,1046,5,64,0,0,1046,1048,3,152,76,0,1047,1045,1,0,0,
	0,1048,1051,1,0,0,0,1049,1047,1,0,0,0,1049,1050,1,0,0,0,1050,1053,1,0,0,
	0,1051,1049,1,0,0,0,1052,1036,1,0,0,0,1052,1044,1,0,0,0,1053,151,1,0,0,
	0,1054,1056,3,154,77,0,1055,1054,1,0,0,0,1056,1059,1,0,0,0,1057,1055,1,
	0,0,0,1057,1058,1,0,0,0,1058,1060,1,0,0,0,1059,1057,1,0,0,0,1060,1061,3,
	114,57,0,1061,1062,3,110,55,0,1062,153,1,0,0,0,1063,1066,3,228,114,0,1064,
	1066,5,18,0,0,1065,1063,1,0,0,0,1065,1064,1,0,0,0,1066,155,1,0,0,0,1067,
	1069,3,154,77,0,1068,1067,1,0,0,0,1069,1072,1,0,0,0,1070,1068,1,0,0,0,1070,
	1071,1,0,0,0,1071,1073,1,0,0,0,1072,1070,1,0,0,0,1073,1077,3,114,57,0,1074,
	1076,3,228,114,0,1075,1074,1,0,0,0,1076,1079,1,0,0,0,1077,1075,1,0,0,0,
	1077,1078,1,0,0,0,1078,1080,1,0,0,0,1079,1077,1,0,0,0,1080,1081,5,104,0,
	0,1081,1082,3,110,55,0,1082,1085,1,0,0,0,1083,1085,3,152,76,0,1084,1070,
	1,0,0,0,1084,1083,1,0,0,0,1085,157,1,0,0,0,1086,1088,3,228,114,0,1087,1086,
	1,0,0,0,1088,1091,1,0,0,0,1089,1087,1,0,0,0,1089,1090,1,0,0,0,1090,1092,
	1,0,0,0,1091,1089,1,0,0,0,1092,1095,3,114,57,0,1093,1094,5,102,0,0,1094,
	1096,5,65,0,0,1095,1093,1,0,0,0,1095,1096,1,0,0,0,1096,1097,1,0,0,0,1097,
	1098,5,43,0,0,1098,159,1,0,0,0,1099,1100,5,45,0,0,1100,1101,3,162,81,0,
	1101,161,1,0,0,0,1102,1107,3,164,82,0,1103,1104,5,64,0,0,1104,1106,3,164,
	82,0,1105,1103,1,0,0,0,1106,1109,1,0,0,0,1107,1105,1,0,0,0,1107,1108,1,
	0,0,0,1108,163,1,0,0,0,1109,1107,1,0,0,0,1110,1113,3,14,7,0,1111,1113,3,
	26,13,0,1112,1110,1,0,0,0,1112,1111,1,0,0,0,1113,165,1,0,0,0,1114,1117,
	3,250,125,0,1115,1117,5,63,0,0,1116,1114,1,0,0,0,1116,1115,1,0,0,0,1117,
	167,1,0,0,0,1118,1119,3,250,125,0,1119,169,1,0,0,0,1120,1121,5,38,0,0,1121,
	1122,3,250,125,0,1122,171,1,0,0,0,1123,1125,3,174,87,0,1124,1123,1,0,0,
	0,1125,1128,1,0,0,0,1126,1124,1,0,0,0,1126,1127,1,0,0,0,1127,1129,1,0,0,
	0,1128,1126,1,0,0,0,1129,1131,3,176,88,0,1130,1132,3,160,80,0,1131,1130,
	1,0,0,0,1131,1132,1,0,0,0,1132,1133,1,0,0,0,1133,1134,3,180,90,0,1134,173,
	1,0,0,0,1135,1140,3,228,114,0,1136,1140,5,35,0,0,1137,1140,5,34,0,0,1138,
	1140,5,33,0,0,1139,1135,1,0,0,0,1139,1136,1,0,0,0,1139,1137,1,0,0,0,1139,
	1138,1,0,0,0,1140,175,1,0,0,0,1141,1143,3,86,43,0,1142,1141,1,0,0,0,1142,
	1143,1,0,0,0,1143,1144,1,0,0,0,1144,1145,3,178,89,0,1145,1147,5,57,0,0,
	1146,1148,3,148,74,0,1147,1146,1,0,0,0,1147,1148,1,0,0,0,1148,1149,1,0,
	0,0,1149,1150,5,58,0,0,1150,177,1,0,0,0,1151,1152,5,102,0,0,1152,179,1,
	0,0,0,1153,1155,5,59,0,0,1154,1156,3,182,91,0,1155,1154,1,0,0,0,1155,1156,
	1,0,0,0,1156,1158,1,0,0,0,1157,1159,3,252,126,0,1158,1157,1,0,0,0,1158,
	1159,1,0,0,0,1159,1160,1,0,0,0,1160,1161,5,60,0,0,1161,181,1,0,0,0,1162,
	1164,3,40,20,0,1163,1162,1,0,0,0,1163,1164,1,0,0,0,1164,1165,1,0,0,0,1165,
	1166,5,43,0,0,1166,1168,5,57,0,0,1167,1169,3,396,198,0,1168,1167,1,0,0,
	0,1168,1169,1,0,0,0,1169,1170,1,0,0,0,1170,1171,5,58,0,0,1171,1209,5,63,
	0,0,1172,1174,3,40,20,0,1173,1172,1,0,0,0,1173,1174,1,0,0,0,1174,1175,1,
	0,0,0,1175,1176,5,40,0,0,1176,1178,5,57,0,0,1177,1179,3,396,198,0,1178,
	1177,1,0,0,0,1178,1179,1,0,0,0,1179,1180,1,0,0,0,1180,1181,5,58,0,0,1181,
	1209,5,63,0,0,1182,1183,3,56,28,0,1183,1185,5,65,0,0,1184,1186,3,40,20,
	0,1185,1184,1,0,0,0,1185,1186,1,0,0,0,1186,1187,1,0,0,0,1187,1188,5,40,
	0,0,1188,1190,5,57,0,0,1189,1191,3,396,198,0,1190,1189,1,0,0,0,1190,1191,
	1,0,0,0,1191,1192,1,0,0,0,1192,1193,5,58,0,0,1193,1194,5,63,0,0,1194,1209,
	1,0,0,0,1195,1196,3,350,175,0,1196,1198,5,65,0,0,1197,1199,3,40,20,0,1198,
	1197,1,0,0,0,1198,1199,1,0,0,0,1199,1200,1,0,0,0,1200,1201,5,40,0,0,1201,
	1203,5,57,0,0,1202,1204,3,396,198,0,1203,1202,1,0,0,0,1203,1204,1,0,0,0,
	1204,1205,1,0,0,0,1205,1206,5,58,0,0,1206,1207,5,63,0,0,1207,1209,1,0,0,
	0,1208,1163,1,0,0,0,1208,1173,1,0,0,0,1208,1182,1,0,0,0,1208,1195,1,0,0,
	0,1209,183,1,0,0,0,1210,1212,3,84,42,0,1211,1210,1,0,0,0,1212,1215,1,0,
	0,0,1213,1211,1,0,0,0,1213,1214,1,0,0,0,1214,1216,1,0,0,0,1215,1213,1,0,
	0,0,1216,1217,5,16,0,0,1217,1219,5,102,0,0,1218,1220,3,92,46,0,1219,1218,
	1,0,0,0,1219,1220,1,0,0,0,1220,1221,1,0,0,0,1221,1222,3,186,93,0,1222,185,
	1,0,0,0,1223,1225,5,59,0,0,1224,1226,3,188,94,0,1225,1224,1,0,0,0,1225,
	1226,1,0,0,0,1226,1228,1,0,0,0,1227,1229,5,64,0,0,1228,1227,1,0,0,0,1228,
	1229,1,0,0,0,1229,1231,1,0,0,0,1230,1232,3,194,97,0,1231,1230,1,0,0,0,1231,
	1232,1,0,0,0,1232,1233,1,0,0,0,1233,1234,5,60,0,0,1234,187,1,0,0,0,1235,
	1240,3,190,95,0,1236,1237,5,64,0,0,1237,1239,3,190,95,0,1238,1236,1,0,0,
	0,1239,1242,1,0,0,0,1240,1238,1,0,0,0,1240,1241,1,0,0,0,1241,189,1,0,0,
	0,1242,1240,1,0,0,0,1243,1245,3,192,96,0,1244,1243,1,0,0,0,1245,1248,1,
	0,0,0,1246,1244,1,0,0,0,1246,1247,1,0,0,0,1247,1249,1,0,0,0,1248,1246,1,
	0,0,0,1249,1255,5,102,0,0,1250,1252,5,57,0,0,1251,1253,3,396,198,0,1252,
	1251,1,0,0,0,1252,1253,1,0,0,0,1253,1254,1,0,0,0,1254,1256,5,58,0,0,1255,
	1250,1,0,0,0,1255,1256,1,0,0,0,1256,1258,1,0,0,0,1257,1259,3,96,48,0,1258,
	1257,1,0,0,0,1258,1259,1,0,0,0,1259,191,1,0,0,0,1260,1261,3,228,114,0,1261,
	193,1,0,0,0,1262,1266,5,63,0,0,1263,1265,3,98,49,0,1264,1263,1,0,0,0,1265,
	1268,1,0,0,0,1266,1264,1,0,0,0,1266,1267,1,0,0,0,1267,195,1,0,0,0,1268,
	1266,1,0,0,0,1269,1272,3,198,99,0,1270,1272,3,216,108,0,1271,1269,1,0,0,
	0,1271,1270,1,0,0,0,1272,197,1,0,0,0,1273,1275,3,200,100,0,1274,1273,1,
	0,0,0,1275,1278,1,0,0,0,1276,1274,1,0,0,0,1276,1277,1,0,0,0,1277,1279,1,
	0,0,0,1278,1276,1,0,0,0,1279,1280,5,28,0,0,1280,1282,5,102,0,0,1281,1283,
	3,86,43,0,1282,1281,1,0,0,0,1282,1283,1,0,0,0,1283,1285,1,0,0,0,1284,1286,
	3,202,101,0,1285,1284,1,0,0,0,1285,1286,1,0,0,0,1286,1287,1,0,0,0,1287,
	1288,3,204,102,0,1288,199,1,0,0,0,1289,1297,3,228,114,0,1290,1297,5,35,
	0,0,1291,1297,5,34,0,0,1292,1297,5,33,0,0,1293,1297,5,1,0,0,1294,1297,5,
	38,0,0,1295,1297,5,39,0,0,1296,1289,1,0,0,0,1296,1290,1,0,0,0,1296,1291,
	1,0,0,0,1296,1292,1,0,0,0,1296,1293,1,0,0,0,1296,1294,1,0,0,0,1296,1295,
	1,0,0,0,1297,201,1,0,0,0,1298,1299,5,17,0,0,1299,1300,3,94,47,0,1300,203,
	1,0,0,0,1301,1305,5,59,0,0,1302,1304,3,206,103,0,1303,1302,1,0,0,0,1304,
	1307,1,0,0,0,1305,1303,1,0,0,0,1305,1306,1,0,0,0,1306,1308,1,0,0,0,1307,
	1305,1,0,0,0,1308,1309,5,60,0,0,1309,205,1,0,0,0,1310,1316,3,208,104,0,
	1311,1316,3,212,106,0,1312,1316,3,80,40,0,1313,1316,3,196,98,0,1314,1316,
	5,63,0,0,1315,1310,1,0,0,0,1315,1311,1,0,0,0,1315,1312,1,0,0,0,1315,1313,
	1,0,0,0,1315,1314,1,0,0,0,1316,207,1,0,0,0,1317,1319,3,210,105,0,1318,1317,
	1,0,0,0,1319,1322,1,0,0,0,1320,1318,1,0,0,0,1320,1321,1,0,0,0,1321,1323,
	1,0,0,0,1322,1320,1,0,0,0,1323,1324,3,114,57,0,1324,1325,3,106,53,0,1325,
	1326,5,63,0,0,1326,209,1,0,0,0,1327,1332,3,228,114,0,1328,1332,5,35,0,0,
	1329,1332,5,38,0,0,1330,1332,5,18,0,0,1331,1327,1,0,0,0,1331,1328,1,0,0,
	0,1331,1329,1,0,0,0,1331,1330,1,0,0,0,1332,211,1,0,0,0,1333,1335,3,214,
	107,0,1334,1333,1,0,0,0,1335,1338,1,0,0,0,1336,1334,1,0,0,0,1336,1337,1,
	0,0,0,1337,1339,1,0,0,0,1338,1336,1,0,0,0,1339,1340,3,142,71,0,1340,1341,
	3,166,83,0,1341,213,1,0,0,0,1342,1349,3,228,114,0,1343,1349,5,35,0,0,1344,
	1349,5,1,0,0,1345,1349,5,12,0,0,1346,1349,5,38,0,0,1347,1349,5,39,0,0,1348,
	1342,1,0,0,0,1348,1343,1,0,0,0,1348,1344,1,0,0,0,1348,1345,1,0,0,0,1348,
	1346,1,0,0,0,1348,1347,1,0,0,0,1349,215,1,0,0,0,1350,1352,3,200,100,0,1351,
	1350,1,0,0,0,1352,1355,1,0,0,0,1353,1351,1,0,0,0,1353,1354,1,0,0,0,1354,
	1356,1,0,0,0,1355,1353,1,0,0,0,1356,1357,5,103,0,0,1357,1358,5,28,0,0,1358,
	1359,5,102,0,0,1359,1360,3,218,109,0,1360,217,1,0,0,0,1361,1365,5,59,0,
	0,1362,1364,3,220,110,0,1363,1362,1,0,0,0,1364,1367,1,0,0,0,1365,1363,1,
	0,0,0,1365,1366,1,0,0,0,1366,1368,1,0,0,0,1367,1365,1,0,0,0,1368,1369,5,
	60,0,0,1369,219,1,0,0,0,1370,1376,3,222,111,0,1371,1376,3,208,104,0,1372,
	1376,3,80,40,0,1373,1376,3,196,98,0,1374,1376,5,63,0,0,1375,1370,1,0,0,
	0,1375,1371,1,0,0,0,1375,1372,1,0,0,0,1375,1373,1,0,0,0,1375,1374,1,0,0,
	0,1376,221,1,0,0,0,1377,1379,3,224,112,0,1378,1377,1,0,0,0,1379,1382,1,
	0,0,0,1380,1378,1,0,0,0,1380,1381,1,0,0,0,1381,1383,1,0,0,0,1382,1380,1,
	0,0,0,1383,1384,3,114,57,0,1384,1385,5,102,0,0,1385,1386,5,57,0,0,1386,
	1388,5,58,0,0,1387,1389,3,30,15,0,1388,1387,1,0,0,0,1388,1389,1,0,0,0,1389,
	1391,1,0,0,0,1390,1392,3,226,113,0,1391,1390,1,0,0,0,1391,1392,1,0,0,0,
	1392,1393,1,0,0,0,1393,1394,5,63,0,0,1394,223,1,0,0,0,1395,1399,3,228,114,
	0,1396,1399,5,35,0,0,1397,1399,5,1,0,0,1398,1395,1,0,0,0,1398,1396,1,0,
	0,0,1398,1397,1,0,0,0,1399,225,1,0,0,0,1400,1401,5,12,0,0,1401,1402,3,236,
	118,0,1402,227,1,0,0,0,1403,1407,3,230,115,0,1404,1407,3,242,121,0,1405,
	1407,3,244,122,0,1406,1403,1,0,0,0,1406,1404,1,0,0,0,1406,1405,1,0,0,0,
	1407,229,1,0,0,0,1408,1409,5,103,0,0,1409,1410,3,52,26,0,1410,1412,5,57,
	0,0,1411,1413,3,232,116,0,1412,1411,1,0,0,0,1412,1413,1,0,0,0,1413,1414,
	1,0,0,0,1414,1415,5,58,0,0,1415,231,1,0,0,0,1416,1421,3,234,117,0,1417,
	1418,5,64,0,0,1418,1420,3,234,117,0,1419,1417,1,0,0,0,1420,1423,1,0,0,0,
	1421,1419,1,0,0,0,1421,1422,1,0,0,0,1422,233,1,0,0,0,1423,1421,1,0,0,0,
	1424,1425,5,102,0,0,1425,1426,5,66,0,0,1426,1427,3,236,118,0,1427,235,1,
	0,0,0,1428,1432,3,430,215,0,1429,1432,3,238,119,0,1430,1432,3,228,114,0,
	1431,1428,1,0,0,0,1431,1429,1,0,0,0,1431,1430,1,0,0,0,1432,237,1,0,0,0,
	1433,1435,5,59,0,0,1434,1436,3,240,120,0,1435,1434,1,0,0,0,1435,1436,1,
	0,0,0,1436,1438,1,0,0,0,1437,1439,5,64,0,0,1438,1437,1,0,0,0,1438,1439,
	1,0,0,0,1439,1440,1,0,0,0,1440,1441,5,60,0,0,1441,239,1,0,0,0,1442,1447,
	3,236,118,0,1443,1444,5,64,0,0,1444,1446,3,236,118,0,1445,1443,1,0,0,0,
	1446,1449,1,0,0,0,1447,1445,1,0,0,0,1447,1448,1,0,0,0,1448,241,1,0,0,0,
	1449,1447,1,0,0,0,1450,1451,5,103,0,0,1451,1452,3,52,26,0,1452,243,1,0,
	0,0,1453,1454,5,103,0,0,1454,1455,3,52,26,0,1455,1456,5,57,0,0,1456,1457,
	3,236,118,0,1457,1458,5,58,0,0,1458,245,1,0,0,0,1459,1461,5,59,0,0,1460,
	1462,3,248,124,0,1461,1460,1,0,0,0,1461,1462,1,0,0,0,1462,1464,1,0,0,0,
	1463,1465,5,64,0,0,1464,1463,1,0,0,0,1464,1465,1,0,0,0,1465,1466,1,0,0,
	0,1466,1467,5,60,0,0,1467,247,1,0,0,0,1468,1473,3,112,56,0,1469,1470,5,
	64,0,0,1470,1472,3,112,56,0,1471,1469,1,0,0,0,1472,1475,1,0,0,0,1473,1471,
	1,0,0,0,1473,1474,1,0,0,0,1474,249,1,0,0,0,1475,1473,1,0,0,0,1476,1478,
	5,59,0,0,1477,1479,3,252,126,0,1478,1477,1,0,0,0,1478,1479,1,0,0,0,1479,
	1480,1,0,0,0,1480,1481,5,60,0,0,1481,251,1,0,0,0,1482,1484,3,254,127,0,
	1483,1482,1,0,0,0,1484,1485,1,0,0,0,1485,1483,1,0,0,0,1485,1486,1,0,0,0,
	1486,253,1,0,0,0,1487,1491,3,256,128,0,1488,1491,3,80,40,0,1489,1491,3,
	260,130,0,1490,1487,1,0,0,0,1490,1488,1,0,0,0,1490,1489,1,0,0,0,1491,255,
	1,0,0,0,1492,1493,3,258,129,0,1493,1494,5,63,0,0,1494,257,1,0,0,0,1495,
	1497,3,154,77,0,1496,1495,1,0,0,0,1497,1500,1,0,0,0,1498,1496,1,0,0,0,1498,
	1499,1,0,0,0,1499,1501,1,0,0,0,1500,1498,1,0,0,0,1501,1502,3,114,57,0,1502,
	1503,3,106,53,0,1503,259,1,0,0,0,1504,1511,3,264,132,0,1505,1511,3,268,
	134,0,1506,1511,3,276,138,0,1507,1511,3,278,139,0,1508,1511,3,296,148,0,
	1509,1511,3,302,151,0,1510,1504,1,0,0,0,1510,1505,1,0,0,0,1510,1506,1,0,
	0,0,1510,1507,1,0,0,0,1510,1508,1,0,0,0,1510,1509,1,0,0,0,1511,261,1,0,
	0,0,1512,1518,3,264,132,0,1513,1518,3,270,135,0,1514,1518,3,280,140,0,1515,
	1518,3,298,149,0,1516,1518,3,304,152,0,1517,1512,1,0,0,0,1517,1513,1,0,
	0,0,1517,1514,1,0,0,0,1517,1515,1,0,0,0,1517,1516,1,0,0,0,1518,263,1,0,
	0,0,1519,1532,3,250,125,0,1520,1532,3,266,133,0,1521,1532,3,272,136,0,1522,
	1532,3,282,141,0,1523,1532,3,284,142,0,1524,1532,3,300,150,0,1525,1532,
	3,320,160,0,1526,1532,3,322,161,0,1527,1532,3,324,162,0,1528,1532,3,328,
	164,0,1529,1532,3,326,163,0,1530,1532,3,330,165,0,1531,1519,1,0,0,0,1531,
	1520,1,0,0,0,1531,1521,1,0,0,0,1531,1522,1,0,0,0,1531,1523,1,0,0,0,1531,
	1524,1,0,0,0,1531,1525,1,0,0,0,1531,1526,1,0,0,0,1531,1527,1,0,0,0,1531,
	1528,1,0,0,0,1531,1529,1,0,0,0,1531,1530,1,0,0,0,1532,265,1,0,0,0,1533,
	1534,5,63,0,0,1534,267,1,0,0,0,1535,1536,5,102,0,0,1536,1537,5,72,0,0,1537,
	1538,3,260,130,0,1538,269,1,0,0,0,1539,1540,5,102,0,0,1540,1541,5,72,0,
	0,1541,1542,3,262,131,0,1542,271,1,0,0,0,1543,1544,3,274,137,0,1544,1545,
	5,63,0,0,1545,273,1,0,0,0,1546,1554,3,424,212,0,1547,1554,3,454,227,0,1548,
	1554,3,456,228,0,1549,1554,3,462,231,0,1550,1554,3,466,233,0,1551,1554,
	3,390,195,0,1552,1554,3,370,185,0,1553,1546,1,0,0,0,1553,1547,1,0,0,0,1553,
	1548,1,0,0,0,1553,1549,1,0,0,0,1553,1550,1,0,0,0,1553,1551,1,0,0,0,1553,
	1552,1,0,0,0,1554,275,1,0,0,0,1555,1556,5,22,0,0,1556,1557,5,57,0,0,1557,
	1558,3,412,206,0,1558,1559,5,58,0,0,1559,1560,3,260,130,0,1560,277,1,0,
	0,0,1561,1562,5,22,0,0,1562,1563,5,57,0,0,1563,1564,3,412,206,0,1564,1565,
	5,58,0,0,1565,1566,3,262,131,0,1566,1567,5,15,0,0,1567,1568,3,260,130,0,
	1568,279,1,0,0,0,1569,1570,5,22,0,0,1570,1571,5,57,0,0,1571,1572,3,412,
	206,0,1572,1573,5,58,0,0,1573,1574,3,262,131,0,1574,1575,5,15,0,0,1575,
	1576,3,262,131,0,1576,281,1,0,0,0,1577,1578,5,2,0,0,1578,1579,3,412,206,
	0,1579,1580,5,63,0,0,1580,1588,1,0,0,0,1581,1582,5,2,0,0,1582,1583,3,412,
	206,0,1583,1584,5,72,0,0,1584,1585,3,412,206,0,1585,1586,5,63,0,0,1586,
	1588,1,0,0,0,1587,1577,1,0,0,0,1587,1581,1,0,0,0,1588,283,1,0,0,0,1589,
	1590,5,41,0,0,1590,1591,5,57,0,0,1591,1592,3,412,206,0,1592,1593,5,58,0,
	0,1593,1594,3,286,143,0,1594,285,1,0,0,0,1595,1599,5,59,0,0,1596,1598,3,
	288,144,0,1597,1596,1,0,0,0,1598,1601,1,0,0,0,1599,1597,1,0,0,0,1599,1600,
	1,0,0,0,1600,1605,1,0,0,0,1601,1599,1,0,0,0,1602,1604,3,292,146,0,1603,
	1602,1,0,0,0,1604,1607,1,0,0,0,1605,1603,1,0,0,0,1605,1606,1,0,0,0,1606,
	1608,1,0,0,0,1607,1605,1,0,0,0,1608,1609,5,60,0,0,1609,287,1,0,0,0,1610,
	1611,3,290,145,0,1611,1612,3,252,126,0,1612,289,1,0,0,0,1613,1617,3,292,
	146,0,1614,1616,3,292,146,0,1615,1614,1,0,0,0,1616,1619,1,0,0,0,1617,1615,
	1,0,0,0,1617,1618,1,0,0,0,1618,291,1,0,0,0,1619,1617,1,0,0,0,1620,1621,
	5,6,0,0,1621,1622,3,410,205,0,1622,1623,5,72,0,0,1623,1631,1,0,0,0,1624,
	1625,5,6,0,0,1625,1626,3,294,147,0,1626,1627,5,72,0,0,1627,1631,1,0,0,0,
	1628,1629,5,12,0,0,1629,1631,5,72,0,0,1630,1620,1,0,0,0,1630,1624,1,0,0,
	0,1630,1628,1,0,0,0,1631,293,1,0,0,0,1632,1633,5,102,0,0,1633,295,1,0,0,
	0,1634,1635,5,50,0,0,1635,1636,5,57,0,0,1636,1637,3,412,206,0,1637,1638,
	5,58,0,0,1638,1639,3,260,130,0,1639,297,1,0,0,0,1640,1641,5,50,0,0,1641,
	1642,5,57,0,0,1642,1643,3,412,206,0,1643,1644,5,58,0,0,1644,1645,3,262,
	131,0,1645,299,1,0,0,0,1646,1647,5,13,0,0,1647,1648,3,260,130,0,1648,1649,
	5,50,0,0,1649,1650,5,57,0,0,1650,1651,3,412,206,0,1651,1652,5,58,0,0,1652,
	1653,5,63,0,0,1653,301,1,0,0,0,1654,1657,3,306,153,0,1655,1657,3,316,158,
	0,1656,1654,1,0,0,0,1656,1655,1,0,0,0,1657,303,1,0,0,0,1658,1661,3,308,
	154,0,1659,1661,3,318,159,0,1660,1658,1,0,0,0,1660,1659,1,0,0,0,1661,305,
	1,0,0,0,1662,1663,5,21,0,0,1663,1665,5,57,0,0,1664,1666,3,310,155,0,1665,
	1664,1,0,0,0,1665,1666,1,0,0,0,1666,1667,1,0,0,0,1667,1669,5,63,0,0,1668,
	1670,3,412,206,0,1669,1668,1,0,0,0,1669,1670,1,0,0,0,1670,1671,1,0,0,0,
	1671,1673,5,63,0,0,1672,1674,3,312,156,0,1673,1672,1,0,0,0,1673,1674,1,
	0,0,0,1674,1675,1,0,0,0,1675,1676,5,58,0,0,1676,1677,3,260,130,0,1677,307,
	1,0,0,0,1678,1679,5,21,0,0,1679,1681,5,57,0,0,1680,1682,3,310,155,0,1681,
	1680,1,0,0,0,1681,1682,1,0,0,0,1682,1683,1,0,0,0,1683,1685,5,63,0,0,1684,
	1686,3,412,206,0,1685,1684,1,0,0,0,1685,1686,1,0,0,0,1686,1687,1,0,0,0,
	1687,1689,5,63,0,0,1688,1690,3,312,156,0,1689,1688,1,0,0,0,1689,1690,1,
	0,0,0,1690,1691,1,0,0,0,1691,1692,5,58,0,0,1692,1693,3,262,131,0,1693,309,
	1,0,0,0,1694,1697,3,314,157,0,1695,1697,3,258,129,0,1696,1694,1,0,0,0,1696,
	1695,1,0,0,0,1697,311,1,0,0,0,1698,1699,3,314,157,0,1699,313,1,0,0,0,1700,
	1705,3,274,137,0,1701,1702,5,64,0,0,1702,1704,3,274,137,0,1703,1701,1,0,
	0,0,1704,1707,1,0,0,0,1705,1703,1,0,0,0,1705,1706,1,0,0,0,1706,315,1,0,
	0,0,1707,1705,1,0,0,0,1708,1709,5,21,0,0,1709,1713,5,57,0,0,1710,1712,3,
	154,77,0,1711,1710,1,0,0,0,1712,1715,1,0,0,0,1713,1711,1,0,0,0,1713,1714,
	1,0,0,0,1714,1716,1,0,0,0,1715,1713,1,0,0,0,1716,1717,3,114,57,0,1717,1718,
	3,110,55,0,1718,1719,5,72,0,0,1719,1720,3,412,206,0,1720,1721,5,58,0,0,
	1721,1722,3,260,130,0,1722,317,1,0,0,0,1723,1724,5,21,0,0,1724,1728,5,57,
	0,0,1725,1727,3,154,77,0,1726,1725,1,0,0,0,1727,1730,1,0,0,0,1728,1726,
	1,0,0,0,1728,1729,1,0,0,0,1729,1731,1,0,0,0,1730,1728,1,0,0,0,1731,1732,
	3,114,57,0,1732,1733,3,110,55,0,1733,1734,5,72,0,0,1734,1735,3,412,206,
	0,1735,1736,5,58,0,0,1736,1737,3,262,131,0,1737,319,1,0,0,0,1738,1740,5,
	4,0,0,1739,1741,5,102,0,0,1740,1739,1,0,0,0,1740,1741,1,0,0,0,1741,1742,
	1,0,0,0,1742,1743,5,63,0,0,1743,321,1,0,0,0,1744,1746,5,11,0,0,1745,1747,
	5,102,0,0,1746,1745,1,0,0,0,1746,1747,1,0,0,0,1747,1748,1,0,0,0,1748,1749,
	5,63,0,0,1749,323,1,0,0,0,1750,1752,5,36,0,0,1751,1753,3,412,206,0,1752,
	1751,1,0,0,0,1752,1753,1,0,0,0,1753,1754,1,0,0,0,1754,1755,5,63,0,0,1755,
	325,1,0,0,0,1756,1757,5,44,0,0,1757,1758,3,412,206,0,1758,1759,5,63,0,0,
	1759,327,1,0,0,0,1760,1761,5,42,0,0,1761,1762,5,57,0,0,1762,1763,3,412,
	206,0,1763,1764,5,58,0,0,1764,1765,3,250,125,0,1765,329,1,0,0,0,1766,1767,
	5,47,0,0,1767,1768,3,250,125,0,1768,1769,3,332,166,0,1769,1779,1,0,0,0,
	1770,1771,5,47,0,0,1771,1773,3,250,125,0,1772,1774,3,332,166,0,1773,1772,
	1,0,0,0,1773,1774,1,0,0,0,1774,1775,1,0,0,0,1775,1776,3,340,170,0,1776,
	1779,1,0,0,0,1777,1779,3,342,171,0,1778,1766,1,0,0,0,1778,1770,1,0,0,0,
	1778,1777,1,0,0,0,1779,331,1,0,0,0,1780,1784,3,334,167,0,1781,1783,3,334,
	167,0,1782,1781,1,0,0,0,1783,1786,1,0,0,0,1784,1782,1,0,0,0,1784,1785,1,
	0,0,0,1785,333,1,0,0,0,1786,1784,1,0,0,0,1787,1788,5,7,0,0,1788,1789,5,
	57,0,0,1789,1790,3,336,168,0,1790,1791,5,58,0,0,1791,1792,3,250,125,0,1792,
	335,1,0,0,0,1793,1795,3,154,77,0,1794,1793,1,0,0,0,1795,1798,1,0,0,0,1796,
	1794,1,0,0,0,1796,1797,1,0,0,0,1797,1799,1,0,0,0,1798,1796,1,0,0,0,1799,
	1800,3,338,169,0,1800,1801,3,110,55,0,1801,337,1,0,0,0,1802,1807,3,122,
	61,0,1803,1804,5,86,0,0,1804,1806,3,14,7,0,1805,1803,1,0,0,0,1806,1809,
	1,0,0,0,1807,1805,1,0,0,0,1807,1808,1,0,0,0,1808,339,1,0,0,0,1809,1807,
	1,0,0,0,1810,1811,5,19,0,0,1811,1812,3,250,125,0,1812,341,1,0,0,0,1813,
	1814,5,47,0,0,1814,1815,3,344,172,0,1815,1817,3,250,125,0,1816,1818,3,332,
	166,0,1817,1816,1,0,0,0,1817,1818,1,0,0,0,1818,1820,1,0,0,0,1819,1821,3,
	340,170,0,1820,1819,1,0,0,0,1820,1821,1,0,0,0,1821,343,1,0,0,0,1822,1823,
	5,57,0,0,1823,1825,3,346,173,0,1824,1826,5,63,0,0,1825,1824,1,0,0,0,1825,
	1826,1,0,0,0,1826,1827,1,0,0,0,1827,1828,5,58,0,0,1828,345,1,0,0,0,1829,
	1834,3,348,174,0,1830,1831,5,63,0,0,1831,1833,3,348,174,0,1832,1830,1,0,
	0,0,1833,1836,1,0,0,0,1834,1832,1,0,0,0,1834,1835,1,0,0,0,1835,347,1,0,
	0,0,1836,1834,1,0,0,0,1837,1839,3,154,77,0,1838,1837,1,0,0,0,1839,1842,
	1,0,0,0,1840,1838,1,0,0,0,1840,1841,1,0,0,0,1841,1843,1,0,0,0,1842,1840,
	1,0,0,0,1843,1844,3,114,57,0,1844,1845,3,110,55,0,1845,1846,5,66,0,0,1846,
	1847,3,412,206,0,1847,349,1,0,0,0,1848,1851,3,364,182,0,1849,1851,3,404,
	202,0,1850,1848,1,0,0,0,1850,1849,1,0,0,0,1851,1855,1,0,0,0,1852,1854,3,
	358,179,0,1853,1852,1,0,0,0,1854,1857,1,0,0,0,1855,1853,1,0,0,0,1855,1856,
	1,0,0,0,1856,351,1,0,0,0,1857,1855,1,0,0,0,1858,1888,3,0,0,0,1859,1864,
	3,52,26,0,1860,1861,5,61,0,0,1861,1863,5,62,0,0,1862,1860,1,0,0,0,1863,
	1866,1,0,0,0,1864,1862,1,0,0,0,1864,1865,1,0,0,0,1865,1867,1,0,0,0,1866,
	1864,1,0,0,0,1867,1868,5,65,0,0,1868,1869,5,9,0,0,1869,1888,1,0,0,0,1870,
	1871,5,48,0,0,1871,1872,5,65,0,0,1872,1888,5,9,0,0,1873,1888,5,43,0,0,1874,
	1875,3,52,26,0,1875,1876,5,65,0,0,1876,1877,5,43,0,0,1877,1888,1,0,0,0,
	1878,1879,5,57,0,0,1879,1880,3,412,206,0,1880,1881,5,58,0,0,1881,1888,1,
	0,0,0,1882,1888,3,370,185,0,1883,1888,3,378,189,0,1884,1888,3,384,192,0,
	1885,1888,3,390,195,0,1886,1888,3,398,199,0,1887,1858,1,0,0,0,1887,1859,
	1,0,0,0,1887,1870,1,0,0,0,1887,1873,1,0,0,0,1887,1874,1,0,0,0,1887,1878,
	1,0,0,0,1887,1882,1,0,0,0,1887,1883,1,0,0,0,1887,1884,1,0,0,0,1887,1885,
	1,0,0,0,1887,1886,1,0,0,0,1888,353,1,0,0,0,1889,1890,1,0,0,0,1890,355,1,
	0,0,0,1891,1920,3,0,0,0,1892,1897,3,52,26,0,1893,1894,5,61,0,0,1894,1896,
	5,62,0,0,1895,1893,1,0,0,0,1896,1899,1,0,0,0,1897,1895,1,0,0,0,1897,1898,
	1,0,0,0,1898,1900,1,0,0,0,1899,1897,1,0,0,0,1900,1901,5,65,0,0,1901,1902,
	5,9,0,0,1902,1920,1,0,0,0,1903,1904,5,48,0,0,1904,1905,5,65,0,0,1905,1920,
	5,9,0,0,1906,1920,5,43,0,0,1907,1908,3,52,26,0,1908,1909,5,65,0,0,1909,
	1910,5,43,0,0,1910,1920,1,0,0,0,1911,1912,5,57,0,0,1912,1913,3,412,206,
	0,1913,1914,5,58,0,0,1914,1920,1,0,0,0,1915,1920,3,370,185,0,1916,1920,
	3,378,189,0,1917,1920,3,390,195,0,1918,1920,3,398,199,0,1919,1891,1,0,0,
	0,1919,1892,1,0,0,0,1919,1903,1,0,0,0,1919,1906,1,0,0,0,1919,1907,1,0,0,
	0,1919,1911,1,0,0,0,1919,1915,1,0,0,0,1919,1916,1,0,0,0,1919,1917,1,0,0,
	0,1919,1918,1,0,0,0,1920,357,1,0,0,0,1921,1927,3,372,186,0,1922,1927,3,
	380,190,0,1923,1927,3,386,193,0,1924,1927,3,392,196,0,1925,1927,3,400,200,
	0,1926,1921,1,0,0,0,1926,1922,1,0,0,0,1926,1923,1,0,0,0,1926,1924,1,0,0,
	0,1926,1925,1,0,0,0,1927,359,1,0,0,0,1928,1929,1,0,0,0,1929,361,1,0,0,0,
	1930,1935,3,372,186,0,1931,1935,3,380,190,0,1932,1935,3,392,196,0,1933,
	1935,3,400,200,0,1934,1930,1,0,0,0,1934,1931,1,0,0,0,1934,1932,1,0,0,0,
	1934,1933,1,0,0,0,1935,363,1,0,0,0,1936,1977,3,0,0,0,1937,1942,3,52,26,
	0,1938,1939,5,61,0,0,1939,1941,5,62,0,0,1940,1938,1,0,0,0,1941,1944,1,0,
	0,0,1942,1940,1,0,0,0,1942,1943,1,0,0,0,1943,1945,1,0,0,0,1944,1942,1,0,
	0,0,1945,1946,5,65,0,0,1946,1947,5,9,0,0,1947,1977,1,0,0,0,1948,1953,3,
	116,58,0,1949,1950,5,61,0,0,1950,1952,5,62,0,0,1951,1949,1,0,0,0,1952,1955,
	1,0,0,0,1953,1951,1,0,0,0,1953,1954,1,0,0,0,1954,1956,1,0,0,0,1955,1953,
	1,0,0,0,1956,1957,5,65,0,0,1957,1958,5,9,0,0,1958,1977,1,0,0,0,1959,1960,
	5,48,0,0,1960,1961,5,65,0,0,1961,1977,5,9,0,0,1962,1977,5,43,0,0,1963,1964,
	3,52,26,0,1964,1965,5,65,0,0,1965,1966,5,43,0,0,1966,1977,1,0,0,0,1967,
	1968,5,57,0,0,1968,1969,3,412,206,0,1969,1970,5,58,0,0,1970,1977,1,0,0,
	0,1971,1977,3,374,187,0,1972,1977,3,382,191,0,1973,1977,3,388,194,0,1974,
	1977,3,394,197,0,1975,1977,3,402,201,0,1976,1936,1,0,0,0,1976,1937,1,0,
	0,0,1976,1948,1,0,0,0,1976,1959,1,0,0,0,1976,1962,1,0,0,0,1976,1963,1,0,
	0,0,1976,1967,1,0,0,0,1976,1971,1,0,0,0,1976,1972,1,0,0,0,1976,1973,1,0,
	0,0,1976,1974,1,0,0,0,1976,1975,1,0,0,0,1977,365,1,0,0,0,1978,1979,1,0,
	0,0,1979,367,1,0,0,0,1980,2020,3,0,0,0,1981,1986,3,52,26,0,1982,1983,5,
	61,0,0,1983,1985,5,62,0,0,1984,1982,1,0,0,0,1985,1988,1,0,0,0,1986,1984,
	1,0,0,0,1986,1987,1,0,0,0,1987,1989,1,0,0,0,1988,1986,1,0,0,0,1989,1990,
	5,65,0,0,1990,1991,5,9,0,0,1991,2020,1,0,0,0,1992,1997,3,116,58,0,1993,
	1994,5,61,0,0,1994,1996,5,62,0,0,1995,1993,1,0,0,0,1996,1999,1,0,0,0,1997,
	1995,1,0,0,0,1997,1998,1,0,0,0,1998,2000,1,0,0,0,1999,1997,1,0,0,0,2000,
	2001,5,65,0,0,2001,2002,5,9,0,0,2002,2020,1,0,0,0,2003,2004,5,48,0,0,2004,
	2005,5,65,0,0,2005,2020,5,9,0,0,2006,2020,5,43,0,0,2007,2008,3,52,26,0,
	2008,2009,5,65,0,0,2009,2010,5,43,0,0,2010,2020,1,0,0,0,2011,2012,5,57,
	0,0,2012,2013,3,412,206,0,2013,2014,5,58,0,0,2014,2020,1,0,0,0,2015,2020,
	3,374,187,0,2016,2020,3,382,191,0,2017,2020,3,394,197,0,2018,2020,3,402,
	201,0,2019,1980,1,0,0,0,2019,1981,1,0,0,0,2019,1992,1,0,0,0,2019,2003,1,
	0,0,0,2019,2006,1,0,0,0,2019,2007,1,0,0,0,2019,2011,1,0,0,0,2019,2015,1,
	0,0,0,2019,2016,1,0,0,0,2019,2017,1,0,0,0,2019,2018,1,0,0,0,2020,369,1,
	0,0,0,2021,2023,5,31,0,0,2022,2024,3,40,20,0,2023,2022,1,0,0,0,2023,2024,
	1,0,0,0,2024,2028,1,0,0,0,2025,2027,3,228,114,0,2026,2025,1,0,0,0,2027,
	2030,1,0,0,0,2028,2026,1,0,0,0,2028,2029,1,0,0,0,2029,2031,1,0,0,0,2030,
	2028,1,0,0,0,2031,2042,5,102,0,0,2032,2036,5,65,0,0,2033,2035,3,228,114,
	0,2034,2033,1,0,0,0,2035,2038,1,0,0,0,2036,2034,1,0,0,0,2036,2037,1,0,0,
	0,2037,2039,1,0,0,0,2038,2036,1,0,0,0,2039,2041,5,102,0,0,2040,2032,1,0,
	0,0,2041,2044,1,0,0,0,2042,2040,1,0,0,0,2042,2043,1,0,0,0,2043,2046,1,0,
	0,0,2044,2042,1,0,0,0,2045,2047,3,376,188,0,2046,2045,1,0,0,0,2046,2047,
	1,0,0,0,2047,2048,1,0,0,0,2048,2050,5,57,0,0,2049,2051,3,396,198,0,2050,
	2049,1,0,0,0,2050,2051,1,0,0,0,2051,2052,1,0,0,0,2052,2054,5,58,0,0,2053,
	2055,3,96,48,0,2054,2053,1,0,0,0,2054,2055,1,0,0,0,2055,2105,1,0,0,0,2056,
	2057,3,56,28,0,2057,2058,5,65,0,0,2058,2060,5,31,0,0,2059,2061,3,40,20,
	0,2060,2059,1,0,0,0,2060,2061,1,0,0,0,2061,2065,1,0,0,0,2062,2064,3,228,
	114,0,2063,2062,1,0,0,0,2064,2067,1,0,0,0,2065,2063,1,0,0,0,2065,2066,1,
	0,0,0,2066,2068,1,0,0,0,2067,2065,1,0,0,0,2068,2070,5,102,0,0,2069,2071,
	3,376,188,0,2070,2069,1,0,0,0,2070,2071,1,0,0,0,2071,2072,1,0,0,0,2072,
	2074,5,57,0,0,2073,2075,3,396,198,0,2074,2073,1,0,0,0,2074,2075,1,0,0,0,
	2075,2076,1,0,0,0,2076,2078,5,58,0,0,2077,2079,3,96,48,0,2078,2077,1,0,
	0,0,2078,2079,1,0,0,0,2079,2105,1,0,0,0,2080,2081,3,350,175,0,2081,2082,
	5,65,0,0,2082,2084,5,31,0,0,2083,2085,3,40,20,0,2084,2083,1,0,0,0,2084,
	2085,1,0,0,0,2085,2089,1,0,0,0,2086,2088,3,228,114,0,2087,2086,1,0,0,0,
	2088,2091,1,0,0,0,2089,2087,1,0,0,0,2089,2090,1,0,0,0,2090,2092,1,0,0,0,
	2091,2089,1,0,0,0,2092,2094,5,102,0,0,2093,2095,3,376,188,0,2094,2093,1,
	0,0,0,2094,2095,1,0,0,0,2095,2096,1,0,0,0,2096,2098,5,57,0,0,2097,2099,
	3,396,198,0,2098,2097,1,0,0,0,2098,2099,1,0,0,0,2099,2100,1,0,0,0,2100,
	2102,5,58,0,0,2101,2103,3,96,48,0,2102,2101,1,0,0,0,2102,2103,1,0,0,0,2103,
	2105,1,0,0,0,2104,2021,1,0,0,0,2104,2056,1,0,0,0,2104,2080,1,0,0,0,2105,
	371,1,0,0,0,2106,2107,5,65,0,0,2107,2109,5,31,0,0,2108,2110,3,40,20,0,2109,
	2108,1,0,0,0,2109,2110,1,0,0,0,2110,2114,1,0,0,0,2111,2113,3,228,114,0,
	2112,2111,1,0,0,0,2113,2116,1,0,0,0,2114,2112,1,0,0,0,2114,2115,1,0,0,0,
	2115,2117,1,0,0,0,2116,2114,1,0,0,0,2117,2119,5,102,0,0,2118,2120,3,376,
	188,0,2119,2118,1,0,0,0,2119,2120,1,0,0,0,2120,2121,1,0,0,0,2121,2123,5,
	57,0,0,2122,2124,3,396,198,0,2123,2122,1,0,0,0,2123,2124,1,0,0,0,2124,2125,
	1,0,0,0,2125,2127,5,58,0,0,2126,2128,3,96,48,0,2127,2126,1,0,0,0,2127,2128,
	1,0,0,0,2128,373,1,0,0,0,2129,2131,5,31,0,0,2130,2132,3,40,20,0,2131,2130,
	1,0,0,0,2131,2132,1,0,0,0,2132,2136,1,0,0,0,2133,2135,3,228,114,0,2134,
	2133,1,0,0,0,2135,2138,1,0,0,0,2136,2134,1,0,0,0,2136,2137,1,0,0,0,2137,
	2139,1,0,0,0,2138,2136,1,0,0,0,2139,2150,5,102,0,0,2140,2144,5,65,0,0,2141,
	2143,3,228,114,0,2142,2141,1,0,0,0,2143,2146,1,0,0,0,2144,2142,1,0,0,0,
	2144,2145,1,0,0,0,2145,2147,1,0,0,0,2146,2144,1,0,0,0,2147,2149,5,102,0,
	0,2148,2140,1,0,0,0,2149,2152,1,0,0,0,2150,2148,1,0,0,0,2150,2151,1,0,0,
	0,2151,2154,1,0,0,0,2152,2150,1,0,0,0,2153,2155,3,376,188,0,2154,2153,1,
	0,0,0,2154,2155,1,0,0,0,2155,2156,1,0,0,0,2156,2158,5,57,0,0,2157,2159,
	3,396,198,0,2158,2157,1,0,0,0,2158,2159,1,0,0,0,2159,2160,1,0,0,0,2160,
	2162,5,58,0,0,2161,2163,3,96,48,0,2162,2161,1,0,0,0,2162,2163,1,0,0,0,2163,
	2189,1,0,0,0,2164,2165,3,56,28,0,2165,2166,5,65,0,0,2166,2168,5,31,0,0,
	2167,2169,3,40,20,0,2168,2167,1,0,0,0,2168,2169,1,0,0,0,2169,2173,1,0,0,
	0,2170,2172,3,228,114,0,2171,2170,1,0,0,0,2172,2175,1,0,0,0,2173,2171,1,
	0,0,0,2173,2174,1,0,0,0,2174,2176,1,0,0,0,2175,2173,1,0,0,0,2176,2178,5,
	102,0,0,2177,2179,3,376,188,0,2178,2177,1,0,0,0,2178,2179,1,0,0,0,2179,
	2180,1,0,0,0,2180,2182,5,57,0,0,2181,2183,3,396,198,0,2182,2181,1,0,0,0,
	2182,2183,1,0,0,0,2183,2184,1,0,0,0,2184,2186,5,58,0,0,2185,2187,3,96,48,
	0,2186,2185,1,0,0,0,2186,2187,1,0,0,0,2187,2189,1,0,0,0,2188,2129,1,0,0,
	0,2188,2164,1,0,0,0,2189,375,1,0,0,0,2190,2194,3,40,20,0,2191,2192,5,68,
	0,0,2192,2194,5,67,0,0,2193,2190,1,0,0,0,2193,2191,1,0,0,0,2194,377,1,0,
	0,0,2195,2196,3,350,175,0,2196,2197,5,65,0,0,2197,2198,5,102,0,0,2198,2209,
	1,0,0,0,2199,2200,5,40,0,0,2200,2201,5,65,0,0,2201,2209,5,102,0,0,2202,
	2203,3,52,26,0,2203,2204,5,65,0,0,2204,2205,5,40,0,0,2205,2206,5,65,0,0,
	2206,2207,5,102,0,0,2207,2209,1,0,0,0,2208,2195,1,0,0,0,2208,2199,1,0,0,
	0,2208,2202,1,0,0,0,2209,379,1,0,0,0,2210,2211,5,65,0,0,2211,2212,5,102,
	0,0,2212,381,1,0,0,0,2213,2214,5,40,0,0,2214,2215,5,65,0,0,2215,2223,5,
	102,0,0,2216,2217,3,52,26,0,2217,2218,5,65,0,0,2218,2219,5,40,0,0,2219,
	2220,5,65,0,0,2220,2221,5,102,0,0,2221,2223,1,0,0,0,2222,2213,1,0,0,0,2222,
	2216,1,0,0,0,2223,383,1,0,0,0,2224,2225,3,56,28,0,2225,2226,5,61,0,0,2226,
	2227,3,412,206,0,2227,2228,5,62,0,0,2228,2235,1,0,0,0,2229,2230,3,356,178,
	0,2230,2231,5,61,0,0,2231,2232,3,412,206,0,2232,2233,5,62,0,0,2233,2235,
	1,0,0,0,2234,2224,1,0,0,0,2234,2229,1,0,0,0,2235,2243,1,0,0,0,2236,2237,
	3,354,177,0,2237,2238,5,61,0,0,2238,2239,3,412,206,0,2239,2240,5,62,0,0,
	2240,2242,1,0,0,0,2241,2236,1,0,0,0,2242,2245,1,0,0,0,2243,2241,1,0,0,0,
	2243,2244,1,0,0,0,2244,385,1,0,0,0,2245,2243,1,0,0,0,2246,2247,3,362,181,
	0,2247,2248,5,61,0,0,2248,2249,3,412,206,0,2249,2250,5,62,0,0,2250,2258,
	1,0,0,0,2251,2252,3,360,180,0,2252,2253,5,61,0,0,2253,2254,3,412,206,0,
	2254,2255,5,62,0,0,2255,2257,1,0,0,0,2256,2251,1,0,0,0,2257,2260,1,0,0,
	0,2258,2256,1,0,0,0,2258,2259,1,0,0,0,2259,387,1,0,0,0,2260,2258,1,0,0,
	0,2261,2262,3,56,28,0,2262,2263,5,61,0,0,2263,2264,3,412,206,0,2264,2265,
	5,62,0,0,2265,2272,1,0,0,0,2266,2267,3,368,184,0,2267,2268,5,61,0,0,2268,
	2269,3,412,206,0,2269,2270,5,62,0,0,2270,2272,1,0,0,0,2271,2261,1,0,0,0,
	2271,2266,1,0,0,0,2272,2280,1,0,0,0,2273,2274,3,366,183,0,2274,2275,5,61,
	0,0,2275,2276,3,412,206,0,2276,2277,5,62,0,0,2277,2279,1,0,0,0,2278,2273,
	1,0,0,0,2279,2282,1,0,0,0,2280,2278,1,0,0,0,2280,2281,1,0,0,0,2281,389,
	1,0,0,0,2282,2280,1,0,0,0,2283,2284,3,58,29,0,2284,2286,5,57,0,0,2285,2287,
	3,396,198,0,2286,2285,1,0,0,0,2286,2287,1,0,0,0,2287,2288,1,0,0,0,2288,
	2289,5,58,0,0,2289,2352,1,0,0,0,2290,2291,3,52,26,0,2291,2293,5,65,0,0,
	2292,2294,3,40,20,0,2293,2292,1,0,0,0,2293,2294,1,0,0,0,2294,2295,1,0,0,
	0,2295,2296,5,102,0,0,2296,2298,5,57,0,0,2297,2299,3,396,198,0,2298,2297,
	1,0,0,0,2298,2299,1,0,0,0,2299,2300,1,0,0,0,2300,2301,5,58,0,0,2301,2352,
	1,0,0,0,2302,2303,3,56,28,0,2303,2305,5,65,0,0,2304,2306,3,40,20,0,2305,
	2304,1,0,0,0,2305,2306,1,0,0,0,2306,2307,1,0,0,0,2307,2308,5,102,0,0,2308,
	2310,5,57,0,0,2309,2311,3,396,198,0,2310,2309,1,0,0,0,2310,2311,1,0,0,0,
	2311,2312,1,0,0,0,2312,2313,5,58,0,0,2313,2352,1,0,0,0,2314,2315,3,350,
	175,0,2315,2317,5,65,0,0,2316,2318,3,40,20,0,2317,2316,1,0,0,0,2317,2318,
	1,0,0,0,2318,2319,1,0,0,0,2319,2320,5,102,0,0,2320,2322,5,57,0,0,2321,2323,
	3,396,198,0,2322,2321,1,0,0,0,2322,2323,1,0,0,0,2323,2324,1,0,0,0,2324,
	2325,5,58,0,0,2325,2352,1,0,0,0,2326,2327,5,40,0,0,2327,2329,5,65,0,0,2328,
	2330,3,40,20,0,2329,2328,1,0,0,0,2329,2330,1,0,0,0,2330,2331,1,0,0,0,2331,
	2332,5,102,0,0,2332,2334,5,57,0,0,2333,2335,3,396,198,0,2334,2333,1,0,0,
	0,2334,2335,1,0,0,0,2335,2336,1,0,0,0,2336,2352,5,58,0,0,2337,2338,3,52,
	26,0,2338,2339,5,65,0,0,2339,2340,5,40,0,0,2340,2342,5,65,0,0,2341,2343,
	3,40,20,0,2342,2341,1,0,0,0,2342,2343,1,0,0,0,2343,2344,1,0,0,0,2344,2345,
	5,102,0,0,2345,2347,5,57,0,0,2346,2348,3,396,198,0,2347,2346,1,0,0,0,2347,
	2348,1,0,0,0,2348,2349,1,0,0,0,2349,2350,5,58,0,0,2350,2352,1,0,0,0,2351,
	2283,1,0,0,0,2351,2290,1,0,0,0,2351,2302,1,0,0,0,2351,2314,1,0,0,0,2351,
	2326,1,0,0,0,2351,2337,1,0,0,0,2352,391,1,0,0,0,2353,2355,5,65,0,0,2354,
	2356,3,40,20,0,2355,2354,1,0,0,0,2355,2356,1,0,0,0,2356,2357,1,0,0,0,2357,
	2358,5,102,0,0,2358,2360,5,57,0,0,2359,2361,3,396,198,0,2360,2359,1,0,0,
	0,2360,2361,1,0,0,0,2361,2362,1,0,0,0,2362,2363,5,58,0,0,2363,393,1,0,0,
	0,2364,2365,3,58,29,0,2365,2367,5,57,0,0,2366,2368,3,396,198,0,2367,2366,
	1,0,0,0,2367,2368,1,0,0,0,2368,2369,1,0,0,0,2369,2370,5,58,0,0,2370,2421,
	1,0,0,0,2371,2372,3,52,26,0,2372,2374,5,65,0,0,2373,2375,3,40,20,0,2374,
	2373,1,0,0,0,2374,2375,1,0,0,0,2375,2376,1,0,0,0,2376,2377,5,102,0,0,2377,
	2379,5,57,0,0,2378,2380,3,396,198,0,2379,2378,1,0,0,0,2379,2380,1,0,0,0,
	2380,2381,1,0,0,0,2381,2382,5,58,0,0,2382,2421,1,0,0,0,2383,2384,3,56,28,
	0,2384,2386,5,65,0,0,2385,2387,3,40,20,0,2386,2385,1,0,0,0,2386,2387,1,
	0,0,0,2387,2388,1,0,0,0,2388,2389,5,102,0,0,2389,2391,5,57,0,0,2390,2392,
	3,396,198,0,2391,2390,1,0,0,0,2391,2392,1,0,0,0,2392,2393,1,0,0,0,2393,
	2394,5,58,0,0,2394,2421,1,0,0,0,2395,2396,5,40,0,0,2396,2398,5,65,0,0,2397,
	2399,3,40,20,0,2398,2397,1,0,0,0,2398,2399,1,0,0,0,2399,2400,1,0,0,0,2400,
	2401,5,102,0,0,2401,2403,5,57,0,0,2402,2404,3,396,198,0,2403,2402,1,0,0,
	0,2403,2404,1,0,0,0,2404,2405,1,0,0,0,2405,2421,5,58,0,0,2406,2407,3,52,
	26,0,2407,2408,5,65,0,0,2408,2409,5,40,0,0,2409,2411,5,65,0,0,2410,2412,
	3,40,20,0,2411,2410,1,0,0,0,2411,2412,1,0,0,0,2412,2413,1,0,0,0,2413,2414,
	5,102,0,0,2414,2416,5,57,0,0,2415,2417,3,396,198,0,2416,2415,1,0,0,0,2416,
	2417,1,0,0,0,2417,2418,1,0,0,0,2418,2419,5,58,0,0,2419,2421,1,0,0,0,2420,
	2364,1,0,0,0,2420,2371,1,0,0,0,2420,2383,1,0,0,0,2420,2395,1,0,0,0,2420,
	2406,1,0,0,0,2421,395,1,0,0,0,2422,2427,3,412,206,0,2423,2424,5,64,0,0,
	2424,2426,3,412,206,0,2425,2423,1,0,0,0,2426,2429,1,0,0,0,2427,2425,1,0,
	0,0,2427,2428,1,0,0,0,2428,397,1,0,0,0,2429,2427,1,0,0,0,2430,2431,3,56,
	28,0,2431,2433,5,90,0,0,2432,2434,3,40,20,0,2433,2432,1,0,0,0,2433,2434,
	1,0,0,0,2434,2435,1,0,0,0,2435,2436,5,102,0,0,2436,2478,1,0,0,0,2437,2438,
	3,10,5,0,2438,2440,5,90,0,0,2439,2441,3,40,20,0,2440,2439,1,0,0,0,2440,
	2441,1,0,0,0,2441,2442,1,0,0,0,2442,2443,5,102,0,0,2443,2478,1,0,0,0,2444,
	2445,3,350,175,0,2445,2447,5,90,0,0,2446,2448,3,40,20,0,2447,2446,1,0,0,
	0,2447,2448,1,0,0,0,2448,2449,1,0,0,0,2449,2450,5,102,0,0,2450,2478,1,0,
	0,0,2451,2452,5,40,0,0,2452,2454,5,90,0,0,2453,2455,3,40,20,0,2454,2453,
	1,0,0,0,2454,2455,1,0,0,0,2455,2456,1,0,0,0,2456,2478,5,102,0,0,2457,2458,
	3,52,26,0,2458,2459,5,65,0,0,2459,2460,5,40,0,0,2460,2462,5,90,0,0,2461,
	2463,3,40,20,0,2462,2461,1,0,0,0,2462,2463,1,0,0,0,2463,2464,1,0,0,0,2464,
	2465,5,102,0,0,2465,2478,1,0,0,0,2466,2467,3,14,7,0,2467,2469,5,90,0,0,
	2468,2470,3,40,20,0,2469,2468,1,0,0,0,2469,2470,1,0,0,0,2470,2471,1,0,0,
	0,2471,2472,5,31,0,0,2472,2478,1,0,0,0,2473,2474,3,28,14,0,2474,2475,5,
	90,0,0,2475,2476,5,31,0,0,2476,2478,1,0,0,0,2477,2430,1,0,0,0,2477,2437,
	1,0,0,0,2477,2444,1,0,0,0,2477,2451,1,0,0,0,2477,2457,1,0,0,0,2477,2466,
	1,0,0,0,2477,2473,1,0,0,0,2478,399,1,0,0,0,2479,2481,5,90,0,0,2480,2482,
	3,40,20,0,2481,2480,1,0,0,0,2481,2482,1,0,0,0,2482,2483,1,0,0,0,2483,2484,
	5,102,0,0,2484,401,1,0,0,0,2485,2486,3,56,28,0,2486,2488,5,90,0,0,2487,
	2489,3,40,20,0,2488,2487,1,0,0,0,2488,2489,1,0,0,0,2489,2490,1,0,0,0,2490,
	2491,5,102,0,0,2491,2526,1,0,0,0,2492,2493,3,10,5,0,2493,2495,5,90,0,0,
	2494,2496,3,40,20,0,2495,2494,1,0,0,0,2495,2496,1,0,0,0,2496,2497,1,0,0,
	0,2497,2498,5,102,0,0,2498,2526,1,0,0,0,2499,2500,5,40,0,0,2500,2502,5,
	90,0,0,2501,2503,3,40,20,0,2502,2501,1,0,0,0,2502,2503,1,0,0,0,2503,2504,
	1,0,0,0,2504,2526,5,102,0,0,2505,2506,3,52,26,0,2506,2507,5,65,0,0,2507,
	2508,5,40,0,0,2508,2510,5,90,0,0,2509,2511,3,40,20,0,2510,2509,1,0,0,0,
	2510,2511,1,0,0,0,2511,2512,1,0,0,0,2512,2513,5,102,0,0,2513,2526,1,0,0,
	0,2514,2515,3,14,7,0,2515,2517,5,90,0,0,2516,2518,3,40,20,0,2517,2516,1,
	0,0,0,2517,2518,1,0,0,0,2518,2519,1,0,0,0,2519,2520,5,31,0,0,2520,2526,
	1,0,0,0,2521,2522,3,28,14,0,2522,2523,5,90,0,0,2523,2524,5,31,0,0,2524,
	2526,1,0,0,0,2525,2485,1,0,0,0,2525,2492,1,0,0,0,2525,2499,1,0,0,0,2525,
	2505,1,0,0,0,2525,2514,1,0,0,0,2525,2521,1,0,0,0,2526,403,1,0,0,0,2527,
	2528,5,31,0,0,2528,2529,3,2,1,0,2529,2531,3,406,203,0,2530,2532,3,30,15,
	0,2531,2530,1,0,0,0,2531,2532,1,0,0,0,2532,2550,1,0,0,0,2533,2534,5,31,
	0,0,2534,2535,3,12,6,0,2535,2537,3,406,203,0,2536,2538,3,30,15,0,2537,2536,
	1,0,0,0,2537,2538,1,0,0,0,2538,2550,1,0,0,0,2539,2540,5,31,0,0,2540,2541,
	3,2,1,0,2541,2542,3,30,15,0,2542,2543,3,246,123,0,2543,2550,1,0,0,0,2544,
	2545,5,31,0,0,2545,2546,3,12,6,0,2546,2547,3,30,15,0,2547,2548,3,246,123,
	0,2548,2550,1,0,0,0,2549,2527,1,0,0,0,2549,2533,1,0,0,0,2549,2539,1,0,0,
	0,2549,2544,1,0,0,0,2550,405,1,0,0,0,2551,2555,3,408,204,0,2552,2554,3,
	408,204,0,2553,2552,1,0,0,0,2554,2557,1,0,0,0,2555,2553,1,0,0,0,2555,2556,
	1,0,0,0,2556,407,1,0,0,0,2557,2555,1,0,0,0,2558,2560,3,228,114,0,2559,2558,
	1,0,0,0,2560,2563,1,0,0,0,2561,2559,1,0,0,0,2561,2562,1,0,0,0,2562,2564,
	1,0,0,0,2563,2561,1,0,0,0,2564,2565,5,61,0,0,2565,2566,3,412,206,0,2566,
	2567,5,62,0,0,2567,409,1,0,0,0,2568,2569,3,412,206,0,2569,411,1,0,0,0,2570,
	2573,3,414,207,0,2571,2573,3,422,211,0,2572,2570,1,0,0,0,2572,2571,1,0,
	0,0,2573,413,1,0,0,0,2574,2575,3,416,208,0,2575,2576,5,89,0,0,2576,2577,
	3,420,210,0,2577,415,1,0,0,0,2578,2589,5,102,0,0,2579,2581,5,57,0,0,2580,
	2582,3,148,74,0,2581,2580,1,0,0,0,2581,2582,1,0,0,0,2582,2583,1,0,0,0,2583,
	2589,5,58,0,0,2584,2585,5,57,0,0,2585,2586,3,418,209,0,2586,2587,5,58,0,
	0,2587,2589,1,0,0,0,2588,2578,1,0,0,0,2588,2579,1,0,0,0,2588,2584,1,0,0,
	0,2589,417,1,0,0,0,2590,2595,5,102,0,0,2591,2592,5,64,0,0,2592,2594,5,102,
	0,0,2593,2591,1,0,0,0,2594,2597,1,0,0,0,2595,2593,1,0,0,0,2595,2596,1,0,
	0,0,2596,419,1,0,0,0,2597,2595,1,0,0,0,2598,2601,3,412,206,0,2599,2601,
	3,250,125,0,2600,2598,1,0,0,0,2600,2599,1,0,0,0,2601,421,1,0,0,0,2602,2605,
	3,430,215,0,2603,2605,3,424,212,0,2604,2602,1,0,0,0,2604,2603,1,0,0,0,2605,
	423,1,0,0,0,2606,2607,3,426,213,0,2607,2608,3,428,214,0,2608,2609,3,412,
	206,0,2609,425,1,0,0,0,2610,2614,3,56,28,0,2611,2614,3,378,189,0,2612,2614,
	3,384,192,0,2613,2610,1,0,0,0,2613,2611,1,0,0,0,2613,2612,1,0,0,0,2614,
	427,1,0,0,0,2615,2616,7,3,0,0,2616,429,1,0,0,0,2617,2625,3,432,216,0,2618,
	2619,3,432,216,0,2619,2620,5,71,0,0,2620,2621,3,412,206,0,2621,2622,5,72,
	0,0,2622,2623,3,430,215,0,2623,2625,1,0,0,0,2624,2617,1,0,0,0,2624,2618,
	1,0,0,0,2625,431,1,0,0,0,2626,2627,6,216,-1,0,2627,2628,3,434,217,0,2628,
	2634,1,0,0,0,2629,2630,10,1,0,0,2630,2631,5,78,0,0,2631,2633,3,434,217,
	0,2632,2629,1,0,0,0,2633,2636,1,0,0,0,2634,2632,1,0,0,0,2634,2635,1,0,0,
	0,2635,433,1,0,0,0,2636,2634,1,0,0,0,2637,2638,6,217,-1,0,2638,2639,3,436,
	218,0,2639,2645,1,0,0,0,2640,2641,10,1,0,0,2641,2642,5,77,0,0,2642,2644,
	3,436,218,0,2643,2640,1,0,0,0,2644,2647,1,0,0,0,2645,2643,1,0,0,0,2645,
	2646,1,0,0,0,2646,435,1,0,0,0,2647,2645,1,0,0,0,2648,2649,6,218,-1,0,2649,
	2650,3,438,219,0,2650,2656,1,0,0,0,2651,2652,10,1,0,0,2652,2653,5,86,0,
	0,2653,2655,3,438,219,0,2654,2651,1,0,0,0,2655,2658,1,0,0,0,2656,2654,1,
	0,0,0,2656,2657,1,0,0,0,2657,437,1,0,0,0,2658,2656,1,0,0,0,2659,2660,6,
	219,-1,0,2660,2661,3,440,220,0,2661,2667,1,0,0,0,2662,2663,10,1,0,0,2663,
	2664,5,87,0,0,2664,2666,3,440,220,0,2665,2662,1,0,0,0,2666,2669,1,0,0,0,
	2667,2665,1,0,0,0,2667,2668,1,0,0,0,2668,439,1,0,0,0,2669,2667,1,0,0,0,
	2670,2671,6,220,-1,0,2671,2672,3,442,221,0,2672,2678,1,0,0,0,2673,2674,
	10,1,0,0,2674,2675,5,85,0,0,2675,2677,3,442,221,0,2676,2673,1,0,0,0,2677,
	2680,1,0,0,0,2678,2676,1,0,0,0,2678,2679,1,0,0,0,2679,441,1,0,0,0,2680,
	2678,1,0,0,0,2681,2682,6,221,-1,0,2682,2683,3,444,222,0,2683,2692,1,0,0,
	0,2684,2685,10,2,0,0,2685,2686,5,73,0,0,2686,2691,3,444,222,0,2687,2688,
	10,1,0,0,2688,2689,5,76,0,0,2689,2691,3,444,222,0,2690,2684,1,0,0,0,2690,
	2687,1,0,0,0,2691,2694,1,0,0,0,2692,2690,1,0,0,0,2692,2693,1,0,0,0,2693,
	443,1,0,0,0,2694,2692,1,0,0,0,2695,2696,6,222,-1,0,2696,2697,3,446,223,
	0,2697,2715,1,0,0,0,2698,2699,10,5,0,0,2699,2700,5,68,0,0,2700,2714,3,446,
	223,0,2701,2702,10,4,0,0,2702,2703,5,67,0,0,2703,2714,3,446,223,0,2704,
	2705,10,3,0,0,2705,2706,5,74,0,0,2706,2714,3,446,223,0,2707,2708,10,2,0,
	0,2708,2709,5,75,0,0,2709,2714,3,446,223,0,2710,2711,10,1,0,0,2711,2712,
	5,26,0,0,2712,2714,3,10,5,0,2713,2698,1,0,0,0,2713,2701,1,0,0,0,2713,2704,
	1,0,0,0,2713,2707,1,0,0,0,2713,2710,1,0,0,0,2714,2717,1,0,0,0,2715,2713,
	1,0,0,0,2715,2716,1,0,0,0,2716,445,1,0,0,0,2717,2715,1,0,0,0,2718,2719,
	6,223,-1,0,2719,2720,3,448,224,0,2720,2736,1,0,0,0,2721,2722,10,3,0,0,2722,
	2723,5,68,0,0,2723,2724,5,68,0,0,2724,2735,3,448,224,0,2725,2726,10,2,0,
	0,2726,2727,5,67,0,0,2727,2728,5,67,0,0,2728,2735,3,448,224,0,2729,2730,
	10,1,0,0,2730,2731,5,67,0,0,2731,2732,5,67,0,0,2732,2733,5,67,0,0,2733,
	2735,3,448,224,0,2734,2721,1,0,0,0,2734,2725,1,0,0,0,2734,2729,1,0,0,0,
	2735,2738,1,0,0,0,2736,2734,1,0,0,0,2736,2737,1,0,0,0,2737,447,1,0,0,0,
	2738,2736,1,0,0,0,2739,2740,6,224,-1,0,2740,2741,3,450,225,0,2741,2750,
	1,0,0,0,2742,2743,10,2,0,0,2743,2744,5,81,0,0,2744,2749,3,450,225,0,2745,
	2746,10,1,0,0,2746,2747,5,82,0,0,2747,2749,3,450,225,0,2748,2742,1,0,0,
	0,2748,2745,1,0,0,0,2749,2752,1,0,0,0,2750,2748,1,0,0,0,2750,2751,1,0,0,
	0,2751,449,1,0,0,0,2752,2750,1,0,0,0,2753,2754,6,225,-1,0,2754,2755,3,452,
	226,0,2755,2767,1,0,0,0,2756,2757,10,3,0,0,2757,2758,5,83,0,0,2758,2766,
	3,452,226,0,2759,2760,10,2,0,0,2760,2761,5,84,0,0,2761,2766,3,452,226,0,
	2762,2763,10,1,0,0,2763,2764,5,88,0,0,2764,2766,3,452,226,0,2765,2756,1,
	0,0,0,2765,2759,1,0,0,0,2765,2762,1,0,0,0,2766,2769,1,0,0,0,2767,2765,1,
	0,0,0,2767,2768,1,0,0,0,2768,451,1,0,0,0,2769,2767,1,0,0,0,2770,2778,3,
	454,227,0,2771,2778,3,456,228,0,2772,2773,5,81,0,0,2773,2778,3,452,226,
	0,2774,2775,5,82,0,0,2775,2778,3,452,226,0,2776,2778,3,458,229,0,2777,2770,
	1,0,0,0,2777,2771,1,0,0,0,2777,2772,1,0,0,0,2777,2774,1,0,0,0,2777,2776,
	1,0,0,0,2778,453,1,0,0,0,2779,2780,5,79,0,0,2780,2781,3,452,226,0,2781,
	455,1,0,0,0,2782,2783,5,80,0,0,2783,2784,3,452,226,0,2784,457,1,0,0,0,2785,
	2792,3,460,230,0,2786,2787,5,70,0,0,2787,2792,3,452,226,0,2788,2789,5,69,
	0,0,2789,2792,3,452,226,0,2790,2792,3,470,235,0,2791,2785,1,0,0,0,2791,
	2786,1,0,0,0,2791,2788,1,0,0,0,2791,2790,1,0,0,0,2792,459,1,0,0,0,2793,
	2796,3,350,175,0,2794,2796,3,56,28,0,2795,2793,1,0,0,0,2795,2794,1,0,0,
	0,2796,2801,1,0,0,0,2797,2800,3,464,232,0,2798,2800,3,468,234,0,2799,2797,
	1,0,0,0,2799,2798,1,0,0,0,2800,2803,1,0,0,0,2801,2799,1,0,0,0,2801,2802,
	1,0,0,0,2802,461,1,0,0,0,2803,2801,1,0,0,0,2804,2805,3,460,230,0,2805,2806,
	5,79,0,0,2806,463,1,0,0,0,2807,2808,5,79,0,0,2808,465,1,0,0,0,2809,2810,
	3,460,230,0,2810,2811,5,80,0,0,2811,467,1,0,0,0,2812,2813,5,80,0,0,2813,
	469,1,0,0,0,2814,2815,5,57,0,0,2815,2816,3,2,1,0,2816,2817,5,58,0,0,2817,
	2818,3,452,226,0,2818,2842,1,0,0,0,2819,2820,5,57,0,0,2820,2824,3,10,5,
	0,2821,2823,3,38,19,0,2822,2821,1,0,0,0,2823,2826,1,0,0,0,2824,2822,1,0,
	0,0,2824,2825,1,0,0,0,2825,2827,1,0,0,0,2826,2824,1,0,0,0,2827,2828,5,58,
	0,0,2828,2829,3,458,229,0,2829,2842,1,0,0,0,2830,2831,5,57,0,0,2831,2835,
	3,10,5,0,2832,2834,3,38,19,0,2833,2832,1,0,0,0,2834,2837,1,0,0,0,2835,2833,
	1,0,0,0,2835,2836,1,0,0,0,2836,2838,1,0,0,0,2837,2835,1,0,0,0,2838,2839,
	5,58,0,0,2839,2840,3,414,207,0,2840,2842,1,0,0,0,2841,2814,1,0,0,0,2841,
	2819,1,0,0,0,2841,2830,1,0,0,0,2842,471,1,0,0,0,322,477,484,488,492,501,
	505,509,511,517,522,529,534,536,542,547,552,557,568,582,587,595,602,608,
	613,624,627,641,646,651,656,662,672,680,690,698,710,714,719,725,733,746,
	775,779,784,790,793,796,808,819,833,840,849,856,861,876,883,889,893,897,
	901,905,910,914,918,920,925,932,937,939,945,950,954,973,978,994,999,1005,
	1011,1013,1017,1022,1026,1034,1041,1049,1052,1057,1065,1070,1077,1084,1089,
	1095,1107,1112,1116,1126,1131,1139,1142,1147,1155,1158,1163,1168,1173,1178,
	1185,1190,1198,1203,1208,1213,1219,1225,1228,1231,1240,1246,1252,1255,1258,
	1266,1271,1276,1282,1285,1296,1305,1315,1320,1331,1336,1348,1353,1365,1375,
	1380,1388,1391,1398,1406,1412,1421,1431,1435,1438,1447,1461,1464,1473,1478,
	1485,1490,1498,1510,1517,1531,1553,1587,1599,1605,1617,1630,1656,1660,1665,
	1669,1673,1681,1685,1689,1696,1705,1713,1728,1740,1746,1752,1773,1778,1784,
	1796,1807,1817,1820,1825,1834,1840,1850,1855,1864,1887,1897,1919,1926,1934,
	1942,1953,1976,1986,1997,2019,2023,2028,2036,2042,2046,2050,2054,2060,2065,
	2070,2074,2078,2084,2089,2094,2098,2102,2104,2109,2114,2119,2123,2127,2131,
	2136,2144,2150,2154,2158,2162,2168,2173,2178,2182,2186,2188,2193,2208,2222,
	2234,2243,2258,2271,2280,2286,2293,2298,2305,2310,2317,2322,2329,2334,2342,
	2347,2351,2355,2360,2367,2374,2379,2386,2391,2398,2403,2411,2416,2420,2427,
	2433,2440,2447,2454,2462,2469,2477,2481,2488,2495,2502,2510,2517,2525,2531,
	2537,2549,2555,2561,2572,2581,2588,2595,2600,2604,2613,2624,2634,2645,2656,
	2667,2678,2690,2692,2713,2715,2734,2736,2748,2750,2765,2767,2777,2791,2795,
	2799,2801,2824,2835,2841];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Java8Parser.__ATN) {
			Java8Parser.__ATN = new ATNDeserializer().deserialize(Java8Parser._serializedATN);
		}

		return Java8Parser.__ATN;
	}


	static DecisionsToDFA = Java8Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class LiteralContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IntegerLiteral(): TerminalNode {
		return this.getToken(Java8Parser.IntegerLiteral, 0);
	}
	public FloatingPointLiteral(): TerminalNode {
		return this.getToken(Java8Parser.FloatingPointLiteral, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(Java8Parser.BooleanLiteral, 0);
	}
	public CharacterLiteral(): TerminalNode {
		return this.getToken(Java8Parser.CharacterLiteral, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(Java8Parser.StringLiteral, 0);
	}
	public NullLiteral(): TerminalNode {
		return this.getToken(Java8Parser.NullLiteral, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_literal;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numericType(): NumericTypeContext {
		return this.getTypedRuleContext(NumericTypeContext, 0) as NumericTypeContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(Java8Parser.BOOLEAN, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primitiveType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimitiveType) {
	 		listener.enterPrimitiveType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimitiveType) {
	 		listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integralType(): IntegralTypeContext {
		return this.getTypedRuleContext(IntegralTypeContext, 0) as IntegralTypeContext;
	}
	public floatingPointType(): FloatingPointTypeContext {
		return this.getTypedRuleContext(FloatingPointTypeContext, 0) as FloatingPointTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_numericType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterNumericType) {
	 		listener.enterNumericType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitNumericType) {
	 		listener.exitNumericType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitNumericType) {
			return visitor.visitNumericType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegralTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BYTE(): TerminalNode {
		return this.getToken(Java8Parser.BYTE, 0);
	}
	public SHORT(): TerminalNode {
		return this.getToken(Java8Parser.SHORT, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(Java8Parser.INT, 0);
	}
	public LONG(): TerminalNode {
		return this.getToken(Java8Parser.LONG, 0);
	}
	public CHAR(): TerminalNode {
		return this.getToken(Java8Parser.CHAR, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_integralType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterIntegralType) {
	 		listener.enterIntegralType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitIntegralType) {
	 		listener.exitIntegralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitIntegralType) {
			return visitor.visitIntegralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingPointTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLOAT(): TerminalNode {
		return this.getToken(Java8Parser.FLOAT, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(Java8Parser.DOUBLE, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_floatingPointType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFloatingPointType) {
	 		listener.enterFloatingPointType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFloatingPointType) {
	 		listener.exitFloatingPointType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFloatingPointType) {
			return visitor.visitFloatingPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public typeVariable(): TypeVariableContext {
		return this.getTypedRuleContext(TypeVariableContext, 0) as TypeVariableContext;
	}
	public arrayType(): ArrayTypeContext {
		return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_referenceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterReferenceType) {
	 		listener.enterReferenceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitReferenceType) {
	 		listener.exitReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitReferenceType) {
			return visitor.visitReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassType_lfno_classOrInterfaceTypeContext, 0) as ClassType_lfno_classOrInterfaceTypeContext;
	}
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext {
		return this.getTypedRuleContext(InterfaceType_lfno_classOrInterfaceTypeContext, 0) as InterfaceType_lfno_classOrInterfaceTypeContext;
	}
	public classType_lf_classOrInterfaceType_list(): ClassType_lf_classOrInterfaceTypeContext[] {
		return this.getTypedRuleContexts(ClassType_lf_classOrInterfaceTypeContext) as ClassType_lf_classOrInterfaceTypeContext[];
	}
	public classType_lf_classOrInterfaceType(i: number): ClassType_lf_classOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassType_lf_classOrInterfaceTypeContext, i) as ClassType_lf_classOrInterfaceTypeContext;
	}
	public interfaceType_lf_classOrInterfaceType_list(): InterfaceType_lf_classOrInterfaceTypeContext[] {
		return this.getTypedRuleContexts(InterfaceType_lf_classOrInterfaceTypeContext) as InterfaceType_lf_classOrInterfaceTypeContext[];
	}
	public interfaceType_lf_classOrInterfaceType(i: number): InterfaceType_lf_classOrInterfaceTypeContext {
		return this.getTypedRuleContext(InterfaceType_lf_classOrInterfaceTypeContext, i) as InterfaceType_lf_classOrInterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassOrInterfaceType) {
	 		listener.enterClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassOrInterfaceType) {
	 		listener.exitClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassType) {
	 		listener.enterClassType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassType) {
	 		listener.exitClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classType_lf_classOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassType_lf_classOrInterfaceType) {
	 		listener.enterClassType_lf_classOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassType_lf_classOrInterfaceType) {
	 		listener.exitClassType_lf_classOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassType_lf_classOrInterfaceType) {
			return visitor.visitClassType_lf_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classType_lfno_classOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassType_lfno_classOrInterfaceType) {
	 		listener.enterClassType_lfno_classOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassType_lfno_classOrInterfaceType) {
	 		listener.exitClassType_lfno_classOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassType_lfno_classOrInterfaceType) {
			return visitor.visitClassType_lfno_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceType) {
	 		listener.enterInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceType) {
	 		listener.exitInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType) {
			return visitor.visitInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassType_lf_classOrInterfaceTypeContext, 0) as ClassType_lf_classOrInterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceType_lf_classOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceType_lf_classOrInterfaceType) {
	 		listener.enterInterfaceType_lf_classOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceType_lf_classOrInterfaceType) {
	 		listener.exitInterfaceType_lf_classOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType_lf_classOrInterfaceType) {
			return visitor.visitInterfaceType_lf_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassType_lfno_classOrInterfaceTypeContext, 0) as ClassType_lfno_classOrInterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceType_lfno_classOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceType_lfno_classOrInterfaceType) {
	 		listener.enterInterfaceType_lfno_classOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceType_lfno_classOrInterfaceType) {
	 		listener.exitInterfaceType_lfno_classOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceType_lfno_classOrInterfaceType) {
			return visitor.visitInterfaceType_lfno_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeVariableContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeVariable;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeVariable) {
	 		listener.enterTypeVariable(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeVariable) {
	 		listener.exitTypeVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeVariable) {
			return visitor.visitTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public typeVariable(): TypeVariableContext {
		return this.getTypedRuleContext(TypeVariableContext, 0) as TypeVariableContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_arrayType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimsContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.RBRACK, i);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_dims;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterDims) {
	 		listener.enterDims(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitDims) {
	 		listener.exitDims(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDims) {
			return visitor.visitDims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public typeParameterModifier_list(): TypeParameterModifierContext[] {
		return this.getTypedRuleContexts(TypeParameterModifierContext) as TypeParameterModifierContext[];
	}
	public typeParameterModifier(i: number): TypeParameterModifierContext {
		return this.getTypedRuleContext(TypeParameterModifierContext, i) as TypeParameterModifierContext;
	}
	public typeBound(): TypeBoundContext {
		return this.getTypedRuleContext(TypeBoundContext, 0) as TypeBoundContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeParameter;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeParameter) {
	 		listener.enterTypeParameter(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeParameter) {
	 		listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeParameterModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeParameterModifier) {
	 		listener.enterTypeParameterModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeParameterModifier) {
	 		listener.exitTypeParameterModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterModifier) {
			return visitor.visitTypeParameterModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(Java8Parser.EXTENDS, 0);
	}
	public typeVariable(): TypeVariableContext {
		return this.getTypedRuleContext(TypeVariableContext, 0) as TypeVariableContext;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public additionalBound_list(): AdditionalBoundContext[] {
		return this.getTypedRuleContexts(AdditionalBoundContext) as AdditionalBoundContext[];
	}
	public additionalBound(i: number): AdditionalBoundContext {
		return this.getTypedRuleContext(AdditionalBoundContext, i) as AdditionalBoundContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeBound;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeBound) {
	 		listener.enterTypeBound(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeBound) {
	 		listener.exitTypeBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionalBoundContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BITAND(): TerminalNode {
		return this.getToken(Java8Parser.BITAND, 0);
	}
	public interfaceType(): InterfaceTypeContext {
		return this.getTypedRuleContext(InterfaceTypeContext, 0) as InterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_additionalBound;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAdditionalBound) {
	 		listener.enterAdditionalBound(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAdditionalBound) {
	 		listener.exitAdditionalBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAdditionalBound) {
			return visitor.visitAdditionalBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(Java8Parser.LT, 0);
	}
	public typeArgumentList(): TypeArgumentListContext {
		return this.getTypedRuleContext(TypeArgumentListContext, 0) as TypeArgumentListContext;
	}
	public GT(): TerminalNode {
		return this.getToken(Java8Parser.GT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeArguments;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeArguments) {
	 		listener.enterTypeArguments(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeArguments) {
	 		listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeArgument_list(): TypeArgumentContext[] {
		return this.getTypedRuleContexts(TypeArgumentContext) as TypeArgumentContext[];
	}
	public typeArgument(i: number): TypeArgumentContext {
		return this.getTypedRuleContext(TypeArgumentContext, i) as TypeArgumentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeArgumentList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeArgumentList) {
	 		listener.enterTypeArgumentList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeArgumentList) {
	 		listener.exitTypeArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentList) {
			return visitor.visitTypeArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public wildcard(): WildcardContext {
		return this.getTypedRuleContext(WildcardContext, 0) as WildcardContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeArgument;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeArgument) {
	 		listener.enterTypeArgument(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeArgument) {
	 		listener.exitTypeArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public QUESTION(): TerminalNode {
		return this.getToken(Java8Parser.QUESTION, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public wildcardBounds(): WildcardBoundsContext {
		return this.getTypedRuleContext(WildcardBoundsContext, 0) as WildcardBoundsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_wildcard;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterWildcard) {
	 		listener.enterWildcard(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitWildcard) {
	 		listener.exitWildcard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitWildcard) {
			return visitor.visitWildcard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardBoundsContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(Java8Parser.EXTENDS, 0);
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java8Parser.SUPER, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_wildcardBounds;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterWildcardBounds) {
	 		listener.enterWildcardBounds(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitWildcardBounds) {
	 		listener.exitWildcardBounds(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitWildcardBounds) {
			return visitor.visitWildcardBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageNameContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public packageName(): PackageNameContext {
		return this.getTypedRuleContext(PackageNameContext, 0) as PackageNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_packageName;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPackageName) {
	 		listener.enterPackageName(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPackageName) {
	 		listener.exitPackageName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPackageName) {
			return visitor.visitPackageName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getTypedRuleContext(PackageOrTypeNameContext, 0) as PackageOrTypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeName;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeName) {
	 		listener.enterTypeName(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeName) {
	 		listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageOrTypeNameContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getTypedRuleContext(PackageOrTypeNameContext, 0) as PackageOrTypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_packageOrTypeName;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPackageOrTypeName) {
	 		listener.enterPackageOrTypeName(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPackageOrTypeName) {
	 		listener.exitPackageOrTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPackageOrTypeName) {
			return visitor.visitPackageOrTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionNameContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public ambiguousName(): AmbiguousNameContext {
		return this.getTypedRuleContext(AmbiguousNameContext, 0) as AmbiguousNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_expressionName;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterExpressionName) {
	 		listener.enterExpressionName(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitExpressionName) {
	 		listener.exitExpressionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExpressionName) {
			return visitor.visitExpressionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodNameContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodName;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodName) {
	 		listener.enterMethodName(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodName) {
	 		listener.exitMethodName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodName) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousNameContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public ambiguousName(): AmbiguousNameContext {
		return this.getTypedRuleContext(AmbiguousNameContext, 0) as AmbiguousNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_ambiguousName;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAmbiguousName) {
	 		listener.enterAmbiguousName(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAmbiguousName) {
	 		listener.exitAmbiguousName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAmbiguousName) {
			return visitor.visitAmbiguousName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(Java8Parser.EOF, 0);
	}
	public packageDeclaration(): PackageDeclarationContext {
		return this.getTypedRuleContext(PackageDeclarationContext, 0) as PackageDeclarationContext;
	}
	public importDeclaration_list(): ImportDeclarationContext[] {
		return this.getTypedRuleContexts(ImportDeclarationContext) as ImportDeclarationContext[];
	}
	public importDeclaration(i: number): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, i) as ImportDeclarationContext;
	}
	public typeDeclaration_list(): TypeDeclarationContext[] {
		return this.getTypedRuleContexts(TypeDeclarationContext) as TypeDeclarationContext[];
	}
	public typeDeclaration(i: number): TypeDeclarationContext {
		return this.getTypedRuleContext(TypeDeclarationContext, i) as TypeDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_compilationUnit;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterCompilationUnit) {
	 		listener.enterCompilationUnit(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitCompilationUnit) {
	 		listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(Java8Parser.PACKAGE, 0);
	}
	public packageName(): PackageNameContext {
		return this.getTypedRuleContext(PackageNameContext, 0) as PackageNameContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public packageModifier_list(): PackageModifierContext[] {
		return this.getTypedRuleContexts(PackageModifierContext) as PackageModifierContext[];
	}
	public packageModifier(i: number): PackageModifierContext {
		return this.getTypedRuleContext(PackageModifierContext, i) as PackageModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_packageDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPackageDeclaration) {
	 		listener.enterPackageDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPackageDeclaration) {
	 		listener.exitPackageDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_packageModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPackageModifier) {
	 		listener.enterPackageModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPackageModifier) {
	 		listener.exitPackageModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPackageModifier) {
			return visitor.visitPackageModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext {
		return this.getTypedRuleContext(SingleTypeImportDeclarationContext, 0) as SingleTypeImportDeclarationContext;
	}
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext {
		return this.getTypedRuleContext(TypeImportOnDemandDeclarationContext, 0) as TypeImportOnDemandDeclarationContext;
	}
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext {
		return this.getTypedRuleContext(SingleStaticImportDeclarationContext, 0) as SingleStaticImportDeclarationContext;
	}
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext {
		return this.getTypedRuleContext(StaticImportOnDemandDeclarationContext, 0) as StaticImportOnDemandDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_importDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterImportDeclaration) {
	 		listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitImportDeclaration) {
	 		listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTypeImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Java8Parser.IMPORT, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_singleTypeImportDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSingleTypeImportDeclaration) {
	 		listener.enterSingleTypeImportDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSingleTypeImportDeclaration) {
	 		listener.exitSingleTypeImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSingleTypeImportDeclaration) {
			return visitor.visitSingleTypeImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeImportOnDemandDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Java8Parser.IMPORT, 0);
	}
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getTypedRuleContext(PackageOrTypeNameContext, 0) as PackageOrTypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public MUL(): TerminalNode {
		return this.getToken(Java8Parser.MUL, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeImportOnDemandDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeImportOnDemandDeclaration) {
	 		listener.enterTypeImportOnDemandDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeImportOnDemandDeclaration) {
	 		listener.exitTypeImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeImportOnDemandDeclaration) {
			return visitor.visitTypeImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStaticImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Java8Parser.IMPORT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java8Parser.STATIC, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_singleStaticImportDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSingleStaticImportDeclaration) {
	 		listener.enterSingleStaticImportDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSingleStaticImportDeclaration) {
	 		listener.exitSingleStaticImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSingleStaticImportDeclaration) {
			return visitor.visitSingleStaticImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticImportOnDemandDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Java8Parser.IMPORT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java8Parser.STATIC, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public MUL(): TerminalNode {
		return this.getToken(Java8Parser.MUL, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_staticImportOnDemandDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterStaticImportOnDemandDeclaration) {
	 		listener.enterStaticImportOnDemandDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitStaticImportOnDemandDeclaration) {
	 		listener.exitStaticImportOnDemandDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStaticImportOnDemandDeclaration) {
			return visitor.visitStaticImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeDeclaration) {
	 		listener.enterTypeDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeDeclaration) {
	 		listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public normalClassDeclaration(): NormalClassDeclarationContext {
		return this.getTypedRuleContext(NormalClassDeclarationContext, 0) as NormalClassDeclarationContext;
	}
	public enumDeclaration(): EnumDeclarationContext {
		return this.getTypedRuleContext(EnumDeclarationContext, 0) as EnumDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassDeclaration) {
	 		listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassDeclaration) {
	 		listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(Java8Parser.CLASS, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
	public classModifier_list(): ClassModifierContext[] {
		return this.getTypedRuleContexts(ClassModifierContext) as ClassModifierContext[];
	}
	public classModifier(i: number): ClassModifierContext {
		return this.getTypedRuleContext(ClassModifierContext, i) as ClassModifierContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public superclass(): SuperclassContext {
		return this.getTypedRuleContext(SuperclassContext, 0) as SuperclassContext;
	}
	public superinterfaces(): SuperinterfacesContext {
		return this.getTypedRuleContext(SuperinterfacesContext, 0) as SuperinterfacesContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_normalClassDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterNormalClassDeclaration) {
	 		listener.enterNormalClassDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitNormalClassDeclaration) {
	 		listener.exitNormalClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitNormalClassDeclaration) {
			return visitor.visitNormalClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java8Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java8Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java8Parser.PRIVATE, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java8Parser.ABSTRACT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java8Parser.STATIC, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java8Parser.FINAL, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(Java8Parser.STRICTFP, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassModifier) {
	 		listener.enterClassModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassModifier) {
	 		listener.exitClassModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassModifier) {
			return visitor.visitClassModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(Java8Parser.LT, 0);
	}
	public typeParameterList(): TypeParameterListContext {
		return this.getTypedRuleContext(TypeParameterListContext, 0) as TypeParameterListContext;
	}
	public GT(): TerminalNode {
		return this.getToken(Java8Parser.GT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeParameters;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeParameters) {
	 		listener.enterTypeParameters(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeParameters) {
	 		listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeParameter_list(): TypeParameterContext[] {
		return this.getTypedRuleContexts(TypeParameterContext) as TypeParameterContext[];
	}
	public typeParameter(i: number): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, i) as TypeParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeParameterList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeParameterList) {
	 		listener.enterTypeParameterList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeParameterList) {
	 		listener.exitTypeParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeParameterList) {
			return visitor.visitTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperclassContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(Java8Parser.EXTENDS, 0);
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_superclass;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSuperclass) {
	 		listener.enterSuperclass(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSuperclass) {
	 		listener.exitSuperclass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSuperclass) {
			return visitor.visitSuperclass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperinterfacesContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPLEMENTS(): TerminalNode {
		return this.getToken(Java8Parser.IMPLEMENTS, 0);
	}
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getTypedRuleContext(InterfaceTypeListContext, 0) as InterfaceTypeListContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_superinterfaces;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSuperinterfaces) {
	 		listener.enterSuperinterfaces(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSuperinterfaces) {
	 		listener.exitSuperinterfaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSuperinterfaces) {
			return visitor.visitSuperinterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public interfaceType_list(): InterfaceTypeContext[] {
		return this.getTypedRuleContexts(InterfaceTypeContext) as InterfaceTypeContext[];
	}
	public interfaceType(i: number): InterfaceTypeContext {
		return this.getTypedRuleContext(InterfaceTypeContext, i) as InterfaceTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceTypeList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceTypeList) {
	 		listener.enterInterfaceTypeList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceTypeList) {
	 		listener.exitInterfaceTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceTypeList) {
			return visitor.visitInterfaceTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java8Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java8Parser.RBRACE, 0);
	}
	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classBody;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassBody) {
	 		listener.enterClassBody(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassBody) {
	 		listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		return this.getTypedRuleContext(ClassMemberDeclarationContext, 0) as ClassMemberDeclarationContext;
	}
	public instanceInitializer(): InstanceInitializerContext {
		return this.getTypedRuleContext(InstanceInitializerContext, 0) as InstanceInitializerContext;
	}
	public staticInitializer(): StaticInitializerContext {
		return this.getTypedRuleContext(StaticInitializerContext, 0) as StaticInitializerContext;
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getTypedRuleContext(ConstructorDeclarationContext, 0) as ConstructorDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classBodyDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassBodyDeclaration) {
	 		listener.enterClassBodyDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassBodyDeclaration) {
	 		listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public fieldDeclaration(): FieldDeclarationContext {
		return this.getTypedRuleContext(FieldDeclarationContext, 0) as FieldDeclarationContext;
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classMemberDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassMemberDeclaration) {
	 		listener.enterClassMemberDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassMemberDeclaration) {
	 		listener.exitClassMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassMemberDeclaration) {
			return visitor.visitClassMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getTypedRuleContext(VariableDeclaratorListContext, 0) as VariableDeclaratorListContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public fieldModifier_list(): FieldModifierContext[] {
		return this.getTypedRuleContexts(FieldModifierContext) as FieldModifierContext[];
	}
	public fieldModifier(i: number): FieldModifierContext {
		return this.getTypedRuleContext(FieldModifierContext, i) as FieldModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_fieldDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFieldDeclaration) {
	 		listener.enterFieldDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFieldDeclaration) {
	 		listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java8Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java8Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java8Parser.PRIVATE, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java8Parser.STATIC, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java8Parser.FINAL, 0);
	}
	public TRANSIENT(): TerminalNode {
		return this.getToken(Java8Parser.TRANSIENT, 0);
	}
	public VOLATILE(): TerminalNode {
		return this.getToken(Java8Parser.VOLATILE, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_fieldModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFieldModifier) {
	 		listener.enterFieldModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFieldModifier) {
	 		listener.exitFieldModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldModifier) {
			return visitor.visitFieldModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclarator_list(): VariableDeclaratorContext[] {
		return this.getTypedRuleContexts(VariableDeclaratorContext) as VariableDeclaratorContext[];
	}
	public variableDeclarator(i: number): VariableDeclaratorContext {
		return this.getTypedRuleContext(VariableDeclaratorContext, i) as VariableDeclaratorContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_variableDeclaratorList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterVariableDeclaratorList) {
	 		listener.enterVariableDeclaratorList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitVariableDeclaratorList) {
	 		listener.exitVariableDeclaratorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorList) {
			return visitor.visitVariableDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.ASSIGN, 0);
	}
	public variableInitializer(): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, 0) as VariableInitializerContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_variableDeclarator;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterVariableDeclarator) {
	 		listener.enterVariableDeclarator(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitVariableDeclarator) {
	 		listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_variableDeclaratorId;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterVariableDeclaratorId) {
	 		listener.enterVariableDeclaratorId(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitVariableDeclaratorId) {
	 		listener.exitVariableDeclaratorId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public arrayInitializer(): ArrayInitializerContext {
		return this.getTypedRuleContext(ArrayInitializerContext, 0) as ArrayInitializerContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_variableInitializer;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterVariableInitializer) {
	 		listener.enterVariableInitializer(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitVariableInitializer) {
	 		listener.exitVariableInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		return this.getTypedRuleContext(UnannPrimitiveTypeContext, 0) as UnannPrimitiveTypeContext;
	}
	public unannReferenceType(): UnannReferenceTypeContext {
		return this.getTypedRuleContext(UnannReferenceTypeContext, 0) as UnannReferenceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannType) {
	 		listener.enterUnannType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannType) {
	 		listener.exitUnannType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannType) {
			return visitor.visitUnannType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannPrimitiveTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numericType(): NumericTypeContext {
		return this.getTypedRuleContext(NumericTypeContext, 0) as NumericTypeContext;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(Java8Parser.BOOLEAN, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannPrimitiveType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannPrimitiveType) {
	 		listener.enterUnannPrimitiveType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannPrimitiveType) {
	 		listener.exitUnannPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannPrimitiveType) {
			return visitor.visitUnannPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannReferenceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassOrInterfaceTypeContext, 0) as UnannClassOrInterfaceTypeContext;
	}
	public unannTypeVariable(): UnannTypeVariableContext {
		return this.getTypedRuleContext(UnannTypeVariableContext, 0) as UnannTypeVariableContext;
	}
	public unannArrayType(): UnannArrayTypeContext {
		return this.getTypedRuleContext(UnannArrayTypeContext, 0) as UnannArrayTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannReferenceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannReferenceType) {
	 		listener.enterUnannReferenceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannReferenceType) {
	 		listener.exitUnannReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannReferenceType) {
			return visitor.visitUnannReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassType_lfno_unannClassOrInterfaceTypeContext, 0) as UnannClassType_lfno_unannClassOrInterfaceTypeContext;
	}
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext, 0) as UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext;
	}
	public unannClassType_lf_unannClassOrInterfaceType_list(): UnannClassType_lf_unannClassOrInterfaceTypeContext[] {
		return this.getTypedRuleContexts(UnannClassType_lf_unannClassOrInterfaceTypeContext) as UnannClassType_lf_unannClassOrInterfaceTypeContext[];
	}
	public unannClassType_lf_unannClassOrInterfaceType(i: number): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassType_lf_unannClassOrInterfaceTypeContext, i) as UnannClassType_lf_unannClassOrInterfaceTypeContext;
	}
	public unannInterfaceType_lf_unannClassOrInterfaceType_list(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[] {
		return this.getTypedRuleContexts(UnannInterfaceType_lf_unannClassOrInterfaceTypeContext) as UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[];
	}
	public unannInterfaceType_lf_unannClassOrInterfaceType(i: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannInterfaceType_lf_unannClassOrInterfaceTypeContext, i) as UnannInterfaceType_lf_unannClassOrInterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannClassOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannClassOrInterfaceType) {
	 		listener.enterUnannClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannClassOrInterfaceType) {
	 		listener.exitUnannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassOrInterfaceType) {
			return visitor.visitUnannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassOrInterfaceTypeContext, 0) as UnannClassOrInterfaceTypeContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannClassType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannClassType) {
	 		listener.enterUnannClassType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannClassType) {
	 		listener.exitUnannClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType) {
			return visitor.visitUnannClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannClassType_lf_unannClassOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannClassType_lf_unannClassOrInterfaceType) {
	 		listener.enterUnannClassType_lf_unannClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannClassType_lf_unannClassOrInterfaceType) {
	 		listener.exitUnannClassType_lf_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType_lf_unannClassOrInterfaceType) {
			return visitor.visitUnannClassType_lf_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannClassType_lfno_unannClassOrInterfaceType) {
	 		listener.enterUnannClassType_lfno_unannClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannClassType_lfno_unannClassOrInterfaceType) {
	 		listener.exitUnannClassType_lfno_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannClassType_lfno_unannClassOrInterfaceType) {
			return visitor.visitUnannClassType_lfno_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannClassType(): UnannClassTypeContext {
		return this.getTypedRuleContext(UnannClassTypeContext, 0) as UnannClassTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannInterfaceType) {
	 		listener.enterUnannInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannInterfaceType) {
	 		listener.exitUnannInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType) {
			return visitor.visitUnannInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassType_lf_unannClassOrInterfaceTypeContext, 0) as UnannClassType_lf_unannClassOrInterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannInterfaceType_lf_unannClassOrInterfaceType) {
	 		listener.enterUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannInterfaceType_lf_unannClassOrInterfaceType) {
	 		listener.exitUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType_lf_unannClassOrInterfaceType) {
			return visitor.visitUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassType_lfno_unannClassOrInterfaceTypeContext, 0) as UnannClassType_lfno_unannClassOrInterfaceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannInterfaceType_lfno_unannClassOrInterfaceType) {
	 		listener.enterUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannInterfaceType_lfno_unannClassOrInterfaceType) {
	 		listener.exitUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannInterfaceType_lfno_unannClassOrInterfaceType) {
			return visitor.visitUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeVariableContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannTypeVariable;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannTypeVariable) {
	 		listener.enterUnannTypeVariable(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannTypeVariable) {
	 		listener.exitUnannTypeVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannTypeVariable) {
			return visitor.visitUnannTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannArrayTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		return this.getTypedRuleContext(UnannPrimitiveTypeContext, 0) as UnannPrimitiveTypeContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(UnannClassOrInterfaceTypeContext, 0) as UnannClassOrInterfaceTypeContext;
	}
	public unannTypeVariable(): UnannTypeVariableContext {
		return this.getTypedRuleContext(UnannTypeVariableContext, 0) as UnannTypeVariableContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unannArrayType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnannArrayType) {
	 		listener.enterUnannArrayType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnannArrayType) {
	 		listener.exitUnannArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnannArrayType) {
			return visitor.visitUnannArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public methodHeader(): MethodHeaderContext {
		return this.getTypedRuleContext(MethodHeaderContext, 0) as MethodHeaderContext;
	}
	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}
	public methodModifier_list(): MethodModifierContext[] {
		return this.getTypedRuleContexts(MethodModifierContext) as MethodModifierContext[];
	}
	public methodModifier(i: number): MethodModifierContext {
		return this.getTypedRuleContext(MethodModifierContext, i) as MethodModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodDeclaration) {
	 		listener.enterMethodDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodDeclaration) {
	 		listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java8Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java8Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java8Parser.PRIVATE, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java8Parser.ABSTRACT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java8Parser.STATIC, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java8Parser.FINAL, 0);
	}
	public SYNCHRONIZED(): TerminalNode {
		return this.getToken(Java8Parser.SYNCHRONIZED, 0);
	}
	public NATIVE(): TerminalNode {
		return this.getToken(Java8Parser.NATIVE, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(Java8Parser.STRICTFP, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodModifier) {
	 		listener.enterMethodModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodModifier) {
	 		listener.exitMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodModifier) {
			return visitor.visitMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodHeaderContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public result(): ResultContext {
		return this.getTypedRuleContext(ResultContext, 0) as ResultContext;
	}
	public methodDeclarator(): MethodDeclaratorContext {
		return this.getTypedRuleContext(MethodDeclaratorContext, 0) as MethodDeclaratorContext;
	}
	public throws_(): Throws_Context {
		return this.getTypedRuleContext(Throws_Context, 0) as Throws_Context;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodHeader;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodHeader) {
	 		listener.enterMethodHeader(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodHeader) {
	 		listener.exitMethodHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodHeader) {
			return visitor.visitMethodHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public VOID(): TerminalNode {
		return this.getToken(Java8Parser.VOID, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_result;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterResult) {
	 		listener.enterResult(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitResult) {
	 		listener.exitResult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclaratorContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodDeclarator;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodDeclarator) {
	 		listener.enterMethodDeclarator(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodDeclarator) {
	 		listener.exitMethodDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclarator) {
			return visitor.visitMethodDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public receiverParameter(): ReceiverParameterContext {
		return this.getTypedRuleContext(ReceiverParameterContext, 0) as ReceiverParameterContext;
	}
	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Java8Parser.COMMA, 0);
	}
	public lastFormalParameter(): LastFormalParameterContext {
		return this.getTypedRuleContext(LastFormalParameterContext, 0) as LastFormalParameterContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_formalParameterList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFormalParameterList) {
	 		listener.enterFormalParameterList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFormalParameterList) {
	 		listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameter_list(): FormalParameterContext[] {
		return this.getTypedRuleContexts(FormalParameterContext) as FormalParameterContext[];
	}
	public formalParameter(i: number): FormalParameterContext {
		return this.getTypedRuleContext(FormalParameterContext, i) as FormalParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
	public receiverParameter(): ReceiverParameterContext {
		return this.getTypedRuleContext(ReceiverParameterContext, 0) as ReceiverParameterContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_formalParameters;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFormalParameters) {
	 		listener.enterFormalParameters(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFormalParameters) {
	 		listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_formalParameter;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFormalParameter) {
	 		listener.enterFormalParameter(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFormalParameter) {
	 		listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java8Parser.FINAL, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_variableModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterVariableModifier) {
	 		listener.enterVariableModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitVariableModifier) {
	 		listener.exitVariableModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(Java8Parser.ELLIPSIS, 0);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public formalParameter(): FormalParameterContext {
		return this.getTypedRuleContext(FormalParameterContext, 0) as FormalParameterContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_lastFormalParameter;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLastFormalParameter) {
	 		listener.enterLastFormalParameter(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLastFormalParameter) {
	 		listener.exitLastFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameter) {
			return visitor.visitLastFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverParameterContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public THIS(): TerminalNode {
		return this.getToken(Java8Parser.THIS, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_receiverParameter;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterReceiverParameter) {
	 		listener.enterReceiverParameter(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitReceiverParameter) {
	 		listener.exitReceiverParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitReceiverParameter) {
			return visitor.visitReceiverParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Throws_Context extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THROWS(): TerminalNode {
		return this.getToken(Java8Parser.THROWS, 0);
	}
	public exceptionTypeList(): ExceptionTypeListContext {
		return this.getTypedRuleContext(ExceptionTypeListContext, 0) as ExceptionTypeListContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_throws_;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterThrows_) {
	 		listener.enterThrows_(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitThrows_) {
	 		listener.exitThrows_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitThrows_) {
			return visitor.visitThrows_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exceptionType_list(): ExceptionTypeContext[] {
		return this.getTypedRuleContexts(ExceptionTypeContext) as ExceptionTypeContext[];
	}
	public exceptionType(i: number): ExceptionTypeContext {
		return this.getTypedRuleContext(ExceptionTypeContext, i) as ExceptionTypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_exceptionTypeList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterExceptionTypeList) {
	 		listener.enterExceptionTypeList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitExceptionTypeList) {
	 		listener.exitExceptionTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExceptionTypeList) {
			return visitor.visitExceptionTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
	public typeVariable(): TypeVariableContext {
		return this.getTypedRuleContext(TypeVariableContext, 0) as TypeVariableContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_exceptionType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterExceptionType) {
	 		listener.enterExceptionType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitExceptionType) {
	 		listener.exitExceptionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExceptionType) {
			return visitor.visitExceptionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodBody;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodBody) {
	 		listener.enterMethodBody(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodBody) {
	 		listener.exitMethodBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceInitializerContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_instanceInitializer;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInstanceInitializer) {
	 		listener.enterInstanceInitializer(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInstanceInitializer) {
	 		listener.exitInstanceInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInstanceInitializer) {
			return visitor.visitInstanceInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticInitializerContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java8Parser.STATIC, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_staticInitializer;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterStaticInitializer) {
	 		listener.enterStaticInitializer(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitStaticInitializer) {
	 		listener.exitStaticInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStaticInitializer) {
			return visitor.visitStaticInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constructorDeclarator(): ConstructorDeclaratorContext {
		return this.getTypedRuleContext(ConstructorDeclaratorContext, 0) as ConstructorDeclaratorContext;
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getTypedRuleContext(ConstructorBodyContext, 0) as ConstructorBodyContext;
	}
	public constructorModifier_list(): ConstructorModifierContext[] {
		return this.getTypedRuleContexts(ConstructorModifierContext) as ConstructorModifierContext[];
	}
	public constructorModifier(i: number): ConstructorModifierContext {
		return this.getTypedRuleContext(ConstructorModifierContext, i) as ConstructorModifierContext;
	}
	public throws_(): Throws_Context {
		return this.getTypedRuleContext(Throws_Context, 0) as Throws_Context;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_constructorDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConstructorDeclaration) {
	 		listener.enterConstructorDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConstructorDeclaration) {
	 		listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java8Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java8Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java8Parser.PRIVATE, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_constructorModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConstructorModifier) {
	 		listener.enterConstructorModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConstructorModifier) {
	 		listener.exitConstructorModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstructorModifier) {
			return visitor.visitConstructorModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclaratorContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simpleTypeName(): SimpleTypeNameContext {
		return this.getTypedRuleContext(SimpleTypeNameContext, 0) as SimpleTypeNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_constructorDeclarator;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConstructorDeclarator) {
	 		listener.enterConstructorDeclarator(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConstructorDeclarator) {
	 		listener.exitConstructorDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclarator) {
			return visitor.visitConstructorDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeNameContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_simpleTypeName;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSimpleTypeName) {
	 		listener.enterSimpleTypeName(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSimpleTypeName) {
	 		listener.exitSimpleTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSimpleTypeName) {
			return visitor.visitSimpleTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorBodyContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java8Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java8Parser.RBRACE, 0);
	}
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		return this.getTypedRuleContext(ExplicitConstructorInvocationContext, 0) as ExplicitConstructorInvocationContext;
	}
	public blockStatements(): BlockStatementsContext {
		return this.getTypedRuleContext(BlockStatementsContext, 0) as BlockStatementsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_constructorBody;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConstructorBody) {
	 		listener.enterConstructorBody(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConstructorBody) {
	 		listener.exitConstructorBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstructorBody) {
			return visitor.visitConstructorBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitConstructorInvocationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THIS(): TerminalNode {
		return this.getToken(Java8Parser.THIS, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java8Parser.SUPER, 0);
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_explicitConstructorInvocation;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterExplicitConstructorInvocation) {
	 		listener.enterExplicitConstructorInvocation(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitExplicitConstructorInvocation) {
	 		listener.exitExplicitConstructorInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExplicitConstructorInvocation) {
			return visitor.visitExplicitConstructorInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(Java8Parser.ENUM, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public enumBody(): EnumBodyContext {
		return this.getTypedRuleContext(EnumBodyContext, 0) as EnumBodyContext;
	}
	public classModifier_list(): ClassModifierContext[] {
		return this.getTypedRuleContexts(ClassModifierContext) as ClassModifierContext[];
	}
	public classModifier(i: number): ClassModifierContext {
		return this.getTypedRuleContext(ClassModifierContext, i) as ClassModifierContext;
	}
	public superinterfaces(): SuperinterfacesContext {
		return this.getTypedRuleContext(SuperinterfacesContext, 0) as SuperinterfacesContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_enumDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEnumDeclaration) {
	 		listener.enterEnumDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEnumDeclaration) {
	 		listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java8Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java8Parser.RBRACE, 0);
	}
	public enumConstantList(): EnumConstantListContext {
		return this.getTypedRuleContext(EnumConstantListContext, 0) as EnumConstantListContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Java8Parser.COMMA, 0);
	}
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		return this.getTypedRuleContext(EnumBodyDeclarationsContext, 0) as EnumBodyDeclarationsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_enumBody;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEnumBody) {
	 		listener.enterEnumBody(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEnumBody) {
	 		listener.exitEnumBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumConstant_list(): EnumConstantContext[] {
		return this.getTypedRuleContexts(EnumConstantContext) as EnumConstantContext[];
	}
	public enumConstant(i: number): EnumConstantContext {
		return this.getTypedRuleContext(EnumConstantContext, i) as EnumConstantContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_enumConstantList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEnumConstantList) {
	 		listener.enterEnumConstantList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEnumConstantList) {
	 		listener.exitEnumConstantList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantList) {
			return visitor.visitEnumConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public enumConstantModifier_list(): EnumConstantModifierContext[] {
		return this.getTypedRuleContexts(EnumConstantModifierContext) as EnumConstantModifierContext[];
	}
	public enumConstantModifier(i: number): EnumConstantModifierContext {
		return this.getTypedRuleContext(EnumConstantModifierContext, i) as EnumConstantModifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_enumConstant;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEnumConstant) {
	 		listener.enterEnumConstant(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEnumConstant) {
	 		listener.exitEnumConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_enumConstantModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEnumConstantModifier) {
	 		listener.enterEnumConstantModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEnumConstantModifier) {
	 		listener.exitEnumConstantModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantModifier) {
			return visitor.visitEnumConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_enumBodyDeclarations;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEnumBodyDeclarations) {
	 		listener.enterEnumBodyDeclarations(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEnumBodyDeclarations) {
	 		listener.exitEnumBodyDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		return this.getTypedRuleContext(NormalInterfaceDeclarationContext, 0) as NormalInterfaceDeclarationContext;
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeDeclarationContext, 0) as AnnotationTypeDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceDeclaration) {
	 		listener.enterInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceDeclaration) {
	 		listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalInterfaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(Java8Parser.INTERFACE, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getTypedRuleContext(InterfaceBodyContext, 0) as InterfaceBodyContext;
	}
	public interfaceModifier_list(): InterfaceModifierContext[] {
		return this.getTypedRuleContexts(InterfaceModifierContext) as InterfaceModifierContext[];
	}
	public interfaceModifier(i: number): InterfaceModifierContext {
		return this.getTypedRuleContext(InterfaceModifierContext, i) as InterfaceModifierContext;
	}
	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}
	public extendsInterfaces(): ExtendsInterfacesContext {
		return this.getTypedRuleContext(ExtendsInterfacesContext, 0) as ExtendsInterfacesContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_normalInterfaceDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterNormalInterfaceDeclaration) {
	 		listener.enterNormalInterfaceDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitNormalInterfaceDeclaration) {
	 		listener.exitNormalInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitNormalInterfaceDeclaration) {
			return visitor.visitNormalInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java8Parser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(Java8Parser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(Java8Parser.PRIVATE, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java8Parser.ABSTRACT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java8Parser.STATIC, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(Java8Parser.STRICTFP, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceModifier) {
	 		listener.enterInterfaceModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceModifier) {
	 		listener.exitInterfaceModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceModifier) {
			return visitor.visitInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendsInterfacesContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(Java8Parser.EXTENDS, 0);
	}
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getTypedRuleContext(InterfaceTypeListContext, 0) as InterfaceTypeListContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_extendsInterfaces;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterExtendsInterfaces) {
	 		listener.enterExtendsInterfaces(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitExtendsInterfaces) {
	 		listener.exitExtendsInterfaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExtendsInterfaces) {
			return visitor.visitExtendsInterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java8Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java8Parser.RBRACE, 0);
	}
	public interfaceMemberDeclaration_list(): InterfaceMemberDeclarationContext[] {
		return this.getTypedRuleContexts(InterfaceMemberDeclarationContext) as InterfaceMemberDeclarationContext[];
	}
	public interfaceMemberDeclaration(i: number): InterfaceMemberDeclarationContext {
		return this.getTypedRuleContext(InterfaceMemberDeclarationContext, i) as InterfaceMemberDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceBody;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceBody) {
	 		listener.enterInterfaceBody(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceBody) {
	 		listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constantDeclaration(): ConstantDeclarationContext {
		return this.getTypedRuleContext(ConstantDeclarationContext, 0) as ConstantDeclarationContext;
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		return this.getTypedRuleContext(InterfaceMethodDeclarationContext, 0) as InterfaceMethodDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceMemberDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceMemberDeclaration) {
	 		listener.enterInterfaceMemberDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceMemberDeclaration) {
	 		listener.exitInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getTypedRuleContext(VariableDeclaratorListContext, 0) as VariableDeclaratorListContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public constantModifier_list(): ConstantModifierContext[] {
		return this.getTypedRuleContexts(ConstantModifierContext) as ConstantModifierContext[];
	}
	public constantModifier(i: number): ConstantModifierContext {
		return this.getTypedRuleContext(ConstantModifierContext, i) as ConstantModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_constantDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConstantDeclaration) {
	 		listener.enterConstantDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConstantDeclaration) {
	 		listener.exitConstantDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclaration) {
			return visitor.visitConstantDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java8Parser.PUBLIC, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java8Parser.STATIC, 0);
	}
	public FINAL(): TerminalNode {
		return this.getToken(Java8Parser.FINAL, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_constantModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConstantModifier) {
	 		listener.enterConstantModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConstantModifier) {
	 		listener.exitConstantModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstantModifier) {
			return visitor.visitConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public methodHeader(): MethodHeaderContext {
		return this.getTypedRuleContext(MethodHeaderContext, 0) as MethodHeaderContext;
	}
	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}
	public interfaceMethodModifier_list(): InterfaceMethodModifierContext[] {
		return this.getTypedRuleContexts(InterfaceMethodModifierContext) as InterfaceMethodModifierContext[];
	}
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext {
		return this.getTypedRuleContext(InterfaceMethodModifierContext, i) as InterfaceMethodModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceMethodDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceMethodDeclaration) {
	 		listener.enterInterfaceMethodDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceMethodDeclaration) {
	 		listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java8Parser.PUBLIC, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java8Parser.ABSTRACT, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(Java8Parser.DEFAULT, 0);
	}
	public STATIC(): TerminalNode {
		return this.getToken(Java8Parser.STATIC, 0);
	}
	public STRICTFP(): TerminalNode {
		return this.getToken(Java8Parser.STRICTFP, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_interfaceMethodModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInterfaceMethodModifier) {
	 		listener.enterInterfaceMethodModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInterfaceMethodModifier) {
	 		listener.exitInterfaceMethodModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodModifier) {
			return visitor.visitInterfaceMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(Java8Parser.AT, 0);
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(Java8Parser.INTERFACE, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getTypedRuleContext(AnnotationTypeBodyContext, 0) as AnnotationTypeBodyContext;
	}
	public interfaceModifier_list(): InterfaceModifierContext[] {
		return this.getTypedRuleContexts(InterfaceModifierContext) as InterfaceModifierContext[];
	}
	public interfaceModifier(i: number): InterfaceModifierContext {
		return this.getTypedRuleContext(InterfaceModifierContext, i) as InterfaceModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_annotationTypeDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAnnotationTypeDeclaration) {
	 		listener.enterAnnotationTypeDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAnnotationTypeDeclaration) {
	 		listener.exitAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) {
			return visitor.visitAnnotationTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java8Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java8Parser.RBRACE, 0);
	}
	public annotationTypeMemberDeclaration_list(): AnnotationTypeMemberDeclarationContext[] {
		return this.getTypedRuleContexts(AnnotationTypeMemberDeclarationContext) as AnnotationTypeMemberDeclarationContext[];
	}
	public annotationTypeMemberDeclaration(i: number): AnnotationTypeMemberDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeMemberDeclarationContext, i) as AnnotationTypeMemberDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_annotationTypeBody;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAnnotationTypeBody) {
	 		listener.enterAnnotationTypeBody(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAnnotationTypeBody) {
	 		listener.exitAnnotationTypeBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) {
			return visitor.visitAnnotationTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		return this.getTypedRuleContext(AnnotationTypeElementDeclarationContext, 0) as AnnotationTypeElementDeclarationContext;
	}
	public constantDeclaration(): ConstantDeclarationContext {
		return this.getTypedRuleContext(ConstantDeclarationContext, 0) as ConstantDeclarationContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public interfaceDeclaration(): InterfaceDeclarationContext {
		return this.getTypedRuleContext(InterfaceDeclarationContext, 0) as InterfaceDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_annotationTypeMemberDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAnnotationTypeMemberDeclaration) {
	 		listener.enterAnnotationTypeMemberDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAnnotationTypeMemberDeclaration) {
	 		listener.exitAnnotationTypeMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeMemberDeclaration) {
			return visitor.visitAnnotationTypeMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public annotationTypeElementModifier_list(): AnnotationTypeElementModifierContext[] {
		return this.getTypedRuleContexts(AnnotationTypeElementModifierContext) as AnnotationTypeElementModifierContext[];
	}
	public annotationTypeElementModifier(i: number): AnnotationTypeElementModifierContext {
		return this.getTypedRuleContext(AnnotationTypeElementModifierContext, i) as AnnotationTypeElementModifierContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
	public defaultValue(): DefaultValueContext {
		return this.getTypedRuleContext(DefaultValueContext, 0) as DefaultValueContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_annotationTypeElementDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAnnotationTypeElementDeclaration) {
	 		listener.enterAnnotationTypeElementDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAnnotationTypeElementDeclaration) {
	 		listener.exitAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) {
			return visitor.visitAnnotationTypeElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementModifierContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(Java8Parser.PUBLIC, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(Java8Parser.ABSTRACT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_annotationTypeElementModifier;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAnnotationTypeElementModifier) {
	 		listener.enterAnnotationTypeElementModifier(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAnnotationTypeElementModifier) {
	 		listener.exitAnnotationTypeElementModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementModifier) {
			return visitor.visitAnnotationTypeElementModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(Java8Parser.DEFAULT, 0);
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_defaultValue;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterDefaultValue) {
	 		listener.enterDefaultValue(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitDefaultValue) {
	 		listener.exitDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public normalAnnotation(): NormalAnnotationContext {
		return this.getTypedRuleContext(NormalAnnotationContext, 0) as NormalAnnotationContext;
	}
	public markerAnnotation(): MarkerAnnotationContext {
		return this.getTypedRuleContext(MarkerAnnotationContext, 0) as MarkerAnnotationContext;
	}
	public singleElementAnnotation(): SingleElementAnnotationContext {
		return this.getTypedRuleContext(SingleElementAnnotationContext, 0) as SingleElementAnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_annotation;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAnnotation) {
	 		listener.enterAnnotation(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAnnotation) {
	 		listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalAnnotationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(Java8Parser.AT, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public elementValuePairList(): ElementValuePairListContext {
		return this.getTypedRuleContext(ElementValuePairListContext, 0) as ElementValuePairListContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_normalAnnotation;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterNormalAnnotation) {
	 		listener.enterNormalAnnotation(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitNormalAnnotation) {
	 		listener.exitNormalAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitNormalAnnotation) {
			return visitor.visitNormalAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementValuePair_list(): ElementValuePairContext[] {
		return this.getTypedRuleContexts(ElementValuePairContext) as ElementValuePairContext[];
	}
	public elementValuePair(i: number): ElementValuePairContext {
		return this.getTypedRuleContext(ElementValuePairContext, i) as ElementValuePairContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_elementValuePairList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterElementValuePairList) {
	 		listener.enterElementValuePairList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitElementValuePairList) {
	 		listener.exitElementValuePairList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairList) {
			return visitor.visitElementValuePairList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.ASSIGN, 0);
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_elementValuePair;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterElementValuePair) {
	 		listener.enterElementValuePair(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitElementValuePair) {
	 		listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		return this.getTypedRuleContext(ElementValueArrayInitializerContext, 0) as ElementValueArrayInitializerContext;
	}
	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_elementValue;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterElementValue) {
	 		listener.enterElementValue(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitElementValue) {
	 		listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java8Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java8Parser.RBRACE, 0);
	}
	public elementValueList(): ElementValueListContext {
		return this.getTypedRuleContext(ElementValueListContext, 0) as ElementValueListContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Java8Parser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_elementValueArrayInitializer;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterElementValueArrayInitializer) {
	 		listener.enterElementValueArrayInitializer(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitElementValueArrayInitializer) {
	 		listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementValue_list(): ElementValueContext[] {
		return this.getTypedRuleContexts(ElementValueContext) as ElementValueContext[];
	}
	public elementValue(i: number): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, i) as ElementValueContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_elementValueList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterElementValueList) {
	 		listener.enterElementValueList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitElementValueList) {
	 		listener.exitElementValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitElementValueList) {
			return visitor.visitElementValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MarkerAnnotationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(Java8Parser.AT, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_markerAnnotation;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMarkerAnnotation) {
	 		listener.enterMarkerAnnotation(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMarkerAnnotation) {
	 		listener.exitMarkerAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMarkerAnnotation) {
			return visitor.visitMarkerAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleElementAnnotationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(Java8Parser.AT, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_singleElementAnnotation;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSingleElementAnnotation) {
	 		listener.enterSingleElementAnnotation(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSingleElementAnnotation) {
	 		listener.exitSingleElementAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSingleElementAnnotation) {
			return visitor.visitSingleElementAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java8Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java8Parser.RBRACE, 0);
	}
	public variableInitializerList(): VariableInitializerListContext {
		return this.getTypedRuleContext(VariableInitializerListContext, 0) as VariableInitializerListContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Java8Parser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_arrayInitializer;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterArrayInitializer) {
	 		listener.enterArrayInitializer(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitArrayInitializer) {
	 		listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableInitializer_list(): VariableInitializerContext[] {
		return this.getTypedRuleContexts(VariableInitializerContext) as VariableInitializerContext[];
	}
	public variableInitializer(i: number): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, i) as VariableInitializerContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_variableInitializerList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterVariableInitializerList) {
	 		listener.enterVariableInitializerList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitVariableInitializerList) {
	 		listener.exitVariableInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializerList) {
			return visitor.visitVariableInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java8Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java8Parser.RBRACE, 0);
	}
	public blockStatements(): BlockStatementsContext {
		return this.getTypedRuleContext(BlockStatementsContext, 0) as BlockStatementsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_block;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementsContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_blockStatements;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterBlockStatements) {
	 		listener.enterBlockStatements(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitBlockStatements) {
	 		listener.exitBlockStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBlockStatements) {
			return visitor.visitBlockStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		return this.getTypedRuleContext(LocalVariableDeclarationStatementContext, 0) as LocalVariableDeclarationStatementContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_blockStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterBlockStatement) {
	 		listener.enterBlockStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitBlockStatement) {
	 		listener.exitBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_localVariableDeclarationStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLocalVariableDeclarationStatement) {
	 		listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLocalVariableDeclarationStatement) {
	 		listener.exitLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getTypedRuleContext(VariableDeclaratorListContext, 0) as VariableDeclaratorListContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_localVariableDeclaration;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLocalVariableDeclaration) {
	 		listener.enterLocalVariableDeclaration(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLocalVariableDeclaration) {
	 		listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		return this.getTypedRuleContext(StatementWithoutTrailingSubstatementContext, 0) as StatementWithoutTrailingSubstatementContext;
	}
	public labeledStatement(): LabeledStatementContext {
		return this.getTypedRuleContext(LabeledStatementContext, 0) as LabeledStatementContext;
	}
	public ifThenStatement(): IfThenStatementContext {
		return this.getTypedRuleContext(IfThenStatementContext, 0) as IfThenStatementContext;
	}
	public ifThenElseStatement(): IfThenElseStatementContext {
		return this.getTypedRuleContext(IfThenElseStatementContext, 0) as IfThenElseStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public forStatement(): ForStatementContext {
		return this.getTypedRuleContext(ForStatementContext, 0) as ForStatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_statement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		return this.getTypedRuleContext(StatementWithoutTrailingSubstatementContext, 0) as StatementWithoutTrailingSubstatementContext;
	}
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext {
		return this.getTypedRuleContext(LabeledStatementNoShortIfContext, 0) as LabeledStatementNoShortIfContext;
	}
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext {
		return this.getTypedRuleContext(IfThenElseStatementNoShortIfContext, 0) as IfThenElseStatementNoShortIfContext;
	}
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext {
		return this.getTypedRuleContext(WhileStatementNoShortIfContext, 0) as WhileStatementNoShortIfContext;
	}
	public forStatementNoShortIf(): ForStatementNoShortIfContext {
		return this.getTypedRuleContext(ForStatementNoShortIfContext, 0) as ForStatementNoShortIfContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_statementNoShortIf;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterStatementNoShortIf) {
	 		listener.enterStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitStatementNoShortIf) {
	 		listener.exitStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatementNoShortIf) {
			return visitor.visitStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementWithoutTrailingSubstatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public assertStatement(): AssertStatementContext {
		return this.getTypedRuleContext(AssertStatementContext, 0) as AssertStatementContext;
	}
	public switchStatement(): SwitchStatementContext {
		return this.getTypedRuleContext(SwitchStatementContext, 0) as SwitchStatementContext;
	}
	public doStatement(): DoStatementContext {
		return this.getTypedRuleContext(DoStatementContext, 0) as DoStatementContext;
	}
	public breakStatement(): BreakStatementContext {
		return this.getTypedRuleContext(BreakStatementContext, 0) as BreakStatementContext;
	}
	public continueStatement(): ContinueStatementContext {
		return this.getTypedRuleContext(ContinueStatementContext, 0) as ContinueStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public synchronizedStatement(): SynchronizedStatementContext {
		return this.getTypedRuleContext(SynchronizedStatementContext, 0) as SynchronizedStatementContext;
	}
	public throwStatement(): ThrowStatementContext {
		return this.getTypedRuleContext(ThrowStatementContext, 0) as ThrowStatementContext;
	}
	public tryStatement(): TryStatementContext {
		return this.getTypedRuleContext(TryStatementContext, 0) as TryStatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_statementWithoutTrailingSubstatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterStatementWithoutTrailingSubstatement) {
	 		listener.enterStatementWithoutTrailingSubstatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitStatementWithoutTrailingSubstatement) {
	 		listener.exitStatementWithoutTrailingSubstatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatementWithoutTrailingSubstatement) {
			return visitor.visitStatementWithoutTrailingSubstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_emptyStatement_;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEmptyStatement_) {
	 		listener.enterEmptyStatement_(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEmptyStatement_) {
	 		listener.exitEmptyStatement_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(Java8Parser.COLON, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_labeledStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLabeledStatement) {
	 		listener.enterLabeledStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLabeledStatement) {
	 		listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(Java8Parser.COLON, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_labeledStatementNoShortIf;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLabeledStatementNoShortIf) {
	 		listener.enterLabeledStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLabeledStatementNoShortIf) {
	 		listener.exitLabeledStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatementNoShortIf) {
			return visitor.visitLabeledStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementExpression(): StatementExpressionContext {
		return this.getTypedRuleContext(StatementExpressionContext, 0) as StatementExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_expressionStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
	public preIncrementExpression(): PreIncrementExpressionContext {
		return this.getTypedRuleContext(PreIncrementExpressionContext, 0) as PreIncrementExpressionContext;
	}
	public preDecrementExpression(): PreDecrementExpressionContext {
		return this.getTypedRuleContext(PreDecrementExpressionContext, 0) as PreDecrementExpressionContext;
	}
	public postIncrementExpression(): PostIncrementExpressionContext {
		return this.getTypedRuleContext(PostIncrementExpressionContext, 0) as PostIncrementExpressionContext;
	}
	public postDecrementExpression(): PostDecrementExpressionContext {
		return this.getTypedRuleContext(PostDecrementExpressionContext, 0) as PostDecrementExpressionContext;
	}
	public methodInvocation(): MethodInvocationContext {
		return this.getTypedRuleContext(MethodInvocationContext, 0) as MethodInvocationContext;
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		return this.getTypedRuleContext(ClassInstanceCreationExpressionContext, 0) as ClassInstanceCreationExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_statementExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterStatementExpression) {
	 		listener.enterStatementExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitStatementExpression) {
	 		listener.exitStatementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatementExpression) {
			return visitor.visitStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(Java8Parser.IF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_ifThenStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterIfThenStatement) {
	 		listener.enterIfThenStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitIfThenStatement) {
	 		listener.exitIfThenStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitIfThenStatement) {
			return visitor.visitIfThenStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(Java8Parser.IF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(Java8Parser.ELSE, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_ifThenElseStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterIfThenElseStatement) {
	 		listener.enterIfThenElseStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitIfThenElseStatement) {
	 		listener.exitIfThenElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatement) {
			return visitor.visitIfThenElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(Java8Parser.IF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public statementNoShortIf_list(): StatementNoShortIfContext[] {
		return this.getTypedRuleContexts(StatementNoShortIfContext) as StatementNoShortIfContext[];
	}
	public statementNoShortIf(i: number): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, i) as StatementNoShortIfContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(Java8Parser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_ifThenElseStatementNoShortIf;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterIfThenElseStatementNoShortIf) {
	 		listener.enterIfThenElseStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitIfThenElseStatementNoShortIf) {
	 		listener.exitIfThenElseStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitIfThenElseStatementNoShortIf) {
			return visitor.visitIfThenElseStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(Java8Parser.ASSERT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(Java8Parser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_assertStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAssertStatement) {
	 		listener.enterAssertStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAssertStatement) {
	 		listener.exitAssertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SWITCH(): TerminalNode {
		return this.getToken(Java8Parser.SWITCH, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public switchBlock(): SwitchBlockContext {
		return this.getTypedRuleContext(SwitchBlockContext, 0) as SwitchBlockContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_switchStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSwitchStatement) {
	 		listener.enterSwitchStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSwitchStatement) {
	 		listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(Java8Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(Java8Parser.RBRACE, 0);
	}
	public switchBlockStatementGroup_list(): SwitchBlockStatementGroupContext[] {
		return this.getTypedRuleContexts(SwitchBlockStatementGroupContext) as SwitchBlockStatementGroupContext[];
	}
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext {
		return this.getTypedRuleContext(SwitchBlockStatementGroupContext, i) as SwitchBlockStatementGroupContext;
	}
	public switchLabel_list(): SwitchLabelContext[] {
		return this.getTypedRuleContexts(SwitchLabelContext) as SwitchLabelContext[];
	}
	public switchLabel(i: number): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, i) as SwitchLabelContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_switchBlock;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSwitchBlock) {
	 		listener.enterSwitchBlock(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSwitchBlock) {
	 		listener.exitSwitchBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlock) {
			return visitor.visitSwitchBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public switchLabels(): SwitchLabelsContext {
		return this.getTypedRuleContext(SwitchLabelsContext, 0) as SwitchLabelsContext;
	}
	public blockStatements(): BlockStatementsContext {
		return this.getTypedRuleContext(BlockStatementsContext, 0) as BlockStatementsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_switchBlockStatementGroup;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSwitchBlockStatementGroup) {
	 		listener.enterSwitchBlockStatementGroup(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSwitchBlockStatementGroup) {
	 		listener.exitSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelsContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public switchLabel_list(): SwitchLabelContext[] {
		return this.getTypedRuleContexts(SwitchLabelContext) as SwitchLabelContext[];
	}
	public switchLabel(i: number): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, i) as SwitchLabelContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_switchLabels;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSwitchLabels) {
	 		listener.enterSwitchLabels(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSwitchLabels) {
	 		listener.exitSwitchLabels(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabels) {
			return visitor.visitSwitchLabels(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(Java8Parser.CASE, 0);
	}
	public constantExpression(): ConstantExpressionContext {
		return this.getTypedRuleContext(ConstantExpressionContext, 0) as ConstantExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Java8Parser.COLON, 0);
	}
	public enumConstantName(): EnumConstantNameContext {
		return this.getTypedRuleContext(EnumConstantNameContext, 0) as EnumConstantNameContext;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(Java8Parser.DEFAULT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_switchLabel;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSwitchLabel) {
	 		listener.enterSwitchLabel(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSwitchLabel) {
	 		listener.exitSwitchLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantNameContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_enumConstantName;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEnumConstantName) {
	 		listener.enterEnumConstantName(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEnumConstantName) {
	 		listener.exitEnumConstantName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnumConstantName) {
			return visitor.visitEnumConstantName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(Java8Parser.WHILE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_whileStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(Java8Parser.WHILE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_whileStatementNoShortIf;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterWhileStatementNoShortIf) {
	 		listener.enterWhileStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitWhileStatementNoShortIf) {
	 		listener.exitWhileStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitWhileStatementNoShortIf) {
			return visitor.visitWhileStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DO(): TerminalNode {
		return this.getToken(Java8Parser.DO, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public WHILE(): TerminalNode {
		return this.getToken(Java8Parser.WHILE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_doStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterDoStatement) {
	 		listener.enterDoStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitDoStatement) {
	 		listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basicForStatement(): BasicForStatementContext {
		return this.getTypedRuleContext(BasicForStatementContext, 0) as BasicForStatementContext;
	}
	public enhancedForStatement(): EnhancedForStatementContext {
		return this.getTypedRuleContext(EnhancedForStatementContext, 0) as EnhancedForStatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_forStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterForStatement) {
	 		listener.enterForStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitForStatement) {
	 		listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext {
		return this.getTypedRuleContext(BasicForStatementNoShortIfContext, 0) as BasicForStatementNoShortIfContext;
	}
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext {
		return this.getTypedRuleContext(EnhancedForStatementNoShortIfContext, 0) as EnhancedForStatementNoShortIfContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_forStatementNoShortIf;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterForStatementNoShortIf) {
	 		listener.enterForStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitForStatementNoShortIf) {
	 		listener.exitForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitForStatementNoShortIf) {
			return visitor.visitForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Java8Parser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(Java8Parser.SEMI, i);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public forInit(): ForInitContext {
		return this.getTypedRuleContext(ForInitContext, 0) as ForInitContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public forUpdate(): ForUpdateContext {
		return this.getTypedRuleContext(ForUpdateContext, 0) as ForUpdateContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_basicForStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterBasicForStatement) {
	 		listener.enterBasicForStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitBasicForStatement) {
	 		listener.exitBasicForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatement) {
			return visitor.visitBasicForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Java8Parser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(Java8Parser.SEMI, i);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
	public forInit(): ForInitContext {
		return this.getTypedRuleContext(ForInitContext, 0) as ForInitContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public forUpdate(): ForUpdateContext {
		return this.getTypedRuleContext(ForUpdateContext, 0) as ForUpdateContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_basicForStatementNoShortIf;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterBasicForStatementNoShortIf) {
	 		listener.enterBasicForStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitBasicForStatementNoShortIf) {
	 		listener.exitBasicForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBasicForStatementNoShortIf) {
			return visitor.visitBasicForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementExpressionList(): StatementExpressionListContext {
		return this.getTypedRuleContext(StatementExpressionListContext, 0) as StatementExpressionListContext;
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_forInit;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterForInit) {
	 		listener.enterForInit(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitForInit) {
	 		listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementExpressionList(): StatementExpressionListContext {
		return this.getTypedRuleContext(StatementExpressionListContext, 0) as StatementExpressionListContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_forUpdate;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterForUpdate) {
	 		listener.enterForUpdate(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitForUpdate) {
	 		listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statementExpression_list(): StatementExpressionContext[] {
		return this.getTypedRuleContexts(StatementExpressionContext) as StatementExpressionContext[];
	}
	public statementExpression(i: number): StatementExpressionContext {
		return this.getTypedRuleContext(StatementExpressionContext, i) as StatementExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_statementExpressionList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterStatementExpressionList) {
	 		listener.enterStatementExpressionList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitStatementExpressionList) {
	 		listener.exitStatementExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitStatementExpressionList) {
			return visitor.visitStatementExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Java8Parser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Java8Parser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_enhancedForStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEnhancedForStatement) {
	 		listener.enterEnhancedForStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEnhancedForStatement) {
	 		listener.exitEnhancedForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatement) {
			return visitor.visitEnhancedForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementNoShortIfContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Java8Parser.FOR, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Java8Parser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getTypedRuleContext(StatementNoShortIfContext, 0) as StatementNoShortIfContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_enhancedForStatementNoShortIf;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEnhancedForStatementNoShortIf) {
	 		listener.enterEnhancedForStatementNoShortIf(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEnhancedForStatementNoShortIf) {
	 		listener.exitEnhancedForStatementNoShortIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForStatementNoShortIf) {
			return visitor.visitEnhancedForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(Java8Parser.BREAK, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_breakStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterBreakStatement) {
	 		listener.enterBreakStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitBreakStatement) {
	 		listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(Java8Parser.CONTINUE, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_continueStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterContinueStatement) {
	 		listener.enterContinueStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitContinueStatement) {
	 		listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(Java8Parser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_returnStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THROW(): TerminalNode {
		return this.getToken(Java8Parser.THROW, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_throwStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterThrowStatement) {
	 		listener.enterThrowStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitThrowStatement) {
	 		listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SynchronizedStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYNCHRONIZED(): TerminalNode {
		return this.getToken(Java8Parser.SYNCHRONIZED, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_synchronizedStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterSynchronizedStatement) {
	 		listener.enterSynchronizedStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitSynchronizedStatement) {
	 		listener.exitSynchronizedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitSynchronizedStatement) {
			return visitor.visitSynchronizedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(Java8Parser.TRY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public catches(): CatchesContext {
		return this.getTypedRuleContext(CatchesContext, 0) as CatchesContext;
	}
	public finally_(): Finally_Context {
		return this.getTypedRuleContext(Finally_Context, 0) as Finally_Context;
	}
	public tryWithResourcesStatement(): TryWithResourcesStatementContext {
		return this.getTypedRuleContext(TryWithResourcesStatementContext, 0) as TryWithResourcesStatementContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_tryStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTryStatement) {
	 		listener.enterTryStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTryStatement) {
	 		listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchesContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public catchClause_list(): CatchClauseContext[] {
		return this.getTypedRuleContexts(CatchClauseContext) as CatchClauseContext[];
	}
	public catchClause(i: number): CatchClauseContext {
		return this.getTypedRuleContext(CatchClauseContext, i) as CatchClauseContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_catches;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterCatches) {
	 		listener.enterCatches(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitCatches) {
	 		listener.exitCatches(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCatches) {
			return visitor.visitCatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATCH(): TerminalNode {
		return this.getToken(Java8Parser.CATCH, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public catchFormalParameter(): CatchFormalParameterContext {
		return this.getTypedRuleContext(CatchFormalParameterContext, 0) as CatchFormalParameterContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_catchClause;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterCatchClause) {
	 		listener.enterCatchClause(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitCatchClause) {
	 		listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchFormalParameterContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public catchType(): CatchTypeContext {
		return this.getTypedRuleContext(CatchTypeContext, 0) as CatchTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_catchFormalParameter;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterCatchFormalParameter) {
	 		listener.enterCatchFormalParameter(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitCatchFormalParameter) {
	 		listener.exitCatchFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCatchFormalParameter) {
			return visitor.visitCatchFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannClassType(): UnannClassTypeContext {
		return this.getTypedRuleContext(UnannClassTypeContext, 0) as UnannClassTypeContext;
	}
	public BITOR_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.BITOR);
	}
	public BITOR(i: number): TerminalNode {
		return this.getToken(Java8Parser.BITOR, i);
	}
	public classType_list(): ClassTypeContext[] {
		return this.getTypedRuleContexts(ClassTypeContext) as ClassTypeContext[];
	}
	public classType(i: number): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, i) as ClassTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_catchType;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterCatchType) {
	 		listener.enterCatchType(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitCatchType) {
	 		listener.exitCatchType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Finally_Context extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINALLY(): TerminalNode {
		return this.getToken(Java8Parser.FINALLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_finally_;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFinally_) {
	 		listener.enterFinally_(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFinally_) {
	 		listener.exitFinally_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFinally_) {
			return visitor.visitFinally_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryWithResourcesStatementContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(Java8Parser.TRY, 0);
	}
	public resourceSpecification(): ResourceSpecificationContext {
		return this.getTypedRuleContext(ResourceSpecificationContext, 0) as ResourceSpecificationContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public catches(): CatchesContext {
		return this.getTypedRuleContext(CatchesContext, 0) as CatchesContext;
	}
	public finally_(): Finally_Context {
		return this.getTypedRuleContext(Finally_Context, 0) as Finally_Context;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_tryWithResourcesStatement;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTryWithResourcesStatement) {
	 		listener.enterTryWithResourcesStatement(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTryWithResourcesStatement) {
	 		listener.exitTryWithResourcesStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTryWithResourcesStatement) {
			return visitor.visitTryWithResourcesStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public resourceList(): ResourceListContext {
		return this.getTypedRuleContext(ResourceListContext, 0) as ResourceListContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(Java8Parser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_resourceSpecification;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterResourceSpecification) {
	 		listener.enterResourceSpecification(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitResourceSpecification) {
	 		listener.exitResourceSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public resource_list(): ResourceContext[] {
		return this.getTypedRuleContexts(ResourceContext) as ResourceContext[];
	}
	public resource(i: number): ResourceContext {
		return this.getTypedRuleContext(ResourceContext, i) as ResourceContext;
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(Java8Parser.SEMI, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_resourceList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterResourceList) {
	 		listener.enterResourceList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitResourceList) {
	 		listener.exitResourceList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitResourceList) {
			return visitor.visitResourceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unannType(): UnannTypeContext {
		return this.getTypedRuleContext(UnannTypeContext, 0) as UnannTypeContext;
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}
	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_resource;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterResource) {
	 		listener.enterResource(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitResource) {
	 		listener.exitResource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext {
		return this.getTypedRuleContext(PrimaryNoNewArray_lfno_primaryContext, 0) as PrimaryNoNewArray_lfno_primaryContext;
	}
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		return this.getTypedRuleContext(ArrayCreationExpressionContext, 0) as ArrayCreationExpressionContext;
	}
	public primaryNoNewArray_lf_primary_list(): PrimaryNoNewArray_lf_primaryContext[] {
		return this.getTypedRuleContexts(PrimaryNoNewArray_lf_primaryContext) as PrimaryNoNewArray_lf_primaryContext[];
	}
	public primaryNoNewArray_lf_primary(i: number): PrimaryNoNewArray_lf_primaryContext {
		return this.getTypedRuleContext(PrimaryNoNewArray_lf_primaryContext, i) as PrimaryNoNewArray_lf_primaryContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimary) {
	 		listener.enterPrimary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimary) {
	 		listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArrayContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(Java8Parser.CLASS, 0);
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.RBRACK, i);
	}
	public VOID(): TerminalNode {
		return this.getToken(Java8Parser.VOID, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(Java8Parser.THIS, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		return this.getTypedRuleContext(ClassInstanceCreationExpressionContext, 0) as ClassInstanceCreationExpressionContext;
	}
	public fieldAccess(): FieldAccessContext {
		return this.getTypedRuleContext(FieldAccessContext, 0) as FieldAccessContext;
	}
	public arrayAccess(): ArrayAccessContext {
		return this.getTypedRuleContext(ArrayAccessContext, 0) as ArrayAccessContext;
	}
	public methodInvocation(): MethodInvocationContext {
		return this.getTypedRuleContext(MethodInvocationContext, 0) as MethodInvocationContext;
	}
	public methodReference(): MethodReferenceContext {
		return this.getTypedRuleContext(MethodReferenceContext, 0) as MethodReferenceContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primaryNoNewArray;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimaryNoNewArray) {
	 		listener.enterPrimaryNoNewArray(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimaryNoNewArray) {
	 		listener.exitPrimaryNoNewArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray) {
			return visitor.visitPrimaryNoNewArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_arrayAccessContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primaryNoNewArray_lf_arrayAccess;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimaryNoNewArray_lf_arrayAccess) {
	 		listener.enterPrimaryNoNewArray_lf_arrayAccess(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimaryNoNewArray_lf_arrayAccess) {
	 		listener.exitPrimaryNoNewArray_lf_arrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_arrayAccess) {
			return visitor.visitPrimaryNoNewArray_lf_arrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_arrayAccessContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(Java8Parser.CLASS, 0);
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.RBRACK, i);
	}
	public VOID(): TerminalNode {
		return this.getToken(Java8Parser.VOID, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(Java8Parser.THIS, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		return this.getTypedRuleContext(ClassInstanceCreationExpressionContext, 0) as ClassInstanceCreationExpressionContext;
	}
	public fieldAccess(): FieldAccessContext {
		return this.getTypedRuleContext(FieldAccessContext, 0) as FieldAccessContext;
	}
	public methodInvocation(): MethodInvocationContext {
		return this.getTypedRuleContext(MethodInvocationContext, 0) as MethodInvocationContext;
	}
	public methodReference(): MethodReferenceContext {
		return this.getTypedRuleContext(MethodReferenceContext, 0) as MethodReferenceContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primaryNoNewArray_lfno_arrayAccess;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimaryNoNewArray_lfno_arrayAccess) {
	 		listener.enterPrimaryNoNewArray_lfno_arrayAccess(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimaryNoNewArray_lfno_arrayAccess) {
	 		listener.exitPrimaryNoNewArray_lfno_arrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_arrayAccess) {
			return visitor.visitPrimaryNoNewArray_lfno_arrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext {
		return this.getTypedRuleContext(ClassInstanceCreationExpression_lf_primaryContext, 0) as ClassInstanceCreationExpression_lf_primaryContext;
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext {
		return this.getTypedRuleContext(FieldAccess_lf_primaryContext, 0) as FieldAccess_lf_primaryContext;
	}
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext {
		return this.getTypedRuleContext(ArrayAccess_lf_primaryContext, 0) as ArrayAccess_lf_primaryContext;
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext {
		return this.getTypedRuleContext(MethodInvocation_lf_primaryContext, 0) as MethodInvocation_lf_primaryContext;
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext {
		return this.getTypedRuleContext(MethodReference_lf_primaryContext, 0) as MethodReference_lf_primaryContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primaryNoNewArray_lf_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimaryNoNewArray_lf_primary) {
	 		listener.enterPrimaryNoNewArray_lf_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimaryNoNewArray_lf_primary) {
	 		listener.exitPrimaryNoNewArray_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
	 		listener.enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
	 		listener.exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext {
		return this.getTypedRuleContext(ClassInstanceCreationExpression_lf_primaryContext, 0) as ClassInstanceCreationExpression_lf_primaryContext;
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext {
		return this.getTypedRuleContext(FieldAccess_lf_primaryContext, 0) as FieldAccess_lf_primaryContext;
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext {
		return this.getTypedRuleContext(MethodInvocation_lf_primaryContext, 0) as MethodInvocation_lf_primaryContext;
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext {
		return this.getTypedRuleContext(MethodReference_lf_primaryContext, 0) as MethodReference_lf_primaryContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
	 		listener.enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
	 		listener.exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(Java8Parser.CLASS, 0);
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.RBRACK, i);
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		return this.getTypedRuleContext(UnannPrimitiveTypeContext, 0) as UnannPrimitiveTypeContext;
	}
	public VOID(): TerminalNode {
		return this.getToken(Java8Parser.VOID, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(Java8Parser.THIS, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext {
		return this.getTypedRuleContext(ClassInstanceCreationExpression_lfno_primaryContext, 0) as ClassInstanceCreationExpression_lfno_primaryContext;
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext {
		return this.getTypedRuleContext(FieldAccess_lfno_primaryContext, 0) as FieldAccess_lfno_primaryContext;
	}
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext {
		return this.getTypedRuleContext(ArrayAccess_lfno_primaryContext, 0) as ArrayAccess_lfno_primaryContext;
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext {
		return this.getTypedRuleContext(MethodInvocation_lfno_primaryContext, 0) as MethodInvocation_lfno_primaryContext;
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext {
		return this.getTypedRuleContext(MethodReference_lfno_primaryContext, 0) as MethodReference_lfno_primaryContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primaryNoNewArray_lfno_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimaryNoNewArray_lfno_primary) {
	 		listener.enterPrimaryNoNewArray_lfno_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimaryNoNewArray_lfno_primary) {
	 		listener.exitPrimaryNoNewArray_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
	 		listener.enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
	 		listener.exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(Java8Parser.CLASS, 0);
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.LBRACK, i);
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.RBRACK, i);
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		return this.getTypedRuleContext(UnannPrimitiveTypeContext, 0) as UnannPrimitiveTypeContext;
	}
	public VOID(): TerminalNode {
		return this.getToken(Java8Parser.VOID, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(Java8Parser.THIS, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext {
		return this.getTypedRuleContext(ClassInstanceCreationExpression_lfno_primaryContext, 0) as ClassInstanceCreationExpression_lfno_primaryContext;
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext {
		return this.getTypedRuleContext(FieldAccess_lfno_primaryContext, 0) as FieldAccess_lfno_primaryContext;
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext {
		return this.getTypedRuleContext(MethodInvocation_lfno_primaryContext, 0) as MethodInvocation_lfno_primaryContext;
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext {
		return this.getTypedRuleContext(MethodReference_lfno_primaryContext, 0) as MethodReference_lfno_primaryContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
	 		listener.enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
	 		listener.exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java8Parser.NEW, 0);
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(Java8Parser.Identifier, i);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java8Parser.DOT, i);
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		return this.getTypedRuleContext(TypeArgumentsOrDiamondContext, 0) as TypeArgumentsOrDiamondContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classInstanceCreationExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassInstanceCreationExpression) {
	 		listener.enterClassInstanceCreationExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassInstanceCreationExpression) {
	 		listener.exitClassInstanceCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression) {
			return visitor.visitClassInstanceCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpression_lf_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public NEW(): TerminalNode {
		return this.getToken(Java8Parser.NEW, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		return this.getTypedRuleContext(TypeArgumentsOrDiamondContext, 0) as TypeArgumentsOrDiamondContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classInstanceCreationExpression_lf_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassInstanceCreationExpression_lf_primary) {
	 		listener.enterClassInstanceCreationExpression_lf_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassInstanceCreationExpression_lf_primary) {
	 		listener.exitClassInstanceCreationExpression_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression_lf_primary) {
			return visitor.visitClassInstanceCreationExpression_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpression_lfno_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java8Parser.NEW, 0);
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(Java8Parser.Identifier, i);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java8Parser.DOT, i);
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		return this.getTypedRuleContext(TypeArgumentsOrDiamondContext, 0) as TypeArgumentsOrDiamondContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_classInstanceCreationExpression_lfno_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterClassInstanceCreationExpression_lfno_primary) {
	 		listener.enterClassInstanceCreationExpression_lfno_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitClassInstanceCreationExpression_lfno_primary) {
	 		listener.exitClassInstanceCreationExpression_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression_lfno_primary) {
			return visitor.visitClassInstanceCreationExpression_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public LT(): TerminalNode {
		return this.getToken(Java8Parser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(Java8Parser.GT, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_typeArgumentsOrDiamond;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterTypeArgumentsOrDiamond) {
	 		listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitTypeArgumentsOrDiamond) {
	 		listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccessContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java8Parser.DOT, i);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java8Parser.SUPER, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_fieldAccess;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFieldAccess) {
	 		listener.enterFieldAccess(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFieldAccess) {
	 		listener.exitFieldAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess) {
			return visitor.visitFieldAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccess_lf_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_fieldAccess_lf_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFieldAccess_lf_primary) {
	 		listener.enterFieldAccess_lf_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFieldAccess_lf_primary) {
	 		listener.exitFieldAccess_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess_lf_primary) {
			return visitor.visitFieldAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccess_lfno_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java8Parser.SUPER, 0);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java8Parser.DOT, i);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_fieldAccess_lfno_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterFieldAccess_lfno_primary) {
	 		listener.enterFieldAccess_lfno_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitFieldAccess_lfno_primary) {
	 		listener.exitFieldAccess_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitFieldAccess_lfno_primary) {
			return visitor.visitFieldAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccessContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.LBRACK, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.RBRACK, i);
	}
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext {
		return this.getTypedRuleContext(PrimaryNoNewArray_lfno_arrayAccessContext, 0) as PrimaryNoNewArray_lfno_arrayAccessContext;
	}
	public primaryNoNewArray_lf_arrayAccess_list(): PrimaryNoNewArray_lf_arrayAccessContext[] {
		return this.getTypedRuleContexts(PrimaryNoNewArray_lf_arrayAccessContext) as PrimaryNoNewArray_lf_arrayAccessContext[];
	}
	public primaryNoNewArray_lf_arrayAccess(i: number): PrimaryNoNewArray_lf_arrayAccessContext {
		return this.getTypedRuleContext(PrimaryNoNewArray_lf_arrayAccessContext, i) as PrimaryNoNewArray_lf_arrayAccessContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_arrayAccess;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterArrayAccess) {
	 		listener.enterArrayAccess(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitArrayAccess) {
	 		listener.exitArrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess) {
			return visitor.visitArrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccess_lf_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext {
		return this.getTypedRuleContext(PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext, 0) as PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.LBRACK, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.RBRACK, i);
	}
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary_list(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[] {
		return this.getTypedRuleContexts(PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext) as PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[];
	}
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext {
		return this.getTypedRuleContext(PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext, i) as PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_arrayAccess_lf_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterArrayAccess_lf_primary) {
	 		listener.enterArrayAccess_lf_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitArrayAccess_lf_primary) {
	 		listener.exitArrayAccess_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess_lf_primary) {
			return visitor.visitArrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccess_lfno_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public LBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.LBRACK);
	}
	public LBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.LBRACK, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RBRACK_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.RBRACK);
	}
	public RBRACK(i: number): TerminalNode {
		return this.getToken(Java8Parser.RBRACK, i);
	}
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext {
		return this.getTypedRuleContext(PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext, 0) as PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext;
	}
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary_list(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[] {
		return this.getTypedRuleContexts(PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext) as PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[];
	}
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext {
		return this.getTypedRuleContext(PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext, i) as PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_arrayAccess_lfno_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterArrayAccess_lfno_primary) {
	 		listener.enterArrayAccess_lfno_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitArrayAccess_lfno_primary) {
	 		listener.exitArrayAccess_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayAccess_lfno_primary) {
			return visitor.visitArrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocationContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public methodName(): MethodNameContext {
		return this.getTypedRuleContext(MethodNameContext, 0) as MethodNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java8Parser.DOT, i);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java8Parser.SUPER, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodInvocation;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodInvocation) {
	 		listener.enterMethodInvocation(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodInvocation) {
	 		listener.exitMethodInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation) {
			return visitor.visitMethodInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocation_lf_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodInvocation_lf_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodInvocation_lf_primary) {
	 		listener.enterMethodInvocation_lf_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodInvocation_lf_primary) {
	 		listener.exitMethodInvocation_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation_lf_primary) {
			return visitor.visitMethodInvocation_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocation_lfno_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public methodName(): MethodNameContext {
		return this.getTypedRuleContext(MethodNameContext, 0) as MethodNameContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Java8Parser.DOT, i);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java8Parser.SUPER, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodInvocation_lfno_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodInvocation_lfno_primary) {
	 		listener.enterMethodInvocation_lfno_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodInvocation_lfno_primary) {
	 		listener.exitMethodInvocation_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodInvocation_lfno_primary) {
			return visitor.visitMethodInvocation_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_argumentList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterArgumentList) {
	 		listener.enterArgumentList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitArgumentList) {
	 		listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReferenceContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public COLONCOLON(): TerminalNode {
		return this.getToken(Java8Parser.COLONCOLON, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java8Parser.SUPER, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java8Parser.NEW, 0);
	}
	public arrayType(): ArrayTypeContext {
		return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodReference;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodReference) {
	 		listener.enterMethodReference(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodReference) {
	 		listener.exitMethodReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodReference) {
			return visitor.visitMethodReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReference_lf_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLONCOLON(): TerminalNode {
		return this.getToken(Java8Parser.COLONCOLON, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodReference_lf_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodReference_lf_primary) {
	 		listener.enterMethodReference_lf_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodReference_lf_primary) {
	 		listener.exitMethodReference_lf_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodReference_lf_primary) {
			return visitor.visitMethodReference_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReference_lfno_primaryContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public COLONCOLON(): TerminalNode {
		return this.getToken(Java8Parser.COLONCOLON, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public SUPER(): TerminalNode {
		return this.getToken(Java8Parser.SUPER, 0);
	}
	public typeName(): TypeNameContext {
		return this.getTypedRuleContext(TypeNameContext, 0) as TypeNameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(Java8Parser.DOT, 0);
	}
	public classType(): ClassTypeContext {
		return this.getTypedRuleContext(ClassTypeContext, 0) as ClassTypeContext;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java8Parser.NEW, 0);
	}
	public arrayType(): ArrayTypeContext {
		return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_methodReference_lfno_primary;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMethodReference_lfno_primary) {
	 		listener.enterMethodReference_lfno_primary(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMethodReference_lfno_primary) {
	 		listener.exitMethodReference_lfno_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMethodReference_lfno_primary) {
			return visitor.visitMethodReference_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEW(): TerminalNode {
		return this.getToken(Java8Parser.NEW, 0);
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public dimExprs(): DimExprsContext {
		return this.getTypedRuleContext(DimExprsContext, 0) as DimExprsContext;
	}
	public dims(): DimsContext {
		return this.getTypedRuleContext(DimsContext, 0) as DimsContext;
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(ClassOrInterfaceTypeContext, 0) as ClassOrInterfaceTypeContext;
	}
	public arrayInitializer(): ArrayInitializerContext {
		return this.getTypedRuleContext(ArrayInitializerContext, 0) as ArrayInitializerContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_arrayCreationExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterArrayCreationExpression) {
	 		listener.enterArrayCreationExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitArrayCreationExpression) {
	 		listener.exitArrayCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitArrayCreationExpression) {
			return visitor.visitArrayCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprsContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dimExpr_list(): DimExprContext[] {
		return this.getTypedRuleContexts(DimExprContext) as DimExprContext[];
	}
	public dimExpr(i: number): DimExprContext {
		return this.getTypedRuleContext(DimExprContext, i) as DimExprContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_dimExprs;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterDimExprs) {
	 		listener.enterDimExprs(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitDimExprs) {
	 		listener.exitDimExprs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDimExprs) {
			return visitor.visitDimExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACK(): TerminalNode {
		return this.getToken(Java8Parser.LBRACK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RBRACK(): TerminalNode {
		return this.getToken(Java8Parser.RBRACK, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_dimExpr;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterDimExpr) {
	 		listener.enterDimExpr(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitDimExpr) {
	 		listener.exitDimExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitDimExpr) {
			return visitor.visitDimExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_constantExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConstantExpression) {
	 		listener.enterConstantExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConstantExpression) {
	 		listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambdaExpression(): LambdaExpressionContext {
		return this.getTypedRuleContext(LambdaExpressionContext, 0) as LambdaExpressionContext;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_expression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lambdaParameters(): LambdaParametersContext {
		return this.getTypedRuleContext(LambdaParametersContext, 0) as LambdaParametersContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(Java8Parser.ARROW, 0);
	}
	public lambdaBody(): LambdaBodyContext {
		return this.getTypedRuleContext(LambdaBodyContext, 0) as LambdaBodyContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_lambdaExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLambdaExpression) {
	 		listener.enterLambdaExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLambdaExpression) {
	 		listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(Java8Parser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
	public inferredFormalParameterList(): InferredFormalParameterListContext {
		return this.getTypedRuleContext(InferredFormalParameterListContext, 0) as InferredFormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_lambdaParameters;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLambdaParameters) {
	 		listener.enterLambdaParameters(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLambdaParameters) {
	 		listener.exitLambdaParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InferredFormalParameterListContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(Java8Parser.Identifier, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Java8Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_inferredFormalParameterList;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInferredFormalParameterList) {
	 		listener.enterInferredFormalParameterList(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInferredFormalParameterList) {
	 		listener.exitInferredFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInferredFormalParameterList) {
			return visitor.visitInferredFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_lambdaBody;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLambdaBody) {
	 		listener.enterLambdaBody(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLambdaBody) {
	 		listener.exitLambdaBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_assignmentExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAssignmentExpression) {
	 		listener.enterAssignmentExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAssignmentExpression) {
	 		listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public leftHandSide(): LeftHandSideContext {
		return this.getTypedRuleContext(LeftHandSideContext, 0) as LeftHandSideContext;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_assignment;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeftHandSideContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public fieldAccess(): FieldAccessContext {
		return this.getTypedRuleContext(FieldAccessContext, 0) as FieldAccessContext;
	}
	public arrayAccess(): ArrayAccessContext {
		return this.getTypedRuleContext(ArrayAccessContext, 0) as ArrayAccessContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_leftHandSide;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterLeftHandSide) {
	 		listener.enterLeftHandSide(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitLeftHandSide) {
	 		listener.exitLeftHandSide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitLeftHandSide) {
			return visitor.visitLeftHandSide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.ASSIGN, 0);
	}
	public MUL_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.MUL_ASSIGN, 0);
	}
	public DIV_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.DIV_ASSIGN, 0);
	}
	public MOD_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.MOD_ASSIGN, 0);
	}
	public ADD_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.ADD_ASSIGN, 0);
	}
	public SUB_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.SUB_ASSIGN, 0);
	}
	public LSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.LSHIFT_ASSIGN, 0);
	}
	public RSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.RSHIFT_ASSIGN, 0);
	}
	public URSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.URSHIFT_ASSIGN, 0);
	}
	public AND_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.AND_ASSIGN, 0);
	}
	public XOR_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.XOR_ASSIGN, 0);
	}
	public OR_ASSIGN(): TerminalNode {
		return this.getToken(Java8Parser.OR_ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_assignmentOperator;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAssignmentOperator) {
	 		listener.enterAssignmentOperator(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAssignmentOperator) {
	 		listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getTypedRuleContext(ConditionalOrExpressionContext, 0) as ConditionalOrExpressionContext;
	}
	public QUESTION(): TerminalNode {
		return this.getToken(Java8Parser.QUESTION, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Java8Parser.COLON, 0);
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_conditionalExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConditionalExpression) {
	 		listener.enterConditionalExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConditionalExpression) {
	 		listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getTypedRuleContext(ConditionalAndExpressionContext, 0) as ConditionalAndExpressionContext;
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getTypedRuleContext(ConditionalOrExpressionContext, 0) as ConditionalOrExpressionContext;
	}
	public OR(): TerminalNode {
		return this.getToken(Java8Parser.OR, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_conditionalOrExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConditionalOrExpression) {
	 		listener.enterConditionalOrExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConditionalOrExpression) {
	 		listener.exitConditionalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConditionalOrExpression) {
			return visitor.visitConditionalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getTypedRuleContext(InclusiveOrExpressionContext, 0) as InclusiveOrExpressionContext;
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getTypedRuleContext(ConditionalAndExpressionContext, 0) as ConditionalAndExpressionContext;
	}
	public AND(): TerminalNode {
		return this.getToken(Java8Parser.AND, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_conditionalAndExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterConditionalAndExpression) {
	 		listener.enterConditionalAndExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitConditionalAndExpression) {
	 		listener.exitConditionalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitConditionalAndExpression) {
			return visitor.visitConditionalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getTypedRuleContext(ExclusiveOrExpressionContext, 0) as ExclusiveOrExpressionContext;
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getTypedRuleContext(InclusiveOrExpressionContext, 0) as InclusiveOrExpressionContext;
	}
	public BITOR(): TerminalNode {
		return this.getToken(Java8Parser.BITOR, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_inclusiveOrExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterInclusiveOrExpression) {
	 		listener.enterInclusiveOrExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitInclusiveOrExpression) {
	 		listener.exitInclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public andExpression(): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, 0) as AndExpressionContext;
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getTypedRuleContext(ExclusiveOrExpressionContext, 0) as ExclusiveOrExpressionContext;
	}
	public CARET(): TerminalNode {
		return this.getToken(Java8Parser.CARET, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_exclusiveOrExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterExclusiveOrExpression) {
	 		listener.enterExclusiveOrExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitExclusiveOrExpression) {
	 		listener.exitExclusiveOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public andExpression(): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, 0) as AndExpressionContext;
	}
	public BITAND(): TerminalNode {
		return this.getToken(Java8Parser.BITAND, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_andExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAndExpression) {
	 		listener.enterAndExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAndExpression) {
	 		listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, 0) as EqualityExpressionContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(Java8Parser.EQUAL, 0);
	}
	public NOTEQUAL(): TerminalNode {
		return this.getToken(Java8Parser.NOTEQUAL, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_equalityExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public LT(): TerminalNode {
		return this.getToken(Java8Parser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(Java8Parser.GT, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(Java8Parser.LE, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(Java8Parser.GE, 0);
	}
	public INSTANCEOF(): TerminalNode {
		return this.getToken(Java8Parser.INSTANCEOF, 0);
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_relationalExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public shiftExpression(): ShiftExpressionContext {
		return this.getTypedRuleContext(ShiftExpressionContext, 0) as ShiftExpressionContext;
	}
	public LT_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.LT);
	}
	public LT(i: number): TerminalNode {
		return this.getToken(Java8Parser.LT, i);
	}
	public GT_list(): TerminalNode[] {
	    	return this.getTokens(Java8Parser.GT);
	}
	public GT(i: number): TerminalNode {
		return this.getToken(Java8Parser.GT, i);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_shiftExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterShiftExpression) {
	 		listener.enterShiftExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitShiftExpression) {
	 		listener.exitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, 0) as AdditiveExpressionContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(Java8Parser.ADD, 0);
	}
	public SUB(): TerminalNode {
		return this.getToken(Java8Parser.SUB, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_additiveExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, 0) as MultiplicativeExpressionContext;
	}
	public MUL(): TerminalNode {
		return this.getToken(Java8Parser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(Java8Parser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(Java8Parser.MOD, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_multiplicativeExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public preIncrementExpression(): PreIncrementExpressionContext {
		return this.getTypedRuleContext(PreIncrementExpressionContext, 0) as PreIncrementExpressionContext;
	}
	public preDecrementExpression(): PreDecrementExpressionContext {
		return this.getTypedRuleContext(PreDecrementExpressionContext, 0) as PreDecrementExpressionContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(Java8Parser.ADD, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public SUB(): TerminalNode {
		return this.getToken(Java8Parser.SUB, 0);
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		return this.getTypedRuleContext(UnaryExpressionNotPlusMinusContext, 0) as UnaryExpressionNotPlusMinusContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unaryExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreIncrementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INC(): TerminalNode {
		return this.getToken(Java8Parser.INC, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_preIncrementExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPreIncrementExpression) {
	 		listener.enterPreIncrementExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPreIncrementExpression) {
	 		listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreDecrementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEC(): TerminalNode {
		return this.getToken(Java8Parser.DEC, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_preDecrementExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPreDecrementExpression) {
	 		listener.enterPreDecrementExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPreDecrementExpression) {
	 		listener.exitPreDecrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPreDecrementExpression) {
			return visitor.visitPreDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public TILDE(): TerminalNode {
		return this.getToken(Java8Parser.TILDE, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public BANG(): TerminalNode {
		return this.getToken(Java8Parser.BANG, 0);
	}
	public castExpression(): CastExpressionContext {
		return this.getTypedRuleContext(CastExpressionContext, 0) as CastExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_unaryExpressionNotPlusMinus;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterUnaryExpressionNotPlusMinus) {
	 		listener.enterUnaryExpressionNotPlusMinus(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitUnaryExpressionNotPlusMinus) {
	 		listener.exitUnaryExpressionNotPlusMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpressionNotPlusMinus) {
			return visitor.visitUnaryExpressionNotPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}
	public expressionName(): ExpressionNameContext {
		return this.getTypedRuleContext(ExpressionNameContext, 0) as ExpressionNameContext;
	}
	public postIncrementExpression_lf_postfixExpression_list(): PostIncrementExpression_lf_postfixExpressionContext[] {
		return this.getTypedRuleContexts(PostIncrementExpression_lf_postfixExpressionContext) as PostIncrementExpression_lf_postfixExpressionContext[];
	}
	public postIncrementExpression_lf_postfixExpression(i: number): PostIncrementExpression_lf_postfixExpressionContext {
		return this.getTypedRuleContext(PostIncrementExpression_lf_postfixExpressionContext, i) as PostIncrementExpression_lf_postfixExpressionContext;
	}
	public postDecrementExpression_lf_postfixExpression_list(): PostDecrementExpression_lf_postfixExpressionContext[] {
		return this.getTypedRuleContexts(PostDecrementExpression_lf_postfixExpressionContext) as PostDecrementExpression_lf_postfixExpressionContext[];
	}
	public postDecrementExpression_lf_postfixExpression(i: number): PostDecrementExpression_lf_postfixExpressionContext {
		return this.getTypedRuleContext(PostDecrementExpression_lf_postfixExpressionContext, i) as PostDecrementExpression_lf_postfixExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_postfixExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPostfixExpression) {
	 		listener.enterPostfixExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPostfixExpression) {
	 		listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public INC(): TerminalNode {
		return this.getToken(Java8Parser.INC, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_postIncrementExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPostIncrementExpression) {
	 		listener.enterPostIncrementExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPostIncrementExpression) {
	 		listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INC(): TerminalNode {
		return this.getToken(Java8Parser.INC, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_postIncrementExpression_lf_postfixExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPostIncrementExpression_lf_postfixExpression) {
	 		listener.enterPostIncrementExpression_lf_postfixExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPostIncrementExpression_lf_postfixExpression) {
	 		listener.exitPostIncrementExpression_lf_postfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression_lf_postfixExpression) {
			return visitor.visitPostIncrementExpression_lf_postfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public DEC(): TerminalNode {
		return this.getToken(Java8Parser.DEC, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_postDecrementExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPostDecrementExpression) {
	 		listener.enterPostDecrementExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPostDecrementExpression) {
	 		listener.exitPostDecrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostDecrementExpression) {
			return visitor.visitPostDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEC(): TerminalNode {
		return this.getToken(Java8Parser.DEC, 0);
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_postDecrementExpression_lf_postfixExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterPostDecrementExpression_lf_postfixExpression) {
	 		listener.enterPostDecrementExpression_lf_postfixExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitPostDecrementExpression_lf_postfixExpression) {
	 		listener.exitPostDecrementExpression_lf_postfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitPostDecrementExpression_lf_postfixExpression) {
			return visitor.visitPostDecrementExpression_lf_postfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(Java8Parser.LPAREN, 0);
	}
	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(Java8Parser.RPAREN, 0);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public referenceType(): ReferenceTypeContext {
		return this.getTypedRuleContext(ReferenceTypeContext, 0) as ReferenceTypeContext;
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		return this.getTypedRuleContext(UnaryExpressionNotPlusMinusContext, 0) as UnaryExpressionNotPlusMinusContext;
	}
	public additionalBound_list(): AdditionalBoundContext[] {
		return this.getTypedRuleContexts(AdditionalBoundContext) as AdditionalBoundContext[];
	}
	public additionalBound(i: number): AdditionalBoundContext {
		return this.getTypedRuleContext(AdditionalBoundContext, i) as AdditionalBoundContext;
	}
	public lambdaExpression(): LambdaExpressionContext {
		return this.getTypedRuleContext(LambdaExpressionContext, 0) as LambdaExpressionContext;
	}
    public get ruleIndex(): number {
    	return Java8Parser.RULE_castExpression;
	}
	public enterRule(listener: Java8ParserListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: Java8ParserListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Java8ParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
