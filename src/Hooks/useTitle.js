import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title } - sylseba`
    }, [title])
}
export default useTitle