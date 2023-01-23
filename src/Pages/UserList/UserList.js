import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './UserList.css';
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";



function UserList() {
    const [userData, setUserData] = useState([]);


    useEffect(() => {
        const getUserData = async () => {
            const reqData = await fetch("https://dummyjson.com/users");
            const resData = await reqData.json();
            setUserData(resData.users);
            console.log(resData);
        }
        getUserData();
    }, []);


    return (
        <section className='userlist'>
            <div className=''>
            <h4 className='mt-2'> User Data </h4>
            <div className='d-grid d-md-grid justify-content-md-end mb-3 mt40'>
                <Link to="/adduser" className='btn btn-success'>Add new User</Link>
            </div>
            </div>
            <table className="table table-bordered userlist-table">
                <thead className='userlist-thead'>
                    <tr className='userlist-tr'>
                        <th className='userlist-th'>Sr no.</th>
                        <th className='userlist-th'>Username</th>
                        <th className='userlist-th'>Email</th>
                        <th className='userlist-th'>Phone no.</th>
                        <th className='userlist-th'>University</th>
                        <th className='userlist-th'>Gender</th>
                        <th className='userlist-th'>Action</th>
                    </tr>
                </thead>
                <tbody className='userlist-tbody'>
                    {userData.map((userData, index) => (
                        <tr className='userlist-tr' key={index}>
                            <td className='userlist-th'>{userData.id}</td>
                            <td className='userlist-td'>{userData.username}</td>
                            <td className='userlist-td'>{userData.email}</td>
                            <td className='userlist-td'>{userData.phone}</td>
                            <td className='userlist-td'>{userData.university}</td>
                            <td className='userlist-td'>{userData.gender}</td>
                            <td className='userlist-td userlist-td-7'>
                                <Link to={"/editUser/" +userData.id}  className="btn btn-success mx-2"><BsPencilSquare className='__pencil' /> Edit</Link>
                                <Link to="/deleteUser" className="btn btn-danger"><MdDeleteOutline /> Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default UserList;
