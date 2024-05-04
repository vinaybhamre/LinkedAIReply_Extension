import { ArrowDown } from "lucide-react"
import React from "react"

const InsertBtn = ({ handleInsert }: { handleInsert: () => void }) => {
  return (
    <button
      type="button"
      onClick={handleInsert}
      className="py-2 px-4 inline-flex justify-center items-center gap-x-3 text-2xl font-semibold rounded-lg border border-gray-500 bg-white text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
      <ArrowDown size={16} />
      <span>Insert</span>
    </button>
  )
}

export default InsertBtn
