import React from 'react';
// import { useAppSelector } from '../store';
// import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks';


interface TaskWordActionPayload {
  _id: string;
  japanese: string;
  hiraganaReading: string;
  romanization: string;
  englishTranslation: string;
  verbClass: number;
  transitiveIntransitive: string;
}

//displays the class of the verb
const GivenWordForm = () => {
  const taskWord = useAppSelector(
    (state) => state.answer.taskWord as TaskWordActionPayload
  );
  // const taskWord = useSelector((state) => state.answer.taskWord);

  if (taskWord.verbClass === 1)
    return <div className='givenWordForm'>うーVerb</div>;
  if (taskWord.verbClass === 2)
    return <div className='givenWordForm'>るーVerb</div>;
};

export default GivenWordForm;
