import portfolioBanner from '../../public/portfolioBanner.webp';
import Cta from '../components/Cta';
import Image from "next/image";
import pone from '../../public/pone.webp';
import ptwo from '../../public/ptwo.webp';
import pfive from '../../public/p5.webp';
import portfolio1 from '../../public/portfolio1.webp';
import portfolio2 from '../../public/portfolio2.webp';
import portfolio3 from '../../public/portfolio3.webp';
import portfolio4 from '../../public/portfolio4.webp';
import portfolio5 from '../../public/portfolio5.webp';
import portfolio6 from '../../public/portfolio6.webp';
import portfolio7 from '../../public/portfolio7.webp';
import portfolio8 from '../../public/portfolio8.webp';
import portfolio9 from '../../public/portfolio9.webp';
import portfolio10 from '../../public/portfolio10.webp';
import portfolio11 from '../../public/portfolio11.webp';
import portfolio12 from '../../public/portfolio12.webp';
import portfolio13 from '../../public/portfolio13.webp';
import WorkImg from '../components/WorkImage'

export const metadata = {
  title: 'Impressive Website & Software Development Portfolio | Shero Incorp',
  description: 'Explore our impressive portfolio of website and software development projects at Shero Incorp. See the outstanding solutions we have delivered for our clients and get inspired for your own project.',
  verification: {
    google: "google-site-verification=lhklmf_1C9VGhHNUP66-Jn7jmei9shUUriDTzUs9Z1Y"
  },
};

const Work = () => (
  <>
    <div className="dark:bg-violet-400 dark:text-gray-900">
      <Image src={portfolioBanner} alt="best website & software development serivces" className=' w-full h-auto object-cover object-center rounded' />
    </div>
    <section id="section4" className="text-gray-600 body-font overflow-hidden mt-10 px-3 lg:px-28 ">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">

        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)" width="52" height="24"></rect>
              </svg>
            </span>
            OUR WORK / PORTFOLIO
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Check out some of our latest projects and see how we&apos;ve helped our clients achieve their business goals.
          </p>
        </div>




      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3  md:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">

        {/* <WorkImg iurl={pone} title="TiffinXpress" description="TIFFINXpress is a convenient and efficient application. Offering a variety of freshly prepared, home-cooked meals, the app allows users to easily customize and schedule meal deliveries according to their preferences. With user-friendly features and a focus on quality, TIFFINXpress brings delicious, wholesome food right to your doorstep." /> */}

        {/* <WorkImg lurl="https://sid-youtube-clone.netlify.app/" iurl={ptwo} title="Video Streaming App" description="My video streaming app allows users to stream and watch their favorite videos online. With a vast collection of movies, TV shows, and other videos, users can easily search and discover new content to enjoy. The app provides a user-friendly interface that allows users to easily navigate and find what they're looking for" /> */}
        {/* <WorkImg  iurl={ptwo} title="UkStories" description="UK Stories is a cutting-edge news web application designed using React, Node.js, and Sequelize. Specifically tailored for the Uttarakhand community, it offers a streamlined way to access and engage with the latest news and events in the region" /> */}




        <WorkImg  iurl={portfolio1} title="Portfolio Website" description="A portfolio website is an online platform that showcases your skills, experience, and accomplishments to potential clients or employers. It is a place where you can highlight your best work, share your story, and make a strong first impression." />

        {/* <WorkImg lurl="http://siddhant-singh.great-site.net/" iurl={pfive} title="Gym Mangement System" description="A gym management system is a software application that assists gym owners and managers in managing their gym operations. It provides tools for member management, scheduling, payment processing, staff management, and reporting etc." /> */}

        <WorkImg iurl={portfolio2} title="Nft Website" description="Explore a groundbreaking NFT website, where art and collectibles thrive. Discover unique digital assets, connect with artists, and own provably scarce pieces. Immerse yourself in the world of blockchain-based ownership and creativity. Welcome to the future of digital art!" />
        <WorkImg iurl={portfolio3} title="SkillMentor" description="he premier online platform for course creators and learners alike. Our website empowers you to share your expertise by uploading and offering your own courses, reaching a global audience hungry for knowledge. As a learner, you have access to a vast library of high-quality courses, covering a wide range of topics and taught by passionate instructors. " />
        <WorkImg iurl={portfolio4} title="Business Landing Page" description="Welcome to our business landing page, a shining star in our software portfolio. With our comprehensive suite of tools and resources, we empower businesses to create a powerful online presence. Explore our captivating design templates and discover effective marketing strategies. " />
        <WorkImg iurl={portfolio5} title="Medical Buisness Website" description="our medical business website, designed to provide a seamless online experience for patients and healthcare professionals. Discover our comprehensive range of services, cutting-edge technologies, and dedicated team of experts. F
        rom appointment scheduling to accessing valuable resources, our website delivers convenience and personalized care." />
        <WorkImg iurl={portfolio6} title="Health Care Website" description=" Experience exceptional healthcare services. Our healthcare website offers comprehensive information on medical services, patient resources, and expert healthcare professionals. Discover a seamless healthcare experience that prioritizes your well-being and empowers you to make informed decisions about your health." />
        <WorkImg iurl={portfolio7} title="Interior Design Website" description="
Welcome to our interior design website, where creativity and style converge. Explore our online platform to discover a collection of inspiring interior design projects. From stunning residential spaces to captivating commercial environments, our portfolio showcases our expertise in crafting beautiful, functional, and personalized designs." />
        <WorkImg iurl={portfolio8} title=" eCommerce website" description="Welcome to our eCommerce website, where convenience meets an extensive product selection. Explore our user-friendly platform designed to make online shopping a breeze. With seamless navigation, detailed product descriptions, and secure checkout, our website ensures a smooth and enjoyable shopping experience." />
        <WorkImg iurl={portfolio9} title="Realstate Website" description="Welcome to our real estate website, your ultimate destination for finding your dream property. Explore our intuitive and visually captivating platform designed to make your property search a seamless experience Our website provides advanced search filters, neighborhood information, and financing resources to assist you in making informed decisions." />

        <WorkImg iurl={portfolio10} title="Podcast Website" description=" Our website offers a user-friendly interface, making it easy to browse and explore episodes from your favorite shows. Stay up-to-date with the latest releases, subscribe to your preferred podcasts, and never miss an episode. Dive into show descriptions, host information, and guest details to enhance your listening experience." />

        <WorkImg iurl={portfolio11} title="Construction Website" description="Welcome to our game-changing construction website, designed to revolutionize your business. Unlock a world of opportunities and growth with our exceptional construction services Welcome to our game-changing construction website, designed to revolutionize your business. Unlock a world of opportunities and growth with our exceptional construction services." />

        <WorkImg iurl={portfolio12} title="Travel Website" description="
Welcome to our travel agent website, your gateway to unforgettable journeys. As a travel agent, this platform is your ultimate tool for creating extraordinary travel experiences for your clients. Explore our website's comprehensive features, including a vast selection of destinations, customizable itineraries, and seamless booking options." />

        <WorkImg iurl={portfolio13} title="Grocery store website" description="Welcome to our game-changing grocery store website, tailored to elevate your business to new heights. With our cutting-edge platform, you can revolutionize the way you serve your customers and expand your reach in the digital landscape." />

      </div>
    </section>
    <section className='px-3 lg:px-28 mt-10'>
      <Cta />
    </section>
  </>
);

export default Work;



