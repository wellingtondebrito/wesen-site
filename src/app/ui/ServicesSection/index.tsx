import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
        <h2 className="text-2xl font-semibold font-sans text-white sm:text-3xl mb-8">
          Nossas soluções
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="max-h-[416px] border border-[#78909C] rounded flex items-center flex-col justify-around p-4 gap-6">
            <Image
              src="/sites.svg"
              alt="Criação de Sites"
              width={40}
              height={40}
            />
            <h4 className="text-4xl font-sans font-semibold text-center">
              Sites Profissionais
            </h4>
            <p className="text-center font-sans">
              Desenvolvemos sites rápidos, responsivos e com foco em conversão.
              Ideal para empresas que querem se destacar online com uma presença
              profissional.
            </p>
            <a
              className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700  shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              href="#"
            >
              Agende uma reunião
            </a>
          </div>
          <div className="max-h-[416px] border border-[#78909C] rounded flex items-center justify-around flex-col p-4 gap-6">
            <Image
              src="/mobile.svg"
              alt="Criação de aplicativos mobile"
              width={40}
              height={40}
            />
            <h4 className="text-4xl font-sans font-semibold text-center">
              Aplicativos Mobile
            </h4>
            <p className="text-center font-sans">
              Criamos aplicativos para Android e iOS que conectam você ao seu
              público com fluidez, design moderno e performance.
            </p>
            <a
              className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700  shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              href="#"
            >
              Agende uma reunião
            </a>
          </div>
          <div className="max-h-[416px] border border-[#78909C] rounded flex items-center justify-around flex-col p-4 gap-6">
            <Image
              src="/bots.svg"
              alt="Criação de bots e integrações"
              width={40}
              height={40}
            />
            <h4 className="text-4xl font-sans font-semibold text-center">
              Bots e Integrações
            </h4>
            <p className="text-center font-sans">
              Automatizamos tarefas repetitivas com bots para WhatsApp, Telegram
              e plataformas web. Reduza custos e ganhe produtividade.
            </p>
            <a
              className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700  shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              href="#"
            >
              Agende uma reunião
            </a>
          </div>
          <div className="max-h-[416px] border border-[#78909C] rounded flex items-center justify-around flex-col p-4 gap-6">
            <Image
              src="/softwares.svg"
              alt="Criação de sistemas completos"
              width={40}
              height={40}
            />
            <h4 className="text-4xl font-sans font-semibold text-center">
              Sistemas sob Demanda
            </h4>
            <p className="text-center font-sans">
             Automatize processos com sistemas feitos sob medida para sua operação. Integrados, intuitivos e seguros.
            </p>
            <a
              className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700  shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              href="#"
            >
              Agende uma reunião
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
