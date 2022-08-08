import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const bookings = () => {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/mybookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: JSON.parse(localStorage.getItem('connectedUser')).token })
      });

      let res = await a.json();
      setBookings(res.bookings);

      console.log(res);
    }

    if (!localStorage.getItem('connectedUser')) {
      router.push('/');
    }
    else {
      fetchBookings();
    }

  }, []);

  return (
    <div className="min-h-screen flex items-start justify-center py-24 px-4 sm:px-6 lg:px-8">
      {/* <div className='container mx-auto w-full'> */}
        <h1 className='font-semibold justify-center items-center p-8 text-xl'>My Bookings</h1>
      {/* </div> */}
      <div className="container mx-auto">

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #Booking Id
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Email
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Amount
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((item) => {
                      return <tr key={item._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.orderID}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.amount}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <Link href={"/booking?id=" + item._id}><a>Details</a></Link>
                        </td>
                      </tr>
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default bookings;