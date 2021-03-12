import React from 'react'
import {useSelector} from 'react-redux';
import DeleteRecord from './deleteRecord'



const Record = () => {
    const recordP = useSelector(state => state.recordP.records);
console.log(recordP)
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
                <th scope="col">Actions</th>
                </tr>
            </thead>
        <tbody>
            {recordP.map(p =>{
        return (
        <tr>
            <th scope="row" key={p.id} ></th>
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