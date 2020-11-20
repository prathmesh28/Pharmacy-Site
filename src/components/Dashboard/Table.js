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
  CModalFooter,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// import Loader from 'react-loader';

import Firebase from '../../firebase'
import _ from 'lodash';
import { freeSet } from '@coreui/icons'
import { withRouter } from 'react-router-dom'
// import userData from '../userData'
import ImageView from 'react-imageview'
import 'react-imageview/dist/react-imageview.min.css'



const fields = ['id', 'name', 'Prescriptions', 'status']

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data:null,
      name:"",
      id:"",
      //folder with prescription
    }
    this.state={
      showViewer:false
    }
  }

  componentDidMount() {
        // Firebase.database().ref('/Users/').on("value",(item) => {
           Firebase.database().ref('/Doctors/').on("value",(item) =>{
      const users=_.map(item.val(),(e)=>{
        return e.data
      })
      this.setState({data:users})
    })

  }
  



  render() {

    const data = this.state.data
    // const details = this.state.details


    return (
      <>

        <CRow style={{ margin: '30px' }}>
          <CCol xs="7" lg="7">
            {/* <CCardHeader>
              User Data
            </CCardHeader> */}
            <CCard>
            <CCardBody>
              <CDataTable
                items={data}
                fields={fields}
                columnFilter
                //tableFilter
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{

                  'status':
                    (item) => (
                      <td>
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"

                          onClick={() => {let userRef = Firebase.database().ref('Doctors/' + item.id)
                          userRef.remove()
                         console.log(userRef)
                         
                         }}>Delete</CButton>
                      </td>)
                }}>







              </CDataTable>
            </CCardBody>
            </CCard>

          </CCol>
          <CCol xs="5" lg="5">
            <CCard>
            <CCardBody>
              <CImg
              src="https://picsum.photos/530/480/?image=54"
      fluid
      className="mb-2">
              </CImg>
            
            </CCardBody>
            </CCard>
          </CCol>
          

        </CRow>

      </>

    )
  }
}
export default withRouter(Dashboard);