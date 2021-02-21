import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "reactstrap/lib/Button";
import { login } from "helpers/api";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LoginModal(props) {
  const classes = useStyles();

<<<<<<< HEAD
=======
  const handleOpen = () => {
    props.setOpen(true);
  };

>>>>>>> 8a306e4c12e0cb21e207a4d2e4d9d5302bbf95b3
  const handleClose = () => {
    props.setOpen(false);
  };
  const logout = () => {
<<<<<<< HEAD
    console.log(logout);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Transition modal</h2>
          <p id="transition-modal-description">
            react-transition-group animates me.
          </p>
        </div>
      </Fade>
    </Modal>
=======
      console.log(logout)
  }
  const
  return (
    <div>
      {props.loggedIn ? (
        <Button
          to=""
          className="nav-link"
          activeClassName="active"
        //   onClick={logout()}
        >
          {/* <i className={prop.icon} /> */}
          <p>Logout</p>
        </Button>
      ) : (
        <Button
          to=""
          className="nav-link"
          activeClassName="active"
          onClick={() => handleOpen(true)}
        >
          {/* <i className={prop.icon} /> */}
          <p>Login</p>
        </Button>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
>>>>>>> 8a306e4c12e0cb21e207a4d2e4d9d5302bbf95b3
  );
}
