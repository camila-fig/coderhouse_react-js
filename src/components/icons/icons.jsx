

import './icon.scss'
import trash from '../../assets/trash.png'
import mais from '../../assets/mais.png'
import menos from '../../assets/menos.png' 

export function IconTrash(){

return(
    <>
    <img className='icon-trash' src={trash} alt="" />
    </>
)


}

export function IconMais(){
   return(
    <>
    <img className='icon-trash' src={mais} alt="" />
    </>
   ) 
}

export function IconMenos(){
    return(
     <>
     <img className='icon-trash' src={menos} alt="" />
     </>
    ) 
 }
