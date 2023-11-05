import React from 'react'


//put any name for image eg"pica"
import pica from '../../assets/z1.jpg'
import mica from '../../assets/z2.jpg'
import bica from '../../assets/z3.jpg'
import lica from '../../assets/z4.jpg'

const Gallery = () => {
    return (
        <div > <h1>Gallery </h1>

            {/* //name of the image is used eg"pica" */}
            <img src={pica} width={300} height={200} alt='not found'></img>


            <img src={mica} width={300} height={200} alt='not found'></img>
            <img src={bica} width={300} height={200} alt='not found'></img>
            <img src={lica} width={300} height={200} alt='not found'></img>
            <img src="gffdgdgf" width={300} height={200} alt='not found'></img>

        </div>


    )
}

export default Gallery