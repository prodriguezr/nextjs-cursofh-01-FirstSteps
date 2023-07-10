import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex flex-col w-full min-h-screen bg-gray-200 text-slate-500'>
      <span className='flex items-center justify-center flex-grow text-5xl'>
        Hello, World!
      </span>
      <Link className='flex items-center justify-center mb-6' href='/about'>
        About
      </Link>
    </main>
  );
}
