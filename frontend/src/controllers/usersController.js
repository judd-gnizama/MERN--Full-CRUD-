
const backendBaseURL = process.env.NODE_ENV === 'development' ? process.env.BACKEND_URL_DEV : process.env.BACKEND_URL_DEPLOY



// ------------------------ LOGIN USER ----------------------------

const loginUser = async (email, password) => {
  if (!email || !password) {
    throw Error('All fields are required')
  }

  const res = await fetch(`${backendBaseURL}/api/users/login`, {
    method: 'POST', 
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json();

  if (!res.ok) {
    throw Error(data.error);
  }

  localStorage.setItem('token', data.token);
  localStorage.setItem('email', data.email);

  return data;

};


// ------------------------ REGISTER USER ----------------------------
const registerUser = async (email, password, passwordConfirm) => {
  if (!email || !password || !passwordConfirm) {
    throw Error("All fields are required");
  }

  if (password !== passwordConfirm) {
    throw Error("Passwords do not match");
  }

  const res = await fetch(`${backendBaseURL}/api/users`, {
    method: 'POST', 
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json();

  if (!res.ok) {
    throw Error(data.error);
  }

  localStorage.setItem('token', data.token);
  localStorage.setItem('email', data.email);

  return data;


}
export { loginUser, registerUser }