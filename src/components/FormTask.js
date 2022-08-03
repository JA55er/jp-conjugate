import React, { useEffect, useState } from 'react';

const FormTask = ({ options, setFormToGet, taskWord }) => {
  const [conjugateForm, setConjugateForm] = useState('');

  let politeRandom;
  let polite;
  let pastRandom;
  let past;
  let negativeRandom;
  let negative;

  const conjForm = () => {
    if (options.polite) {
      politeRandom = Math.round(Math.random());
      if (politeRandom) {
        polite = 'Polite ';
      } else polite = '';
    } else {
      politeRandom = 0;
      polite = '';
    }
    if (options.past) {
      pastRandom = Math.round(Math.random());
      if (pastRandom) {
        past = 'Past ';
      } else past = 'Present ';
    } else {
      pastRandom = 0;
      past = 'Present ';
    }
    if (options.negative) {
      negativeRandom = Math.round(Math.random());
      if (negativeRandom) {
        negative = 'Negative ';
      } else negative = '';
    } else {
      negativeRandom = 0;
      negative = '';
    }
  };

  conjForm();

  if (pastRandom + politeRandom + negativeRandom === 0) {
    conjForm();
  }

  useEffect(() => {
    console.log(past, polite, negative);
    setConjugateForm(past + polite + negative);
  }, [taskWord, options]);

  useEffect(() => {
    setFormToGet(conjugateForm.toLowerCase().slice(0, -1));
  }, [conjugateForm]);

  return <div className='task'>Conjugate to {conjugateForm}form</div>;
};

export default FormTask;
