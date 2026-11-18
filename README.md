# Gestion de matériel

Application de gestion du matériel d'une entreprise : suivi des équipements,
de leur disponibilité et des utilisateurs qui les manipulent.

## Objectif

Centraliser les informations sur le matériel (nom, référence, disponibilité)
et sur les utilisateurs, afin de savoir à tout moment quel équipement est
disponible et qui peut l'utiliser.

## Fonctionnalités

### Disponibles

**Module matériel** (`src/materiel.js`)
- `afficherMateriel(materiel)` : affiche le nom, la référence et la disponibilité d'un matériel
- `verifierDisponibilite(materiel)` : renvoie `"Disponible"` ou `"Indisponible"`
- `supprimerMateriel(reference)` : suppression d'un matériel *(version actuelle : affiche un message, sans stockage réel)*

**Module utilisateur** (`src/utilisateur.js`)
- `creerUtilisateur(nom, email)` : crée un utilisateur
- `desactiverUtilisateur(utilisateur)` : désactive un utilisateur (`actif = false`)

### Prévues
- Historique des interventions
- Documentation technique complète

## Technologies

- **JavaScript** (modules CommonJS)
- **Node.js** pour l'exécution
- **Git / GitHub** pour le versionnage
- **Husky + Commitlint** pour le contrôle des messages de commits

## Prérequis

- [Node.js](https://nodejs.org/) version 18 ou supérieure
- npm (fourni avec Node.js)
- Git

Vérifier les versions installées :

```bash
node -v
npm -v
git --version
```

## Installation

```bash
git clone git@github.com:madou752/B3-TP-Git-01-audit.git
cd B3-TP-Git-01-audit
npm install
```

`npm install` installe les dépendances de développement et active
automatiquement les hooks Git (Husky).

## Utilisation

Les modules s'utilisent depuis un script Node.js ou la console interactive (`node`) :

```js
const { afficherMateriel, verifierDisponibilite } = require("./src/materiel");
const creerUtilisateur = require("./src/utilisateur");

const ecran = { nom: "Écran 27 pouces", reference: "ECR-027", disponible: true };

afficherMateriel(ecran);
console.log(verifierDisponibilite(ecran)); // "Disponible"

const utilisateur = creerUtilisateur("Alice Martin", "alice@example.com");
creerUtilisateur.desactiverUtilisateur(utilisateur);
```

## Structure du projet

```
.
├── docs/
│   ├── AUDIT.md          # Diagnostic des pratiques Git
│   └── notes.txt         # Notes de projet
├── src/
│   ├── materiel.js       # Gestion du matériel
│   └── utilisateur.js    # Gestion des utilisateurs
├── CONTRIBUTING.md       # Règles de contribution
└── README.md
```

## Contribuer

Les règles de nommage des branches, le format des messages de commits
(Conventional Commits) et le processus de Pull Request sont décrits dans
[CONTRIBUTING.md](CONTRIBUTING.md).