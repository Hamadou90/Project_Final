import Link from 'next/link';
import React, { useState } from 'react';
// import connect from '../middleware/connection_To_DB';

const Destinations = ({ places }) => {
  // const [places, setPlaces] = useState('');
  console.log(places.result);
  // let places = places.result;
  return (
    // console.log(places.result.placeImage);
    <div>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center mx-5">
            <div>
            </div>
            {Object.keys(places.result).map((item, idx) => {
              return <Link passHref={true} key={idx} href={`/destinations/${places.result[item].title}`}>
                <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-5">
                  <a className="block relative rounded overflow-hidden">
                    <img className="m-auto  h-[40vh] md:h-[40vh] block" src={places.result[item].placeImage} alt='Image of the Destination Here' />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h2 className="text-gray-900 title-font text-lg font-medium">{places.result[item].title}</h2>
                  </div>
                  <div>
                    <button className="flex text-white bg-red-500 border-0 mb-4 py-1 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded-md">Read More ...</button>
                  </div>
                </div>
              </Link>
            })}

          </div>
        </div>

      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {

    let allPlaces = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getAllDestinations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    let response = await allPlaces.json();
    console.log(response);

    return {
      props: { places: JSON.parse(JSON.stringify(response)) },
    };

  } catch (error) {
    console.log("Sorry Error occured Here !")
    return
  }
}


export default Destinations;