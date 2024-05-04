import { Repeat, SendHorizontal } from "lucide-react"
import React from "react"

const GenerateBtn = ({
  isChatResponse,
  handleGenerate
}: {
  isChatResponse: string
  handleGenerate?: () => void
}) => {
  return (
    <button
      type="button"
      onClick={isChatResponse ? () => {} : handleGenerate}
      className="py-2 px-5 inline-flex justify-center items-center gap-x-3 text-2xl font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
      {isChatResponse ? <Repeat size={16} /> : <SendHorizontal size={16} />}
      <span>{isChatResponse ? "ReGenerate" : "Generate"}</span>
    </button>
  )
}

export default GenerateBtn
