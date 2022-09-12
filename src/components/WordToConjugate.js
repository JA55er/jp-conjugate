import React from 'react';
import { useSelector } from 'react-redux';

const WordToConjugate = ({ resultPhase, correctAnswer}) => {

  const {result, taskWord} = useSelector(state => state.answer)

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
