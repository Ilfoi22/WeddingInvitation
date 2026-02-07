import { Box, Container, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: 'white',
  padding: theme.spacing(8, 0, 4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0, 3),
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <FavoriteIcon sx={{ fontSize: 48, opacity: 0.8 }} />
          
          <Typography variant="h4" align="center" fontWeight={300}>
            Андрій & Юля
          </Typography>

          <Typography variant="body1" align="center" sx={{ opacity: 0.9 }}>
            26 квітня 2026
          </Typography>

          <Typography variant="body2" align="center" sx={{ opacity: 0.8, maxWidth: '600px' }}>
            Дякуємо, що ви частина нашого особливого дня. Ваша присутність робить це свято ще більш значущим для нас.
          </Typography>

          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)', width: '100%' }}>
            <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
              З любов'ю створено для нашого весілля © 2026
            </Typography>
          </Box>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
