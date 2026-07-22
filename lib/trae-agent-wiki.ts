export type WikiNavItem = {
  id: string;
  label: string;
};

export type WikiStat = {
  label: string;
  value: string;
  detail: string;
};

export type WikiSection = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  codeRefs?: string[];
};

export const traeAgentWiki = {
  title: "Trae Agent Code Wiki",
  subtitle:
    "A structured architecture guide for the Bytedance `trae-agent` repository, surfaced through a styled documentation workspace.",
  repoUrl: "https://github.com/bytedance/trae-agent",
  heroImage:
    "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=futuristic%20holographic%20circular%20sigil%20interface%2C%20cyan%20neon%20energy%20ring%2C%20dark%20black%20background%2C%20premium%20sci-fi%20dashboard%20art%2C%20high%20contrast%2C%20cinematic%20glow%2C%20intricate%20techno-runes%2C%20clean%20center%20composition&image_size=portrait_16_9",
  stats: [
    {
      label: "Primary Runtime",
      value: "Python CLI",
      detail: "Single-package agent framework driven by `trae-cli`.",
    },
    {
      label: "Core Strength",
      value: "Modular Agent Loop",
      detail: "Separates CLI, agent runtime, tools, providers, and support systems.",
    },
    {
      label: "Extensibility",
      value: "MCP + Tools",
      detail: "Adds built-in tools and dynamically discovered MCP tools.",
    },
    {
      label: "Verification",
      value: "Pytest + CI",
      detail: "Tests cover CLI, tools, config, agent behavior, and provider utilities.",
    },
  ] satisfies WikiStat[],
  nav: [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Architecture" },
    { id: "modules", label: "Major Modules" },
    { id: "classes", label: "Key Classes" },
    { id: "functions", label: "Key Functions" },
    { id: "dependencies", label: "Dependencies" },
    { id: "runtime-flow", label: "Runtime Flow" },
    { id: "runbook", label: "Run Guide" },
    { id: "testing", label: "Testing" },
    { id: "caveats", label: "Caveats" },
  ] satisfies WikiNavItem[],
  sections: [
    {
      id: "overview",
      title: "Project Overview",
      summary:
        "Trae Agent is an LLM-based software-engineering agent that exposes a CLI for natural-language coding workflows, tool execution, and trajectory recording.",
      bullets: [
        "The repository is centered on the `trae_agent` Python package, with CLI entrypoints, a reusable agent runtime, multiple LLM providers, and a tool execution layer.",
        "Its design is research-friendly: internal layers are explicit, replaceable, and easy to inspect for evaluation, ablation, and extension work.",
        "Beyond the main package, the repository includes `tests/` for verification, `docs/` for supporting docs, and `evaluation/` for benchmark and patch-selection workflows.",
      ],
      codeRefs: [
        "trae_agent/cli.py",
        "trae_agent/agent/base_agent.py",
        "trae_agent/tools/base.py",
        "trae_agent/utils/config.py",
      ],
    },
    {
      id: "architecture",
      title: "Overall Architecture",
      summary:
        "The runtime is organized into layered responsibilities so the CLI, agent orchestration, tool execution, provider access, and support services remain separated.",
      bullets: [
        "CLI layer: parses commands, resolves configuration, chooses working directory and Docker mode, and launches an agent session.",
        "Agent facade layer: `Agent` creates the concrete agent, sets up trajectory recording and console integration, and acts as the CLI-facing wrapper.",
        "Runtime loop layer: `BaseAgent` owns the step loop, LLM interaction, tool dispatch, reflection, stopping criteria, and cleanup.",
        "Concrete agent layer: `TraeAgent` defines default tools, system prompt construction, MCP discovery, patch checks, and git diff handling.",
        "Tool layer: local tools implement editing, shell execution, structured reasoning, JSON editing, task completion, and code graph lookup.",
        "Support layer: config loading, console rendering, Lakeview summaries, Docker, MCP, and trajectory recording operate as supporting subsystems.",
      ],
      codeRefs: [
        "trae_agent/cli.py",
        "trae_agent/agent/agent.py",
        "trae_agent/agent/base_agent.py",
        "trae_agent/agent/trae_agent.py",
      ],
    },
    {
      id: "modules",
      title: "Responsibilities Of Major Modules",
      summary:
        "Each package in the repository owns a distinct concern, which keeps the framework understandable and easier to extend.",
      bullets: [
        "`trae_agent/agent`: runtime lifecycle, agent loop orchestration, Docker integration, and the concrete `TraeAgent` behavior.",
        "`trae_agent/tools`: tool abstractions and built-in tools such as bash, text edit, JSON edit, sequential thinking, task_done, and CKG lookup.",
        "`trae_agent/utils/llm_clients`: provider adapters for OpenAI, Anthropic, Azure, OpenRouter, Doubao, Google, and Ollama.",
        "`trae_agent/utils/cli`: presentation layer for rich or simple terminal consoles.",
        "`trae_agent/utils`: configuration resolution, constants, MCP client, Lakeview summaries, and trajectory recording.",
        "`trae_agent/prompt`: reusable prompt definitions consumed by the concrete agent.",
        "`tests`: behavior-focused tests covering CLI, tools, config utilities, MCP integration, and agent logic.",
        "`evaluation`: benchmark helpers, patch selection logic, and evaluation runners separate from the shipping runtime.",
      ],
      codeRefs: [
        "trae_agent/tools/__init__.py",
        "trae_agent/utils/llm_clients/llm_client.py",
        "tests/test_cli.py",
        "evaluation/run_evaluation.py",
      ],
    },
    {
      id: "classes",
      title: "Key Classes",
      summary:
        "A small set of classes drives nearly all behavior; together they define the public runtime shape of the project.",
      bullets: [
        "`Agent`: facade used by the CLI to wire together config, console output, trajectory recording, and concrete agent execution.",
        "`BaseAgent`: the core state machine that runs step-by-step LLM reasoning, tool execution, and task completion checks.",
        "`TraeAgent`: the software-engineering specialization that chooses prompts, tools, MCP tool discovery, and patch validation rules.",
        "`Tool` and `ToolExecutor`: abstractions for exposing tools to the LLM and executing them consistently.",
        "`DockerManager` and `DockerToolExecutor`: execute tools in a containerized environment when Docker mode is enabled.",
        "`LLMClient`: dispatches model requests to the correct provider-specific client implementation.",
        "`Config`: merges YAML, legacy JSON, CLI overrides, and environment variables into a single runtime configuration.",
        "`TrajectoryRecorder`: records execution metadata, messages, tools, and step traces for analysis.",
      ],
      codeRefs: [
        "trae_agent/agent/agent.py",
        "trae_agent/agent/base_agent.py",
        "trae_agent/agent/docker_manager.py",
        "trae_agent/utils/trajectory_recorder.py",
      ],
    },
    {
      id: "functions",
      title: "Key Functions And Entry Points",
      summary:
        "The most important functions define the CLI surface, create tasks, run the LLM loop, and verify final output.",
      bullets: [
        "`run()` in `cli.py` is the main non-interactive entrypoint and handles most execution flows.",
        "`interactive()` in `cli.py` starts a conversational shell-like session for iterative work.",
        "`Agent.run()` builds the concrete task, initializes MCP tools when needed, starts the console, and delegates execution.",
        "`BaseAgent.execute_task()` is the main loop controlling step progression until success or max-step termination.",
        "`BaseAgent._run_llm_step()` decides whether the model produced a final response or tool calls.",
        "`BaseAgent._tool_call_handler()` routes tool invocations locally or through Docker and records the results.",
        "`TraeAgent.new_task()` builds initial system and user messages plus the working toolset.",
        "`TraeAgent.get_git_diff()` and `remove_patches_to_tests()` support patch-oriented workflows and completion checks.",
      ],
      codeRefs: [
        "trae_agent/cli.py",
        "trae_agent/agent/agent.py",
        "trae_agent/agent/base_agent.py",
        "trae_agent/agent/trae_agent.py",
      ],
    },
    {
      id: "dependencies",
      title: "Dependency Relationships",
      summary:
        "The project has a clear inward flow: the CLI depends on the facade, the facade depends on the runtime, the runtime depends on tools and providers, and support systems plug in around that core.",
      bullets: [
        "The CLI layer depends on `click`, `rich`, config resolution, and the `Agent` wrapper.",
        "`Agent` depends on `TraeAgent`, `TrajectoryRecorder`, and console abstractions, but it does not implement the step loop itself.",
        "`BaseAgent` depends on `LLMClient`, tool registries, and optional Docker executors; this makes the loop flexible but still centralized.",
        "`TraeAgent` depends on prompt modules, tool registries, MCP integration, and configuration types to define its specialization.",
        "`LLMClient` depends on provider adapters, which in turn depend on external SDKs such as `openai`, `anthropic`, `google-genai`, and `ollama`.",
        "MCP support depends on the `mcp` package and wraps remote-discovered tools as local `MCPTool` objects.",
        "CKG support adds parsing-oriented dependencies such as `tree-sitter` and `tree-sitter-languages`.",
      ],
      codeRefs: [
        "pyproject.toml",
        "trae_agent/utils/llm_clients/llm_client.py",
        "trae_agent/utils/mcp_client.py",
        "trae_agent/tools/ckg_tool.py",
      ],
    },
    {
      id: "runtime-flow",
      title: "Runtime Flow",
      summary:
        "A task follows a predictable lifecycle from CLI input to model reasoning, tool execution, patch validation, and trajectory recording.",
      bullets: [
        "The user starts with `trae-cli run ...` or `trae-cli interactive`, which resolves config and builds an `Agent` instance.",
        "`Agent.run()` creates the task context, optionally discovers MCP tools, starts the console, and invokes `BaseAgent.execute_task()`.",
        "`BaseAgent` sends the conversation state to the model, interprets the response, and either emits a final answer or executes tools.",
        "Tool outputs are fed back into the conversation state so the next model step can reason with concrete execution results.",
        "If patch mode is enabled, `TraeAgent` verifies the git diff before allowing completion.",
        "During the full run, `TrajectoryRecorder` stores step metadata for later debugging or evaluation.",
      ],
      codeRefs: [
        "trae_agent/cli.py",
        "trae_agent/agent/base_agent.py",
        "trae_agent/agent/trae_agent.py",
      ],
    },
    {
      id: "runbook",
      title: "How To Run The Project",
      summary:
        "The repository is intended to be installed with `uv`, configured via YAML, and executed through the `trae-cli` console entrypoint.",
      bullets: [
        "Install prerequisites: `uv` and at least one supported model provider API key.",
        "Clone the repository, run `uv sync --all-extras`, and activate the virtual environment.",
        "Copy `trae_config.yaml.example` to `trae_config.yaml` and fill in the model provider, model name, and credentials.",
        "Run `trae-cli show-config` first to confirm the resolved configuration is valid.",
        "Execute tasks with `trae-cli run \"your instruction\"` or start interactive mode with `trae-cli interactive`.",
        "Use provider-specific overrides such as `--provider openai --model gpt-4o` when you want to bypass defaults.",
      ],
      codeRefs: ["README.md", "trae_config.yaml.example", "trae_agent/cli.py"],
    },
    {
      id: "testing",
      title: "Testing And Verification",
      summary:
        "Tests are organized around public behavior, and the Makefile codifies the main development commands used locally and in CI.",
      bullets: [
        "Run `make uv-sync` to install dependencies in the expected development environment.",
        "Run `make uv-test` to execute the main pytest suite with selected provider tests skipped when credentials are unavailable.",
        "CLI behavior is tested in `tests/test_cli.py`, including prompt passing, working directory handling, and file-related errors.",
        "Agent-specific logic such as task initialization, patch filtering, and completion checks is tested in `tests/agent/test_trae_agent.py`.",
        "GitHub Actions runs pre-commit checks and unit tests on Python 3.12 to keep the repository validated in CI.",
      ],
      codeRefs: [
        "Makefile",
        "tests/test_cli.py",
        "tests/agent/test_trae_agent.py",
        ".github/workflows/unit-test.yml",
      ],
    },
    {
      id: "caveats",
      title: "Notable Caveats",
      summary:
        "A few operational details are worth understanding before extending or deploying the project.",
      bullets: [
        "Docker mode relies on packages that are installed through extras, so containerized execution may fail if the full environment is not synced.",
        "Lakeview summarization requires its own configuration block when enabled; otherwise config validation can fail.",
        "The rich console experience depends on richer terminal tooling, while simple non-interactive usage remains the safest default path.",
        "Patch enforcement can deliberately reject a completion when no meaningful git diff is produced.",
      ],
      codeRefs: [
        "trae_agent/agent/docker_manager.py",
        "trae_agent/utils/config.py",
        "trae_agent/utils/lake_view.py",
      ],
    },
  ] satisfies WikiSection[],
  dependencyLanes: [
    "CLI -> Agent facade -> BaseAgent runtime -> Tools + Providers -> Support services",
    "Config -> Agent + CLI + Provider selection",
    "MCP -> dynamic tool discovery -> wrapped as local tool definitions",
    "TrajectoryRecorder -> passive observer across the full execution lifecycle",
  ],
  runCommands: [
    "git clone https://github.com/bytedance/trae-agent.git",
    "cd trae-agent",
    "uv sync --all-extras",
    "source .venv/bin/activate",
    "cp trae_config.yaml.example trae_config.yaml",
    "trae-cli show-config",
    'trae-cli run "Create a hello world Python script"',
    "make uv-test",
  ],
};
