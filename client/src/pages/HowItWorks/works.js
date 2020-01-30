
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,


    },
}));



export default function OutlinedCard() {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;



    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
          </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Paper>
                        <Container maxWidth="sm">

                            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                                What is Book Exchange?
            </Typography>
                            <Typography variant="h5" align="left" color="textSecondary" paragraph>
                                <p>Book Exchange is a website that helps students purchase textbooks without the expensive price. The service was designed to help students sell textbooks that have little to no value and get rid of extra books laying around the house.
                        Users are able to brows the catelog of books that are offered by title or major and then contact the seller to arrange how to to recieve the book. The only expense that the buyer/user pays is the shipping cost of the book to the new location.</p>
                            </Typography>

                        </Container>
                    </Paper>
                </div>
                <div>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Paper>
                                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                                    How do I exchange a book?
                            </Typography>
                                <Typography variant="h5" component="h2" align="inherit" color="textSecondary" paragraph>
                                    <p>1. Find a book that you want.</p>
                                    <p>2. Contact the seller and wait for a response.</p>
                                    <p>3. Make arrangemets to ship or meet up to exchange</p>
                                    <p>the book depending on the location of the seller/buyer</p>
                                    <p>4. Recieve your book!</p>
                                </Typography>
                            </Paper>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Paper>
                                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                                    How do I sell a book?
                            </Typography>
                                <Typography variant="h5" component="h2" align="inherit" color="textSecondary" paragraph>
                                    <p>1. Log in or sign up for an account.</p>
                                    <p>2. You must have the physical book you wish to sell.</p>
                                    <p>3. Fill out the form on the "Sell A Book" tab.</p>
                                    <p>5. Click "Sell Book" button and you're done!</p>
                                    <p>4. The book that you are selling will appear on your user page</p>

                                </Typography>
                            </Paper>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </React.Fragment>


    );
}
