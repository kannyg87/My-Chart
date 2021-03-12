import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteRecord} from '../../actions/record'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteRecord = ({record}) => {

    const dispatch = useDispatch();
    const element = <FontAwesomeIcon icon={faTrash} />
    
  return (
    <>
        <button onClick={()=>dispatch(deleteRecord(record))} >{element}</button>
    </>
  )
}

export default DeleteRecord;