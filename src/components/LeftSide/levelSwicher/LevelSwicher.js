import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import classes from './LevelSwicher.module.css';
import { gameActions } from '../../../store';

import {
  LeftTriangle,
  LevelIndicator,
  LevelItem,
  RightTriangle,
} from './LevelCounter';

const LevelSwitcher = () => {
  const dispatch = useDispatch();

  const current = useSelector((state) => state.game.currentLevel);
  const levels = useSelector((state) => state.game.currentLevels);
  //   const levelOne = useSelector((state) => state.game.currentLevels[0]);

  const [isShow, setIsShow] = useState(false);

  const nextLevel = (level) => {
    dispatch(gameActions.currentState(level));
  };

  const incrementLevel = () => {
    dispatch(gameActions.currentState(current + 1));
  };

  const decrementLevel = () => {
    dispatch(gameActions.currentState(current - 1));
  };

  const showHandler = () => {
    setIsShow((prevLevel) => (prevLevel = !prevLevel));
  };

  const resetHandler = (level) => {
    if (isShow) {
      if (
        window.confirm(
          'Are you sure you wnat to reset the game? Your saved progress will be lost and youll be sent to the start of the game. '
        )
      ) {
        dispatch(gameActions.currentState(current));
      }
    }
  };

  const renderLevels = () => {
    return (
      <div
        className={`${classes.levelsWrapper} ${classes.tooltip}`}
        onClick={showHandler}
      >
        <div className={classes.levels}>
          {levels.map((item) => {
            return (
              <LevelItem item={item} nextLevel={nextLevel}>
                {item.level}
              </LevelItem>
            );
          })}
        </div>
        <div className={classes.labelReset} onClick={resetHandler}>
          Reset{' '}
        </div>
      </div>
    );
  };

  return (
    <div className={classes['level-counter']}>
      <LeftTriangle decrementLevel={decrementLevel} />
      <LevelIndicator current={current} showHandler={showHandler} />
      <RightTriangle IncrementLevel={incrementLevel} />
      {isShow && renderLevels()}
    </div>
  );
};

export default LevelSwitcher;
