const calculateAverage = (...params) =>
  params.length ? params.reduce((a, b) => a + b, 0) / params.length : 0;

export default calculateAverage;
