import React from "react"

const ChatbotResponse = ({ response }: { response: string }) => {
  return (
    <p className=" flex self-start bg-blue-200 max-w-2xl p-4 mr-16 rounded-lg text-base text-gray-500 left-0">
      {response}
    </p>
  )
}

export default ChatbotResponse
