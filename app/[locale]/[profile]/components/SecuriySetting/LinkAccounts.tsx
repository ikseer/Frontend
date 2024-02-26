// Main
import React from 'react';


// Components
import Account from './Account';


// Images
import Google from '@/images/auth/Google.svg';
import Facebook from '@/images/auth/Facebook.svg';
import Apple from '@/images/auth/apple.svg';



export default function LinkAccounts() {
    return (
        <div>
            <div className='mb-6'>
                <h1>Link Accounts</h1>
                <p className="text-gray-400">Linked accounts will help in fast log in and better personalization.</p>
            </div>
            <div>
                <Account
                    image={Google}
                    name="Google"
                    buttonText="Link Google"
                />
                <Account
                    image={Facebook}
                    name="Facebook"
                    buttonText="Link Facebook"
                />
                <Account
                    image={Apple}
                    name="Apple"
                    buttonText="Link Apple"
                />

            </div>

        </div>
    );
}