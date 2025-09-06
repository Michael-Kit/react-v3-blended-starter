import Grid from "../Grid/Grid";
import GridItem from "../Grid/Grid";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import type { Photo } from "../../types/photo";

interface PhotosGalleryProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

export default function PhotosGallery({ photos, onPhotoClick }: PhotosGalleryProps) {
  return (
    <Grid>
      {photos.map((photo) => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem photo={photo} onClick={() => onPhotoClick(photo)} />
        </GridItem>
      ))}
    </Grid>
  );
}
