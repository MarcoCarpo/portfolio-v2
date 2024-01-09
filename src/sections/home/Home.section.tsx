import Title from '../../components/title/Title.component'
import data from '../../data.json'

const Home = () => {
    return (
        <div className="min-h-screen w-full">
            <Title type="h1">{data.name}</Title>
        </div>
    )
}

export default Home
