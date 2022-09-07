const randomSetting = (options) => {
  let count = 0;
  let sOptions = {}
  let mappedProduct = Object.entries(options).map(([key, value]) => {
    if (Object.values(options).every((value) => !value)) {
      Object.keys(options).forEach(key => {
        sOptions[key] = true;
      });
    } else {
      sOptions = options
    }

    if (key === 'past' && !sOptions[key]) {
      console.log(key, sOptions[key]);
      return { [key]: 'present' };
    }
    if (!sOptions[key]) {
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
      if (key === 'past' && sOptions[key]) {
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
    return str = str.concat(` ${eleValues}`).trim();
  });
  return str;
};

export default randomSetting;
