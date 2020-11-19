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
// import Loader from 'react-loader';

import Firebase from '../../firebase'
import _ from 'lodash';
import { freeSet } from '@coreui/icons'
import { withRouter } from 'react-router-dom'
import userData from '../userData'



const fields = ['id', 'name', 'Prescriptions', 'status']

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {


    }
  }

  componentDidMount() {

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
            <CCardBody>
              <CDataTable
                items={userData}
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

                          onClick={() => { }}>Delete</CButton>
                      </td>)
                }}>







              </CDataTable>
            </CCardBody>

          </CCol>
          <CCol xs="5" lg="5">
            <CCardBody>
              {/* <CDataTable 
               items={userData}
                fields={fields}>

              </CDataTable> */}
            </CCardBody>
          </CCol>

        </CRow>

      </>

    )
  }
}
export default withRouter(Dashboard);