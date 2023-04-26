import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

function ToogleTheme() {

    const { setTheme, theme } = useTheme()

    useEffect(() => {
        console.log(theme)
    }, [theme])

    const setDarkTheme = () => {
        setTheme('dark')
    }

    const setLightTheme = () => {
        setTheme('light')
    }

    return (
        <div className='flex gap-2'>
            <Sun onClick={() => setLightTheme()} className='hidden w-5 h-5 cursor-pointer dark:block' />
            <Moon onClick={() => setDarkTheme()} className='w-5 h-5 cursor-pointer dark:hidden ' />
        </div>
    )
}

export default ToogleTheme