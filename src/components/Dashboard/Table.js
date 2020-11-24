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




const fields = ['id', 'name', { key: 'phone', Label: 'Phone No' }, 'Date', 'View', 'Status','Delete']

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      name: "",
      id: "",
      image: "",
      
      //folder with prescription
    }
    this.state = {
      showViewer: false
    }
  }

  componentDidMount() {
    // Firebase.database().ref('/Users/').on("value",(item) => {
    Firebase.database().ref('/Pharmacy/').on("value", (item) => {
      const users = _.map(item.val(), (e) => {
        return e.data

      })
      this.setState({ data: users })

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


                    'View':
                      (item) => (
                        <td>
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"

                            onClick={() => {
                              // let userRef = Firebase.database().ref('Pharmacy/' + item.id)
                              // userRef.remove()
                              // console.log(userRef)
                              this.setState({
                                image: item.url
                              });

                            }}>View</CButton>
                        </td>),
                      
                      'Status':
                       (item)=>(
                         <td>
                           <CButton
                           color="primary"
                           shape="outline"
                           size="sm"

                           onClick={()=>{
                             console.log("hiii")
                           }}>Status</CButton>
                         </td>
                       ),
                    
                    'Delete':
                      (item, index) => {
                        return (
                          <td className="py-2">

                            <CButton size="sm" color="danger" className="ml-1"
                              onClick={async () => {
                                var r = await window.confirm("Table entry of name: " + item.name + " will be deleted");
                                if (r === true) {

                                  let userRef = Firebase.database().ref('Pharmacy/' + item.id)
                                  userRef.remove()
                                }


                              }}>
                              Delete
                               </CButton>
                          </td>
                        )
                      },


                  }}>







                </CDataTable>
              </CCardBody>
            </CCard>

          </CCol>
          <CCol xs="5" lg="5">
            <CCard>
              <CCardBody>
                <CImg
                  style={{ height: 500, width: 500 }}
                  src={this.state.image}
                // fluid
                // className="mb-2"
                >


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