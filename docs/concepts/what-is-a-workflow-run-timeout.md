---
id: what-is-a-workflow-run-timeout
title: What is a Workflow Run Timeout?
sidebar_label: Workflow Run Timeout
description: This is the maximum amount of time that a single Workflow Run is restricted to.
tags:
  - explanation
  - timeouts
---

A Workflow Run Timeout is the maximum amount of time that a single Workflow Run is restricted to.

![Workflow Run Timeout period](/diagrams/workflow-run-timeout.svg)

**The default is set to the same value as the [Workflow Execution Timeout](/docs/concepts/what-is-a-workflow-execution-timeout).**
This timeout is most commonly used to limit the execution time of a single [Temporal Cron Job Execution](/docs/concepts/what-is-a-temporal-cron-job).

If the Workflow Run Timeout is reached, the Temporal Server automatically Terminates the Workflow Execution.

**Implementation guides:**

- [How to set a Workflow Run Timeout in Go](/docs/go/how-to-set-startworkflowoptions-in-go/#workflowruntimeout)
