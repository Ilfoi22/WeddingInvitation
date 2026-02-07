import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StorySection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const StoryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ImagePlaceholder = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '400px',
  borderRadius: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundImage: 'url(/our_photos/p2.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
}));

const OurStory = () => {
  return (
    <StorySection>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          color="primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Наша Історія
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <ImagePlaceholder />
          </Grid>

          <Grid item xs={12} md={6}>
            <StoryCard elevation={0}>
              <Typography variant="h4" color="primary" gutterBottom>
                Як ми зустрілись
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Наша історія почалася несподівано і дуже романтично. Те, що здавалося 
                випадковою зустріччю, перетворилося на щось значно більше - на любов, 
                яка змінила наше життя назавжди.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                З кожним днем ми дізнавалися один про одного все більше, і розуміли, 
                що хочемо провести разом все наше життя. Сьогодні ми готові розпочати 
                нову главу нашої історії - як чоловік і дружина.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary', fontStyle: 'italic', mt: 2 }}>
                "Любов - це не просто почуття, це рішення бути поруч кожен день"
              </Typography>
            </StoryCard>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <StoryCard elevation={0}>
              <Typography variant="h4" color="primary" gutterBottom>
                Пропозиція
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Момент, коли Андрій став на коліно, був найбільш зворушливим у нашому 
                житті. Під зоряним небом, в оточенні романтичної атмосфери, він запитав 
                найважливіше питання у своєму житті.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Звичайно, Юля сказала "Так!" без вагань. Цей момент став початком 
                нашого шляху до весілля, і ми не можемо дочекатися, щоб поділитися 
                нашою радістю з найближчими людьми.
              </Typography>
            </StoryCard>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <ImagePlaceholder sx={{ backgroundImage: 'url(/our_photos/p3.jpg)' }} />
          </Grid>
        </Grid>
      </Container>
    </StorySection>
  );
};

export default OurStory;
