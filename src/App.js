import ResponsiveAppBar from './components/AppBar';
import Modal from './components/UploadModal';
import Box from '@mui/material/Box';

import './styles/App.css';
import { useState } from 'react';

function ScrollTop(props) {
  const { children, window } = props;
  const [isShown, setIsShown] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        role="presentation"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={() => setOpen(true)}
        sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000, backgroundColor: isShown ? '#00b58f' :'#00a27e', padding: '0.5rem', borderRadius: '50%', color: '#fff', cursor: 'pointer', boxShadow: '0 0 5px rgba(0,0,0,0.5)', fontWeight: 'bold', height: '2rem', width: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', transition: 'all 0.3s ease-in-out', }}
      >
        +
      </Box>
      <Modal open={open} handleClose={() => setOpen(false)} />
      </>
  );
}

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Modal />
      <ScrollTop />
    </div>
  );
}

export default App;
