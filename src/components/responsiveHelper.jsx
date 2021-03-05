import React from "react"

export const ResponsiveHelper = () => (
  <div className="flex">
    <div className="bg-yellow-100 w-4"> </div>
    <div className="hidden sm:block px-1 bg-yellow-200">sm</div>
    <div className="hidden md:block px-1 bg-yellow-300">md</div>
    <div className="hidden lg:block px-1 bg-yellow-400">lg</div>
    <div className="hidden xl:block px-1 bg-yellow-500">xl</div>
  </div>
)
