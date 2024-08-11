import React from 'react';
import { Link } from 'react-router-dom';  
import NavBarHeroSection from '../ui-components/NavBarHeroSection';
import CustomNavBar from './CustomNavBar';

function CustomHeroSection(props) {

  const overrideProps={
    NavBarHeroSection: {
        width: "100vw",
        height: "90vh",
        style: {
            backgroundImage: "url('/bg3.jpg')",
            backgroundSize: 'cover',  // 这会使图片覆盖整个元素
            backgroundPosition: 'center',  // 这会使图片居中
            backgroundRepeat: 'no-repeat'  // 这会防止图片重复
            
          }
      },
    "Hero Image": {
      backgroundColor: "rgba(255,255,255,0.3)",
      height: "100%",
    },
    NavBarHeader2: {
        as: CustomNavBar,

      },
  };

  return (
    <div>
      <NavBarHeroSection overrides={overrideProps}></NavBarHeroSection>
    </div>
  )
}
export default CustomHeroSection;
