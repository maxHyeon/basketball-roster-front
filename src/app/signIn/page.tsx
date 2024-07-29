'use client'
import axios from "axios"
// import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    // await signIn("credentials", { username, password, callbackUrl: "/" })
    const cwr_u = document.cookie.replace(/(?:(?:^|.*;\s*)cwr_u\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const loginRequest = {username,password}
    try {
      const response = await axios.post('http://localhost:8080/login', loginRequest,{headers: {
        'Content-Type': 'application/json',
        'cwr_u': cwr_u
      }});
      // 로그인 성공 시 처리
      sessionStorage.setItem('userData', JSON.stringify(response.data.username));
      window.location.href = '/';
    } catch (error) {
      console.error('Error login', error);
    }
  }

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <p className="text-2xl antialiased font-light font-mono">Login</p>


        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label className="form-control flex basis-1/4 mb-2">
            <input
              className="input input-bordered "
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="form-control flex basis-1/4 mb-2">
            <input
              className="input input-bordered "
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button className="btn btn-outline" onClick={handleLogin}>Sign In</button>
          </form>
        </div>
    </main>

  )
}