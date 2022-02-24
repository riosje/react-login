## Getting started

#### 1) Clone the [repository](https://github.com/riosje/react-login)

```Shell
git clone https://github.com/riosje/react-login
cd react-login
```

#### 2) Install project the dependencies
```Shell
npm ci
```

#### 3) configure the `aws-exports.js` file with your cognito
```Javascript
module.exports = {
region:  'us-west-2',
userPoolId:  'us-west-2_XXXX',
userPoolWebClientId:  'XXXXXXXX',
authenticationFlowType:  'USER_PASSWORD_AUTH',
mandatorySignIn:  true,
};
```

#### 4)  test the application executing the following command which start a server with debug capabilities, the server is tarted in the following address `http://localhost:3000`
```Shell
npm start
```

#### 5) build the application for production deployment, this will create a folder `build` with all the static file ready to be deployed into a web server
```Shell
npm run build
```

#### 6) OPTIONAL: install a webserver locally to test the builded application, execute the following commands
```Shell
npm install -g serve 
serve -s build -l 4000
```