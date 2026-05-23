"use client";

import { Button, Card, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaSignInAlt } from 'react-icons/fa';

import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const router = useRouter();
    
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        
        try {
           
            const { data, error } = await authClient.signIn.email({ 
                email, 
                password 
            });

            
            if (error) {
                toast.error(error.message || "Invalid email or password.");
                return;
            }
      
           
            toast.success("Welcome back to DriveFleet!");
            router.push("/"); 
            router.refresh();
        } 
        catch (error) {
            toast.error("An unexpected authentication error occurred.");
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            
            await authClient.signIn.social({ 
                provider: "google",
                callbackURL: "/" 
            });
        } 
        catch (error) {
            toast.error("Google authentication failed.");
        }
    };

    return (
        <div className="w-full bg-neutral-950 min-h-screen text-white flex flex-col justify-center items-center py-16 px-4">
            <div className="w-full max-w-md space-y-4 mb-6 text-center md:text-left">
                <h1 className="text-2xl font-extrabold tracking-wider uppercase">
                    ACCOUNT <span className="text-orange-500">LOGIN</span>
                </h1>
                <p className="text-xs text-neutral-400">
                    Verify your authorization credentials to gain control of your fleet reservations.
                </p>
            </div>

            <Card className="bg-neutral-900 border border-neutral-800 w-full max-w-md rounded-xl p-8 shadow-2xl">
                <Form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                    <TextField 
                        name="email" 
                        type="email" 
                        isRequired 
                        className="w-full"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address format specifier";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Email Address</Label>
                        <Input placeholder="name@example.com" className="bg-neutral-950 text-white rounded-lg mt-1" />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    <TextField name="password" type="password" isRequired className="w-full">
                        <Label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Password</Label>
                        <Input placeholder="••••••••" className="bg-neutral-950 text-white rounded-lg mt-1" />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-widest py-5 rounded-lg transition-colors mt-2 h-11">
                        <FaSignInAlt className="inline mr-1" /> Sign In
                    </Button>
                </Form>

                <div className="relative flex py-4 items-center">
                    <div className="flex-grow border-t border-neutral-800"></div>
                    <span className="flex-shrink mx-4 text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Or Connect Via</span>
                    <div className="flex-grow border-t border-neutral-800"></div>
                </div>

                <Button onClick={handleGoogleSignIn} className="w-full bg-neutral-950 hover:bg-neutral-900 text-white border border-neutral-800 font-bold text-xs uppercase tracking-widest py-5 rounded-lg transition-colors h-11">
                    <FaGoogle className="text-orange-500 inline mr-1" /> Continue With Google
                </Button>

                <p className="text-xs text-neutral-500 text-center mt-6">
                    New to the fleet system?{" "}
                    <Link href="/register" className="text-orange-500 hover:underline font-semibold">
                        Register here
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default LoginPage;