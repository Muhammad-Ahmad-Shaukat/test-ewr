"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Team() {
    const [isPatternA, setIsPatternA] = useState(true) // target pattern (drives timers)
    const [currentSet, setCurrentSet] = useState(0)    // target set (drives timers)
    // Stable display states used for rendering to avoid blink during switch
    const [displayPatternA, setDisplayPatternA] = useState(true)
    const [displaySet, setDisplaySet] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [isNewImage, setIsNewImage] = useState(false)
    const hoverTimeoutRef = useRef(null)
    const intervalRef = useRef(null)

    const team = [
        {
            image: '/asma.png',
            name: 'Asma'
        },
        {
            image: '/aman.png',
            name: 'Aman'
        },
        {
            image: '/sajid.png',
            name: 'Sajid'
        },
        {
            image: '/Salman.png',
            name: 'Salman'
        },
        {
            image: '/Faraz.png',
            name: 'Faraz'
        },
        {
            image: '/ahsan.png',
            name: 'Ahsan'
        },
        {
            image: '/Zoya.png',
            name: 'Zoya'
        },
        {
            image: '/Wasay.png',
            name: 'Wasay'
        },
        {
            image: '/Alia.png',
            name: 'Alia'
        },
        {
            image: '/Usaman.png',
            name: 'Usman'
        },
         {
            image: '/Hafsa.png',
            name: 'Hafsa'
        },
            {
            image: '/Mahnoor.png',
            name: 'Mahnoor'
        },
    ];

    // Pattern A: 0 1 0 / 1 0 1 / 0 1 0 (shows 4 images) - Initial load
    // Pattern B: 1 0 1 / 0 1 0 / 1 0 1 (shows 5 images) - On hover
    const getPatternPositions = (pattern) => {
        if (pattern) {
            // Pattern A - shows 4 images (initial load)
            return [0, 1, 0, 1, 0, 1, 0, 1, 0]
        } else {
            // Pattern B - shows 5 images (on hover)
            return [1, 0, 1, 0, 1, 0, 1, 0, 1]
        }
    }

    // Get sequential images based on current set (5 images per set)
    const getSequentialImages = (setNumber) => {
        const startIndex = setNumber * 5
        return team.slice(startIndex, startIndex + 5)
    }

    // Handle hover start
    const handleMouseEnter = () => {
        const startTime = new Date().toLocaleTimeString()
        console.log(`🖱️ Hover started at ${startTime} - starting animation immediately`)
        setIsHovered(true)
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current)
        }
        
        // Start first transition after 1 second, then every 4 seconds
        const cycleStartTime = new Date().toLocaleTimeString()
        console.log(`⏰ Starting animation cycle immediately at ${cycleStartTime}`)
        
        // First transition after 1 second
        hoverTimeoutRef.current = setTimeout(() => {
            const transitionStartTime = new Date().toLocaleTimeString()
            console.log(`🔄 Starting image transition at ${transitionStartTime}...`)
            setIsTransitioning(true)
            setIsNewImage(true)
            
                // After transition completes, switch pattern and move to next set
            setTimeout(() => {
                const transitionEndTime = new Date().toLocaleTimeString()
                console.log(`✅ Transition complete at ${transitionEndTime} - switching to next set`)
                // First, update display states used for rendering
                setDisplayPatternA(prev => !prev)
                setDisplaySet(prev => (prev + 1) % Math.ceil(team.length / 5))
                // Keep target states in sync
                setIsPatternA(prev => !prev)
                setCurrentSet(prev => (prev + 1) % Math.ceil(team.length / 5))
                setIsTransitioning(false)
                
                // Reset new image flag after a short delay
                    setTimeout(() => {
                    setIsNewImage(false)
                    }, 650)
                
                // Start regular 4-second intervals after first transition
                intervalRef.current = setInterval(() => {
                    const regularTransitionStartTime = new Date().toLocaleTimeString()
                    console.log(`🔄 Starting image transition at ${regularTransitionStartTime}...`)
                    setIsTransitioning(true)
                    setIsNewImage(true)
                    
                    // After transition completes, switch pattern and move to next set
                    setTimeout(() => {
                        const regularTransitionEndTime = new Date().toLocaleTimeString()
                        console.log(`✅ Transition complete at ${regularTransitionEndTime} - switching to next set`)
                        // First, update display states used for rendering
                        setDisplayPatternA(prev => !prev)
                        setDisplaySet(prev => (prev + 1) % Math.ceil(team.length / 5))
                        // Keep target states in sync
                        setIsPatternA(prev => !prev)
                        setCurrentSet(prev => (prev + 1) % Math.ceil(team.length / 5))
                        setIsTransitioning(false)
                        
                        // Reset new image flag after a short delay
                        setTimeout(() => {
                            setIsNewImage(false)
                        }, 650)
                    }, 1500) // Transition duration
                }, 4000) // Images stay visible for 4 seconds
            }, 1500) // Transition duration
        }, 1000) // First transition after 1 second
    }

    // Handle hover end
    const handleMouseLeave = () => {
        const endTime = new Date().toLocaleTimeString()
        console.log(`🚫 Hover ended at ${endTime} - stopping all animations`)
        setIsHovered(false)
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current)
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        // Stop any ongoing transitions
        setIsTransitioning(false)
        setIsNewImage(false)
    }

    // Cleanup timeouts on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current)
            }
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    const patternPositions = getPatternPositions(displayPatternA)
    const currentImages = getSequentialImages(displaySet)
    // Precompute next positions and images for crossfade (based on display state)
    const nextPatternPositions = getPatternPositions(!displayPatternA)
    const nextImages = getSequentialImages((displaySet + 1) % Math.ceil(team.length / 5))
    // Build grid mappings so we can render current and next layers per tile
    const currentGridMembers = Array(9).fill(null)
    const nextGridMembers = Array(9).fill(null)
    {
        let curIdx = 0
        for (let i = 0; i < 9; i++) {
            if (patternPositions[i] === 1 && currentImages[curIdx]) {
                currentGridMembers[i] = currentImages[curIdx]
                curIdx++
            }
        }
    }
    {
        let nxtIdx = 0
        for (let i = 0; i < 9; i++) {
            if (nextPatternPositions[i] === 1 && nextImages[nxtIdx]) {
                nextGridMembers[i] = nextImages[nxtIdx]
                nxtIdx++
            }
        }
    }

    return (
        <div 
            className='team w-[100%] max-w-[400px] rounded-[16px] shadow-lg lg:px-[29px] px-[15px] md:pt-[29px] pt-[25px] lg:pb-[40px] pb-[25px]'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='text-[22px] leading-[114%] text-[#131316] mb-[13px] font-medium'>Meet Our Team</h2>
            <p className='text-[16px] leading-[145%] text-[#131316] md:mb-[91px] mb-[50px] font-normal'>The people who bring our culture, speed, and expertise to life.</p>
            
            <div className='w-[100%] max-w-[100%]'>
                <div className='grid grid-cols-3 gap-4 team-animi'>
                    {Array.from({ length: 9 }).map((_, index) => {
                        const teamMember = currentGridMembers[index]
                        const nextMember = nextGridMembers[index]
                        const hasCurrent = !!teamMember
                        const hasNext = !!nextMember
                        return (
                            <div 
                                key={index}
                                className={`
                                    relative border border-[#C3C3C3]
                                    flex items-center justify-center overflow-hidden
                                    transition-all duration-1000 ease-in-out
                                `}
                                style={{ 
                                    width: '92px',
                                    height: '95px',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    transform: 'scale(1)'
                                }}
                            >
                                {/* Crossfade layers */}
                                <div className="relative w-full h-full">
                                    {/* Current layer */}
                                    {hasCurrent ? (
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                // Only fade current out if a next image exists; otherwise keep it to avoid blink
                                                opacity: isTransitioning ? (hasNext ? 0 : 1) : 1,
                                                transition: 'opacity 600ms ease-in-out'
                                            }}
                                        >
                                            <Image
                                                src={teamMember.image}
                                                alt={teamMember.name}
                                                fill
                                                className="object-cover"
                                                style={{ borderRadius: '5px' }}
                                                sizes="92px"
                                                quality={100}
                                                
                                            />
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0" style={{ opacity: 0 }}></div>
                                    )}

                                    {/* Next layer */}
                                    {hasNext ? (
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                // Only fade next in if a current image exists; otherwise avoid sudden pop
                                                opacity: isTransitioning ? (hasCurrent ? 1 : 0) : 0,
                                                transition: 'opacity 600ms ease-in-out'
                                            }}
                                        >
                                            <Image
                                                src={nextMember.image}
                                                alt={nextMember.name}
                                                fill
                                                className="object-cover"
                                                style={{ borderRadius: '5px' }}
                                                sizes="92px"
                                                quality={100}
                                                
                                            />
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0" style={{ opacity: 0 }}></div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
