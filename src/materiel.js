function afficherMateriel(materiel) {
    console.log("Materiel : " + materiel.nom);
    console.log("Reference : " + materiel.reference);
    console.log("Disponible : " + materiel.disponible);
}

function verifierDisponibilite(materiel) {
    if (materiel.disponible == true) {
        return "Disponible";
    } else {
        return "Indisponible";
    }
}

module.exports = {
    afficherMateriel,
    verifierDisponibilite
};

function supprimerMateriel(reference) {
    console.log("Suppression du materiel " + reference);
}

module.exports.supprimerMateriel = supprimerMateriel;
