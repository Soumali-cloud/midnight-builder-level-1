# Midnight Builder Level 1 — Private Counter

This repository is a Midnight Compact counter DApp adapted from the official
counter starter. It demonstrates the privacy boundary directly:

- `round` is public ledger state.
- `privateCounter()` is a local witness supplied by TypeScript.
- `incrementWithPrivateWitness()` proves the witness equals `1` without putting
  the witness value on-chain.
- `disclose()` publishes only the boolean proof result in `proofAccepted`.

## Prerequisites

- Node.js 22+ (Node 24.18.0 verified locally)
- Docker Desktop with Compose (installed locally; daemon must be running for the
  proof server or standalone network)
- Compact devtools and the Compact 0.30.0 toolchain

The Compact installer currently publishes macOS/Linux binaries. On Windows,
run the installer inside WSL or another supported Linux environment, then make
the generated `compact` command available to the project shell.

## Install and compile

```bash
npm install
npm run compact
npm run build
npm test
```

Compilation generates `contract/src/managed/counter/`, including TypeScript
bindings, circuit IR, and proving/verifying keys. Generated artifacts are
ignored by Git because they are reproducible and can be large.

## Run locally

Start Docker Desktop, then run the full local stack:

```bash
npm run standalone --workspace @midnight-ntwrk/counter-cli
```

The proof server listens on `http://localhost:6300`. The CLI can also target
Preview or Preprod:

```bash
npm run preview-ps --workspace @midnight-ntwrk/counter-cli
npm run preprod-ps --workspace @midnight-ntwrk/counter-cli
```

Those public-network flows require a funded test wallet and DUST. Never put a
seed phrase or private key in this repository.

## Verification checklist

| Check | Status |
|---|---|
| Node.js 22+ | PASS — Node 24.18.0 |
| Docker / Compose installed | PASS — daemon needs to be started |
| npm dependencies | PASS |
| Compact compiler | BLOCKED locally — Windows shell has `compact.exe` reserved for file compression; install Compact in WSL/Linux |
| Contract tests | Pending Compact-generated bindings |
| Proof server | Pending Docker daemon |
| Preview/Preprod deployment | Manual wallet funding and approval required |

## Screenshots

Capture these manually after the environment is available:

1. `docs/screenshots/compact-compile.png` — successful Compact compilation.
2. `docs/screenshots/counter-deployment.png` — successful deployment and the
   resulting contract address.
3. `docs/screenshots/public-ledger-state.png` — public `round` and
   `proofAccepted` after an increment.

The deployment address should be added below after a real Preview or Preprod
transaction is verified:

```text
Contract address: NOT_DEPLOYED_YET
Network: NOT_DEPLOYED_YET
```

## Project layout

```text
contract/src/counter.compact       Compact contract
contract/src/witnesses.ts          private witness implementation
contract/src/test/                 simulator and Vitest tests
counter-cli/src/                   CLI and network configuration
counter-cli/proof-server.yml       Preview/Preprod proof server
counter-cli/standalone.yml         local Docker stack
```

## Sources

- [Midnight documentation](https://docs.midnight.network/)
- [Compact language repository](https://github.com/LFDT-Minokawa/compact)
- [Official counter starter](https://github.com/midnightntwrk/example-counter)
- [Compact/ledger compatibility](https://github.com/midnightntwrk/midnight-sdk/blob/main/COMPATIBILITY.md)

## Manual submission actions remaining

- Start Docker Desktop and install the Compact toolchain in WSL/Linux.
- Run the compile/test/deployment commands above and capture the three screenshots.
- Fund a test wallet, approve the Preview/Preprod transaction, and record the
  verified contract address.
- Complete Rise In GitHub OAuth if the challenge portal still requires it.
