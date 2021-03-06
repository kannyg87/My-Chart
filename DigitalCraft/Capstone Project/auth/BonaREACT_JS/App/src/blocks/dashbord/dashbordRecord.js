import React from 'react'
import {useSelector} from 'react-redux';
import DeleteRecord from './deleteRecord'



const Record = ({  users = [] }) => {
    const recordP = useSelector(state => state.recordP.records);

    const getPatientName = (patientId) => {
        const patient = users.find(({ id }) => patientId === id);
        return patient ? `${patient.firstName} ${patient.lastName}` : '-----';
    };

  return (
    <>
       
      <div className="container-fluid"> 
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Patient</th>
                <th scope="col">Test Results</th>
                <th scope="col">Immunization:</th>
                <th scope="col">Medications:</th>
                <th scope="col">Notes:</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
        <tbody>
            {recordP.map(p =>{
        return (
        <tr>
            <th scope="row" key={p.id} ></th>
            <td>{getPatientName(p.userId)}</td>
            <td >{p.testResults}</td>
            <td>{p.immunization}</td>
            <td>{p.medications}</td>
            <td>{p.notes} </td>
            <td><DeleteRecord record={p} /></td>
        </tr>
        ) })}
    
        </tbody>
</table>
</div>

    </>
)}

export default Record