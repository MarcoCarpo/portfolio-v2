import { PropsWithChildren } from 'react'

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="container mx-auto min-h-screen font-sans">
            {children}
        </div>
    )
}

export default PageLayout
