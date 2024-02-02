
export const ImageCard = ({  onCardUrlSmall, onCardAlt}) => { 
    return(
            <div>
                <img src={onCardUrlSmall} alt={onCardAlt}></img>
            </div>
        )
}
