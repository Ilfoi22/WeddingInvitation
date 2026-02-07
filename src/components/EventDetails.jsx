import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChurchIcon from '@mui/icons-material/Church';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const EventSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const EventCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
}));

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '300px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  marginTop: theme.spacing(2),
  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
}));

const EventDetails = () => {
  const handleMapClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <EventSection>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          color="primary"
          gutterBottom
          sx={{ mb: 2 }}
        >
          Деталі Події
        </Typography>
        
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, fontWeight: 300 }}
        >
          Ми будемо раді бачити вас на нашому святі
        </Typography>

        <Grid container spacing={4}>
          {/* Church Event */}
          <Grid item xs={12} md={6}>
            <EventCard>
              <CardContent sx={{ p: 4 }}>
                <IconWrapper>
                  <ChurchIcon sx={{ fontSize: 40, color: 'white' }} />
                </IconWrapper>
                
                <Typography variant="h4" align="center" color="primary" gutterBottom>
                  Церемонія
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1">
                      <strong>Час:</strong> 15:00 (placeholder)
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <LocationOnIcon sx={{ mr: 2, mt: 0.5, color: 'primary.main' }} />
                    <Typography variant="body1">
                      <strong>Місце:</strong> Церква святих Ольги і Володимира
                    </Typography>
                  </Box>

                  <MapContainer>
                    <iframe
                      src="https://maps.google.com/maps?q=Церква+святих+Ольги+і+Володимира+Львів&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </MapContainer>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => handleMapClick('https://maps.app.goo.gl/mtBd94aa7V7ZCFs88')}
                  >
                    Відкрити в Google Maps
                  </Button>
                </Box>
              </CardContent>
            </EventCard>
          </Grid>

          {/* Reception Event */}
          <Grid item xs={12} md={6}>
            <EventCard>
              <CardContent sx={{ p: 4 }}>
                <IconWrapper>
                  <RestaurantIcon sx={{ fontSize: 40, color: 'white' }} />
                </IconWrapper>
                
                <Typography variant="h4" align="center" color="primary" gutterBottom>
                  Банкет
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="body1">
                      <strong>Час:</strong> 18:00 (placeholder)
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <LocationOnIcon sx={{ mr: 2, mt: 0.5, color: 'primary.main' }} />
                    <Box>
                      <Typography variant="body1">
                        <strong>Місце:</strong> Ресторан "Аркан"
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, ml: 0 }}>
                        смт. Брюховичі, вул. Курортна, 8а
                      </Typography>
                    </Box>
                  </Box>

                  <MapContainer>
                    <iframe
                      src="https://maps.google.com/maps?q=Ресторан+Аркан+Брюховичі+Курортна+8а&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </MapContainer>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => handleMapClick('https://maps.app.goo.gl/9T9q6R5uu9izMbxa6')}
                  >
                    Відкрити в Google Maps
                  </Button>
                </Box>
              </CardContent>
            </EventCard>
          </Grid>
        </Grid>

        {/* Additional Info */}
        <Box sx={{ mt: 6, textAlign: 'center', p: 4, background: 'rgba(139, 115, 85, 0.1)', borderRadius: 2 }}>
          <Typography variant="h5" color="primary" gutterBottom>
            Важлива інформація
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Просимо прибути за 15-20 хвилин до початку церемонії
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Дрес-код: святковий/коктейльний
          </Typography>
        </Box>
      </Container>
    </EventSection>
  );
};

export default EventDetails;
