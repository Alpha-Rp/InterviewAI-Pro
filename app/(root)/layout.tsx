import Link from 'next/link'
import { ReactNode } from 'react'
import Image from 'next/image'
import { getCurrentUser, signOut } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout = async ({ children }: {children: ReactNode}) => {
  const user = await getCurrentUser();

  if (!user) redirect('/sign-in');

  async function handleSignOut() {
    'use server';
    await signOut();
    redirect('/sign-in');
  }

  return (
    <div className='root-layout'>
      <nav className="flex justify-between items-center w-full">
        <Link href='/' className = "flex items-center gap-2 ">
          <Image src='/logo.svg' alt='logo' width={38} height={32}/>
          <h2 className='text-primary-100'>InterviewAI Pro</h2>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image 
              src='/user-avatar.png' 
              alt='user' 
              width={32} 
              height={32}
              className="rounded-full"
            />
            <span className="text-white-100">{user.name}</span>
          </div>
          <form action={handleSignOut}>
            <button 
              type="submit"
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              Logout
            </button>
          </form>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout