//libraries
import React, { Fragment } from 'react';
import axios from 'axios';
import Post from '../../../component/Post/Post';

//style
import './BlogPost.css'; 


class BlogPost extends React.Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((res) => {
            // console.log(res)
            this.setState({
                post: res.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then((res) => {
            // console.log("result", res)
            this.getPostAPI()
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
    }

    putDataToAPI = () => {
       axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then((res) => {
            console.log(res);
            this.getPostAPI()
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        }) 
    }

    handleRemove = (data) => {
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res) => {
            this.getPostAPI()
        })
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormChange = (e) => {
        // console.log("onchane ", e.target)
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[e.target.name] = e.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
        
    }

    handleDetail = (id) => {
        this.props.history.push(`detail-post/${id}`)
    }


    componentDidMount(){
        // get pakai fetch
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then (json => console.log(json))
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        // get pakai plugin axios
        this.getPostAPI();
    }
    

    render(){
        return (
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr/>
                 <p className="section-title">Blog Post</p>

                 <div className="form-add-post">
                     <label htmlFor="title">Title</label>
                     <input type="text" name="title" placeholder="add title here" value={this.state.formBlogPost.title} onChange={this.handleFormChange}/>

                     <label htmlFor="body">Blog Content</label>
                     <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content here" value={this.state.formBlogPost.body} onChange={this.handleFormChange}></textarea>

                     <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                 </div>

                 {
                     this.state.post.map(post => {
                        return <Post key={post.id} data={post} update={this.handleUpdate} remove={this.handleRemove} goDetail={this.handleDetail}/>
                     })
                 }
            </Fragment>
        )
    }
}

export default BlogPost;