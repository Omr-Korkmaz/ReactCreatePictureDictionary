import React, { useEffect, useState } from 'react';
import CreateWord from './createWord/CreateWord';
import WordList from './wordList/WordList';
import './App.css';



const App = () => {
  const [words, setwords] = useState({ words: [] });

  // useEffect(() => {
  //   const getwordsLocalStorage = JSON.parse( localStorage.getItem('words') || '');
  //   if (getwordsLocalStorage) {
  //     setwords(getwordsLocalStorage);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('words', JSON.stringify(words));
  // }, [words]);

  const addword = (title, content, image) => {
    setwords({
      words: [
        { title, content, image, completed: false, id: Date.now() },
        ...words.words,
      ],
    });
  };
  const deleteword = (id) => {
    setwords({
      words: words.words.filter((word) => word.id !== id),
    });
  };

  const toggleword = (id) => {
    setwords({
      words: words.words.map((word) =>
        word.id === id ? { ...word, completed: !word.completed } : word
      ),
    });
  };

  return (
    <section>
      <header className='header'>
        <h1 className='header__title'>Creating Photo Dictionary</h1>
      </header>
      <article className='App'>
        <CreateWord addword={addword} />
        <hr />
        <WordList
          words={words}
          togglewords={toggleword}
          deletewords={deleteword}
        />
      </article>
    </section>
  );
};

export default App;
