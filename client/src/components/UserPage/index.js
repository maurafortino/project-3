import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 400,
        alignItems: "center",
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
        <div class="container-2">
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Contact Us" />
                    <Tab label="Share w/ Friend" />
                    <Tab label="Update Profile" />
                </Tabs>
            </Paper>
        </div>

        <div class="container3">
            <Paper className={classes.root}>
                <Typography>Here is where you can see all of the books that you are currently selling!</Typography>
            </Paper>
        </div>

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card className={classes.card}>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Chemistry I Book
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>Author: Some Author</p>
                                    <p>Subject: Chemistry</p>
                                    <p>Year: 2019</p>
                                    <p>ISBN: 12345678</p>
                                    <p>Volume: 2</p>
                                    <p>Condition: New</p>

                                </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit
                        </Button>
                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={classes.card}>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Business 101 Book
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>Author: Some Author</p>
                                    <p>Subject: Business</p>
                                    <p>Year: 2019</p>
                                    <p>ISBN: 12345678</p>
                                    <p>Volume: 2</p>
                                    <p>Condition: New</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={classes.card}>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Computer Science
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>Author: Some Author</p>
                                    <p>Subject: Technology</p>
                                    <p>Year: 2019</p>
                                    <p>ISBN: 12345678</p>
                                    <p>Volume: 2</p>
                                    <p>Condition: New</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs>
                    <Card className={classes.card}>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Arts and Design
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>Author: Some Author</p>
                                    <p>Subject: Arts and Design</p>
                                    <p>Year: 2019</p>
                                    <p>ISBN: 12345678</p>
                                    <p>Volume: 2</p>
                                    <p>Condition: New</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit
                        </Button>
                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={classes.card}>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    English 102 Book
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>Author: Some Author</p>
                                    <p>Subject: English</p>
                                    <p>Year: 2019</p>
                                    <p>ISBN: 12345678</p>
                                    <p>Volume: 2</p>
                                    <p>Condition: New</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xs>
                    <Card className={classes.card}>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Sculpture
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>Author: Some Author</p>
                                    <p>Subject: Arts and Design</p>
                                    <p>Year: 2019</p>
                                    <p>ISBN: 12345678</p>
                                    <p>Volume: 2</p>
                                    <p>Condition: New</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Edit
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </div>
            </div >

            )
}
