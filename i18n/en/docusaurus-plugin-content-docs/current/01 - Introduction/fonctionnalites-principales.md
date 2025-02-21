---
sidebar_position: 2
---

# Main features

We help our clients collect and process payments with our REST APIs, which can be adapted to any platform.  

We also provide payment links for easy collection. In this case, there is no need for APIs—just create an account with us, which grants access to our back office, where users can generate payment links to collect payments from their customers.  

## Payment API  

MOALA’s payment APIs offer multiple features.  

### 🔹 1. Authentication and Security  

Before any interaction, the API requires secure authentication through:  

- A secret API key (provided by the aggregator)  
- OAuth 2.0 / JWT tokens to secure requests  

### 🔹 2. Transaction Creation  

When a user makes a purchase, the API allows the generation of a transaction with:  

- The amount and currency  
- The chosen payment method (card, mobile money, etc.)  
- A redirect URL after payment  

### 🔹 3. Payment Validation  

Once the payment is completed, the API sends a real-time notification (via Webhook) to confirm the status:  

- ✅ Payment successful  
- ❌ Payment failed  
- ⏳ Payment pending (e.g., bank transfer)  

### 🔹 4. Refund Management  

In case of cancellation or dispute, the API allows refunds.  

### 🔹 5. Reporting and Analytics  

The APIs also provide endpoints for:  

- 📄 Listing transactions  
- 💰 Checking balances and withdrawals  
- 📜 Generating financial reports  

## Payment Links  
