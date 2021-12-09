<div align="center">
  <h1>
    Vanilla Framework Example
    <br />
    <a href="https://app.codacy.com/gh/sachie/vanilla-framework-example/dashboard"><img alt="Test coverage" src="https://img.shields.io/codacy/coverage/f66e5a96030b440f8a610241e019e01f"></a>&nbsp;
    <a href="https://github.com/sachie/vanilla-framework-example/actions"><img alt="GitHub workflow status" src="https://img.shields.io/github/workflow/status/sachie/vanilla-framework-example/Vanilla%20Framework%20Example%20CI"></a>&nbsp;
    <a href="https://app.codacy.com/gh/sachie/vanilla-framework-example/dashboard"><img alt="Code Quality" src="https://img.shields.io/codacy/grade/f66e5a96030b440f8a610241e019e01f"></a>&nbsp;
    <a href="https://github.com/sachie/vanilla-framework-example/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/sachie/vanilla-framework-example?color=dark%20green"></a>
  </h1>
</div>
<br />

An example of the use of [Vanilla Framework](https://vanillaframework.io/) with a react app.

**See it live: https://sachie.github.io/vanilla-framework-example/**

<br />

## Main Features

- Uses [Vanilla Framework](https://vanillaframework.io/) with [react-components](https://github.com/canonical-web-and-design/react-components) by [Canonical](https://canonical.com/).
- Includes a reusable Post Card component built with the Vanilla Framework [Card](https://vanillaframework.io/docs/patterns/card) component.
- All hyperlinks use the Vanilla Framework [Link](https://vanillaframework.io/docs/patterns/links) component.
- Loading and error states are shown using the Vanilla Framework [Spinner](https://canonical-web-and-design.github.io/react-components/?path=/docs/spinner--default-story) and [Notification](https://vanillaframework.io/docs/patterns/notification) components.
- All data for the cards are loaded dynamically from a hosted `.json` file, and passed down to the UI components.
- The page is fully responsive through the responsiveness of Vanilla Framework components and the use of CSS Flex.
- More details are available in code comments.

<br />

## Screenshots

<details><summary>Click to expand</summary>
<div align="center">

**Data loaded**

  <img src="https://user-images.githubusercontent.com/6166712/145431247-d5d715f3-a030-444e-b61f-e61bc6cd8436.png" width="800">
  <br />  <br />

**Data loading**

  <img src="https://user-images.githubusercontent.com/6166712/145431459-55d9ce06-7be6-45ab-9a85-3418f562d849.png" width="600">
  <br />  <br />

**Network/unexpected error**

  <img src="https://user-images.githubusercontent.com/6166712/145431563-127342a5-17a6-4d3a-b1b7-10263dba10a3.png" width="600">
  <br />  <br />

**Responsiveness**

  <div valign="top" align="top">
    <img src="https://user-images.githubusercontent.com/6166712/145432692-7e2b798c-ded9-49f6-bec0-4048dcb9975b.png" width="300">
    <img src="https://user-images.githubusercontent.com/6166712/145432634-f6120de3-3247-4648-ba9d-22ecf736b2f8.png" width="300">
  </div>
</div>
</details>

<br />

## Other Project Features

- **100% test coverage for all components** with [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/).
- Continuous Integration with [Github Actions](https://github.com/sachie/vanilla-framework-example/actions) to build and test when code is merged or PRs are opened.
- Test coverage reporting with [istanbul](https://github.com/gotwarlost/istanbul).
- Code quality and test coverage analysis with [Codacy](https://app.codacy.com/gh/sachie/vanilla-framework-example/dashboard).
- [Live version](https://sachie.github.io/vanilla-framework-example/) deployed with Github Pages.
- Git hooks with [husky](https://github.com/typicode/husky) to run lint checks and tests before committing/pushing code.
- CSS Modules to avoid classname clashing and neatly organize stylesheets.
- Eslint, Stylelint and Prettier, with comprehensive configs and scripts for each.

<br />

## How to run locally

1. `git clone git@github.com:sachie/vanilla-framework-example.git`

2. `cd vanilla-framework-example`

3. `yarn` or `npm i`  (or [`npm i --legacy-peer-deps`](https://stackoverflow.com/questions/66239691/what-does-npm-install-legacy-peer-deps-do-exactly-when-is-it-recommended-wh))

4. `yarn start` or `npm start`

[Node >= 14.0.0 and npm >= 5.6](https://nodejs.org/en/) are required on your environment.

<br />

## Available Scripts

**Note: `npm` or `npm run` can be used instead of `yarn` if preferred**
&nbsp;

- **`yarn start`** - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page or component will reload when you make edits.

- **`yarn test`** - Launches the test runner in the interactive watch mode. See the React documentation on [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- **`yarn test:no-watch`** - Runs tests without watch mode. Is used for the pre-push git hook, and can be used with continuous integration.

- **`yarn test:coverage`** - Runs tests without watch mode and outputs coverage reports to `/coverage`.

- **`yarn build`** - Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

- **`yarn lint`** - Runs eslint, stylelint and prettier checks, but **does not** fix any issues.

- **`yarn lint:fix`** - Runs eslint, stylelint and prettier checks, and fixes possible issues. Some issues might still require manual fixing.

The following scripts are also included if the linters need to be used separately.

**`eslint, eslint:fix, stylelint, stylelint:fix, prettier, prettier:fix`**

<br />

## License

This project is licensed under the MIT license, Copyright (c) 2021 Sachindra C. Ariyasinghe. For more information check the `LICENSE` file.
