# Testing Workshop - React 🔍

## @testing-library 🐙 best practices

### Running the exercise
1. Go to [`app.test.js`](src/app.test.js) file
2. To run the app execute
> yarn start
3. To run the tests execute
> yarn test 

## ✏️ Exercise

In the `app.tests.js` there is a working integration test and you will need to:

1. Refactor the test using the best practices you have learned

### 🤖 Extra exercise

In the `app.js` there is a `limit` property which controls the maximun number of clicks, than in this exercise you'll need to:

1. Add in the current test a `rerender()` usage changing the `<App />` `limit` property
2. Add the right assertions to ensure that this new `limit` works

## 🔗 Helpful links

* [Isolate your tests](https://kentcdodds.com/blog/test-isolation-with-react)
* [Write fewer but longer tests](https://kentcdodds.com/blog/write-fewer-longer-tests)
* [Avoid nesting](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)
* [Avoid hasty test abstractions](https://kentcdodds.com/blog/aha-testing)
* [Avoid testing implementation details](https://kentcdodds.com/blog/testing-implementation-details)
* [Common mistakes using @testing-library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
