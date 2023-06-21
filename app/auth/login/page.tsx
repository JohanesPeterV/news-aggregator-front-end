// import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import Button from '../../components/button';
// import Card from '../../components/card';
// import Input from '../../components/input';
// import LoginParticleBackground from '../../components/login-particle-background';
// import useUser from '../../lib/use-user';
// import AuthService from '../../services/auth-service';
'use client';

import React from "react";
import SimpleParticle from "@/components/simple-particle";
import Card from "@/components/common/card";
import Button from "@/components/common/button";
import Input from "@/components/common/input";

export default function Login() {

    return (
      <div className="flex items-center justify-center h-screen login-bg ">
        <div className="absolute z-10 w-full h-full">
          <SimpleParticle/>
        </div>
        <Card
          id="login-card"
          className="z-20 pt-0 border-none shadow-md w-80 backdrop-blur-sm hover:shadow-xl"
        >
          <form className="grid grid-cols-1 gap-4">
            <Input
              id="username"
              type="text"
              placeholder="Username"
              className="mt-2"
              required
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              required
            />
            <Button
              type="submit"
              className={"hover:bg-sky-700 bg-sky-600 text-white"}
            >
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  
}
