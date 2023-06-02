import React from 'react';
import './App.css';
import photo_of_toby from './Photo of Me.jpg';

function App() {
  return (
  <div className="App">
  <html>
    <head>
      <title>Toby Morgan's Portfolio</title>
      <meta name="author" content="Toby Morgan"></meta>
      <meta name="description" content="Portfolio and CV"></meta>
    </head>
    <body>
      <header>
        <h1>Toby Morgan's Portfolio & CV</h1>
        <h2>Welcome to my portfolio!</h2>
      </header>
      <div>
        <span>
          <img src={photo_of_toby} alt="Photo of Toby" width="280" height="310"></img>
          <h3>About me</h3>
            I'm from: West Coast of New Zealand.
            <br></br>
            I live: I moved to Christchurch to attend the University of Canterbury.
            <br></br>
            I studied: Bachelor of Science, majoring in Computer Science.
            <br></br>
            Favourite subjects: Cryptography and automata, but I also enjoyed many other fields such as software engineering, discrete mathematics and game design.
            <br></br>
            Employment: I am very passionate about learning and getting experience in all fields of computer science.
            The ideal job for me would be focused on programming as I love to code, but also offer a broad range of other tasks to keep me challenged and open up the options possible for what roles I can take.
        </span>
      </div>
      <div>
        <span>
          Hello this is whatever
        </span>
      </div>
    </body>
    <footer>
      <div>
        <form method="POST" action="mailto:crazymorgan0@gmail.com">
        <table>
        <thead>
            <tr>
                <th>Fill the form below to send me an email:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Your name: <input type="text" name="clientName" value="Your Name"></input></td>
            </tr>
            <tr>
                <td>Your email: <input type="email" name="clientEmail" value="example@email.com"></input></td>
            </tr>
            <tr>
                <td>Your business: <input type="text" name="clientBusiness" value="You work for: "></input></td>
            </tr>
            <tr>
                <td>Your message: <textarea name="Message" rows={5}></textarea></td>
            </tr>
            <tr>
              <td><input type="submit" value="Send"></input></td>
            </tr>
        </tbody>
        </table>
        </form>
      </div>
    </footer>
  </html>
  </div>
  );
}

export default App;