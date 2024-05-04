import React from "react"

const ModalWrapper = ({
  open,
  closeModal,
  children
}: {
  open: boolean
  closeModal: () => void
  children: React.ReactNode
}) => {
  return (
    <div
      onClick={closeModal}
      className={`fixed inset-0 flex justify-center items-center ${open ? " visible bg-black/30 backdrop-blur-sm" : "invisible"}`}>
      {children}
    </div>
  )
}

export default ModalWrapper
