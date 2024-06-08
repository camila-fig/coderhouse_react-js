import { CategorisPreview } from '../../components/categoria-preview/categoria-preview'
import './sale-cellar.scss'

export function SaleCellar(){
    return(
        <div className="container-cellar">
            <p className="cellar-title">Best Sellers</p>
            <p className="cellar-subtitle">Conheça os rótulos mais vendidos</p>
            <div className='categories-preview-cellar'>
                <CategorisPreview />
            </div>
        </div>
    )
}