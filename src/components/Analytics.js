import React, { useContext } from "react"
import { FirebaseContext } from "gatsby-plugin-firebase"

const PageView = () => {

    const firebase = useContext(FirebaseContext)

    React.useEffect(() => {

        if (!firebase) {
        return
        }
        
        firebase
        .analytics()
        .logEvent("visited")
    }, [firebase])

    return <div></div>

}

export default PageView