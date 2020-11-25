import  React, { useState, useEffect } from "react";
import Header from './Header'
import Table from './Table'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import { Link } from "react-router-dom";

// import Form from './Form'

function Dashboard() {
  const [info, setInfo] = useState(false)
  
// const [time, setTime] = React.useState(new Date().toLocaleString());
// useEffect(()=>{
//     window.setInterval(function () {
//   setTime(new Date().toLocaleString())
//   }, 1000);
// })

const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

useEffect(() => {
    const timer = setInterval(() => { // Creates an interval which will update the current data every minute
    // This will trigger a rerender every component that uses the useDate hook.
    setDate(new Date());
  }, 1000);
  return () => {
    clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
  }
}, []);
return  (
    <>
     <Header/>
     <CCard>
        <CCardBody>
          <CRow className="align-items-center" >
            
            
            <CCol col="3" sm="3" md="2" style={{alignSelf:'flex-end',margin:20}} className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              {today.toLocaleString()}            
            </CCol>

          </CRow>
          </CCardBody>

      </CCard>
      <Table/>
    
    </>
  
  )
}
export default Dashboard