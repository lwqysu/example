# 将g4生成为ts文件

执行
```
java -jar antlr-4.12.0-complete.jar -visitor  -Dlanguage=TypeScript -o out/ Java8Parser.g4
java -jar antlr-4.12.0-complete.jar -visitor  -Dlanguage=TypeScript -o out/ Java8Lexer.g4 
```