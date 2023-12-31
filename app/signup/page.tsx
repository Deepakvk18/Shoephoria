import SignUpForm from "@/components/SignUpForm"

const SignUp = async () => {

  return (
    <div className='flex w-full'>
        <div className='flex flex-col w-full bg-zinc-200 dark:bg-zinc-800 md:w-1/2 lg:w-1/3 justify-center items-center min-h-screen'>
            <div className="px-28 w-full">
              <h2 className="mt-10 mb-5 w-full py-2 border-b-2 border-black dark:border-white font-titillium_web text-2xl font-semibold text-center">
                Register
              </h2>
            </div>
            <SignUpForm />
        </div>
        <div className='hidden md:flex md:w-1/2 lg:2/3'>

        </div>
    </div>
  )
}

export default SignUp