import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AddObject = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      position: "",
      year: "",
      average: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:3001/cardinals/add", {
            name: String(inputs.name),
            position: String(inputs.position),
            year: Number(inputs.year),
            average: Number(inputs.average),
            available: Boolean(checked),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/cardinals"));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >


            <FormLabel>Player Name</FormLabel>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                type="string"
                margin="normal"
                fullWidth
                variant="outlined"
                name="name"
              />


              <FormLabel>Position</FormLabel>
              <TextField
                value={inputs.position}
                onChange={handleChange}
                type="string"
                margin="normal"
                fullWidth
                variant="outlined"
                name="position"
              />


              <FormLabel>Year</FormLabel>
              <TextField
                value={inputs.year}
                onChange={handleChange}
                type="number"
                margin="normal"
                fullWidth
                variant="outlined"
                name="year"
              />


              <FormLabel>Batting Average</FormLabel>
              <TextField
                value={inputs.average}
                onChange={handleChange}
                type="number"
                margin="normal"
                fullWidth
                variant="outlined"
                name="average"
              />


              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Available"
              />


  
          <Button variant="contained" type="submit">
            Add
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddObject;
