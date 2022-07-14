import classes from './LevelCounter.module.css';

export const LevelItem = ({ item, nextLevel, children }) => {
  return (
    <span
      key={item}
      className={classes['level-marker']}
      onClick={() => nextLevel(item.level)}
    >
      {children}
    </span>
  );
};

export const LeftTriangle = ({ decrementLevel }) => {
  return (
    <span
      className={`${classes.arrow} ${classes.left}`}
      onClick={decrementLevel}
    >
      <span className={classes.triangle}></span>
    </span>
  );
};

export const LevelIndicator = ({ showHandler, current }) => {
  return (
    <span onClick={showHandler} className={classes['level-indicator']}>
      <span className={classes.labelLevel}>Level</span>
      <span>{current}</span>
      <span>of</span>
      <span>13</span>
      <span className={classes.caret}>▾</span>
    </span>
  );
};

export const RightTriangle = ({ IncrementLevel }) => {
  return (
    <span
      className={`${classes.arrow} ${classes.right}`}
      onClick={IncrementLevel}
    >
      <span className={classes.triangle}></span>
    </span>
  );
};
