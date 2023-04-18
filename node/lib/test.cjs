"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Java8Lexer_1 = require("./out/Java8Lexer.cjs");
const Java8Parser_1 = require("./out/Java8Parser.cjs");
const antlr4_1 = require("antlr4");
const input = "public class Main {}";
const chars = new antlr4_1.CharStream(input); // replace this with a FileStream as required
const lexer = new Java8Lexer_1.default(chars);
const tokens = new antlr4_1.CommonTokenStream(lexer);
const parser = new Java8Parser_1.default(tokens);
const tree = parser.compilationUnit();
console.log(tree.toStringTree(parser.ruleNames, parser));
//# sourceMappingURL=test.js.map