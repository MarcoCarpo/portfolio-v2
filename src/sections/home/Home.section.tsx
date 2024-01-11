import { IMAGES } from '../../assets/images/Images'
import Title from '../../components/title/Title.component'
import data from '../../data.json'
import './Home.section.scss'
import SVG from '../../assets/svgs/bottom_home.svg'

const Home = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <Title type="h1">{data.name}</Title>
            <p className="text-2xl my-1">{data.role}</p>
            <span className="text-xl font-black">
                <span>React</span> / <span>Angular</span>
            </span>

            <div className="w-full flex flex-col items-center relative justify-center gap-10 bg-primary mt-52">
                <img
                    className="w-80 h-80 mt-[-160px] rounded-full object-cover border-primary border-10 shadow-md"
                    src={IMAGES.image1}
                    alt=""
                />

                <div className="text-center text-white text-xl font-sans px-5">
                    {data.home.description}
                </div>

                <button className="bg-white px-6 py-4 rounded-2xl text-primary font-sans text-xl font-black shadow-xl mb-10 hover:bg-primary hover:text-white">
                    {data.home.download}
                </button>
                <img
                    src={SVG}
                    className="-z-10 absolute w-full top-[95%] drop-shadow-md"
                />
            </div>
        </div>
    )
}

export default Home
