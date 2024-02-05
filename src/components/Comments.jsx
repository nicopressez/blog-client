import { useEffect } from "react"
import { PropTypes } from "prop-types";

const Comments = ({postid, comments, setComments}) => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://blog-serverapirest.fly.dev/api/posts/${postid}/comments`);
                setComments(await response.json())
            } catch(err) {
                console.log(err)
            }
        } 
        fetchData()
    },[postid,setComments])
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
    comments: PropTypes.array,
    setComments: PropTypes.func,
}

export default Comments