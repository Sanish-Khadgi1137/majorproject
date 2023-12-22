import React from 'react'

import "./gallery.css"


//put any name for image eg"pica"
import pica from '../../assets/z1.jpg'
import mica from '../../assets/z2.jpg'
import bica from '../../assets/z3.jpg'
import lica from '../../assets/z4.jpg'

const Gallery = () => {
    return (

        <div className='gimg'>            <h1>Gallery </h1>

            <img src={pica} alt='not found'></img><img
                src={mica} alt='not found'></img><img
                src={bica} alt='not found'></img><img
                src={lica} alt='not found'></img><img
                    src="gffd" alt='not found'></img>


        </div>







    )
}

export default Gallery