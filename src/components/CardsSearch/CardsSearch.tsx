import { useState } from 'react'
import { CardsSearchText } from '../../utils/constants'
import { Card } from '../../utils/model'
import { lowerString } from '../../utils/utils'
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
        const cardStyle = {
            border: '1px solid blue',
            width: '30%',
            height: '150px',
            margin: '10px 0'
        };

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
                                //Card
                                <div data-testid={key} key={key} style={cardStyle}>
                                    <div className="card-front">
                                        {card.name as string}
                                    </div>
                                    <div className="card-back">
                                        {card.name as string} ({card.cat}) <br/>
                                        {card.technologies} <br/>
                                        {card.description} <br/>
                                        {
                                            (card.links as {type: string, url: string}[])
                                                .map(
                                                    (link: {type: string, url: string}) => {
                                                        const title = link.type
                                                        const href = link.url
                                                        return (
                                                            <a target='_blank' title={title} href={href}>
                                                                <img className='links' src={'dist/img/links/'+title+'.jpg'} />
                                                            </a>
                                                        )
                                                    }
                                                )
                                        }
                                        
                                    </div>
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
