import { Icons } from '@/components/Icons';
import UserAuthForm from '@/components/Userauth';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center p-8 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'>
      <div className='text-center mb-6'>
        <Icons.logo className='h-12 w-12' />
        <h1 className='text-3xl font-bold mt-4'>Welcome back</h1>
        <p className='text-gray-600 text-sm'>
          Sign in to continue to The Forums.
        </p>
      </div>
      <UserAuthForm />
      <p className='mt-4 text-gray-700 text-sm'>
        New to The Forums?{' '}
        <Link href='/sign-up' className='text-blue-500 hover:underline'>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
