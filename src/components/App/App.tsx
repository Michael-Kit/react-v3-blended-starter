import { useState } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";

import { fetchPhotosByQuery } from "../../services/photos";
import type { Photo } from "../../types/photo";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const results = await fetchPhotosByQuery(query);
      setPhotos(results);
    } catch (error) {
      console.error("Fetch error:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />

          {isLoading && <Loader />}
          {isError && (
  <Text textAlign="center" marginBottom="20">
    Something went wrong. Please try again.
  </Text>
)}

          {photos.length > 0 && (
            <PhotosGallery photos={photos} onPhotoClick={openModal} />
          )}
        </Container>
      </Section>

      {selectedPhoto && (
        <Modal onClose={closeModal}>
          <img src={selectedPhoto.src.original} alt={selectedPhoto.alt} />
        </Modal>
      )}
    </>
  );
}
