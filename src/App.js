import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BlogsContainer from './Containers/BlogsContainer'
import Navbar from './Components/Navbar'
import SearchBlogs from './Components/SearchBlogs'

class App extends React.Component{
  state = {
    blogs: [],
    filteredBlogs: []
  }

  async componentDidMount(){
        const resp = await fetch('http://localhost:5000/blogs')
        const payload = await resp.json()
        this.setState({ blogs: payload, filteredBlogs: payload })
    }

  searchBlog = (e) => {
    const filteredBlogs = [...this.state.blogs].filter(blog => {
      return blog.title.toLowerCase().includes(e.target.value)
    })

    this.setState({ filteredBlogs })
  }

  render(){
    return (
    <>
      <Navbar />
      <SearchBlogs searchBlog={this.searchBlog} />
      <Route path="/" render={()=> <BlogsContainer blogs={this.state.filteredBlogs}/>} />
    </>

  )
  }

}


export default App
