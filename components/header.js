import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {

  return (
   
      <>
       <Link href="/" className='hover:text-amber-500' passHref>
       <p className='section-title sm:inline text-sm'>{title}</p>
       </Link>
      
      </>
 
  );
}
