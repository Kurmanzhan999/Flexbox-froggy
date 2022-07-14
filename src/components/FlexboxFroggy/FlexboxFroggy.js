import React from 'react';
import SidebarLayout from '../LeftSide/SidebarLayout/SidebarLayout';
import ViewBoard from '../RightSide/ViewBoard';
import classes from './flexboxFroggy.module.css';
function FlexboxFroggy() {
  return (
    <div className={classes.main}>
      <SidebarLayout />
      <ViewBoard />
    </div>
  );
}

export default FlexboxFroggy;
