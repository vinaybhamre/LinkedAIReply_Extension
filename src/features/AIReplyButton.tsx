import somecoolImage from "data-base64:~assets/AIReplyIcon.svg"
import { useState, type Dispatch, type SetStateAction } from "react"

import ModalContent from "./ModalContent"
import ModalWrapper from "./ModalWrapper"

export const AIReplyButton = ({
  setFocused
}: {
  setFocused?: Dispatch<SetStateAction<boolean>>
}) => {
  const [openModal, toggleModal] = useState(false)

  const handleModal = (e) => {
    e.stopPropagation()

    toggleModal(true)
  }

  const handleClose = () => {
    toggleModal(false)
    setFocused(false)
  }

  return (
    <>
      <button
        onClick={handleModal}
        type="button"
        className="flex flex-row items-center p-0 text-sm rounded-full transition-all border-none">
        <img src={somecoolImage} alt="AI Reply Icon" width={24} height={24} />
      </button>
      <ModalWrapper open={openModal} closeModal={handleClose}>
        <ModalContent handleClose={handleClose} />
      </ModalWrapper>
    </>
  )
}
