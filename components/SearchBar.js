import { useRouter } from 'next/router'
import { useState } from 'react'
import IconSearch from './icons/IconSearch'

export default function SearchBar({
  placeholder = 'Search for movies or TV series',
  onChange,
  value,
}) {
  const router = useRouter()
  
  return (
    <>
      <IconSearch className='h-6 w-6 md:h-8 md:w-8' />
      <input
        className='md:heading-md md:placeholder:heading-md mx-4 w-full rounded   bg-app-dark-blue_ pb-[8px] text-base font-light caret-app-red placeholder:text-base placeholder:text-app-placeholder  focus:outline-none'
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
     
    </>
  )
}
