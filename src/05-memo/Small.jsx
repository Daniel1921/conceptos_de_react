import { memo } from "react"


export const Small = memo(({value}) => {
    console.log(' me  dibujè :D ')
  return (
    <small>{ value }</small>
  )
})
