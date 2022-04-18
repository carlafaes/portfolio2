import React from 'react';

const Image = ({src,fallback,alt})=>{
    return(
        <div>
            <img srcSet={src}  />
            
        </div>
    )
}
export default Image