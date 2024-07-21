# E-Bank Solution

## Contexte du Projet

La digitalisation des services bancaires est devenue incontournable pour offrir aux clients une expérience fluide et accessible. Cette application e-bank vise à fournir une plateforme sécurisée et intuitive permettant aux utilisateurs de gérer leurs comptes bancaires et d'effectuer des opérations financières en ligne.

## Technologies Utilisées

- **Frontend :** Angular 2+, TypeScript, SCSS, Bootstrap/Tailwind CSS
- **Backend :** Spring Boot, Java, MySQL, Spring Security (JWT), Docker
- **Outils de Build :** Maven (pour le backend), Angular CLI (pour le frontend)
- **Documentation API :** Springfox (Swagger), Postman
- **Tests :** JUnit (backend), Angular Testing Framework (frontend)

## Objectifs

### Partie Frontend (Angular)
- Développer des interfaces utilisateur réactives pour l'application e-bank.
- Consommer les APIs via Angular pour créer une application monopage fonctionnelle et responsive.

### Partie Backend (Spring Boot)
- Créer une API REST sécurisée pour gérer les comptes bancaires, les cartes, les transferts d'argent, et les bénéficiaires.
- Assurer l'authentification et l'autorisation des utilisateurs à l'aide de Spring Security et JWT.
- Containeriser l'application avec Docker pour faciliter le déploiement.

## Fonctionnalités Principales

### Frontend
- **Interface Utilisateur :** Création de formulaires pour la gestion des comptes, cartes, et bénéficiaires.
- **Responsive Design :** Assurer que l'application est utilisable sur tous les appareils (ordinateurs, tablettes, téléphones).
- **Interactions Dynamiques :** Utilisation d'Angular pour des interactions dynamiques et des mises à jour en temps réel des données.

### Backend
- **Gestion des Comptes :** Création, consultation des soldes, historiques de transactions, et fermeture de comptes.
- **Gestion des Cartes Bancaires :** Consultation, activation, désactivation, et blocage des cartes.
- **Transferts d'Argent :** Transferts internes et externes, gestion des bénéficiaires.
- **Sécurité :** Authentification avec Spring Security, gestion des JWT pour les sessions utilisateur.
- **Déploiement Docker :** Utilisation de Docker pour containeriser l'application backend.

## Instructions d'Installation et d'Exécution

### Prérequis

- JDK 17 ou supérieur
- Maven
- Docker (pour le déploiement containerisé)
- Node.js et npm (pour le frontend)

### Installation Backend

1. **Cloner le repository :**
   ```bash
   git clone https://github.com/your-username/e-bank-solution-backend.git
   cd e-bank-solution-backend
