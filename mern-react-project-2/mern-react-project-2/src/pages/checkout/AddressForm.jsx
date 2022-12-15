import * as React from 'react';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './addressForm.css';
// import { textAlign } from '@mui/system';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
});

const direction = document.documentElement.dir || 'rtl';
const left = direction =='ltr' ? 'left' : 'right';
const right = direction =='ltr' ? 'right' : 'left';
// const AddressForm = {
//   direction: direction,
//   left: left,
//   right: right,
// }

function AddressForm() {
  return (
    <React.Fragment>
    <div className='AddressFrom'>
      <Grid container spacing={3} dir="rtl">
        <Grid item xs={12} sm={6} align={"right"}>
          <TextField style={{ textAlign: "right", color: "red"}}
            required
            id="firstName"
            name="firstName"
            label="الاسم"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="اللقب"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="العنوان الأول"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="العنوان الثاني"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="المدينة"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="الولاية/المقاطعة/المنطقة"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / الرمز البريدي"
            fullWidth
            autoComplete="الرمز البريدي"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="الدولة"
            fullWidth
            autoComplete="دولة الشحن"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="استخدم هذا العنوان للدفع"
          />
        </Grid>
      </Grid>
      </div>
    </React.Fragment>
  );
}
export default AddressForm;