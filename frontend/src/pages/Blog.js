import React from 'react'
import BlogPost from '../components/BlogPost';

function Blog() {

{/* create a const heading & const content as seen below */}
  const march5Heading = "March 5th Our First Youth Reach program!"
  const march5Content = "This week we hosted a new course for TY students ... "

  return (
    
    <> {/* put content between these symbols */}
      {/* add title of const heading & content after the '=' in curly brackets '{}' */}
      <BlogPost heading={march5Heading} content={march5Content}></BlogPost>

      {/* use the template below to add a new BlogPost -- get rid of comments */}
      {/* <BlogPost heading={addYourOwnHeading} content={write whatever you want here}></BlogPost> */}
    </>
    
  );
}

export default Blog;