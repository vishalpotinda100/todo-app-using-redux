export const addTodo=(data)=>{
    return {
        type:"ADD_TUDO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo=()=>{
    return {
        type:"DELETE_TUDO"
    }
}

export const removeTodo=()=>{
    return {
        type:"REMOVE_TUDO"
    }
}