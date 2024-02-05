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
        <div className="mt-10">
            {comments.map((comment) => (
                <div className=" font-poppins border-gray-300 border-2 mb-4 w-1/2 ml-auto mr-auto text-center"key={comment._id}>
                <h3 className=" font-bold mt-1 text-lg">{comment.username ? comment.username : "Anonymous"}</h3>
                <h4 className=" italic text-sm mb-2">{comment && comment.date.slice(0,10)}</h4>
                <p className="mb-2">{comment.content}</p>
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