import Link from 'next/link';

export default function FirstPost() {  
  return (
    <>
    <h1>First Post!</h1>
    <p>Go to <Link href='/'><a>Home page</a></Link></p>
    </>
  )
}