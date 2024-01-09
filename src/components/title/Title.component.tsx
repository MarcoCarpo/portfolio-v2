import { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title: FC<Props> = ({ children }) => {
    return (
        <div className="text-4xl font-bold flex justify-center">
            <span className="text-primary">&lt;&nbsp;</span>
            {children}
            <span className="text-primary">&nbsp;/&gt;</span>
        </div>
    )
}

export default Title
