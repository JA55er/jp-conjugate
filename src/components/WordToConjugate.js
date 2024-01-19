import React from 'react';
import { useSelector } from 'react-redux';

const WordToConjugate = () => {
  const { result, taskWord, resultPhase, correctAnswer } = useSelector(
    (state) => state.answer
  );

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
  return <div className='wordToConjugate'>{taskWord.hiraganaReading}</div>;
};

export default WordToConjugate;
