import * as React from "react";
import certificate from "../images/hr_cert.png";

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
          <h1 class="text-center text-2xl font-mono tracking-wide">~*~ I graduated from Hack Reactor! ~*~</h1>
          <p>posted by Fig on Thursday, July 6th, 2023</p>
          <div class="border-indigo-400 border-double">
            <img src={certificate} alt="fig's certificate of completion from Hack Reactor"></img>
          </div>

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
            The harder a coding challenge, the more frustrated I feel, the more I need to self-soothe and <a class="underline" href="https://chadd.org/adhd-weekly/stimming-and-fidgeting-helps-some-people-with-adhd-to-pay-attention/#:~:text=Self%2Dstimulatory%20behavior%2C%20often%20called,engage%20in%20self%2Dstimulatory%20behaviors.">stim</a>. So, here I am,
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

<div class="text-center text-2xl font-mono tracking-wide">
  {/* <a href="https://figsitemain.gatsbyjs.io/">Back to Homepage</a> */}
</div>


</div>
)
}

export default Blog

export const Head = () => <title>Fig's Blog</title>