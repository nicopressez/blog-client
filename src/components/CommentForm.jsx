import { PropTypes } from "prop-types";

const CommentForm = ({postid}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = {
            username: form.username.target,
            content: form.content.target,
        };
        try {
            const response = await fetch(`https://blog-serverapirest.fly.dev/api/posts/${postid}/comments`, {
                method: "POST",
                body: JSON.stringify(comment)
            });
            console.log(await response.json())
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <div>
            <h2>New comment</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username(optional):</label>
            <input name="username" type="text" id="username"></input>
            <textarea name="content" placeholder="Your comment..."></textarea>
            <input type="submit" value="Add comment"></input>
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    postid: PropTypes.string,
}

export default CommentForm