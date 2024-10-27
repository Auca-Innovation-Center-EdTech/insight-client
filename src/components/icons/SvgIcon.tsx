'use client';

import React, { useEffect, useState } from 'react'

interface ISvgIcon {
     path: string,
     className?:string 
     alt?: ''
}
const SvgIcon: React.FC<ISvgIcon> = ({path, className = '', alt=''}) => {
     const [svgContent, setSvgContent] = useState<string>('')

     useEffect(() => {
          // Fetch the SVG file content
          const fetchSVG = async () => {
               try {
               const response = await fetch(path);
               const svgText = await response.text();
               setSvgContent(svgText);
               } catch (error) {
               console.error('Error loading SVG:', error);
               }
          };
          fetchSVG();
     }, [path]);
     return (
          <span role="img"
          aria-label={alt}
          className={className}
          dangerouslySetInnerHTML={{ __html: svgContent }}></span>
     )
}

export default SvgIcon