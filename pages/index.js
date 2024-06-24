import Head from 'next/head'
import Collection from '../components/Collection'
import SearchBar from '../components/SearchBar'
import { allListFunc } from '../lib/tmdb'
import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import { useDebounce } from "../hooks/useDebounce";


export default function Home() {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('app');
  const [querys, setQuerys] = useState('')

  const debouncedValue = useDebounce(query, 500);
  const router = useRouter();



  return (
    <>
      <Head>
        <title>Home | Entertainment App</title>
      </Head>
      <div className="container mx-auto p-4">
      <h1 className="title">Lorem Ipsum</h1>
      <p className="description"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
      <div className="searchbar">
        <SearchBar
          text=""
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
        />
      </div>

   
    <div className="relative right-0">
      <div className="w-3/3">
        <ul
          className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-app"
          data-tabs="tabs"
          role="list"
        >
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${activeTab === 'app' ? 'active' : ''}`}
              data-tab-target="#app"
              role="tab"
              aria-selected={activeTab === 'app'}
              aria-controls="app"
              onClick={() => setActiveTab('app')}
            >
              <span className="ml-1">All</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${activeTab === 'message' ? 'active' : ''}`}
              data-tab-target="#message"
              role="tab"
              aria-selected={activeTab === 'message'}
              aria-controls="message"
              onClick={() => setActiveTab('message')}
            >
              <span className="ml-1">Movies</span>
            </a>
          </li>
          <li className="z-30 flex-auto text-center">
            <a
              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${activeTab === 'settings' ? 'active' : ''}`}
              data-tab-target="#settings"
              role="tab"
              aria-selected={activeTab === 'settings'}
              aria-controls="settings"
              onClick={() => setActiveTab('settings')}
            >
              <span className="ml-1">Tv Show</span>
            </a>
          </li>
        </ul>
      </div>
      <div data-tab-content="" className="p-1">
        <div className={`tab-pane ${activeTab === 'app' ? 'block opacity-100' : 'hidden opacity-0'}`} id="app" role="tabpanel">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            <div className="top">
              <span className="ml-2">All</span><tag>({querys?.Search?.length})</tag>
            </div>
            <Collection setQuerys={setQuerys}
              endpoint={allListFunc(!query ? "dark" : debouncedValue, "")}
            />
          </p>
        </div>
        <div className={`tab-pane ${activeTab === 'message' ? 'block opacity-100' : 'hidden opacity-0'}`} id="message" role="tabpanel">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            <div className="top">
              <span className="ml-2">Movies</span><tag>({querys?.Search?.length})</tag>
            </div>
            <Collection setQuerys={setQuerys}
              endpoint={allListFunc(!query ? "Batman" : debouncedValue, "movie")}
            />
          </p>
        </div>
        <div className={`tab-pane ${activeTab === 'settings' ? 'block opacity-100' : 'hidden opacity-0'}`} id="settings" role="tabpanel">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            <div className="top">
              <span className="ml-2">Tv</span><tag>({querys?.Search?.length})</tag>
            </div>
            <Collection setQuerys={setQuerys}
              endpoint={allListFunc(!query ? "dark" : debouncedValue, "series")}
            />
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
