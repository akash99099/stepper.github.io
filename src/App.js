import * as React from "react";
import "./App.css";

import {  ThemeProvider } from '@mui/material/styles';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import EmployeeForm from "./pages/employee/EmployeeForm";
import {THEME} from "./helper/Color"
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}> 
    <Box width="80%" sx={{margin:"auto"}}>
      <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employeeForm" element={<EmployeeForm />} />
          <Route />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </Box>
    </Provider>
  );
}

export default App;
