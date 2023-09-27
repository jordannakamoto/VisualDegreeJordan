const express = require("express");
const admin = require("firebase-admin");
const router = express.Router();

// /api/validate-jwt
// post request
// client makes request to server by passing jwt generated by firebase-client
// server responds with a cookie that represents the login session
// cookie is then passed by the header defined in app.js throughout all app routes
router.post("/validate-idtoken", (req, res) => {

  // -------------------------------------------------
  // Security TODO:
  // -------------------------------------------------
  // Get the ID token passed and the CSRF token.
  const idToken = req.body.token.toString();

  // TODO::
  // const csrfToken = req.body.csrfToken.toString();
  // // Guard against CSRF attacks.
  // if (csrfToken !== req.cookies.csrfToken) {
  //   res.status(401).send("UNAUTHORIZED REQUEST!");
  //   return;
  // }

  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  // Create the session cookie. This will also verify the ID token in the process.
  // The session cookie will have the same claims as the ID token.
  // To only allow session cookie setting on recent sign-in, auth_time in ID token
  // can be checked to ensure user was recently signed in before creating a session cookie.
  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        // Set cookie policy for session cookie.
        const options = { maxAge: expiresIn, httpOnly: true, secure: true };
        res.cookie("session", sessionCookie, options);
        res.end(JSON.stringify({ status: "success" }));
      },
      (error) => {
        res.status(401).send("UNAUTHORIZED REQUEST!");
      }
    );
});

module.exports = router;
