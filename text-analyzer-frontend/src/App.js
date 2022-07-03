import { useState} from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';

function App() {
  const [text, setText] = useState('');
  const [translationText, setTranslationText] = useState('');
  const [lines, setLines] = useState(0);
  const [mostRepeatedWords, setMostRepeatedWords]= useState([]);
  const [toggleCardResult, setToggleCardResult] = useState(false);

  const handleData = (data) => {
    setText(data.text)
    setTranslationText(data.translationText)
    setLines(Math.round(data.numberLines/2))
    setMostRepeatedWords(data.mostRepeatedWords.map(a => a.join(" -> ")).join(" || "))
    setToggleCardResult(true)
  };

  // Render Component
  return (
    <div className='App' style={{backgroundColor:"#323232"}}>
      <Header />
      <Form handleData={handleData}/>
      {toggleCardResult &&
        <div className='alert alert-warning' role='alert'>
          RESULTS
        </div>
      }
      {toggleCardResult && <Card title={"Text:"} text={text}/>}
      {toggleCardResult && <Card title={"Number of Lines:"} text={lines}/>}
      {toggleCardResult && <Card title={"Most repeated words:"} text={mostRepeatedWords}/>}
      {toggleCardResult &&
        <div className='alert alert-warning' role='alert'>
          TRANSLATION
        </div>
      }
      {toggleCardResult && <Card title={"Translation Text:"} text={translationText}/>}
    </div>
  );
}

export default App;
