import { useEffect, useState } from "react"
import { fetchMovieById } from "../../services/api"

export const useHttp = (fn, params) => {
  const [data, setData] = useState()
  useEffect(() => {
    fn(params).then(data => setData(data))
  }, [params, fn])
  return [data, setData]
}