import React from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'

type Props = {}

function PlaceholderDocument({}: Props) {
  return (
    <Button className='flex flex-col items-center h-80 w-64 rounded-xl bg-gray-200 drop-shadow-md text-gray-400'>
        <PlusCircleIcon className='h-16 w-16'/>
        <p>Add a document</p>
    </Button>
  )
}

export default PlaceholderDocument