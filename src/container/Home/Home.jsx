//libraries
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//pages 
import Product from '../pages/Product/Product';
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import YouTubeCompPage from '../pages/YouTubeCompPage/YouTubeCompPage';

//style
import './Home.css';



class Home extends React.Component {
    render(){
        return(
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/youtube">YouTube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postId" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/youtube" component={YouTubeCompPage} />
                </Fragment>
            </Router>
        )
    }
}


export default Home;