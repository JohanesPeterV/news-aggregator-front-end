import { FunctionComponent, HTMLAttributes } from 'react';
import BaseLayout from './base-layout';
import Navbar from '../structures/navbar';

const AuthLayout: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => (
  <BaseLayout>
    <Navbar />
    {children}
  </BaseLayout>
);

export default AuthLayout;
