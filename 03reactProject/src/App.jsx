import './App.css'
import Card from './components/Card';
function App() {
 
  let myArr = [1, 2, 3, 47];

  return (
    <>
      <h1 className="bg-green-400 mb-4 rounded-xl p-4">Tailwind with CSS</h1>
      <Card username="Prince" arr={myArr} />
      <Card username="Singh" arr={myArr} />
    </>
  )
}

export default App
