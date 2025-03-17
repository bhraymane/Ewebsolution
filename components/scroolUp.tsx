"use client"
import {useEffect, useState} from 'react'
import { FaChevronUp } from "react-icons/fa";

function scroolUp() {
    const [visible,setVisible]=useState(false)
    
    useEffect(()=>{
        const toggelVisible:()=>void =()=>{
            if(window.scrollY > 300) setVisible(true)
            else setVisible(false)
        }
        window.addEventListener("scroll",toggelVisible)

        return ()=> window.removeEventListener("scroll",toggelVisible)
    },[])

    const scrollTop =()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

  return (
    <div className='fixed bottom-4 right-4 '>
        {visible && 
            <button className='bg-mainColor text-white p-2 rounded-full cursor-pointer hover:scale-110 transition-all  ' onClick={scrollTop}>
                <FaChevronUp />
            </button>
        }
        
    </div>
  )
}

export default scroolUp