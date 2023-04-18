import { ATN, DFA, FailedPredicateException, Parser, RuleContext, ParserRuleContext, TerminalNode, TokenStream } from 'antlr4';
import Java8ParserListener from "./Java8ParserListener.js";
import Java8ParserVisitor from "./Java8ParserVisitor.js";
export default class Java8Parser extends Parser {
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
    static readonly RULE_literal = 0;
    static readonly RULE_primitiveType = 1;
    static readonly RULE_numericType = 2;
    static readonly RULE_integralType = 3;
    static readonly RULE_floatingPointType = 4;
    static readonly RULE_referenceType = 5;
    static readonly RULE_classOrInterfaceType = 6;
    static readonly RULE_classType = 7;
    static readonly RULE_classType_lf_classOrInterfaceType = 8;
    static readonly RULE_classType_lfno_classOrInterfaceType = 9;
    static readonly RULE_interfaceType = 10;
    static readonly RULE_interfaceType_lf_classOrInterfaceType = 11;
    static readonly RULE_interfaceType_lfno_classOrInterfaceType = 12;
    static readonly RULE_typeVariable = 13;
    static readonly RULE_arrayType = 14;
    static readonly RULE_dims = 15;
    static readonly RULE_typeParameter = 16;
    static readonly RULE_typeParameterModifier = 17;
    static readonly RULE_typeBound = 18;
    static readonly RULE_additionalBound = 19;
    static readonly RULE_typeArguments = 20;
    static readonly RULE_typeArgumentList = 21;
    static readonly RULE_typeArgument = 22;
    static readonly RULE_wildcard = 23;
    static readonly RULE_wildcardBounds = 24;
    static readonly RULE_packageName = 25;
    static readonly RULE_typeName = 26;
    static readonly RULE_packageOrTypeName = 27;
    static readonly RULE_expressionName = 28;
    static readonly RULE_methodName = 29;
    static readonly RULE_ambiguousName = 30;
    static readonly RULE_compilationUnit = 31;
    static readonly RULE_packageDeclaration = 32;
    static readonly RULE_packageModifier = 33;
    static readonly RULE_importDeclaration = 34;
    static readonly RULE_singleTypeImportDeclaration = 35;
    static readonly RULE_typeImportOnDemandDeclaration = 36;
    static readonly RULE_singleStaticImportDeclaration = 37;
    static readonly RULE_staticImportOnDemandDeclaration = 38;
    static readonly RULE_typeDeclaration = 39;
    static readonly RULE_classDeclaration = 40;
    static readonly RULE_normalClassDeclaration = 41;
    static readonly RULE_classModifier = 42;
    static readonly RULE_typeParameters = 43;
    static readonly RULE_typeParameterList = 44;
    static readonly RULE_superclass = 45;
    static readonly RULE_superinterfaces = 46;
    static readonly RULE_interfaceTypeList = 47;
    static readonly RULE_classBody = 48;
    static readonly RULE_classBodyDeclaration = 49;
    static readonly RULE_classMemberDeclaration = 50;
    static readonly RULE_fieldDeclaration = 51;
    static readonly RULE_fieldModifier = 52;
    static readonly RULE_variableDeclaratorList = 53;
    static readonly RULE_variableDeclarator = 54;
    static readonly RULE_variableDeclaratorId = 55;
    static readonly RULE_variableInitializer = 56;
    static readonly RULE_unannType = 57;
    static readonly RULE_unannPrimitiveType = 58;
    static readonly RULE_unannReferenceType = 59;
    static readonly RULE_unannClassOrInterfaceType = 60;
    static readonly RULE_unannClassType = 61;
    static readonly RULE_unannClassType_lf_unannClassOrInterfaceType = 62;
    static readonly RULE_unannClassType_lfno_unannClassOrInterfaceType = 63;
    static readonly RULE_unannInterfaceType = 64;
    static readonly RULE_unannInterfaceType_lf_unannClassOrInterfaceType = 65;
    static readonly RULE_unannInterfaceType_lfno_unannClassOrInterfaceType = 66;
    static readonly RULE_unannTypeVariable = 67;
    static readonly RULE_unannArrayType = 68;
    static readonly RULE_methodDeclaration = 69;
    static readonly RULE_methodModifier = 70;
    static readonly RULE_methodHeader = 71;
    static readonly RULE_result = 72;
    static readonly RULE_methodDeclarator = 73;
    static readonly RULE_formalParameterList = 74;
    static readonly RULE_formalParameters = 75;
    static readonly RULE_formalParameter = 76;
    static readonly RULE_variableModifier = 77;
    static readonly RULE_lastFormalParameter = 78;
    static readonly RULE_receiverParameter = 79;
    static readonly RULE_throws_ = 80;
    static readonly RULE_exceptionTypeList = 81;
    static readonly RULE_exceptionType = 82;
    static readonly RULE_methodBody = 83;
    static readonly RULE_instanceInitializer = 84;
    static readonly RULE_staticInitializer = 85;
    static readonly RULE_constructorDeclaration = 86;
    static readonly RULE_constructorModifier = 87;
    static readonly RULE_constructorDeclarator = 88;
    static readonly RULE_simpleTypeName = 89;
    static readonly RULE_constructorBody = 90;
    static readonly RULE_explicitConstructorInvocation = 91;
    static readonly RULE_enumDeclaration = 92;
    static readonly RULE_enumBody = 93;
    static readonly RULE_enumConstantList = 94;
    static readonly RULE_enumConstant = 95;
    static readonly RULE_enumConstantModifier = 96;
    static readonly RULE_enumBodyDeclarations = 97;
    static readonly RULE_interfaceDeclaration = 98;
    static readonly RULE_normalInterfaceDeclaration = 99;
    static readonly RULE_interfaceModifier = 100;
    static readonly RULE_extendsInterfaces = 101;
    static readonly RULE_interfaceBody = 102;
    static readonly RULE_interfaceMemberDeclaration = 103;
    static readonly RULE_constantDeclaration = 104;
    static readonly RULE_constantModifier = 105;
    static readonly RULE_interfaceMethodDeclaration = 106;
    static readonly RULE_interfaceMethodModifier = 107;
    static readonly RULE_annotationTypeDeclaration = 108;
    static readonly RULE_annotationTypeBody = 109;
    static readonly RULE_annotationTypeMemberDeclaration = 110;
    static readonly RULE_annotationTypeElementDeclaration = 111;
    static readonly RULE_annotationTypeElementModifier = 112;
    static readonly RULE_defaultValue = 113;
    static readonly RULE_annotation = 114;
    static readonly RULE_normalAnnotation = 115;
    static readonly RULE_elementValuePairList = 116;
    static readonly RULE_elementValuePair = 117;
    static readonly RULE_elementValue = 118;
    static readonly RULE_elementValueArrayInitializer = 119;
    static readonly RULE_elementValueList = 120;
    static readonly RULE_markerAnnotation = 121;
    static readonly RULE_singleElementAnnotation = 122;
    static readonly RULE_arrayInitializer = 123;
    static readonly RULE_variableInitializerList = 124;
    static readonly RULE_block = 125;
    static readonly RULE_blockStatements = 126;
    static readonly RULE_blockStatement = 127;
    static readonly RULE_localVariableDeclarationStatement = 128;
    static readonly RULE_localVariableDeclaration = 129;
    static readonly RULE_statement = 130;
    static readonly RULE_statementNoShortIf = 131;
    static readonly RULE_statementWithoutTrailingSubstatement = 132;
    static readonly RULE_emptyStatement_ = 133;
    static readonly RULE_labeledStatement = 134;
    static readonly RULE_labeledStatementNoShortIf = 135;
    static readonly RULE_expressionStatement = 136;
    static readonly RULE_statementExpression = 137;
    static readonly RULE_ifThenStatement = 138;
    static readonly RULE_ifThenElseStatement = 139;
    static readonly RULE_ifThenElseStatementNoShortIf = 140;
    static readonly RULE_assertStatement = 141;
    static readonly RULE_switchStatement = 142;
    static readonly RULE_switchBlock = 143;
    static readonly RULE_switchBlockStatementGroup = 144;
    static readonly RULE_switchLabels = 145;
    static readonly RULE_switchLabel = 146;
    static readonly RULE_enumConstantName = 147;
    static readonly RULE_whileStatement = 148;
    static readonly RULE_whileStatementNoShortIf = 149;
    static readonly RULE_doStatement = 150;
    static readonly RULE_forStatement = 151;
    static readonly RULE_forStatementNoShortIf = 152;
    static readonly RULE_basicForStatement = 153;
    static readonly RULE_basicForStatementNoShortIf = 154;
    static readonly RULE_forInit = 155;
    static readonly RULE_forUpdate = 156;
    static readonly RULE_statementExpressionList = 157;
    static readonly RULE_enhancedForStatement = 158;
    static readonly RULE_enhancedForStatementNoShortIf = 159;
    static readonly RULE_breakStatement = 160;
    static readonly RULE_continueStatement = 161;
    static readonly RULE_returnStatement = 162;
    static readonly RULE_throwStatement = 163;
    static readonly RULE_synchronizedStatement = 164;
    static readonly RULE_tryStatement = 165;
    static readonly RULE_catches = 166;
    static readonly RULE_catchClause = 167;
    static readonly RULE_catchFormalParameter = 168;
    static readonly RULE_catchType = 169;
    static readonly RULE_finally_ = 170;
    static readonly RULE_tryWithResourcesStatement = 171;
    static readonly RULE_resourceSpecification = 172;
    static readonly RULE_resourceList = 173;
    static readonly RULE_resource = 174;
    static readonly RULE_primary = 175;
    static readonly RULE_primaryNoNewArray = 176;
    static readonly RULE_primaryNoNewArray_lf_arrayAccess = 177;
    static readonly RULE_primaryNoNewArray_lfno_arrayAccess = 178;
    static readonly RULE_primaryNoNewArray_lf_primary = 179;
    static readonly RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary = 180;
    static readonly RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary = 181;
    static readonly RULE_primaryNoNewArray_lfno_primary = 182;
    static readonly RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary = 183;
    static readonly RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary = 184;
    static readonly RULE_classInstanceCreationExpression = 185;
    static readonly RULE_classInstanceCreationExpression_lf_primary = 186;
    static readonly RULE_classInstanceCreationExpression_lfno_primary = 187;
    static readonly RULE_typeArgumentsOrDiamond = 188;
    static readonly RULE_fieldAccess = 189;
    static readonly RULE_fieldAccess_lf_primary = 190;
    static readonly RULE_fieldAccess_lfno_primary = 191;
    static readonly RULE_arrayAccess = 192;
    static readonly RULE_arrayAccess_lf_primary = 193;
    static readonly RULE_arrayAccess_lfno_primary = 194;
    static readonly RULE_methodInvocation = 195;
    static readonly RULE_methodInvocation_lf_primary = 196;
    static readonly RULE_methodInvocation_lfno_primary = 197;
    static readonly RULE_argumentList = 198;
    static readonly RULE_methodReference = 199;
    static readonly RULE_methodReference_lf_primary = 200;
    static readonly RULE_methodReference_lfno_primary = 201;
    static readonly RULE_arrayCreationExpression = 202;
    static readonly RULE_dimExprs = 203;
    static readonly RULE_dimExpr = 204;
    static readonly RULE_constantExpression = 205;
    static readonly RULE_expression = 206;
    static readonly RULE_lambdaExpression = 207;
    static readonly RULE_lambdaParameters = 208;
    static readonly RULE_inferredFormalParameterList = 209;
    static readonly RULE_lambdaBody = 210;
    static readonly RULE_assignmentExpression = 211;
    static readonly RULE_assignment = 212;
    static readonly RULE_leftHandSide = 213;
    static readonly RULE_assignmentOperator = 214;
    static readonly RULE_conditionalExpression = 215;
    static readonly RULE_conditionalOrExpression = 216;
    static readonly RULE_conditionalAndExpression = 217;
    static readonly RULE_inclusiveOrExpression = 218;
    static readonly RULE_exclusiveOrExpression = 219;
    static readonly RULE_andExpression = 220;
    static readonly RULE_equalityExpression = 221;
    static readonly RULE_relationalExpression = 222;
    static readonly RULE_shiftExpression = 223;
    static readonly RULE_additiveExpression = 224;
    static readonly RULE_multiplicativeExpression = 225;
    static readonly RULE_unaryExpression = 226;
    static readonly RULE_preIncrementExpression = 227;
    static readonly RULE_preDecrementExpression = 228;
    static readonly RULE_unaryExpressionNotPlusMinus = 229;
    static readonly RULE_postfixExpression = 230;
    static readonly RULE_postIncrementExpression = 231;
    static readonly RULE_postIncrementExpression_lf_postfixExpression = 232;
    static readonly RULE_postDecrementExpression = 233;
    static readonly RULE_postDecrementExpression_lf_postfixExpression = 234;
    static readonly RULE_castExpression = 235;
    static readonly literalNames: (string | null)[];
    static readonly symbolicNames: (string | null)[];
    static readonly ruleNames: string[];
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    literal(): LiteralContext;
    primitiveType(): PrimitiveTypeContext;
    numericType(): NumericTypeContext;
    integralType(): IntegralTypeContext;
    floatingPointType(): FloatingPointTypeContext;
    referenceType(): ReferenceTypeContext;
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    classType(): ClassTypeContext;
    classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext;
    classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext;
    interfaceType(): InterfaceTypeContext;
    interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext;
    interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext;
    typeVariable(): TypeVariableContext;
    arrayType(): ArrayTypeContext;
    dims(): DimsContext;
    typeParameter(): TypeParameterContext;
    typeParameterModifier(): TypeParameterModifierContext;
    typeBound(): TypeBoundContext;
    additionalBound(): AdditionalBoundContext;
    typeArguments(): TypeArgumentsContext;
    typeArgumentList(): TypeArgumentListContext;
    typeArgument(): TypeArgumentContext;
    wildcard(): WildcardContext;
    wildcardBounds(): WildcardBoundsContext;
    packageName(): PackageNameContext;
    packageName(_p: number): PackageNameContext;
    typeName(): TypeNameContext;
    packageOrTypeName(): PackageOrTypeNameContext;
    packageOrTypeName(_p: number): PackageOrTypeNameContext;
    expressionName(): ExpressionNameContext;
    methodName(): MethodNameContext;
    ambiguousName(): AmbiguousNameContext;
    ambiguousName(_p: number): AmbiguousNameContext;
    compilationUnit(): CompilationUnitContext;
    packageDeclaration(): PackageDeclarationContext;
    packageModifier(): PackageModifierContext;
    importDeclaration(): ImportDeclarationContext;
    singleTypeImportDeclaration(): SingleTypeImportDeclarationContext;
    typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext;
    singleStaticImportDeclaration(): SingleStaticImportDeclarationContext;
    staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext;
    typeDeclaration(): TypeDeclarationContext;
    classDeclaration(): ClassDeclarationContext;
    normalClassDeclaration(): NormalClassDeclarationContext;
    classModifier(): ClassModifierContext;
    typeParameters(): TypeParametersContext;
    typeParameterList(): TypeParameterListContext;
    superclass(): SuperclassContext;
    superinterfaces(): SuperinterfacesContext;
    interfaceTypeList(): InterfaceTypeListContext;
    classBody(): ClassBodyContext;
    classBodyDeclaration(): ClassBodyDeclarationContext;
    classMemberDeclaration(): ClassMemberDeclarationContext;
    fieldDeclaration(): FieldDeclarationContext;
    fieldModifier(): FieldModifierContext;
    variableDeclaratorList(): VariableDeclaratorListContext;
    variableDeclarator(): VariableDeclaratorContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    variableInitializer(): VariableInitializerContext;
    unannType(): UnannTypeContext;
    unannPrimitiveType(): UnannPrimitiveTypeContext;
    unannReferenceType(): UnannReferenceTypeContext;
    unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext;
    unannClassType(): UnannClassTypeContext;
    unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext;
    unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext;
    unannInterfaceType(): UnannInterfaceTypeContext;
    unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext;
    unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext;
    unannTypeVariable(): UnannTypeVariableContext;
    unannArrayType(): UnannArrayTypeContext;
    methodDeclaration(): MethodDeclarationContext;
    methodModifier(): MethodModifierContext;
    methodHeader(): MethodHeaderContext;
    result(): ResultContext;
    methodDeclarator(): MethodDeclaratorContext;
    formalParameterList(): FormalParameterListContext;
    formalParameters(): FormalParametersContext;
    formalParameter(): FormalParameterContext;
    variableModifier(): VariableModifierContext;
    lastFormalParameter(): LastFormalParameterContext;
    receiverParameter(): ReceiverParameterContext;
    throws_(): Throws_Context;
    exceptionTypeList(): ExceptionTypeListContext;
    exceptionType(): ExceptionTypeContext;
    methodBody(): MethodBodyContext;
    instanceInitializer(): InstanceInitializerContext;
    staticInitializer(): StaticInitializerContext;
    constructorDeclaration(): ConstructorDeclarationContext;
    constructorModifier(): ConstructorModifierContext;
    constructorDeclarator(): ConstructorDeclaratorContext;
    simpleTypeName(): SimpleTypeNameContext;
    constructorBody(): ConstructorBodyContext;
    explicitConstructorInvocation(): ExplicitConstructorInvocationContext;
    enumDeclaration(): EnumDeclarationContext;
    enumBody(): EnumBodyContext;
    enumConstantList(): EnumConstantListContext;
    enumConstant(): EnumConstantContext;
    enumConstantModifier(): EnumConstantModifierContext;
    enumBodyDeclarations(): EnumBodyDeclarationsContext;
    interfaceDeclaration(): InterfaceDeclarationContext;
    normalInterfaceDeclaration(): NormalInterfaceDeclarationContext;
    interfaceModifier(): InterfaceModifierContext;
    extendsInterfaces(): ExtendsInterfacesContext;
    interfaceBody(): InterfaceBodyContext;
    interfaceMemberDeclaration(): InterfaceMemberDeclarationContext;
    constantDeclaration(): ConstantDeclarationContext;
    constantModifier(): ConstantModifierContext;
    interfaceMethodDeclaration(): InterfaceMethodDeclarationContext;
    interfaceMethodModifier(): InterfaceMethodModifierContext;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext;
    annotationTypeBody(): AnnotationTypeBodyContext;
    annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext;
    annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext;
    annotationTypeElementModifier(): AnnotationTypeElementModifierContext;
    defaultValue(): DefaultValueContext;
    annotation(): AnnotationContext;
    normalAnnotation(): NormalAnnotationContext;
    elementValuePairList(): ElementValuePairListContext;
    elementValuePair(): ElementValuePairContext;
    elementValue(): ElementValueContext;
    elementValueArrayInitializer(): ElementValueArrayInitializerContext;
    elementValueList(): ElementValueListContext;
    markerAnnotation(): MarkerAnnotationContext;
    singleElementAnnotation(): SingleElementAnnotationContext;
    arrayInitializer(): ArrayInitializerContext;
    variableInitializerList(): VariableInitializerListContext;
    block(): BlockContext;
    blockStatements(): BlockStatementsContext;
    blockStatement(): BlockStatementContext;
    localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext;
    localVariableDeclaration(): LocalVariableDeclarationContext;
    statement(): StatementContext;
    statementNoShortIf(): StatementNoShortIfContext;
    statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext;
    emptyStatement_(): EmptyStatement_Context;
    labeledStatement(): LabeledStatementContext;
    labeledStatementNoShortIf(): LabeledStatementNoShortIfContext;
    expressionStatement(): ExpressionStatementContext;
    statementExpression(): StatementExpressionContext;
    ifThenStatement(): IfThenStatementContext;
    ifThenElseStatement(): IfThenElseStatementContext;
    ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext;
    assertStatement(): AssertStatementContext;
    switchStatement(): SwitchStatementContext;
    switchBlock(): SwitchBlockContext;
    switchBlockStatementGroup(): SwitchBlockStatementGroupContext;
    switchLabels(): SwitchLabelsContext;
    switchLabel(): SwitchLabelContext;
    enumConstantName(): EnumConstantNameContext;
    whileStatement(): WhileStatementContext;
    whileStatementNoShortIf(): WhileStatementNoShortIfContext;
    doStatement(): DoStatementContext;
    forStatement(): ForStatementContext;
    forStatementNoShortIf(): ForStatementNoShortIfContext;
    basicForStatement(): BasicForStatementContext;
    basicForStatementNoShortIf(): BasicForStatementNoShortIfContext;
    forInit(): ForInitContext;
    forUpdate(): ForUpdateContext;
    statementExpressionList(): StatementExpressionListContext;
    enhancedForStatement(): EnhancedForStatementContext;
    enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext;
    breakStatement(): BreakStatementContext;
    continueStatement(): ContinueStatementContext;
    returnStatement(): ReturnStatementContext;
    throwStatement(): ThrowStatementContext;
    synchronizedStatement(): SynchronizedStatementContext;
    tryStatement(): TryStatementContext;
    catches(): CatchesContext;
    catchClause(): CatchClauseContext;
    catchFormalParameter(): CatchFormalParameterContext;
    catchType(): CatchTypeContext;
    finally_(): Finally_Context;
    tryWithResourcesStatement(): TryWithResourcesStatementContext;
    resourceSpecification(): ResourceSpecificationContext;
    resourceList(): ResourceListContext;
    resource(): ResourceContext;
    primary(): PrimaryContext;
    primaryNoNewArray(): PrimaryNoNewArrayContext;
    primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext;
    primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext;
    primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext;
    primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext;
    primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext;
    primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext;
    primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext;
    primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext;
    classInstanceCreationExpression(): ClassInstanceCreationExpressionContext;
    classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext;
    classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext;
    typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext;
    fieldAccess(): FieldAccessContext;
    fieldAccess_lf_primary(): FieldAccess_lf_primaryContext;
    fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext;
    arrayAccess(): ArrayAccessContext;
    arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext;
    arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext;
    methodInvocation(): MethodInvocationContext;
    methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext;
    methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext;
    argumentList(): ArgumentListContext;
    methodReference(): MethodReferenceContext;
    methodReference_lf_primary(): MethodReference_lf_primaryContext;
    methodReference_lfno_primary(): MethodReference_lfno_primaryContext;
    arrayCreationExpression(): ArrayCreationExpressionContext;
    dimExprs(): DimExprsContext;
    dimExpr(): DimExprContext;
    constantExpression(): ConstantExpressionContext;
    expression(): ExpressionContext;
    lambdaExpression(): LambdaExpressionContext;
    lambdaParameters(): LambdaParametersContext;
    inferredFormalParameterList(): InferredFormalParameterListContext;
    lambdaBody(): LambdaBodyContext;
    assignmentExpression(): AssignmentExpressionContext;
    assignment(): AssignmentContext;
    leftHandSide(): LeftHandSideContext;
    assignmentOperator(): AssignmentOperatorContext;
    conditionalExpression(): ConditionalExpressionContext;
    conditionalOrExpression(): ConditionalOrExpressionContext;
    conditionalOrExpression(_p: number): ConditionalOrExpressionContext;
    conditionalAndExpression(): ConditionalAndExpressionContext;
    conditionalAndExpression(_p: number): ConditionalAndExpressionContext;
    inclusiveOrExpression(): InclusiveOrExpressionContext;
    inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
    exclusiveOrExpression(): ExclusiveOrExpressionContext;
    exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
    andExpression(): AndExpressionContext;
    andExpression(_p: number): AndExpressionContext;
    equalityExpression(): EqualityExpressionContext;
    equalityExpression(_p: number): EqualityExpressionContext;
    relationalExpression(): RelationalExpressionContext;
    relationalExpression(_p: number): RelationalExpressionContext;
    shiftExpression(): ShiftExpressionContext;
    shiftExpression(_p: number): ShiftExpressionContext;
    additiveExpression(): AdditiveExpressionContext;
    additiveExpression(_p: number): AdditiveExpressionContext;
    multiplicativeExpression(): MultiplicativeExpressionContext;
    multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
    unaryExpression(): UnaryExpressionContext;
    preIncrementExpression(): PreIncrementExpressionContext;
    preDecrementExpression(): PreDecrementExpressionContext;
    unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext;
    postfixExpression(): PostfixExpressionContext;
    postIncrementExpression(): PostIncrementExpressionContext;
    postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext;
    postDecrementExpression(): PostDecrementExpressionContext;
    postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext;
    castExpression(): CastExpressionContext;
    sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private packageName_sempred;
    private packageOrTypeName_sempred;
    private ambiguousName_sempred;
    private conditionalOrExpression_sempred;
    private conditionalAndExpression_sempred;
    private inclusiveOrExpression_sempred;
    private exclusiveOrExpression_sempred;
    private andExpression_sempred;
    private equalityExpression_sempred;
    private relationalExpression_sempred;
    private shiftExpression_sempred;
    private additiveExpression_sempred;
    private multiplicativeExpression_sempred;
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): ATN;
    static DecisionsToDFA: DFA[];
}
export declare class LiteralContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    IntegerLiteral(): TerminalNode;
    FloatingPointLiteral(): TerminalNode;
    BooleanLiteral(): TerminalNode;
    CharacterLiteral(): TerminalNode;
    StringLiteral(): TerminalNode;
    NullLiteral(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimitiveTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    numericType(): NumericTypeContext;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    BOOLEAN(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class NumericTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    integralType(): IntegralTypeContext;
    floatingPointType(): FloatingPointTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class IntegralTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    BYTE(): TerminalNode;
    SHORT(): TerminalNode;
    INT(): TerminalNode;
    LONG(): TerminalNode;
    CHAR(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class FloatingPointTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    FLOAT(): TerminalNode;
    DOUBLE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ReferenceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    typeVariable(): TypeVariableContext;
    arrayType(): ArrayTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext;
    interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext;
    classType_lf_classOrInterfaceType_list(): ClassType_lf_classOrInterfaceTypeContext[];
    classType_lf_classOrInterfaceType(i: number): ClassType_lf_classOrInterfaceTypeContext;
    interfaceType_lf_classOrInterfaceType_list(): InterfaceType_lf_classOrInterfaceTypeContext[];
    interfaceType_lf_classOrInterfaceType(i: number): InterfaceType_lf_classOrInterfaceTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    typeArguments(): TypeArgumentsContext;
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    DOT(): TerminalNode;
    Identifier(): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    typeArguments(): TypeArgumentsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    typeArguments(): TypeArgumentsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classType(): ClassTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeVariableContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ArrayTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    primitiveType(): PrimitiveTypeContext;
    dims(): DimsContext;
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    typeVariable(): TypeVariableContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class DimsContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACK_list(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK_list(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeParameterContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    typeParameterModifier_list(): TypeParameterModifierContext[];
    typeParameterModifier(i: number): TypeParameterModifierContext;
    typeBound(): TypeBoundContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeParameterModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeBoundContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    EXTENDS(): TerminalNode;
    typeVariable(): TypeVariableContext;
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    additionalBound_list(): AdditionalBoundContext[];
    additionalBound(i: number): AdditionalBoundContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AdditionalBoundContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    BITAND(): TerminalNode;
    interfaceType(): InterfaceTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeArgumentsContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LT(): TerminalNode;
    typeArgumentList(): TypeArgumentListContext;
    GT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeArgumentListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    typeArgument_list(): TypeArgumentContext[];
    typeArgument(i: number): TypeArgumentContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeArgumentContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    referenceType(): ReferenceTypeContext;
    wildcard(): WildcardContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class WildcardContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    QUESTION(): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    wildcardBounds(): WildcardBoundsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class WildcardBoundsContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    EXTENDS(): TerminalNode;
    referenceType(): ReferenceTypeContext;
    SUPER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PackageNameContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    packageName(): PackageNameContext;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeNameContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    packageOrTypeName(): PackageOrTypeNameContext;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PackageOrTypeNameContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    packageOrTypeName(): PackageOrTypeNameContext;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ExpressionNameContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    ambiguousName(): AmbiguousNameContext;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodNameContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AmbiguousNameContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    ambiguousName(): AmbiguousNameContext;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class CompilationUnitContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    EOF(): TerminalNode;
    packageDeclaration(): PackageDeclarationContext;
    importDeclaration_list(): ImportDeclarationContext[];
    importDeclaration(i: number): ImportDeclarationContext;
    typeDeclaration_list(): TypeDeclarationContext[];
    typeDeclaration(i: number): TypeDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PackageDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    PACKAGE(): TerminalNode;
    packageName(): PackageNameContext;
    SEMI(): TerminalNode;
    packageModifier_list(): PackageModifierContext[];
    packageModifier(i: number): PackageModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PackageModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ImportDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    singleTypeImportDeclaration(): SingleTypeImportDeclarationContext;
    typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext;
    singleStaticImportDeclaration(): SingleStaticImportDeclarationContext;
    staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SingleTypeImportDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    IMPORT(): TerminalNode;
    typeName(): TypeNameContext;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeImportOnDemandDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    IMPORT(): TerminalNode;
    packageOrTypeName(): PackageOrTypeNameContext;
    DOT(): TerminalNode;
    MUL(): TerminalNode;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SingleStaticImportDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    IMPORT(): TerminalNode;
    STATIC(): TerminalNode;
    typeName(): TypeNameContext;
    DOT(): TerminalNode;
    Identifier(): TerminalNode;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class StaticImportOnDemandDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    IMPORT(): TerminalNode;
    STATIC(): TerminalNode;
    typeName(): TypeNameContext;
    DOT(): TerminalNode;
    MUL(): TerminalNode;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classDeclaration(): ClassDeclarationContext;
    interfaceDeclaration(): InterfaceDeclarationContext;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    normalClassDeclaration(): NormalClassDeclarationContext;
    enumDeclaration(): EnumDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class NormalClassDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    CLASS(): TerminalNode;
    Identifier(): TerminalNode;
    classBody(): ClassBodyContext;
    classModifier_list(): ClassModifierContext[];
    classModifier(i: number): ClassModifierContext;
    typeParameters(): TypeParametersContext;
    superclass(): SuperclassContext;
    superinterfaces(): SuperinterfacesContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    PUBLIC(): TerminalNode;
    PROTECTED(): TerminalNode;
    PRIVATE(): TerminalNode;
    ABSTRACT(): TerminalNode;
    STATIC(): TerminalNode;
    FINAL(): TerminalNode;
    STRICTFP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeParametersContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LT(): TerminalNode;
    typeParameterList(): TypeParameterListContext;
    GT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeParameterListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    typeParameter_list(): TypeParameterContext[];
    typeParameter(i: number): TypeParameterContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SuperclassContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    EXTENDS(): TerminalNode;
    classType(): ClassTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SuperinterfacesContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    IMPLEMENTS(): TerminalNode;
    interfaceTypeList(): InterfaceTypeListContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceTypeListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    interfaceType_list(): InterfaceTypeContext[];
    interfaceType(i: number): InterfaceTypeContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassBodyContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    classBodyDeclaration_list(): ClassBodyDeclarationContext[];
    classBodyDeclaration(i: number): ClassBodyDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassBodyDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classMemberDeclaration(): ClassMemberDeclarationContext;
    instanceInitializer(): InstanceInitializerContext;
    staticInitializer(): StaticInitializerContext;
    constructorDeclaration(): ConstructorDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassMemberDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    fieldDeclaration(): FieldDeclarationContext;
    methodDeclaration(): MethodDeclarationContext;
    classDeclaration(): ClassDeclarationContext;
    interfaceDeclaration(): InterfaceDeclarationContext;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class FieldDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannType(): UnannTypeContext;
    variableDeclaratorList(): VariableDeclaratorListContext;
    SEMI(): TerminalNode;
    fieldModifier_list(): FieldModifierContext[];
    fieldModifier(i: number): FieldModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class FieldModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    PUBLIC(): TerminalNode;
    PROTECTED(): TerminalNode;
    PRIVATE(): TerminalNode;
    STATIC(): TerminalNode;
    FINAL(): TerminalNode;
    TRANSIENT(): TerminalNode;
    VOLATILE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class VariableDeclaratorListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    variableDeclarator_list(): VariableDeclaratorContext[];
    variableDeclarator(i: number): VariableDeclaratorContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class VariableDeclaratorContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    variableDeclaratorId(): VariableDeclaratorIdContext;
    ASSIGN(): TerminalNode;
    variableInitializer(): VariableInitializerContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class VariableDeclaratorIdContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    dims(): DimsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class VariableInitializerContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    expression(): ExpressionContext;
    arrayInitializer(): ArrayInitializerContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannPrimitiveType(): UnannPrimitiveTypeContext;
    unannReferenceType(): UnannReferenceTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannPrimitiveTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    numericType(): NumericTypeContext;
    BOOLEAN(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannReferenceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext;
    unannTypeVariable(): UnannTypeVariableContext;
    unannArrayType(): UnannArrayTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannClassOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext;
    unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext;
    unannClassType_lf_unannClassOrInterfaceType_list(): UnannClassType_lf_unannClassOrInterfaceTypeContext[];
    unannClassType_lf_unannClassOrInterfaceType(i: number): UnannClassType_lf_unannClassOrInterfaceTypeContext;
    unannInterfaceType_lf_unannClassOrInterfaceType_list(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[];
    unannInterfaceType_lf_unannClassOrInterfaceType(i: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannClassTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext;
    DOT(): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannClassType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    DOT(): TerminalNode;
    Identifier(): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    typeArguments(): TypeArgumentsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannClassType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannClassType(): UnannClassTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannInterfaceType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannTypeVariableContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnannArrayTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannPrimitiveType(): UnannPrimitiveTypeContext;
    dims(): DimsContext;
    unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext;
    unannTypeVariable(): UnannTypeVariableContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    methodHeader(): MethodHeaderContext;
    methodBody(): MethodBodyContext;
    methodModifier_list(): MethodModifierContext[];
    methodModifier(i: number): MethodModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    PUBLIC(): TerminalNode;
    PROTECTED(): TerminalNode;
    PRIVATE(): TerminalNode;
    ABSTRACT(): TerminalNode;
    STATIC(): TerminalNode;
    FINAL(): TerminalNode;
    SYNCHRONIZED(): TerminalNode;
    NATIVE(): TerminalNode;
    STRICTFP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodHeaderContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    result(): ResultContext;
    methodDeclarator(): MethodDeclaratorContext;
    throws_(): Throws_Context;
    typeParameters(): TypeParametersContext;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ResultContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannType(): UnannTypeContext;
    VOID(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodDeclaratorContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    formalParameterList(): FormalParameterListContext;
    dims(): DimsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class FormalParameterListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    receiverParameter(): ReceiverParameterContext;
    formalParameters(): FormalParametersContext;
    COMMA(): TerminalNode;
    lastFormalParameter(): LastFormalParameterContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class FormalParametersContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    formalParameter_list(): FormalParameterContext[];
    formalParameter(i: number): FormalParameterContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    receiverParameter(): ReceiverParameterContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class FormalParameterContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannType(): UnannTypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    variableModifier_list(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class VariableModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    FINAL(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class LastFormalParameterContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannType(): UnannTypeContext;
    ELLIPSIS(): TerminalNode;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    variableModifier_list(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    formalParameter(): FormalParameterContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ReceiverParameterContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannType(): UnannTypeContext;
    THIS(): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    Identifier(): TerminalNode;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class Throws_Context extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    THROWS(): TerminalNode;
    exceptionTypeList(): ExceptionTypeListContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ExceptionTypeListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    exceptionType_list(): ExceptionTypeContext[];
    exceptionType(i: number): ExceptionTypeContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ExceptionTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classType(): ClassTypeContext;
    typeVariable(): TypeVariableContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodBodyContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    block(): BlockContext;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InstanceInitializerContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    block(): BlockContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class StaticInitializerContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    STATIC(): TerminalNode;
    block(): BlockContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConstructorDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    constructorDeclarator(): ConstructorDeclaratorContext;
    constructorBody(): ConstructorBodyContext;
    constructorModifier_list(): ConstructorModifierContext[];
    constructorModifier(i: number): ConstructorModifierContext;
    throws_(): Throws_Context;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConstructorModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    PUBLIC(): TerminalNode;
    PROTECTED(): TerminalNode;
    PRIVATE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConstructorDeclaratorContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    simpleTypeName(): SimpleTypeNameContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    typeParameters(): TypeParametersContext;
    formalParameterList(): FormalParameterListContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SimpleTypeNameContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConstructorBodyContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    explicitConstructorInvocation(): ExplicitConstructorInvocationContext;
    blockStatements(): BlockStatementsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ExplicitConstructorInvocationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    THIS(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    SEMI(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    argumentList(): ArgumentListContext;
    SUPER(): TerminalNode;
    expressionName(): ExpressionNameContext;
    DOT(): TerminalNode;
    primary(): PrimaryContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EnumDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    ENUM(): TerminalNode;
    Identifier(): TerminalNode;
    enumBody(): EnumBodyContext;
    classModifier_list(): ClassModifierContext[];
    classModifier(i: number): ClassModifierContext;
    superinterfaces(): SuperinterfacesContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EnumBodyContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    enumConstantList(): EnumConstantListContext;
    COMMA(): TerminalNode;
    enumBodyDeclarations(): EnumBodyDeclarationsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EnumConstantListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    enumConstant_list(): EnumConstantContext[];
    enumConstant(i: number): EnumConstantContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EnumConstantContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    enumConstantModifier_list(): EnumConstantModifierContext[];
    enumConstantModifier(i: number): EnumConstantModifierContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    classBody(): ClassBodyContext;
    argumentList(): ArgumentListContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EnumConstantModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EnumBodyDeclarationsContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    SEMI(): TerminalNode;
    classBodyDeclaration_list(): ClassBodyDeclarationContext[];
    classBodyDeclaration(i: number): ClassBodyDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    normalInterfaceDeclaration(): NormalInterfaceDeclarationContext;
    annotationTypeDeclaration(): AnnotationTypeDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class NormalInterfaceDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    INTERFACE(): TerminalNode;
    Identifier(): TerminalNode;
    interfaceBody(): InterfaceBodyContext;
    interfaceModifier_list(): InterfaceModifierContext[];
    interfaceModifier(i: number): InterfaceModifierContext;
    typeParameters(): TypeParametersContext;
    extendsInterfaces(): ExtendsInterfacesContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    PUBLIC(): TerminalNode;
    PROTECTED(): TerminalNode;
    PRIVATE(): TerminalNode;
    ABSTRACT(): TerminalNode;
    STATIC(): TerminalNode;
    STRICTFP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ExtendsInterfacesContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    EXTENDS(): TerminalNode;
    interfaceTypeList(): InterfaceTypeListContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceBodyContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    interfaceMemberDeclaration_list(): InterfaceMemberDeclarationContext[];
    interfaceMemberDeclaration(i: number): InterfaceMemberDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceMemberDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    constantDeclaration(): ConstantDeclarationContext;
    interfaceMethodDeclaration(): InterfaceMethodDeclarationContext;
    classDeclaration(): ClassDeclarationContext;
    interfaceDeclaration(): InterfaceDeclarationContext;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConstantDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannType(): UnannTypeContext;
    variableDeclaratorList(): VariableDeclaratorListContext;
    SEMI(): TerminalNode;
    constantModifier_list(): ConstantModifierContext[];
    constantModifier(i: number): ConstantModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConstantModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    PUBLIC(): TerminalNode;
    STATIC(): TerminalNode;
    FINAL(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceMethodDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    methodHeader(): MethodHeaderContext;
    methodBody(): MethodBodyContext;
    interfaceMethodModifier_list(): InterfaceMethodModifierContext[];
    interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InterfaceMethodModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    PUBLIC(): TerminalNode;
    ABSTRACT(): TerminalNode;
    DEFAULT(): TerminalNode;
    STATIC(): TerminalNode;
    STRICTFP(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AnnotationTypeDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    AT(): TerminalNode;
    INTERFACE(): TerminalNode;
    Identifier(): TerminalNode;
    annotationTypeBody(): AnnotationTypeBodyContext;
    interfaceModifier_list(): InterfaceModifierContext[];
    interfaceModifier(i: number): InterfaceModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AnnotationTypeBodyContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    annotationTypeMemberDeclaration_list(): AnnotationTypeMemberDeclarationContext[];
    annotationTypeMemberDeclaration(i: number): AnnotationTypeMemberDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AnnotationTypeMemberDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext;
    constantDeclaration(): ConstantDeclarationContext;
    classDeclaration(): ClassDeclarationContext;
    interfaceDeclaration(): InterfaceDeclarationContext;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannType(): UnannTypeContext;
    Identifier(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    SEMI(): TerminalNode;
    annotationTypeElementModifier_list(): AnnotationTypeElementModifierContext[];
    annotationTypeElementModifier(i: number): AnnotationTypeElementModifierContext;
    dims(): DimsContext;
    defaultValue(): DefaultValueContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AnnotationTypeElementModifierContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    annotation(): AnnotationContext;
    PUBLIC(): TerminalNode;
    ABSTRACT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class DefaultValueContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    DEFAULT(): TerminalNode;
    elementValue(): ElementValueContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AnnotationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    normalAnnotation(): NormalAnnotationContext;
    markerAnnotation(): MarkerAnnotationContext;
    singleElementAnnotation(): SingleElementAnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class NormalAnnotationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    AT(): TerminalNode;
    typeName(): TypeNameContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    elementValuePairList(): ElementValuePairListContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ElementValuePairListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    elementValuePair_list(): ElementValuePairContext[];
    elementValuePair(i: number): ElementValuePairContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ElementValuePairContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    ASSIGN(): TerminalNode;
    elementValue(): ElementValueContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ElementValueContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    conditionalExpression(): ConditionalExpressionContext;
    elementValueArrayInitializer(): ElementValueArrayInitializerContext;
    annotation(): AnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ElementValueArrayInitializerContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    elementValueList(): ElementValueListContext;
    COMMA(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ElementValueListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    elementValue_list(): ElementValueContext[];
    elementValue(i: number): ElementValueContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MarkerAnnotationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    AT(): TerminalNode;
    typeName(): TypeNameContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SingleElementAnnotationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    AT(): TerminalNode;
    typeName(): TypeNameContext;
    LPAREN(): TerminalNode;
    elementValue(): ElementValueContext;
    RPAREN(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ArrayInitializerContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    variableInitializerList(): VariableInitializerListContext;
    COMMA(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class VariableInitializerListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    variableInitializer_list(): VariableInitializerContext[];
    variableInitializer(i: number): VariableInitializerContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class BlockContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    blockStatements(): BlockStatementsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class BlockStatementsContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    blockStatement_list(): BlockStatementContext[];
    blockStatement(i: number): BlockStatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class BlockStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext;
    classDeclaration(): ClassDeclarationContext;
    statement(): StatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class LocalVariableDeclarationStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    localVariableDeclaration(): LocalVariableDeclarationContext;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class LocalVariableDeclarationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannType(): UnannTypeContext;
    variableDeclaratorList(): VariableDeclaratorListContext;
    variableModifier_list(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class StatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext;
    labeledStatement(): LabeledStatementContext;
    ifThenStatement(): IfThenStatementContext;
    ifThenElseStatement(): IfThenElseStatementContext;
    whileStatement(): WhileStatementContext;
    forStatement(): ForStatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class StatementNoShortIfContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext;
    labeledStatementNoShortIf(): LabeledStatementNoShortIfContext;
    ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext;
    whileStatementNoShortIf(): WhileStatementNoShortIfContext;
    forStatementNoShortIf(): ForStatementNoShortIfContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class StatementWithoutTrailingSubstatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    block(): BlockContext;
    emptyStatement_(): EmptyStatement_Context;
    expressionStatement(): ExpressionStatementContext;
    assertStatement(): AssertStatementContext;
    switchStatement(): SwitchStatementContext;
    doStatement(): DoStatementContext;
    breakStatement(): BreakStatementContext;
    continueStatement(): ContinueStatementContext;
    returnStatement(): ReturnStatementContext;
    synchronizedStatement(): SynchronizedStatementContext;
    throwStatement(): ThrowStatementContext;
    tryStatement(): TryStatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EmptyStatement_Context extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class LabeledStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    COLON(): TerminalNode;
    statement(): StatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class LabeledStatementNoShortIfContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    COLON(): TerminalNode;
    statementNoShortIf(): StatementNoShortIfContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ExpressionStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    statementExpression(): StatementExpressionContext;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class StatementExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    assignment(): AssignmentContext;
    preIncrementExpression(): PreIncrementExpressionContext;
    preDecrementExpression(): PreDecrementExpressionContext;
    postIncrementExpression(): PostIncrementExpressionContext;
    postDecrementExpression(): PostDecrementExpressionContext;
    methodInvocation(): MethodInvocationContext;
    classInstanceCreationExpression(): ClassInstanceCreationExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class IfThenStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    IF(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    statement(): StatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class IfThenElseStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    IF(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    statementNoShortIf(): StatementNoShortIfContext;
    ELSE(): TerminalNode;
    statement(): StatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class IfThenElseStatementNoShortIfContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    IF(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    statementNoShortIf_list(): StatementNoShortIfContext[];
    statementNoShortIf(i: number): StatementNoShortIfContext;
    ELSE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AssertStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    ASSERT(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    SEMI(): TerminalNode;
    COLON(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SwitchStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    SWITCH(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    switchBlock(): SwitchBlockContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SwitchBlockContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACE(): TerminalNode;
    RBRACE(): TerminalNode;
    switchBlockStatementGroup_list(): SwitchBlockStatementGroupContext[];
    switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
    switchLabel_list(): SwitchLabelContext[];
    switchLabel(i: number): SwitchLabelContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SwitchBlockStatementGroupContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    switchLabels(): SwitchLabelsContext;
    blockStatements(): BlockStatementsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SwitchLabelsContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    switchLabel_list(): SwitchLabelContext[];
    switchLabel(i: number): SwitchLabelContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SwitchLabelContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    CASE(): TerminalNode;
    constantExpression(): ConstantExpressionContext;
    COLON(): TerminalNode;
    enumConstantName(): EnumConstantNameContext;
    DEFAULT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EnumConstantNameContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class WhileStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    WHILE(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    statement(): StatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class WhileStatementNoShortIfContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    WHILE(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    statementNoShortIf(): StatementNoShortIfContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class DoStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    DO(): TerminalNode;
    statement(): StatementContext;
    WHILE(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ForStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    basicForStatement(): BasicForStatementContext;
    enhancedForStatement(): EnhancedForStatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ForStatementNoShortIfContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    basicForStatementNoShortIf(): BasicForStatementNoShortIfContext;
    enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class BasicForStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    FOR(): TerminalNode;
    LPAREN(): TerminalNode;
    SEMI_list(): TerminalNode[];
    SEMI(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    statement(): StatementContext;
    forInit(): ForInitContext;
    expression(): ExpressionContext;
    forUpdate(): ForUpdateContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class BasicForStatementNoShortIfContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    FOR(): TerminalNode;
    LPAREN(): TerminalNode;
    SEMI_list(): TerminalNode[];
    SEMI(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    statementNoShortIf(): StatementNoShortIfContext;
    forInit(): ForInitContext;
    expression(): ExpressionContext;
    forUpdate(): ForUpdateContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ForInitContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    statementExpressionList(): StatementExpressionListContext;
    localVariableDeclaration(): LocalVariableDeclarationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ForUpdateContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    statementExpressionList(): StatementExpressionListContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class StatementExpressionListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    statementExpression_list(): StatementExpressionContext[];
    statementExpression(i: number): StatementExpressionContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EnhancedForStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    FOR(): TerminalNode;
    LPAREN(): TerminalNode;
    unannType(): UnannTypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    COLON(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    statement(): StatementContext;
    variableModifier_list(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EnhancedForStatementNoShortIfContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    FOR(): TerminalNode;
    LPAREN(): TerminalNode;
    unannType(): UnannTypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    COLON(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    statementNoShortIf(): StatementNoShortIfContext;
    variableModifier_list(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class BreakStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    BREAK(): TerminalNode;
    SEMI(): TerminalNode;
    Identifier(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ContinueStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    CONTINUE(): TerminalNode;
    SEMI(): TerminalNode;
    Identifier(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ReturnStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    RETURN(): TerminalNode;
    SEMI(): TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ThrowStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    THROW(): TerminalNode;
    expression(): ExpressionContext;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class SynchronizedStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    SYNCHRONIZED(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    block(): BlockContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TryStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    TRY(): TerminalNode;
    block(): BlockContext;
    catches(): CatchesContext;
    finally_(): Finally_Context;
    tryWithResourcesStatement(): TryWithResourcesStatementContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class CatchesContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    catchClause_list(): CatchClauseContext[];
    catchClause(i: number): CatchClauseContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class CatchClauseContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    CATCH(): TerminalNode;
    LPAREN(): TerminalNode;
    catchFormalParameter(): CatchFormalParameterContext;
    RPAREN(): TerminalNode;
    block(): BlockContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class CatchFormalParameterContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    catchType(): CatchTypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    variableModifier_list(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class CatchTypeContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannClassType(): UnannClassTypeContext;
    BITOR_list(): TerminalNode[];
    BITOR(i: number): TerminalNode;
    classType_list(): ClassTypeContext[];
    classType(i: number): ClassTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class Finally_Context extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    FINALLY(): TerminalNode;
    block(): BlockContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TryWithResourcesStatementContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    TRY(): TerminalNode;
    resourceSpecification(): ResourceSpecificationContext;
    block(): BlockContext;
    catches(): CatchesContext;
    finally_(): Finally_Context;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ResourceSpecificationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LPAREN(): TerminalNode;
    resourceList(): ResourceListContext;
    RPAREN(): TerminalNode;
    SEMI(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ResourceListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    resource_list(): ResourceContext[];
    resource(i: number): ResourceContext;
    SEMI_list(): TerminalNode[];
    SEMI(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ResourceContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unannType(): UnannTypeContext;
    variableDeclaratorId(): VariableDeclaratorIdContext;
    ASSIGN(): TerminalNode;
    expression(): ExpressionContext;
    variableModifier_list(): VariableModifierContext[];
    variableModifier(i: number): VariableModifierContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext;
    arrayCreationExpression(): ArrayCreationExpressionContext;
    primaryNoNewArray_lf_primary_list(): PrimaryNoNewArray_lf_primaryContext[];
    primaryNoNewArray_lf_primary(i: number): PrimaryNoNewArray_lf_primaryContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryNoNewArrayContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    literal(): LiteralContext;
    typeName(): TypeNameContext;
    DOT(): TerminalNode;
    CLASS(): TerminalNode;
    LBRACK_list(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK_list(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    VOID(): TerminalNode;
    THIS(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    classInstanceCreationExpression(): ClassInstanceCreationExpressionContext;
    fieldAccess(): FieldAccessContext;
    arrayAccess(): ArrayAccessContext;
    methodInvocation(): MethodInvocationContext;
    methodReference(): MethodReferenceContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryNoNewArray_lf_arrayAccessContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryNoNewArray_lfno_arrayAccessContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    literal(): LiteralContext;
    typeName(): TypeNameContext;
    DOT(): TerminalNode;
    CLASS(): TerminalNode;
    LBRACK_list(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK_list(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    VOID(): TerminalNode;
    THIS(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    classInstanceCreationExpression(): ClassInstanceCreationExpressionContext;
    fieldAccess(): FieldAccessContext;
    methodInvocation(): MethodInvocationContext;
    methodReference(): MethodReferenceContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryNoNewArray_lf_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext;
    fieldAccess_lf_primary(): FieldAccess_lf_primaryContext;
    arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext;
    methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext;
    methodReference_lf_primary(): MethodReference_lf_primaryContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext;
    fieldAccess_lf_primary(): FieldAccess_lf_primaryContext;
    methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext;
    methodReference_lf_primary(): MethodReference_lf_primaryContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryNoNewArray_lfno_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    literal(): LiteralContext;
    typeName(): TypeNameContext;
    DOT(): TerminalNode;
    CLASS(): TerminalNode;
    LBRACK_list(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK_list(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    unannPrimitiveType(): UnannPrimitiveTypeContext;
    VOID(): TerminalNode;
    THIS(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext;
    fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext;
    arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext;
    methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext;
    methodReference_lfno_primary(): MethodReference_lfno_primaryContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    literal(): LiteralContext;
    typeName(): TypeNameContext;
    DOT(): TerminalNode;
    CLASS(): TerminalNode;
    LBRACK_list(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    RBRACK_list(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    unannPrimitiveType(): UnannPrimitiveTypeContext;
    VOID(): TerminalNode;
    THIS(): TerminalNode;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext;
    fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext;
    methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext;
    methodReference_lfno_primary(): MethodReference_lfno_primaryContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassInstanceCreationExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    NEW(): TerminalNode;
    Identifier_list(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext;
    argumentList(): ArgumentListContext;
    classBody(): ClassBodyContext;
    expressionName(): ExpressionNameContext;
    primary(): PrimaryContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassInstanceCreationExpression_lf_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    DOT(): TerminalNode;
    NEW(): TerminalNode;
    Identifier(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext;
    argumentList(): ArgumentListContext;
    classBody(): ClassBodyContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ClassInstanceCreationExpression_lfno_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    NEW(): TerminalNode;
    Identifier_list(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext;
    argumentList(): ArgumentListContext;
    classBody(): ClassBodyContext;
    expressionName(): ExpressionNameContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class TypeArgumentsOrDiamondContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    typeArguments(): TypeArgumentsContext;
    LT(): TerminalNode;
    GT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class FieldAccessContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    primary(): PrimaryContext;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    Identifier(): TerminalNode;
    SUPER(): TerminalNode;
    typeName(): TypeNameContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class FieldAccess_lf_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    DOT(): TerminalNode;
    Identifier(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class FieldAccess_lfno_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    SUPER(): TerminalNode;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    Identifier(): TerminalNode;
    typeName(): TypeNameContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ArrayAccessContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    expressionName(): ExpressionNameContext;
    LBRACK_list(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    RBRACK_list(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext;
    primaryNoNewArray_lf_arrayAccess_list(): PrimaryNoNewArray_lf_arrayAccessContext[];
    primaryNoNewArray_lf_arrayAccess(i: number): PrimaryNoNewArray_lf_arrayAccessContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ArrayAccess_lf_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext;
    LBRACK_list(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    RBRACK_list(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary_list(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[];
    primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ArrayAccess_lfno_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    expressionName(): ExpressionNameContext;
    LBRACK_list(): TerminalNode[];
    LBRACK(i: number): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    RBRACK_list(): TerminalNode[];
    RBRACK(i: number): TerminalNode;
    primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext;
    primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary_list(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[];
    primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodInvocationContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    methodName(): MethodNameContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    argumentList(): ArgumentListContext;
    typeName(): TypeNameContext;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    Identifier(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    expressionName(): ExpressionNameContext;
    primary(): PrimaryContext;
    SUPER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodInvocation_lf_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    DOT(): TerminalNode;
    Identifier(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    argumentList(): ArgumentListContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodInvocation_lfno_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    methodName(): MethodNameContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    argumentList(): ArgumentListContext;
    typeName(): TypeNameContext;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    Identifier(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    expressionName(): ExpressionNameContext;
    SUPER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ArgumentListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodReferenceContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    expressionName(): ExpressionNameContext;
    COLONCOLON(): TerminalNode;
    Identifier(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    referenceType(): ReferenceTypeContext;
    primary(): PrimaryContext;
    SUPER(): TerminalNode;
    typeName(): TypeNameContext;
    DOT(): TerminalNode;
    classType(): ClassTypeContext;
    NEW(): TerminalNode;
    arrayType(): ArrayTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodReference_lf_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    COLONCOLON(): TerminalNode;
    Identifier(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MethodReference_lfno_primaryContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    expressionName(): ExpressionNameContext;
    COLONCOLON(): TerminalNode;
    Identifier(): TerminalNode;
    typeArguments(): TypeArgumentsContext;
    referenceType(): ReferenceTypeContext;
    SUPER(): TerminalNode;
    typeName(): TypeNameContext;
    DOT(): TerminalNode;
    classType(): ClassTypeContext;
    NEW(): TerminalNode;
    arrayType(): ArrayTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ArrayCreationExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    NEW(): TerminalNode;
    primitiveType(): PrimitiveTypeContext;
    dimExprs(): DimExprsContext;
    dims(): DimsContext;
    classOrInterfaceType(): ClassOrInterfaceTypeContext;
    arrayInitializer(): ArrayInitializerContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class DimExprsContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    dimExpr_list(): DimExprContext[];
    dimExpr(i: number): DimExprContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class DimExprContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LBRACK(): TerminalNode;
    expression(): ExpressionContext;
    RBRACK(): TerminalNode;
    annotation_list(): AnnotationContext[];
    annotation(i: number): AnnotationContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConstantExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    lambdaExpression(): LambdaExpressionContext;
    assignmentExpression(): AssignmentExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class LambdaExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    lambdaParameters(): LambdaParametersContext;
    ARROW(): TerminalNode;
    lambdaBody(): LambdaBodyContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class LambdaParametersContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier(): TerminalNode;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    formalParameterList(): FormalParameterListContext;
    inferredFormalParameterList(): InferredFormalParameterListContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InferredFormalParameterListContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    Identifier_list(): TerminalNode[];
    Identifier(i: number): TerminalNode;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class LambdaBodyContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    expression(): ExpressionContext;
    block(): BlockContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AssignmentExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    conditionalExpression(): ConditionalExpressionContext;
    assignment(): AssignmentContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AssignmentContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    leftHandSide(): LeftHandSideContext;
    assignmentOperator(): AssignmentOperatorContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class LeftHandSideContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    expressionName(): ExpressionNameContext;
    fieldAccess(): FieldAccessContext;
    arrayAccess(): ArrayAccessContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AssignmentOperatorContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    ASSIGN(): TerminalNode;
    MUL_ASSIGN(): TerminalNode;
    DIV_ASSIGN(): TerminalNode;
    MOD_ASSIGN(): TerminalNode;
    ADD_ASSIGN(): TerminalNode;
    SUB_ASSIGN(): TerminalNode;
    LSHIFT_ASSIGN(): TerminalNode;
    RSHIFT_ASSIGN(): TerminalNode;
    URSHIFT_ASSIGN(): TerminalNode;
    AND_ASSIGN(): TerminalNode;
    XOR_ASSIGN(): TerminalNode;
    OR_ASSIGN(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConditionalExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    conditionalOrExpression(): ConditionalOrExpressionContext;
    QUESTION(): TerminalNode;
    expression(): ExpressionContext;
    COLON(): TerminalNode;
    conditionalExpression(): ConditionalExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConditionalOrExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    conditionalAndExpression(): ConditionalAndExpressionContext;
    conditionalOrExpression(): ConditionalOrExpressionContext;
    OR(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ConditionalAndExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    inclusiveOrExpression(): InclusiveOrExpressionContext;
    conditionalAndExpression(): ConditionalAndExpressionContext;
    AND(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class InclusiveOrExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    exclusiveOrExpression(): ExclusiveOrExpressionContext;
    inclusiveOrExpression(): InclusiveOrExpressionContext;
    BITOR(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ExclusiveOrExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    andExpression(): AndExpressionContext;
    exclusiveOrExpression(): ExclusiveOrExpressionContext;
    CARET(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AndExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    equalityExpression(): EqualityExpressionContext;
    andExpression(): AndExpressionContext;
    BITAND(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class EqualityExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    relationalExpression(): RelationalExpressionContext;
    equalityExpression(): EqualityExpressionContext;
    EQUAL(): TerminalNode;
    NOTEQUAL(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class RelationalExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    shiftExpression(): ShiftExpressionContext;
    relationalExpression(): RelationalExpressionContext;
    LT(): TerminalNode;
    GT(): TerminalNode;
    LE(): TerminalNode;
    GE(): TerminalNode;
    INSTANCEOF(): TerminalNode;
    referenceType(): ReferenceTypeContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class ShiftExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    additiveExpression(): AdditiveExpressionContext;
    shiftExpression(): ShiftExpressionContext;
    LT_list(): TerminalNode[];
    LT(i: number): TerminalNode;
    GT_list(): TerminalNode[];
    GT(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class AdditiveExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    multiplicativeExpression(): MultiplicativeExpressionContext;
    additiveExpression(): AdditiveExpressionContext;
    ADD(): TerminalNode;
    SUB(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class MultiplicativeExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    unaryExpression(): UnaryExpressionContext;
    multiplicativeExpression(): MultiplicativeExpressionContext;
    MUL(): TerminalNode;
    DIV(): TerminalNode;
    MOD(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnaryExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    preIncrementExpression(): PreIncrementExpressionContext;
    preDecrementExpression(): PreDecrementExpressionContext;
    ADD(): TerminalNode;
    unaryExpression(): UnaryExpressionContext;
    SUB(): TerminalNode;
    unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PreIncrementExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    INC(): TerminalNode;
    unaryExpression(): UnaryExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PreDecrementExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    DEC(): TerminalNode;
    unaryExpression(): UnaryExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    postfixExpression(): PostfixExpressionContext;
    TILDE(): TerminalNode;
    unaryExpression(): UnaryExpressionContext;
    BANG(): TerminalNode;
    castExpression(): CastExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PostfixExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    primary(): PrimaryContext;
    expressionName(): ExpressionNameContext;
    postIncrementExpression_lf_postfixExpression_list(): PostIncrementExpression_lf_postfixExpressionContext[];
    postIncrementExpression_lf_postfixExpression(i: number): PostIncrementExpression_lf_postfixExpressionContext;
    postDecrementExpression_lf_postfixExpression_list(): PostDecrementExpression_lf_postfixExpressionContext[];
    postDecrementExpression_lf_postfixExpression(i: number): PostDecrementExpression_lf_postfixExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PostIncrementExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    postfixExpression(): PostfixExpressionContext;
    INC(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PostIncrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    INC(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PostDecrementExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    postfixExpression(): PostfixExpressionContext;
    DEC(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class PostDecrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    DEC(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
export declare class CastExpressionContext extends ParserRuleContext {
    constructor(parser?: Java8Parser, parent?: ParserRuleContext, invokingState?: number);
    LPAREN(): TerminalNode;
    primitiveType(): PrimitiveTypeContext;
    RPAREN(): TerminalNode;
    unaryExpression(): UnaryExpressionContext;
    referenceType(): ReferenceTypeContext;
    unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext;
    additionalBound_list(): AdditionalBoundContext[];
    additionalBound(i: number): AdditionalBoundContext;
    lambdaExpression(): LambdaExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: Java8ParserListener): void;
    exitRule(listener: Java8ParserListener): void;
    accept<Result>(visitor: Java8ParserVisitor<Result>): Result;
}
//# sourceMappingURL=Java8Parser.d.ts.map