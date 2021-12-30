
import { Card } from '../../utils/model'

interface CardProps {
    card: Card
}

const cardStyle = {
    border: '1px solid blue',
    width: '30%',
    height: '150px',
    margin: '10px 0'
};

export default function CardView({ card }: CardProps) {

    const renderCard = () => {

        return <div style={cardStyle}>
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
    }

    return (
        <div className="cards-search">
            {renderCard()}
        </div>
    );
}