import React from 'react'

import "./gallery.css"


//put any name for image eg"pica"
import pica from '../../assets/z1.jpg'
import mica from '../../assets/z2.jpg'
import bica from '../../assets/z3.jpg'
import lica from '../../assets/z4.jpg'



const Gallery = () => {
    return (

        <div>
            

            <main>
                <section>Autolender/Gallery </section>

                <img src={pica} alt='pica'></img>
                <img src={mica} alt='mica'></img>
                <img src={bica} alt='bica'></img>
                <img src={lica} alt='lica'></img>
                

                <img src={pica} alt='pica'></img>
                <img src={mica} alt='mica'></img>
                <img src={bica} alt='bica'></img>
                <img src={lica} alt='lica'></img>
                

                <img src={pica} alt='pica'></img>
                <img src={mica} alt='mica'></img>
                <img src={bica} alt='bica'></img>
                <img src={lica} alt='lica'></img>
                <img src={mica} alt='mica'></img>
                <img src="gffd" alt='not found'></img>
            
            </main>



        </div>







    )
}

export default Gallery