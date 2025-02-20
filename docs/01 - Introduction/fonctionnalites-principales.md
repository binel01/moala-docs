---
sidebar_position: 2
---

# Fonctionnalités principales

Nous aidons nos clients à encaisser et effectuer des paiements avec nos API REST, que chacun peut adapter à sa plateforme.

Nous avons également les liens de paiement pour encaisser. Dans ce cas, pas besoin des API mais juste avoir un compte chez nous, qui donne accès à notre back office à partir duquel il peut créer des liens de paiements pour encaisser auprès de ses clients.


## API de paiement

Les APIs de paiement de MOALA fournissent plusieurs fonctionnalités.

### 🔹 1. Authentification et Sécurité

Avant toute interaction, l'API nécessite une authentification sécurisée via :

- Clé API secrète (fournie par l’agrégateur)
- OAuth 2.0 / JWT Tokens pour sécuriser les requêtes

### 🔹 2. Création d’une transaction

Lorsqu’un utilisateur effectue un achat, l’API permet de générer une transaction avec :

- Le montant et la devise
- Le mode de paiement choisi (carte, mobile money, etc.)
- Une URL de redirection après paiement

### 🔹 3. Validation du paiement

Une fois le paiement effectué, l’API envoie une notification en temps réel (via Webhook) pour confirmer le statut :

- ✅ Paiement réussi
- ❌ Paiement échoué
- ⏳ Paiement en attente (ex. virement bancaire)

### 🔹 4. Gestion des remboursements

En cas d’annulation ou de litige, l’API permet de rembourser un paiement.

### 🔹 5. Reporting et Analyse

Les APIs fournissent aussi des endpoints pour :

- 📄Lister les transactions
- 💰Consulter les soldes et retraits
- 📜Générer des rapports financiers

## Liens de paiement

