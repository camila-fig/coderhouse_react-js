import './icon.scss'
import trash from '../../assets/bin.png'
import mais from '../../assets/mais.png'
import menos from '../../assets/menos.png'

export function IconTrash() {
    return (
        <img className='icon-trash' src={trash} alt="Deletar produto" />
    )
}

export function IconMais() {
    return (
        <img className='icon-mais-menos' src={mais} alt="Acrecentar quantidade" />
    )
}

export function IconMenos() {
    return (
        <img className='icon-mais-menos' src={menos} alt="Reduzir quantidade" />
    )
}
