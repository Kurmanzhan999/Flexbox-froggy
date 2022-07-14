import React from 'react';
import classes from './SidebarLayout.module.css';
import LevelSwitcher from '../levelSwicher/LevelSwicher';
import Instructions from '../instructions/Instructions';
import Editor from '../footer/Editor';

function SidebarLayout() {
  return (
    <section className={classes.sidebar}>
      <header className={classes.header}>
        <div>
          <h1 className={classes.title}>Flexbox Froggy</h1>
        </div>
        <LevelSwitcher />
      </header>
      <Instructions />
      <Editor />
    </section>
  );
}

export default SidebarLayout;
