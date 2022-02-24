import { useAuthenticator, Authenticator, Flex, Grid, useTheme } from "@aws-amplify/ui-react";
import { Amplify, I18n } from "aws-amplify";

import { Dashboard } from "./Home";
import "./styles.css";
//import '@aws-amplify/ui-react/styles.css';


import awsExports from "./aws-exports";
Amplify.configure(awsExports);
I18n.putVocabulariesForLanguage('en', {
  'Sign In': 'Login', // Tab header
  'Sign in': 'Log in', // Button label
  'Sign in to your account': 'Welcome Back!',
  Username: 'Enter your username', // Username label
  Password: 'Enter your password', // Password label
  'Forgot your password?': 'Reset Password',
});

export default function App() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  if (user) {
    return <Dashboard />;
  }

  return (
    <Grid templateColumns={{ base: "10fr 0", medium: "30fr 1fr" }}>
      
      <Flex justifyContent="center">
        <Authenticator hideSignUp={true}>
          {({ signOut, user }) => (
              <Dashboard/>
          )}
        </Authenticator>
      </Flex>

    </Grid>
  );
}
