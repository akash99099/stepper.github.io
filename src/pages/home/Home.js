import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//CSS
import "../../App.css";

//MUI
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployeeData } from "../../redux/action/action";

const Home = () => {

  //state
  const [search, setSearch] = useState("");

  const employedata = useSelector((state)=>state.employeeData)

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const onClickAddBtn = () => {
    navigate("/employeeForm");
  };

  const onChangeSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  const tableHeadingData = [
    { heading: "Name" },
    { heading: "Designation" },
    { heading: "Department" },
    { heading: "Active" },
    { heading: "View" },
  ];

  const filterData = employedata.filter((item) => {
    console.log()
    return (
      item.personal_details.fname.toLocaleLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      item.current_status.designation.toLocaleLowerCase().indexOf(search.toLowerCase()) !==
        -1 ||
      item.current_status.deparment.toLocaleLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  const onClickDeleteBtn = (id) => {
    dispatch(deleteEmployeeData(id))
  }

  const onClickViewEmployeeData = (id) => {
      navigate("/viewemployeedata",{state:{id:id}})
  }

  return (
    <Card sx={{marginTop:5}}>
      <Typography variant="h4" className="text-header">STEPPER</Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          margin: 2,
          alignItems: "center",
        }}
      >
        <TextField
          value={search}
          onChange={onChangeSearchHandler}
          label="Search"
          variant="outlined"
        />
        <Box>
          <Button
            variant="contained"
            color="app_primary"
            onClick={onClickAddBtn}
            size="large"
          >
            ADD
          </Button>
        </Box>
      </Stack>
      <Box mt={8}>
        <TableContainer component={Paper}>
          <Table size="larg" aria-label="a dense table">
            <TableHead sx={{ backgroundColor: "lightgray" }}>
              <TableRow>
                {tableHeadingData.map((item,index) => {
                  return (
                    <TableCell
                      style={{ fontSize: 14, fontWeight: "bold" }}
                      align="left"
                      key={index}
                    >
                      {item.heading}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData.map((item, index) => {
              console.log("item",item)
                return (
                  <>
                    <TableRow key={index}>
                      <TableCell  align="left">{item.personal_details.fname}</TableCell>
                      <TableCell align="left">{item.current_status.designation}</TableCell>
                      <TableCell align="left">{item.current_status.deparment}</TableCell>
                      <TableCell align="left">
                        <Button onClick={()=>onClickDeleteBtn(item.id)} color="danger" size="small" variant="contained">
                          DELETE
                        </Button>
                      </TableCell>
                      <TableCell align="left">
                        <Button onClick={()=>onClickViewEmployeeData(item.id)} color="app_primary" size="small" variant="contained">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  </>
                );
            })}
            </TableBody>
          </Table>
        </TableContainer>
            {employedata  .length ===  0 ? <Typography variant="h6" textAlign="center" m={3}>No Data Found...</Typography>:""}
      </Box>
    </Card>
  );
};

export default Home;
