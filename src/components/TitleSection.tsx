import { motion } from 'motion/react';

type Props = {
    title: string
}

export const TitleSection = ({ title }: Props) => {


    return (
        <motion.div
            viewport={{ once: true, amount: 0.6 }}
            className='py-8'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            <h3
                className='text-center text-4xl md:text-5xl text-primary'
            >{title}</h3>
            <div className='h-1 md:h-2 mt-2 md:mt-4 max-w-36 mx-auto rounded-lg bg-primary' />

        </motion.div>
    )
}