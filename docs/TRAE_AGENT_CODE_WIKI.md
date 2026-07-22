# Trae Agent Code Wiki

## Repository Summary

Repository: `https://github.com/bytedance/trae-agent`

Trae Agent is a Python-based CLI agent framework for software engineering tasks. It combines a configurable LLM runtime, a structured tool ecosystem, provider abstraction, optional Docker execution, MCP integration, and trajectory recording into a modular research-friendly architecture.

This wiki documents:

- overall architecture
- responsibilities of major modules
- key classes and functions
- dependency relationships
- runtime flow
- setup, run, and test instructions

## High-Level Architecture

The project follows a layered design:

1. CLI layer
2. Agent facade layer
3. Agent runtime loop
4. Concrete agent specialization
5. Tool execution layer
6. Provider abstraction layer
7. Support services layer

### Architecture Diagram

```text
User / Shell
   |
   v
trae-cli (CLI)
   |
   v
Agent facade
   |
   v
BaseAgent loop
   |-----------------------------|
   v                             v
Tool execution               LLM provider dispatch
   |                             |
   v                             v
Local tools / Docker / MCP   OpenAI / Anthropic / Google / Ollama / others
   |
   v
Trajectory recording / console / config / Lakeview
```

## Top-Level Repository Structure

### Main Directories

- `trae_agent/`: main distributable package
- `trae_agent/agent/`: runtime lifecycle and concrete agent behavior
- `trae_agent/tools/`: built-in tool abstractions and tool implementations
- `trae_agent/utils/`: config, MCP, console UI, provider adapters, trajectory logging
- `trae_agent/prompt/`: prompt definitions used by the agent
- `tests/`: behavior-oriented tests
- `evaluation/`: benchmark and patch-selection tooling
- `docs/`: project documentation

## Major Module Responsibilities

### `trae_agent/cli.py`

Primary command-line entrypoint.

Responsibilities:

- defines CLI commands such as `run`, `interactive`, and `show-config`
- resolves runtime configuration
- applies provider/model overrides
- manages working directory selection
- initializes agent execution
- handles Docker-related CLI options

### `trae_agent/agent/agent.py`

CLI-facing facade over the concrete agent runtime.

Responsibilities:

- creates the correct agent implementation
- wires trajectory recording
- sets up console output
- bridges CLI execution into the agent loop

### `trae_agent/agent/base_agent.py`

Core runtime engine.

Responsibilities:

- owns the multi-step execution loop
- sends messages to the LLM
- interprets model responses
- dispatches tool calls
- records state transitions
- enforces step limits and task completion
- handles cleanup

### `trae_agent/agent/trae_agent.py`

Concrete software-engineering agent implementation.

Responsibilities:

- defines default tools
- assembles initial prompts and task context
- integrates MCP-discovered tools
- checks whether a patch was produced when required
- generates git diffs for verification

### `trae_agent/tools/`

Tooling subsystem exposed to the model.

Responsibilities:

- defines common tool interfaces
- provides local tool execution
- implements shell execution, editing, JSON editing, structured thinking, task completion, and code graph lookup

### `trae_agent/utils/llm_clients/`

Provider abstraction layer.

Responsibilities:

- hides provider-specific API differences
- dispatches requests to the correct backend
- centralizes model invocation behavior

### `trae_agent/utils/`

Supporting infrastructure.

Responsibilities:

- loads config from YAML, legacy JSON, CLI overrides, and environment variables
- records trajectories
- manages terminal rendering
- initializes MCP connections
- provides Lakeview summarization

### `evaluation/`

Research and benchmark support code.

Responsibilities:

- evaluation orchestration
- patch selection experiments
- benchmark-specific helpers

## Key Classes

### `Agent`

File: `trae_agent/agent/agent.py`

Role:

- top-level runtime facade used by the CLI
- owns console and trajectory integration
- delegates actual execution to the concrete agent

### `BaseAgent`

File: `trae_agent/agent/base_agent.py`

Role:

- implements the main agent execution state machine
- coordinates model calls, tool execution, and completion checks

Why it matters:

- this is the most important control point in the whole repository

### `TraeAgent`

File: `trae_agent/agent/trae_agent.py`

Role:

- specializes `BaseAgent` for software engineering work
- chooses prompt strategy and tools
- handles MCP additions and patch validation

### `Tool` and `ToolExecutor`

File: `trae_agent/tools/base.py`

Role:

- define how tools are described to the model
- standardize how tool calls are validated and executed

### `DockerManager`

File: `trae_agent/agent/docker_manager.py`

Role:

- manages Docker containers and shell execution when container mode is enabled

### `DockerToolExecutor`

File: `trae_agent/tools/docker_tool_executor.py`

Role:

- routes tool calls into Docker-backed environments

### `LLMClient`

File: `trae_agent/utils/llm_clients/llm_client.py`

Role:

- provider router for model calls
- selects the correct client implementation based on configuration

### `Config`

File: `trae_agent/utils/config.py`

Role:

- merges runtime configuration from multiple sources
- validates essential settings

### `TrajectoryRecorder`

File: `trae_agent/utils/trajectory_recorder.py`

Role:

- stores detailed execution traces for debugging, research, and replay

## Key Functions

### CLI Entry Points

- `run()` in `trae_agent/cli.py`
  - main one-shot execution path
- `interactive()` in `trae_agent/cli.py`
  - interactive session entrypoint
- `show_config()` in `trae_agent/cli.py`
  - prints resolved configuration

### Agent Runtime

- `Agent.run()`
  - prepares task execution and launches the concrete agent
- `BaseAgent.execute_task()`
  - main multi-step reasoning loop
- `BaseAgent._run_llm_step()`
  - handles an individual model step
- `BaseAgent._tool_call_handler()`
  - executes tool calls and feeds outputs back into the loop

### Concrete Agent Behavior

- `TraeAgent.new_task()`
  - constructs the system prompt, user prompt, and tool list
- `TraeAgent.get_git_diff()`
  - captures current changes for patch-based workflows
- `TraeAgent.remove_patches_to_tests()`
  - removes test-only patches from final diff verification when needed

### Config

- `Config.create()`
  - loads and validates config from file paths and runtime values
- `resolve_config_values()`
  - applies precedence rules across CLI, file, env, and defaults

## Built-In Tools

### `BashTool`

File: `trae_agent/tools/bash_tool.py`

Purpose:

- persistent shell execution for command-based tasks

### `TextEditorTool`

File: `trae_agent/tools/edit_tool.py`

Purpose:

- filesystem editing with operations such as `view`, `create`, `str_replace`, and `insert`

### `JSONEditTool`

File: `trae_agent/tools/json_edit_tool.py`

Purpose:

- structured JSON editing with JSONPath operations

### `SequentialThinkingTool`

File: `trae_agent/tools/sequential_thinking_tool.py`

Purpose:

- structured reasoning and step tracking for complex thought processes

### `TaskDoneTool`

File: `trae_agent/tools/task_done_tool.py`

Purpose:

- lets the model signal explicit task completion

### `CKGTool`

File: `trae_agent/tools/ckg_tool.py`

Purpose:

- code knowledge graph lookup for code-aware reasoning

### `MCPTool`

File: `trae_agent/tools/mcp_tool.py`

Purpose:

- wraps dynamically discovered MCP capabilities as local tools

## Dependency Relationships

### Core Flow

- CLI depends on config loading and the `Agent` facade
- `Agent` depends on the concrete agent, console, and trajectory recorder
- `BaseAgent` depends on:
  - `LLMClient`
  - tool registries
  - tool executors
  - optional Docker execution
- `TraeAgent` depends on:
  - prompt definitions
  - tool registries
  - MCP client
  - config structures
- provider clients depend on external SDKs
- support services operate across the lifecycle without owning the main loop

### External Dependency Highlights

From `pyproject.toml`, the project depends on:

- `click`
- `rich`
- `python-dotenv`
- `openai`
- `anthropic`
- `google-genai`
- `ollama`
- `mcp`
- `jsonpath-ng`
- `tree-sitter`
- `tree-sitter-languages`

Optional or extra-oriented behavior includes Docker and evaluation dependencies.

## Runtime Execution Flow

### One-Shot Run

1. User executes `trae-cli run "task"`
2. CLI resolves config and runtime options
3. CLI constructs `Agent`
4. `Agent.run()` builds the task and console
5. `TraeAgent.new_task()` assembles prompts and tools
6. MCP tools are loaded if configured
7. `BaseAgent.execute_task()` enters the reasoning loop
8. The LLM either returns a final response or tool calls
9. Tool outputs are fed back into the conversation
10. Patch rules are validated if enabled
11. Trajectory data is recorded
12. Final result is returned to the user

### Interactive Run

1. User executes `trae-cli interactive`
2. CLI launches an iterative command loop
3. Each prompt is passed into the same underlying agent machinery
4. Session-level console state remains active between prompts

## How To Run The Project

## Requirements

- `uv`
- Python 3.12+
- API key for at least one supported provider

## Installation

```bash
git clone https://github.com/bytedance/trae-agent.git
cd trae-agent
uv sync --all-extras
source .venv/bin/activate
```

## Configuration

Copy the example file:

```bash
cp trae_config.yaml.example trae_config.yaml
```

Edit `trae_config.yaml` with:

- `model_providers`
- `models`
- `agents.trae_agent`
- API keys or base URLs if needed

Minimal example:

```yaml
agents:
  trae_agent:
    enable_lakeview: true
    model: trae_agent_model
    max_steps: 200
    tools:
      - bash
      - str_replace_based_edit_tool
      - sequentialthinking
      - task_done

model_providers:
  anthropic:
    api_key: your_anthropic_api_key
    provider: anthropic

models:
  trae_agent_model:
    model_provider: anthropic
    model: claude-sonnet-4-20250514
    max_tokens: 4096
    temperature: 0.5
```

## Useful Commands

```bash
trae-cli show-config
trae-cli run "Create a hello world Python script"
trae-cli interactive
trae-cli run "Fix the bug in main.py" --provider openai --model gpt-4o
```

## Docker Mode

Examples:

```bash
trae-cli run "Add tests for utils module" --docker-image python:3.11
trae-cli run "Debug authentication" --dockerfile-path /absolute/path/to/Dockerfile
trae-cli run "Update API endpoints" --docker-container-id 91998a56056c
```

## Testing The Project

Use the Makefile targets:

```bash
make uv-sync
make uv-test
make uv-pre-commit
```

CI also runs:

- pre-commit checks
- pytest-based unit tests on Python 3.12

## Important Test Coverage Areas

- `tests/test_cli.py`
- `tests/agent/test_trae_agent.py`
- `tests/tools/`
- `tests/utils/`

## Notable Caveats

- Docker support may require extras to be installed
- Lakeview requires matching config when enabled
- patch-enforced runs can fail if no meaningful git diff is produced
- rich console capabilities depend on richer terminal support than simple one-shot mode

## Recommended Reading Order For New Contributors

1. `README.md`
2. `pyproject.toml`
3. `trae_agent/cli.py`
4. `trae_agent/agent/agent.py`
5. `trae_agent/agent/base_agent.py`
6. `trae_agent/agent/trae_agent.py`
7. `trae_agent/tools/base.py`
8. `trae_agent/utils/config.py`
9. `tests/test_cli.py`
10. `tests/agent/test_trae_agent.py`

## Conclusion

Trae Agent is architected around a clean execution spine:

- CLI entry
- agent facade
- runtime loop
- tool subsystem
- provider dispatch
- support services

That separation makes it a strong base for both practical software-engineering automation and research-oriented experimentation.
