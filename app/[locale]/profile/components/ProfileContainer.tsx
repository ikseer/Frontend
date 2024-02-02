import { ReactNode } from 'react';
interface ProfileContainerType {
    children: ReactNode
}
export default function ProfileContainer({ children }: ProfileContainerType) {

    return (
        <article
            className="w-10/12 rounded-lg  mx-auto">
            {children}
        </article>
    );
}