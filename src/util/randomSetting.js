const randomSetting = (options) => {
  let count = 0;
  // console.log(options);
  let mappedProduct = Object.entries(options).map(([key, value]) => {
    if (key == 'past' && options[key] == false) {
      console.log(key, options[key])
      return { [key]: 'present' };
    }
    if (options[key] == false) {
      return { [key]: '' };
    }
    const random = Math.round(Math.random());
    if (random) {
      count++;
      return {
        [key]: key,
        // ...value,
      };
    } else {
      if (key == 'past' && options[key]) {
        return { [key]: 'present' };
      } else {
        return { [key]: '' };
      }
    }
  });

  if (!count) {
    return (mappedProduct = randomSetting(options));
  }
  let str = '';
  mappedProduct.map((ele) => {
    const eleValues = Object.values(ele);
    str = str.concat(` ${eleValues}`).trim();
  });
  return str;
};

export default randomSetting;
