import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import { useEffect, useState } from "react"

import { AIReplyButton } from "~features/AIReplyButton"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
  const messageInput = document.querySelector(`.msg-form__contenteditable`)
  if (messageInput) {
    return messageInput
  } else {
    console.error("Message input field not found. CSUI not mounted.")
    // Add additional logic here if the element is not found (e.g., retry or display a message)
    return null // This prevents errors if mounting is attempted with a null value
  }
}

const PlasmoInline = () => {
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const messageInput = document.querySelector(`.msg-form__contenteditable`)

    messageInput.classList.contains("msg-form__contenteditable--focused")

    const handleFocus = () => {
      setIsFocused(true)
    }

    const handleBlur = (event) => {
      if (event.relatedTarget?.localName !== "plasmo-csui") {
        setIsFocused(false)
      }
    }

    if (messageInput) {
      messageInput.addEventListener("focus", handleFocus)
      messageInput.addEventListener("blur", handleBlur)

      return () => {
        messageInput.removeEventListener("focus", handleFocus)
        messageInput.removeEventListener("blur", handleBlur)
      }
    }
  }, []) // Empty dependency array to run effect only once

  return (
    <div className="z-50 absolute bottom-3 right-4">
      {isFocused && <AIReplyButton setFocused={setIsFocused} />}
    </div>
  )
}

export default PlasmoInline

// useEffect(() => {
//   const messageInput = document.querySelector(`.msg-form__contenteditable`)

//   const checkFocusAttribute = () => {
//     if (
//       messageInput &&
//       messageInput.getAttribute("data-artdeco-is-focused") === "true"
//     ) {
//       setIsFocused(true)
//     } else {
//       setIsFocused(false)
//     }
//   }

//   if (messageInput) {
//     checkFocusAttribute() // Check focus attribute initially

//     const observer = new MutationObserver(checkFocusAttribute)
//     observer.observe(messageInput, {
//       attributes: true,
//       attributeFilter: ["data-artdeco-is-focused"]
//     })

//     return () => {
//       observer.disconnect() // Disconnect observer when component unmounts
//     }
//   }
// }, [])
