"use client"
import { useSession, signIn, signOut } from 'next-auth/react';

export default function LikedVideos(){
    const { data: session } = useSession();

    if (!session) {
       
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <p>You will need to be signed in to view your favorite videos from YouTube</p>
                    <div className="flex justify-center">
                        <button onClick={() => signIn('google')} className='border-white p-2 border-2'>Sign In</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="text-center">
            <h1>Welcome, {session.user?.name}, enjoy your videos</h1>
            {/* video component here */}
            <button onClick={() => signOut()} className="mt-4 p-2 border-2">Sign Out</button>
        </div>
    );
}
