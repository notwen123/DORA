# SpaceOne

> **The free AI-native desktop IDE built to help developers understand, build, verify, and ship software.**

SpaceOne is an Electron-based, AI-first development environment built by deeply transforming the VS Code / Code-OSS architecture into a standalone product.

It is **not a VS Code plugin**.

It is **not a thin AI chat wrapper**.

It is **not designed around BYOK as the primary user experience**.

SpaceOne is being built as a complete desktop development environment where the editor, AI agent, terminal, browser, MCP, verification, memory, and project workflow become one coherent system.

---

## Table of Contents

- [Vision](#vision)
- [The SpaceOne Thesis](#the-spaceone-thesis)
- [What SpaceOne Is](#what-spaceone-is)
- [What SpaceOne Is Not](#what-spaceone-is-not)
- [Product Philosophy](#product-philosophy)
- [Core Product Loop](#core-product-loop)
- [Architecture](#architecture)
- [AI Architecture](#ai-architecture)
- [Managed AI](#managed-ai)
- [Autonomy Modes](#autonomy-modes)
- [Agent Infrastructure](#agent-infrastructure)
- [MCP](#mcp)
- [Browser Capabilities](#browser-capabilities)
- [Terminal & Tool Execution](#terminal--tool-execution)
- [SpaceOne Design System](#spaceone-design-system)
- [Mission Control](#mission-control)
- [Verification](#verification)
- [Guard & Memory](#guard--memory)
- [Privacy & Advertising](#privacy--advertising)
- [Economics](#economics)
- [Competitive Positioning](#competitive-positioning)
- [Current Development Status](#current-development-status)
- [Phase 1.2.0 Roadmap](#phase-120-roadmap)
- [Development Principles](#development-principles)
- [Security Principles](#security-principles)
- [Testing](#testing)
- [Repository Structure](#repository-structure)
- [Development](#development)
- [Contributing](#contributing)
- [Roadmap Philosophy](#roadmap-philosophy)
- [Long-Term Vision](#long-term-vision)
- [Status](#status)

---

# Vision

The traditional IDE was designed around a simple assumption:

> The developer writes the code and the computer executes it.

AI changes that relationship.

The developer can now describe an outcome, and an agent can inspect a repository, reason about architecture, modify multiple files, execute commands, use external tools, inspect a browser, run tests, recover from errors, and produce a result.

The problem is that most AI coding products still feel like:

```text
IDE
 +
Chat window
 +
Agent
```

SpaceOne is being built around a different idea:

```text
                    SPACEONE

                  USER INTENT
                       │
                       ▼
                  UNDERSTAND
                       │
                       ▼
                     BUILD
                       │
            ┌──────────┼──────────┐
            ▼          ▼          ▼
          CODE      TERMINAL    BROWSER
            └──────────┼──────────┘
                       ▼
                    VERIFY
                       │
                       ▼
                    REVIEW
                       │
                       ▼
                     SHIP
```

The goal is not simply to make AI generate more code.

The goal is to make AI-assisted software development **more understandable, more reliable, more verifiable, and dramatically easier to use**.

---

# The SpaceOne Thesis

SpaceOne is built around four product principles:

## 1. Build

AI should help developers turn intent into working software.

## 2. Verify

AI should not simply say:

> "Done."

It should help establish evidence that the work actually works.

## 3. Remember

SpaceOne should understand the project, its architecture, conventions, decisions, and developer preferences without turning memory into an uncontrolled transcript dump.

## 4. Trust

The developer must remain able to understand, interrupt, review, approve, reject, and control agent actions.

These principles define the product more than any individual model or UI component.

---

# What SpaceOne Is

SpaceOne is a:

- Native Electron desktop IDE
- AI-native development environment
- Managed-AI-powered coding workspace
- Repository-aware coding agent
- MCP-enabled development environment
- Browser-capable development environment
- Terminal-integrated development environment
- Project-aware agent system
- Verification-oriented coding environment
- Free-first developer product
- Privacy-conscious advertising-supported product architecture

The long-term goal is to make SpaceOne feel like a **single development operating environment**, rather than a collection of disconnected AI features.

---

# What SpaceOne Is Not

## Not a VS Code extension

The VS Code / Code-OSS repository is the architectural foundation.

SpaceOne is the product.

We deeply customize the workbench, product identity, AI experience, design system, sessions, integrations, and user workflow.

The objective is not:

```text
Microsoft VS Code
      +
SpaceOne plugin
```

The objective is:

```text
SpaceOne Desktop
      │
      └── deeply transformed Code-OSS architecture
```

## Not a BYOK-first product

Users should not need to understand model providers, API keys, endpoints, or inference infrastructure before they can start coding.

The intended primary experience is:

```text
Install SpaceOne
      ↓
Sign in
      ↓
SpaceOne AI
      ↓
Start building
```

Managed AI is the default product path.

Provider abstraction may exist internally, but infrastructure complexity should remain behind the product boundary.

## Not an Ollama-first product

Ollama is not part of the primary SpaceOne user experience.

SpaceOne should not silently fall back to localhost models when managed AI fails.

Managed inference failures must remain visible and diagnosable.

## Not "Freebuff with a GUI"

Free managed AI is an important part of the distribution strategy.

It is not the complete product.

SpaceOne's intended differentiation is the quality of the complete development loop:

```text
Understand
→ Build
→ Verify
→ Explain
→ Remember
→ Ship
```

---

# Product Philosophy

## Fast when the task is simple

A user asking:

> "Explain this function."

should not be forced through:

```text
Plan
→ Build
→ Verify
```

A user asking:

> "Rename this variable."

should not see a theatrical seven-stage agent workflow.

Simple work should feel instant.

## Deep when the task is complex

A request such as:

> "Refactor authentication across the application, add tests, and verify the login flow."

can legitimately require:

```text
Understand
→ Plan
→ Execute
→ Test
→ Repair
→ Verify
```

The UI should expose the complexity when complexity actually exists.

## Autonomy should be user-controlled

SpaceOne supports different levels of autonomy.

The system should adapt to the selected mode instead of forcing every task through the same ceremony.

---

# Core Product Loop

The long-term SpaceOne workflow is:

### 1. Intent

The developer describes what they want.

### 2. Understanding

SpaceOne determines the relevant repository context.

### 3. Planning

Only when useful or requested.

### 4. Execution

The agent changes code and uses available tools.

### 5. Verification

Tests, type checks, linting, builds, browser checks, or other appropriate evidence.

### 6. Review

The developer sees what changed and why.

### 7. Memory

Useful project decisions and preferences can become structured knowledge.

### 8. Ship

The developer receives a clear result and evidence trail.

---

# Architecture

SpaceOne inherits a mature desktop IDE architecture from the Code-OSS / VS Code ecosystem.

The repository contains substantial infrastructure that is reused rather than recreated.

The major architectural layers include:

```text
Electron Main
      │
      ▼
Platform
      │
      ▼
Editor
      │
      ▼
Workbench
      │
      ▼
Sessions / AI surfaces
```

The architecture also contains several communication mechanisms:

- Dependency injection / service instantiation
- IPC channels
- Extension-host communication
- Agent-host communication
- Workbench services
- Session services

SpaceOne extends these existing mechanisms rather than creating parallel application architectures.

---

# Existing AI Infrastructure

A major reason SpaceOne can move quickly is that the base repository already contains substantial agent infrastructure.

Relevant areas include:

- Chat and agent infrastructure
- Agent sessions
- Tool calling
- Multi-file edit workflows
- Checkpoints
- Prompt/instruction files
- Session persistence
- MCP
- Agent host
- Browser automation
- Model provider registry
- Terminal/PTY infrastructure
- Git/SCM integration
- Existing session/workbench architecture

SpaceOne's engineering strategy is:

> **Reuse proven infrastructure. Deeply customize the product layer. Build only the systems that create SpaceOne-specific value.**

---

# AI Architecture

SpaceOne uses a provider abstraction rather than hard-coding the product to a single model.

Conceptually:

```text
                  SPACEONE AI
                       │
                       ▼
                 Task Router
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
          Managed    Specialist  Future
          Provider   Provider    Provider
             │         │         │
             └─────────┼─────────┘
                       ▼
                    Response
                       │
                       ▼
                    Verify
```

The model is infrastructure.

The SpaceOne experience is the product.

The system is designed to support:

- Model registration
- Provider registration
- Model metadata
- Usage tracking
- Cost accounting
- Streaming
- Tool-capable inference
- Managed model selection
- Future routing optimization

---

# Managed AI

Managed AI is a central part of the intended SpaceOne user experience.

The product should not require developers to obtain and configure individual model API keys before they can use the IDE.

The intended flow is:

```text
SpaceOne Desktop
       │
       ▼
SpaceOne Account
       │
       ▼
Managed AI Catalog
       │
       ▼
SpaceOne Router
       │
       ▼
Managed Provider
       │
       ▼
Model
```

## Important routing principle

A managed request must not silently become:

```text
Managed AI
   ↓
localhost / Ollama
```

when the managed provider fails.

A managed failure should be surfaced as a managed failure.

This is essential for:

- debugging
- user trust
- cost measurement
- model economics
- production observability
- accurate product testing

---

# Autonomy Modes

SpaceOne does not assume that every developer wants the same level of automation.

## Fast / Ask

Designed for:

- explanations
- quick transformations
- simple questions
- lightweight edits

Expected behavior:

```text
Ask
 ↓
Answer
```

No unnecessary planning ceremony.

## Plan

Designed for:

- architecture
- migrations
- complex refactors
- multi-step changes

Expected behavior:

```text
Request
 ↓
Plan
 ↓
Review
 ↓
Execute
```

## Auto / Agent

Designed for:

- feature implementation
- bug fixing
- multi-file changes
- autonomous workflows

Expected behavior:

```text
Goal
 ↓
Execute
 ↓
Recover
 ↓
Verify
 ↓
Complete
```

The agent may internally plan, but the user should not be forced through unnecessary planning UI.

## Verify

Designed for:

- checking existing work
- validating changes
- running tests
- inspecting correctness

Expected behavior:

```text
Request
 ↓
Evidence
 ↓
Result
```

Verification should not modify code unless the user explicitly asks for repair.

---

# Agent Infrastructure

SpaceOne builds on an existing agent system capable of:

- Tool calls
- Multi-file editing
- Checkpoints
- Session persistence
- Terminal execution
- Git operations
- Agent-host execution
- MCP tools
- Browser operations
- Model-provider integration

The goal is to make this infrastructure feel like one coherent SpaceOne system.

---

# MCP

MCP is treated as first-class infrastructure.

SpaceOne inherits existing capabilities around:

- MCP server registration
- MCP discovery
- Tool access
- Policy controls
- Authentication
- Sampling
- Elicitation
- Gateway infrastructure
- MCP-related UI

The product should expose these capabilities naturally without forcing developers to understand the underlying protocol.

---

# Browser Capabilities

SpaceOne's architecture contains Chromium-based browser infrastructure.

The long-term goal is a complete development loop:

```text
Write code
   ↓
Run application
   ↓
Open browser
   ↓
Inspect application
   ↓
Interact
   ↓
Detect issue
   ↓
Modify code
   ↓
Run again
   ↓
Verify
```

The browser should eventually become part of the agent's evidence system rather than simply being another tab.

---

# Terminal & Tool Execution

The terminal remains a first-class development surface.

SpaceOne should not replace the terminal with an AI abstraction.

Instead:

```text
Terminal
   +
Agent
   +
Mission Control
```

Mission Control summarizes actual terminal activity while the terminal remains available for detailed inspection.

The agent must respect existing:

- security boundaries
- confirmation mechanisms
- shell behavior
- process lifecycle
- terminal permissions

---

# SpaceOne Design System

P18 established the SpaceOne visual system.

The design direction is:

- premium
- restrained
- technical
- clear
- fast
- accessible
- AI-native

The design system includes:

- semantic color tokens
- surface hierarchy
- typography
- spacing
- radii
- motion
- focus treatment
- reduced-motion behavior
- state representation

AI states include concepts such as:

- Idle
- Thinking
- Planning
- Executing
- Waiting for user
- Verifying
- Completed
- Error
- Cancelled

The UI should communicate state without becoming visually noisy.

---

# Mission Control

Mission Control is the next major product layer.

The existing chat should evolve from a transcript into a real orchestration surface.

The goal is to make the user understand:

> What is SpaceOne doing?

> Why is it doing it?

> What changed?

> What does it need from me?

> Did it actually finish?

Mission Control should represent real execution events.

It must never manufacture activity simply because a sophisticated animation looks good.

For a simple task:

```text
Rename foo → bar

✓ Updated 4 references
```

For a complex task:

```text
IMPLEMENT AUTHENTICATION

✓ Inspected architecture
✓ Updated middleware
● Running tests
○ Browser verification
○ Final review
```

The UI must reflect actual underlying work.

---

# Verification

SpaceOne's long-term product philosophy is:

> **Do not merely generate. Verify.**

The future verification layer should be capable of using appropriate evidence such as:

- Type checking
- Linting
- Tests
- Builds
- Runtime checks
- Browser checks
- Changed-file analysis
- Security checks

A completed task should distinguish between:

```text
COMPLETED
```

and:

```text
COMPLETED — NOT VERIFIED
```

SpaceOne should never claim evidence that was not actually collected.

---

# Guard & Memory

## SpaceOne Guard

Guard is intended to prevent mistakes before they happen.

Examples include:

- destructive commands
- suspicious file operations
- dangerous dependency changes
- security-sensitive changes
- conflicts with project rules
- architecture violations

The goal is not to prevent the agent from being useful.

The goal is:

> **safe autonomy rather than blind autonomy.**

## Project Brain

Project memory should be structured rather than being an infinite transcript.

Potential categories include:

```text
Architecture
Conventions
Dependencies
Decisions
Warnings
Rules
Known issues
Developer preferences
```

Every memory should eventually have:

- scope
- source
- confidence
- edit/delete controls
- user visibility

The developer remains in control.

---

# Privacy & Advertising

SpaceOne is designed around a separation between the AI system and the advertising system.

The product principle is:

> **Your code powers the agent. Your code does not power the advertising system.**

The architecture should maintain a clear boundary:

```text
CODE ───────────► AI

CODE ──────── X ─► AD TARGETING
```

## Ads are a financing layer

Advertising is not the reason to use SpaceOne.

The product value comes first.

The intended model is:

```text
Free managed AI
       ↓
Developer usage
       ↓
Developer-relevant sponsors
       ↓
Advertising revenue
       ↓
Inference + infrastructure cost
```

## Protected surfaces

Advertising should never disrupt:

- source code
- editor content
- diffs
- terminal output
- AI reasoning/output
- errors
- approval dialogs
- verification results
- critical workflow controls

Ads should be:

- clearly identifiable
- non-blocking
- developer-relevant
- visually subordinate
- architecturally isolated

Real advertising implementation remains a later production milestone.

---

# Economics

The central economic equation is:

```text
Revenue per active developer
>
AI inference cost
+
infrastructure cost
```

The product therefore needs:

- intelligent model routing
- context optimization
- unnecessary-round reduction
- tool-payload optimization
- usage accounting
- cost accounting
- provider observability
- sustainable free usage policies

"Free" must be economically engineered.

SpaceOne should not promise unlimited expensive inference without evidence that the economics support it.

---

# Competitive Positioning

SpaceOne is entering a rapidly evolving AI-development market.

The product is not intended to win by copying every feature of every competitor.

The strategic distinction is:

### Traditional IDE

```text
Editor
+
Developer
```

### AI coding assistant

```text
Editor
+
Chat
```

### Coding agent

```text
Goal
+
Agent
```

### SpaceOne

```text
Intent
 ↓
Understand
 ↓
Build
 ↓
Verify
 ↓
Remember
 ↓
Trust
 ↓
Ship
```

SpaceOne's long-term ambition is:

> **The free AI-native desktop IDE that helps developers ship verified software.**

---

# Current Development Status

## Phase 1 — User-Side Electron Product

### P01–P18

The current development program has completed the foundational transformation through P18.

Completed areas include:

- Repository architecture audit
- Build and verification foundation
- SpaceOne product identity
- SpaceOne model routing foundation
- Provider adapters
- Real managed inference architecture
- Managed AI client
- SpaceOne Cloud integration
- Agent integration
- AI/chat foundations
- Agent efficiency work
- Planning/tool optimization
- Managed routing correction
- Agent/AI infrastructure integration
- SpaceOne workbench transformation
- SpaceOne design system
- AI state vocabulary
- Responsive/accessibility foundations
- Advertising abstraction/protected surfaces

### P18 result

The Electron application has been transformed into the SpaceOne product foundation.

P18 established the visual and interaction foundation required for the next stage.

---

# P19 — Mission Control

P19 is currently in progress.

The initial implementation includes:

- Mission Control state model
- event derivation foundation
- provider/state/summary header
- managed provider status refresh behavior

The remaining P19 implementation includes:

- execution timeline
- approval surface
- file-change summaries
- terminal summaries
- cancellation experience
- error experience
- completion experience
- mission history
- large-event-stream performance
- full mode-aware Mission Control UX
- Electron visual verification
- managed live verification

P19 must not be marked complete until these areas are actually implemented and tested.

---

# Phase 1.2.0 Roadmap

The extended user-side Phase 1.2.0 contains 45 prompts.

## Completed

```text
P01–P18
```

## Current

```text
P19 — Mission Control
```

## Product Intelligence

```text
P20 — SpaceOne Verify
P21 — SpaceOne Guard
P22 — Project Brain
P23 — Developer Memory
P24 — Memory Governance
```

## Code Intelligence

```text
P25 — Deep Repository Understanding
P26 — Intelligent Context Engine
P27 — Context Transparency
P28 — Codebase Search Intelligence
P29 — Explain My Codebase
```

## Code Change Experience

```text
P30 — SpaceOne Diff Engine
P31 — Intelligent Apply
P32 — Change Explanation
P33 — Change Risk Analysis
```

## Agentic Development

```text
P34 — Multi-Mode Agent
P35 — Autonomous Repair Loop
P36 — Browser Development Loop
P37 — Visual UI Verification
```

## Trust System

```text
P38 — Evidence Graph
P39 — Ship Report
P40 — Project Quality Center
```

## Production Reliability

```text
P41 — Resource Intelligence
P42 — Session Resilience
P43 — Large Repository Mode
```

## Free AI + Business Model

```text
P44 — SpaceOne Free AI Experience
P45 — SpaceOne Ads + Production Launch Gate
```

---

# Development Principles

## 1. Reuse before rebuilding

If the base architecture already solves a problem, use it.

Do not create duplicate:

- editors
- terminals
- diff systems
- agent engines
- session systems
- MCP systems
- browser systems

## 2. Product identity must be native

SpaceOne should not look like:

> VS Code + plugin + AI panel.

Every major user-facing layer should feel like SpaceOne.

## 3. No fake intelligence

The UI must never manufacture:

- fake thinking
- fake planning
- fake verification
- fake tool execution
- fake progress

If SpaceOne did not perform the action, the UI should not imply that it did.

## 4. Simple tasks stay simple

Do not turn:

> "Rename this variable"

into a complex agent ceremony.

## 5. Complex tasks deserve deep orchestration

Complex workflows should provide:

- progress
- evidence
- approvals
- recovery
- verification

## 6. User control remains fundamental

The developer must be able to:

- stop
- review
- approve
- deny
- inspect
- modify
- continue
- discard

## 7. Never hide infrastructure failures

Managed AI failure must not silently become another provider.

Provider state must remain truthful.

## 8. Optimize for outcomes

The objective is not:

> more tokens

or:

> more agent steps.

The objective is:

> **successful developer outcomes at sustainable cost.**

---

# Security Principles

SpaceOne must protect:

- API keys
- authentication credentials
- secret storage
- environment variables
- repository contents
- sensitive tool output
- user prompts
- model responses

Secrets must never be:

- committed
- placed in `product.json`
- hard-coded into source
- included in analytics
- exposed through Mission Control

Analytics should use metadata where possible rather than raw code or prompt content.

---

# Testing

SpaceOne development requires multiple levels of verification.

## Static checks

```bash
npm run transpile-client
npm run typecheck-client
npm run valid-layers-check
```

## Lint

Run ESLint against changed sources.

## SpaceOne tests

```bash
./scripts/test.sh --grep SpaceOne
```

## Runtime

The Electron application must be launched and manually inspected for user-facing milestones.

## Managed AI

Managed-AI verification must confirm that requests actually reach a managed provider.

A request resolving to:

- Ollama
- localhost
- unintended BYOK
- another non-managed provider

must not be counted as a managed-AI production verification.

---

# Repository Structure

SpaceOne remains deeply integrated into the existing Code-OSS architecture.

Important architectural areas include:

```text
src/vs/
├── base/
├── code/
│   └── electron-main/
├── platform/
│   ├── agentHost/
│   ├── browserView/
│   └── ...
├── workbench/
│   ├── browser/
│   └── contrib/
├── sessions/
└── ...
```

Relevant SpaceOne work touches areas such as:

```text
product identity
AI providers
chat / agents
sessions
workbench
design tokens
browser
terminal
MCP
security
managed AI
```

The exact implementation location for future work must be determined from the existing architecture before adding new systems.

---

# Development

SpaceOne is currently being developed as a desktop Electron application.

The repository's toolchain is controlled by the existing project configuration.

Before modifying toolchain checks, understand why they exist.

Do not weaken:

- Node requirements
- npm requirements
- build checks
- layer checks
- security checks

just to make a local build pass.

If a toolchain mismatch occurs, fix the environment where practical instead of silently weakening repository safeguards.

---

# Contributing

SpaceOne development follows a disciplined workflow.

## Before changing code

1. Inspect the existing architecture.
2. Find existing services/components.
3. Understand ownership and layering.
4. Identify relevant tests.
5. Determine whether the requested capability already exists.
6. Modify the smallest appropriate architectural surface.

## After changing code

1. Run targeted tests.
2. Run type checking.
3. Run layer checks.
4. Run lint.
5. Launch Electron where the change affects the user experience.
6. Perform manual verification.
7. Review the diff.
8. Commit only the intended changes.

Never claim a runtime result that was not actually observed.

---

# Roadmap Philosophy

SpaceOne is not following a:

```text
feature → feature → feature → feature
```

strategy.

Each milestone should strengthen one of the product's core moats.

## Build

Can SpaceOne help the developer accomplish the task?

## Verify

Can SpaceOne provide evidence that the result works?

## Remember

Does SpaceOne become more useful for the developer's project over time?

## Trust

Can the developer understand and control what the agent is doing?

If a proposed feature does not strengthen one of these areas, it should be questioned before implementation.

---

# Long-Term Vision

Phase 1.2.0 focuses on the user-side Electron product.

The long-term SpaceOne vision is broader.

```text
                       SPACEONE
                           │
                    AI DEVELOPMENT OS
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
       DESKTOP           CLOUD             WEB
          │                │                │
          └────────────────┼────────────────┘
                           ▼
                     SPACEONE AI
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
          BUILD         VERIFY        MEMORY
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                          SHIP
```

But this expansion happens only after the desktop product proves that developers want it.

---

# The SpaceOne North Star

SpaceOne should eventually make this interaction feel natural:

> **"Tell SpaceOne what you want built."**

SpaceOne:

```text
understands the project
        ↓
understands the request
        ↓
selects the right context
        ↓
uses the appropriate autonomy
        ↓
changes the code
        ↓
runs the necessary tools
        ↓
checks the result
        ↓
explains what changed
        ↓
remembers useful decisions
        ↓
shows evidence
        ↓
helps the developer ship
```

The developer should never need to think:

> "Which AI tool should I use for this?"

The environment should make that decision as simple as possible while preserving user control.

---

# Product Promise

SpaceOne's intended promise is simple:

> **Build for free. Ship with confidence.**

Free managed AI provides accessibility.

The desktop IDE provides the workflow.

Agent infrastructure provides execution.

Verification provides evidence.

Memory provides continuity.

Guard provides safety.

Privacy provides trust.

Advertising provides a potential sustainable economic layer without putting a subscription wall between developers and the core product.

---

# Status

## Current

**Phase 1 — User-Side Electron Product**

**Progress:** P18 complete → P19 in progress

```text
P01–P18  ████████████████████  COMPLETE
P19      ███░░░░░░░░░░░░░░░░░  IN PROGRESS
P20–P45  ░░░░░░░░░░░░░░░░░░░░  PLANNED
```

## Current turning point

SpaceOne has moved beyond:

> "VS Code fork with AI."

The next objective is:

> **"AI-native development environment with Mission Control."**

After that:

> **"AI that verifies its own work."**

Then:

> **"AI that learns the project."**

Then:

> **"AI that helps developers ship with evidence."**

---

# Final Principle

SpaceOne is not trying to win by having the most buttons.

It is not trying to win by having the most models.

It is not trying to win by copying every competitor.

It is trying to win by making the entire development loop feel better:

```text
INTENT
  ↓
UNDERSTAND
  ↓
BUILD
  ↓
VERIFY
  ↓
REVIEW
  ↓
REMEMBER
  ↓
SHIP
```

**The product is the loop.**

The model is infrastructure.

The IDE is the environment.

The verification is the trust layer.

The memory is the compounding advantage.

The free managed AI is the distribution engine.

And the developer remains in control.

---

## SpaceOne

**Build for free. Ship with confidence.**

*Phase 1.2.0 — User-Side Electron Product*

claude --resume baaedb14-4f18-4bd7-93b9-0d5123c846e6
