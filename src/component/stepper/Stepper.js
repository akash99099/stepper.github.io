import React, { useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//styling
import "../../App.css";
import { IconButton, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { REGEX } from "../../helper/regex";
import DatePicker from "../DatePicker/DatePicker";
import DropDownSkill from "../dropdown/DropDownSkill";

import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import moment from "moment";
import AddBoxIcon from "@mui/icons-material/AddBox";

import "../../App.css";
import { useDispatch } from "react-redux";
import { addEmployeeData } from "../../redux/action/action";

const steps = [
  "Personal Details",
  "Bank Details",
  "Professional Details",
  "Current Status",
  "Experience Details",
  "Educational Details",
];



const StepperSection = () => {

  // ..######..########....###....########.########
  // .##....##....##......##.##......##....##......
  // .##..........##.....##...##.....##....##......
  // ..######.....##....##.....##....##....######..
  // .......##....##....#########....##....##......
  // .##....##....##....##.....##....##....##......
  // ..######.....##....##.....##....##....########

  //active step
  const [activeStep, setActiveStep] = useState(0);

  //Step1

  const [stepForm1, setStepForm1] = useState({
    files: null,
    fname: "",
    lname: "",
    dateOfbirth: "",
    phoneno: "",
    email: "",
  });

  const [step1fname, setStep1Fname] = useState(false);
  const [step1lname, setStep1Lame] = useState(false);
  const [step1DateOfBirth, setStep1DateOfBirth] = useState(false);
  const [step1PhoneNo, setStep1PhoneNo] = useState(false);
  const [step1Email, setStep1Email] = useState(false);

  //step2

  const [stepForm2, setStepForm2] = useState({
    accountNo: "",
    ifscCode: "",
    pancardno: "",
    adharcardno: "",
  });

  const [step2AccountNo, setStep2AccountNo] = useState(false);
  const [step2IFSCcode, setStep2IFSCcode] = useState(false);
  const [step2PanCardNo, setStep2PanCardNo] = useState(false);
  const [step2AdharCardNo, setStep2AdharCardNo] = useState(false);

  //Step3

  const [stepForm3, setStepForm3] = useState({
    resume: null,
    year: "",
    month: "",
    skill: [],
  });

  const [step3year, setStep3year] = useState(false);
  const [step3month, setStep3month] = useState(false);
  const [step3skill, setStep3skill] = useState(false);

  //STEP4

  const [stepForm4, setStepForm4] = useState({
    company: "Dignizant Technology",
    designation: "",
    deparment: "",
    ctc: "",
    workingFrom: "",
  });

  const [step4Designation, setStep4Designation] = useState(false);
  const [step4Department, setStep4Department] = useState(false);
  const [step4Ctc, setStep4Ctc] = useState(false);
  const [step4Workingform, setStep4Workingform] = useState(false);

  //STEP5
  const userTemplate = {
    company: "",
    designation: "",
    deparment: "",
    ctc: "",
    expyear: "",
    expmonth: "",
  };
  const [users, setusers] = useState([]);

  const educationDetails = {
    course: "",
    university: "",
    passedyear: "",
    grade: "",
  };

  const [education, setEducation] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // .##.....##....###....##.......####.########.....###....########.####..#######..##....##
  // .##.....##...##.##...##........##..##.....##...##.##......##.....##..##.....##.###...##
  // .##.....##..##...##..##........##..##.....##..##...##.....##.....##..##.....##.####..##
  // .##.....##.##.....##.##........##..##.....##.##.....##....##.....##..##.....##.##.##.##
  // ..##...##..#########.##........##..##.....##.#########....##.....##..##.....##.##..####
  // ...##.##...##.....##.##........##..##.....##.##.....##....##.....##..##.....##.##...###
  // ....###....##.....##.########.####.########..##.....##....##....####..#######..##....##

  const handleNextButton = () => {
    switch (activeStep) {
      case 0:
        if (
          stepForm1.fname.trim() === "" &&
          stepForm1.lname.trim() === "" &&
          stepForm1.dateOfbirth === "" &&
          stepForm1.email.trim() === "" &&
          stepForm1.phoneno.trim() === ""
        ) {
          setStep1Fname(true);
          setStep1Lame(true);
          setStep1DateOfBirth(true);
          setStep1Email(true);
          setStep1PhoneNo(true);
        }
        if (
          stepForm1.fname.trim() === "" ||
          !stepForm1.fname.trim().match(REGEX.NAME_REGEX)
        ) {
          setStep1Fname(true);
        } else if (
          stepForm1.lname.trim() === "" ||
          !stepForm1.lname.trim().match(REGEX.NAME_REGEX)
        ) {
          setStep1Lame(true);
        } else if (stepForm1.dateOfbirth === "") {
          setStep1DateOfBirth(true);
        } else if (
          stepForm1.email.trim() === "" ||
          !stepForm1.email.trim().match(REGEX.EMAIL_REGEX)
        ) {
          setStep1Email(true);
        } else if (
          stepForm1.phoneno.trim() === "" ||
          !stepForm1.phoneno.trim().match(REGEX.NUMBER_REGEX) ||
          stepForm1.phoneno.trim().length < 10 ||
          stepForm1.phoneno.trim().length > 10
        ) {
          setStep1PhoneNo(true);
        } else {
          setActiveStep(activeStep + 1);
        }
        break;

      case 1:
        if (
          stepForm2.accountNo.trim() === "" &&
          stepForm2.ifscCode.trim() === "" &&
          stepForm2.pancardno.trim() === "" &&
          stepForm2.adharcardno.trim() === ""
        ) {
          setStep2AccountNo(true);
          setStep2IFSCcode(true);
          setStep2PanCardNo(true);
          setStep2AdharCardNo(true);
        }
        if (
          stepForm2.accountNo.trim() === "" ||
          !stepForm2.accountNo.trim().match(REGEX.NUMBER_REGEX)
        ) {
          setStep2AccountNo(true);
        } else if (stepForm2.ifscCode.trim() === "") {
          setStep2IFSCcode(true);
        } else if (
          stepForm2.pancardno.trim() === "" ||
          !stepForm2.pancardno
            .trim()
            .match(
              REGEX.PANCARD_NUMBER_REGEX ||
                stepForm2.pancardno.trim().length < 10 ||
                stepForm2.pancardno.trim().length > 10
            )
        ) {
          setStep2PanCardNo(true);
        } else if (
          stepForm2.adharcardno.trim() === "" ||
          !stepForm2.adharcardno.trim().match(REGEX.NUMBER_REGEX) ||
          stepForm2.adharcardno.trim().length < 12 ||
          stepForm2.adharcardno.trim().length > 12
        ) {
          setStep2AdharCardNo(true);
        } else {
          setActiveStep(activeStep + 1);
        }
        break;
      case 2:
        if (
          stepForm3.year.trim() === "" &&
          stepForm3.month.trim() === "" &&
          stepForm3.skill.length === 0
        ) {
          setStep3year(true);
          setStep3month(true);
          setStep3skill(true);
        }
        if (stepForm3.year.trim() === "") {
          setStep3year(true);
        } else if (stepForm3.month.trim() === "") {
          setStep3month(true);
        } else if (stepForm3.skill.length === 0) {
          setStep3skill(true);
        } else {
          setActiveStep(activeStep + 1);
        }
        break;
      case 3:
        if (
          stepForm4.designation.trim() === "" &&
          stepForm4.deparment.trim() === "" &&
          stepForm4.ctc.trim() === "" &&
          stepForm4.workingFrom === ""
        ) {
          setStep4Designation(true);
          setStep4Department(true);
          setStep4Ctc(true);
          setStep4Workingform(true);
        }
        if (stepForm4.designation.trim() === "") {
          setStep4Designation(true);
        } else if (stepForm4.deparment.trim() === "") {
          setStep4Department(true);
        } else if (stepForm4.ctc.trim() === "") {
          setStep4Ctc(true);
        } else if (stepForm4.workingFrom === "") {
          setStep4Workingform(true);
        } else {
          setActiveStep(activeStep + 1);
        }
        break;
      case 4:
        setActiveStep(activeStep + 1);
        break;
      default:
        console.log("NOt case");
        break;
    }
  };

  const handleBackButton = () => {
    setActiveStep(activeStep - 1);
  };

  const onClickExitBtn = () => {
    navigate("/");
  };

  const onClickSubmitBtn = () => {
    let finalObj = {
      id: new Date().getTime(),
      personal_details: {
        files:stepForm1.files,
        fname: stepForm1.fname,
        lname: stepForm1.lname,
        dateofbirth: moment(stepForm1.dateOfbirth).format("DD/MM/YYYY"),
        email: stepForm1.email,
        phoneno: stepForm1.phoneno,
      },
      bank_details: {
        accountno: stepForm2.accountNo,
        ifscCode: stepForm2.ifscCode,
        pancardno: stepForm2.pancardno,
        adharcardno: stepForm2.adharcardno,
      },
      professional_Details: {
        resume:stepForm3.resume,
        expyear: stepForm3.year,
        expmonth: stepForm3.month,
        expskill: stepForm3.skill,
      },
      current_status: {
        company: stepForm4.company,
        designation: stepForm4.designation,
        deparment: stepForm4.deparment,
        ctc: stepForm4.ctc,
        workingFrom: moment(stepForm4.workingFrom).format("DD/MM/YYYY"),
      },
      experience_details: {
        ecompany: users,
      },
      educational_details: {
        education: education,
      },
     
    };
    dispatch(addEmployeeData(finalObj));
    navigate("/");
  };

  // ..#######..##....##..######..##.....##....###....##....##..######...########....########.##.....##.########.##....##.########
  // .##.....##.###...##.##....##.##.....##...##.##...###...##.##....##..##..........##.......##.....##.##.......###...##....##...
  // .##.....##.####..##.##.......##.....##..##...##..####..##.##........##..........##.......##.....##.##.......####..##....##...
  // .##.....##.##.##.##.##.......#########.##.....##.##.##.##.##...####.######......######...##.....##.######...##.##.##....##...
  // .##.....##.##..####.##.......##.....##.#########.##..####.##....##..##..........##........##...##..##.......##..####....##...
  // .##.....##.##...###.##....##.##.....##.##.....##.##...###.##....##..##..........##.........##.##...##.......##...###....##...
  // ..#######..##....##..######..##.....##.##.....##.##....##..######...########....########....###....########.##....##....##...

  const onChangeFirstName = (event) => {
    if (
      event.target.value.trim().match(REGEX.NAME_REGEX) &&
      event.target.value.trim().length > 0
    ) {
      setStep1Fname(false);
    } else {
      setStep1Fname(true);
    }
    setStepForm1({ ...stepForm1, fname: event.target.value });
  };

  const onChangeLastName = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.trim().match(REGEX.NAME_REGEX)
    ) {
      setStep1Lame(false);
    } else {
      setStep1Lame(true);
    }
    setStepForm1({ ...stepForm1, lname: event.target.value });
  };

  const onChangeDateOfBirth = (newValue) => {
    if (newValue) {
      setStep1DateOfBirth(false);
    } else {
      setStep1DateOfBirth(true);
    }
    setStepForm1({ ...stepForm1, dateOfbirth: newValue });
  };

  const onChangeEmail = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.trim().match(REGEX.EMAIL_REGEX)
    ) {
      setStep1Email(false);
    } else {
      setStep1Email(true);
    }
    setStepForm1({ ...stepForm1, email: event.target.value });
  };

  const onChangePhoneNo = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.trim().match(REGEX.NUMBER_REGEX) &&
      event.target.value.length === 10
    ) {
      setStep1PhoneNo(false);
    } else {
      setStep1PhoneNo(true);
    }
    setStepForm1({ ...stepForm1, phoneno: event.target.value });
  };

  const onChangeProfileUpload = (event) => {
    const [file] = event.target.files;
    setStepForm1({ ...stepForm1, files: URL.createObjectURL(file) });
  };

  //step1

  const onChangeAccountNumber = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.trim().match(REGEX.NUMBER_REGEX) &&
      event.target.value.trim().length <= 12
    ) {
      setStep2AccountNo(false);
    } else {
      setStep2AccountNo(true);
    }
    setStepForm2({ ...stepForm2, accountNo: event.target.value });
  };

  const onChangeIFSCcode = (event) => {
    if (event.target.value.trim().length > 0) {
      setStep2IFSCcode(false);
    } else {
      setStep2IFSCcode(true);
    }
    setStepForm2({ ...stepForm2, ifscCode: event.target.value });
  };

  const onChangePancardNo = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.trim().match(REGEX.PANCARD_NUMBER_REGEX) &&
      event.target.value.length === 10
    ) {
      setStep2PanCardNo(false);
    } else {
      setStep2PanCardNo(true);
    }
    setStepForm2({ ...stepForm2, pancardno: event.target.value });
  };

  const onChangeAdharcardNo = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.trim().match(REGEX.NUMBER_REGEX) &&
      event.target.value.trim().length === 12
    ) {
      setStep2AdharCardNo(false);
    } else {
      setStep2AdharCardNo(true);
    }
    setStepForm2({ ...stepForm2, adharcardno: event.target.value });
  };

  //step2
  const onChangeYear = (event) => {
    if (event.target.value.length > 0) {
      setStep3year(false);
    } else {
      setStep3year(true);
    }
    setStepForm3({ ...stepForm3, year: event.target.value });
  };

  const onChnageMonth = (event) => {
    if (event.target.value.length > 0) {
      setStep3month(false);
    } else {
      setStep3month(true);
    }
    setStepForm3({ ...stepForm3, month: event.target.value });
  };

  const onChangeSkill = (event) => {
    if (event.target.value.length > 0) {
      setStep3skill(false);
    } else {
      setStep3skill(true);
    }
    setStepForm3({ ...stepForm3, skill: event.target.value });
  };

  const handleDelete = (e, value) => {
    e.preventDefault();
    let filterItem = stepForm3.skill.filter((item) => item !== value);

    setStepForm3({
      ...stepForm3,
      skill: filterItem,
    });
  };

  //STEP3

  const onChangeDesignation = (event) => {
    if (event.target.value.trim().length > 0) {
      setStep4Designation(false);
    } else {
      setStep4Designation(true);
    }
    setStepForm4({ ...stepForm4, designation: event.target.value });
  };

  const onchangeDeparment = (event) => {
    if (event.target.value.trim().length > 0) {
      setStep4Department(false);
    } else {
      setStep4Department(true);
    }
    setStepForm4({ ...stepForm4, deparment: event.target.value });
  };
  const onChangeCtc = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.trim().match(REGEX.NUMBER_REGEX)
    ) {
      setStep4Ctc(false);
    } else {
      setStep4Ctc(true);
    }
    setStepForm4({ ...stepForm4, ctc: event.target.value });
  };
  const onChangeWorkingFrom = (newValue) => {
    if (newValue) {
      setStep4Workingform(false);
    } else {
      setStep4Workingform(true);
    }
    setStepForm4({ ...stepForm4, workingFrom: newValue });
  };

  const onChangeResume = (event) => {
    const [file] = event.target.files;
    setStepForm3({ ...stepForm3, resume: URL.createObjectURL(file) });
  };

  const onClickshowViewResume = () => {
    window.open(stepForm3.resume);
  };

  //STEP4

  const onClickPlusBtn = () => {
    setusers([...users, userTemplate]);
  };

  const onChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...users];
    list[index][name] = value;
    setusers(list);
  };

  const onClickDeleteExperience = (index) => {
    const deleteExperience = [...users];
    deleteExperience.splice(index);
    setusers(deleteExperience);
  };

  //STEP  5

  const onClickPlusEducationDeltailsBtn = () => {
    setEducation([...education, educationDetails]);
  };

  const onChangeEducationDetails = (e, index) => {
    const { name, value } = e.target;
    const edu = [...education];
    edu[index][name] = value;
    setEducation(edu);
  };

  const onDeleteEducationDetails = (index) => {
    const deleteEducation = [...education];
    deleteEducation.splice(index);
    setEducation(deleteEducation);
  };

  // ..######..########.########.########..########..########.########......######...#######..##....##.########....###....####.##....##.########
  // .##....##....##....##.......##.....##.##.....##.##.......##.....##....##....##.##.....##.###...##....##......##.##....##..###...##.##......
  // .##..........##....##.......##.....##.##.....##.##.......##.....##....##.......##.....##.####..##....##.....##...##...##..####..##.##......
  // ..######.....##....######...########..########..######...########.....##.......##.....##.##.##.##....##....##.....##..##..##.##.##.######..
  // .......##....##....##.......##........##........##.......##...##......##.......##.....##.##..####....##....#########..##..##..####.##......
  // .##....##....##....##.......##........##........##.......##....##.....##....##.##.....##.##...###....##....##.....##..##..##...###.##......
  // ..######.....##....########.##........##........########.##.....##.....######...#######..##....##....##....##.....##.####.##....##.########

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box mt={5}>
            <Typography textAlign="center" variant="h5">
              Personal Details
            </Typography>
            <Box mt={2}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {stepForm1.files && (
                  <img
                    src={stepForm1.files}
                    alt="Preview"
                    style={{ height: 100, width: 100 }}
                  />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <input
                  style={{ borderBottom: "1px solid black" }}
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={onChangeProfileUpload}
                />
              </div>
            </Box>

            <div>
              <TextField
                fullWidth
                error={step1fname ? true : false}
                sx={{ marginTop: 3 }}
                id="standard-basic"
                value={stepForm1.fname}
                onChange={onChangeFirstName}
                label="First Name"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                error={step1lname ? true : false}
                sx={{ marginTop: 3 }}
                id="standard-basic"
                value={stepForm1.lname}
                onChange={onChangeLastName}
                label="Last Name"
                variant="standard"
              />
            </div>
            <div>
              <DatePicker
                value={stepForm1.dateOfbirth}
                label="Date Of Birth"
                onChange={onChangeDateOfBirth}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ marginTop: 3 }}
                    variant="standard"
                    fullWidth
                    error={step1DateOfBirth ? true : false}
                  />
                )}
              />
            </div>
            <div>
              <TextField
                fullWidth
                sx={{ marginTop: 3 }}
                error={step1Email ? true : false}
                id="standard-basic"
                value={stepForm1.email}
                onChange={onChangeEmail}
                label="Email"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                sx={{ marginTop: 3 }}
                error={step1PhoneNo ? true : false}
                id="standard-basic"
                value={stepForm1.phoneno}
                onChange={onChangePhoneNo}
                label="Phone Number"
                variant="standard"
              />
            </div>
          </Box>
        );
      case 1:
        return (
          <>
            <Box mt={5}>
              <Typography textAlign="center" variant="h5">
                Bank Details
              </Typography>
              <div>
                <TextField
                  fullWidth
                  sx={{ marginTop: 3 }}
                  id="standard-basic"
                  value={stepForm2.accountNo}
                  onChange={onChangeAccountNumber}
                  label="Account Number"
                  variant="standard"
                  error={step2AccountNo ? true : false}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  sx={{ marginTop: 3 }}
                  style={{ textDecoration: "uppercase" }}
                  id="standard-basic"
                  value={stepForm2.ifscCode}
                  onChange={onChangeIFSCcode}
                  label="IFSC"
                  variant="standard"
                  error={step2IFSCcode ? true : false}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  sx={{ marginTop: 3 }}
                  id="standard-basic"
                  value={stepForm2.pancardno}
                  onChange={onChangePancardNo}
                  label="PAN Card Number"
                  variant="standard"
                  error={step2PanCardNo ? true : false}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  sx={{ marginTop: 3, maxLines: 12 }}
                  id="standard-basic"
                  value={stepForm2.adharcardno}
                  onChange={onChangeAdharcardNo}
                  label="Adhaar Card Number"
                  variant="standard"
                  error={step2AdharCardNo ? true : false}
                />
              </div>
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <Box mt={5}>
              <Typography textAlign="center" variant="h5">
                Professional Details
              </Typography>
              <Box>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <input
                    style={{ borderBottom: "1px solid black" }}
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={onChangeResume}
                  />
                  {stepForm3.resume && (
                    <Button onClick={onClickshowViewResume}>View Resume</Button>
                  )}
                </div>
              </Box>
              <div>
                <Typography variant="caption">Total Experience</Typography>
                <Stack direction="row">
                  <TextField
                    fullWidth
                    sx={{ marginRight: 5 }}
                    id="standard-basic"
                    value={stepForm3.year}
                    onChange={onChangeYear}
                    label="Years"
                    variant="standard"
                    type="number"
                    error={step3year ? true : false}
                  />
                  <TextField
                    fullWidth
                    id="standard-basic"
                    value={stepForm3.month}
                    onChange={onChnageMonth}
                    label="Month"
                    variant="standard"
                    type="number"
                    error={step3month ? true : false}
                  />
                </Stack>
              </div>
              <div>
                <DropDownSkill
                  renderValue={(selected) => {
                    return (
                      <div className="chips">
                        {selected.map((value) => {
                          return (
                            <Chip
                              key={value}
                              label={value}
                              clickable
                              sx={{ margin: 1 }}
                              deleteIcon={
                                <CancelIcon
                                  onMouseDown={(event) =>
                                    event.stopPropagation()
                                  }
                                />
                              }
                              className="chip"
                              onDelete={(e) => handleDelete(e, value)}
                            />
                          );
                        })}
                      </div>
                    );
                  }}
                  error={step3skill ? true : false}
                  IconComponent={KeyboardArrowDownIcon}
                  onChange={onChangeSkill}
                  value={stepForm3.skill}
                />
              </div>
            </Box>
          </>
        );
      case 3:
        return (
          <Box mt={5}>
            <Typography textAlign="center" variant="h5">
              Current Status
            </Typography>
            <div>
              <TextField
                fullWidth
                sx={{ marginTop: 3 }}
                id="standard-basic"
                value={stepForm4.company}
                label="Company"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                error={step4Designation ? true : false}
                sx={{ marginTop: 3 }}
                id="standard-basic"
                value={stepForm4.designation}
                onChange={onChangeDesignation}
                label="Designation"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                error={step4Department ? true : false}
                sx={{ marginTop: 3 }}
                id="standard-basic"
                value={stepForm4.deparment}
                onChange={onchangeDeparment}
                label="Department"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                error={step4Ctc ? true : false}
                sx={{ marginTop: 3 }}
                id="standard-basic"
                value={stepForm4.ctc}
                onChange={onChangeCtc}
                label="CTC"
                type="number"
                variant="standard"
              />
            </div>
            <div>
              <DatePicker
                label="Working From"
                value={stepForm4.workingFrom}
                onChange={onChangeWorkingFrom}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ marginTop: 3 }}
                    variant="standard"
                    fullWidth
                    error={step4Workingform ? true : false}
                  />
                )}
              />
            </div>
          </Box>
        );
      case 4:
        return (
          <Box mt={5}>
            <Typography textAlign="center" variant="h5">
              Experience Details
            </Typography>
            {users.map((user, index) => {
              return (
                <Box
                  sx={{
                    border: "1px solid black",
                    position: "relative",
                    padding: 2,
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                  key={index}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      position: "absolute",
                      right: 0,
                      marginTop: -35,
                      border: "1px solid black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      height: 40,
                      width: 40,
                    }}
                  >
                    <CancelIcon
                      onClick={() => onClickDeleteExperience(index)}
                      color="danger"
                      fontSize="medium"
                    />
                  </div>
                  <TextField
                    fullWidth
                    sx={{ marginTop: 1 }}
                    value={user.company}
                    name="company"
                    id="standard-basic"
                    onChange={(e) => onChange(e, index)}
                    label="Company"
                    variant="standard"
                  />
                  <TextField
                    fullWidth
                    sx={{ marginTop: 2 }}
                    value={user.designation}
                    id="standard-basic"
                    name="designation"
                    onChange={(e) => onChange(e, index)}
                    label="Designation"
                    variant="standard"
                  />
                  <TextField
                    fullWidth
                    sx={{ marginTop: 2 }}
                    value={user.deparment}
                    id="standard-basic"
                    onChange={(e) => onChange(e, index)}
                    name="deparment"
                    label="Department"
                    variant="standard"
                  />
                  <TextField
                    fullWidth
                    sx={{ marginTop: 2 }}
                    value={user.ctc}
                    id="standard-basic"
                    onChange={(e) => onChange(e, index)}
                    name="ctc"
                    label="CTC"
                    type="number"
                    variant="standard"
                  />
                  <TextField
                    fullWidth
                    sx={{ marginTop: 2 }}
                    value={user.expyear}
                    id="standard-basic"
                    onChange={(e) => onChange(e, index)}
                    name="expyear"
                    label="Experiance of Year"
                    type="number"
                    variant="standard"
                  />
                  <TextField
                    fullWidth
                    sx={{ marginTop: 2 }}
                    value={user.expmonth}
                    id="standard-basic"
                    onChange={(e) => onChange(e, index)}
                    name="expmonth"
                    label="Experiance of Month"
                    type="number"
                    variant="standard"
                  />
                </Box>
              );
            })}
            <Stack
              alignItems="center"
              mt={2}
              justifyContent="center"
              direction="row"
            >
              <IconButton
                onClick={onClickPlusBtn}
                size="larg"
                color="app_primary"
              >
                <AddBoxIcon fontSize="large" />
              </IconButton>
              <Typography variant="subtitle1">Add new Experiece</Typography>
            </Stack>
          </Box>
        );
      case 5:
        return (
          <>
            <Box mt={5}>
              <Typography textAlign="center" variant="h5">
                Education Details
              </Typography>
              {education.map((education, index) => {
                return (
                  <Box
                    sx={{
                      border: "1px solid black",
                      position: "relative",
                      padding: 2,
                      borderRadius: 5,
                      marginTop: 5,
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        backgroundColor: "#fff",
                        position: "absolute",
                        right: 0,
                        marginTop: -35,
                        border: "1px solid black",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        height: 40,
                        width: 40,
                      }}
                    >
                      <CancelIcon
                        onClick={() => onDeleteEducationDetails(index)}
                        color="danger"
                        fontSize="medium"
                      />
                    </div>
                    <TextField
                      fullWidth
                      sx={{ marginTop: 1 }}
                      value={education.course}
                      name="course"
                      id="standard-basic"
                      onChange={(e) => onChangeEducationDetails(e, index)}
                      label="course"
                      variant="standard"
                    />
                    <TextField
                      fullWidth
                      sx={{ marginTop: 2 }}
                      value={education.university}
                      id="standard-basic"
                      name="university"
                      onChange={(e) => onChangeEducationDetails(e, index)}
                      label="University"
                      variant="standard"
                    />
                    <TextField
                      fullWidth
                      sx={{ marginTop: 2 }}
                      value={education.passedyear}
                      id="standard-basic"
                      onChange={(e) => onChangeEducationDetails(e, index)}
                      name="passedyear"
                      label="Passed Year"
                      variant="standard"
                      type="number"
                    />
                    <TextField
                      fullWidth
                      sx={{ marginTop: 2 }}
                      value={education.grade}
                      id="standard-basic"
                      onChange={(e) => onChangeEducationDetails(e, index)}
                      name="grade"
                      label="Grade"
                      variant="standard"
                    />
                  </Box>
                );
              })}
              <Stack
                alignItems="center"
                mt={2}
                justifyContent="center"
                direction="row"
              >
                <IconButton
                  onClick={onClickPlusEducationDeltailsBtn}
                  size="larg"
                  color="app_primary"
                >
                  <AddBoxIcon fontSize="large" />
                </IconButton>
                <Typography variant="subtitle1">Add Education</Typography>
              </Stack>
            </Box>
          </>
        );
      default:
        return "unkown Stp";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((item, index) => {
          return (
            <Step key={index}>
              <StepLabel>{item}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <form style={{ margin: 20 }}>{getStepContent(activeStep)}</form>
      <Stack direction="row" justifyContent="space-around" mt={4}>
        <div>
          <Button
            className="button-stepper"
            variant="contained"
            color="app_primary"
            onClick={handleBackButton}
            disabled={true}
          >
            REMOVE
          </Button>
        </div>
        <div>
          <Button
            className="button-stepper"
            variant="outlined"
            color="app_primary"
            onClick={handleBackButton}
            disabled={activeStep === 0 ? true : false}
          >
            PREVIOUS
          </Button>
          <Button
            className="button-stepper"
            variant="outlined"
            color="danger"
            onClick={onClickExitBtn}
          >
            EXIT
          </Button>
          <Button
            className="button-stepper"
            variant="contained"
            color="app_primary"
            onClick={handleNextButton}
            disabled={activeStep === 5 ? true : false}
            type="submit"
          >
            NEXT
          </Button>
        </div>
        <div>
          <Button
            className="button-stepper"
            variant="contained"
            color="app_primary"
            disabled={activeStep === 5 ? false : true}
            onClick={onClickSubmitBtn}
          >
            Submit
          </Button>
        </div>
      </Stack>
    </Box>
  );
};

export default StepperSection;
