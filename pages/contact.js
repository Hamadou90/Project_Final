import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {

  const [fullname, setFullname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [desc, setdesc] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    (fullname, email, phone, desc);

    const data = { fullname, email, phone, desc };

    fetch(`${procss.env.NEXT_PUBLIC_HOST}/api/postcontact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        alert('Thank you for contacting Us. You will be contacted back within 24 hours...');

        setFullname('');
        setemail('');
        setphone('');
        setdesc('');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
  const handleChange = e => {
    if (e.target.name == 'fullname')
      setFullname(e.target.value);

    else if (e.target.name == 'email')
      setemail(e.target.value);

    else if (e.target.name == 'phone')
      setphone(e.target.value);

    else if (e.target.name == 'desc')
      setdesc(e.target.value);
  }


  return (<>

    <div className={styles.container}>
      <h1 className='font-bold text-2xl mb-2'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="fullname" className={styles.formlabel}>Full Name:</label>
          <input type="text" value={fullname} onChange={handleChange} className={styles.input} name='fullname' id="fullname" aria-describedby="emailHelp" placeholder="Enter your Name" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email Address:</label>
          <input type="email" value={email} onChange={handleChange} className={styles.input} name='email' id="email" aria-describedby="emailHelp" placeholder="Enter your Email" required />
          <div id="emailHelp" className={styles.formtext}>
            {/* <small> */}
            We&apos;ll never share your email with anyone else.
            {/* </small> */}
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Phone Number:</label>
          <input type="text" value={phone} onChange={handleChange} className={styles.input} name='phone' id="phone" placeholder="Enter your Phone Number" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>Elaborate your concern:</label>
          <textarea className={styles.input} onChange={handleChange} value={desc} name='desc' placeholder='Write Your Concern Here' id="desc" rows="3" />
        </div>
        <button className="flex text-white bg-red-500 border-0 mb-4 py-1 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded-md">Submit</button>
      </form>
    </div>
  </>
  )
}

export default Contact;