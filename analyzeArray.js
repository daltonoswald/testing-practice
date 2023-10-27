function analyzeArray(array) {
  const sum = array.reduce((current, previous) => current + previous);
  const average = sum / array.length;

  const min = array.reduce((current, previous) => Math.min(current, previous));

  const max = array.reduce((current, previous) => Math.max(current, previous));

  const { length } = array;

  const analyzedArray = {
    average,
    min,
    max,
    length,
  };
  return analyzedArray;
}

module.exports = analyzeArray;
