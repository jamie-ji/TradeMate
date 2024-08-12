import React from 'react';
import { Link } from 'react-router-dom';  
import HeroSection from '../ui-components/HeroSection';
import { Icon, Image, View, useTheme,ThemeProvider } from "@aws-amplify/ui-react";
import CustomNavBar from './CustomNavBar';
import { createTheme } from '@aws-amplify/ui-react';


const theme = createTheme({
  name: 'swaying-theme',
  tokens: {
    components: {
      card: {
        // 保持原有的主题定义
      },
    },
  },
});

function CustomHeroSection(props) {
  const { breakpoints } = useTheme();
  const vector_baseWidth = 225.97;
  const vector_baseHeight = 160.99;
  const swayingAnimation = `
    @keyframes sway {
      0% { transform: rotate(var(--rotation-start)); }
      50% { transform: rotate(calc(var(--rotation-start) + var(--rotation-range))); }
      100% { transform: rotate(var(--rotation-start)); }
    }
  `;
  const overrideProps={
    "HeroSection":{
      width: "100vw",
      height: {base:"60vh",large:"100vh"},
      position: "relative",
      
    },
    "bg4 1":{
      width: "100vw",
      height: "90vh",
      src:"/bg4.jpg",
      objectFit: "cover",
    },
    "Vector 1":{
      width: "10vw",
      // 高度自动计算以保持宽高比
      height: "auto",
      // 使用 calc 和 vmin 来确保图标不会过大
      maxWidth: `calc(${vector_baseWidth}px * 0.5)`,
      maxHeight: `calc(${vector_baseHeight}px * 0.5)`,
      // 使用 transform 来调整位置，使其相对于父元素定位
      position: "absolute",
      top: "35%",
      left: "5%",
      transform: "rotate(15deg)",
      style: {
        '--rotation-start': '-12.04deg',
        '--rotation-range': '8deg',
        animation: 'sway 3s infinite ease-in-out',
        // 调试样式
      },
      display:{ base: "none", large: "block" },
    },
    "Vector 2":{
      width: "10vw",
      // 高度自动计算以保持宽高比
      height: "auto",
      // 使用 calc 和 vmin 来确保图标不会过大
      maxWidth: `calc(${vector_baseWidth}px * 0.5)`,
      maxHeight: `calc(${vector_baseHeight}px * 0.5)`,
      // 使用 transform 来调整位置，使其相对于父元素定位
      position: "absolute",
      top: "35%",
      left: "85%",
      transform: "rotate(15deg)",
      style: {
        '--rotation-start': '15deg',
        '--rotation-range': '8deg',
        animation: 'sway 3s infinite ease-in-out',
        // 调试样式
      },
      display:{ base: "none", large: "block" },
    },
    "CommentCard39154567":{
      aspectRatio:"540.85px/220.76px",
      width: "30%",
      height: "auto",
      top: "60%",
      left: "8%",
      style: {
        '--rotation-start': '-12.04deg',
        '--rotation-range': '2deg',
        animation: 'sway 3s infinite ease-in-out',
        // 调试样式
      },
      overrides: {
        "Share29766888": {
          display: "none"
        },
        "image":{
          src:"./avatar.jpg"
        },
      },
      display:{ base: "none", large: "block" },
    },

    "CommentCard39154598":{
      width: "15%",
      height: "auto",
      top: "55%",
      left: "75%",
      transform:"rotate(15deg)",
      style: {
        '--rotation-start': '15deg',
        '--rotation-range': '-4deg',
        animation: 'sway 3s infinite ease-in-out',
        // 调试样式
      },
      overrides: {
        "Share29766888": {
          display: "none"
        },
        "image":{
          src:"./avatar_2.jpg"
        },
        "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D":{
          children: "Return liquidity to the market"
        },
        "Scott":{
          children: "Andy",
          paddingTop: "8px"
        },
      },
      display:{ base: "none", large: "block" },
    },
  
    "NavBarHeader2":{
      as : CustomNavBar,
      
    },
    
  };

  return (
    <ThemeProvider theme={theme}>
      <style>{swayingAnimation}</style>
      <HeroSection overrides={overrideProps} />
    </ThemeProvider>
  )
}
export default CustomHeroSection;
