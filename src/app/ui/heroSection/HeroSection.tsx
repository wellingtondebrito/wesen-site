import Typewriter from "@/app/ui/animation/typewriter";

export default function HeroSection() {
  return (
    <section className="bg-[#1F2937] lg:grid lg:h-screen lg:place-content-center  py-24">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center md:max-w-prose">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            <strong className="bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] bg-clip-text text-transparent">Soluções Digitais</strong> Sob
            Medida para o Seu Negócio
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Sites, aplicativos, sistemas e bots criados com foco em inovação,
            performance e crescimento.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded  bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
             Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
