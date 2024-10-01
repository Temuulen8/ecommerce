// "use client";

// import { createContext, useState } from "react";
// import axios from "axios";
// import { apiUrl } from "@/lib/utils";

// export const UserContext = createContext("");

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const fetchUserData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(`${apiUrl}/users/profile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         const { user } = response.data;
//         setUser(user);
//         console.log("USER", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   return (
//     <UserContext.Provider value={{ user, fetchUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };