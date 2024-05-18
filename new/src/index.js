import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
<Auth0Provider
    domain="4am.us.auth0.com"
    clientId="fOlGcjLhsVbFc5w4Hq2JWruYAoNKo8K0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
 
);


