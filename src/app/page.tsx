"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

const Page = () => {

  const router = useRouter();

  React.useEffect(() => {
    router.push('/qrjump');
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default Page