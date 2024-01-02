import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
      className="hero py-10 flex justify-center">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="hero-content flex-col lg:flex-row-reverse">
        <img
          // src=""
          src="https://cdn.pixabay.com/photo/2023/08/09/00/44/woman-8178327_1280.jpg"
          // src="https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg"
          // src="https://images.unsplash.com/photo-1552960562-daf630e9278b?q=100&w=900"
          alt=""
          className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
        />
        <div className="text-center lg:text-start">
          <span className="badge badge-outline badge-lg">Let's Scrape It</span>
          <h1 className="font-poppins text-3xl font-black uppercase md:text-7xl">
            Build A Custom Web Scraper
            <span className="text-base-content/30"> for your business</span>
          </h1>
          <p className="py-6 font-poppins lg:max-w-lg">
            Generate targeted leads, collect valuable market research, or gaining a comprehensive understanding of your competition through our custom-tailored web scraping solutions.
          </p>
          {/* <p className="py-6 font-poppins lg:max-w-lg">
            Empower your business with tailored data collection solutions, ensuring unparalleled insights and competitive advantage in the ever-evolving landscape of market research and business intelligence.
          </p> */}
          <div className="flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-poppins shadow-md">
              Email Us Now
            </a>
            {/* <a href="/" className="btn btn-ghost md:btn-lg rounded-full font-poppins font-light">
              Read success stories
            </a> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
