code -> code

import { zip } from 'lodash

import { zip } from 'lodash/zip'

1.  code -> reg 处理字符串 -> code
2.  code -> AST -> 树 CRUD -> 另外一棵 AST -> 另外一份 code

HTML -> AST -> appendChild createElement -> 另外一棵AST -> 渲染

 js 词法
 js 代码 由什么组成
 - whteSpace
 -  换行
 - comment
 - token 
    -   numberLiteral   数字字面量
    -   stringLiteral   字符串字面量
    -   符号            [] {} ()
    -   indetify        var c = b + 5