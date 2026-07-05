// src/CarteProjet.jsx
export default function CarteProjet({ titre, description, lien }) {
  return (
    <div className="bg-slate-800 border border-black border-3 p-6 rounded-2xl  shadow-xl w-full max-w-sm flex flex-col justify-between group hover:scale-[1.03] hover:border-emerald-500/50 transition-all duration-300 text-left  ">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2">
          {titre}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div>
        {lien ? (
          <a 
            href={lien} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300"
          >
            Voir le projet →
          </a>
        ) : (
          <span className="text-xs font-semibold text-slate-500 italic">
            Projet interne / En cours 🚀
          </span>
        )}
      </div>
    </div>
  );
}