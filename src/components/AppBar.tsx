import {
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MaterialAppBar from '@material-ui/core/AppBar';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import React from 'react';

const APP_BAR_HEIGHT = 84;

function AppBar() {
  return (
    <MaterialAppBar
      style={{
        backgroundColor: 'black',
      }}
    >
      <Toolbar
        style={{
          minHeight: APP_BAR_HEIGHT,
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          style={{
            marginRight: 8,
          }}
        >
          <ChevronLeft />
        </IconButton>
        <Typography variant="h6">
          곰곰탕님의 방
        </Typography>
      </Toolbar>
    </MaterialAppBar>
  );
}

export default AppBar;
