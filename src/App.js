import React, {useState, useEffect} from 'react';
import Spotify from './components/Spotify'
import Login from './components/Login';



const App = () => {
 
   const [accessToken, setAccessToken] = useState("");
  const [log, setLog] = useState(false);
  console.log(accessToken)

  useEffect(() => {
    const token = window.location.hash.substring(1).split("&")[0].split("=")[1];
    if (token) {
      setLog(true);
    }
  }, []);


  return (
  !log ? <Login /> : <Spotify accessToken={accessToken} setAccessToken={setAccessToken} setLog ={setLog} />
  );
}

export default App;
