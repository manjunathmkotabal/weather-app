import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Image from 'next/image'
import Weather from '@/components/Weather'

export default function Home () {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})
  const [error, setError] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  const fetchWeather = (e) => {
    e.preventDefault()
    setWeather({})
    setError('')

    axios
      .get(url)
      .then((response) => {
        setWeather(response.data)
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError('Enter a valid city')
        } else {
          setError('An error occurred. Please try again.')
        }
      })
      .finally(() => {
        setCity('')
      })
  }

  return (
    <div>
      <Head>
        <title>Weather Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/25 z-[1]"></div>

      {/* BG Image */}
      <Image
        src={
          'https://images.unsplash.com/photo-1596627008830-41d373a44a96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
        }
        fill
        className="object-cover"
      />

      {/* Search */}
      <div className="relative flex justify-between items-center max-w-[350px] w-full m-auto pt-4 text-white z-10">
        <form
          onSubmit={fetchWeather}
          className="flex justify-between items-center w-full m-auto bg-transparent border border-gray-300 text-white rounded-xl"
        >
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent  w-[300px] border-none text-white focus:outline-none text-2xl p-3 placeholder:text-white placeholder:opacity-70"
              type="text"
              placeholder="Search City"
            />
          </div>
          <button className="p-4 w-[50px]" onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>

      {/* Error message */}
      {error && (
        <div className="text-red-500 text-center mt-4">{error}</div>
      )}

      {/* Weather */}
      {weather.main && <Weather weather={weather} />}
    </div>
  )
}
