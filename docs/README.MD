# Bank Argent API Documentation (Enhanced)

This document provides an in-depth overview of the enhancements and additions to the Swagger API documentation for the Bank Argent project. The [initial version](./swagger-base.yaml) was based on Swagger 2.0, and we've migrated to OpenAPI 3.0 for a more detailed, readable, and user-friendly documentation.

> **Note:** Keep in mind that this document is not a replacement for the API documentation. It is intended to provide a proposal for the enhancements and additions to the API documentation.

## Major Changes

### API Versioning

Previously, the `basePath` was used to define the API version (v1). Now, we've integrated the version into the server URL (v2-beta), providing a more RESTful approach to versioning.

### Security Definitions

We've transitioned from the `securityDefinitions` object to the more descriptive `securitySchemes` under the `components` section. The `BearerAuth` scheme replaces the previous `Bearer`, offering a clearer depiction of the authorization method.

### Request and Response Structure

The `parameters` and `produces` elements that originally defined the request and response structures have been replaced with the `requestBody` and `responses` objects. This change gives a more accurate depiction of API requests and responses.

### Schemas

We've enhanced the `definitions` section into `components/schemas`. The schemas now include `User`, `Login`, `ApiResponse`, `LoginResponse`, `UserProfile`, providing a better depiction of the data models used in the API.

## New Additions

### Transaction API

The following new endpoints have been added to the API:

#### GET /user/transactions

This endpoint allows users to **fetch all transactions** or **transactions for a specific account**. There are five query parameters that can be used:

- `accountId`: This optional query parameter allows the user to fetch transactions specific to an account.
- `startDate` & `endDate`: These optional parameters can be used to filter transactions within a specific date range. They should be in the format YYYY-MM-DD.
- `page` & `size`: These parameters are used for pagination. `page` specifies the page number and `size` specifies the number of records per page.

#### POST /user/transactions

This endpoint is for **creating a new transaction**. The request body should contain the transaction details.

#### GET /user/transactions/{transactionId}

This endpoint **fetches details of a specific transaction**. The `transactionId` is a path parameter and is required to identify which transaction to fetch.

#### PUT /user/transactions/{transactionId}

This endpoint is for **updating a specific transaction**. The `transactionId` is a path parameter and is required. The request body should contain the updated transaction details.

#### POST /user/transactions/{transactionId}/reverse

This endpoint is for **reversing a specific transaction**. The `transactionId` is a path parameter and is required.

### Transaction Schemas

The new version of the API documentation also introduces new schemas related to transactions:

#### TransactionRequest

This schema is used when **creating a new transaction**. It includes the `accountId`, `transactionType`, `amount`, `date`, `category`, `note`, `description` and `balance` of the transaction.

#### TransactionUpdateRequest

This schema is used when **updating a transaction**. It includes the `category`, `note` and `description` of the transaction.

#### TransactionResponse

This schema is used when **returning transaction data** to the client. It includes all the properties defined in the `TransactionRequest` schema plus the `id` of the transaction.

#### TransactionListResponseItem

This schema represents a single transaction in a list of transactions. It includes fewer details than the `TransactionResponse` schema for a more compact representation, thus improving performance when retrieving large numbers of transactions.

#### TransactionListResponse

This schema is used when **returning a list of transactions**. It includes an array of `transactions` and pagination details (`page`, `size`, `totalPages`, `totalRecords`).

## Conclusion

This updated API documentation should prove beneficial to developers working on the project by providing extensive detail on all available API endpoints, aiding in more streamlined development, debugging, and integration. With clearer versioning, more explicit security definitions, and a thorough request and response structure, we believe this enhancement will greatly improve the developer experience. The addition of transaction-related endpoints further extends the API's capabilities, facilitating comprehensive transaction management.

- The new and improved API documentation can be found [here](./swagger-enhanced.yaml).
- The original API documentation can be found [here](./swagger-base.yaml).
