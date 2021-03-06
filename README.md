# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# react-website

### Where is serviceWorker.js? It got replaced with reportWebVitals ?

https://stackoverflow.com/questions/64850206/serviceworker-missing-from-reactapp

A. Yes, this is an update after CRAv4 and React 17. Create-React-App’s (CRA) boilerplate now comes set up to record those measurements out of the box (In an update, they switched from Service worker to the Workbox InjectManifest plugin and moved the PWA templates into their own repository. )

## VS Code trick

          Type "Link" then press TAB.
          it becomes <Link></Link>

## Font Awesome

https://saruwakakun.com/html-css/basic/font-awesome

ウェブサイトやブログで Web アイコンフォントを表示できるようにしてくれるサービス
ウェブページ上で文字と同じように表示できるアイコンのことです。画像でアイコンを貼るのと違い、拡大してもぼやけませんし、色もサイズも簡単に変えることができます。

In Index.html within Public Folder

<!-- Font Awesome
    Below code pulled from "Font Awesome CDN" page -->
<link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
      integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
      crossorigin="anonymous"
    />

24:07
https://youtu.be/I2UBjN5ER4s?t=1447

## Arrow Function ?

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## Why use ` (backticks) and $ ?

https://betterprogramming.pub/javascript-how-backticks-work-de269e0fb8ba

### " it will allow us to concatenate and interpolate strings so our code is much cleaner."

####

// "Old syntax"
const userInfo = 'User info: ' + name + ' ' + surname + ' ' + telephone;
// "New syntax"
const userInfo = `User info: ${name} ${surname} ${telephone}`;

### "can also execute code within template strings"

####

// "Old syntax"
const userInfo = 'User info: ' + user.getName() + ' ' + user.getEmail();
// "New syntax"
const userInfo = `User info: ${user.getName()} ${user.getEmail()}`;

### "Another advantage of using backticks ( `` ) is that it is no longer necessary to escape double quotes ( "" ) or single quotes ( '' ), "

####

const foo = 'Can\'t connect to the server';
const bar = `Can't connect to the server`;
Or for example:

####

const foo = "Error: \"Introduce a valid email\"";
const bar = `Error: "Introduce a valid email"`;

BACKTICKS ARE VERY HANDY AND COOL!!
https://youtu.be/I2UBjN5ER4s?t=1872
