import Link from 'next/link';

export default function Home() {
  return (
    <main className='text-center'>
      <h1>Home page</h1>
      <Link
        className='text-blue-600 hover:underline hover:text-blue-700'
        href='/api/auth/signin'
      >
        login
      </Link>
    </main>
  );
}
