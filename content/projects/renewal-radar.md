---
title: "Renewal Radar"
slug: "renewal-radar"
description: "A full-stack renewal tracking app for managing domains, subscriptions, and recurring services. Currently being built as a backend-focused project with reminder logic, deadline tracking, and organized renewal workflows."
technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma"]
imageGradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)"
image: "/images/renewal_radar_mockup.jpg"
liveUrl: ""
githubUrl: "https://github.com/Mahtab-Azim/renewal-radar-backend"
date: "2026-04-28"
featured: true
---

# Renewal Radar

Renewal Radar is a modern SaaS platform designed to solve a simple yet expensive problem: forgotten domain and SSL certificate renewals. It aggregates all your digital assets, monitors expiration dates, and sends intelligent alerts via Email, Slack, or SMS before it is too late.

## Core Features

- **Automated Scanning:** Enter your domain name and let our crawler fetch registration and expiration details.
- **Smart Notification Escalation:** Escalate warnings as renewal dates draw closer to avoid service disruptions.
- **Cost Estimation & Budgeting:** Beautiful dashboard summarizing your monthly and annual domain subscription expenditures.
- **Collaborative Workspaces:** Invite team members to manage domain inventories together.

## Technology Stack

- **Framework:** Next.js (App Router)
- **Database:** PostgreSQL with Supabase
- **Authentication:** NextAuth.js
- **Monitoring Tasks:** Cron jobs executed via Vercel Cron.
