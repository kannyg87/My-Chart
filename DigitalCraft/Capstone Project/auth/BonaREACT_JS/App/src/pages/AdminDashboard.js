import React, { Fragment, useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import { fetchUserByToken, fetchUsers, deleteUser } from '../actions';
import PageTitleCommon from '../blocks/page-title/PageTitleCommon';
import May from '../blocks/dashbord/may.jpg';
import FormImg from '../blocks/dashbord/formImg.jpg';
import {Img,ChartDivImg } from '../blocks/dashbord/dashbordStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {v1 as uuidv1} from 'uuid';
import {addRecord} from '../actions/record'
import Record from '../blocks/dashbord/dashbordRecord'


const AdminDashboard = (props) => {
    document.body.className = "";
    document.body.classList.add( 'page' );

    const dispatch = useDispatch();
    const { push } = useHistory();
    const [loading, setLoading] = useState(true);
    const [userIdSelected, selectUserId] = useState(0);

    const checkForAuthenticatedUser = () => {
        if (loading) return;
        if (props.auth && props.auth.role !== 'admin') {
            push('/');
        }
    };

    const callback = () => {
        setLoading(false);
    };

    useEffect(
        () => {
            checkForAuthenticatedUser();
            const token = localStorage.getItem('token');

            if (token) {
                dispatch(fetchUserByToken(token, callback));
                dispatch(fetchUsers(token, callback));
            } else {
                push('/');
            }
        },
        [],
    );

    useEffect(
        () => {
            checkForAuthenticatedUser();
        },
        [props.auth],
    );

    const handleDelete = (event, userId) => {
        event.preventDefault();
        dispatch(deleteUser(userId, () => true));
    };

    const handleEvent =(e) =>{
        e.preventDefault();
        let records ={
            id :uuidv1(),
            testResults: e.target.testResults.value,
            immunization: e.target.immunization.value,
            medications: e.target.medications.value,
            notes:e.target.notes.value,
            userId: props.users[userIdSelected].id,
        }
        dispatch(addRecord(records));
        e.target.testResults.value = "";
        e.target.immunization.value = "";
        e.target.medications.value= "";
        e.target.notes.value= "";
    }



    const element = <FontAwesomeIcon icon={faTrash} />

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>My Dashboard | Bona - Health & Medical ReactJS Template</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header logoColor="dark" />

            <main id="main" className="site-main">
                <PageTitleCommon title="Doctor's Dashboard" />

                <ChartDivImg >
    <div className="container-fluid">
        <div className="row mt-5">
            <div className=" col-5">
                <div className="card">
                    <div>  
                        <Img src={May} alt="BigCo Inc. logo"/>
                    </div>
                </div>
            </div>
            <div className=" col-6"><br />

                <h2>Dr. Mayada Ismail, MD</h2>
                <h3>GI Fellow at University Hospitals</h3>
                
                <p className="title">
                        Axess Pointe Community Health Center Internal Medicine
                        676 S Broadway St Ste 103, Akron, OH, 44311</p>
                
                
            </div>
        </div>
    </div> 
    </ChartDivImg>
    <br />
<div class="container-fluid">
    <div class="row mt-5">
        <div class="  offset-1 col-6 ">
            <h1>View Records</h1>
            <form onSubmit={handleEvent}>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Patient:</label>
                    <select id="exampleFormControlSelect1" class="form-control" value={userIdSelected} onChange={(event) => selectUserId(event.target.value)}>
                        {
                            props.users.map((user, index) => {
                                return (
                                    <option key={user.id} value={index}>{`${user.firstName} ${user.lastName}`}</option>
                                );
                            })
                        }
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Test Results:</label>
                    <input type="text" class="form-control" id="testResults"  />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect1">Immunization:</label>
                    <input type="text" class="form-control" id="immunization"  />
                </div>

                <div class="form-group">
                        <label for="exampleFormControlTextarea1">Medications:</label>
                        <input type="text" class="form-control" id="medications"  />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Notes:</label>
                    <textarea class="form-control" id="notes" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-info mb-5">Submit</button>
        </form>
        </div>
        <div class="col-5 ">
        
                <div class= "mt-5">
                    <Img src={FormImg} alt="BigCo Inc. logo"/>
                </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class=" offset-1 col-9">
        <h1>Health Record:</h1>
        <br/><Record users={props.users} />
        </div>
    </div>

    <div class="row mt-5">
        <div class=" col-8 offset-1 ">
        <br/>
        &nbsp;<h1>Patients List:</h1>
        {
            props.users.length > 0 && (
            <table class="table table-hover table-dark ml-3">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                props.users.map((user) => (
        
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                <td>
                <button onClick={(e) => handleDelete(e, user.id)}>
                    {element}
                </button>
                </td>
                </tr>
    ))}
    </tbody>
</table>
        )}
    </div>
    </div>
</div>

    </main>
    <Footer />
</Fragment>
    );
};

const mapStateToProps = (state) => {
        
    return{
        auth: state.auth.authenticated,
        users: state.auth.users,
    }
}

export default connect(mapStateToProps, null)(AdminDashboard);
