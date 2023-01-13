import React from 'react'
import { Link } from 'react-router-dom';
import './UserList.css';
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";



function UserList() {
    return (
                <section className='userlist'>
                    <h4 className='mt-2'> User Data </h4>
                    <table className="table table-bordered userlist-table">
                        <thead className='userlist-thead'>
                            <tr className='userlist-tr'>
                                <th className='userlist-th'>Sr no.</th>
                                <th className='userlist-th'>Username</th>
                                <th className='userlist-th'>Email</th>
                                <th className='userlist-th'>Phone no.</th>
                                <th className='userlist-th'>Address</th>
                                <th className='userlist-th'>Status</th>
                                <th className='userlist-th'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='userlist-tbody'>
                            <tr className='userlist-tr'>
                                <th className='userlist-th'>1</th>
                                <td className='userlist-td'>Mark</td>
                                <td className='userlist-td'>example@gmail.com</td>
                                <td className='userlist-td'>+91 - 9305958919</td>
                                <td className='userlist-td'>E-155 Noida sector 63</td>
                                <td className='userlist-td'>Active</td>
                                <td className='userlist-td userlist-td-7'>
                                    <Link to="/editUser" className="btn btn-success mx-2"><BsPencilSquare/> Edit</Link>
                                    <Link to="/deleteUser" className="btn btn-danger"><MdDeleteOutline/> Delete</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
    )
}

export default UserList;
