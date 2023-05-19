import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { sendContactForm } from "../../services/api";

export default function AddressForm() {
  const [age, setAge] = React.useState("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setAge(event.target.value);
  };

  const categories = [
    "science",
    "sports",
    "business",
    "politics",
    "entertainment",
    "technology",
    "world",
    "all"
  ];

    const onSubmit = async (data: any) => {  
        const res = await sendContactForm(data);
        console.log(res.json());
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <React.Fragment>
      <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ padding: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                name
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                {...register("name")}
                required
                id="name"
                name="name"
                label="name"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
        
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                email
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                {...register("email")}
                id="email"
                name="email"
                label="email"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>

            {/*  */}
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                category
              </InputLabel>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                {...register("category")}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  
                  label="category"
                >
                  {categories.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                phone
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                {...register("phone")}
                id="phone"
                name="phone"
                label="phone"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                TEXT AREA
              </InputLabel>
            </Grid>


            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                {/* mui msg textfield */}
                <TextField
                    {...register("msg")}
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    variant="outlined"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button variant="contained" type="submit" >
                Save
              </Button>
            </Grid>
    
           
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
    </form>
  );
}
