import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className="min-h-screen flex items-start justify-center py-2 px-4 sm:px-6 lg:px-8">
      {/* <p>About Us information here</p>  */}

      <div className={styles.container}>
        <h1 className="text-center font-bold text-2xl mb-6">About Tourist Destination Portal</h1>
        <h2 className='font-bold text-xl m-2'>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quaerat quibusdam enim! Optio ducimus suscipit et voluptas soluta repudiandae facere id deleniti quos dolorem nemo voluptates laboriosam labore similique sapiente enim magni saepe, ad cupiditate. Facilis iste, dolor itaque unde magni impedit debitis blanditiis, voluptatum quibusdam tempora architecto doloremque eius expedita et, deleniti ipsam quia veniam sequi porro! Minus consequuntur adipisci eaque nostrum.
        </p>
        <h2 className='font-bold text-xl m-2'>Services Offered</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo, eum nam similique aliquid quisquam! Dolorum id nemo illo, aperiam voluptatum, a provident ad corrupti maxime recusandae non numquam ipsa at mollitia.
          <p>We offer the following services:</p>
          <ul className='list-disc ml-10'>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
          </ul>
        </p>
        <h2 className='font-bold text-xl m-2'>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis unde minus mollitia magni, recusandae facilis nesciunt necessitatibus aliquid aut porro vero quos ab ex! Placeat laudantium numquam incidunt laborum repellendus non perspiciatis rerum suscipit. Doloremque.
        </p>
      </div>

    </div>
  )
}

export default About;