'use client';
import React, { FormEvent, useState } from 'react';
import BubbleParticle from '@/components/bubble-particle';
import Card from '@/components/common/card';
import Input from '@/components/common/input';
import { useAuth } from '@/app/hooks/auth';
import AuthService from '@/app/services/auth-service';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { mutate } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    const loginParams = {
      email: email,
      password: password,
    };

    await toast.promise(AuthService.login(loginParams), {
      loading: 'Logging in',
      error: (e) => {
        if (e.response.data.message) {
          return e.response.data.message;
        }
        return 'Login Error';
      },

      success: () => {
        mutate();
        return 'Login Success';
      },
    });
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen login-bg '>
      <div className='absolute z-10 w-full h-screen'>
        <BubbleParticle />
      </div>
      <Card id='login-card' className='z-20 w-2/3 md:w-96'>
        <form className='grid grid-cols-1 gap-4' onSubmit={handleLogin}>
          <div className='mb-3 card-title'>News Aggregator</div>
          <Input
            id='email'
            type='email'
            name='email'
            placeholder='email'
            className='mt-2'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type='submit' className='mt-2 btn btn-primary'>
            Login
          </button>
        </form>
      </Card>

      <Card id='login-card' className='z-20 w-2/3 mt-4 md:w-96'>
        Don&apos;t have an account? Register{' '}
        <a
          className='text-primary hover:text-primary-focus'
          href='/auth/register'
        >
          here
        </a>
      </Card>
    </div>
  );
}
