
# Silver Bullet ABCjs plug

## Installation
Run the {[Plugs: Add]} command and paste in: `github:dandimrod/silverbullet-abcjs/abcjs.plug.js`

That's all!

## Use

Put a abc notation block in your markdown:

    ```abc
    X:1
    K:DDD AA|BBA2|
    ```

And move your cursor outside of the block to live preview it!

**Note:** [abcjs](https://github.com/paulrosen/abcjs) itself is not bundled with this plug, it pulls the JavaScript, CSS and fonts from the JSDelivr CDN.

## Build
Assuming you have Deno and Silver Bullet installed, simply build using:

```shell
deno task build
```

Or to watch for changes and rebuild automatically

```shell
deno task watch
```

Then, load the locally built plug, add it to your `PLUGS` note with an absolute path, for instance:

```
- file:/Users/you/path/to/abcjs.plug.json
```

And run the `Plugs: Update` command in SilverBullet.

## Disclaimer

Based heavily on the plug [KaTeX](https://silverbullet.md/Plugs/KaTeX) by Zef Hemel.