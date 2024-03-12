import "../styles/BlogPost.css";

// ** DON'T EDIT ** 

function BlogPost({heading, content}){
    return (
        <div className="BlogPostContainer">
            <h1>{heading}</h1>
            <p>{content}</p>
        </div>
    );

}

export default BlogPost