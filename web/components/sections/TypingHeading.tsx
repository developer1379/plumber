'use client'

import { useState, useEffect } from 'react'

export function TypingHeading() {
  const [mounted, setMounted] = useState(false)
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')

  useEffect(() => {
    setMounted(true)
    
    const fullText1 = 'Dorset plumbing and'
    const fullText2 = 'gas heating, '
    const fullText3 = 'done properly.'
    
    let index1 = 0
    let index2 = 0
    let index3 = 0
    const speed = 25 // 25ms per character for a swift, smooth typing cadence

    const type1 = setInterval(() => {
      if (index1 < fullText1.length) {
        setText1(fullText1.substring(0, index1 + 1))
        index1++
      } else {
        clearInterval(type1)
        const type2 = setInterval(() => {
          if (index2 < fullText2.length) {
            setText2(fullText2.substring(0, index2 + 1))
            index2++
          } else {
            clearInterval(type2)
            const type3 = setInterval(() => {
              if (index3 < fullText3.length) {
                setText3(fullText3.substring(0, index3 + 1))
                index3++
              } else {
                clearInterval(type3)
              }
            }, speed)
          }
        }, speed)
      }
    }, speed)

    return () => {
      clearInterval(type1)
    }
  }, [])

  return (
    <h1 className="font-sans text-[44px] leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[62px] font-black min-h-[100px] md:min-h-[120px] lg:min-h-[148px]">
      {!mounted ? (
        <>
          <span className="block pb-1">Dorset plumbing and</span>
          <span className="block pb-1">gas heating, <span className="text-[#ff6b6b] font-black">done properly.</span></span>
        </>
      ) : (
        <>
          <span className="block pb-1">
            {text1}
            {text1.length < 'Dorset plumbing and'.length && (
              <span className="inline-block w-[3px] h-[34px] md:h-[40px] lg:h-[48px] bg-[#ff6b6b] ml-1.5 animate-pulse align-middle" />
            )}
          </span>
          <span className="block pb-1">
            {text2}
            <span className="text-[#ff6b6b] font-black">{text3}</span>
            {text1.length === 'Dorset plumbing and'.length && text3.length < 'done properly.'.length && (
              <span className="inline-block w-[3px] h-[34px] md:h-[40px] lg:h-[48px] bg-[#ff6b6b] ml-1.5 animate-pulse align-middle" />
            )}
          </span>
        </>
      )}
    </h1>
  )
}
