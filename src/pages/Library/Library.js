import React from 'react'
import './Library.css'
import {BiEdit} from 'react-icons/bi'
const Library = () =>{

        return (
            <div className="frame_class" >
            <div className="Library_Navbar">
            <div className='container'>
                <h1>Library</h1>
                <div className="libraru_buttons" >
                    <h3><u>Library</u> </h3>
                    <h4 style={{color:'#640000',textAlign:'right'}} ><BiEdit/>Edit</h4>
                    </div>
                </div>

            </div>
            <div className="Library_main">
                
            </div>
            <h3 className='library-text'>You have not purchased any Stories yet.</h3>
            </div>
        )

}

export default Library