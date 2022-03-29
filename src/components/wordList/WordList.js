import React from 'react';
import WordItem from '../wordItem/WordItem';



const wordList= ({ words, togglewords, deletewords }) => {
    const deleteword = (id) => {
        deletewords(id);
    };
    return (
        <article className='word-container' id='wordList'>
            {words.words.map((word) => {
                return (
                    <WordItem
                        key={word.id}
                        checked={word.completed}
                        togglewords={togglewords}
                        deleteword={deleteword}
                        word={word}
                    />
                );
            })}
        </article>
    );
};

export default wordList;
