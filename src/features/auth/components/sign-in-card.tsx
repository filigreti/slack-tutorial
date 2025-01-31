import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { SignInFlow } from '../types'

interface SignInCardProps {
    setState: (state: SignInFlow) => void
}


const SignInCard = ({ setState }: SignInCardProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Card className='w-full h-full p-8'>
            <CardHeader className='px-0 pt-0'>
                <CardTitle>
                    Login to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
            <CardContent className='  space-y-5 px-0 pb-0'>
                <form className='space-y-2.5'>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        type='email'
                        required />
                    <Input
                        value={password}
                        placeholder='Password'
                        type='password'
                        required
                        onChange={(e) => setPassword(e.target.value)} />
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
                    Don&apos;t have an account <span onClick={() => setState('signUp')} className='text-sky-700 hover:underline cursor-pointer'>
                        Sign up
                    </span>
                </p>
            </CardContent>

        </Card>
    )
}

export default SignInCard 