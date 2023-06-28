import * as React from "react"

const Homepage = () => {
  return (
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">

  {/*/this is the background image/*/}
  <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />


  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

  {/*/this is the floating main element/*/}
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
            <svg class="fill-violet-300" xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-hammer" viewBox="0 0 16 16">
              <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/> </svg>

              <p class="ml-4 font-mono tracking-wide">
                Making Physical Things
              </p>
            </li>

            <li class="flex items-center">
              <svg class="flex-none fill-violet-300 bi bi-music-note" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
              <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
              <path fill-rule="evenodd" d="M9 3v10H8V3h1z"/>
              <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
              </svg>

              <p class="ml-4 font-mono tracking-wide">
                <a href="https://bloodhunny.bandcamp.com/">Making Music Things</a>
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
