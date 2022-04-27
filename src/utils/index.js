export const sortList = (state = []) => state.sort(({ isDone }, { isDone: seconIsDone }) => {
  if (isDone > seconIsDone) return 1;
  else if (isDone < seconIsDone) return -1;
  else return 0;
});

