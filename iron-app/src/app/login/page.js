'use client'
import { authenticate } from '@/app/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
import Link from "next/link";
import "./styles.modules.css"
 
export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
 
  return (
    <div className="login-form-wrapper">
      <form action={dispatch}>
        <label htmlFor="email">Email address</label>
        <input type="email" name="email" placeholder="Email" required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
        <Link href="">Forgot password?</Link>
        <LoginButton />
      </form>
      <div className="signup-link">
        <p>Not registered yet?</p>
        <Link href="">Sign up here</Link>
      </div>
    </div>
  );
}
 
function LoginButton() {
  const { pending } = useFormStatus()
 
  const handleClick = (event) => {
    if (pending) {
      event.preventDefault()
    }
  }
 
  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  )
}