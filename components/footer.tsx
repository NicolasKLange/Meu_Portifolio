import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 block text-xs'>
            &copy; 2024 Vitor Rodrigues. Todos os direitos reservados.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>Sobre o Website:</span> feito com React & Next.js ( usando App Router e Server Actions ), Typescript, Tailwind CSS, Framer Motion, React.Email e Resend e Vercel.
        </p>
    </footer>
  )
}
