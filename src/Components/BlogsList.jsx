import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import BlogCard from '../Components/BlogCard'

const useStyles = makeStyles(() => ({
  root: {
    padding: "2%"
  }
}))

function BlogsList({ blogs, blogCardClickHandler }) {
  const classes = useStyles()

  function createBlogCards() {
    return blogs.map(blogObject => (
      <BlogCard key={blogObject.id} blogObject={blogObject} clickHandler={blogCardClickHandler} />
    ))
  }
  
  return (
    <Grid className={classes.root} container spacing={3} >
      {createBlogCards()}
    </Grid >
  )
}

export default BlogsList
