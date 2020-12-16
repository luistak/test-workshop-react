# Testing Workshop - React 🔍

## @testing-library 🐙 best practices

### Running
To run the app execute
```bash
yarn start
```

## ✏️ Exercise

### Todo's

In the [`customRender.test.js`](src/__tests__/customRender.test.js) there is a small test and you will need to

1. Fix the tests adding a [Wrapper](https://testing-library.com/docs/react-testing-library/api#wrapper) or a [`customRender`](https://testing-library.com/docs/react-testing-library/setup#custom-render)

To run the tests execute
```bash
yarn customRender
```

## :pen: Extra exercise - 1️⃣

Now just change the App import
In the [`customRender.test.js`](src/__tests__/customRender.test.js) change the import from:

```js
import { Cart, EcommerceProvider } from '../app';
```
to

```js
import { Cart, EcommerceProvider } from '../app-redux';
```

And you need to:

1. Fix the test now with a `redux` Provider

## 🤖 Extra exercise - 02

### Todo's

In the [`app.integration.test.js`](src/__tests__/app.integration.test.js) there is a test with several instructions and you need to

1. Automate every instruction following the @testing-library best practices
2. Switch from `../app` to `../app-redux` and make sure your tests are resilient

## 🔗 Helpful links

* [Isolate your tests](https://kentcdodds.com/blog/test-isolation-with-react)
* [Write fewer but longer tests](https://kentcdodds.com/blog/write-fewer-longer-tests)
* [Avoid nesting](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)
* [Avoid hasty test abstractions](https://kentcdodds.com/blog/aha-testing)
* [Avoid testing implementation details](https://kentcdodds.com/blog/testing-implementation-details)
* [Common mistakes using @testing-library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
