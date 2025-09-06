import styles from "./PhotosGalleryItem.module.css";
import type { Photo } from "../../types/photo";

interface PhotosGalleryItemProps {
  photo: Photo;
  onClick: () => void;
}

export default function PhotosGalleryItem({ photo, onClick }: PhotosGalleryItemProps) {
  const { src, alt, avg_color } = photo;

  return (
    <div
      className={styles.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
      onClick={onClick}
    >
      <img src={src.large} alt={alt} />
    </div>
  );
}
