import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 700,
};

const Player = () => {
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
					src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default function BasicModal({ open, handleClose }) {
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
               <Player />
            </Box>
			</Modal>
		</div>
	);
}
