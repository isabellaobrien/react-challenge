import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: [],
      }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }
    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <forms>
                        <label htmlFor='searchinput'>Search: </label>
                        <input 
                        type="search" 
                        id="searchInput"
                        placeholder='By Author' 
                        onChange={(e) => this.handleChange(e)}
                        />
                        <h4>posts found {this.state.posts.length}</h4>
                    </forms>
                </div>
                <div className={css.SearchResults}>
                    {
                        // savedPosts.map((post)=>{
                        //     return <div className={css.SearchItem} key={title}>
                        //         <p>{post.title}</p>
                        //         <p>{post.name}</p>
                        //         <img src={post.image} alt="random" />
                        //         <p>{post.description}</p>
                        //     </div>
                        // }) 
                        this.state.isLoaded ?
                        <PostItem savedPosts={this.state.posts} />
                        : <Loader />
                    }
                    {/* <PostItem savedPosts={savedPosts} /> */}
                </div>
            </div>
        )
    }
}

export default Content