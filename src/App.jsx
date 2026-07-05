import { useState } from "react";
import TypewriterComponent from "typewriter-effect";
import BadgeCompetence from "./badgeCompetence";
import CarteProjet from "./carteProjet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <div className="bg-[rgb(12,4,176)] text-white min-h-screen w-full flex flex-col overflow-x-hidden">
      
      {/* Barre de navigation CORRIGÉE : Passage en fixed pur pour qu'elle reste toujours visible au scroll */}
      <nav className="bg-black fixed top-0 left-0 w-full z-50 p-3 flex items-center justify-center shadow-md">
        <ul className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 max-w-full text-sm md:text-base px-2">
          <li><a href="#about-me" className="hover:text-emerald-400 whitespace-nowrap transition-colors">About me</a></li>
          <li><a href="#ma-vision" className="hover:text-emerald-400 whitespace-nowrap transition-colors">vision</a></li>
          <li><a href="#competence" className="hover:text-emerald-400 whitespace-nowrap transition-colors">Competence</a></li>
          <li><a href="#projet" className="hover:text-emerald-400 whitespace-nowrap transition-colors">projet</a></li>
          <li><a href="#hobbies" className="hover:text-emerald-400 whitespace-nowrap transition-colors">Hobbies</a></li>
          <li><a href="#contact" className="hover:text-emerald-400 whitespace-nowrap transition-colors">Contact</a></li>
        </ul>
      </nav>

      {/* Bouton Mon CV */}
      <a
        href="CURRICULUM VITAE.docx.pdf"
        download="CURRICULUM VITAE.docx.pdf"
        className="bottom-4 shadow-lg text-white font-bold flex items-center text-center justify-center text-xs right-4 w-14 rounded-full h-14 cursor-pointer z-50 p-2 fixed animate-bounce bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] md:w-23 md:h-23 md:text-xl hover:animate-none"
      >
        Mon cv
      </a>

      {/* Contenu principal - pt-16 ajouté pour compenser la hauteur de la barre fixe */}
      <div className="flex-grow pt-16">
        <div className="text-center p-4">
          <h1 className="text-2xl font-bold">Hallad Hassani</h1>
          <div className="inline-block mt-2">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Bienvenue dans mon portfolio")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Developpeur Autodidacte")
                  .start();
              }}
            />
          </div>
        </div>

        {/* Section About Me */}
        <div className="border-3 border-black max-w-2xl w-full mx-auto my-10 bg-gray-800 shadow-2xl border backdrop-blur-md p-8 rounded-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500" id="about-me">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />
          <h2 className="text-xl font-bold mb-6 text-white tracking-wide flex items-center gap-2 uppercase font-black">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            About Me
          </h2>
          <div className="mb-6 flex justify-center md:justify-start">
            <img src="src/maPhoto.jpg" alt="Hallad hassani" className="w-48 rounded-full border border-black h-48 object-cover" />
          </div>
          <div className="text-white leading-relaxed text-base text-left font-normal tracking-wide min-h-[260px] md:min-h-[200px]">
            <TypewriterComponent
              options={{
                delay: 20,
                cursor: "✏",
                wrapperClassName: "text-white text-bold select-none",
                cursorClassName: "text-emerald-400 animate-pulse"
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("<span class='text-white font-bold text-lg'>Moi, c'est Hallad Hassani.</span><br/><br/>")
                  .pauseFor(300)
                  .typeString("Passionné de jeux vidéo depuis l'enfance, mon rêve était d'intégrer la grande école d'informatique des Comores. <span class='text-rose-400 font-semibold underline decoration-rose-500/40 underline-offset-4'>Recalé au concours ?</span> Ce n'était que le début de l'histoire.<br/><br/>")
                  .pauseFor(400)
                  .typeString("Loin de m'arrêter, cet échec a boosté ma détermination. Je me suis lancé en <span class='text-cyan-400 font-semibold'>autodidacte</span> sur YouTube pour maîtriser HTML, CSS et JavaScript, avant de rejoindre un FabLab pour structurer mes connaissances.<br/><br/>")
                  .pauseFor(400)
                  .typeString("Aujourd'hui, je développe des applications web dynamiques avec <span class='text-emerald-400 font-medium'>React</span> et <span class='text-emerald-400 font-medium'>Flask</span>. Curieux et insatiable, j'apprends chaque jour pour repousser mes limites technologiques. 🚀")
                  .start();
              }}
            />
          </div>
        </div>

        {/* Ma Vision */}
        <div className="p-6 max-w-4xl mx-auto text-center md:text-left" id="ma-vision">
          <h2 className="text-center text-2xl p-2 font-bold mb-4">MA VISION</h2>
          <p className="text-lg leading-relaxed">
            Moi je pense que personne ne devrait arrêter de poursuivre ses rêves à cause d'un échec. Comme dit la citation anglaise <span className="text-pink-400 font-bold">"More you learn, More you earn"</span>. Ainsi ma vision est de créer mon propre royaume dans le monde de la technologie. D'ailleurs actuellement, avec des amis on a décidé de créer <span className="text-green-500 font-extrabold">Hello world!</span>, une entreprise basée sur la résolution des problèmes du quotidien en utilisant la technologie.
          </p>
        </div>

        {/* Section Compétences */}
        <div className="max-w-4xl mx-auto p-4 md:max-w-screen overflow-hidden" id="competence">
          <h1 className="text-center text-2xl p-4 font-bold underline mb-4">Compétences</h1>
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={3500}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="[&>.swiper-wrapper]:ease-linear"
          >
            <SwiperSlide><BadgeCompetence nom="javascript" couleur="bg-black" logo="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000" /></SwiperSlide>
            <SwiperSlide><BadgeCompetence nom="react" couleur="bg-blue-700" logo="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" /></SwiperSlide>
            <SwiperSlide><BadgeCompetence nom="Tailwind" couleur="bg-green-700" logo="https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000" /></SwiperSlide>
            <SwiperSlide><BadgeCompetence nom="Flask" couleur="bg-gray-700" logo="https://img.icons8.com/?size=100&id=TtXEs5SeYLG8&format=png&color=000000" /></SwiperSlide>
            <SwiperSlide><BadgeCompetence nom="Html vanilla" couleur="bg-pink-700" logo="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" /></SwiperSlide>
            <SwiperSlide><BadgeCompetence nom="Css vanilla" couleur="bg-violet-700" logo="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" /></SwiperSlide>
            <SwiperSlide><BadgeCompetence nom="git" couleur="bg-sky-700" logo="https://img.icons8.com/?size=100&id=6Qr2kBSBemvq&format=png&color=000000" /></SwiperSlide>
          </Swiper>
        </div>

        {/* Section Projets */}
        <div id="projet" className="my-10">
          <h1 className="text-2xl text-center p-4 font-bold mb-6">Mes projets</h1>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 items-center p-4 md:items-stretch justify-center max-w-6xl mx-auto">
            <CarteProjet titre="mini-calculette" description="Une petite calculatrice arithmétique pour les calculs simples." lien="https://calculette3.netlify.app" />
            <CarteProjet titre="générateur de citations" description="Une PWA de génération de citations aléatoires pour t'accompagner dans ta journée." lien="https://citations2.netlify.app" />
            <CarteProjet titre="Study mate" description="La parfaite application (PWA) pour vous accompagner dans vos études avec bloc-notes, chrono et flashcards." lien="https://study-mate2.netlify.app" />
            <CarteProjet titre="Quiz" description="Mets-toi au défi avec un quiz d'histoire et de géographie sur le monde entier." lien="https://h-quiz.netlify.app" />
            <CarteProjet titre="pierre/papier/ciseau" description="Vis une aventure de pierre/papier/ciseau textuel contre l'ordinateur." lien="https://h-mindcut.netlify.app" />
            <CarteProjet titre="h-tick" description="Trouve la plateforme de ton horloge qui va suivre ton mood avec des thèmes amusants." lien="https://h-tick.netlify.app" />
            <CarteProjet titre="ô voleuur !!" description="Épanouis ton cerveau en jouant au voleur impossible. Atteins un score de 15 !" lien="https://cour-voleur.netlify.app" />
          </div>
        </div>

        {/* Section Hobbies */}
        <div id="hobbies" className="pb-12">
          <section className="max-w-4xl mx-auto my-12 p-8 bg-slate-900 text-slate-100 rounded-2xl shadow-xl border border-slate-800">
            <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hobbies
            </h2>
            <p className="text-lg leading-relaxed text-slate-300 mb-8">
              Véritable passionné par l'univers de la <span className="text-cyan-400 font-semibold">technologie</span> sous toutes ses formes, j'aime donner vie à des idées en combinant électronique, design d'objet et fabrication numérique.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⚡</span>
                  <h3 className="text-xl font-bold text-slate-100">Électronique & Conception</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Formé à l'écosystème <span className="font-medium text-slate-200">Arduino</span>, je maîtrise les bases de l'électronique pour créer des systèmes interactifs. Mon expertise s'étend aussi à l'impression 3D.
                </p>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🗣️</span>
                  <h3 className="text-xl font-bold text-slate-100">Ouverture au monde</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Curieux de nature et toujours en quête d'apprentissage, j'occupe mon temps libre à <span className="font-medium text-slate-200">apprendre de nouvelles langues</span>.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-sm text-slate-400">
                <span className="font-semibold text-slate-300">Quand je ne crée pas :</span> Vous me trouverez sûrement en train de décoder une intrigue de <span className="text-red-400 font-medium">film d'espionnage</span>.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-xs font-semibold bg-red-500/10 text-red-400 rounded-full border border-red-500/20">🕵️‍♂️ Agent Secret</span>
                <span className="px-3 py-1 text-xs font-semibold bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">🎬 Horreur</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div id="contact" className="items-center text-center">
        <h1 className="text-2xl font-bold p-2">Contactez moi</h1>
        <div className="flex gap-30 mb-8 text-center justify-center">
          <a href="https://wa.me/2693532713" className="bg-green-500  rounded-full px-6 py-2 font-semibold hover:bg-green-600 transition-colors">whatsapp</a>
          <a href="mailto:halladhassani6@gmail.com" className="bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">email</a>
        </div>
            <form action="" className="border-3 p-3 border-black md:w-3xl m-2 rounded-lg mx-auto w-100 items-center text-center">
              <input type="text" placeholder="entre votre email/numero whatsapp" className="border-2 w-90 rounded-full p-2 md:w-2xl"/><br />
              <textarea name="" id="" placeholder="entrez votre demande " className="border-2 w-80 rounded-md m-3 p-2 md:w-2xl"></textarea><br />
              <button className="cursor-pointer border-3 bg-white text-black p-2 font-bold rounded-full w-45 hover:bg-slate-400" onClick={()=>{alert(`🚨❌❌demande non prise en charge a cause d'une maintenance, veuillez nous conatactez avec whatsapp ou email. merci pour votre attention !`)}}>envoyer</button>
            </form>
      </div>
    </div>
  );
}

export default App;