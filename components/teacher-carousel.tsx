"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"

interface TeacherCarouselProps {
  children: React.ReactNode
  id: string
  buttonPrevId: string
  buttonNextId: string
}

export default function TeacherCarousel({ children, id, buttonPrevId, buttonNextId }: TeacherCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  // Calculate how many items to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1)
      } else if (window.innerWidth < 768) {
        setItemsToShow(2)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3)
      } else {
        setItemsToShow(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const updateScrollPosition = () => {
      setScrollPosition(carousel.scrollLeft)
      setMaxScroll(carousel.scrollWidth - carousel.clientWidth)
    }

    updateScrollPosition()
    carousel.addEventListener("scroll", updateScrollPosition)

    const resizeObserver = new ResizeObserver(updateScrollPosition)
    resizeObserver.observe(carousel)

    return () => {
      carousel.removeEventListener("scroll", updateScrollPosition)
      resizeObserver.disconnect()
    }
  }, [children])

  useEffect(() => {
    const handlePrev = () => {
      if (!carouselRef.current) return

      const itemWidth = carouselRef.current.clientWidth / itemsToShow
      const newPosition = Math.max(0, scrollPosition - itemWidth)

      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
    }

    const handleNext = () => {
      if (!carouselRef.current) return

      const itemWidth = carouselRef.current.clientWidth / itemsToShow
      const newPosition = Math.min(maxScroll, scrollPosition + itemWidth)

      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      })
    }

    const prevButton = document.getElementById(buttonPrevId)
    const nextButton = document.getElementById(buttonNextId)

    prevButton?.addEventListener("click", handlePrev)
    nextButton?.addEventListener("click", handleNext)

    return () => {
      prevButton?.removeEventListener("click", handlePrev)
      nextButton?.removeEventListener("click", handleNext)
    }
  }, [buttonPrevId, buttonNextId, scrollPosition, maxScroll, itemsToShow])

  // Convert children to array to manipulate
  const childrenArray = React.Children.toArray(children)

  return (
    <div
      id={id}
      ref={carouselRef}
      className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className="flex-none snap-start"
          style={{
            width: `calc(100% / ${itemsToShow})`,
            minWidth: "250px",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

