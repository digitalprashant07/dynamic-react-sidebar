import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Edituser() {

  const {id} = useParams();
  const [editUser, setEditUser] = useState({ username: '', email: '', phone: '', university: '', gender: '' });

  useEffect(() =>{
    const getUser = async()=>{
      const reqData = await fetch(`https://dummyjson.com/users/${id}`);
      const resData = reqData.json();
      setEditUser(resData);
    }
    getUser();
  },[id]);


  const handleInput= (e) =>{
    setEditUser({...editUser, [e.target.name]:e.target.value});
  }

  const handleUpdate = (e) => {
    e.preventDefault();
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
            <h4 className='mt-2'>Edit User {id}</h4>
            <form>
            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Username</label>
                  <input type="text" name="username" className="form-control" value={editUser.username} onChange={handleInput}/>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Email</label>
                  <input type="text" name="email" className="form-control" value={editUser.email} onChange={handleInput}/>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Phone no.</label>
                  <input type="text" name="phone" className="form-control" value={editUser.phone} onChange={handleInput}/>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>University</label>
                  <input type="text" name="university" className="form-control" value={editUser.university} onChange={handleInput}/>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Gender</label>
                  <input type="text" name="gender" className="form-control" value={editUser.gender} onChange={handleInput}/>
                </div>
              </div>

              <div className='col-md-12'>
                <div className='mb-3'>
                  <button type='submit' className='btn btn-success btn-lg' >Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edituser;
