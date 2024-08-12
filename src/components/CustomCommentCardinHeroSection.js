import React from 'react';
import { Link } from 'react-router-dom';  
import HeroSection from '../ui-components/HeroSection';
import { Icon, Image, View, useTheme } from "@aws-amplify/ui-react";
import CommentCard from '../ui-components/CommentCard';

function CustomCommentCardinHeroSection(props) {
    
    const overrideProps={
       
    };
    
 return (
    <>
    <CommentCard overrides={overrideProps} />
  </>
 )
    }
export default CustomCommentCardinHeroSection;
