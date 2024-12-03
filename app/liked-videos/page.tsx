"use client"
import { useSession, signIn, signOut } from 'next-auth/react';

export default function LikedVideos() {
    const { data: session } = useSession();

    if (!session) {
        return <div className="">
            Yoo will need to be signed in to view your favorite videos from YouTube
            <button onClick={() => signIn('google')}>Sign In</button>
        </div>
    }
    return <div className="">
        <h1 className="">
            Welcome , {session.user?.name}, enjoy your videos
        </h1>
        {/* video component here  */}
        <button onClick={() => signOut()} className="">Sign Out</button>

    </div>
}


