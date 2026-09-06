# CMI AI Hub 定制版 dsh（DeepSeek Harness）

本仓库是 **DeepSeek Harness (dsh) 0.1.2-rc.1 的 CMI AI Hub 定制版源码**，用于构建
桌面端（DeepSeek Harness(AIHub定制版)）下载的预打包 dsh 核心（`deepseek-harness-pkg`）。

## 定制内容

- **默认模型提供方**：`cmi-aihub` / `azure/gpt-5-nano`
  - `packages/bundle/base/cordis.patch.yml` 的 `agent-default-model` 行
  - `packages/bundle/acp-app/cordis.patch.yml` 的 `acp` 行
  - provider 路由由 `llm-pi-ai` 的 settings 段（`llm-pi-ai.providers.cmi-aihub`）提供，
    桌面端启动时幂等注入（见桌面端 `src-tauri/src/service/workflow/cmi_aihub.rs`）
- **品牌替换**：CMI AI Hub（中国移动蓝 #003C8F / 强调蓝 #0085D0）
  - 侧边栏 logo / 字标：`packages/client/ui-brand-official/src/client/Brand.tsx`
    + `packages/client/ui-primitives/src/CmiAiHubMark.tsx` / `CmiAiHubWordmark.tsx`
  - favicon / PWA manifest：`apps/web/public/`
  - 浏览器标题：`DSH_CLIENT_TITLE=CMI AI Hub`（`scripts/client-build-environment.ts`）
  - 欢迎语 / onboarding / system prompt / CLI 描述等文案

## 构建发布

手动触发 **Build and Release CMI AI Hub from Source** workflow（Actions 页面）：

- `dsh_version`：要打包的版本（默认 `0.1.2-rc.1`，仅用于 tag/Release 命名）

构建产出四平台 zip 并发布到本仓库 Releases（tag `dsh-src-<version>-<run_id>`）：

| 平台 | 资产 |
| --- | --- |
| Windows | `deepseek-harness-pkg-windows.zip` |
| macOS (Apple Silicon) | `deepseek-harness-pkg-macos-arm64.zip` |
| macOS (Intel) | `deepseek-harness-pkg-macos-x64.zip` |
| Linux | `deepseek-harness-pkg-linux.zip` |

桌面端通过 `https://github.com/<owner>/<repo>/releases/latest/download/` 下载这些资产。

## 本地构建

```sh
pnpm install
pnpm run build          # 完整构建（含 client）
pnpm run verify-runtime-closure
```

## 上游

基于 [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) `dsh-v0.1.2-rc.1`。
