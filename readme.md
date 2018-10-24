# A typescript custom type declaration question

[中文版](/readme-zh.md)

Here is my question：When I import a custom type in types/test.d.ts ，tsc will can't compile，it can't find module'testModule',

```bash
src/index.ts:1:26 - error TS2307: Cannot find module 'testModule'.

1 import {someMethod} from 'testModule';
                         ~~~~~~~~~~~~

[23:09:09] Found 1 error. Watching for file changes.


```

## how to run

```bash
git clone https://github.com/xiaomingplus/test-type.git
cd test-type
npm i
npm start
```
