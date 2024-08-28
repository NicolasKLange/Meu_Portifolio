"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'


export default function Sobre() {
  const { ref } = useSectionInView('Sobre');

  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    id='sobre'
    >
        <SectionHeading>Sobre mim</SectionHeading>
        <p className='mb-3'>
        Desde criança, já pensava em começar minha carreira na área de programação pelo 
        meu interesse na internet e descobrir como funcionava os jogos on-line, e aos meus 15 anos comecei o curso 
        técnico em desenvolvimento de sistemas integrado no ensino médio, onde estou aprendendo como realmente programar 
        na prática e como é dentro do mundo do trabalho pelos projetos que estamos desenvolvendo em grupos usando a metodologia SCRUM. 
        Estou aprendendo principalmente lógica, programação orientada a objetos e 
        banco de dados, utilizando Java e MySQL. Sempre estou em busca de novos oportunidades de cursos e certividados, para aprimorar
        os meus conhecimentos nas linguagens de programação e também minhas softs skills como pessoa.
        
        No meu tempo livre, gosto de praticar esportes, como futebol, volêi e também fazer academia, além disso gosto muito de viajar 
        e conhecer novos lugares, sempre junto a minha família que tenho muito orgulho de sempre estar com eles.
  
</p>
    </motion.section>
  )
}
