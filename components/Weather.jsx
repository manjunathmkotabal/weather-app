import Image from 'next/image'
import React from 'react'

const Weather = ({ weather }) => {
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] h-[70vh] m-auto p-4 text-gray-300 z-10 '>
        <div className='relative flex justify-center pt-10 items-center'>
            <div className='flex flex-col items-center '>
                <Image
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt='icon'
                    width='100'
                    height='100'
                />
                <p className='text-2xl '>{weather.weather[0].main}</p>
            </div>
            <p className='text-8xl '>{weather.main.temp.toFixed(1)}&#176;</p>
        </div>
        {/* Bottom */}
        <div className='bg-black/50 relative p-8 rounded-2xl'>
            <p className='text-2xl text-center pb-6'>Weather in {weather.name}</p>
            <div className='flex justify-between text-center'>
                <div>
                    <p className='font-bold text-2xl'>{weather.main.feels_like.toFixed(1)}&#176;</p>
                    <p className='text-lg'>Feels Like</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>{weather.main.humidity}%</p>
                    <p className='text-lg'>Humidity</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>{(weather.wind.speed.toFixed(1) * 1.60934).toFixed(2)} KM/H</p>
                    <p className='text-lg'>Winds</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather
