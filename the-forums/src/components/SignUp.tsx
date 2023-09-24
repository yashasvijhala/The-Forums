import { Icons } from '@/components/Icons';
import UserAuthForm from '@/components/Userauth';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center p-8 bg-white text-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'>
      <div className='text-center mb-6'>
        <Icons.logo className='h-12 w-12 mx-auto' />
        <h1 className='text-3xl font-bold mt-4'>Sign Up</h1>
        <p className='text-sm max-w-sm mx-auto'>
          By continuing, you are setting up a Forums account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
      <p className='mt-4 text-gray-700 text-sm'>
        Already have an account?{' '}
        <Link href='/sign-in' className='text-blue-500 hover:underline'>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
