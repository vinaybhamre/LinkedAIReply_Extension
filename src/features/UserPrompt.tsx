import React from "react"

const UserPrompt = ({ prompt }: { prompt: string }) => {
  return (
    <p className=" flex self-end bg-gray-200 max-w-fit p-4 rounded-lg text-base text-gray-600 right-0">
      {prompt}
    </p>
  )
}

export default UserPrompt
