import React, { createContext, useState } from "react";

export const AuthContex=createContext({
    token:'',
    isLoggeIn:false,
    login:(token) => {},
    logout:()=>{}
})

const LoginContex=({children})=>{
const [token,setToken]=useState()

const isLoggeIn=!!token
const loginhandler=(token)=>{
    setToken(token)
}
const logouthandler=()=>{
    setToken(null)
}
const contexvalue={
    token:token,
    isLoggeIn:isLoggeIn,
    login:loginhandler,
    logout:logouthandler
}
    return(
<AuthContex.Provider value={
contexvalue
}>
    {children}
</AuthContex.Provider>
    )

}
export default LoginContex;