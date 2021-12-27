import { useState } from 'react'
import { CardsSearchText } from '../../utils/constants'
import { Card } from '../../utils/model'
import { lowerString } from '../../utils/utils'
import './CardsSearch.scss'

interface CardsSearchProps {
    cards: Card[],
    displayField?: string
}

function CardsSearch({ cards, displayField = 'name'}: CardsSearchProps) {

    const [filterStr, setFilterStr] = useState<string>('')

    const onInput = (e: any) => {
        setFilterStr(e.target.value)
    }

    const renderCardsSearch = () => {

        if (!cards) {
            return <>{CardsSearchText.Empty}</>
        } else {
            return <>
                <input data-testid='input' type="text" onInput={(e) => onInput(e)} />
                
                <div className="cards">
                    {

                        cards
                            .filter((item) => lowerString(item[displayField]).indexOf(lowerString(filterStr)) > -1)
                            .map((item, key: number) =>
                                //Card
                                <div data-testid={key} key={key}>
                                    {item[displayField] as string}
                                </div>
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
