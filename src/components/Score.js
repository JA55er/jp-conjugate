import { useSelector } from 'react-redux';

const Score = () => {
  const { correctAnswers, incorrectAnswers, answerRatio } = useSelector(
    (state) => state.score
  );

  return (
    <div className='score'>
      <p className='correct'>{correctAnswers}</p>
      <p>/</p>
      <p className='wrong'>{incorrectAnswers}</p>
      <p>/</p>
      <p className='ratio'>{answerRatio}%</p>
    </div>
  );
};

export default Score;
