import React, { useRef } from 'react';
import EyesFollowCursor from '@/components/EyesFollowCursor';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Showcase: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        const chars = containerRef.current.querySelectorAll('.char');

        chars.forEach((char) => {
            (char as HTMLElement).style.display = 'inline-block';
            const onEnter = () => {
                gsap.to(char, {
                    color: '#00674F',
                    scale: 1.15,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            };
            const onLeave = () => {
                gsap.to(char, {
                    color: '#212121',
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            };
            char.addEventListener('mouseenter', onEnter);
            char.addEventListener('mouseleave', onLeave);
        });

        return () => {
            chars.forEach((char) => {
                char.replaceWith(char.cloneNode(true) as HTMLElement);
            });
        };
    }, []);

    return (
        <section className="relative Showcase w-full h-[40vh] md:h-[75vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
            <div
                ref={containerRef}
                data-scroll
                data-scroll-speed="-.8"
                className="absolute inset-0 flex flex-col justify-center items-center"
            >
                <h1 className="title text-[20vw] text-[#212121] font-FoundersGrotesk leading-none">
                    {'Site'.split('').map((char, i) => (
                        <span key={`t-${i}`} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                    ))}
                </h1>
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <EyesFollowCursor />
                </div>
                <h1 className="title text-[20vw] text-[#212121] font-FoundersGrotesk leading-none">
                    {'Nerve'.split('').map((char, i) => (
                        <span key={`b-${i}`} className="char inline-block">{char}</span>
                    ))}
                </h1>
            </div>
        </section>
    );
};
