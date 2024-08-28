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
  Desde criança, já pensava em começar uma carreira na área de{" "}
  <span className="font-medium">programação</span> pelo meu interesse na{" "}
  <span className="font-medium">internet</span> e em computadores, e aos 15 anos{" "}
  <span className="font-medium">comecei</span> o curso técnico em desenvolvimento de{" "}
  <span className="font-medium">sistemas</span>, onde aprendi como realmente{" "}
  <span className="font-medium">programar na prática</span>. Aprendo principalmente{" "}
  <span className="font-medium">lógica, programação orientada a objetos</span> e{" "}
  <span className="font-medium">banco de dados</span>, com{" "}
  <span className="font-medium">Java e MySQL</span>. No final de 2023, tive também a{" "}
  <span className="font-medium">oportunidade</span> de participar de um{" "}
  <span className="font-medium">Bootcamp de Next.js</span> na{" "}
  <span className="font-medium">Escola Eliti</span>, onde por pouco mais de{" "}
  <span className="font-medium">dois meses</span> e dentro de um ambiente{" "}
  <span className="font-medium">profissional</span>, na sede da{" "}
  <span className="font-medium">AMcom</span> (que também me preparou muito para o{" "}
  <span className="font-medium">começo como profissional</span>), me aprofundei no{" "}
  <span className="font-medium">front-end</span> criando meu primeiro projeto em{" "}
  <span className="font-medium">Next.js</span>, um jogo da velha. No Bootcamp,{" "}
  <span className="font-medium">aprendi muito TypeScript e React</span>, e foi ali{" "}
  que fui levado para o lado do{" "}
  <span className="font-medium">Front-end</span>, meu principal foco no momento.
</p>
<p>
  <span className="italic">Fora da programação</span>, gosto muito de{" "}
  <span className="font-medium">esportes no geral</span>, principalmente{" "}
  <span className="font-medium">futebol</span>, onde acompanho as ligas{" "}
  <span className="font-medium">brasileiras e inglesas</span>. Também adoro{" "}
  <span className="font-medium">andar de bike</span>, viajar e conhecer{" "}
  <span className="font-medium">lugares novos</span> no geral.
</p>

    </motion.section>
  )
}
