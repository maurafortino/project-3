import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
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
                        <Typography variant="h6" className={classes.title}>
                            Arts and Sciences
                        </Typography>
                        <ListItemLink href="#simple-list">
                            <ListItemText primary="Chemistry" />
                        </ListItemLink>
                        <ListItemLink href="#simple-list">
                            <ListItemText primary="Criminology" />
                        </ListItemLink>
                        <ListItemLink href="#simple-list">
                            <ListItemText primary="Communication" />
                        </ListItemLink>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
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
                    </Grid>

                </Grid>
            </List>
        </div>
    );
}