import React from 'react'
import {useSelector} from 'react-redux';




const PatientRecord = ({  user = {} }) => {
    const recordP = useSelector(state => state.recordP.records);

    return (
    <>
       
      <div className="container-fluid"> 
        <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Test Results</th>
                <th scope="col">Immunization:</th>
                <th scope="col">Medications:</th>
                <th scope="col">Notes:</th>
                </tr>
            </thead>
        <tbody>
            {recordP.filter((record) => record.userId === user.id).map(p =>{
        return (
        <tr>
            <th scope="row" key={p.id} ></th>
            <td >{p.testResults}</td>
            <td>{p.immunization}</td>
            <td>{p.medications}</td>
            <td>{p.notes} </td>
            
        </tr>
        ) })}
    
        </tbody>
</table>
</div>

    </>
)}

export default PatientRecord