import React from 'react';
import Axios from 'axios';
import './DetailPost.css';

class DetailPost extends React.Component {
    state = {
        post: {
            title:'',
            body:''
        }
    }

    componentDidMount(){
        // console.log(this.props.match.params.postId)
        let id = this.props.match.params.postId
        Axios.get(`http://localhost:3004/posts/${id}`)
        .then((res) => {
            console.log("res", res)
            let post = res.data
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }

    render() {
        return (
            <div className="detail-post">
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost;