import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";



const ViewEmployeData = () => {
  const location = useLocation();

  const [edata, setedata] = useState([]);

  const data = useSelector((state) => state.employeeData);

  useEffect(() => {
    const filterData = data.filter((item) => {
      if (item.id === location.state.id) {
        return item;
      }
    });
    setedata(filterData);
  }, []);

  return (
    <div>
      {edata.map((item) => {
        return (
          <div key={item.id}>
            <Typography textAlign="center" variant="h4" sx={{textDecorationLine:"underline",marginTop:3 }}>Employee Data</Typography>

            <Card sx={{ padding: 2 }}>
              {item.personal_details && (
                <Typography variant="h5" color="#6D5ACF" marginBottom={2}>Personal Details</Typography>
              )}
              <Typography>FirstName : {item.personal_details.fname}</Typography>
              <Typography>LastName : {item.personal_details.lname}</Typography>
              <Typography>DOB : {item.personal_details.dateofbirth}</Typography>
              <Typography>Email : {item.personal_details.email}</Typography>
              <Typography>PhoneNo : {item.personal_details.phoneno}</Typography>
            </Card>
            <Card sx={{ padding: 2,marginTop:5 }}>
              {item.bank_details && (
                <Typography variant="h5" color="#6D5ACF" marginBottom={2}>Bank Details</Typography>
              )}
              <Typography>Ac.No : {item.bank_details.accountno}</Typography>
              <Typography>IFSC : {item.bank_details.ifscCode}</Typography>
              <Typography>PancardNo : {item.bank_details.pancardno}</Typography>
              <Typography>AdharCardNo : {item.bank_details.adharcardno}</Typography>
            </Card>
            <Card sx={{ padding: 2,marginTop:5 }}>
              {item.professional_Details && (
                <Typography variant="h5" color="#6D5ACF" marginBottom={2}>Professional Details</Typography>
              )}
              {/* <a href={item.}/> */}
              <Typography>ExperianceOfYear : {item.professional_Details.expyear}</Typography>
              <Typography>ExperianceOfMonth : {item.professional_Details.expmonth}</Typography>
              <Typography>Skills : {item.professional_Details.expskill}</Typography>
            </Card>
            <Card sx={{ padding: 2,marginTop:5 }}>
              {item.current_status && (
                <Typography variant="h5" color="#6D5ACF" marginBottom={2}>Current Status</Typography>
              )}
              <Typography>Comapny : {item.current_status.company}</Typography>
              <Typography>CTC : {item.current_status.ctc}</Typography>
              <Typography>Department : {item.current_status.deparment}</Typography>
              <Typography>Designation : {item.current_status.designation}</Typography>
              <Typography>WorkingFrom : {item.current_status.workingFrom}</Typography>
            </Card>
            {item.experience_details.ecompany.length > 0 ? <Card sx={{ padding: 2,marginTop:5 }}>
              {item.experience_details && (
                <Typography variant="h5" color="#6D5ACF" marginBottom={2}> Experiance Details</Typography>
              )}
                <div>
                    {item.experience_details.ecompany.map((item)=>{
                        return(
                            <>
                                <Typography>Company : {item.company}</Typography>
                                <Typography>CTC : {item.ctc}</Typography>
                                <Typography>Department : {item.deparment}</Typography>
                                <Typography>Designation : {item.designation}</Typography>
                                <Typography>ExperianceOfYear : {item.expyear}</Typography>
                                <Typography>ExperianceOfYear : {item.expmonth}</Typography>    
                            </>
                        )
                    })}
                </div>
            </Card>:null}
            {item.educational_details.education.length > 0 ? <Card sx={{ padding: 2,marginTop:5,marginBottom:10 }}>
              {item.educational_details && (
                <Typography variant="h5" color="#6D5ACF" marginBottom={2}>Education Details</Typography>
              )}
                <div>
                    {item.educational_details.education.map((item)=>{
                        return(
                            <>
                                <Typography>Course : {item.course}</Typography>
                                <Typography>Grade : {item.grade}</Typography>
                                <Typography>PassingYear : {item.passedyear}</Typography>
                                <Typography>University : {item.university}</Typography>
                            </>
                        )
                    })}
                </div>
            </Card>:null}
          </div>
        );
      })}
    </div>
  );
};

export default ViewEmployeData;
