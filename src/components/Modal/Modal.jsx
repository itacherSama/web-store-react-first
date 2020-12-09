import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalUI from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Modal({ open }) {
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ModalUI
        BackdropComponent={ Backdrop }
        BackdropProps={ {
          timeout: 500,
        } }
        aria-describedby="transition-modal-description"
        aria-labelledby="transition-modal-title"
        className={ classes.modal }
        closeAfterTransition
        onClose={ handleClose }
        open={ open }
      >
        <Fade in={ open }>
          <div className={ classes.paper }>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </ModalUI>
    </div>
  );
}
