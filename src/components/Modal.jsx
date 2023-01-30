import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { minHeight } from "@mui/system";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 700,
};

const Player = ({ url }) => {
	console.log(url);
	return (
		<div>
			<video
				controls
				style={{
					objectFit: "cover",
					objectPosition: "center",
					width: "100%",
					height: "100%",
					borderRadius: "10px",
				}}
			>
				<source src={url} type="video/mp4" />
			</video>
		</div>
	);
};

const url =
	"https://asia-south1-civic-axon-375910.cloudfunctions.net/get-video";
export default function BasicModal({ open, handleClose, input_uri }) {
	const [videoURL, setVideoURL] = useState(null);
	useEffect(() => {
		if (open) {
			axios
				.post(url, {
					input_uri: input_uri,
				})
				.then((response) => {
					setVideoURL(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
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
					{videoURL ? (
						<Player url={videoURL} />
					) : (
						<div
							style={{
								display: "flex",
                        flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "white",
								objectFit: "cover",
								objectPosition: "center",
								borderRadius: "10px",
								minHeight: "10rem",
							}}
						>
							<CircularProgress style={{
                        color: "#00a27e",
                     }}/>
							<div
                     style={{
                        color: "#00a27e",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginTop: "1rem",
                     }}
                     > Loading the Video</div>
						</div>
					)}
				</Box>
			</Modal>
		</div>
	);
}
