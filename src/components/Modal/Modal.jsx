import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalUI from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@components/Button';

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
  title: {
    marginBottom: '15px',
  },
  content: {
    marginBottom: '15px',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Modal({
  open, children, onClose, title, onSubmit,
}) {
  const classes = useStyles();

  return (
    <ModalUI
      BackdropComponent={ Backdrop }
      BackdropProps={ {
        timeout: 500,
      } }
      aria-describedby="transition-modal-description"
      aria-labelledby="transition-modal-title"
      className={ classes.modal }
      closeAfterTransition
      onClose={ onClose }
      open={ open }
    >
      <Fade in={ open }>
        <div className={ classes.paper }>
          <h2 className={ classes.title } id="transition-modal-title" >{title}</h2>
          <div className={ classes.content } id="transition-modal-description">{children}</div>
          <div className={ classes.footer } id="transition-modal-footer">
            <Button className={ 'buttonAdd' } onClick={ onSubmit }><span>Выбрать</span></Button>
          </div>

        </div>
      </Fade>
    </ModalUI>
  );
}
