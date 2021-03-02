import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { login } from "helpers/api";
import { useCookies } from "react-cookie";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#27293D",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LoginModal(props) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["token", "loggedIn"]);
  const classes = useStyles();
  const handleClose = () => {
    props.setOpen(false);
  };
  const setLoggedIn = (loggedIn) => {
    props.setLoggedIn(loggedIn);
  };
  const onChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };
  const sendLogin = () => {
    login(formData.email, formData.password).then((res) => {
      console.log(res);
      if (res.status === 401) {
        alert("Wrong username/password");
      } else if (res.status === 200) {
        setCookie("token", res.data.auth_token, { path: "/" });
        setCookie("loggedIn", true, { path: "/" });
        setLoggedIn(true);
        handleClose();
      }
    });
  };
  return (
    <>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        classes={classes}
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <form method="POST">
          <DialogContent>
            <TextField
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
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={sendLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
