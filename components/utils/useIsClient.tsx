import React, { useEffect, useState } from "react"
// Usage
function Component() {
  const isClient = useIsClient()
  return <div>{isClient ? "Client" : "server"}</div>
}
// Hook
function useIsClient() {
  const [isClient, setClient] = useState(false)
  useEffect(() => {
    setClient(true)
  }, [])
  return isClient
}

export default useIsClient
