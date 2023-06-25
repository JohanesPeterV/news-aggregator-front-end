'use client';
import { useAuth } from '@/app/hooks/auth';
import AuthService from '@/app/services/auth-service';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function Navbar() {
  const { mutate } = useAuth();
  const router = useRouter();
  async function logout() {
    await toast.promise(AuthService.logout(), {
      loading: 'Logging Out',
      error: 'Logout failed',
      success: () => {
        mutate();
        router.push('/auth/login');
        return 'Logout Success';
      },
    });
  }
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/for-you'>For You</a>
            </li>
          </ul>
        </div>
        <a className='text-xl normal-case btn btn-ghost'>News Aggregator</a>
      </div>
      <div className='hidden navbar-center lg:flex'>
        <ul className='px-1 menu menu-horizontal'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/for-you'>For You</a>
          </li>
        </ul>
      </div>
      <div className='pr-6 navbar-end'>
        <button onClick={logout} className='text-error text-md'>
          Log out
        </button>
      </div>
    </div>
  );
}
