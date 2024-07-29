// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jdoe" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // 사용자 인증 로직 구현
//         // Spring Boot 서버에 API 요청을 보내 사용자 인증 수행
//         const response = await fetch(`${process.env.SPRING_API_URL}/login`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(credentials),
//         })

//         const user = await response.json()

//         if (response.ok && user) {
//           return user
//         } else {
//           return null
//           throw new Error("Invalid username or password")
//         }
//       },
//     }),
//   ],
//   pages:{
//     signIn: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// })