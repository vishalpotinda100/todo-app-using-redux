import { TextField ,Button,makeStyles, Card} from '@material-ui/core'
import React,{useState,useSelector} from 'react';
import {useDispatch} from 'react-redux'
import { addTodo } from '../../Actions';
 const useStyle=makeStyles({
    input:{
        padding:8
    },
    form:{
        display:'flex',
        alignItems:'center'
    },
    card:{
        width:400,
        margin:'50px auto',
        padding:10
        
    },
    button:{
        padding:10
    }

})

const Form = () => {
const [name,setName]=useState("");
const dispatch=useDispatch();

const onSubmitHander=(event)=>{
 
   dispatch(addTodo(name));




}
   
    const classes=useStyle();
    return (
        <Card className={classes.card}> 
            <form onSubmit={onSubmitHander} className={classes.form}>
                <TextField
                onChange={(event)=>setName(event.target.value)}
                 className={classes.input} 
                 id="outlined-basic" 
                 label="Enter name"
                 value={name}
                  variant="outlined" />
                <Button 
                type="submit"
                className={classes.button} 
                variant="contained" 
                color="primary">ADD</Button>
            </form>
        </Card>
    )
}

export default Form
