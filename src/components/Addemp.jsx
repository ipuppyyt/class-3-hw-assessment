import "./Addemp.css";
import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Addemp = () => {
  const { register, handleSubmit } = useForm();
  const GetVal = (val) => {
    axios.post("https://reqres.in/api/users", val).then((res) => {
      console.log(val);
      alert(res.data.empname + " has been successfully added into employees.");
    });
  };
  return (
    <div>
      <Stack display={"block"} marginLeft={"auto"} marginRight={"auto"} marginTop={20} component="form" sx={{width: "25ch"}} spacing={2} noValidate autoComplete="off">
        <TextField hiddenLabel name="empname" {...register("empname")} id="filled-hidden-label-normal" label="Employee Name" variant="standard" size="small"/>
        <TextField hiddenLabel name="empdescription" {...register("empdescription")} id="filled-hidden-label-normal" label="Employee Description" variant="standard" size="small"/>
        <TextField hiddenLabel name="emplocation" {...register("emplocation")} id="filled-hidden-label-normal" label="Employee Location" variant="standard" size="small"/>
        <Button fullWidth="100px" variant="contained" onClick={handleSubmit(GetVal)}>Submit</Button>
      </Stack>
    </div>
  );
};

export default Addemp;
