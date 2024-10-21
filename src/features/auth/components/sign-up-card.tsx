import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { SignInFlow } from '../types'

interface SignUpCardProps {
    setState: (state: SignInFlow) => void
}


const SignUpCard = ({ setState }: SignUpCardProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <Card className='w-full h-full p-8'>
            <CardHeader className='px-0 pt-0'>
                <CardTitle>
                    Sign Up to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
            <CardContent className='  space-y-5 px-0 pb-0'>
                <form className='space-y-2.5'>
                    <Input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' type='email' required />
                    <Input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' type='password' required />
                    <Input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder='Confirm Password' type='password' required />
                    <Button size='lg' type='submit' className='w-full'>
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button size='lg' disabled={false} variant="outline" className='w-full relative'>
                        <FcGoogle className='size-5 absolute left-2.5' />
                        Continue with Google
                    </Button>
                    <Button size='lg' disabled={false} variant="outline" className='w-full relative'>
                        <FaGithub className='size-5 absolute left-2.5' />
                        Continue with Github
                    </Button>
                </div>
                <p className='text-xs text-muted-foreground'>
                    Already have an account <span onClick={() => setState('signIn')} className='text-sky-700 hover:underline cursor-pointer'>
                        Sign in
                    </span>
                </p>
            </CardContent>

        </Card>
    )
}

export default SignUpCard 