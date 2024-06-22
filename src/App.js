import React from 'react';
import './App.css';
import BookComponent from './BookComponent';

function App() {
  const bookInfo = {
    title: "ვეფხისტყაოსანი",
    image: require ('./vefxistyaos1.jpg'),
    description: "შოთა რუსთაველის ეპიკური პოემა, ქართული ლიტერატურის შედევრი.",
    characters: ["ტარიელი", "ავთანდილი", "ნესტან-დარეჯანი", "თინათინი", "ფრიდონი"]
  };

  const handleButtonClick = (title, characters) => {
    console.log(`სათაური: ${title}`);
    console.log("პერსონაჟები:", characters.join(", "));
  };

  return (
    <div className="App">
      <BookComponent 
        title={bookInfo.title}
        image={bookInfo.image}
        description={bookInfo.description}
        characters={bookInfo.characters}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
