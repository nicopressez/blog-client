import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts ()  {
            try {
                const response = await fetch("https://blog-serverapirest.fly.dev/api/posts")
                const obj = await response.json();
                setPosts(obj);
            } catch(err) {
                console.log(err)
            }
        }
        getPosts()
    },[]);

    return (
        <div>
            {posts.map((post) => (
                <div key={post._id} className=" border-2 w-1/2 text-center ml-auto mr-auto
                  font-poppins mb-5" >
                    <Link to={`/post/${post._id}`}>
                    <h2 className="font-bold text-xl">{post.title}</h2>
                    </Link>
                    <h3>{post.date}</h3>

                </div>
            ))}
        </div>
    )
}

export default Homepage;