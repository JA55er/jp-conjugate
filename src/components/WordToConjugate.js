import React from 'react';

const WordToConjugate = ({ taskWord, resultPhase, correctAnswer, result }) => {
  if (resultPhase) {
    return (
      <div className='wordToConjugate' style={{ backgroundColor: result }}>
        {taskWord.hiraganaReading} =&gt; {correctAnswer?.form}
      </div>
    );
  }
  return <div className='wordToConjugate'>{taskWord.hiraganaReading}</div>;
};

export default WordToConjugate;
