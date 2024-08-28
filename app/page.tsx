import Trajetoria from "@/components/trajetoria"
import Intro from "@/components/intro"
import Projetos from "@/components/projetos"
import SectionDivider from "@/components/section-divider"
import Skills from "@/components/skills"
import Sobre from "@/components/sobre"
import Contato from "@/components/contato"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Sobre />
      <Projetos />
      <Skills />
      <Trajetoria />
      <Contato />
    </main>
  )
}
