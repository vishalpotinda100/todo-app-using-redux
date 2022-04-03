const intitialList={
    data:[]
};

const TodoReducer=(state=intitialList,action)=>{
    switch(action.type){
        case"ADD_TODO":
            const {id, data}=action.payload;
            return{
                ...state,
                list:[...state.list,{id,data}]
            }
        
        default:
            return state;
    }
}