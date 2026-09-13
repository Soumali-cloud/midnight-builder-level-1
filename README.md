# Midnight Builder Level 1 — Private Counter

A Midnight Compact counter that keeps the witness private while publishing only the verified result.

## Contract Address

| Network | Counter contract address |
|---|---|
| Preview | Not verified/deployed |
| Preprod | Not verified/deployed |

The public wallet address supplied for funding is not a contract address.

## What This Does

`round` is public ledger state. `incrementWithPrivateWitness` proves that the local witness equals `1`, discloses only the boolean `proofAccepted`, and then increments `round`.

## Privacy Model

- PUBLIC: `round` and `proofAccepted`.
- PRIVATE: `privateCounter`, supplied through a TypeScript witness.
- PROVES WITHOUT REVEALING: the circuit checks the witness and discloses only whether the check succeeded.

## Tech Stack

- Compact language 0.22 / Compact toolchain 0.30.0
- `@midnight-ntwrk/compact-runtime` 0.15.0
- TypeScript, Vitest, midnight-js, and the Midnight wallet SDK

## Prerequisites

- Node.js 24 (Node 22+ is supported by the project)
- npm
- Official Compact devtools in WSL on Windows, or natively on macOS/Linux
- Docker Desktop for the proof server and network deployment

Windows `compact.exe` is the NTFS file-compression utility. It is not the Midnight compiler. The project wrapper invokes the official `compact` command through WSL on Windows.

## Setup

```bash
npm ci
```

## Compile

```bash
npm run compact
npm run build
```

Compilation generates `contract/src/managed/counter/` with bindings, circuit IR, and proving/verifying artifacts. Generated output is ignored by Git because it is reproducible.

## Run Tests

```bash
npm test
```

The contract tests cover deterministic initialization, ordinary state transition, valid private-witness disclosure, and rejection of an invalid private witness.

## Deployment

The repository contains Preview and Preprod CLI flows in `counter-cli/`. Deployment still requires a locally controlled funded test wallet, tNIGHT/DUST, and an interactive approval. No wallet secret belongs in this repository.

```bash
npm run preprod-ps --workspace @midnight-ntwrk/counter-cli
# or
npm run preview-ps --workspace @midnight-ntwrk/counter-cli
```

No Counter deployment has been verified for this repository, so no address is claimed here.

## Initial Idea

[PLACEHOLDER — I WILL FILL THIS IN MANUALLY]

## Screenshots

- Compile screenshot: `[PLACEHOLDER — add docs/screenshots/compact-compile.png]`
- Deployment screenshot: `[PLACEHOLDER — add docs/screenshots/counter-deployment.png]`

## Project Structure

```text
contract/src/counter.compact       Compact contract
contract/src/witnesses.ts          private witness implementation
contract/src/managed/counter/      generated compiler artifacts (after compile)
contract/src/test/counter.test.ts  contract tests
counter-cli/src/                   Preview/Preprod and standalone CLI
.github/workflows/                 CI, verification, and scanning workflows
```

## Verification Status

- Compact compiler: not installed in this Windows shell; CI uses the official setup action for toolchain 0.30.0.
- Contract and generated artifacts: awaiting a supported Compact environment.
- Deployment and contract address: not verified.
- GitHub remote: `https://github.com/Soumali-cloud/midnight-builder-level-1.git`.
