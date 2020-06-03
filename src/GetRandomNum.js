const RandomNum = (count, max) => {
  let tempArr = [];
  for (let i = 0; i < count; i++) {
    tempArr.push(Math.floor(Math.random() * max));
  }

  return tempArr.join("  ");
};

export default RandomNum;
