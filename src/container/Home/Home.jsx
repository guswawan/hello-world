import React from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../Product/Product';
import BlogPost from '../BlogPost/BlogPost';

class Home extends React.Component {
    render(){
        return(
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                 <YouTubeComp />
                 <YouTubeComp
                    title="Video 2"
                    description="ini vidoe bagian 2"/>
                 <YouTubeComp
                    title="Video 3"
                    description="ini vidoe bagian 3"/> 
                 <YouTubeComp
                    title="Video 4"
                    description="ini vidoe bagian 4"/> */}
                {/* <p>Counter</p>
                <hr/>
                <Product /> */}
                <p>Blog Post</p>
                <hr/>
                <BlogPost />
            </div>
        )
    }
}

export default Home;