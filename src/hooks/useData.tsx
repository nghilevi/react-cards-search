import { useEffect, useState } from "react"
import { Projects } from "./mock"
import { Status } from "../utils/constants"
import { Card } from "../utils/model"

export const useData = () => {

    const [cards, setCards] = useState<Card[]>([])
    const [loadingStatus, setLoadingStatus] = useState(Status.Default)

    useEffect(() => {
        setLoadingStatus(Status.Loading)
        
        setCards(Projects)
        setLoadingStatus(Status.Success)


    }, [])

    return { cards, loadingStatus }
}