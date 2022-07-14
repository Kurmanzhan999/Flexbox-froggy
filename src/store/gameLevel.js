import { createSlice } from '@reduxjs/toolkit';
import classes from './gamelevel.module.css';

const init = {
  currentLevel: 1,
  value: '',
  currentLevels: [
    {
      level: 1,
      questionDescription: (
        <>
          <p>
            Welcome to Flexbox Froggy, a game where you help Froggy and friends
            by writing CSS code! Guide this frog to the lilypad on the right by
            using the
            <code className={classes.help}>
              justify-content
              <span className={classes.dropdown}>
                property, which aligns items horizontally and accepts the
                following values:
                <br />
                <br />
                <code>flex-start (default)</code> <code>flex-end</code>{' '}
                <code>center</code> <br /> <code>space-between</code>{' '}
                <code>space-around</code>
                <code>space-evenly</code>
              </span>
            </code>
            property, which aligns items horizontally and accepts the following
            values:
          </p>
          <ul>
            <li>
              <code>flex-start</code>: Items align to the left side of the
              container.
            </li>
            <li>
              <code>flex-end</code>: Items align to the right side of the
              container.
            </li>
            <li>
              <code>center</code>: Items align at the center of the container.
            </li>
            <li>
              <code>space-between</code>: Items display with equal spacing
              between them.
            </li>
            <li>
              <code>space-around</code>: Items display with equal spacing around
              them.
            </li>
          </ul>
          <p>
            For example, <code>justify-content: flex-end;</code> will move the
            frog to the right.
          </p>
        </>
      ),

      answer: 'justify-content: flex-end;',
      isValid: false,
      pondHeight: 1,
      colors: ['green'],
      lilypad: { justifyContent: 'flex-end' },
    },
    {
      level: 2,
      questionDescription: (
        <>
          <p>
            Use
            <code className={classes.help}>justify-content</code>,again to help
            these frogs get to their lilypads. Remember that this CSS property
            aligns items horizontally and accepts the following values:
          </p>
          <ul>
            <li>
              <code>flex-start</code>: Items align to the left side of the
              container.
            </li>
            <li>
              <code>flex-end</code>: Items align to the right side of the
              container.
            </li>
            <li>
              <code>center</code>: Items align at the center of the container.
            </li>
            <li>
              <code>space-between</code>: Items display with equal spacing
              between them.
            </li>
            <li>
              <code>space-around</code>: Items display with equal spacing around
              them.
            </li>
          </ul>
        </>
      ),

      answer: 'justify-content: center;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow'],
      lilypad: { justifyContent: 'center' },
    },
    {
      level: 3,
      questionDescription: (
        <>
          <p>
            Help all three frogs find their lilypads just by using
            <code className={classes.help}>justify-content</code>. This time,
            the lilypads have lots of space all around them.
          </p>
          <p>
            If you find yourself forgetting the possible values for a property,
            you can hover over the property name to view them. Try hovering over{' '}
            <code className={classes.help}>justify-content</code> .
          </p>
        </>
      ),

      answer: 'justify-content: space-around;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { justifyContent: 'space-around' },
    },
    {
      level: 4,
      questionDescription: (
        <>
          <p>
            Now the lilypads on the edges have drifted to the shore, increasing
            the space between them. Use{' '}
            <code className={classes.help}>justify-content</code>. This time,
            the lilypads have equal spacing between them.
          </p>
        </>
      ),

      answer: 'justify-content: space-between;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { justifyContent: 'space-between' },
    },
    {
      level: 5,
      questionDescription: (
        <>
          <p>
            Now use <code className={classes.help}>align-items</code> to help
            the frogs get to the bottom of the pond. This CSS property aligns
            items vertically and accepts the following values:
          </p>
          <ul>
            <li>
              <code>flex-start</code>: tems align to the top of the container.
            </li>
            <li>
              <code>flex-end</code>: Items align to the bottom of the container.
            </li>
            <li>
              <code>center</code>: Items align at the vertical center of the
              container.
            </li>
            <li>
              <code>baseline</code>: Items display at the baseline of the
              container.
            </li>
            <li>
              <code>stretch</code>: Items are stretched to fit the container.
            </li>
          </ul>
        </>
      ),

      answer: 'align-items: flex-end;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { alignItems: 'flex-end' },
    },
    {
      level: 6,
      questionDescription: (
        <>
          <p>
            Lead the frog to the center of the pond using a combination of
            <code className={classes.help}>justify-content</code> and
            <code className={classes.help}>align-items</code> .
          </p>
        </>
      ),

      answer: 'justify-content: center; align-items: center;',
      isValid: false,
      pondHeight: 2,
      colors: ['green'],
      lilypad: { justifyContent: 'center', alignItems: 'center' },
    },
    {
      level: 7,
      questionDescription: (
        <>
          <p>
            The frogs need to cross the pond again, this time for some lilypads
            with plenty of space around them. Use a combination of
            <code className={classes.help}>justify-content</code> and{' '}
            <code className={classes.help}>align-items</code>.
          </p>
        </>
      ),

      answer: 'justify-content: space-around; align-items: flex-end;',
      isValid: false,
      pondHeight: 2,
      colors: ['green', 'yellow', 'red'],
      lilypad: { justifyContent: 'space-around', alignItems: 'flex-end' },
    },
    {
      level: 8,
      questionDescription: (
        <>
          <p>
            The frogs need to get in the same order as their lilypads using
            <code className={classes.help}>flex-direction</code>. This CSS
            property defines the direction items are placed in the container,
            and accepts the following values:
          </p>
          <ul>
            <li>
              <code>row</code>: Items are placed the same as the text direction.
            </li>
            <li>
              <code>row-reverse</code>:Items are placed opposite to the text
              direction.
            </li>
            <li>
              <code>column</code>: Items are placed top to bottom
            </li>
            <li>
              <code>column-reverse</code>: Items are placed bottom to top.
            </li>
          </ul>
        </>
      ),

      answer: 'flex-direction: row-reverse;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { flexDirection: 'row-reverse' },
    },
    {
      level: 9,
      questionDescription: (
        <>
          <p>
            Help the frogs find their column of lilypads using
            <code className={classes.help}>flex-direction</code>. his CSS
            property defines the direction items are placed in the container,
            and accepts the following values:
          </p>
          <ul>
            <li>
              <code>row</code>: Items are placed the same as the text direction.
            </li>
            <li>
              <code>row-reverse</code>:Items are placed opposite to the text
              direction.
            </li>
            <li>
              <code>column</code>: Items are placed top to bottom.
            </li>
            <li>
              <code>column-reverse</code>: Items are placed bottom to top.
            </li>
          </ul>
        </>
      ),

      answer: 'flex-direction: column;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { flexDirection: 'column' },
    },
    {
      level: 10,
      questionDescription: (
        <>
          <p>
            Help the frogs get to their own lilypads. Although they seem close,
            it will take both
            <code className={classes.help}>flex-direction</code> and
            <code className={classes.help}>justify-content</code>, to get them
            there.
          </p>
          <p>
            Notice that when you set the direction to a reversed row or column,
            start and end are also reversed.
          </p>
        </>
      ),

      answer: 'flex-direction: row-reverse; justify-content: flex-end;',
      isValid: false,
      pondHeight: 2,
      colors: ['green', 'yellow', 'red'],
      lilypad: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
    },
    {
      level: 11,
      questionDescription: (
        <>
          <p>
            Help the frogs find their lilypads using
            <code className={classes.help}>flex-direction</code> and{' '}
            <code className={classes.help}>justify-content</code>.
          </p>
          <p>
            flex-direction and justify-content. Notice that when the flex
            direction is a column,
            <code className={classes.help}>justify-content</code> changes to the
            vertical and
            <code className={classes.help}>align-items</code> to the horizontal.
          </p>
        </>
      ),

      answer: 'flex-direction: column; justify-content: flex-end;',
      isValid: false,
      pondHeight: 2,
      colors: ['green', 'yellow', 'red'],
      lilypad: { flexDirection: 'column', justifyContent: 'flex-end' },
    },
    {
      level: 12,
      questionDescription: (
        <>
          <p>
            Help the frogs find their lilypads using
            <code className={classes.help}>flex-direction</code> and{' '}
            <code className={classes.help}>justify-content</code>.
          </p>
        </>
      ),

      answer: 'flex-direction: column-reverse; justify-content: space-between;',
      isValid: false,
      pondHeight: 2,
      colors: ['green', 'yellow', 'red'],
      lilypad: {
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
      },
    },
    {
      level: 13,
      questionDescription: (
        <>
          <p>
            Help the frogs find their lilypads using
            <code className={classes.help}>flex-direction</code>,{' '}
            <code className={classes.help}>justify-content</code> and{' '}
            <code className={classes.help}>align-items</code>.
          </p>
        </>
      ),

      answer:
        'flex-direction: row-reverse; align-items: flex-end; justify-content: center;',
      isValid: false,
      pondHeight: 3,
      colors: ['green', 'yellow', 'red'],
      lilypad: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
    },
  ],
};

const gameSlice = createSlice({
  name: 'game',
  initialState: init,
  reducers: {
    currentState(state, action) {
      if (action.payload > 16 || action.payload === 0) {
        return;
      }
      state.currentLevel = action.payload;
    },

    gameStyle(state, action) {
      state.value = action.payload;
    },
    complete(state, action) {
      state.currentLevels = state.currentLevels.map((item) =>
        item.level === state.currentLevel ? { ...item, isValid: true } : item
      );
    },
    notComplete(state) {
      state.currentLevels = state.currentLevels.map((item) =>
        item.level === state.currentLevel ? { ...item, isValid: false } : item
      );
    },
  },
});

export default gameSlice;
