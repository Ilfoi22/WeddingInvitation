import { useState } from 'react';
import { Box, Container, Typography, ImageList, ImageListItem, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';

const GallerySection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: theme.spacing(1),
  '& img': {
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
}));

// Placeholder images - замінити на реальні фото пізніше
const photos = [
  {
    img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&auto=format&fit=crop',
    title: 'Photo 1',
  },
  {
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&auto=format&fit=crop',
    title: 'Photo 2',
  },
  {
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&auto=format&fit=crop',
    title: 'Photo 3',
  },
  {
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop',
    title: 'Photo 4',
  },
  {
    img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&auto=format&fit=crop',
    title: 'Photo 5',
  },
  {
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&auto=format&fit=crop',
    title: 'Photo 6',
  },
  {
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&auto=format&fit=crop',
    title: 'Photo 7',
  },
  {
    img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&auto=format&fit=crop',
    title: 'Photo 8',
  },
];

const PhotoGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClickOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <GallerySection>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          color="primary"
          gutterBottom
          sx={{ mb: 2 }}
        >
          Наша Галерея
        </Typography>
        
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, fontWeight: 300 }}
        >
          Моменти, які ми цінуємо
        </Typography>

        <ImageList
          sx={{ width: '100%', height: 'auto' }}
          cols={4}
          rowHeight={300}
          gap={16}
          variant="quilted"
        >
          {photos.map((item, index) => (
            <StyledImageListItem
              key={index}
              cols={index === 0 || index === 3 ? 2 : 1}
              rows={index === 0 || index === 3 ? 2 : 1}
              onClick={() => handleClickOpen(item.img)}
            >
              <img
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </StyledImageListItem>
          ))}
        </ImageList>

        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          PaperProps={{
            sx: {
              background: 'transparent',
              boxShadow: 'none',
            },
          }}
        >
          <Box
            component="img"
            src={selectedImage}
            alt="Selected"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: 2,
            }}
            onClick={handleClose}
          />
        </Dialog>
      </Container>
    </GallerySection>
  );
};

export default PhotoGallery;
