import { useState} from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';

function App() {
  const [result, setResult] = useState('');
  const [lines, setLines] = useState(0);
  const [mostRepeatedWords, setMostRepeatedWords]= useState([]);
  const [toggleCardResult, setToggleCardResult] = useState(false);

  const handleData = (data) => {
    setResult(data.text)
    setLines(Math.round(data.numberLines/2))
    setMostRepeatedWords(data.mostRepeatedWords.map(a => a.join(" -> ")).join(" || "))
    setToggleCardResult(true)
  };

  // Render Component
  return (
    <div className='App'>
      <Header />
      <Form handleData={handleData}/>
      {toggleCardResult &&
        <div className='alert alert-primary' role='alert'>
          Results
        </div>
      }
      {toggleCardResult && <Card title={"Text:"} text={result}/>}
      {toggleCardResult && <Card title={"Number of Lines:"} text={lines}/>}
      {toggleCardResult && <Card title={"Most repeated words:"} text={mostRepeatedWords}/>}
    </div>
  );
}

export default App;
