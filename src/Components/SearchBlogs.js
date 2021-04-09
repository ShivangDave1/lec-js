import TextField from '@material-ui/core/TextField';

const SearchBlogs = ({ searchBlog }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px'}}>
      <TextField onChange={searchBlog} label="Search" variant="filled" />
    </div>
  )
}

export default SearchBlogs
