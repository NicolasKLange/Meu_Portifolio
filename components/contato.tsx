"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast';

export default function Contato() {
  const { ref } = useSectionInView('Contato');

  return (
    <motion.section id='contato' ref={ref} className='mb-20 sm:mb-28 w-[min(100%,30rem)] text-center scroll-mt-28'
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1 }}
        viewport={{
            once: true,
        }}
    >
      <SectionHeading>Entre em Contato</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>Fale comigo atráves do meu e-mail, <a className='underline' href='mailto:rodrigvues@gmail.com'>rodrigvues@gmail.com</a>, ou através da caixa de mensagem abaixo.</p>
      <form className='mt-10 flex flex-col dark:text-black' 
      action={async (formData) => {
        const {data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent succesfully!");
      }} >
        <input 
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
          type="email" 
          name='senderEmail'
          required
          maxLength={500}
          placeholder='Seu E-mail' 
        />
        <textarea 
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
          name="message" 
          required
          maxLength={500}   
          placeholder='Sua Mensagem' 
        />
        <SubmitBtn/>
      </form>
    </motion.section>
  )
}
