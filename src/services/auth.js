import Auth0 from 'auth0-js'

const auth0 = new Auth0.WebAuth({
  domain: process.env.AUTH0_NAMESPACE,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  audience: `https://${process.env.AUTH0_NAMESPACE}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid profile read:messages write:messages',
})

/**
 * Sets the user's Access Token, ID Token, and the Access Token's expiry time
 * @param {*} authResult resposne from Auth.handleAuthentication
 */
function setSession(authResult) {
  const expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime(),
  )
  localStorage.setItem('access_token', authResult.accessToken)
  localStorage.setItem('id_token', authResult.idToken)
  localStorage.setItem('expires_at', expiresAt)
}

/**
 * Looks for the result of authentication in the URL hash.
 * Then, the result is processed with the parseHash method from auth0.js
 */
export function handleAuthentication() {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult)
        resolve(authResult)
        // window.history.replace(paths.root);
      } else if (err) {
        // window.history.replace(paths.root);
        reject(err)
      }
    })
  })
}

/**
 * Removes the user's tokens and expiry time from browser storage
 */
export function logout() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('id_token')
  localStorage.removeItem('expires_at')
  // window.history.replace('/home');
}

/**
 * Redirect to Auth0 login page
 */
export function login() {
  auth0.authorize()
}

/**
 * Checks whether the expiry time for the user's Access Token has passed
 */
export function isAuthenticated() {
  const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
  return new Date().getTime() < expiresAt
}
