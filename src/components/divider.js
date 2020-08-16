import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:"20px",
      width: '100%',
    },
    divider:{
      backgroundColor:"rgba(94, 90, 90,0.8)",
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
  }));

  const title = {
    "fontWeight": "900"
};
  
export default function DividerTitle(props) {
    const classes = useStyles();

    return (
      <List className={classes.root}>
        <ListItem>
          <ListItemText primaryTypographyProps={{ style: title }} primary={props.title} secondary={props.subtitle} />
        </ListItem>
        <Divider component="li" className={classes.divider} />
        <li>
          <Typography
            className={classes.dividerFullWidth}
            color="textSecondary"
            display="block"
            variant="caption"
          >
          </Typography>
        </li>
       </List>
    );

}