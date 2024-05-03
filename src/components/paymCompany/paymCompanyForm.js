import { Grid,Card,
    TextField,
    Button,
    Typography,
    Box,
    CardContent
  } from '@mui/material';

  import {inputpaymCompanyForm} from './paymCompany';
import { useState } from 'react';

  

  export default function CompanyForm() {


    const margin={margin:"0 5px"}
    const [paymCompany,setPaymCompany]=useState({
      
      companyName: "string",
      addressLine1: "string",
      addressLine2: "string",
      city: "string",
      zipCode: "string",
      country: "string",
      state: "string",
      phoneNo: "string",
      faxNo: "string",
      emailId: "string",
      alternateEmailId: "string",
      pfno: "string",
      esino: "string",
      startDate: "2024-05-02T11:19:52.770Z",
      endDate: "2024-05-02T11:19:52.770Z",
      hrmmCourses: []
    }
  )
    return (
      <div className="App">
        <Grid style ={{ padding: "80px 5px0 5px" }}>
        <Card style ={{ maxWidth: 600, margin: "0 auto" ,font:'initial'}}>
        <CardContent>
        <Typography sx={{ mt: 3 }} align='center' color='primary' variant="h5">Paym Company</Typography>
        <form
        
        onSubmit={(e)=>{


setPaymCompany({


  companyName: e.currentTarget.elements.ComPanyName.value,
  addressLine1: e.currentTarget.elements.Address_Line1.value,
  addressLine2:e.currentTarget.elements.Address_Line2.value,
  city: e.currentTarget.elements.City.value,
  zipCode: e.currentTarget.elements.ZipCode,
  country: e.currentTarget.elements.Country,
  state: e.currentTarget.elements.State,
  phoneNo:e.currentTarget.elements.Phone_No,
  faxNo:e.currentTarget.elements.Fax_No ,
  emailId:e.currentTarget.elements.Email_Id,
  alternateEmailId: e.currentTarget.elements.AlternateEmail_Id,
  pfno: e.currentTarget.elements.PFno,
  esino:e.currentTarget.elements.Esino ,
  startDate:e.currentTarget.elements.start_date ,
  endDate: e.currentTarget.elements.end_date,
  hrmmCourses: []

})
console.log(paymCompany)

        }}
        
        
        >
          <Grid container spacing={2} columns={12} >
            {
            inputpaymCompanyForm.map(input=> <Grid xs={input.xs} sm={input.sm} item>
                              <TextField {...input}  InputLabelProps={{shrink:true}}
                              
                              
                              />
              </Grid>)
            }
             <Grid container spacing={1}>
             <Grid item xs={12} align="right">
              <Button type="reset" variant="contained" color="primary"style={{paddingRight:'3'}} >Reset</Button>
            <Button  type="submit" variant="contained" color="primary">Submit</Button>
              </Grid>
            </Grid>
           
          </Grid>
        </form>
        </CardContent>
        </Card>
        </Grid>
      </div>
    );
  }
  
 