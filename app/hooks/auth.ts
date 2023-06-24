import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import UserService from '../services/user-service';
import useSWR from 'swr';
import { guestRoutes } from '../constants/guest-routes';

export const useAuth = () => {
  const isGuestPath = guestRoutes.includes(usePathname());
  const router = useRouter();

  const {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR('/api/user', () =>
    UserService.getCurrentUser()
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        if (error.response.status !== 409) throw error;
        router.push('/');
      })
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isGuestPath && user && !error) {
      router.push('/');
      return;
    }
    if (!isGuestPath && error) {
      router.push('/auth/login');
      return;
    }
  }, [user, isGuestPath, router, error, isLoading]);

  return {
    user,
    mutate,
  };
};
