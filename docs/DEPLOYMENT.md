# Deployment runbook

## Local proof server

1. Start Docker Desktop.
2. From `counter-cli`, run `docker compose -f proof-server.yml up`.
3. Wait for `0.0.0.0:6300` to be listening.
4. In another terminal, run `npm run preview --workspace @midnight-ntwrk/counter-cli` or
   `npm run preprod --workspace @midnight-ntwrk/counter-cli`.

## Preview/Preprod prerequisites

The headless wallet needs tNIGHT and generated DUST. Fund only the public
unshielded address displayed by the CLI through the current official faucet.
Wallet seeds and private keys stay local and must never be pasted into chat,
README files, CI logs, or Git.

## Evidence to record

After deployment, record all three items together:

```text
Network: Preview or Preprod
Contract address: <verified address>
Transaction / ledger evidence: <explorer URL or CLI output>
```

Add the verified address to the README and capture the deployment screenshot.
Do not fill in a placeholder address or claim success without a confirmed
transaction.
