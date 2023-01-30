import React, { useEffect, useState } from "react";
import Modal from "./Modal";

import Box from "@mui/material/Box";
import MUICard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import "../styles/card.css";

const url = "https://asia-south1-civic-axon-375910.cloudfunctions.net/get-thumbnail";

function Card({ hit }) {
	const [open, setOpen] = useState(false);
	//    curl -m 70 -X POST https://asia-south1-civic-axon-375910.cloudfunctions.net/get-thumbnail \
	// -H "Authorization: bearer $(gcloud auth print-identity-token)" \
	// -H "Content-Type: application/json" \
	// -d '{ "input_uri": "/video-upload-bucket/funny_cat.mp4"}'
	// backend wold return an image
	const options = {
		headers: {
			"Content-Type": "application/json",
		},
	};
   const [responseData, setResponseData] = useState(null);

useEffect(() => {
  axios.post(url, {
    input_uri: "/video-upload-bucket/funny_cat.mp4"
  })
  .then(response => {
    setResponseData(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}, []);

	return (
		<>
			<MUICard sx={{ minWidth: 275 }} onClick={() => setOpen(true)}>
				<CardContent>
					<Typography sx={{ fontSize: 14, textAlign: "center" }} color="text.secondary" gutterBottom>
               {responseData ? <p>{responseData}</p> : <CircularProgress />
}
					</Typography>
				</CardContent>
			</MUICard>
			<Modal open={open} handleClose={() => setOpen(false)} />
		</>
	);
}

export default Card;
