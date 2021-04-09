import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogsList from '../Components/BlogsList'
import SavedBlogsList from '../Components/SavedBlogsList'

const BlogsContainer = ({ blogs }) => (
    <Switch>
        <Route path="/blogs/saved" component={SavedBlogsList} />
        <Route path="/" render={()=> (
          <BlogsList blogs={blogs}/>
        )} />
    </Switch>

)


export default BlogsContainer
