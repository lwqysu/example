import JavaLexer from './out/Java8Lexer';
import JavaParser from './out/Java8Parser';
import { CharStream, CommonTokenStream }  from 'antlr4';

const input = "public class Main {}"
const chars = new CharStream(input); // replace this with a FileStream as required
const lexer = new JavaLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new JavaParser(tokens);
const tree = parser.compilationUnit();
console.log(tree.toStringTree(parser.ruleNames,parser));