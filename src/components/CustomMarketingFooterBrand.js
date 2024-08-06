import React from 'react';
import { Link } from 'react-router-dom';  
import  MarketingFooterBrand  from '../ui-components/MarketingFooterBrand';  

function CustomMarketingFooterBrand(props) {
    const customOverrides = {
      ...props.overrides,
      MarketingFooterBrand:{
          width: "100vw"
      },
      "logo":{
        src: "/logo.png", // 修改logo图片
        alt: "TradeMate",
      },
      
    };
  
    return <MarketingFooterBrand {...props} overrides={customOverrides} />;
  }
  
  export default CustomMarketingFooterBrand;
