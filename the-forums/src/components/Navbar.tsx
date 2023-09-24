import Link from 'next/link';
import { Icons } from './Icons';
import { buttonVariants } from './ui/Button';
import { getAuthSession } from '@/lib/auth';
import { UserAccountNav } from './UserAccountNav';

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className='fixed top-0 inset-x-0 bg-white border-b border-gray-300 z-10 py-2 shadow-md'>
      <div className='container mx-auto flex items-center justify-between gap-4 px-4'>
        <Link href='/' className='flex gap-2 items-center'>
          <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='text-gray-700 text-sm font-medium md:block'>The Forums</p>
        </Link>
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
