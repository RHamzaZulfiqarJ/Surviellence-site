"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();

  React.useEffect(() => {
    router.push('/qrjump');
  }, []);

  return (
    <div></div>
  )
}

export default page