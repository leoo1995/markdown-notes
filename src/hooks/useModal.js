import { useState } from "react"

export const useModal = () => {
  const [state, setState] = useState(false)
  const openModal = () => setState(true)
  const closeModal = () => setState(false)

  return [state, openModal, closeModal]
}
