import React, { useState } from "react"

import ChatbotResponse from "./ChatbotResponse"
import GenerateBtn from "./GenerateBtn"
import InsertBtn from "./InsertBtn"
import UserPrompt from "./UserPrompt"

const ModalContent = ({ handleClose }: { handleClose: () => void }) => {
  const [value, setValue] = useState("")
  const [userPrompt, setUserPrompt] = useState("")
  const [chatbotResponse, setChatbotResponse] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleGenerate = () => {
    if (!value) {
      // Handle empty input error (optional: display a message to the user)
      return
    }

    setUserPrompt(value)
    // Simulate API call or other logic to generate response
    const generatedResponse = `Thank you for the opportunity! If you have any more questions or if
    there's anything else I can help you with, feel free to ask.`
    setChatbotResponse(generatedResponse)
    setValue("") // Clear input after generation
  }

  const handleInsert = () => {
    const messageInput = document.querySelector(`.msg-form__contenteditable`)

    if (messageInput) {
      const pTag = messageInput.querySelector("p")

      if (pTag) {
        pTag.textContent = chatbotResponse // Replace content

        // Simulate user input event (optional - consider a library like react-input-autosize for more complex scenarios)
        const event = new Event("input", {
          bubbles: true,
          cancelable: true
        })
        pTag.dispatchEvent(event)

        handleClose()
      } else {
        console.warn("p tag not found in message input") // Handle potential error
      }
    } else {
      console.warn("Message input not found") // Handle potential error
    }
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" bg-white rounded-2xl p-6 w-full max-w-4xl min-h-48">
      {chatbotResponse && (
        <div className="flex flex-col gap-4 mb-5">
          <UserPrompt prompt={userPrompt} />
          <ChatbotResponse response={chatbotResponse} />
        </div>
      )}
      <div className="flex flex-col gap-5 justify-between items-end h-full min-h-full ">
        <input
          type="text"
          className="p-4 block w-full border border-black/40 rounded-lg text-lg text-gray-500"
          placeholder="Your Prompt"
          value={value}
          onChange={handleChange}
        />
        {!chatbotResponse ? (
          <GenerateBtn
            isChatResponse={chatbotResponse}
            handleGenerate={handleGenerate}
          />
        ) : (
          <div className="flex gap-5">
            <InsertBtn handleInsert={handleInsert} />
            <GenerateBtn isChatResponse={chatbotResponse} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ModalContent
