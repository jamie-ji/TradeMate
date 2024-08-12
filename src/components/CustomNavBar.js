import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';  
import NavBarHeader2 from '../ui-components/NavBarHeader2';
import {useTheme } from '@aws-amplify/ui-react';
import MyIcon from '../ui-components/MyIcon';

function CustomNavBar(props) {
  const { tokens } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const overrideProps={
    "NavBarHeader2":{
      width: {base:"fit-content",small:"80vw"},
      position: "absolute",
      direction:{base:"column",medium:"column",large:"row"},
      overflow:"visible",
      top:"3vh",
      left:"10vw",
      height:{base:"fit-content",medium:"fit-content",large:"10vh"},
      borderRadius: "30px",
      },
    "Frame 5":{
      width: {base:"fit-content",medium:"fit-content"},
      gap:{base:"medium",large:tokens.space.xxl},
      direction:{base:"column",small:"row"},

    },
    "Frame 437":{
      minWidth:"245px",
      gap: {base:"medium",medium:"xxl"},
      padding: {base:"10px",medium:"10px"},
    },
    
    MyIcon:{
      display:"none"
    },
    "Products_click":{},
    "Pricing_click":{},
    "Contact_click":{},
    "logo": {
      src: "/logo_red_removebg.png",
      alt: "LOGO",
      display: {base:"block",medium:"block"},
      maxWidth: {base:"130px",medium:"200px",large:"250px"}, /* Original width */
      width: {base:"100%"}, /* Full width of its container */
      height: "auto", /* Maintain aspect ratio */
      aspectRatio: "300 / 75", /* Maintain original aspect ratio */
      maxHeight: "75px", /* Original height */
    
    },
  }
  return (
    <>
    <NavBarHeader2 overrides={overrideProps} />
  </>
  )

}

export default CustomNavBar;