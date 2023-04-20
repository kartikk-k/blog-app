import { PartyPopper, PlusCircle } from 'lucide-react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { Comment, Post } from '../../typings'

const inputClassname = "outline-none w-full px-2 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-transparent"

interface Props {
    id: string
    comments?: Array<Comment>
}

function Comments({ id, comments }: Props) {

    const [isNewComment, setIsNewComment] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [comment, setComment] = useState<string>('')

    const [isValid, setIsValid] = useState<boolean>(false)


    useEffect(() => {
        if (name.trim() && email.trim() && comment.trim()) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [name, email, comment])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true)
        e.preventDefault()

        if (isValid) {
            postComment()
        }
    }

    const postComment = async () => {
        let data = {
            _id: id,
            name: name,
            email: email,
            comment: comment
        }
        await fetch('/api/post-comment', {
            method: 'POST',
            body: JSON.stringify(data)

        }).then(() => {
            setIsSubmitted(true)
            setIsNewComment(false)
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <div id='comments' className='py-4 border-b'>
            <div className='flex items-center justify-between'>
                <h3 className='font-semibold text-gray-600 md:text-xl'>Comments</h3>
                <PlusCircle onClick={() => setIsNewComment(!isNewComment)} className='w-5 h-5 text-gray-600 cursor-pointer md:w-7 md:h-7' />
                {/* <button className='px-2 py-1 my-2 text-sm text-white bg-green-500 rounded-md '>Leave a Comment!</button> */}
            </div>

            {isSubmitted && (
                <div className='flex items-center gap-4 p-2 my-4 text-gray-700 bg-green-100 border border-green-600 rounded-md'>
                    <PartyPopper className='w-6 h-6 md:w-8 md:h-8 ' />
                    <div>
                        <p className='font-bold md:text-lg'>Thank you for submitting your comment!</p>
                        <p className='text-xs md:text-xs'>Comment will be available below once it is approved.</p>
                    </div>
                </div>
            )}

            {isNewComment && (
                <form className='my-4' onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label className='text-sm text-gray-500'>Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='John Doe' className={inputClassname} />
                    </div>
                    <div>
                        <label className='text-sm text-gray-500'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='example@doamin.com' className={inputClassname} />
                    </div>
                    <div>
                        <label className='text-sm text-gray-500'>Comment</label>
                        <textarea onChange={(e) => setComment(e.target.value)} rows={4} placeholder='Very informative!' className={inputClassname} />
                    </div>

                    <div className='flex gap-4 py-4'>
                        <button onClick={() => setIsNewComment(!isNewComment)} className='w-full p-2 bg-gray-200 rounded-md'>Cancel</button>
                        {/* <button type='submit' className='w-full p-2 text-white bg-green-600 rounded-md '>Submit</button> */}
                        <input type="submit" disabled={!isValid || isSubmitting} className='w-full p-2 text-white bg-green-600 rounded-md disabled:opacity-60 ' />
                    </div>
                </form>
            )}


            <div className='py-2 space-y-2'>
                {comments && comments.map((comment) => (
                    <div className='' key={comment._id}>
                        <p className='text-sm text-gray-600'><span className='pr-2 text-base font-bold text-green-600'>{comment.name}</span> {new Date(comment._createdAt).toLocaleDateString()}</p>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Comments