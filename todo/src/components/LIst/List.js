import { Box, Card, Typography ,makeStyles, Button} from '@material-ui/core'
import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {lists} from './data'


const useStyle=makeStyles({
    card:{
        width:400,
        padding:'0 10px',
        margin:'10px auto',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'pink',
        
    },
    title:{
        fontWeight:'bold',
        fontSize:30
    },
    number:{
        width:30,
        height:30,
        borderRadius:'100%',
        background:'red',
        color:'#fff'

    }
});


const List = () => {
    const classes=useStyle();
    return (
        <>
          { lists.map((item) =>{
              return(
                <Card className={classes.card} >
                <Typography className={classes.number} >{item.id}</Typography>
                <Box>
                    <Typography className={classes.title}>{item.name}</Typography>
                    <Typography>{item.date}</Typography>
                </Box>
                <Box>
                   <Button><EditIcon/></Button> 
                   <Button> <DeleteIcon /></Button>
                </Box>
            </Card>
              )
          }) }

        </>
    )
}

export default List
