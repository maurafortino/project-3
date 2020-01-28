import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

}));

export default function HomeSearchbar() {
  const classes = useStyles();

  return (
    <div className="form">
    <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search for books"
          inputProps={{ 'aria-label': 'Search for books' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
    </Paper>
    </div>
  );
}