
import { HoverEffect } from "../ui/card-hover-effect";

function CardSection() {
  return (
    <div className="bg-[#222222]" id="testimonials" >
 <div className="  flex justify-center mb-12">
          <div className="mt-8 bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
            WHAT WE DO
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="text-white text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="text-white" >Hear From </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Creators </span> 
            Who`&apos;`ve
            <br />
            Transformed Their
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"> Brands</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-neutral-400 mt-8 max-w-2xl mx-auto text-center">
            We build content engines fueled by long-form videos
            <br />
            (Podcasts, Interviews, YouTube videos etc), so
          </p>
        </div>

    
    <div className=" ml-16 mr-16 bg-[#222222] text-white min-h-screen relative overflow-hidden">
      <HoverEffect items={projects} />
    </div>
    </div>
  )
}
export const projects = [
    {
      
      description:"“I recently had the opportunity to use ContentFloww, and I was thoroughly impressed with the results. Not only did it live up to its promises, but it exceeded my expectations.”",
      link: "",
      title: "",
    },
    {
      title: "",
      description:"“Their editing team is excellent. It's great when you have a team that always looks to turn it right back around no questions asked”",
      link: "",
    },
    {
      title: "",
      description:"Content flow was amazing to work with! They really create amazing captivating content that really hooks the viewers! siness",
      link: "",
    },
    {
      title: "",
      description:" “ContentFloww Animations bring 10X better results than my normal videos everytime. I went from 0-150k+ followers in just 4 months using their videos.”",
      link: "",
    },
    {
      title: "",
      description:"“Fast Delivery & Good editing!”",
      link: "",
    },
    {
      title: "",
      description: " ContentFloww is amazing! They totally nailed our brand story with their videos. Super creative, easy to work with, and the results were awesome—our traffic and sales went way up. Highly recommend them!" ,
      link: "",
    },
  ];
export default CardSection