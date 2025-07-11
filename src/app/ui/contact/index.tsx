import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative h-[500px] md:h-[600px]">
      {/* Imagem de fundo */}
      <Image
        src="/bg-contato.webp" // substitua pelo seu caminho
        alt="Computador mostrando a tela com códigos"
        fill
        className="object-cover"
        quality={90}
        priority
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-[#1E1E1E]/70 z-10" />

      {/* Conteúdo centralizado */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Pronto para tirar sua ideia do papel?
        </h2>
        <p className="text-base md:text-lg max-w-xl mb-6 font-semibold">
          Mande mensagem no nosso WhatsApp e bora iniciar o processo de
          descoberta do seu projeto!
        </p>
        <a
          href="https://wa.me/5599999999999" // coloque seu número com DDI
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] px-5 py-3 font-medium text-white hover:bg-indigo-700  shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Mandar mensagem
        </a>
      </div>
    </section>
  );
}
