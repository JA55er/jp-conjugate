const addForm = (oldForms, taskWord) => {
  const desire = oldForms.find((form) => form.name === 'desire');
  const past = oldForms.find((form) => form.name === 'past');
  const pastNegative = oldForms.find((form) => form.name === 'past negative');
  let potential = ''
  if (taskWord.verbClass === 1) {
    potential = oldForms.find((form) => form.name === 'commanding')
  } else {
    potential = oldForms.find((form) => form.name === 'passive')
  }
  const newForms = oldForms.concat(negativeDesire(desire), conditionalForm(past), negativeConditionalForm(pastNegative), potentialForm(potential));
  return newForms;
};

const negativeDesire = ({ form }) => {
  return { name: 'negative desire', form: form.slice(0, -1).concat('くない')};
};
const conditionalForm = ({ form }) => {
  return { name: 'conditional', form: form.concat('ら')};
};
const negativeConditionalForm = ({ form }) => {
  return { name: 'negative conditional', form: form.concat('ら')};
};
const potentialForm = ({ form, name }) => {
  // console.log(name)
  if (name === 'passive') {
    return { name: 'potential', form};
  } else {
    return {name: 'potential', form: form.concat('る')}
  }
};

export default addForm;
