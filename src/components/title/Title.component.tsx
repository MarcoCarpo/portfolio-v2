import { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title: FC<Props> = ({ children }) => {
    return (
        <div className="text-4xl font-bold flex justify-center">
            &lt; {children} /&gt;
        </div>
    )
}

export default Title
