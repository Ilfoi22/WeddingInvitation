import { useState, useEffect } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/our_photos/p1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.3,
    zIndex: 0,
  },
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  color: 'white',
});

const CountdownBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
  },
}));

const CountdownItem = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2, 3),
  minWidth: '80px',
  boxShadow: theme.shadows[3],
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 2),
    minWidth: '60px',
  },
}));

const HeroSection = () => {
  const weddingDate = new Date('2026-04-26T15:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <HeroContainer>
      <Container maxWidth="md">
        <ContentWrapper>
          <Typography
            variant="h5"
            sx={{
              letterSpacing: '0.3em',
              fontWeight: 300,
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            Ми одружуємося
          </Typography>
          
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 3 }}
          >
            <Typography variant="h1" component="h1">
              Андрій
            </Typography>
            <FavoriteIcon sx={{ fontSize: { xs: 40, md: 60 }, color: '#fff' }} />
            <Typography variant="h1" component="h1">
              Юля
            </Typography>
          </Stack>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 300,
              letterSpacing: '0.1em',
              mb: 1,
            }}
          >
            26 квітня 2026
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              letterSpacing: '0.05em',
              mb: 4,
            }}
          >
            Запрошуємо вас розділити з нами цей особливий день
          </Typography>

          <CountdownBox>
            <CountdownItem>
              <Typography variant="h4" color="primary" fontWeight="bold">
                {timeLeft.days}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Днів
              </Typography>
            </CountdownItem>
            <CountdownItem>
              <Typography variant="h4" color="primary" fontWeight="bold">
                {timeLeft.hours}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Годин
              </Typography>
            </CountdownItem>
            <CountdownItem>
              <Typography variant="h4" color="primary" fontWeight="bold">
                {timeLeft.minutes}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Хвилин
              </Typography>
            </CountdownItem>
            <CountdownItem>
              <Typography variant="h4" color="primary" fontWeight="bold">
                {timeLeft.seconds}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Секунд
              </Typography>
            </CountdownItem>
          </CountdownBox>
        </ContentWrapper>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
