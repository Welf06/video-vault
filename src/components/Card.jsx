import React, { useEffect, useState } from "react";
import Modal from "./Modal";

import Box from "@mui/material/Box";
import MUICard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

import "../styles/card.css";

const url =
	"https://asia-south1-civic-axon-375910.cloudfunctions.net/get-thumbnail";

function Card({ hit }) {
	const [open, setOpen] = useState(false);
	const [responseData, setResponseData] = useState(null);

	useEffect(() => {
		axios
			.post(url, {
				input_uri: hit.input_uri,
			})
			.then((response) => {
				setResponseData(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<>
			<MUICard sx={{ minWidth: 275, padding: 0, boxShadow: 0 }} onClick={() => setOpen(true)}>
				<CardContent sx={{padding: 0}}>
						{responseData ? <img src={responseData.data} alt={hit.input_uri} class="thumbnail-img"/> : <CircularProgress />}
				</CardContent>
			</MUICard>
			<Modal
				open={open}
				handleClose={() => setOpen(false)}
				input_uri={hit.input_uri}
			/>
		</>
	);
}

export default Card;
