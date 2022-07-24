import React from 'react';
import './App.css';
import Main from './Components/mainComponent';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NoteAddOutlined from '@material-ui/icons/NoteAddOutlined';
import ContactMail from '@material-ui/icons/ContactMail';
function App() {
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center'}}>
            <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <NoteAddOutlined />
              </IconButton>
              <Typography variant="h6">
                <b>
                NOTE MAKER
                </b>
              </Typography>
            </Toolbar>
          </AppBar>
      </div>
      <div style={{marginTop:90}}>
      <Main/>
      </div>
      <div style={{height:100}}></div>
    <div>
        <AppBar position="fixed" style={{bottom:0,top:'auto'}}>
        <Toolbar>
          <div className="d-flex justify-content-center align-items-center" style={{width:'100%'}}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ContactMail />
            </IconButton>
            <Typography>
              <b>
              CONTACT US : dhanuram99@gmail.com
              </b>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}

export default App;
