import React from 'react'
import DashCards from '../Components/Cards/DashCards'
import styled from '@emotion/styled';


const AdminDashboard = () => {
    return (
        <div style={{display:"flex",height:"100vh",flexDirection:"row"}} >
        <div style={{width:"200px",backgroundColor:"blue"}} >
    <ul>
        <li>Dashboard</li>
        <li>Add New Profile</li>
        <li>General Search</li>
        <li>General System</li>
    </ul>
        </div>
        <div className="container-top">
        <div className="content" style={{display:"inline-flex"}}>
           <DashCards 
               cardname="ADD PROFILE"
           />
           <DashCards 
               cardname="NEW PROFILE"
           />
           <DashCards 
               cardname="OUT OF STOCK"
           />
           <DashCards 
               cardname="SETTING"
           />
        </div>
        </div>
        

        </div>
    )
}

export default AdminDashboard
