"use client"
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { TechCard } from "./TechCard"
import { SkilsTech, categoryLabels } from "../data/techSkilsData"

export function SkilsCarousel({ category, techs }: { category: keyof typeof categoryLabels; techs: SkilsTech[] }) {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.3 }}
            className='py-8'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            {/* Título */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{categoryLabels[category]}</h3>
                <div className="h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            {/* Wrapper do carousel */}
            <div className="w-fit mx-auto">
                <Swiper
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards, Navigation, Autoplay]}
                    cardsEffect={{
                        perSlideOffset: 8,
                        perSlideRotate: 2,
                        rotate: true,
                        slideShadows: true,
                    }}
                    navigation={{
                        nextEl: `.swiper-button-next-${category}`,
                        prevEl: `.swiper-button-prev-${category}`,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    loop={true}
                    className="w-64 h-48"
                >
                    {techs.map((tech, index) => (
                        <SwiperSlide key={`${category}-${index}`} className="rounded-xl">
                            <TechCard tech={tech} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Botões embaixo */}
                <div className="flex justify-center gap-6 mt-6">
                    <div
                        className={`swiper-button-prev-${category} w-10 h-10 bg-background/80 hover:bg-background border border-border rounded-full flex items-center justify-center cursor-pointer transition-all shadow-lg backdrop-blur-sm`}
                    >
                        <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div
                        className={`swiper-button-next-${category} w-10 h-10 bg-background/80 hover:bg-background border border-border rounded-full flex items-center justify-center cursor-pointer transition-all shadow-lg backdrop-blur-sm`}
                    >
                        <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
