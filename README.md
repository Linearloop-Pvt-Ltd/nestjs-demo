# NestJS Prometheus Monitoring Project

This project demonstrates a complete monitoring setup for a NestJS application using Prometheus, Grafana, and Nginx. It includes metrics collection, visualization, and load balancing capabilities.

## Features

- NestJS application with custom metrics
- Prometheus metrics collection
- Grafana dashboards for visualization
- Nginx as reverse proxy and load balancer
- Docker containerization
- Custom metrics for:
  - Counter operations
  - Joke API requests
  - User API requests
  - HTTP request durations
  - System metrics

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)
- npm or yarn

## Project Structure

## 📌 Prerequisites

Ensure your system meets the following requirements:

- [Node.js](https://nodejs.org/en/download/) (Recommended: Latest LTS version `>=20.x`)
- **npm** (bundled with Node.js) or **yarn**
- [Git](https://git-scm.com/downloads): It is an open source version control system.

Verify your Node.js installation:

```bash
node -v
```

## 🚀 Installation & Setup

### 1. Install NestJS CLI

The NestJS CLI facilitates project scaffolding and efficient development.

```bash
npm install -g @nestjs/cli
```

### 2. Clone and Navigate to the Project

Clone the repository

```bash
git clone https://github.com/Linearloop-Pvt-Ltd/nestjs-demo.git
cd nestjs-demo
```

### 3. Install Dependencies

Fetch all required packages using:

```bash
npm install
```

### 4. Building the Project

To compile the application for production, run:

```bash
npm run build
```

The compiled files will be located in the `dist/` directory.

### Example Build Output

```bash
> hello-world@1.0.0 build
> nest build

✨ Done in 2.34s.
```

### 5. Running the Built Application

To execute the compiled application:

```bash
node dist/main.js
```

This will start the application on `localhost:3000`

### 6. To Run the Application in Local Environment

Execute the following commands to start the application:

```bash
# Development mode
npm run start

# Watch mode (Hot-reloading during development)
npm run start:dev

# Production mode
npm run start:prod
```

## 🏁 Entry Point

The main entry point for the application is `main.js`, located in the `dist/` directory after building. It is responsible for bootstrapping the NestJS application.

<!-- ## 📖 Reference

Below are useful links and documentation to help you understand and work with this NestJS project effectively:

- [NestJS Documentation](https://docs.nestjs.com/) – Official NestJS documentation for in-depth guides and best practices.
- [NestJS CLI](https://docs.nestjs.com/cli/overview) – Reference for using NestJS CLI commands efficiently.
- [Node.js Downloads](https://nodejs.org/en/download/) – Get the latest stable version of Node.js.
- [npm Documentation](https://docs.npmjs.com/) – Learn about npm commands and package management.
- [Yarn Package Manager](https://classic.yarnpkg.com/en/docs) – Alternative package manager for JavaScript projects.
- [Git Documentation](https://git-scm.com/doc) – Version control documentation to manage your code repository.

These resources will help you troubleshoot issues, optimize development workflows, and expand your knowledge of NestJS and its ecosystem. 🚀 -->

## 📖 Reference

### Core Technologies
- [NestJS Documentation](https://docs.nestjs.com/) – Official NestJS documentation for in-depth guides and best practices.
- [NestJS CLI](https://docs.nestjs.com/cli/overview) – Reference for using NestJS CLI commands efficiently.
- [Node.js Downloads](https://nodejs.org/en/download/) – Get the latest stable version of Node.js.
- [npm Documentation](https://docs.npmjs.com/) – Learn about npm commands and package management.
- [Yarn Package Manager](https://classic.yarnpkg.com/en/docs) – Alternative package manager for JavaScript projects.
- [Git Documentation](https://git-scm.com/doc) – Version control documentation to manage your code repository.

### Docker & Container Orchestration
- [Docker Documentation](https://docs.docker.com/) - Official Docker documentation for container basics
- [Docker Compose Documentation](https://docs.docker.com/compose/) - Learn about multi-container Docker applications
- [Docker Hub](https://hub.docker.com/) - Repository for Docker images
- [Docker Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) - Guidelines for writing efficient Dockerfiles

### Monitoring & Metrics
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/) - Time series database for metrics
- [Prometheus Query Language](https://prometheus.io/docs/prometheus/latest/querying/basics/) - PromQL basics and advanced queries
- [Grafana Documentation](https://grafana.com/docs/) - Visualization and analytics platform
- [Grafana Dashboard Examples](https://grafana.com/grafana/dashboards/) - Pre-built dashboards for various use cases

### Web Server & Metrics Export
- [Nginx Documentation](https://nginx.org/en/docs/) - Web server and reverse proxy
- [Nginx Configuration Guide](https://nginx.org/en/docs/beginners_guide.html) - Basic to advanced configuration
- [Nginx Prometheus Exporter](https://github.com/nginxinc/nginx-prometheus-exporter) - Export Nginx metrics
- [Prometheus Exporters](https://prometheus.io/docs/instrumenting/exporters/) - Various exporters for different services

### Metrics & Monitoring Best Practices
- [RED Method](https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/) - Rate, Errors, and Duration metrics
- [USE Method](http://www.brendangregg.com/usemethod.html) - Utilization, Saturation, and Errors metrics
- [SRE Books](https://sre.google/books/) - Google's Site Reliability Engineering guides

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Linearloop-Pvt-Ltd/nestjs-demo.git
cd nestjs-demo
```

### 2. Environment Setup

Create necessary directories for persistent storage:

```bash
mkdir -p grafana-data prometheus-data
mkdir -p grafana/provisioning/dashboards
mkdir -p grafana/provisioning/datasources
```

### 3. Start the Application

```bash
docker-compose up -d
```

This will start:
- NestJS application
- Prometheus
- Grafana
- Nginx
- Nginx Exporter

### 4. Access Services

- NestJS API: http://localhost/api
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001 (admin/admin)
- Nginx metrics: http://localhost:9113/metrics

## API Endpoints

- `GET /` - Basic counter endpoint
- `POST /counter` - Update counter
- `GET /jokes` - Random jokes
- `GET /users` - Random users
- `GET /metrics` - metrics for Prometheus (not publically accessible)

## Monitoring Setup

### Prometheus

Prometheus is configured to scrape metrics from:
- NestJS application (`/metrics`)
- Nginx Exporter (`/metrics`)

Configuration file: `prometheus.yml`

```yaml
scrape_configs:
  - job_name: 'nestjs'
    static_configs:
      - targets: ['nestjs-app:3000']
  - job_name: 'nginx-exporter'
    static_configs:
      - targets: ['nginx-exporter:9113']
```

### Application level Configuration for monitoring | Example Prometheus Configuration in NestJS

Here's how to configure Prometheus metrics in your NestJS application:

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    PrometheusModule.register({
      path: '/metrics',  // Endpoint to expose metrics
      defaultMetrics: {
        enabled: true,   // Enable default Node.js metrics
      },
    }),
  ],
})
export class AppModule {}

// metrics.service.ts
import { Injectable } from '@nestjs/common';
import { Counter, Histogram } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class MetricsService {
  constructor(
    @InjectMetric('counter_operations_total') private counterMetric: Counter,
    @InjectMetric('http_request_duration_seconds') private httpMetric: Histogram,
  ) {}

  // Custom metrics examples
  incrementCounter() {
    this.counterMetric.inc();
  }

  recordHttpDuration(duration: number, path: string) {
    this.httpMetric.labels({ path }).observe(duration);
  }
}

// jokes.module.ts
import { Module } from '@nestjs/common';
import { makeCounterProvider, makeHistogramProvider } from '@willsoto/nestjs-prometheus';

@Module({
  controllers: [JokesController],
  providers: [
    JokesService,
    makeCounterProvider({
      name: 'jokes_requests_total',
      help: 'Total number of jokes requests',
    }),
    makeHistogramProvider({
      name: 'jokes_http_requests',
      help: 'Jokes API HTTP requests',
      labelNames: ['method', 'status_code', 'path'],
      buckets: [0.1, 0.5, 1, 2, 5], // Histogram buckets in seconds
    }),
  ],
})
export class JokesModule {}
```

Key configuration elements:
- Metrics endpoint exposed at `/metrics`
- Default Node.js metrics enabled
- Custom metrics for business logic
- Histogram for request duration tracking
- Counter for operation tracking

### Understanding Histogram Buckets

Histogram buckets are crucial for measuring the distribution of values, particularly useful for tracking request durations:

```typescript
buckets: [0.1, 0.5, 1, 2, 5] // Values in seconds
```

These buckets represent:
- ≤ 0.1s (100ms): Very fast requests
- ≤ 0.5s (500ms): Normal requests
- ≤ 1s: Slower requests
- ≤ 2s: Very slow requests
- ≤ 5s: Potentially problematic requests
- \> 5s: Critical performance issues

Example Prometheus query to see the distribution:
```promql
histogram_quantile(0.95, rate(jokes_http_requests_bucket[5m]))
```

This configuration allows you to:
- Track request duration distributions
- Set meaningful SLO/SLA thresholds
- Identify performance bottlenecks
- Monitor response time degradation

Choose bucket values based on:
- Your application's performance requirements
- Expected response time ranges
- SLA commitments
- Performance optimization goals

### Grafana

- Default credentials: admin/admin
- Pre-configured dashboards available in `grafana/provisioning/dashboards`
- Prometheus datasource auto-configured

### Nginx

Nginx serves as a reverse proxy with:
- Load balancing
- Metrics exposure
- Health checks

## Docker Configuration

The application uses a multi-stage build process for optimal container size:
1. Builder stage: Compiles TypeScript code
2. Production stage: Uses distroless Node.js image

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev

# Run tests
npm run test
```

### Building Docker Image

```bash
docker build -t nestjs-prometheus-app .
```

## Monitoring Metrics

Available metrics include:
- `counter_operations_total`: Counter operations
- `jokes_requests_total`: Joke API requests
- `users_requests_total`: User API requests
- `counter_http_requests`: HTTP request durations
- `jokes_http_requests`: Joke API request durations
- Default Node.js metrics

## Troubleshooting

1. If services don't start:
   ```bash
   docker-compose down
   docker-compose up -d
   ```

2. Check logs:
   ```bash
   docker-compose logs -f [service-name]
   ```

3. Verify network connectivity:
   ```bash
   docker network ls
   docker network inspect monitoring-network
   ```

## Security Considerations

- Grafana is password protected
- Nginx metrics are restricted to Docker network
- Using distroless container for minimal attack surface
- CORS configured for frontend access




