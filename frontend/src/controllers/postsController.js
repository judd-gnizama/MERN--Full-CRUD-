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

export { getPosts, getUserPosts }