import { PropTypes } from "prop-types";
import { useState } from "react";

const CommentForm = ({postid , comments, setComments}) => {
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = {
            username: form.username.value,
            content: form.content.value,
        };
        try {
            const response = await fetch(`https://blog-serverapirest.fly.dev/api/posts/${postid}/comments`, {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(comment)
            });
            const result = await response.json()
            if (response.status === 200) {
            setComments([...comments, {...comment, date:new Date().toISOString()}]);
            setSent(true);
            }
            else if (response.status === 403) {
                setErrors(await result.errors)
            }

        } catch(err) {
            console.log(err)
        }
    }
    if (sent) return (
        <div>
            <h2>Comment added!</h2>
        </div>
    )
    return (
        <div>
            {errors && 
            <ul> Fix the following errors before submitting:
      {errors.map((error, index) => (
      <li key={index}>{error.msg}</li>) )}
   </ul>}
            <form className="p-3 font-poppins mt-16 border-2 border-black flex flex-col gap-2 text-center w-1/2 ml-auto mr-auto
            "onSubmit={handleSubmit}>
            <label htmlFor="username">Username(optional):</label>
            <input className=" bg-gray-200"name="username" type="text" id="username"></input>
            <textarea className="  bg-gray-200" name="content" placeholder="Your comment..."></textarea>
            <input type="submit" value="Add comment"></input>
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    postid: PropTypes.string,
    comments: PropTypes.array,
    setComments: PropTypes.func,
}

export default CommentForm