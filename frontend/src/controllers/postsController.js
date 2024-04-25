// ------------------------ GET ALL POSTS ---------------------------
const getPosts = async () => {
  // since method is get, no need to add options
  const res = await fetch('/api/posts'); 
  const data = await res.json();

  if (!res.ok) {
    throw Error(data.error)
  }
  return data;
}

// ------------------------ GET ALL POSTS OF USER ---------------------------
const getUserPosts = async () => {
  const res = await fetch('/api/posts/user', {
    headers: {
      "Authorization"   : `Bearer ${localStorage.getItem('token')}`,
    }
  })

  const data = await res.json();

  if (!res.ok) {
    throw Error(error.message)
  }

  return data;

}


// ------------------------ CREATE POST ---------------------------
const createPost = async (title, body) => {
  if (!title || !body) {
    throw Error("All fields are required")
  }

  const res = await fetch('/api/posts', {
    method: 'POST', 
    headers: {
      "Content-Type" : 'application/json',
      "Authorization"   : `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ title, body })
  })

  const data = await res.json();

  if (!res.ok) {
    throw Error(data.error);
  }

  return data;

}

export { getPosts, getUserPosts, createPost }