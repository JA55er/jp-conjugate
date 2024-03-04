//@ts-ignore
import verbs from 'jp-conjugation';
import addForm from './addForm';
import { TaskWordActionPayload } from '../reducers/taskSlice';

//function for getting the correct answer based on selected
//options and task word
interface OptionsInterface {
  causative: boolean;
  conditional: boolean;
  desire: boolean;
  negative: boolean;
  passive: boolean;
  past: boolean;
  polite: boolean;
  potential: boolean;
  volitional: boolean;
  て: boolean;
}

export const getCorrectAnswer = (
  options: OptionsInterface,
  taskWord: TaskWordActionPayload
) => {

  // console.log(options);
  
  //set the conjArr with all the conjugation forms based on the verb class
  //of the task word
  let conjArr = [];
  if (taskWord?.verbClass === 1) {
    conjArr = verbs.conjugate(taskWord?.hiraganaReading);
  } else if (taskWord?.verbClass === 2) {
    conjArr = verbs.conjugate(taskWord?.hiraganaReading, 'v1');
  }

  if (conjArr.length === 0 || Object.keys(taskWord).length === 0)
    return { form: null, name: null };
  // console.log(conjArr)

  let selectedForms = '';

  let sOptions: OptionsInterface = { ...options };

  // console.log('sOptions', sOptions);

  //checks if all the conjugation options are set to false.
  //if so sets all their values to true making all conjugation
  //forms eligible
  if (!Object.values(sOptions).find((value) => value)) {
    Object.entries(sOptions).map(([key]) => {
      // console.log('key: ', typeof(key));

      if (key in sOptions) {
        sOptions[key as keyof OptionsInterface] = true;
      }
    });
  }
  if (!Object.values(sOptions).find((value) => value)) {
    Object.entries(sOptions).map(([key]) => {
      // console.log('key: ', typeof(key));
    });
  }

  // console.log(sOptions);

  //checks which options are selected and puts those that are into a string
  Object.entries(sOptions).forEach(([key, value]) => {
    if (value) {
      selectedForms = selectedForms.concat(`${key} `);
    }
  });

  // console.log(selectedForms)

  //adds additional conjugation forms to the conjugation array
  conjArr = addForm(conjArr, taskWord);

  // console.log('all forms: ', conjArr);

  //puts the selected forms into an array
  const selectedFormsArr = selectedForms.trim().split(' ');

  // console.log('selectedFormsArr: ', selectedFormsArr);

  interface Forms {
    name: string[];
    form: string;
  }

  //an array for all the conjugated forms
  const allForms: Forms[] = [];

  //an array for valid forms for the task
  //word to be cojugated to based on selected options
  const validForms: Forms[] = [];

  // console.log(conjArr)

  //fills the allForms array with objects of {name, form}
  //name - array filled with names of forms that make the whole form
  //ex. ['past', 'negative']
  //form - string, word conjugated to that full form
  Object.values(conjArr).forEach(
    (value, i) =>
      (allForms[i] = { name: value.name.split(' '), form: value.form })
  );
  // console.log('allForms: ', allForms);

  //changes the names of some forms and removes unnecessary
  // words from allForms
  allForms.forEach((group) => {
    //remove 'present' from form name
    const present = group.name.indexOf('present');
    if (present > -1) {
      group.name.splice(present, 1);
    }

    //remove 'form' from form name
    const form = group.name.indexOf('form');
    if (form > -1) {
      group.name.splice(form, 1);
    }

    //rename 'te' to 'て'
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

  // console.log(allForms);

  //checks if all the selected options includes all the forms that make
  //up the the whole conjugation form
  //if so, includes those forms in possible task forms
  //ex. if user selected 'past' and 'polite' options he can
  //get 'past polite' form but not 'past polite negative' form
  allForms.forEach((group) => {
    if (group.name.every((form) => selectedFormsArr.includes(form))) {
      validForms.push(group);
    }
  });

  // console.log('all forms: ', allForms);
  // console.log('valid forms: ', validForms);

  //randomdly selects one of the forms for the user to conjugate to
  //from all the eligible forms
  const answerObject =
    validForms[Math.floor(Math.random() * validForms.length)];

  // console.log('answer object: ', answerObject);

  //combine the elemts that make up the whole form for display
  let conjugationTaskForm = '';
  answerObject?.name.map((ele) => {
    return (conjugationTaskForm = conjugationTaskForm.concat(` ${ele}`).trim());
  });

  // console.log(conjugationTaskForm);
  //return form that the user needs to conjugate to and correct answer
  return { form: conjugationTaskForm, correctAnswerWord: answerObject?.form };
  // return { form: answerObject?.form, name: str };
};

export default getCorrectAnswer;
