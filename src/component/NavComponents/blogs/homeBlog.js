import React from 'react';
import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';
import Blogs from '../../NavComponents/blogs/Blogs';

const HomeBlog = () => {
  return (
    <>
        <Navbar/>
            <Blogs allow={false}/>
        <Footer/>
    </>
  )
}

export default HomeBlog;
