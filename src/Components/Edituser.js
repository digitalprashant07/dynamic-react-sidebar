import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edituser() {

  const [message, setMessage]=useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState({ username: '', email: '', phone: '', university: '', gender: '' });

  useEffect(() => {
    const getUser = async () => {
      const reqData = await fetch(`https://dummyjson.com/users/${id}`);
      const resData = await reqData.json();
      setEditUser(resData);
    }
    getUser();
  }, [id]);


  const handleInput = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const editInputvalue = {username:editUser.username, email:editUser.email, phone:editUser.phone, university:editUser.university, gender:editUser.gender};
    console.log(editInputvalue);
    let res = await fetch ("https://dummyjson.com/users" + id,{
      method:"PUT",
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(editInputvalue)
    });

    let resjson=await res.json();
    if(res.status===200){
      setMessage(resjson.success);
      setTimeout(()=>{
        navigate('/users');
      },2000);
    }
    else{
      setMessage("Some Error Occured");
    }
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h4 className='mt-2'>Edit User {id}</h4>
          <p className='text-success'>{message}</p>
          <form onSubmit={handleUpdate}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Username</label>
                  <input type="text" name="username" className="form-control" value={editUser.username} onChange={handleInput} />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Email</label>
                  <input type="text" name="email" className="form-control" value={editUser.email} onChange={handleInput} />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Phone no.</label>
                  <input type="text" name="phone" className="form-control" value={editUser.phone} onChange={handleInput} />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>University</label>
                  <input type="text" name="university" className="form-control" value={editUser.university} onChange={handleInput} />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Gender</label>
                  <input type="text" name="gender" className="form-control" value={editUser.gender} onChange={handleInput} />
                </div>
              </div>

              <div className='col-md-12'>
                <div className='mb-3'>
                  <button type='submit' className='btn btn-success btn-lg' >Update</button>
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
