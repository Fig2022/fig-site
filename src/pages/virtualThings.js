import * as React from "react"

const VirtualThings = () => {
  return (
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">

  {/*/this is the background image/*/}
  <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />


  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

  {/*/this is the floating main element/*/}
  <div class="relative bg-pink-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 w-full sm:mx-auto sm:rounded-lg sm:px-10 md:w-1/2 xl:w-1/3">

    <div class="mx-auto max-w-md">

    <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <h1 class="text-center text-5xl font-mono tracking-wide">Fig's Virtual Things</h1>
        </div>

        <div class="pt-8 text-base font-mono leading-7 text-xs">
          <p class="text-gray-900">Site Made with
            <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600"> Tailwind </a>
            &
            <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600"> Gatsby</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default VirtualThings

export const Head = () => <title>Fig's Virtual Things</title>
