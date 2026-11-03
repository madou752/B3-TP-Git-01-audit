function creerUtilisateur(nom, email) {
    return {
        nom: nom,
        email: email,
        actif: true
    };
}

module.exports = creerUtilisateur;

function desactiverUtilisateur(utilisateur) {
    utilisateur.actif = false;
    return utilisateur;
}

module.exports.desactiverUtilisateur = desactiverUtilisateur;
