import { useEffect, useState } from "react";
import { getUserPosts } from "../../controllers/postsController";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Post from "../../components/Post";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const { user, setUser } = useContext(UserContext);

  // Handle Delete Post
  const handleDelete = (id) => {
    console.log(id)
  }

  // Loading State
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const email = localStorage.getItem('email');
      const { userPosts } = await getUserPosts();
      setUser({email, posts: userPosts})
      setLoading(false);
    }, 500)
  }, [])

  return( 
  <section className="card">

    <p>{user.email}</p>
    <h1 className="title">User Dashboard</h1>

    {loading && (
        <i className="fa-solid fa-arrow-rotate-right animate-spin text-3xl text-center block"></i>
      )}

    { user.posts?.map((post, index) => (
      <div key={index}>
        <Post post={post}>
          <div className="flex items-center gap-2">
            <Link className="fa-solid fa-pen-to-square nav-link text-green-500 hover:bg-green-200"
            title="Update"
            to="/update"
            ></Link>
            <button className="fa-solid fa-trash-can nav-link text-red-500 hover:bg-red-200"
            title="Delete"
            onClick={() => handleDelete(post._id)}
            ></button>
          </div>
        </Post>
      </div>
    ))}



  </section>
  )
};
export default Dashboard