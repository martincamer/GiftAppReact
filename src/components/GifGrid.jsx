import { GifItem } from "./GifItem";
import { useFetchGifts } from "./hooks/useFetchGifts";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);

  return (
    <>
      <div className="category-title">
        <h3>{category}</h3>
      </div>
      {}
      <div className="category-title">{isLoading && <h3>Cargando...</h3>}</div>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
