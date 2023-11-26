import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { CgAlignCenter } from 'react-icons/cg';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="bg-image">
        <div className="content">
          <h1 className="title">Comic Generator</h1>
          <div className="instructions">
            <p>Follow the instructions to create your own comic!</p>
            <ol>
              <li>Given a set of 10 panels, write the dialogue and captions for each panel, and the tool will automatically create a cohesive comic strip</li>
              <li>If any panel lacks content, the tool will generate an image with a context similar to the neighboring panels.</li>
            </ol>
          </div>
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Link to="/GenerateComic" style={{ textDecoration: 'none' }}>
                    <button className="get-started-button">Get Started</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
