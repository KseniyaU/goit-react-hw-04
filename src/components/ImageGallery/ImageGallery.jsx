import { ImageCard } from "../ImageCard/ImageCard.jsx";
import css from "../ImageGallery/ImageGallery.module.css";

export const ImageGallery = ({ onElements }) => {
  return (
    onElements.length > 0 && (
      <ul className={css.listImage}>
        {onElements.map((element) => {
          const urlSmall = element.urls.small;
          const urlBig = element.urls.regular;
          const alt = element.alt_description;
          // console.log(element.urls.small);
          return (
            <li key={element.id} className={css.containerImg}>
              <ImageCard
                onCardUrlSmall={urlSmall}
                onCardAlt={alt}
                onCardUrlBig={urlBig}
              />
            </li>
          );
        })}
      </ul>
    )
  );
};