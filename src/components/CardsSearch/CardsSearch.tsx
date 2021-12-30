import { useState } from 'react'
import { CardsSearchText } from '../../utils/constants'
import { Card } from '../../utils/model'
import { lowerString } from '../../utils/utils'
import CardView from '../CardView/CardView'
import './CardsSearch.scss'

interface CardsSearchProps {
    cards: Card[]
}

function CardsSearch({ cards}: CardsSearchProps) {

    const [filterStr, setFilterStr] = useState<string>('')

    const onInput = (e: any) => {
        setFilterStr(e.target.value)
    }

    const stringFound = (str: string, searchStr: string) => lowerString(str).indexOf(lowerString(searchStr)) > -1

    const renderCardsSearch = () => {

        if (!cards) {
            return <>{CardsSearchText.Empty}</>
        } else {
            return <>
                <input data-testid='input' type="text" onInput={(e) => onInput(e)} />
                
                <div className="cards">
                    {

                        cards
                            .filter(
                                (card: Card) => {
                                    const nameFound = stringFound(card.name, filterStr)
                                    const catFound = stringFound(card.technologies, filterStr)
                                    return nameFound || catFound
                                }
                            )
                            .map((card: Card, key: number) =>
                                <CardView data-testid={key} key={key} card={card} />
                            )

                    }
                </div>
            </>
        }
    }

    return (
        <div className="cards-search">
            {renderCardsSearch()}
        </div>
    );
}

export default CardsSearch;
