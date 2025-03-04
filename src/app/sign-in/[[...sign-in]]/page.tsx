import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='h-svh flex items-center justify-center'>
      <SignIn />
    </div>
  )
}