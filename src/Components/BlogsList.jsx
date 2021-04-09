import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import BlogCard from '../Components/BlogCard'

const useStyles = makeStyles(() => ({
  root: {
    padding: "2%"
  }
}))

const createBlogCards = ({ blogs, blogCardClickHandler }) => {
  return blogs.map(blogObject => (
    <BlogCard
      key={blogObject.id}
        blogObject={blogObject}
          clickHandler={blogCardClickHandler}
    />
  ))
}

const BlogsList = (props) => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container spacing={3} >
      { createBlogCards(props) }
    </Grid >
  )
}

export default BlogsList
