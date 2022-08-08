import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Myaccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [npassword, setNpassword] = useState('');
  const [cnpassword, setCNpassword] = useState('');
  const [user, setUser] = useState({ value: null });
  const router = useRouter();

  useEffect(() => {
    const connectedUser = JSON.parse(localStorage.getItem('connectedUser'));

    if (!connectedUser) {
      router.push('/');
    }

    if (connectedUser && connectedUser.token) {
      setUser(connectedUser);
      setEmail(connectedUser.email);
      fetchData(connectedUser.token);
    }

  }, []);

  const handleChange = async (E) => {
    console.log(user, email)
    if (E.target.name === 'name') {
      setName(E.target.value);
    }
    if (E.target.name === 'address') {
      setAddress(E.target.value);
    }
    if (E.target.name === 'phone') {
      setPhone(E.target.value);
    }
    if (E.target.name === 'photo') {
      setPhoto(E.target.value);
    }
    if (E.target.name === 'password') {
      setPassword(E.target.value);
    }
    if (E.target.name === 'npassword') {
      setNpassword(E.target.value);
    }
    if (E.target.name === 'cnpassword') {
      setCNpassword(E.target.value);
    }

  }

  const fetchData = async (token) => {
    let data = { token: token };
    // console.log(data);
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    let response = await a.json();
    // console.log("Response of fetchData: ", response);
    console.log("Response dbUser: ", response.dbUser);
    setName(response.dbUser.Name);
    setAddress(response.dbUser.Address);
    setPhone(response.dbUser.PhoneNo);
    setPhoto(response.dbUser.Photo);

  }

  const handleUserSubmit = async () => {
    let data = { token: user.token, name, address, phone, photo };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    let response = await a.json();
    if (response.success) {
      toast.success('Details changed successfully!', {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setPassword('');
    setNpassword('');
    setCNpassword('');
  }

  const handlePasswordSubmit = async () => {
    let response;
    if (npassword == cnpassword) {
      let data = { token: user.token, password, npassword, cnpassword };
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatePassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      response = await a.json();
    }
    else {
      response = { success: false };
    }

    if (response.success == true) {
      toast.success('Password Changed successfully!', {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(response.error, {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }



  return (
    <div className="min-h-screen flex items-start justify-center py-4 px-4 sm:px-6 lg:px-8">
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container mx-auto my-9">
        <h1 className="text-3xl text-center font-bold">Update your Account</h1>

        <h2 className='font-bold text-xl'>1. Personal Details</h2>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className="mb-1">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name:</label>
              <input onChange={handleChange} value={name} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-1">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email: ( <span className='text-red-500'>Cannot be updated!</span> )</label>
              {user && user.token ? <input readOnly value={user.email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> :
                <input onChange={handleChange} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />}

            </div>
          </div>
        </div>

        <div className="px-2 w-full">
          <div className="mb-1">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address:</label>
            <textarea onChange={handleChange} value={address} name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>

        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className="mb-1">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone:</label>
              <input placeholder='Your 10-digit phone number' onChange={handleChange} value={phone} type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-1">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Profile DP:</label>
              <img onChange={handleChange} alt="Profile DP" src={photo}  id="photo" name="photo" className="w-1/2 h-1/2" />
            </div>
          </div>
        </div>
        <div className="mb-10 mx-4">
          <button onClick={handleUserSubmit} className="disabled:bg-red-200 flex mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm">Change Details</button>
        </div>

    
        <h2 className='font-bold text-xl'>2. Change Password</h2>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/3">
            <div className="mb-1">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Current Password:</label>
              <input required onChange={handleChange} value={password} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/3">
            <div className="mb-1">
              <label htmlFor="npassword" className="leading-7 text-sm text-gray-600">New Password:</label>
              <input required onChange={handleChange} value={npassword} type="password" id="npassword" name="npassword" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-1/3">
            <div className="mb-1">
              <label htmlFor="cnpassword" className="leading-7 text-sm text-gray-600">Confirm New Password:</label>
              <input required onChange={handleChange} value={cnpassword} type="password" id="cnpassword" name="cnpassword" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="mx-4">
          <button onClick={handlePasswordSubmit} className="disabled:bg-red-200 flex mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm">Change Password</button>
        </div>

      </div>
    </div>
  )
}

export default Myaccount;