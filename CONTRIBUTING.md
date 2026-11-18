# Guide de contribution

Ce document définit les règles à respecter pour contribuer au projet
**Gestion de matériel**. Toute contribution doit passer par une branche dédiée
et une Pull Request.

## 1. Workflow général

1. Partir d'une branche `main` à jour : `git switch main && git pull`
2. Créer une branche dédiée (voir conventions ci-dessous)
3. Développer en faisant des commits atomiques et conformes
4. Mettre la branche à jour avec `main` avant la PR : `git pull --rebase origin main`
5. Pousser la branche et ouvrir une Pull Request vers `main`
6. Attendre la revue et l'approbation avant la fusion

Aucun commit ne doit être poussé directement sur `main`.

## 2. Nommage des branches

Format : `<type>/<description-courte>`

- Tout en minuscules, mots séparés par des tirets (kebab-case)
- Description courte et explicite (3 à 5 mots)
- Numéro d'Issue en préfixe de la description si elle existe : `feat/12-suppression-materiel`

| Préfixe | Usage | Exemple |
|---|---|---|
| `feat/` | Nouvelle fonctionnalité | `feat/suppression-materiel` |
| `fix/` | Correction d'un bug | `fix/disponibilite-materiel` |
| `docs/` | Documentation uniquement | `docs/professionnalisation` |
| `refactor/` | Restructuration sans changement fonctionnel | `refactor/exports-modules` |
| `test/` | Ajout ou modification de tests | `test/module-utilisateur` |
| `chore/` | Outillage, configuration, dépendances | `chore/husky-commitlint` |
| `hotfix/` | Correction urgente en production | `hotfix/crash-creation-utilisateur` |

Interdit : `test`, `dev2`, `ma-branche`, `update`, noms sans préfixe ni sens.

## 3. Messages de commits (Conventional Commits)

Format :

    <type>(<scope>): <description>

    [corps optionnel]

    [footer optionnel]

- **type** : obligatoire, parmi la liste ci-dessous
- **scope** : facultatif, module concerné (`materiel`, `utilisateur`, `readme`, `deps`…)
- **description** : en minuscules, à l'impératif, sans point final, 100 caractères maximum
- **corps** : explique le *pourquoi* si ce n'est pas évident
- **footer** : référence d'Issue (`Closes #12`) ou `BREAKING CHANGE:` pour un changement incompatible

Un commit = une modification logique. On ne mélange pas une fonctionnalité,
un correctif et de la documentation dans le même commit.

### Types autorisés

| Type | Usage |
|---|---|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation |
| `style` | Mise en forme sans impact sur le code (espaces, indentation) |
| `refactor` | Restructuration du code sans changement de comportement |
| `perf` | Amélioration des performances |
| `test` | Ajout ou correction de tests |
| `build` | Système de build, dépendances |
| `ci` | Intégration continue |
| `chore` | Tâches diverses (configuration, outillage) |
| `revert` | Annulation d'un commit précédent |

### Exemples adaptés au projet

    feat(materiel): ajouter la suppression d'un materiel par reference
    feat(utilisateur): ajouter la desactivation d'un utilisateur
    fix(materiel): utiliser une comparaison stricte pour la disponibilite
    docs(readme): ajouter les instructions d'installation et d'utilisation
    refactor(materiel): regrouper les exports du module en un seul objet
    test(utilisateur): verifier la creation d'un utilisateur actif
    chore(deps): installer husky et commitlint
    feat(interventions): ajouter l'historique des interventions

    Closes #4

### Exemples refusés

    update              -> aucun type, aucune information
    correction          -> ne dit pas ce qui est corrigé
    Fix: Bug            -> type en majuscule, description vague
    feat: ajout.        -> description non explicite, point final

Ces règles sont vérifiées automatiquement à chaque commit par **Commitlint**
(déclenché par **Husky**). Un commit non conforme est refusé.

## 4. Règles de création d'une Pull Request

- La PR cible `main`
- Le **titre** respecte le format Conventional Commits
- La **description** contient :
  - **Contexte** : pourquoi cette modification
  - **Changements** : ce qui a été fait
  - **Vérifications** : comment la modification a été testée
  - **Issue liée** : `Closes #<numéro>` si applicable
- La PR est **petite et ciblée** : une seule fonctionnalité ou un seul correctif
- La branche est **à jour avec `main`** et sans conflit
- Au moins un **relecteur** est désigné

## 5. Conditions de validation avant fusion

Une Pull Request ne peut être fusionnée que si :

- [ ] Au moins **une approbation** d'un autre membre de l'équipe
- [ ] Toutes les **conversations de revue sont résolues**
- [ ] Les **commits respectent Conventional Commits**
- [ ] La branche est **à jour avec `main`**, sans conflit
- [ ] Les **tests passent** (lorsqu'ils existent)
- [ ] La **documentation** est mise à jour si le comportement change
- [ ] Aucun fichier inutile (logs, `node_modules/`, fichiers personnels)

L'auteur ne fusionne pas sa propre PR sans approbation. Après la fusion,
la branche est supprimée.