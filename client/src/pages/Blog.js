import React, { Fragment } from 'react';
import BlogPost from '../components/BlogPost';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Blog = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="blog">
        <div className="blog__strip">
          <h1 className="blog__title">Blog</h1>
        </div>
        <div className="container">
          <BlogPost title={'The Top 7 Spring ’16 Shows in London'} img={'./img/1blog.jpg'}/>
          <BlogPost title={'How Saint Laurent Crystal Boots Became The Status Symbol Of 2018'} img={'./img/2blog.jpg'}/>
          <BlogPost title={'The 25 Best Photos of Milan Fashion Week'} img={'./img/3blog.jpg'}/>
        </div>
        <Footer />
        <Copyright />
      </div>
    </Fragment>
  )
};

export default Blog;