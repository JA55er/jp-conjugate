import React from 'react';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';

// import { useSelector } from 'react-redux';

interface TaskWordActionPayload {
  _id: string;
  japanese: string;
  hiraganaReading: string;
  romanization: string;
  englishTranslation: string;
  verbClass: number;
  transitiveIntransitive: string;
}

//the task word that the user has to conjugate
const WordToConjugate = () => {
  const { result, taskWord, resultPhase, correctAnswer } = useAppSelector(
    (state: RootState) => state.answer
  );
  // const { result, taskWord, resultPhase, correctAnswer } = useSelector(
  //   (state) => state.answer
  // );

  const typedTaskWord = taskWord as TaskWordActionPayload;
  // console.log(typedTaskWord);

  if (!typedTaskWord || Object.keys(typedTaskWord).length === 0) {
    return <div className='wordToConjugate'>Loading...</div>;
  }
  //if in result phase display the color based on the answer
  //being correct or wrong
  if (resultPhase) {
    return (
      <div
        className='wordToConjugate'
        style={{ backgroundColor: result ? '#00FF00' : '#ED4337' }}
      >
        {typedTaskWord.hiraganaReading} =&gt; {correctAnswer}
      </div>
    );
  }
  //if not in result phase display the word that needs to be conjugated
  return <div className='wordToConjugate'>{typedTaskWord.hiraganaReading}</div>;
};

export default WordToConjugate;
