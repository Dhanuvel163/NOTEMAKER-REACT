import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NotesIcon from '@material-ui/icons/Notes';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Modalchild from './modalchildComponent';

const useStyles = makeStyles((theme) => ({
    listroot: {marginTop:10,width:'100%',maxWidth: 400,
    boxShadow:'0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
    backgroundColor:'blue',color:'white',borderRadius:5,maxHeight:'700px',overflow:'auto'
      },
    root: {padding: '2px 4px',display: 'flex',alignItems: 'center',maxWidth: 400,
    },
    input: {marginLeft: theme.spacing(1),flex: 1,
    },
    iconButton: {padding: 10,
    },
    divider: {height: 28,margin: 4,
    },
    dividerlist: {height: 1,margin: 4,
    },
    paper: {position: 'absolute',maxWidth: 400,height:75,background: 'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))',borderRadius:5,
        border: '2px solid #000',margin:'auto'
      },
    noteinput:{marginLeft:'15%',width:'70%',marginTop:'70px',
        backgroundColor:'white',borderRadius:3
    }
  }));

function Main() {
    const classes = useStyles();
    const handleClose=()=>{setopen(false);}
    const handleClose1=()=>{setopen1(false);}
    const addnote=(val)=>{
        if(val!==''){
            setnotesarr(notesarr.concat(','+val));
            localStorage.setItem('notesarr',notesarr.concat(','+val));
        }
        handleClose()
        handleClose1()
    }
    const addfirstnote=(val)=>{
        setnotesarr(val);
        localStorage.setItem('notesarr',val);
    }
    const datachangeHandler=(val)=>{
        settextareadata(val);
        localStorage.setItem(current,val)
    }
    const [notesarr,setnotesarr]=useState(localStorage.getItem('notesarr'));
    const [open,setopen]=useState(false);
    const [open1,setopen1]=useState(false);
    const [textareadata,settextareadata]=useState('');
    const [search,setsearch]=useState(' ');
    const [current,setcurrent]=useState('');
    var notesdata;
    if(localStorage.getItem('notesarr') && search!==' ' ){
        notesdata=notesarr.split(',').filter((data)=>new RegExp(search).test(data)).map((data)=>{
            return(
                <>
                <ListItem key={data}
                    onClick={()=>{
                    document.getElementById('multiline').value=localStorage.getItem(data);
                    setTimeout(()=>{
                        settextareadata(localStorage.getItem(data)||'');
                    },100)
                    setcurrent(data);
                }}>
                    <ListItemAvatar>
                    <Avatar style={{color:'black',backgroundColor:'white'}}>
                        <NotesIcon/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={data} />
                </ListItem>
                <Divider className={classes.dividerlist} orientation="horizontal" />
                </>
            );
        })
    }
    else if(localStorage.getItem('notesarr') && search===' ' ){
        notesdata=notesarr.split(',').map((data)=>{
            return(
                <>
                <ListItem key={data} onClick={()=>{
                    document.getElementById('multiline').value=localStorage.getItem(data);
                    setTimeout(()=>{
                        settextareadata(localStorage.getItem(data)||'');
                    },100)
                    setcurrent(data);
                }}>
                    <ListItemAvatar>
                    <Avatar style={{color:'black',backgroundColor:'white'}}>
                        <NotesIcon/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={data}/>
                </ListItem>
                <Divider className={classes.dividerlist} orientation="horizontal" />
                </>
            );
        })
    }
    if(notesarr){
        return (
            <>
            <div className="d-flex justify-content-center" style={{marginTop:20}}>
            <Fab color="primary" variant="extended">
                <b>
                Make Your Notes here!!
                </b>
            <EditIcon style={{marginLeft:8}}/>
            </Fab>
            </div>
            <div className="container" style={{marginTop:50,marginBottom:50}}>
            <Paper elevation={3} style={{padding:10,paddingTop:0,background:'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))'}}>
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 mt-2">
                        <Paper component="form" elevation={3} className={classes.root}>
                            <InputBase
                                className={classes.input}
                                placeholder="Search"
                                onChange={(val)=>{
                                    setsearch(val.target.value)
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <Divider className={classes.divider} orientation="vertical" />
                            <IconButton color="primary" onClick={()=>{setopen(true)}} className={classes.iconButton} aria-label="directions">
                            <AddIcon/>
                            </IconButton>
                            <Modal
                                className={classes.paper}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                            <Modalchild addnote={addnote}/>
                            </Modal>
                        </Paper>
                        <List className={classes.listroot}>
                            {notesdata}
                        </List>
                    </div>
                    <div className="col mt-2">
                        <TextField
                        style={{minHeight:500,width:'100%'}}
                        id="multiline"
                        onChange={(val)=>{
                            datachangeHandler(val.target.value)
                        }}
                        multiline
                        rows={30}
                        defaultValue={textareadata}
                        variant="outlined"
                        />
                    </div>
                </div>
            </Paper>
            </div>
            </>
          );
    }else{
        return(
        <div>
            <div className="d-flex justify-content-center" style={{marginTop:20}}>
            <Fab color="primary" variant="extended">
                <b>
                Make Your Notes here!!
                </b>
            <EditIcon style={{marginLeft:8}}/>
            </Fab>
            </div>
            <div style={{marginTop:40}} className="container">
                <Paper elevation={3} style={{marginLeft:10,marginRight:10,padding:30,borderRadius:8,background:'linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224))'}}>
                <h4 style={{textAlign:'center',marginTop:10,color:'white'}}>
                    <b>
                    YOU HAVE NOT YET ADDED AN NOTES !
                    </b>
                    </h4>
                <div className="d-flex justify-content-center" style={{marginTop:100}}>
                    <Paper elevation={3} component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton color="primary" onClick={()=>{setopen1(true)}} className={classes.iconButton} aria-label="directions">
                            <AddIcon/>
                        </IconButton>
                        <Modal
                            className={classes.paper}
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <Modalchild addnote={addfirstnote}/>
                        </Modal>
                    </Paper>
                </div>
                </Paper>
            </div>
        </div>);
    }
}

export default Main;
