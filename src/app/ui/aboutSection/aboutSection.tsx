import Typewriter from "@/app/ui/animation/typewriter";
import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="bg-[#111827] text-white px-4 py-20">
      <div className="max-w-[1440px] mb-4 mx-auto grid grid-cols-1 lg:grid-cols-2  items-center">
        {/* Coluna da esquerda - Fotos */}
        <div className="flex flex-col gap-10 items-center">
          {/* Pessoa 1 */}
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/wellington.webp" // substitua pelo seu caminho real
                alt="Wellington de Brito"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">Wellington de Brito</p>
              <p className="text-sm text-zinc-300">
                Fullstack Developer
                <br />
                Co-Fundador
              </p>
            </div>
          </div>

          {/* Pessoa 2 */}
          <div className="flex items-center gap-4">
            <div>
              <p className="font-semibold">Igor Sena</p>
              <p className="text-sm text-zinc-300">
                Fullstack Developer
                <br />
                Fundador
              </p>
            </div>
            <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/igor.webp" // substitua pelo seu caminho real
                alt="Igor Sena"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Coluna da direita - Texto */}
        <div className="space-y-6 mt-6 text-center lg:text-left">
          <Typewriter />
          <h3 className="text-2xl font-semibold">
            Simples, funcional e estratégica — do jeito que seu negócio precisa!
          </h3>
          <p className="font-sans">
            A WeSen Technologies nasceu da amizade e da paixão de dois
            profissionais por transformar ideias em soluções reais. O que
            começou como uma inquietação ao ver empresas incríveis sem presença
            digital evoluiu para uma equipe focada em entregar tecnologia com
            propósito.
          </p>
          <p className="font-sans">
            De sites institucionais a sistemas personalizados, nossa missão vai
            muito além de desenvolver projetos: criamos conexões, otimizamos
            processos e aceleramos o crescimento de quem confia no nosso
            trabalho.
          </p>
          <p className="font-sans">
            Trabalhar com a gente é ter uma parceria verdadeira, atendimento
            próximo e soluções que combinam agilidade, estratégia e inovação.
            Vem com a WeSen!
          </p>
        </div>
      </div>
    </section>
  );
}
