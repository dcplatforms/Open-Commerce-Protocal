# Agent Service API

The Agent Service handles identity, policy orchestration, and facilitates agent-to-agent interactions within the Open Commerce Protocol. This service is crucial for enabling autonomous commerce agents with defined rules and permissions.

## Endpoints

### `GET /api/v1/agents`

Retrieves a list of all registered agents.

#### Request

`GET /api/v1/agents`

#### Response

`200 OK`

```json
[
  {
    "id": "agent_xxxxxxxxxxxx",
    "name": "Shopping Bot",
    "policy": {
      "spendingLimit": 500,
      "authorizedCounterparties": ["vendor_yyyyyyyyyyyy"]
    },
    "status": "active",
    "createdAt": "2026-02-19T00:00:00Z",
    "updatedAt": "2026-02-19T00:00:00Z"
  }
]
```

### `POST /api/v1/agents`

Registers a new agent with specified policies.

#### Request

`POST /api/v1/agents`

```json
{
  "name": "New Agent",
  "policy": {
    "spendingLimit": 1000,
    "authorizedCounterparties": []
  }
}
```

#### Response

`201 Created`

```json
{
  "id": "agent_zzzzzzzzzzzz",
  "name": "New Agent",
  "policy": {
    "spendingLimit": 1000,
    "authorizedCounterparties": []
  },
  "status": "active",
  "createdAt": "2026-02-19T00:00:00Z",
  "updatedAt": "2026-02-19T00:00:00Z"
}
```

### `GET /api/v1/agents/:agentId`

Retrieves details of a specific agent by its ID.

#### Request

`GET /api/v1/agents/agent_xxxxxxxxxxxx`

#### Parameters

*   `agentId` (string): The unique identifier of the agent.

#### Response

`200 OK`

```json
{
  "id": "agent_xxxxxxxxxxxx",
  "name": "Shopping Bot",
  "policy": {
    "spendingLimit": 500,
    "authorizedCounterparties": ["vendor_yyyyyyyyyyyy"]
  },
  "status": "active",
  "createdAt": "2026-02-19T00:00:00Z",
  "updatedAt": "2026-02-19T00:00:00Z"
}
```

`404 Not Found` if the agent does not exist.

### `PUT /api/v1/agents/:agentId/policy`

Updates the policy for a specific agent.

#### Request

`PUT /api/v1/agents/agent_xxxxxxxxxxxx/policy`

```json
{
  "spendingLimit": 600,
  "authorizedCounterparties": ["vendor_yyyyyyyyyyyy", "vendor_aaaaaaaaaaaa"]
}
```

#### Parameters

*   `agentId` (string): The unique identifier of the agent.

#### Response

`200 OK`

```json
{
  "id": "agent_xxxxxxxxxxxx",
  "name": "Shopping Bot",
  "policy": {
    "spendingLimit": 600,
    "authorizedCounterparties": ["vendor_yyyyyyyyyyyy", "vendor_aaaaaaaaaaaa"]
  },
  "status": "active",
  "createdAt": "2026-02-19T00:00:00Z",
  "updatedAt": "2026-02-19T00:00:00Z"
}
```

`404 Not Found` if the agent does not exist.

### `POST /api/v1/agents/transfer`

Perform an Agent-to-Agent (A2A) transfer (conceptual).

#### Request

`POST /api/v1/agents/transfer`

```json
{
  "fromAgentId": "agent_xxxxxxxxxxxx",
  "toAgentId": "agent_zzzzzzzzzzzz",
  "amount": 100,
  "currency": "USD"
}
```

#### Response

`200 OK`

```json
{
  "success": true,
  "fromAgentId": "agent_xxxxxxxxxxxx",
  "toAgentId": "agent_zzzzzzzzzzzz",
  "amount": 100,
  "currency": "USD",
  "timestamp": "2026-02-19T00:00:00Z"
}
```
