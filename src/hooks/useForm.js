import { useState } from "react"

export const useForm = (form = {}, action) => {
  const [state, setState] = useState(form)
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value })
    if (action) action()
  }
  return [state, handleChange]
}
