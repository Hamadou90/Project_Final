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
              {/* <h1 className="justify-center items-center text-stone-700  "> Destinations Places here</h1> */}

            </div>
            {Object.keys(places.result).map((item, idx) => {
              return <Link passHref={true} key={idx} href={`/destinations/${places.result[item].title}`}>
                <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-5">
                  <a className="block relative rounded overflow-hidden">
                    {/* <img className="m-auto  h-[40vh] md:h-[46vh] block" src={places.result[item].placeImage} alt='Image of the Destination Here' /> */}
                    <img className="m-auto  h-[40vh] md:h-[40vh] block" src={places.result[item].placeImage} alt='Image of the Destination Here' />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{places[item].category}</h3> */}
                    <h2 className="text-gray-900 title-font text-lg font-medium">{places.result[item].title}</h2>
                    {/* <p className="mt-1">{places.result[item].description}</p> */}



                    {/* <div className="mt-1">
                      {places[item].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                      {places[item].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                      {places[item].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                      {places[item].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                      {places[item].size.includes('XXL') && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                    </div>
                    <div className="mt-1">
                      {places[item].colour.includes('Red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {places[item].colour.includes('Blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {places[item].colour.includes('Black') && <button className="border-2 border-gray-300 ml-1 bg-black-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {places[item].colour.includes('Green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {places[item].colour.includes('Yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {places[item].colour.includes('Purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    </div> */}
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






  // if (connect) {
  //   let places = await connect.query("SELECT * FROM places");
  //   if (places.rowCount > 0) {
  //     console.log(places.rows);

  //   }

  //   return {
  //     props: { places: JSON.parse(JSON.stringify(places)) },
  //   };
  // }





  // let tshirts = {};

  // for (let item of places) {
  //   if (item.title in tshirts) {
  //     if (!tshirts[item.title].colour.includes(item.colour) && item.availableQuantity > 0) {
  //       tshirts[item.title].colour.push(item.colour);
  //     }

  //     if (!tshirts[item.title].size.includes(item.size) && item.availableQuantity > 0) {
  //       tshirts[item.title].size.push(item.size);
  //     }
  //   }
  //   else {
  //     tshirts[item.title] = JSON.parse(JSON.stringify(item));
  //     if (item.availableQuantity > 0) {
  //       tshirts[item.title].colour = [item.colour];
  //       tshirts[item.title].size = [item.size];
  //     }
  //     else{
  //       tshirts[item.title].colour = [];
  //       tshirts[item.title].size = [];
  //     }
  //   }
  // }

  // console.log(places)
  // return {
  //   props: { places: JSON.parse(JSON.stringify(tshirts)) },
  // };
}


export default Destinations;