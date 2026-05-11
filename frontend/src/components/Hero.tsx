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
        })

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="h-[200vh]">
            <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-br from-taupe-200 to-slate-600">
                <div ref={trackRef} className="flex h-full">
                    <div className="min-w-[70vw] h-full">
                        <h1 className="headline text-shadow-lg text-shadow-black">Welcome to<br />the Portfolio of<br />Johannes Lindell</h1>
                    </div>
                    <div className="min-w-[60vw] h-full">
                        <h1>Hallo 2</h1>
                    </div>
                    <div className="min-w-[70vw] h-full">
                        <h1>Hallo 3</h1>
                    </div>
                </div>
            </div>
        </section>
    )
} 
