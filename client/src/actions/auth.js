import axios from 'axios'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './type'

//Register new user
export const register=(name ,email,password,mobile,location,image)=>async dispatch=>{
    const config ={
        headersS:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({name ,email,password,mobile,location,image})
  try {
      const res = await axios.post('http://localhost:8080/users' , config , body)
      dispatch({
          type:REGISTER_SUCCESS,
          payload:res.data
      })
  } catch (error) {
      const errors = error.response.data.errors
      if(errors){
          errors.forEach(err =>{
              console.log(err);
          })
          dispatch({
              type:REGISTER_FAIL
          })
      }
  }
}