# EventLoop

js is synchronous and single threaded bydefault

## There can be async behaviour:

-with BrowserAPI -setTimeout, setinterval, setImmediate, nextTick
-with promises
-with event handlers
a function not executed immediately after it must be executed after the while it has some status during the execution. At final, it may resolve {resolve() => success} or reject {reject => unsuccess}

## callback

- call back function is that pass as argument other parameter to another functions

## morden java script divided into two caegories

-common js(cjs) -> supports OOPS -> require

- priority (nextTick, promise, setImmediate/setTimeout)
- Modules (.mjs) -> follow modular approach -> import
  - priority (promise, nextTick, setImmediate/setTimeout)

## s module directly communicate with os rather than browser

the common operation of file or folder are

1. file -> writeFile, readFile, appendFile
2. folder -> mkdir, md, rmdir, rm
3. File method -> stack,lstack,rstack
4. watch -> watch, unwatch

## all functions start with promise so it must call with awake
