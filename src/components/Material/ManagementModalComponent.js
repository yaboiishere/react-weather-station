import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getPeople } from "helpers/api";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#27293D",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ManagementModal(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [people, setPeople] = useState([]);
  const classes = useStyles();
  const handleClose = () => {
    props.setOpen(false);
  };
  //   const onChange = (event) => {
  //     const { id, value } = event.target;
  //     setFormData({ ...formData, [id]: value });
  //     console.log(formData);
  //   };
  //   const sendLogin = () => {
  //     login(formData.email, formData.password).then((res) => {
  //       console.log(res);
  //       setCookie("token", res.data.auth_token, { path: "/" });
  //       setCookie("loggedIn", true, { path: "/" });
  //       setLoggedIn(true);
  //       handleClose();
  //     });
  //   };
  useEffect(() => {
    getPeople().then((res) => {
      console.log(res);
      if (res.status === 200) {
        setPeople(res.data);
      }
    });
  }, []);
  const peopleElements = people.map((person) => {
    return (
      <Grid container style={{ width: "100%" }}>
        <Grid item>
          <TextField
            id="ws_id"
            label="ID:"
            value={person.weather_station}
            margin="normal"
            type="number"
            margin="dense"
            variant="filled"
            style={{ paddingRight: "20px", width: "170px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="username"
            label="Name: "
            value={person.user.username}
            margin="normal"
            type="text"
            margin="dense"
            variant="filled"
            style={{ paddingRight: "20px", width: "170px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="approved"
            label="Approved:"
            value={person.approved}
            margin="normal"
            type="checkbox"
            margin="dense"
            variant="filled"
            style={{ paddingRight: "20px", width: "170px" }}
          />
        </Grid>
      </Grid>
    );
  });
  return (
    <>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={classes}
      >
        <DialogTitle id="form-dialog-title">
          Manage Weather Stations
        </DialogTitle>
        <DialogContent>
          {peopleElements}
          {/* <TextField
            InputLabelProps={{ style: { color: "#D0D0D4" } }}
            InputProps={{ style: { color: "#D0D0D4" } }}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={onChange}
            required
          />
          <TextField
            InputLabelProps={{ style: { color: "#D0D0D4" } }}
            InputProps={{ style: { color: "#D0D0D4" } }}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={onChange}
            required
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
