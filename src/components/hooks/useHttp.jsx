import { useEffect, useState } from "react"

export const useHttp = (fn, params) => {
  const [data, setData] = useState()
  useEffect(() => {
    fn(params).then(data => setData(data))
  }, [params, fn])
  return [data, setData]
}