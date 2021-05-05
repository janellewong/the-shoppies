import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';

import FetchOMDB from "./FetchOMDB";

const App = () => {
  return (
    <div className="App">
      
      <Container>
      <h1>The Shoppies</h1>
      <h2>Instructions:</h2>
      <p>Search the movies you want to nominate and click the nominate button to add it to your nominate list!</p>
        <FetchOMDB></FetchOMDB>
      </Container>
    </div>
  )
}

export default App;
