import { motion, useInView } from "framer-motion";
import { FileCode, Menu, X } from "lucide-react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#start" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Social", href: "#social" },
];

function App() {
  const [open, setOpen] = useState(false);
  const refProjetos = useRef(null);
  const isInView = useInView(refProjetos);
  const refTecnologias = useRef(null);
  const isInViewTecnologias = useInView(refTecnologias);
  const refSobre = useRef(null);
  const isInViewSobre = useInView(refSobre);
  const tecnologias = [
    { nome: "JavaScript" },
    { nome: "React" },
    { nome: "Node.js" },
    { nome: "Express" },
    { nome: "MongoDB" },
    { nome: "Next.js" },
    { nome: "TypeScript" },
    { nome: "Prisma" },
    { nome: "Bootstrap" },
    { nome: "JWT" },
    { nome: "Tailwind CSS" },
  ];

  const projetos = [
    {
      nome: "Açaitalk",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAALVBMVEVHcEwxIkk6K1o0JVA6KlpMOnAzJU44KlY6K1swIkg+L18wIklBMmQ5KlhgSoRWDPQtAAAACnRSTlMAQbhtWf7734KXOdJHnQAAAIJJREFUKJHNkEEShCAMBCWIYDLw/+duNpQlRLzb3OgaJmTbPs2+v5lIhWuhuI5x/bOUhC6Fni4hAcxcRcS7jNZgqM2uD6k7BjQ6D01oyVx/eI4CiS2nh32r3V94ySNe5sFp5zHJMgfP+S+3O55bCKMLfkXh6ls45RRjsfeejnGV+g4/9n0IUmWljWYAAAAASUVORK5CYII=",
      descricao:
        "O objetivo deste projeto 'e criar um sitema de chat que permita a comunicação entre usuários de forma rápida e eficiente. Algumas funcionalidades sao: criaçao de salas publicas e provadas, envio de mensagens de texto, alterar foto de perfil, pesquisar grupos publicos, etc. ",
      link: "https://acaitalk.site",
    },
    {
      nome: "MiniBlog",
      descricao:
        "Esse projeto trata-se de um blog minimalista para compartilhamento de textos e ideias. Algumas funcionalidades sao: Publicacao, edição e exclusão de posts e busca por tags.",
      link: "https://miniblog-lac.vercel.app/",
    },
    {
      nome: "QRCodeMaker",
      descricao:
        "App web simples feito atraves de JavaScript puro. O objetivo deste projeto 'e gerar codigos QR de forma rapida e eficiente. Permite criar QR Codes personalizados de textos, Wi-Fi, URLs, etc.",
      link: "https://qrcodemaker-mu.vercel.app/",
    },
    ,
    {
      nome: "DBClub",
      descricao:
        "Pagina web simples que faz o consumo de uma API publica do anime 'Dragon Ball' para exibir informaçoes sobre personagens, episodios e filmes da franquia. Feito com HTML, CSS e JavaScript.",
      link: "https://vinicius0919.github.io/DBCLUB/",
    }
  ];

  const redesSociais = [
    {
      nome: "Instagram",
      icone: <FaInstagramSquare size={24} />,
      link: "https://www.instagram.com/vinicciusgtr/",
    },
    {
      nome: "LinkedIn",
      icone: <FaLinkedin size={24} />,
      link: "https://www.linkedin.com/in/vinícius-lima-224785212/",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-neutral-900">
        <div className="mx-auto w-full px-4 flex items-center justify-center">
          <nav className="hidden py-6 md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-500 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen(!open)}
          >
            <Menu className="size-5p" />
          </button>
        </div>
        {open && (
          <div className="md:hidden">
            <div className="fixed bg-black/60" onClick={() => setOpen(false)}>
              <div className="flex items-center justify-between mb-2">
                <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-6 text-fuchsia-400" />
                    <span className="font-semibold">Minha Marca</span>

                    <button
                      className="ml-auto p-2 rounded-lg"
                      onClick={() => setOpen(false)}
                    >
                      <X className="size-5p" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-4 bg-slate-900 p-4 w-90">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-slate-200"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Cabeçalho */}
      <motion.section
        id="start"
        ref={refSobre}
        initial={{ opacity: 0, y: 100 }}
        animate={isInViewSobre ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="flex p-4 flex-col items-center justify-center mt-5 gap-2"
      >
        <h1 className="text-4xl font-bold">Central-Links</h1>
        <h2 className="text-2xl text-center font-semibold">
          Bem-vindo à minha central de links
        </h2>
        <p>Se você não me conhece, muito prazer, eu sou...</p>
      </motion.section>

      {/* Foto */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D4D35AQGsz5gfoqi_3Q/profile-framedphoto-shrink_200_200/B4DZmlqUiVIEAc-/0/1759420959270?e=1762189200&v=beta&t=wcWp3Zm958m1zPJII72OctDNWlWEXNqT1RcesnONFJY"
          alt="Minha Foto"
          className="rounded-full w-48 h-48 mx-auto mt-5 border-4 border-gray-800"
        />
      </motion.section>

      {/* Sobre */}
      <section
        id="about"
        className="flex p-4 flex-col justify-center m-auto gap-6"
      >
        <h2 className="text-2xl font-semibold text-center text-emerald-600">
          Vinicius Lima
        </h2>
        <p className="text-center">
          Bacharel em Sistemas de Informação pela UFRA (Universidade Federal
          Rural da Amazônia) e Desenvolvedor Web.
        </p>

        {/* Tecnologias */}
        <motion.ul
          ref={refTecnologias}
          initial={{ opacity: 0, y: 100 }}
          animate={
            isInViewTecnologias ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none text-center"
        >
          <h3 className="md:col-span-2 text-xl text-center font-semibold">
            Principais tecnologias
          </h3>
          {tecnologias.map((tech, index) => (
            <li
              key={index}
              className="flex items-center gap-8 w-40 mx-auto p-2 border 
                border-gray-300 rounded-4xl bg-neutral-900 hover:bg-neutral-800 
                hover:scale-110 hover:text-emerald-500 transition-all duration-300 cursor-pointer"
            >
              <FileCode size={16} />
              {tech.nome}
            </li>
          ))}
        </motion.ul>
      </section>

      {/* Projetos */}
      <motion.section
        id="projects"
        ref={refProjetos}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="grid p-4 grid-cols-1 lg:grid-cols-2 gap-4 mt-10 text-center"
      >
        <h2 className="lg:col-span-2 text-2xl font-semibold text-center">
          Projetos
        </h2>

        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="group p-4 border border-gray-300 rounded-4xl bg-neutral-900 hover:bg-neutral-800  transition-all duration-300"
          >
            <div className="flex group-hover:text-emerald-500 transition-all duration-300  items-center justify-center gap-4 mb-2">
              <h3 className="text-xl font-semibold">{projeto.nome}</h3>
              {projeto.img && (
                <img
                  src={projeto.img}
                  alt={projeto.nome}
                  className="w-8 h-8 rounded-lg"
                />
              )}
            </div>
            <p className="text-sm">{projeto.descricao}</p>
            <a href={`${projeto.link}`} target="_blank" className="text-emerald-500 hover:underline">
              Acessar
            </a>
          </div>
        ))}
      </motion.section>
      {/* Redes Sociais */}
      <motion.section id="social">
        <h2 className="text-2xl font-semibold text-center mt-10 mb-4">
          Redes Sociais
        </h2>
        <div className="flex justify-center gap-6">
          {redesSociais.map((rede, index) => (
            <a
              key={index}
              href={rede.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-500 transition-colors duration-300"
            >
              <div className="flex flex-col items-center">
                {rede.icone}
                <span className="text-sm mt-1">{rede.nome}</span>
              </div>
            </a>
          ))}
        </div>
      </motion.section>
      <footer className="mt-10 w-full h-[300px] p-8 bg-neutral-900 ">
        <p className="text-center text-sm text-white">
          © {new Date().getFullYear()} Vinicius Lima. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}

export default App;
