import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Contact from './Contact';
import FetchOMDB from "./FetchOMDB";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'





const App = () => {
  return (    
      <div className="App">
        <ReactNotification></ReactNotification>
        <Container className="app-description">
          <h1>The Shoppies: Movie Awards &#127942;</h1>
          <h2 style={{ color: "white"}}>Instructions:</h2>
          <p style={{ color: "white"}}>Search the movies you want to nominate and click the nominate button to add it to your list!</p>
          <FetchOMDB></FetchOMDB>
        </Container>
        <Contact></Contact>
      </div>
  )
}

export default App;
