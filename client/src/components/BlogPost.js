import React, { Fragment } from 'react';

const BlogPost = ({title, img}) => {
  return (
    <div className="blog__post">
      <div className="blog__post__title">{title}</div>
      <img src={img} alt="post image" className="blog__post__img"/>
      <p className="blog__post__p">As London Fashion Week draws to a close, designers are wending their way home from Samantha Cameron’s party to sleep for the first time in days, and editors are thinking about what they’ll be remembering from a sightseeing tour of the city that took them all over the map. In general: Despite traffic and lashings of London rain, it was a week of individualism, British humor, prettiness, and emotional surprises...</p>
    </div>
  )
};

export default BlogPost;