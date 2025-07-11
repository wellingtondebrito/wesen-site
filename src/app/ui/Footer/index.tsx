import {
  Instagram,
  Linkedin,
  Github,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Redes sociais */}
        <div>
          <p className="text-sm mb-2 sm:mb-0">Nossas redes:</p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Direitos autorais */}
        <p className="text-xs text-zinc-400">
          © Wesen Technologies | {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}