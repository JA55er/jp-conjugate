import verbs from 'jp-conjugation';

export const getCorrectAnswer = (options, taskWord) => {

  let conjArr = [];
  if (taskWord?.verbClass === 1) {
    conjArr = verbs.conjugate(taskWord?.hiraganaReading);
  } else if (taskWord?.verbClass === 2) {
    conjArr = verbs.conjugate(taskWord?.hiraganaReading, 'v1');
  }

  const randomForm = randomSetting(options).split(' ');

  const allForms = [];

  const validForms = [];

  Object.values(conjArr).forEach(
    (value, i) =>
      (allForms[i] = { name: value.name.split(' '), form: value.form })
  );
  allForms.forEach((group) => {
    const index = group.name.indexOf('present');
    if (index > -1) {
      group.name.splice(index, 1);
    }
  });

  allForms.forEach((group) => {
    if (group.name.every((form) => randomForm.includes(form))) {
      validForms.push(group);
    }
  });

  const answerObject =
    validForms[Math.floor(Math.random() * validForms.length)];

  console.log(answerObject);

  let str = '';
  answerObject?.name.map((ele) => {
    return (str = str.concat(` ${ele}`).trim());
  });

  return { form: answerObject?.form, name: str };
};

const randomSetting = (options) => {
  let count = 0;
  let sOptions = {};
  let mappedProduct = Object.entries(options).map(([key, value]) => {
    if (Object.values(options).every((value) => !value)) {
      Object.keys(options).forEach((key) => {
        sOptions[key] = true;
      });
    } else {
      sOptions = options;
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
    return (str = str.concat(` ${eleValues}`).trim());
  });
  return str;
};

export default getCorrectAnswer;
