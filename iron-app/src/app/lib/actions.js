'use client'
import signIn from '@/auth/signIn.js'
import fakeUserService from '@/app/lib/fakeUserService'
 
export async function authenticate(_currentState, formData) {
  try {
    const result = signIn('credentials', formData);
    console.log(result);
    fakeUserService()
  } catch (error) {
    console.log(error)
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