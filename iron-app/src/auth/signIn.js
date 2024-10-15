const validCredentials = {
    email: 'evenstet@yahoo.no',
    password: 'admin'
  };
  
export default function signIn(provider, formData) {
  // Simulate checking credentials using the 'credentials' provider
  if (provider === 'credentials') {
    const symbolKey = Object.getOwnPropertySymbols(formData)[0];
    const stateArray = formData[symbolKey];
    let email = stateArray.find((field) => field.name === "email")?.value;
    let password = stateArray.find((field) => field.name === "password")?.value;
    // Compare formData with validCredentials for testing
    if (
      email === validCredentials.email &&
      password === validCredentials.password
    ) {
      
      return "Sign-in successful!";
    } else {
      const error = new Error("Invalid credentials.");
      error.type = "CredentialsSignin";
      throw error;
    }
  }

  // If another provider is used, you can extend or return an error for unsupported providers
  const error = new Error("Unsupported provider.");
  error.type = "UnsupportedProvider";
  throw error;
}