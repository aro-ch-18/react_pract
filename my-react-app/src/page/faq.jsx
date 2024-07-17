import React from 'react'
import Items from '../components/FaqItems'

const FAQ = () => {
    const faqs = [
        {
            question: "How many bones does a cat have?",
            answer: "A cat has 230 bones - 6 more than a human",
        },
        {
            question: "How much do cats sleep?",
            answer: "The average cat sleeps 12-16 hours per day",
        },
        {
            question: "How long do cats live",
            answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
        },
    ]
  return (
    <div className='w-[580px] h-auto bg-white flex flex-col p-5 m-5 border rounded-md '>
        <h1 className='text-center font-serif text-3xl'>FAQ</h1>
        {
        
        faqs.map((value,index)=>(

            <Items key={index} data={value}></Items>
        ))
        }
    </div>
  )
}

export default FAQ