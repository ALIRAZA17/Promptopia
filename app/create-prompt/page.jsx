'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Form from '@components/Form'

import React from 'react'

const CreatePrompt = () => {
  const [submitting, setsubmitting] = useState(false)
  const [post, setpost] = useState({
    prompt: '',
    tag: ''
  })

  const createPrompt = async e => {
    e.preventDefault()
    setsubmitting(true)
    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tagy,
          userId: session?.user.id
        })
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setsubmitting(false)
    }
  }

  return (
    <Form
      type='Create'
      post={post}
      setpost={setpost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt