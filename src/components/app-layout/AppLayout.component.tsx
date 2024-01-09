import { PropsWithChildren } from 'react'
import { Header } from '..'

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container mx-auto min-h-screen font-sans">
                {children}
            </div>
        </>
    )
}

export default PageLayout
