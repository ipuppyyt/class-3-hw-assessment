import "./Home.css";
import {
    Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  var [value, setValue] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      console.log(response.data.users);
      setValue((value = response.data.users));
    });
  }, []);
  return (
    <div className="maindiv">
      <Grid container apacing={2}>
        {value.map((val) => (
          <Grid item xs={3} className="grid">
            <Card className="card" variant="outlined">
              <CardContent className="textalign">
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" className="avatar" src={val.image} sx={{ width: 56, height: 56 }}/>
                </Stack><br></br>
                <Typography>
                  <b className="typo">Name : </b> {val.firstName} {val.lastName}
                </Typography>
                <Typography>
                  <b className="typo">Age : </b> {val.age}
                </Typography>
                <Typography>
                  <b className="typo">Gender : </b> {val.gender}
                </Typography>
                <Typography>
                  <b className="typo">Username : </b> @{val.username}
                </Typography>
                <Typography>
                  <b className="typo">Location : </b> {val.address.city}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" className="button">More Info {">>"}</Button>
              </CardActions><br></br>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
