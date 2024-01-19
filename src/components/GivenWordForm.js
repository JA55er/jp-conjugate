import React from 'react';
import { useSelector } from 'react-redux';

const GivenWordForm = () => {
  const taskWord = useSelector((state) => state.answer.taskWord);

  if (taskWord.verbClass === 1)
    return <div className='givenWordForm'>うーVerb</div>;
  if (taskWord.verbClass === 2)
    return <div className='givenWordForm'>るーVerb</div>;
};

export default GivenWordForm;
