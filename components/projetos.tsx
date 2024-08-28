"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Projeto from './projeto'
import { useSectionInView } from '@/lib/hooks'

export default function Projetos() {
  const { ref } = useSectionInView('Projetos', 0.5);

  return (
    <section ref={ref} id='projetos' className='scroll-mt-28 mb-28' >
        <SectionHeading>Meus projetos</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Projeto {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}
