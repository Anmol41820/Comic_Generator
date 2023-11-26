import React from 'react';

const ComicPanel = ({ imageURL }) => (
    <div className="panel">
        <img src={imageURL} alt="Comic Panel" />
    </div>
);

export default ComicPanel;