import * as React from 'react'
import PhoneNumberValidation from '@/components/PhoneNumber/PhoneNumber'


export default function RegisterSecondStep() {
    return (
        <section >
            <div>
                <h1 className="text-4xl dark:text-white">Phone number</h1>
                <p>Phone number is required for main features in the app</p>
            </div>
            <div>

            </div>
            <div className="flex jstify-center 	text-decoration-color">
                <PhoneNumberValidation />
            </div>

        </section>
    )
}