import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { Loader2 } from 'lucide-react'

const page = () => {

    const router = useRouter()
    const { provider } = router.query
    const [searchParams] = useSearchParams()
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    console.log(code, state, provider);
    

  return (
    <div className='h-full w-full text-center items-center'>
        <Loader2 className='animate-spin' width={100}/>
        Loggin You In
    </div>
  )
}

export default page