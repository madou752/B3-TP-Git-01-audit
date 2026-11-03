function creerUtilisateur(nom, email) {
    return {
        nom: nom,
        email: email,
        actif: true
    };
}

module.exports = creerUtilisateur;
