import { useAppContext } from '../../../context/custom-hooks'
import './Hamburgher.component.scss'

const Hamburgher = () => {
    const { isNavOpen, setIsNavOpen } = useAppContext()

    return (
        <div
            className={`hamburgher ${isNavOpen ? 'hamburgher--active' : ''}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburgher
