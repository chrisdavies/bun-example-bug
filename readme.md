# Bun bug demo

- Run `bun ./index.ts`
- Go to [http://localhost:3000](http://localhost:3000)
- Submit the form

## Expected

You see `You pasted: a bunch of stuff here...`

## Actual

You see `You pasted: ""`

## Misc

If you replace the `await import` with an old fashioned `require` the issue goes away.

Also, strangely, if you add an await *before* you do the `await import`, the issue goes away, for example:

```js
// In index.ts, add this setTimeout line before the async import.
await new Promise((r) => setTimeout(r, 1));
const { Page } = await import('./hi');
```
