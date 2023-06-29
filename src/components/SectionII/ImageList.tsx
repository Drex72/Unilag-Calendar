import React from 'react'

const ImageList = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <div className='flex flex-wrap items-start gap-[1rem] '>
            {children}
        </div>
    )
}

export default ImageList

export const SingleImageItem = ({ image, content }: { image?: string, content: JSX.Element | string }) => {
    return (
        <div className='flex flex-col items-start w-[300px] h-[450px] '>
            <div className="image_container"></div>
            <p className='w-[80%]'>

            {content}
            </p>
        </div>
    )
}