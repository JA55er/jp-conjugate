import React from 'react';
import { useSelector } from 'react-redux';

//the task word that the user has to conjugate
const WordToConjugate = () => {
  const { result, taskWord, resultPhase, correctAnswer } = useSelector(
    (state) => state.answer
  );

  //if in result phase display the color based on the answer 
  //being correct or wrong
  if (resultPhase) {
    return (
      <div
        className='wordToConjugate'
        style={{ backgroundColor: result ? '#00FF00' : '#ED4337' }}
      >
        {taskWord.hiraganaReading} =&gt; {correctAnswer}
      </div>
    );
  }
  //if not in result phase display the word that needs to be conjugated
  return <div className='wordToConjugate'>{taskWord.hiraganaReading}</div>;
};

export default WordToConjugate;
