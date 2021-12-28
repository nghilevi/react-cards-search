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
                            .filter((item) => lowerString(item.name).indexOf(lowerString(filterStr)) > -1)
                            .map((item, key: number) =>
                                //Card
                                <div data-testid={key} key={key} style={cardStyle}>
                                    <div className="card-front">
                                        {item.name as string}
                                    </div>
                                    <div className="card-back">
                                        {item.name as string} ({item.cat}) <br/>
                                        {item.technologies} <br/>
                                        {item.description} <br/>
                                        {
                                            (item.links as any[])
                                                .map(
                                                    (link: string[]) => {
                                                        const title = link[0]
                                                        const href = link[1]
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
