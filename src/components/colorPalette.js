import {useState} from 'react';

export default function ColorPalette() {
    
    const[color , setColor] = useState(''); 

  
    return(
        <>
        <div className='color'>
            <h1 className='Heading'>React Color Picker </h1>
            <input type='color' onChange={(e)=> setColor(e.target.value)} style={{width:"500px" , height:"50px"}}></input>
             <h3 className='color_text'>{color}</h3>            
        </div>
        </>
    )
}