// Create a react context for the app layout

import { PropsWithChildren, createContext, useState } from 'react'
import { AppState } from '../common/types'

export interface AppContextType extends AppState {
    setIsNavOpen: (isNavOpen: boolean) => void
}

const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppProvider = ({ children }: PropsWithChildren) => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <AppContext.Provider value={{ isNavOpen, setIsNavOpen }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
