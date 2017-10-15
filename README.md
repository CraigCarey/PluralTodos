When I was working through Pluralsight's 'Build Cross Platform React Native Apps with Exponent and Redux' course I
noticed parts of it use deprecated components. This is an attempt to rewrite it using more up to date techniques.

## Getting started

```bash
$ brew install nvm
$ nvm install 6.11.4 # (latest LTS version)
$ nvm use 6.11.4
$ npm install -g create-react-native-app
$ npm install -g watchman
$ create-react-native-app PluralTodos
$ npm install --save react-navigation
$ npm install --save prop-types
$ cd PluralTodos
$ npm start
```

## Debugging
In emulator, press CTRL + CMD + z to launch developer tools, then select 'Debug Remote JS' to debug in Chrome
