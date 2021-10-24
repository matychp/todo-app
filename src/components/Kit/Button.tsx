import React from "react"

const Button: React.FC<React.ComponentProps<"button">> = ({
  className,
  ...props
}) => {
  console.log(
    `flex items-center justify-center gap-2 py-2 px-4 rounded bg-green-500 hover:bg-green-700 text-white ${className}`
  )

  return (
    <button
      className={`flex items-center justify-center gap-2 p-3 rounded ${className}`}
      {...props}
    >
      {props.children}
    </button>
  )
}

export { Button }
