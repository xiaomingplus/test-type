# 一个typescript自定义模块类型的疑问

我的问题是：只要在 types/test.d.ts 里面import了别的文件里定义的类型，tsc编译就不通过，提示找不到'testModule'模块，如下：

```bash
src/index.ts:1:26 - error TS2307: Cannot find module 'testModule'.

1 import {someMethod} from 'testModule';
                         ~~~~~~~~~~~~

[23:09:09] Found 1 error. Watching for file changes.


```

## 如何重现

```bash
git clone https://github.com/xiaomingplus/test-type.git
cd test-type
npm i
npm start
```
