# Bank Argent API Documentation (Enhanced)

This document provides an in-depth overview of the enhancements and additions to the Swagger API documentation for the Bank Argent project. The [initial version](./swagger-base.yaml) was based on Swagger 2.0, and we've migrated to Swagger 3.0.0 (OpenAPI) for a more detailed, readable, and user-friendly documentation.

## Major Changes

### 1. API Versioning

Previously, the `basePath` was used to define the API version (v1). Now, we've integrated the version into the server URL, providing a more RESTful approach to versioning.

### 2. Security Definitions

We've transitioned from the `securityDefinitions` object to the more descriptive `securitySchemes` under the `components` section. The `BearerAuth` scheme replaces the previous `Bearer`, offering a clearer depiction of the authorization method.

### 3. Request and Response Structure

The `parameters` and `produces` elements that originally defined the request and response structures have been replaced with the `requestBody` and `responses` objects. This change gives a more accurate depiction of API requests and responses.

### 4. Schemas

We've enhanced the `definitions` section into `components/schemas`. The schemas now include `User`, `Login`, `ApiResponse`, `LoginResponse`, `UserProfile`, providing a better depiction of the data models used in the API.

## New Additions

### 1. Transaction API

We've introduced new transaction-related endpoints, providing developers with greater flexibility to manage transactions. The new endpoints are:

- **Create Transaction:** POST `/user/transactions`. Allows users to create a new transaction. Users must provide necessary details such as source account, destination account, and transaction amount.

- **Get Transaction:** GET `/user/transactions/{transactionId}`. Enables users to retrieve details of a specific transaction by transaction ID.

- **Update Transaction:** PUT `/user/transactions/{transactionId}`. Users can update the details of a transaction, although restrictions may apply to maintain transaction integrity.

- **Delete Transaction:** DELETE `/tuser/ransactions/{transactionId}`. Provides users with the ability to delete a transaction, given certain conditions are met.

- **Get All Transactions:** GET `/user/transactions`. Users can retrieve a list of all transactions made.

- **Get Transactions by Account:** GET `/accounts/{accountId}/transactions`. Allows users to fetch all transactions linked to a specific account.

### 2. Schemas

In addition to enhancing existing schemas, we've added new schemas to `components/schemas` to support the transaction endpoints. The new schemas include `Transaction`, `TransactionList`, `Account`, and `AccountList`.

## Conclusion

This updated API documentation should prove beneficial to developers working on the project by providing extensive detail on all available API endpoints, aiding in more streamlined development, debugging, and integration. With clearer versioning, more explicit security definitions, and a thorough request and response structure, we believe this enhancement will greatly improve the developer experience. The addition of transaction-related endpoints further extends the API's capabilities, facilitating comprehensive transaction management.

- The new and improved API documentation can be found [here](./swagger-enhanced.yaml).
- The original API documentation can be found [here](./swagger-base.yaml).
