import { ImageCard} from '../ImageCard/ImageCard.jsx'

export const ImageGallery = ({ onElements }) => {
    console.log(typeof (onElements));
    return (
        onElements.length > 0 &&
                <ul>
                {onElements.map(element => {
                    const urlSmall = element.urls.small 
                    const alt = element.alt_description
                    console.log(element.urls.small);
                    return(
                        <li key={element.id}>
                            <ImageCard onCardUrlSmall={urlSmall} onCardAlt={ alt} />
                        </li>
                    )
                    })}
        </ul>
    )

}