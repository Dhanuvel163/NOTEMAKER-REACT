import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    noteinput:{marginLeft:'7px',width:'96%',marginTop:'7px',
        backgroundColor:'white',borderRadius:3
    }
  }));

export default function Modalchild({addnote}){
    const classes = useStyles();
      const [values, setValues] = React.useState({
        note: '',
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    return(
    <>
        <FormControl variant="filled" className={classes.noteinput}>
            <InputLabel htmlFor="note">Add Notes Name</InputLabel>
            <FilledInput
                id="note"
                type='text'
                value={values.note}
                onChange={handleChange('note')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    edge="end"
                    onClick={()=>{addnote(values.note)}}
                    >
                        <AddIcon/>
                    </IconButton>
                </InputAdornment>
                }
            />
        </FormControl>
    </>
    )
}