# Diagnostic de l'existant – B3-TP-Git-01-audit

## Commandes utilisées
- `git branch -a` : branches locales et distantes
- `git log --oneline --graph --all` : structure de l'historique
- `git log --format="%h | %an | %ad | %s"` : auteurs, dates, messages
- `git log --stat` / `git show <hash>` : contenu réel de chaque commit
- Lecture de `README.md`, `.gitignore`, `docs/notes.txt`, `src/*.js`

## Problèmes constatés

### 1. Messages de commits vagues et sans convention
**Preuve :** les 4 commits s'appellent `initial`, `modifications`, `update`, `correction`.
**Conséquences :** impossible de savoir ce que fait un commit sans lire son diff ;
recherche d'une régression lente ; aucun changelog générable automatiquement.

### 2. Messages trompeurs par rapport au contenu
**Preuve :**
- `correction` (33669b5) ne corrige rien : il ajoute la fonction `desactiverUtilisateur`.
- `modifications` (105c84a) ajoute la fonction `supprimerMateriel`.
- `update` (5bdf759) ajoute une tâche dans `docs/notes.txt`.
**Conséquences :** l'historique ment sur la nature des changements. Une nouvelle
fonctionnalité passée pour un correctif échappe à l'attention des relecteurs et
fausse le versionnage (une `feat` doit faire évoluer la version mineure, pas le patch).

### 3. Aucune branche, tout est commité directement sur `main`
**Preuve :** `git branch -a` ne montre que `main` (y compris sur le dépôt d'origine),
l'historique est strictement linéaire, sans aucun merge ni Pull Request.
**Conséquences :** pas d'isolation du travail en cours, pas de revue de code,
risque de casser la version stable ; travail en parallèle à plusieurs impossible
à organiser.

### 4. Documentation insuffisante
**Preuve :** le `README.md` fait 2 lignes (titre + une phrase). Aucun prérequis,
aucune instruction d'installation ni d'utilisation, aucun `CONTRIBUTING.md`.
**Conséquences :** un nouveau développeur ne peut ni installer, ni lancer, ni
contribuer au projet sans demander à quelqu'un ; les règles restent orales et
ne sont pas appliquées.

### 5. Suivi des tâches dans un fichier texte
**Preuve :** `docs/notes.txt` sert de liste de tâches (« Ajouter la gestion des
equipements », « Ajouter un historique des interventions »…), modifiée par commit.
**Conséquences :** aucune assignation, aucun statut, aucun lien entre une tâche
et le code qui la réalise. Ce rôle devrait être tenu par des Issues GitHub.

### 6. Configuration du projet incomplète
**Preuve :** le `.gitignore` ignore `node_modules/` mais il n'y a pas de
`package.json` ; aucun test, aucun script de lancement.
**Conséquences :** dépendances et version de Node non documentées, aucun moyen
de vérifier automatiquement qu'une modification ne casse rien.

### 7. Qualité de code non relue
**Preuve :**
- Exports incohérents : dans `materiel.js`, `module.exports = {...}` puis
  `module.exports.supprimerMateriel = ...` ajouté plus bas ; dans
  `utilisateur.js`, `desactiverUtilisateur` est accroché comme propriété de la
  fonction `creerUtilisateur`.
- `supprimerMateriel` ne supprime rien, elle se contente d'un `console.log`.
- Comparaison non stricte `materiel.disponible == true`.
**Conséquences :** code fragile et trompeur intégré directement sur `main` ;
une revue de code via Pull Request aurait permis de le détecter.

### 8. Identité des auteurs non exploitable
**Preuve :** tous les commits sont signés `Enseignant <enseignant@example.com>`.
**Conséquences :** traçabilité nulle dans une équipe : impossible de savoir qui
a écrit quoi ni à qui poser une question sur une modification.

## Améliorations apportées
- `CONTRIBUTING.md` : nommage des branches, Conventional Commits, règles de PR et de fusion.
- `README.md` complet : objectif, fonctionnalités, technologies, prérequis, installation, utilisation.
- Contrôle automatique des messages de commit avec Husky + Commitlint.
- Travail réalisé sur la branche `docs/professionnalisation` et soumis par Pull Request.