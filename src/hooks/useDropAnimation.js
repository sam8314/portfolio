import { useEffect, useRef } from 'react'

/**
 * Custom hook to apply drop-in animation to a component
 * @param {number} delay - Optional delay in milliseconds before animation starts
 * @returns {object} - ref to attach to the element you want to animate
 */
export const useDropAnimation = (delay = 0) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set initial state
    element.classList.add('drop-in-init')

    // Trigger animation after a brief delay
    const timer = setTimeout(() => {
      element.classList.remove('drop-in-init')
      element.classList.add('drop-in')
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return elementRef
}
