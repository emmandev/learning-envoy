# Introduction

Learning [Envoy](https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy) as a Communication Mesh between microservices.

- [ ] Service Discovery
- [ ] Load Balancing
- [ ] Observability
- [ ] Authentication and Authorization
- [ ] gRPC
- [ ] Circuit Breaker

# Requirements

- Docker
- Docker Compose
- Nodejs

# Getting Started

Start our microservices by running docker compose.

```
docker-compose up -d
```

The Gateway service should now be running in `localhost:3000`, Service A in `localhost:3001`, and Service B in `localhost:3002`.
