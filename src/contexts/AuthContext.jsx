import { createContext, useContext, useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentUsr } from "../lib/appwrite/api"

export const INIT_USER = {
    id: "",
    email: "",
    usrname: "",
    Avatar: "",
}

export const INIT_STATE = {
    usr: INIT_USER,
    isLoading: false,
    isAuthenticated: false,
    setUsr: () => { },
    setIsAuthenticated: () => { },
    checkUsrAuth: async () => false,
}

// this is the context.
const authContext = createContext(INIT_STATE)


const AuthProvider = ({ children }) => {
    const [usr, setUsr] = useState(INIT_USER)
    const [isLoading, setIsLoading] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    async function checkUsrAuth() {
        // initially its loading
        setIsLoading(true)
        try {

            // this object is retreived from the db so them property | attr names gotta be 
            const currentUsr = await getCurrentUsr()

            if (currentUsr) {
                setUsr({
                    id: currentUsr.$id,
                    email: currentUsr.email,
                    imgUrl: currentUsr.Avatar,
                    username: currentUsr.usrname,
                })
                setIsAuthenticated(true)

                return true
            }

            return false
        } catch (error) {
            console.log(error)
            return false
        } finally {
            // at the end its not loading anymore.

            setIsLoading(false)
        }
    }

    // whenever we reload the page [any page on this app] we gotta check the usr's auth status and navigate to the signin page if usr isnt signed in.
    useEffect(() => {

        if (localStorage.getItem("cookieFallback") === "[]" || localStorage.getItem("cookieFallback") === null) {
            navigate("./signin")
        }

        checkUsrAuth()
    }, [])

    const authStore = {
        usr,
        isLoading,
        setUsr,
        isAuthenticated,
        setIsAuthenticated,
        checkUsrAuth,
    }


    return (
        <authContext.Provider value={authStore}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider

export const useUsrContext = () => useContext(authContext)