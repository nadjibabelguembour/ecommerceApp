import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Navbar from "../../components/navbar/Navbar";
import Achats from './shoppingCart/Achats';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
  


//................
import { useNavigate} from 'react-router-dom';
//...............

function Copyright() {
  const cartCtx = useContext(CartContext);
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['عنوان الشحن', 'تفاصيل الدفع', 'مراجعة المشتريات'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme({
  direction: 'rtl',
});

export default function Checkout() {

  //.......once th payment is done go back to home page
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };
  //.....................................
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
      
      </AppBar>
    
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
       
          <Navbar />
          <div className='wrapper'>
            <Achats />  
          </div>

          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                شكرا لك على طلبك.
              </Typography>
              <Typography variant="subtitle1">
                لقد تم إرسال إيميل برقم طلبيتك، و سنراسلك مجددا فور انطلاق عملية الشحن
                
              </Typography>
              {/* {cartCtx.clearCartFnc} */}
              {/* <div onClick={() => cartCtx.clearCart()}> */}
                  <button style={  {background:"blue",
                                    color:"white",
                                    border:"none",
                                    padding: "5px",
                                    borderRadius:"5px",
                                    alignItems:"center",
                                    justifyItems:"center",
                                    marginRight:"auto",
                                    marginLeft:"auto",
                                    display:"flex",
                                    cursor: "pointer"}} 
                                    // onClick={()=>{ navigateHome; () => clearCart }}
                                    onClick={navigateHome}
        >
                      العودة إلى المتجر
                  </button>
              {/* </div> */}

           
              
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    العودة
                  </Button>
                )}
                  
                      <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 3, ml: 1 }}>
                          {activeStep === steps.length - 1 ? 'تأكيد الطلب' : 'التالي'}

                      </Button>
                 
              
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}