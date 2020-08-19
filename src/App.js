import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
  <body>
    <header>
      <Header />
    </header>

    <div>
      <HelloWorld name="Simen" />
    </div>

    <footer>
      <Footer />
    </footer>
    </body>
  );
}

export default App;
