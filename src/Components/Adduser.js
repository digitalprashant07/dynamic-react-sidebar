import React, { useState } from 'react'
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function addUserForm() {

  const [formValue, setFormValue] = useState({ username: '', email: '', phone: '', university: '', gender: '' });
  const [message, setMessage]=useState();
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allInputValue = {
      username: formValue.username,
      email: formValue.email,
      phone: formValue.phone,
      university: formValue.university,
      gender: formValue.gender
    }
    let res=await fetch("https://dummyjson.com/users/add",{
      method:"Post",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(allInputValue)
    });

    let resjson=await res.json();
    if(res.status===200){
      setMessage(resjson.success);
      setTimeout(()=>{
        navigate('/users');
      },2000);
    }else{
      setMessage("Some Error Occured");
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h4 className='mt-2'> Add new User</h4>
          <p className='text-success'>{message}</p>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Username</label>
                  <input type="text" name="username" className="form-control" value={formValue.username} onChange={handleInput} />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Email</label>
                  <input type="text" name="email" className="form-control" value={formValue.email} onChange={handleInput} />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Phone no.</label>
                  <input type="text" name="phone" className="form-control" value={formValue.phone} onChange={handleInput} />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>University</label>
                  <input type="text" name="university" className="form-control" value={formValue.university} onChange={handleInput} />
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-lable'>Gender</label>
                  <input type="text" name="gender" className="form-control" value={formValue.gender} onChange={handleInput} />
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

export default addUserForm;
