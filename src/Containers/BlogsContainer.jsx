import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import BlogsList from '../Components/BlogsList'
import SavedBlogsList from '../Components/SavedBlogsList'

const BlogsContainer = ({ blogs }) => (
    <Switch>
        <Route path="/blogs/saved" component={SavedBlogsList} />
        <Route path="/" render={() => (
          <BlogsList blogs={blogs}/>
        )} />
        <Route>
          <Redirect to="/" />
        </Route>
    </Switch>
)


export default BlogsContainer
