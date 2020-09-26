import React, { useState , useEffect } from "react";
import {
  Grid, 
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  DialogTitle,
  Button,
} from "@material-ui/core";

export default function Modal(props) {

  return (
    <>
      {/* modal  */}
      <Dialog
        open={props.open}
        onClose={props.close}
        fullWidth={false}
        maxWidth={false}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{padding:20,borderBottom:"2px solid #f5f5f5",backgroundColor:props.bgcolor ? props.bgcolor : "#fff"}}>{props.title}</DialogTitle>
        <DialogContent style={{backgroundColor:props.bgcolor ? props.bgcolor : "#fff"}}>
              {props.content}
        </DialogContent>
        <DialogActions style={{backgroundColor:props.bgcolor ? props.bgcolor : "#fff"}}>
          <div>
            {props.valueCancel === ""? "Batal" : props.valueCancel}
          </div>
          <div>
          {props.valueConfirm}
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
