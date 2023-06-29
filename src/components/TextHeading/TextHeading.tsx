import React from 'react'
interface ITextHeading {
    content: string,
    size?: 'xs' | 'sm' | 'md' | 'l'
    textAlignment?: 'start' | 'center' | 'end'
}

const TextHeading = ({ content, size, textAlignment }: ITextHeading) => {
    return (
        <h1 className={`text-[30px] text-[#313131] font-extrabold text-${textAlignment ?? 'center'} mb-[1em]`}>{content}</h1>

    )
}

export default TextHeading
