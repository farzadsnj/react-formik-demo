import './App.css';
import EnrollmentForm from './components/EnrollmentForm';
import FormikContainer from './components/FormikContainer';
import LogInForm from './components/LogInForm';
import RegistrationForm from './components/RegistrationForm';
import { theme, ThemeProvider } from '@chakra-ui/react'
// import LoadSavedContinue from './components/LoadSavedContinue';
// import YoutubeFormFormik from './components/YoutubeFormFormik';
// import YoutubeFrom from './components/YoutubeFrom';
// import YoutubeFromNew from './components/YoutubeFromNew';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <YoutubeFrom /> */}
        {/* <YoutubeFromNew /> */}
        {/* <YoutubeFormFormik /> */}
        {/* <LoadSavedContinue /> */}
        {/* <FormikContainer /> */}
        <LogInForm />
        {/* <EnrollmentForm /> */}
        {/* <RegistrationForm /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
