import React from 'react';
import { useSelector } from 'react-redux';

const WordToConjugate = ({ taskWord, resultPhase, correctAnswer, result }) => {

  // const correctAnswer = useSelector(state => state.answer.correctAnswer)

  if (resultPhase) {
    return (
      <div className='wordToConjugate' style={{ backgroundColor: result }}>
        {taskWord.hiraganaReading} =&gt; {correctAnswer}
      </div>
    );
  }
  return <div className='wordToConjugate'>{taskWord.hiraganaReading}</div>;
};

export default WordToConjugate;
