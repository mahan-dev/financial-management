import { authOptions } from '@/app/helper/auth/authOption';
import SignInPage from '@/templates/SignInPage';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import React from 'react';

const page = async() => {

    const session = await getServerSession(authOptions);

    if(session) redirect("/dashboard")

    return (
        <div className='flex justify-center'>
            <SignInPage />
        </div>
    );
};

export default page;