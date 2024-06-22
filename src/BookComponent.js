import React from 'react';

function BookComponent({ title, image, description, characters, onButtonClick }) {
  return (
    <div className="book-component">
      <img src={image} alt={title} className="book-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>პერსონაჟები:</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <button onClick={() => onButtonClick(title, characters)}>
        დააჭირე ინფორმაციისთვის
      </button>
    </div>
  );
}

export default BookComponent;