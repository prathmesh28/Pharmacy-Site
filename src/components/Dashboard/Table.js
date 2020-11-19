import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CForm,
  CInputGroupPrepend,
  CInputGroupText,
  CInputGroup,
  CInput,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Loader from 'react-loader';

import Firebase from '../../firebase'
import _ from 'lodash';
import { freeSet } from '@coreui/icons'
import { withRouter } from 'react-router-dom'





class Dashboard extends React.Component {
  constructor() {
    super();
  this.state = { 
 

  }
  }

  componentDidMount(){
   
  }



  render(){

    const data = this.state.data
   // const details = this.state.details
   
    
  return  (
    <>

      <CRow style={{margin:'30px'}}>
      <CCol xs="12" lg="12">
    table
        </CCol>

      </CRow>

    </>
  
  )
}
}
export default withRouter(Dashboard);