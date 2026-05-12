import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(trackRef.current, {
                x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                }
            })

            const shadow = { x: 40 }

            const applyTextShadow = (x: number) => {
                const value = [
                    `${x * 0.3}px 6px 0px rgba(15,23,42,0.12)`,
                    `${x * 0.6}px 14px 10px rgba(15,23,42,0.10)`,
                    `${x}px 26px 24px rgba(15,23,42,0.08)`,
                ].join(', ')
                sectionRef.current?.querySelectorAll<HTMLElement>('.headlineBox').forEach(el => {
                    el.style.textShadow = value
                })
            }

            applyTextShadow(shadow.x)

            gsap.to(shadow, {
                x: -20,
                ease: 'none',
                onUpdate: () => applyTextShadow(shadow.x),
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                }
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="h-[200vh]">
            <div className="sticky top-0 h-screen overflow-hidden bg-slate-800/40">
                <div ref={trackRef} className="flex h-full">
                    <div className="min-w-[70vw] h-full flex flex-col items-center justify-center ">
                        <div className="headlineBox">
                            <h1 className="headlineSemi text-slate-800 ml-10">Welcome to</h1>
                            <h1 className="headlineSemi text-slate-800">the <span className="headlineBold"> Portfolio </span> of</h1>
                            <h1 className="headlineSemi text-slate-800 ml-20">Johannes Lindell</h1>
                        </div>
                    </div>
                    <div className="min-w-[30vw] h-full">
                        <h1>Hallo 2</h1>
                    </div>
                    <div className="min-w-[70vw] h-full flex flex-col items-center justify-center">
                        <div className="headlineBox">
                            <h1 className="headlineSemiSmal text-slate-800 ml-10">I'm a junior</h1>
                            <h1 className="headlineBold text-slate-800 ml-26">Developer</h1>
                            <h1 className="headlineSemi text-slate-800 ml-6">I like to Develop</h1>
                            <h1 className="headlineSemiSmal text-slate-800">both myself</h1>
                            <h1 className="headlineSemiSmal text-slate-800 ml-20">and software</h1>
                            <h1 className="headlineSemi text-slate-800 ml-22">let me do</h1>
                            <h1 className="headlineBold text-slate-800 ml-5">Developing <span className="headlineSemi"> for </span> You</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
