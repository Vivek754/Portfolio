// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { account } from "../appwrite/appwriteConfig";
// // import { useAuth } from "../appwrite/auth";

// const Login = () => {
//   // const { user, loginUser } = useAuth();
//   const navigate = useNavigate();

//   // const loginForm = useRef(null);

//   // useEffect(() => {
//   //   if (user) {
//   //     navigate("/");
//   //   }
//   // });

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const email = loginForm.current.email.value;
//   //   const password = loginForm.current.password.value;

//   //   const userInfo = { email, password };

//   //   loginUser(userInfo);
//   // };
//   const [userData, setUserData] = useState({ email: "", password: "" });
  

//   const handleSubmit = async () => {
//     try {
//       await account.createEmailPasswordSession(userData.email, userData.password);
//      console.log("login successful");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="login-register-container">
//         <div>
//           <div className="form-field-wrapper">
//             <label>Email:</label>
//             <input
//               required
//               type="email"
//               name="email"
//               placeholder="Enter email..."
//               onChange={(e) =>
//                 setUserData({ ...userData, email: e.target.value })
//               }
//             />
//           </div>

//           <div className="form-field-wrapper">
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter password..."
//               autoComplete="password"
//               onChange={(e) =>
//                 setUserData({ ...userData, password: e.target.value })
//               }
//             />
//           </div>

//           <div className="form-field-wrapper">
//             <input
//               type="submit"
//               value="Login"
//               className="btn"
//               onClick={handleSubmit}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
