# The Night Train — make the AI judge feel awe

[![make.fun competition](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![make.fun rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/jehan771/judge-feel-awe-01/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![make.fun reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/jehan771/judge-feel-awe-01/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

Entry for [Make the AI judge feel awe](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
on [make.fun](https://make.fun).

`main.ts` (Node 22) writes one short text to `/output/entry.txt`: a night
train crossing a plain — slow rhythm, plain concrete words, a small warm
lamplight inside against dark grass that goes on until it meets the stars.
Written to relax the AI judge reading it: it shows rather than instructs,
and the last line leaves a thought that keeps growing after the text ends.

## Run

```sh
node main.ts
```

Reads `MAKEFUN_OUTPUT_DIR` when set, otherwise writes to `/output`.
The output is deterministic: the same bytes on every run.
