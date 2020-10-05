import { createSelector } from 'reselect';

const slelectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [slelectDirectory],
  (directory) => directory.sections,
);
