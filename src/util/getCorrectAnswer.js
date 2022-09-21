import verbs from 'jp-conjugation';
import addForm from './addForm';

export const getCorrectAnswer = (options, taskWord) => {
  // console.log(options);
  let conjArr = [];
  if (taskWord?.verbClass === 1) {
    conjArr = verbs.conjugate(taskWord?.hiraganaReading);
  } else if (taskWord?.verbClass === 2) {
    conjArr = verbs.conjugate(taskWord?.hiraganaReading, 'v1');
  }

  // console.log(conjArr)

  let selectedForms = '';

  let sOptions = { ...options };

  if (!Object.values(sOptions).find((value) => value)) {
    // console.log(sOptions);
    Object.entries(sOptions).map(([key]) => (sOptions[key] = true));
  }

  // console.log(sOptions);

  Object.entries(sOptions).forEach(([key, value]) => {
    if (value) {
      selectedForms = selectedForms.concat(`${key} `);
    }
  });

  // console.log(selectedForms)

  conjArr = addForm(conjArr, taskWord);

  const randomForm = selectedForms.trim().split(' ');

  const allForms = [];

  const validForms = [];

  // console.log(conjArr)

  Object.values(conjArr).forEach(
    (value, i) =>
      (allForms[i] = { name: value.name.split(' '), form: value.form })
  );

  allForms.forEach((group) => {

    //remove present
    const present = group.name.indexOf('present');
    if (present > -1) {
      group.name.splice(present, 1);
    }

    //remove form
    const form = group.name.indexOf('form');
    if (form > -1) {
      group.name.splice(form, 1);
    }

    //rename to te
    const te = group.name.indexOf('te');
    if (te > -1) {
      group.name[te] = 'て';
    }

    //rename pseudo futurum to volitional
    const volitional = group.name.indexOf('pseudo');
    if (volitional > -1) {
      group.name[volitional] = 'volitional';
    }
    const futurum = group.name.indexOf('futurum');
    if (futurum > -1) {
      group.name.splice(futurum, 1);
    }


  });

  // console.log(sOptions)

  console.log('this one: !!', allForms);

  allForms.forEach((group) => {
    if (group.name.every((form) => randomForm.includes(form))) {
      validForms.push(group);
    }
  });

  // console.log(validForms)

  const answerObject =
    validForms[Math.floor(Math.random() * validForms.length)];

  // console.log(answerObject);

  let str = '';
  answerObject?.name.map((ele) => {
    return (str = str.concat(` ${ele}`).trim());
  });

  return { form: answerObject?.form, name: str };
};

export default getCorrectAnswer;
