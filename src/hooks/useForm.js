import { useState } from "react"

export const useForm = (form = {}) => {
  const [state, setState] = useState(form)
  const handleChange = event =>
    setState({ ...state, [event.target.name]: event.target.value })
  return [state, handleChange]
}
