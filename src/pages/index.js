import * as React from "react"

const Homepage = () => {
  return (
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative bg-pink-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <h1 class="text-center text-5xl font-mono tracking-wide">Fig Fishkin</h1>
          <ul class="space-y-4">

            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-violet-300">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4 font-mono tracking-wide">
                Making Virtual Things
              </p>
            </li>

            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-violet-300">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4 font-mono tracking-wide">
                Making Physical Things
              </p>
            </li>

            <li class="flex items-center">
              <svg class="h-6 w-6 flex-none fill-violet-300">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p class="ml-4 font-mono tracking-wide">
                Making Sonic Things
              </p>
            </li>
          </ul>
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

export default Homepage

export const Head = () => <title>Fig's Site</title>
