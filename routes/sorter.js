const makeLtrsArr = (str) => {
  return str.split(/(\w)/).filter(x => {
    return !(/\s/.test(x)) && x.length > 0;
  });
};

const revSortArr = (arr) => {
  return arr.slice().sort( (a,b) => {
    let i = 0;
    while (a[i] && b[i]) {
      const aVal = a.charCodeAt(i);
      const bVal = b.charCodeAt(i);
      if (aVal < bVal) { return 1; }
      if (bVal < aVal) { return -1; }
      i++;
    }
    return 0;
  });
};

const sortAndReturn = (str) => {
  return new Promise((resolve, reject) => {
  const strAsArr = makeLtrsArr(str);
  const retStr = revSortArr(strAsArr).join('');
  const returnObj = { 'original':str, 'retStr':retStr };
  resolve(returnObj);
  reject('Sorting Failed');
  });
};

module.exports = sortAndReturn;