import './footer.scss'
import America from '../../assets/american-express.png'
import Boleto from '../../assets/boleto.png'
import Elo from '../../assets/elo.png'
import Hipercard from '../../assets/hipercard.png'
import Mastercard from '../../assets/mastercard.png'
import Pix from '../../assets/pix.png'
import Visa from '../../assets/visa.png'

export function Footer() {
    return (
        <div className="footer-container">
            <div className="contact">
                <p className='footer-title'>Atendimento</p>
                <p>Suporte de segunda à sexta das 9 h às 18 h.</p>
                <p>Telefone: (54) 7750-2022</p>
                <p>E-mail: adega-online@wine.com.br</p>
            </div>
            <div className="payment">
                <p className='footer-title'>Formas de Pagamento</p>
                <div className="image-logos">
                <img className='payment-logo' src={Visa} alt="Visa" />
                <img className='payment-logo' src={Mastercard} alt="Mastercard" />
                <img className='payment-logo' src={Hipercard} alt="Hipercard" />
                <img className='payment-logo' src={Elo} alt="Elo" />
                <img className='payment-logo' src={America} alt="America Express" />
                <img className='payment-logo' src={Pix} alt="Pix" />
                <img className='payment-logo' src={Boleto} alt="Boleto bancário" />
                </div>
            </div>
            <div className="homework">
                <p className='footer-title'>Projeto Coder House</p>
                <p>Esta página não é real. </p>
                <p>É referente ao projeto final realizado para o curso de React JS 2024.</p>
            </div>
        </div>
    )
}