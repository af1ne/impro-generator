import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SwitchListSecondary extends React.Component {
  
  state = {
    checked: ['theme'],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader>Générateurs de...</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"/>
              </svg> 
            </ListItemIcon>
            <ListItemText primary="Thème" />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle('theme')}
                checked={this.state.checked.indexOf('theme') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
            </svg> 
            </ListItemIcon>
            <ListItemText primary="Catégorie" />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle('categorie')}
                checked={this.state.checked.indexOf('categorie') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
              </svg> 
            </ListItemIcon>
            <ListItemText primary="Contrainte" />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle('contrainte')}
                checked={this.state.checked.indexOf('contrainte') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

SwitchListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchListSecondary);