// import * as React from "react";

// const Homepage = () => {

//   return (
// <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">

//   {/*/this is the background image/*/}
//   <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />


//   <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

//   {/*/this is the floating main element/*/}
//   <div class="relative bg-pink-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 w-full sm:mx-auto sm:rounded-lg sm:px-10 md:w-1/2 xl:w-1/3">

//     <div class="mx-auto max-w-md">

//     <div class="divide-y divide-gray-300/50">
//         <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
//           <h1 class="text-center text-5xl font-mono tracking-wide">Fig Fishkin</h1>

//           <ul class="space-y-4">

//             <li class="flex items-center">
//               <svg class="fill-pink-300" width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5027 9.96958C20.7073 10.4588 20.6154 12.1941 19.3658 12.5533L13.0605 14.3658L10.1807 20.2606C9.60996 21.4288 7.88499 21.218 7.6124 19.9468L4.67677 6.25646C4.44638 5.18204 5.5121 4.2878 6.53019 4.70126L19.5027 9.96958Z" stroke="currentColor" stroke-width="1"/>
//               </svg>
//               <p class="ml-4 font-mono tracking-wide">
//                 <a href='https://figsitemain.gatsbyjs.io/virtualThings/'> Making Virtual Things </a>
//               </p>
//             </li>

//             <li class="flex items-center">
//               <svg class="fill-violet-300" xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-hammer" viewBox="0 0 16 16">
//                 <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" stroke="currentColor" stroke-width="0.5"/>
//               </svg>
//               <p class="ml-4 font-mono tracking-wide">
//                 Making Physical Things - Don't click me there's nothing here yet!
//               </p>
//             </li>

//             <li class="flex items-center">
//               <svg class="flex-none fill-blue-400 bi bi-music-note" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16">
//                 <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" stroke="currentColor" stroke-width="0.25"/>
//                 <path fill-rule="evenodd" d="M9 3v10H8V3h1z" stroke="currentColor" stroke-width="0.25"/>
//                 <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" stroke="currentColor" stroke-width="0.25"/>
//               </svg>

//               <p class="ml-4 font-mono tracking-wide">
//                 <a href="https://bloodhunny.bandcamp.com/">Making Music Things</a>
//               </p>
//             </li>
//           </ul>
//         </div>

//         <div class="pt-8 text-base font-mono leading-7 text-xs">
//           <p class="text-gray-900">Site Made with
//             <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600"> Tailwind </a>
//             &
//             <a href="https://tailwindcss.com/docs" class="text-sky-500 hover:text-sky-600"> Gatsby</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

//   export default Homepage

//   export const Head = () => <title>Fig's Site</title>


import * as React from "react";

const Blog = () => {
return(
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">

  {/*/this is the background image/*/}
  <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />


  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

  <div class="my-4 text-center text-5xl font-mono tracking-wide">
    <h1>Fig's Blog! About Stuff, and Things!</h1>
  </div>

  {/*/this is the floating main element/*/}
  <div class="relative bg-pink-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 w-full sm:mx-auto sm:rounded-lg sm:px-10 md:w-1/2 xl:w-1/2">
    <div class="mx-auto">
    <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <h1 class="text-center text-lg font-mono tracking-wide">I graduated from Hack Reactor</h1>
          <p>Thursday, July 6th</p>
          <p>In 2010 I started my career in higher education at Humboldt State University, which is now Cal Poly Humboldt,
            pursuing a degree in Geology. I didn't, and still don't really, actually like rocks all that much.
            I thought that Astronomy was a subfield of Geology because my high school Geology teacher included
            Astronomy as a unit in our class. Turns out that was just because he was awesome, not because Geology typically
            would include Astronomy.
            <br></br>
            <br></br>
            My dreams of being a ~space guy~ slowly died as I realized that actually I needed to major in *PHYSICS*
            if I wanted to study Astronomy, and that included a lot of math. I historically struggled with math. As an adult, I recognize my neurodiversity.
            I recognize the unique ways my brain works, for better and worse. I don't think anyone suspected that my brain might
            need extra support around certain subjects, because I was a good student overall. I loved learning and excelled in reading
            and writing because I freaking LOVE words. I love spelling, grammar, etymology, phonetics, and memorizing definitions.
            <br></br>
            <br></br>
            However in Mathematics I was always scraping by. I remember frequently being moved to tears by the
            frustration I felt at the kitchen table, trying to get through my Math homework. I would seek sensory comforts
            in order to tolerate the extreme discomfort of the mental gymnastics that Math required. My favorite was a big bowl
            of macaroni and cheese. I distinctly recall thinking that I literally could not do my math homework without eating macaroni
            and cheese at the same time.
            <br></br>
            <br></br>
            What I didn't realize when I started down the path of software engineering was that it uses the same muscles.
            Most of writing code is constructing logical statements. Solving coding problems, like solving math problems,
            feels like having a tangled rope of logical pieces plopped in front of you and you have to untangle it... with your brain. Does that make sense?
            <br></br>
            <br></br>
            The harder a coding challenge, the more frustrated I feel, the more I need to self-soothe and stim. So, here I am,
            a 31 year old sitting in front of their computer, rocking back and forth and aggressively eating chips to cope with the
            frustration with the mental gymnastics that the current algorithm I'm writing requires. And I see that some things, namely my brain,
            have not changed since I was a 13 year old with a bowl of mac and cheese trying to solve a math problem at my kitchen table.
            <br></br>
            <br></br>
            Some very important things, however, *are* notably different.
            <br></br>
            <br></br>
            When I started the Premium Prep course that Hack Reactor used to offer in February of 2022, I was knocked on my a**.
            I realized very quickly that the skills I was going to need to learn if I really wanted to be a Software Engineer
            were skills that I stopped trying to develop back when I gave up my dream of being an Astronomer. Equipped with
            more tools for emotional regulation, some overall maturity, and much better self-esteem, I found myself ready to rise to
            the challenge at age 30. However when I reflect on the journey of Software Engineering I've been on since last year,
            I see that its been the people who really made the difference for me. In the instructors and the teaching assistants
            who ran help desk, I found kind and compassionate people from all different backgrounds who understood the frustration
            that came along with this work. I found people who would spend as much time with me as I needed, within reason. Who wouldn't
            take me right to the answer but would ask me the right questions so I could get there on my own. I found empathy. I found people
            who seemed to believe in my ability regardless of how much I was struggling at any given moment. Nobody was ever like, "you should know how to do this already",
            or said anything that suggested my goals were beyond my reach, which I unfortunately did experience back at university. So many of my classmates too,
            even those who I perceived as SO much more skilled than me would take time to help me with things. We commiserated in the
            challenges. There was no competition or ego to any of it.
            <br></br>
            <br></br>
            That belief in me and encouragement was a greater gift than I ever could have asked for. That support, along with many many other people and things,
            is the reason that I can say over a year later that I did the dang thing and I graduated from Hack Reactor's Software Engineering Immersive.
            I wasn't sure what I was getting myself into when I was getting into tech. There's so many cliches and stereotypes
            about the type of people in this field, which exist for a reason to be sure. What I can say is that so far in this field I have met such kind,
            funny, interesting, and determined people. I want to thank everyone in my cohort and all the SEIRs and instructors I worked
            with at Hack Reactor for making the experience such a darn positive one, even at the lowest points. Without y'all I don't think I'd
            be here.
            <br></br>
            <br></br>
            P.S. I'm still waiting on my Hack Reactor sweatshirt...
          </p>
        </div>
        </div>
    </div>
  </div>

  <div class="relative bg-pink-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 my-6 w-full sm:mx-auto sm:rounded-lg sm:px-10 md:w-1/2 xl:w-1/3">
    <div class="mx-auto max-w-md">
    <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <h1 class="text-center text-lg font-mono tracking-wide">Blog Post</h1>
        </div>
        </div>
    </div>
  </div>

</div>
)
}

export default Blog

export const Head = () => <title>Fig's Blog</title>