import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import axios from "axios";


const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 700,
};

const Player = ({url}) => {
	return (
		<div>
			<video controls
         style={
            {
               objectFit: 'cover',
               objectPosition: 'center',
               width: '100%',
               height: '100%',
               borderRadius: '10px'
            }
         }>
				<source
					src={url}
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default function BasicModal({ open, handleClose, input_uri }) {
   useEffect(() => {
      if (open) {
      axios.post("https://asia-south1-civic-axon-375910.cloudfunctions.net/get-video-stream", {
         input_uri: input_uri
      })
      .then(response => {
         console.log(response.data);
      }
      )
      .catch(error => {
         console.error(error);
      }
      );
   }
   }, [open]);
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
               <Player url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
            </Box>
			</Modal>
		</div>
	);
}
