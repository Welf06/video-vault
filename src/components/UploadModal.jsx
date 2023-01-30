import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { useState } from "react";

import '../styles/upload.css';

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
   borderRadius: 2,
	boxShadow: 24,
	p: 4,
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "1rem",
};

function UploadModal({ open, handleClose }) {
	const [fileList, setFileList] = useState(null);

	const handleUpload = (e) => {
		setFileList(e.target.files);
		console.log(e.target.files);
	};

	const FileListComponet = () => {
		if (fileList) {
			return (
				<ul style={{ listStyle: "none" }}>
					{Array.from(fileList).map((file) => (
						<li key={file.name}>{file.name}</li>
					))}
				</ul>
			);
		}
		return "No Files Selected";
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<IconButton
						color="primary"
						aria-label="upload picture"
						component="label"
                  style={{color: "#00a27e", border: "1px solid #00a27e", borderRadius: "10px", fontSize: "1rem"}}
					>
						<input
							hidden
							multiple
							accept="video/*, .mkv"
							type="file"
							onChange={handleUpload}
						/>
						<VideoCallIcon/>
						Add Files
					</IconButton>
					<FileListComponet />
					<Button variant="contained" component="label" style={{backgroundColor: "#00a27e"}}>
						Upload
						<input hidden accept="video/*, .mkv" multiple type="file" />
					</Button>
				</Box>
			</Modal>
		</div>
	);
}

export default UploadModal;
