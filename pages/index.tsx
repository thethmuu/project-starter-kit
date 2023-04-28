import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <>
      <nav className='shadow'>
        <div className='container flex items-center justify-end gap-4 py-4 mx-auto'>
          {session && status === 'authenticated' ? (
            <>
              <p>{session.user ? session.user.email : null}</p>
              <button
                className='px-4 py-2 text-sm text-white bg-indigo-500 rounded hover:bg-indigo-600 hover:shadow'
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              className='px-4 py-2 text-sm text-white bg-indigo-500 rounded hover:bg-indigo-600 hover:shadow'
              href='/api/auth/signin'
            >
              login
            </Link>
          )}
        </div>
      </nav>
      <main>
        <div className='container px-4 py-6 mx-auto'>
          <h1 className='text-center'>Home page</h1>
        </div>
      </main>
    </>
  );
}
