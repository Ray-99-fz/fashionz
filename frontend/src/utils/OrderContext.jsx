import { createContext, useContext, useState } from "react"

const orderContext = createContext(null)


export const OrderProvider = ({children}) => {
    const [order, setOrder] = useState(null)

    return (
        <orderContext.Provider
            value={{order, setOrder}}
        >
            {children}
        </orderContext.Provider>
    )
}

export const useOrder = () => {
    return useContext(orderContext)
}

