# ACE Database Design

Version: 1.0.0
Status: Draft
Last Updated: 2026-07-16
Author: Samuel + Claude Code

---

This document defines the database structure used by ACE.

...

# ACE Database Design

This document defines the database structure used by ACE.

It serves as the single source of truth for the database.

---

# Core Tables

## users

**Purpose**

Stores account information for the owner of ACE.

**Future Fields**

- id
- email
- password (if using email login)
- created_at
- updated_at

---

## user_profiles

**Purpose**

Stores personal information about the user.

**Future Fields**

- user_id
- name
- age
- communication_style
- interests
- personality
- preferences

---

## contacts

**Purpose**

Stores every person the user interacts with.

Examples:

- Mel
- Dad
- Best Friend
- Amaka

**Future Fields**

- id
- name
- nickname
- relationship_type
- notes

---

## relationships

**Purpose**

Tracks how each relationship changes over time.

**Future Fields**

- trust_level
- comfort_level
- attraction
- friendship
- communication_frequency
- relationship_stage

---

## conversations

**Purpose**

Stores every conversation.

---

## messages

**Purpose**

Stores every message inside a conversation.

---

## memories

**Purpose**

Stores long-term and short-term memories.

---

## memory_embeddings

**Purpose**

Stores vector embeddings for semantic memory search.

---

## life_events

**Purpose**

Stores important life events.

Examples:

- First Date
- Argument
- Birthday
- Football Match
- Graduation

---

## goals

**Purpose**

Stores the user's goals.

Examples:

- Dating
- Friendship
- Best Friends with Benefits
- Business Partner
- Networking

---

## advice_history

**Purpose**

Stores every recommendation ACE gives and whether it was successful.

---

## reflections

**Purpose**

Stores ACE's reflections after conversations.

---

## learning_logs

**Purpose**

Tracks how ACE improves over time.

---

## traits

**Purpose**

Stores ACE's personality traits and behavior settings.

---

## skills

**Purpose**

Stores installed skills and their metadata.

---

## settings

**Purpose**

Stores user preferences and application settings.

---

## notifications

**Purpose**

Stores reminders and notifications.

---

## conversation_analysis

**Purpose**

Stores analysis of conversations, including sentiment, engagement, and communication patterns.

---

# Database Rules

- Every table has one responsibility.
- Never duplicate information.
- Use IDs instead of names to connect tables.
- Memories should be searchable.
- Advice should be linked to conversations.
- Life events should update relationship context.
- Keep the schema scalable and modular.
