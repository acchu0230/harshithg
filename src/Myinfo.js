import React from 'react';
import './Myinfo.css';
import './global.css';
import Myimg from './assets/Myimg.png'; // Ensure the image is in the same directory or update the path accordingly

const Myinfo = () => {
  return (
    <section>

<div className="image-section">
        <img src={Myimg} alt="My Profile" />
      </div>
      <h1>Hi, I'm HARSHITH</h1>
      <p>
        {/* I'm a Full Stack Developer Studied in BANGALORE INSTITUTE OF TECHNOLOGY <br /> */}
        Age: 22  <br />
        Experience: Fresher<br />
        Location: Bangalore<br />
      
        
        <br />
        <br />

        <a className='c1' href='https://drive.google.com/file/d/19FIHYYKtK2IxAXnAY7MlTfW4DZNxJPvF/view?usp=sharing'>Click to view CV</a>
      </p>
      
      
      
    </section>
  );
}

export default Myinfo;