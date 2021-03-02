import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  CableApp,
  getPeople,
  getLastLockUser,
  updateLastLockUser,
} from "helpers/api";
import { Grid, Checkbox, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#27293D",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ManagementModal(props) {
  const [updatedPeople, setUpdatedPeople] = useState([]);
  const [users, setUsers] = useState([]);
  const [people, setPeople] = useState([]);
  const [isEditingUser, setIsEditingUser] = useState(null);
  const [lastLockUser, setLastLockUser] = useState(null);
  const [locked, setLocked] = useState(true);
  const classes = useStyles();
  const handleClose = () => {
    updateLastLockUser({ user: props.currentUser }).then((res) => {
      if (res.status === 200) {
        console.log("cleaned up");
      } else if (res.status === 400) {
        console.log("error");
      }
    });
    props.setOpen(false);
  };
  const onChangeUser = (event) => {
    setIsEditingUser(true);
    const { id, value } = event.target;
    const split = id.split("_");
    const index = split[1];
    let newUsers = users;
    newUsers[people[index].user.id] = value;
    setUsers(newUsers);
    console.log(newUsers, "newUsers");
  };
  const onChangeApproved = (event) => {
    setIsEditingUser(false);
    const { id, checked } = event.target;
    const split = id.split("_");
    const name = split[0],
      index = split[1];
    let newPeople = updatedPeople;
    newPeople[parseInt(index)] = {
      ...people[parseInt(index)],
      [name]: checked,
    };
    setUpdatedPeople(newPeople);
    console.log(newPeople, "newPeople");
  };
  const onChange = (event) => {
    setIsEditingUser(false);
    const { id, value } = event.target;
    const split = id.split("_");
    const name = split[0],
      index = split[1];
    let newPeople = updatedPeople;
    newPeople[parseInt(index)] = {
      ...people[parseInt(index)],
      [name]: value,
    };
    setUpdatedPeople(newPeople);
    console.log(newPeople, "newPeople");
  };
  //   const sendLogin = () => {
  //     login(formData.email, formData.password).then((res) => {
  //       console.log(res);
  //       setCookie("token", res.data.auth_token, { path: "/" });
  //       setCookie("loggedIn", true, { path: "/" });
  //       setLoggedIn(true);
  //       handleClose();
  //     });
  //   };
  const handleSave = () => {
    setIsEditingUser(null);
  };
  const onEnter = () => {
    getLastLockUser().then((res) => {
      setLastLockUser(res.data.user);
      if (
        res.data.user === props.currentUser ||
        res.data.user === "false" ||
        res.data.user === "0"
      ) {
        setLocked(false);
      }
    });
    getPeople().then((res) => {
      if (res.status === 200) {
        const sortedPeople = res.data.sort((first, second) => {
          return first.weather_station - second.weather_station;
        });
        setPeople(sortedPeople);
      }
    });
    CableApp.room = CableApp.cable.subscriptions.create(
      {
        channel: "ManagementChannel",
        username: props.currentUser,
      },
      {
        received: (res) => {
          console.log(res);
        },
      }
    );
  };
  const peopleElements = () => {
    return people.map((person, index) => {
      return (
        <Grid container key={index} spacing={1} className={classes.root}>
          <Grid item xs={2}>
            <TextField
              InputLabelProps={{ style: { color: "#D0D0D4" } }}
              InputProps={{ style: { color: "#D0D0D4" } }}
              id={`ws_id_${index}`}
              label="ID:"
              defaultValue={person.weather_station}
              margin="normal"
              type="number"
              onChange={onChange}
              name={index.toString()}
              disabled={
                locked
                  ? true
                  : isEditingUser === null
                  ? false
                  : isEditingUser === true
                  ? true
                  : false
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              InputLabelProps={{ style: { color: "#D0D0D4" } }}
              InputProps={{ style: { color: "#D0D0D4" } }}
              id={`username_${index}`}
              label="Name: "
              defaultValue={person.user.username}
              margin="normal"
              type="text"
              onChange={onChangeUser}
              name={index.toString()}
              disabled={
                locked
                  ? true
                  : isEditingUser === null
                  ? false
                  : isEditingUser === false
                  ? true
                  : false
              }
            />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              label="Approved:"
              labelPlacement="start"
              margin="normal"
              style={{ color: "#D0D0D4", marginTop: "15%", marginLeft: "0px" }}
              control={
                <Checkbox
                  id={`approved_${index}`}
                  label="Approved:"
                  margin="normal"
                  type="checkbox"
                  defaultChecked={person.approved}
                  onChange={onChangeApproved}
                  name={index.toString()}
                  disabled={
                    locked
                      ? true
                      : isEditingUser === null
                      ? false
                      : isEditingUser === true
                      ? true
                      : false
                  }
                />
              }
            />
          </Grid>
        </Grid>
      );
    });
  };
  return (
    <>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={classes}
        onEnter={onEnter}
      >
        <DialogTitle id="form-dialog-title">
          Manage Weather Stations
        </DialogTitle>
        <DialogContent>
          {locked ? (
            <div style={{ color: "#D0D0D4" }}>
              The data is being edited by{" "}
              {lastLockUser === "false" ? props.currentUser : lastLockUser}
            </div>
          ) : (
            ""
          )}
          {peopleElements()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            onClick={handleSave}
            color="primary"
            disabled={isEditingUser === null}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
