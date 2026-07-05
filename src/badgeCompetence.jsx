import { useState } from "react";

export default function BadgeCompetence({nom,couleur, logo}){
    return(
        <span className={`px-4 py-2 w-30 rounded-full text-sm font-bold text-white ${couleur} flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}>
            {logo && <img src={logo} alt={`logo ${nom}`} className="w-4 h-4 object-contain"/>}
             {nom}
        </span>
    )
}