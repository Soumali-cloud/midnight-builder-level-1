# Security notes

- The private witness value is stored only in the local private state object.
- The Compact circuit checks the witness before disclosing a boolean result.
- `disclose()` is an explicit compiler-level acknowledgement that a derived
  value may cross the privacy boundary; it is not encryption.
- The repository contains no wallet seed, private key, or authentication token.
- Testnet funds and DUST are disposable development resources only.

Before a real deployment, review every exported ledger field and circuit for
unintended disclosure, and verify the generated contract artifacts match the
intended Compact source.
