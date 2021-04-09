import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    marginTop: '40px'
  }
}))

const SearchBlogs = ({ searchBlog }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TextField onChange={searchBlog} label="Search" variant="filled" />
    </div>
  )
}

export default SearchBlogs
