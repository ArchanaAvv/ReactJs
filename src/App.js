import React from 'react';


//statefull component
class App extends React.Component {

  render(){
      return (
          <div>
              <Header/>
              <Body/>
              <Footer/>
              </div>
      )

    }
  }
const Header  = () => <p>Smiley<img src="http://www.w3schools.com/tags/smiley.gif" alt="Hello" width="52" height="52"/></p>
const Body  = () => <p>Welcome to React<img src="https://i.ytimg.com/vi/FrCgZZXXK9I/hqdefault.jpg" alt="Logo" width="80" height="80"/></p>
const Footer  = () => <p><img src="http://i564.photobucket.com/albums/ss86/ban0107/aya/footer.gif" alt="GoodBye"/> </p>


export default App;

