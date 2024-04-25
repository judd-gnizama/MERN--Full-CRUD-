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

export { getPosts }