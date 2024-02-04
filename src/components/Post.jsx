import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        async function getPost() {
            const response = await fetch(`https://blog-serverapirest.fly.dev/api/posts/${id}`)
            const obj = await response.json();
            setPost(obj)
        }
        getPost();
    }, [id])
    return (
        <div>
            <Link to={"/"}><button>Back to homepage</button></Link>
            <div className="font-poppins text-center mt-10">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <h2 className="mb-7 mt-2">Written on {post.date}</h2>
            <p>{post.text}</p>
            </div>
        </div>
    )
}

export default Post;
