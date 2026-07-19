# ACE Database Design

Version: 1.0.0
Status: Draft
Last Updated: 2026-07-16
Author: Samuel + Claude Code

---

This document defines the database structure used by ACE.

...

# ACE Engine Communication

This document defines how every engine communicates with the rest of the system.

---

# Engine Communication Flow

```text
User
 │
 ▼
Conversation Engine
 │
 ▼
Context Builder
 │
 ├── Profile Engine
 ├── Relationship Engine
 ├── Memory Engine
 ├── Goal Engine
 ├── Identity Engine
 ├── Trait Engine
 └── Advice Engine
        │
        ▼
Prompt Orchestrator
        │
        ▼
Skill Manager
        │
        ▼
Claude API
        │
        ▼
Response
        │
        ▼
Reflection Engine
        │
        ▼
Learning Engine
        │
        ▼
Memory Engine
        │
        ▼
Database
```

---

# Engine Responsibilities

## Identity Engine

**Purpose**

Maintains ACE's identity, personality, core values, and communication philosophy.

**Receives**

- User profile
- System configuration
- Traits

**Returns**

- Identity context
- Personality context

**Communicates With**

- Context Builder
- Trait Engine

---

## Memory Engine

**Purpose**

Stores and retrieves short-term and long-term memories.

**Receives**

- Conversation events
- Reflections
- Life events

**Returns**

- Relevant memories
- Memory summaries

**Communicates With**

- Context Builder
- Reflection Engine
- Learning Engine
- Database

---

## Relationship Engine

**Purpose**

Tracks every relationship and how it evolves.

**Receives**

- Messages
- Life events
- User feedback

**Returns**

- Relationship context
- Trust level
- Relationship stage

**Communicates With**

- Context Builder
- Advice Engine
- Database

---

## Advice Engine

**Purpose**

Provides strategic recommendations to the user.

**Receives**

- Goals
- Memories
- Relationship context
- Conversation analysis

**Returns**

- Advice
- Warnings
- Suggestions

**Communicates With**

- Context Builder
- Goal Engine
- Relationship Engine

---

# Golden Rules

- Every engine has one responsibility.
- Engines never duplicate work.
- Claude never owns data.
- ACE owns all memories.
- Skills load only when needed.
- Context is built dynamically.
- Every engine should be independently testable.
