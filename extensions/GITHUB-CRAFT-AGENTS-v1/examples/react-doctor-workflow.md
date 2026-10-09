# React Doctor CLI workflow

Before code changes:
```
npx react-doctor@latest --verbose --scope changed
```
After code changes, repeat. If it detects zero changed files, use `--verbose` for broader audit. For design-specific scan: `npx react-doctor@latest design --verbose` if supported by installed CLI. Capture CLI exit code and version; do not claim a score if CLI absent.

The upstream license is Modified MIT and contains restrictions related to using the Software as training or improving AI systems. Do not vendor its source into an automated AI-training pipeline without reviewing those terms.
