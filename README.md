## Introduction

`detect-file-content` will detect file content string intervally.

## Params

name | description | type | default | required
---- | ---- | ---- | ---- | ----
`internalTime` | interval duration | `Number: Millisecond` | `1000` | `false`
`maxTimes` | interval duration | `Number: Int` | `180` | `false` 
`filePath` | absolute file path | `String` | `''` | `true`
`matchReg` | RegExp | matchReg | `null` | `''` | `true`

## Returns

+   success

    ```js
    { success: true, count: 10, content: 'xxx' }
    ```

    >   count: detect count
    >   content: file content

+   fail

    ```js
    { success: false, reason: 'xxx', count: xx }
    ```

    >   count: detect count

    >   reasons

    +   params error
        
        +   `"filePath" should be passed in as string`
        +   `"matchReg" should be passed in as RegExp`

    +   timeout: `'timeout'`

## Usage

```js
const detectResult = await detect({ 
    filePath: 'xxx/xx/xxx.json', 
    matchReg: /hello/, 
    maxTimes: 12, 
    internalTime: 500 
});
console.log(detectResult);
```

log:

```bash
{ success: true, count: 10, content: 'xxx }
```


```bash
{ success: false, count: 10, reason: 'timeout' }
```