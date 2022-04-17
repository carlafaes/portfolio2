import React from 'react';

const Image = ({src,fallback,alt})=>{
    return(
        <picture>
            <source srcSet={src}  />
            
        </picture>
    )
}
export default Image