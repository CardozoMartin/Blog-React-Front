import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  const {
    placeholder,
    type = "text",
    name,
    options = {},
    register,
  } = props;
  return (
    (<textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-6/12 ",
        className
      )}
      ref={ref}
      type={type}
        id={`${name}-input`}
      placeholder={placeholder}
      {...register(name, options)}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
