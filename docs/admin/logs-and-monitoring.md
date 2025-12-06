---
title: Logs and Monitoring
sidebar_label: Logs and Monitoring
---

# Logs and Monitoring

System logs provide visibility into the backend operations, errors, and important events.

## Grafana Dashboard

Admins have exclusive access to a **Grafana Dashboard** that provides a comprehensive view of the entire system's health and performance.

### Monitored Components
The dashboard aggregates logs and metrics from:
- **Application Logs**: Backend and frontend application events.
- **System Logs**: Server-level performance and errors.
- **Dependencies**:
  - **Keycloak** (Authentication)
  - **MinIO** (Object Storage)
  - **Database** (PostgreSQL/MySQL)
  - **Judge0** (Code execution engine)
  - **Docker Containers** (Container health and status)
  - **Reverse Proxy** (Nginx/Traefik traffic logs)
  - **Redis** (Caching and session management)
  - **Evaluator** (Evaluation microservice)

This centralized monitoring ensures that administrators can quickly identify and troubleshoot issues across any part of the infrastructure.
