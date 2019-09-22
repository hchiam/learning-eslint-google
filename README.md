# Learn ESLint with [Linter Rules](https://github.com/google/eslint-config-google) for the [Google JS Style Guide](https://google.github.io/styleguide/jsguide.html)

## To Use this Repo as a Template

```bash
npm install
```

Now you can see your .js code get auto-annotated with underlines in your code editor.

You can now also run a check in command line:

```bash
npm run lint
```

## Secret Sauce (When Starting from Scratch)

```bash
npm install --save-dev eslint
```

```bash
./node_modules/.bin/eslint --init
```

(Follow instructions.)

You should see .eslintrc.js and this inside it:

```js
  'extends': [
    'google',
  ],
```

## Bonus Special: Command Line Use

(Instead of only relying on editor.)

package.json

```json
  "scripts": {
    ...
    "lint": "eslint ./"
  },
```

Then in command line:

```bash
npm run lint
```

You should see a message that looks something like this:

```bash
# ...
/.../test-google-linter/index.js
  7:25  error  Missing semicolon  semi
# (and a bunch of other messages)
```

Reference: https://www.youtube.com/watch?v=qhuFviJn-es
