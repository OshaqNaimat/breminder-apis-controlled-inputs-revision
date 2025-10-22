import { createContext } from "react";

export const AppContext = createContext()


export const AppProvider = ({children})=>{

     const reducer = (state,action) =>{
   if(action.type == 'Empty'){
    return {
      ...state,
      error:true,
      success:false,
      message:'Please enter a value'
    }
   }else if (action.type == 'Fill'){
    return {
      ...state,
      error:false,
      success:true,
      message:'Value added successfully',
      data:[...state.data,action.payload]
    }
   }else if (action.type == 'Reset'){
    return {
      ...state,
      error:false,
      success:false,
      message:''
    }
   }else if(action.type == 'Delete'){
     return {

            ...state,
            data:state.data.filter((_,index)=>index !== action.payload)
   }
    }
    }
 return <AppContext.Provider value={{reducer}}>
{children}
 </AppContext.Provider>
}




export const useGlobalContext = useContext(AppContext);