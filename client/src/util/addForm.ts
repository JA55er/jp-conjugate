//function to add additional forms to possible conjugation forms list
//and changing some existing ones

import { TaskWordActionPayload } from '../reducers/taskSlice';

interface Form {
  name: string;
  form: string;
}

const addForm = (oldForms: Form[], taskWord: TaskWordActionPayload) => {
  // console.log('old forms and taskword', oldForms, taskWord);
  //renaming forms
  oldForms[1].name = 'past polite negative';
  oldForms[4].name = 'past negative';
  oldForms[21].name = 'polite';
  oldForms[22].name = 'negative';
  oldForms[36].name = 'past';
  // console.log(oldForms);

  const desire: Form | undefined = oldForms.find(
    (form) => form.name === 'desire'
  );
  // const past = oldForms.find((form) => form.name === 'past tense');
  const past: Form | undefined = oldForms.find((form) => form.name === 'past');
  const pastNegative: Form | undefined = oldForms.find(
    (form) => form.name === 'past negative'
  );
  let potential: Form | undefined = undefined;
  if (taskWord.verbClass === 1) {
    potential = oldForms.find((form) => form.name === 'commanding');
  } else {
    potential = oldForms.find((form) => form.name === 'passive');
  }

  let newForms: Form[] = oldForms;

  if (desire) {
    newForms = newForms.concat(negativeDesire(desire));
  }
  if (past) {
    newForms = newForms.concat(conditionalForm(past));
  }
  if (pastNegative) {
    newForms = newForms.concat(negativeConditionalForm(pastNegative));
  }
  if (potential) {
    newForms = newForms.concat(potentialForm(potential));
  }
  return newForms;
};

//functions for adding various forms
const negativeDesire = ({ form }: { form: string }) => {
  return { name: 'negative desire', form: form.slice(0, -1).concat('くない') };
};
const conditionalForm = ({ form }: { form: string }) => {
  return { name: 'conditional', form: form.concat('ら') };
};
const negativeConditionalForm = ({ form }: { form: string }) => {
  return { name: 'negative conditional', form: form.concat('ら') };
};
const potentialForm = ({ form, name }: { form: string; name: string }) => {
  // console.log(name)
  if (name === 'passive') {
    return { name: 'potential', form };
  } else {
    return { name: 'potential', form: form.concat('る') };
  }
};

export default addForm;
