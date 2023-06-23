'use client';

import React, { FormEvent, useState } from 'react';
import SimpleParticle from '@/components/simple-particle';
import Card from '@/components/common/card';
import Input from '@/components/common/input';
import { useAuth } from '@/app/hooks/auth';
import AuthService from '@/app/services/auth-service';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Register() {
  const { mutate } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();
    const registerParams = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    };

    await toast.promise(AuthService.register(registerParams), {
      loading: 'Logging in',
      error: (e) => {
        if (e.response.data.message) {
          return e.response.data.message;
        }
        return 'Register Error';
      },
      success: () => {
        mutate();
        return 'Register Success';
      },
    });
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen register-bg '>
      <div className='absolute z-10 w-full h-screen'>
        <SimpleParticle />
      </div>
      <Card id='register-card' className='z-20 w-2/3 md:w-96'>
        <form className='grid grid-cols-1 gap-4' onSubmit={handleRegister}>
          <div className='mb-3 card-title'>News Aggregator</div>
          <Input
            id='name'
            type='text'
            name='name'
            placeholder='Name'
            className='mt-2'
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Input
            id='confirm-password'
            name='confirm-password'
            type='password'
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type='submit' className='mt-2 btn btn-primary'>
            Register
          </button>
        </form>
      </Card>
      <Card id='register-card' className='z-20 w-2/3 mt-4 md:w-96'>
        Already have an account? register{' '}
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
