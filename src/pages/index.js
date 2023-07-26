import * as React from "react";

const Homepage = () => {

  return (

<div class="relative flex flex-row">

{/*/Side Nav Bar/*/}
	<aside
		class="flex flex-col items-center bg-white text-gray-700 shadow h-full">
      <br></br>
      <br></br>
      <span class="font-mono justify-center">
        <br></br>
        Find It <br></br>
      </span>
		<div class="h-16 flex items-center w-full">
			{/*/Logo Section/*/}
			{/* <a class="h-6 w-6 mx-auto" href="http://svelte.dev/">
				<img
					class="h-6 w-6 mx-auto"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
					alt="svelte logo" />
			</a> */}
		</div>

		<ul>
			{/*/Items Section/*/}
			<li class="hover:bg-gray-100">
        {/*/Navigation Cursor Icon/*/}
				<a
					href="#"
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
					<svg class="fill-pink-300"
            width="30"
            height="30"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
            d="M19.5027 9.96958C20.7073 10.4588 20.6154 12.1941 19.3658 12.5533L13.0605 14.3658L10.1807 20.2606C9.60996 21.4288 7.88499 21.218 7.6124 19.9468L4.67677 6.25646C4.44638 5.18204 5.5121 4.2878 6.53019 4.70126L19.5027 9.96958Z"
            stroke="currentColor"
            stroke-width="1"/>
          </svg>

				</a>
			</li>

			<li class="hover:bg-gray-100">
        {/*/Navigation Hammer Icon/*/}
				<a
					href="#"
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">
					<svg class="fill-violet-300" xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-hammer" viewBox="0 0 16 16">
            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" stroke="currentColor" stroke-width="0.5"/>
          </svg>

				</a>
			</li>

			<li class="hover:bg-gray-100">
        {/*/Navigation Music Icon/*/}
				<a
					href="#"
					class="h-16 px-6 flex flex justify-center items-center w-full
					focus:text-orange-500">

          <svg class="flex-none fill-blue-400 bi bi-music-note" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16">
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" stroke="currentColor" stroke-width="0.25"/>
            <path fill-rule="evenodd" d="M9 3v10H8V3h1z" stroke="currentColor" stroke-width="0.25"/>
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" stroke="currentColor" stroke-width="0.25"/>
          </svg>

				</a>
			</li>

      <br></br><br></br>
      <br></br><br></br>

		</ul>

	</aside>

  {/*/this is the background image/*/}
  <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />


  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

{/*/Page Body Content/*/}
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 w-full py-6 sm:py-12">

{/*/this is the floating main body element/*/}
<div class="relative bg-pink-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 w-full sm:mx-auto sm:rounded-lg sm:px-10 md:w-1/2">

<div class="mx-auto max-w-md">

<div class="divide-y divide-gray-300/50">
    <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
      <h1 class="text-center text-5xl font-mono tracking-wide">Fig Fishkin</h1>

      <ul class="space-y-4">

        <li class="flex items-center">
          <svg class="fill-pink-300" width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5027 9.96958C20.7073 10.4588 20.6154 12.1941 19.3658 12.5533L13.0605 14.3658L10.1807 20.2606C9.60996 21.4288 7.88499 21.218 7.6124 19.9468L4.67677 6.25646C4.44638 5.18204 5.5121 4.2878 6.53019 4.70126L19.5027 9.96958Z" stroke="currentColor" stroke-width="1"/>
          </svg>
          <p class="ml-4 font-mono tracking-wide">
            <a href='https://figsitemain.gatsbyjs.io/virtualThings/'> Making Virtual Things </a>
          </p>
        </li>

        <li class="flex items-center">
          <svg class="fill-violet-300" xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-hammer" viewBox="0 0 16 16">
            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" stroke="currentColor" stroke-width="0.5"/>
          </svg>
          <p class="ml-4 font-mono tracking-wide">
            Making Physical Things - Don't click me there's nothing here yet!
          </p>
        </li>

        <li class="flex items-center">
          <svg class="flex-none fill-blue-400 bi bi-music-note" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16">
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" stroke="currentColor" stroke-width="0.25"/>
            <path fill-rule="evenodd" d="M9 3v10H8V3h1z" stroke="currentColor" stroke-width="0.25"/>
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" stroke="currentColor" stroke-width="0.25"/>
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

{/*/this is the floating blog element/*/}
<div class="relative justify-center bg-indigo-300 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 font-mono my-4 w-full sm:mx-auto sm:rounded-lg sm:px-10 md:w-1/2">
<h2 class="text-xl">Latest Blog Post:</h2>
<br></br>
<h3 class="text-lg">~*~ I graduated from Hack Reactor! ~*~</h3>
posted by Fig on Thursday, July 6th, 2023
<br></br>
<br></br>
Featuring gratitude, reflections on neurodiversity, math, coding, and mac and cheese.
<br></br>
<br></br>
<a class="underline" href='https://figsitemain.gatsbyjs.io/blog/'>Click me to read</a>
</div>

</div>


</div>
  )
}

  export default Homepage

  export const Head = () => <title>Fig's Site</title>
