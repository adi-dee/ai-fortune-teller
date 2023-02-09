// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [fortune, setFortune] = useState('');
//   const [color, setColor] = useState('black');

//   const generateFortune = async () => {
//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/completions',
//         {
//           model: 'text-davinci-003',
//           prompt: 'Generate a fortune cookie sentence',
//           temperature: 0,
//           max_tokens: 7,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Bearer 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',
//           },
//         }
//       );
//       const newFortune = response.data.choices[0].text;
//       setFortune(newFortune);
//       setColor(getRandomColor());
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getRandomColor = () => {
//     const colors = ['red', 'blue', 'green', 'purple', 'orange'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   return (
//     <div>
//       <p style={{ color }}>{fortune}</p>
//       <button onClick={generateFortune}>Get Fortune</button>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';
import FortuneType from './components/FortuneType';
import FortuneStyle from './components/FortuneStyle';
import AuraColor from './components/AuraColor';
import FortuneTeller from './components/FortuneTeller';
import ResultCard from './components/ResultCard';
import './App.css';

const App = () => {
  const [fortuneType, setFortuneType] = useState(null);
  const [fortuneStyle, setFortuneStyle] = useState(null);
  const [auraColor, setAuraColor] = useState(null);
  const [fortune, setFortune] = useState('');

  const generateFortune = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: `Generate a ${fortuneType} fortune in a ${fortuneStyle} concidering the aura meaning of the ${auraColor} color`,
          temperature: 0,
          max_tokens: 300,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'private-key',
          },
        }
      );
      const newFortune = response.data.choices[0].text;
      setFortune(newFortune);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='app-body'>
      {!fortuneType ? (
        <FortuneType setFortuneType={setFortuneType} />
      ) : !fortuneStyle ? (
        <FortuneStyle onStyleSelection={setFortuneStyle} />
      ) : !auraColor ? (
        <AuraColor setAuraColor={setAuraColor} />
      ) : (
        <FortuneTeller fortune={fortune} auraColor={auraColor} generateFortune={generateFortune} />
      )}


        <div>
          {!fortuneType ? null:( <ResultCard backText={fortuneType} /> ) }

          {!fortuneStyle ? null:( <ResultCard backText={fortuneStyle} /> ) }

          {!auraColor ? null:( <ResultCard backText={auraColor} /> ) }
    </div>
    </div>
  );
};

export default App;