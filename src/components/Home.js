import React from "react";
import "../styles/home-styles.css";

const Home = () => {
  return (
    <div className="container">
      <div>
        <div className="name">Welcome to Be_Healthy</div>
      </div>
      <div className="old_couple-image">
        <img
          className="old_couple_image"
          src="https://static.vecteezy.com/system/resources/previews/016/389/947/original/nursing-and-elderly-care-free-png.png"
          alt="old_couple_image"
        />
      </div>
    </div>
  );
};

export default Home;

// import React from 'react';
// import oldCoupleImage from '../assets/old_couple_image.png';
// import '../styles/home-styles.css';

// const Home = () => {
//   return (
//     <div className="container">
//     <div className="name">Welcome to Be_Healthy</div>
//     <div className="old_couple-image">
//       <img className="old_couple_image" src={oldCoupleImage} alt="old_couple_image" />
//     </div>
//   </div>

//   );
// };

// export default Home;
