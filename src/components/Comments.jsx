import { useEffect, useState } from "react"
import { PropTypes } from "prop-types";

const Comments = ({postid}) => {
    const [comments, setComments] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = fetch(`https://blog-serverapirest.fly.dev/api/posts/${postid}/comments`);
                setComments(await response.json())
            } catch(err) {
                console.log(err)
            }
        } 
        fetchData()
    },[postid])
    return (
        <div>
            {comments.map((comment) => (
                <div key={comment._id}>
                <h3>{comment.username}</h3>
                <h4>{comment && comment.date.slice(0,10)}</h4>
                <p>{comment.content}</p>
                </div>
            ))}
        </div>
    )
}

Comments.propTypes = {
    postid: PropTypes.string,
}

export default Comments