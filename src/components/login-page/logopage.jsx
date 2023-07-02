// import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";

// import SignIn from "./sign-in.component";

// const LogoPage = () => {
//   const history = useHistory();

//   useEffect(() => {
//     const redirectTimeout = setTimeout(() => {
//       history.push("/singIn");
//       <SignIn />;
//     }, 5000); // Redirect after 5 seconds

//     return () => {
//       clearTimeout(redirectTimeout);
//     };
//   }, [history]);

//   return (
//     <div>
//       <h1>First Page</h1>
//       {/* <SignIn /> */}
//       <p>Redirecting to the next page...</p>
//     </div>
//   );
// };

// export default LogoPage;
