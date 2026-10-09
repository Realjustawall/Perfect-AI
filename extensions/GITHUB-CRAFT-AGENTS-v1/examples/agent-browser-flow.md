# Approved local website flow (examples, not automatically executed)

```powershell
npm i -g agent-browser
agent-browser install
agent-browser skills get core --full
agent-browser open http://127.0.0.1:5173
agent-browser snapshot -i
agent-browser screenshot ./evidence/landing.png
```

See `agent-browser --help` to check installed-version syntax. Only interact with a development site you own or are authorized to test. Do not log credentials in screenshots; never execute destructive actions without explicit user approval. The presence of this file does not prove browser automation was run.
