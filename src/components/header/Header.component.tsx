import { useAppContext } from '../../context/custom-hooks'
import Hamburger from 'hamburger-react'
import './Header.component.scss'

const Header = () => {
    const { isNavOpen, setIsNavOpen } = useAppContext()
    return (
        <header className="flex justify-end w-full p-5">
            <div className={`nav ${isNavOpen ? 'nav--active' : ''} p-2`}>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <Hamburger
                toggled={isNavOpen}
                toggle={() => setIsNavOpen(!isNavOpen)}
                size={40}
                color={isNavOpen ? 'var(--white)' : 'var(--black)'}
            />
        </header>
    )
}

export default Header
