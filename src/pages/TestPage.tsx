import { useEffect } from "react"
import { useGlobalLoading } from "hook/useGlobalLoading"
import useUserAuth from "hook/useUserAuth"
function TestPage() {
  const {onUpdateIsOpen} = useGlobalLoading()
  
  useEffect(() => {
    // onUpdateIsOpen()
  }, [])
  
  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

export default TestPage