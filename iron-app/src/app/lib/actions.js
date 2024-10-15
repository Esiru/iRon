'use server'
 
import signIn from '@/auth/signIn.js'
 
export async function authenticate(_currentState, formData) {
  try {
    const result = signIn('credentials', formData)
    console.log(result)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}