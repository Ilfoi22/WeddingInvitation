import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import HeroSection from './components/HeroSection';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroSection />
      <OurStory />
      <EventDetails />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
