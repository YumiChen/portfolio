"use client";

import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useRef, useState } from 'react';

import About from '@/components/About';
import { Comp } from './types';
import Contact from '@/components/Contact';
import Experiences from '@/components/Journey';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';
import ScrollTrigger from "gsap/ScrollTrigger";
import Skills from '@/components/Skills';
import SocialMedias from '@/components/SocialMedias';
import Top from '@/components/Top';
import gsap from "gsap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { register } from 'swiper/element/bundle';

library.add(faEnvelope, faFile, faLinkedin, faGithub);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const comps = useRef<Comp[]>([{
    name: 'TOP',
    nav: 'Top',
    comp: <Top/>,
    animateTitle: false,
    animateContent: false,
  },
  {
    name: 'ABOUT',
    nav: 'About',
    comp: <About/>,
    animateTitle: true,
    animateContent: false,
  },
  {
    name: 'SKILLS',
    nav: 'Skills',
    comp: <Skills/>,
    animateTitle: true,
    animateContent: true,
  },{
    name: 'JOURNEY',
    nav: 'Journey',
    comp: <Experiences/>,
    animateTitle: true,
    animateContent: false,
  },
  {
    name: 'PROJECTS',
    nav: 'Projects',
    comp: <Projects/>,
    animateTitle: true,
    animateContent: true,
  },
  {
    name: 'CONTACT',
    nav: 'Contact',
    comp: <Contact/>,
    animateTitle: true,
    animateContent: true,
  }]);

  useEffect(()=>{
    register();

    let onMouseMove = (event: MouseEvent) => undefined;
    const context = gsap.context(()=>{
      comps.current.forEach(({name, animateTitle, animateContent})=>{
        if(!animateTitle && !animateContent){
          return;
        }
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `#${name}-container`,
            start: "-50px bottom-=71",
            end: "bottom-=50 top",
            toggleActions: "play reset restart reset"
          }
        })

        if(animateTitle){
          timeline.from(`#${name}-header-1`, {
            x: "90vw",
            xPercent: -100,
            opacity: 0,
            duration: 1.5
          }, 0)
        }

        if(animateContent){
          timeline.fromTo(`#${name}`, {
            x: "200px",
            opacity: 0.7,
            duration: 1
          }, {
            x: "0px",
            opacity: 1
          }, 0);
        }
      });

      gsap.to('#network-hint', {
        x: '-1.8rem',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `#${comps.current[1].name}`,
          start: "top bottom",
          toggleActions: "play none none reverse"
        }
      });

      onMouseMove = (event: MouseEvent) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        gsap.set(".cursor-1", {
          x: mouseX,
          y: mouseY,
          xPercent: '-110',
          yPercent: '-50'
        })
        
        gsap.to(".cursor-2", {
          x: mouseX,
          y: mouseY,
          xPercent: '-90',
          yPercent: '-50',
          stagger: 1
        })
      };
      document.body.addEventListener("mousemove", onMouseMove);
    });

    return () => {
      context.clear();
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <Nav comps={comps.current} />
      <main className='overflow-x-hidden text-white font-roboto text-3xl leading-10 w-screen lg:w-[1280px] lg:mx-auto'>
        <div id="network-hint" className='hidden md:block fixed right-0 transform(translateX(100%)) bottom-6 opacity-0 z-30 text-4xl'>
          <SocialMedias/>
        </div>
        <div className='cursor-1 hidden lg:block fixed w-32 h-32 bg-yellow-200 opacity-50 rounded-full z-[60] mix-blend-overlay pointer-events-none'></div>
        <div className='cursor-2 hidden lg:block fixed w-48 h-48 bg-amber-300 opacity-50 rounded-full z-[60] mix-blend-overlay pointer-events-none'></div>
        {comps.current.map(({ comp , name}, index)=>{
            return (<div className={`relative min-h-[100vh] py-[50px] md:py-[70px]`} id={`${name}-container`} key={name}>
              <div id={name}>{comp}</div>
              {index !== 0 && <h3 id={`${name}-header-1`} className="absolute top-[50px] left-0 text-right p-4 md:p-8 font-serif text-7xl md:text-9xl opacity-30 -z-10">{name}</h3>}
            </div>);
        })}
        <footer className="absolute bottom-5 text-sm md:text-lg text-center pb-7 w-full leading-6">
          <p>Latest versions of Chrome, Edge, Safari, Firefox, Opera are recommended</p>
          <p>© 2023 Yumi Chen | All Rights Reserved</p>
          <a href="https://lordicon.com/"><p>Icons by Lordicon.com</p></a>
        </footer>
      </main>
    </>
  )
}
