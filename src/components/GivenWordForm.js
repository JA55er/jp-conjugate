import React, { useState } from 'react';

const GivenWordForm = ({ taskWord }) => {

  if (taskWord.verbClass === 1) return <div className='givenWordForm'>うーVerb</div>;
  if (taskWord.verbClass === 2) return <div className='givenWordForm'>るーVerb</div>;
  
};

export default GivenWordForm;
