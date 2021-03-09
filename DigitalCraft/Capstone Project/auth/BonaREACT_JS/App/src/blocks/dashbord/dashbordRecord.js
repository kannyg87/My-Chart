import React from 'react'
import {useSelector,useDispatch} from 'react-redux';

import { Paper} from './Styles';
import {deletePayment} from '../../actions/record'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Payment = () => {
    const record = useSelector(state => state.records);
    const dispatch = useDispatch();
    const element = <FontAwesomeIcon icon={faTrash} />
    deleteRecord


console.log(record)
  return (
    <>
        <Paper>
      <div className="container-fluid"> 
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Test Results</th>
                <th scope="col">Immunization:</th>
                <th scope="col">Medications:</th>
                <th scope="col">Notes:</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
        <tbody>
            {bills.map(p =>{
        return (
        <tr>
            <th scope="row" key={p.id} ></th>
            <td >{p.testResults}</td>
            <td>{p.immunization}</td>
            <td>{p.medications}</td>
            <td>{p.notes} </td>
            <td><button onClick={()=>dispatch(deletePayment(payment))} >{element}</button></td>
        </tr>
        ) })}
    
        </tbody>
</table>

</div>
</Paper>

    </>
)}

export default Payment