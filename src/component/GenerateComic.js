import React, { useState } from 'react';
import ComicForm from './ComicForm';
import ComicPanel from './ComicPanel';
import './HomePage.css';

export const GenerateComic = () => {
    const [comicPanels, setComicPanels] = useState([]);

    const handleGenerateComic = (panels) => {
        setComicPanels(panels);
    };

    return (
        <div>
        <div className='App_outter'>
        
        <div className="App" style={{ marginTop: '5%', padding: '2%', width: '80%'}}>
            <ComicForm onGenerateComic={handleGenerateComic} />
            <div className="comic-display">
                {comicPanels.map((imageURL, index) => (
                    <ComicPanel key={index} imageURL={imageURL} />
                ))}
            </div>
        </div>
        </div>
        
        </div>
    );
}


export default GenerateComic;