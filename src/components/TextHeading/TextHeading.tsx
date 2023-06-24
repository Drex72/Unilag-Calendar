import React from 'react'

const TextHeading = ({ content }: { content: string }) => {
    return (
        <h1 className='text-[30px] text-[#313131] font-extrabold text-center mb-[1em]'>{content}</h1>

    )
}

export default TextHeading
