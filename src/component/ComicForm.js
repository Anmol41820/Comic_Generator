import React, { useState } from 'react';
import ComicPanel from './ComicPanel';

const ComicForm = ({ onGenerateComic }) => {
    const [panels, setPanels] = useState(Array(10).fill(''));
    const [comicPanels, setComicPanels] = useState(Array(10).fill(null)); //new

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (index, value) => {
        const newPanels = [...panels];
        newPanels[index] = value;
        setPanels(newPanels);
    };

    const generateComic = async () => {
        setIsLoading(true);
        try {
                console.log('Generating comic...');
                const images = await Promise.all(panels.map(panelText => query({ inputs: panelText })));
                // onGenerateComic(images);
                setComicPanels(images);//new

            
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to generate comic. Please try again.');
        }finally {
            setIsLoading(false);
        }
    };

    const query = async (data) => {
        try{
            const response = await fetch(
                "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
                {
                    headers: {
                        "Accept": "image/png",
                        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );
            const result = await response.blob();
            return URL.createObjectURL(result);

        } catch (error) {
            console.error('API Error:', error.message);
            throw error; // Rethrow the error to handle it in the calling function
        }
        
        
    };

    return (
        <div>
            <h1>Comic Generator</h1>
            <form>
                {panels.map((panelText, index) => (
                    <div>
                        <textarea
                            key={index}
                            value={panelText}
                            placeholder={`Panel ${index + 1}`}
                            onChange={(e) => handleChange(index, e.target.value)}

                        />

                        {comicPanels[index] && <ComicPanel imageURL={comicPanels[index]} />}
                    </div>
                    
                ))}
                <button id='sub' type="button" onClick={generateComic}>
                {isLoading ? 'Generating....' : 'Generate Comic'}
                    {/* Generate Comic */}
                </button>
                {isLoading && <p>Please wait. This may take a few minutes.</p>}
            </form> 
        </div>
    );
};

export default ComicForm;