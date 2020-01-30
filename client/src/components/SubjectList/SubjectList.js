import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom";



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 900,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(1, 0, 1),
    },
    card: {
        minWidth: 150,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


export default function SubjectList() {
    const classes = useStyles();



    return (
        <div className={classes.root}>

            <List component="list">

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <Typography variant="h6" className={classes.title}>
                                Arts and Sciences
                        </Typography>
                            <Link to="/books/chemistry">
                                <ListItemText primary="Chemistry" />
                            </Link>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Criminology" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Communication" />
                            </ListItemLink>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <Typography variant="h6" className={classes.title}>
                                Business
                        </Typography>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Accounting" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Business Anlytics" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Finance" />
                            </ListItemLink>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <Typography variant="h6" className={classes.title}>
                                Nursing
                        </Typography>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Behavioral Health" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Health Sciences" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Health Service Admin" />
                            </ListItemLink>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <Typography variant="h6" className={classes.title}>
                                Engineering
                        </Typography>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Architech. Engine" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Biomedical" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Chemical" />
                            </ListItemLink>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <Typography variant="h6" className={classes.title}>
                                Educational
                        </Typography>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Elementary" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Secondary" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Pre-School" />
                            </ListItemLink>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <Typography variant="h6" className={classes.title}>
                                Computer Informatics
                        </Typography>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Computer Science" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Cyber Security" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Data Science" />
                            </ListItemLink>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <Typography variant="h6" className={classes.title}>
                                Entrepreneurship
                        </Typography>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Entrepreneurship and Innovation" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Social Entrpreneurship" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Corporate Entrpreneurship" />
                            </ListItemLink>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <Typography variant="h6" className={classes.title}>
                                Media Arts/Design
                        </Typography>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Design and Merch" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Fashion Design" />
                            </ListItemLink>
                            <ListItemLink href="#simple-list">
                                <ListItemText primary="Photography" />
                            </ListItemLink>
                        </Card>
                    </Grid>
                </Grid>

            </List>


        </div>
    );
}