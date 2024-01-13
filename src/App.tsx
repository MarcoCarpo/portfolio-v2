import { AppLayout } from './components'
import { AboutMe, Home } from './sections'

const App = () => {
    return (
        <AppLayout>
            <Home />
            <AboutMe />
        </AppLayout>
    )
}

export default App
