import { SignIn } from '../../components/sign-in/sign-in'
import { SignUp } from '../../components/sign-up/sign-up'
import { Footer } from "../../components/footer/footer"
import garrafa from '../../assets/red-wine-bottle-grapes.jpg'
import './auth.scss'

export function Auth() {
  return (
    <div>
    <div className="container-auth">
      <img className='auth-image' src={garrafa} alt="" />
      <SignIn />
      <SignUp />      
    </div>    
    <Footer />
    </div>
  )
}