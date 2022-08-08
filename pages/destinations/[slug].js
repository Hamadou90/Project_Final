import { useRouter } from 'next/router';
import React from 'react'

const Slug = () => {
  const router = useRouter();
  console.log(router.query);
  return (<>
    <div className="min-h-screen flex items-start justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div>slug of Destinations Here</div>
      <div className='justify-center items-center'>The Slug: {router.query.slug} </div>
    </div>
  </>
  )
}

export default Slug;