import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "3%",
        padding: "2%"
    }
}))

const SavedBlogsList = () => {
    const classes = useStyles()

    return (
        <Grid className={classes.root} container spacing={3}>
        </Grid>
    )
}

export default SavedBlogsList
