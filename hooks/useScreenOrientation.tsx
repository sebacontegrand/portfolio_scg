'use client'
import { useEffect, useState } from 'react'

export const useScreenOrientation = () => {
  const getOrientation = () => {
    return window.screen?.orientation.type
  }

  const [orientation, setOrientation] = useState(getOrientation())

  const updateOrientation = () => {
    setOrientation(getOrientation())
  }

  useEffect(() => {
    window.addEventListener('orientationchange', updateOrientation)

    return () => {
      window.removeEventListener('orientationchange', updateOrientation)
    }
  }, [])

  return orientation
}
