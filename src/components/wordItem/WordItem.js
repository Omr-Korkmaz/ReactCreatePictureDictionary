import React from 'react';
import './WordItem.css'



const wordSingle = ({ word, togglewords, deleteword }) => {
    return (
        <article
            className={
                word.completed ? 'word--completed' : 'word'
            }
        >
            <div className='word--toggle-completed' onClick={() => togglewords(word.id)}>
            <img src={word.image} alt="" id="img" className="single-image" />
                <h3 className='word__title'>{word.title}</h3>
                <p className='word__note'>{word.content}</p>
                
            </div>
            <button
                className={
                    word.completed
                        ? 'word__button--remove'
                        : 'word__button--hide'
                }
                onClick={() => {
                    deleteword(word.id);
                }}>
                Remove
            </button>
        </article>
    );
}

export default wordSingle;
