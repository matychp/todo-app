import { useMediaQuery } from "react-responsive"

const useBreakpoints = () => {
  const sm = useMediaQuery({ query: "(min-width: 640px)" })
  const md = useMediaQuery({ query: "(min-width: 768px)" })
  const lg = useMediaQuery({ query: "(min-width: 1024px)" })
  const xl = useMediaQuery({ query: "(min-width: 1280px)" })
  const twoxl = useMediaQuery({ query: "(min-width: 1536px)" })

  return { sm, md, lg, xl, twoxl }
}

export { useBreakpoints }
