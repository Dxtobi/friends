import React from 'react'
import Ripple from '../Ripple.gif'

// class Loading extends React.Component {
//     render() {
//         return (
//             <div className='loading-screen'>
//                 <img src="../../public/image/Ripple-1s-200px.gif" alt=""></img>
//             </div>
//         )
//     }
// }
function loading(){
    return (
        <div className='loading-screen'>
            <img src={Ripple} alt=""></img>
        </div>
    )
}
export default loading