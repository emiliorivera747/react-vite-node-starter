import {useState, useEffect} from 'react';
import './App.css'

function App() {

  const [message, setMessage] = useState<string | null>(null);

  useEffect(()=>{
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/hello-world');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchMessage();
  },[]);

  return (
    <div>
      {message? message : 'Loading...'}
    </div>
  )
}

export default App
