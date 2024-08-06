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
      width: "100vw",
      direction:{base:"column",medium:"row"},
      overflow:"visible",
    },
    "Frame 5":{
      gap:{base:"medium",large:tokens.space.xxl},
      direction:{base:"column",small:"row"},

    },
   "Icon": {
      onClick: () => setIsMenuOpen(!isMenuOpen),
    },
    // 添加一个新的 Flex 组件来包含移动端菜单项
    "MobileMenu": {
      display: { base: isMenuOpen ? "flex" : "none", medium: "none" },
      direction: "column",
      position: "relative",
    },
    "Products_click":{},
    "Pricing_click":{},
    "Contact_click":{},
    "logo": {
    src: "/logo.png",
    alt: "Your Logo Alt Text",
    },
    "Products":{
      display:{base:"none",medium:"block"},
    },
    "Pricing":{
      display:{base:"none",medium:"block"},
    },
    "Contact":{
      display:{base:"none",medium:"block"},
    },
    actions:{
      display:{base:"none",medium:"block"},
    }
  }
  return (
    <>
    <NavBarHeader2 overrides={overrideProps} />
  </>
  )

}

export default CustomNavBar;