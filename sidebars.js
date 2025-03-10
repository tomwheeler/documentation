module.exports = {
  sidebarExplained: [
    {
      type: "category",
      label: "Temporal explained",
      collapsible: false,
      collapsed: false,
      items: [
        "temporal-explained/introduction",
        "temporal-explained/workflows",
        "temporal-explained/activities",
        "temporal-explained/task-queues-and-workers",
        "temporal-explained/signals-and-queries",
        "temporal-explained/timeouts-and-retries",
        "temporal-explained/visibility",
      ],
    },
  ],
  sidebarConcepts: [
    {
      type: "category",
      label: "Concepts",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "concepts/index",
      },
      items: [
        "concepts/what-is-an-activity",
        "concepts/what-is-an-activity-definition",
        "concepts/what-is-an-activity-execution",
        "concepts/what-is-an-activity-heartbeat",
        "concepts/what-is-an-activity-id",
        "concepts/what-is-an-activity-task",
        "concepts/what-is-an-activity-task-execution",
        "concepts/what-is-an-activity-type",
        "concepts/what-is-advanced-visibility",
        "concepts/what-is-archival",
        "concepts/what-is-a-child-workflow-execution",
        "concepts/what-is-a-command",
        "concepts/what-is-continue-as-new",
        "concepts/what-is-a-data-converter",
        "concepts/what-is-an-event",
        "concepts/what-is-an-event-history",
        "concepts/what-is-a-heartbeat-timeout",
        "concepts/what-is-a-list-filter",
        "concepts/what-is-a-local-activity",
        "concepts/what-is-a-memo",
        "concepts/what-is-a-namespace",
        "concepts/what-is-a-parent-close-policy",
        "concepts/what-is-a-query",
        "concepts/what-is-a-retry-policy",
        "concepts/what-is-a-run-id",
        "concepts/what-is-a-schedule-to-close-timeout",
        "concepts/what-is-a-schedule-to-start-timeout",
        "concepts/what-is-a-search-attribute",
        "concepts/what-is-a-side-effect",
        "concepts/what-is-a-signal",
        "concepts/what-is-standard-visibility",
        "concepts/what-is-a-start-to-close-timeout",
        "concepts/what-is-a-sticky-execution",
        "concepts/what-is-a-task-queue",
        "concepts/what-is-task-routing",
        "concepts/what-is-a-task-token",
        "concepts/what-is-a-task",
        "concepts/what-is-temporal",
        "concepts/what-is-a-temporal-application",
        "concepts/what-is-a-temporal-cluster",
        "concepts/what-is-a-temporal-cron-job",
        "concepts/what-is-the-temporal-platform",
        "concepts/what-is-a-temporal-sdk",
        "concepts/what-is-a-worker",
        "concepts/what-is-a-worker-entity",
        "concepts/what-is-a-worker-process",
        "concepts/what-is-a-worker-program",
        "concepts/what-is-a-workflow",
        "concepts/what-is-a-workflow-definition",
        "concepts/what-is-a-workflow-execution-timeout",
        "concepts/what-is-a-workflow-execution",
        "concepts/what-is-a-workflow-id-reuse-policy",
        "concepts/what-is-a-workflow-id",
        "concepts/what-is-a-workflow-run-timeout",
        "concepts/what-is-a-workflow-task",
        "concepts/what-is-a-workflow-task-execution",
        "concepts/what-is-a-workflow-task-timeout",
        "concepts/what-is-a-workflow-type",
      ],
    },
  ],
  sidebarLearningPaths: [
    {
      type: "category",
      label: "Learning",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "learning-paths/index",
      },
      items: [
        {
          type: "category",
          label: "Run your first app",
          collapsed: true,
          link: {
            type: "doc",
            id: "learning-paths/run-your-first-app/index",
          },
          items: [
            "go/tutorial-prerequisites",
            "go/run-your-first-app-tutorial",
            "java/tutorial-prerequisites",
            "java/run-your-first-app-tutorial",
            "go/sdk-video-tutorial",
          ],
        },
        {
          type: "category",
          label: "Hello World",
          collapsed: true,
          link: {
            type: "doc",
            id: "learning-paths/hello-world/index",
          },
          items: [
            "go/hello-world-tutorial",
            "java/hello-world-tutorial",
            "php/hello-world",
            "typescript/hello-world",
          ],
        },
        {
          type: "category",
          label: "Trip Booking (Sagas)",
          collapsed: true,
          items: [
            {
              type: "link",
              label: "Sagas in PHP",
              href: "/docs/php/booking-saga-tutorial",
            },
            {
              type: "link",
              label: "Sagas in Java",
              href: "https://github.com/temporalio/samples-java/blob/main/src/main/java/io/temporal/samples/bookingsaga/TripBookingWorkflowImpl.java",
            },
          ],
        },
        {
          type: "link",
          label: "eCommerce",
          href: "/blog/tags/go-ecommerce-tutorial",
        },
        {
          type: "category",
          label: "Background Checks",
          collapsed: true,
          link: {
            type: "doc",
            id: "learning-paths/background-checks/index",
          },
          items: [
            {
              type: "link",
              label: "Project repo",
              href: "https://github.com/temporalio/background-checks",
            },
            "learning-paths/background-checks/project-narrative",
            "learning-paths/background-checks/how-to-use",
            "learning-paths/background-checks/application-requirements",
            "learning-paths/background-checks/application-design",
            "learning-paths/background-checks/main-background-check",
            "learning-paths/background-checks/candidate-acceptance",
            "learning-paths/background-checks/ssn-trace",
            "learning-paths/background-checks/federal-criminal-search",
            "learning-paths/background-checks/state-criminal-search",
            "learning-paths/background-checks/motor-vehicle-search",
            "learning-paths/background-checks/employment-verification",
            "learning-paths/background-checks/application-deployment",
            "learning-paths/background-checks/api-reference",
            "learning-paths/background-checks/cli-reference",
          ],
        },
      ],
    },
  ],
  sidebarOperations: [
    {
      type: "category",
      label: "Operation guides",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "operation/index",
      },
      items: ["operation/how-to-tune-workers"],
    },
  ],
  sidebarCluster: [
    {
      type: "category",
      label: "Cluster how-tos",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "clusters/index",
      },
      items: [
        "clusters/quick-install",
        "server/versions-and-dependencies",
        "server/options",
        "server/configuration",
        "server/production-deployment",
        "server/security",
        "clusters/how-to-integrate-elasticsearch-into-a-temporal-cluster",
        "server/namespaces",
        "server/multi-cluster",
        "server/archive-data",
      ],
    },
  ],
  sidebarGo: [
    {
      type: "category",
      label: "Go how-tos",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "go/index",
      },
      items: [
        {
          type: "link",
          label: "Reference",
          href: "https://pkg.go.dev/go.temporal.io/sdk",
        },
        "go/how-to-develop-a-workflow-definition-in-go",
        "go/how-to-develop-an-activity-definition-in-go",
        "go/how-to-spawn-an-activity-execution-in-go",
        "go/how-to-set-activityoptions-in-go",
        "go/how-to-get-the-result-of-an-activity-execution-in-go",
        "go/how-to-spawn-a-workflow-execution-in-go",
        "go/how-to-set-startworkflowoptions-in-go",
        "go/how-to-get-the-result-of-a-workflow-execution-in-go",
        "go/how-to-develop-a-worker-program-in-go",
        "go/how-to-set-workeroptions-in-go",
        "go/how-to-set-registerworkflowoptions-in-go",
        "go/how-to-set-registeractivityoptions-in-go",
        "go/how-to-spawn-a-child-workflow-execution-in-go",
        "go/how-to-set-childworkflowoptions-in-go",
        "go/how-to-set-clientoptions-in-go",
        "go/how-to-set-connectionoptions-in-go",
        "go/how-to-set-executelocalactivityoptions-in-go",
        "go/how-to-heartbeat-an-activity-in-go",
        "go/workflows",
        "go/activities",
        "go/how-to-send-a-signal-to-a-workflow-execution-in-go",
        "go/how-to-handle-a-signal-in-a-workflow-in-go",
        "go/how-to-send-a-query-to-a-workflow-execution-in-go",
        "go/how-to-handle-a-query-in-a-workflow-in-go",
        "go/error-handling",
        "go/selectors",
        "go/how-to-continue-as-new-in-go",
        "go/how-to-execute-a-side-effect-in-go",
        "go/how-to-test-workflow-definitions-in-go",
        "go/how-to-create-a-custom-data-converter-in-go",
        "go/versioning",
        "go/how-to-create-a-worker-session-in-go",
        "go/tracing",
        "go/search-apis",
      ],
    },
  ],
  sidebarJava: [
    {
      type: "category",
      label: "Java how-tos",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "java/index",
      },
      items: [
        {
          type: "link",
          label: "Reference",
          href: "https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html",
        },
        "java/workflows",
        "java/activities",
        "java/workers",
        "java/task-queues",
        "java/signals",
        "java/queries",
        "java/versioning",
        "java/side-effect",
        "java/distributed-cron",
        "java/testing-and-debugging",
        "java/how-to-develop-a-workflow-definition-in-java",
        "java/how-to-spawn-a-workflow-execution-in-java",
        "java/how-to-continue-as-new-in-java",
        "java/how-to-spawn-a-child-workflow-execution-in-java",
        "java/how-to-set-child-workflow-options-in-java",
        "java/how-to-develop-a-worker-program-in-java",
        "java/how-to-provide-an-authorization-token-in-java",
      ],
    },
  ],
  sidebarPHP: [
    {
      type: "category",
      label: "PHP how-tos",
      collapsible: false,
      collapsed: false,
      items: [
        "php/introduction",
        "php/workflows",
        "php/activities",
        "php/task-queues",
        "php/workers",
        "php/how-to-develop-a-worker-program-in-php",
        "php/signals",
        "php/queries",
        "php/retries",
        "php/error-handling",
        "php/side-effect",
        "php/versioning",
        "php/distributed-cron",
      ],
    },
  ],
  sidebarTypeScript: [
    {
      type: "category",
      label: "TypeScript how-tos",
      collapsible: false,
      collapsed: false,
      items: [
        "typescript/introduction",
        {
          type: "category",
          label: "TS Tutorials",
          items: [
            "typescript/package-initializer",
            "typescript/subscription-tutorial",
            "typescript/chatbot-tutorial",
            "typescript/nextjs-tutorial",
            {
              type: "link",
              label: "Code Samples",
              href: "https://github.com/temporalio/samples-typescript#samples",
            },
          ],
        },
        {
          type: "category",
          label: "TS Core APIs",
          collapsed: true,
          items: [
            "typescript/workflows",
            "typescript/activities",
            "typescript/workers",
            "typescript/clients",
          ],
        },
        "typescript/troubleshooting",
        {
          type: "category",
          label: "TS Production APIs",
          collapsed: true,
          items: [
            "typescript/security",
            "typescript/testing",
            "typescript/patching",
            "typescript/logging",
            "typescript/production-deploy",
          ],
        },
        {
          type: "category",
          label: "TS Advanced APIs",
          collapsed: true,
          items: [
            "typescript/cancellation-scopes",
            "typescript/determinism",
            "typescript/handling-failure",
            "typescript/search-attributes",
            "typescript/interceptors",
          ],
        },
        {
          type: "link",
          label: "API Reference",
          href: "https://typescript.temporal.io",
        },
      ],
    },
  ],
  sidebartctl: [
    {
      type: "category",
      label: "tctl",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "tctl/index",
      },
      items: [
        "tctl/how-to-install-tctl",
        "tctl/environment-variables",
        "tctl/how-to-use-tctl",
        "tctl/how-to-add-a-custom-search-attribute-to-a-cluster-using-tctl",
        "tctl/how-to-remove-a-search-attribute-from-a-cluster-using-tctl",
        {
          type: "category",
          label: "tctl commands",
          collapsible: true,
          collapsed: true,
          link: {
            type: "doc",
            id: "tctl/index",
          },
          items: [
            {
              type: "category",
              label: "activity",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/activity/index",
              },
              items: ["tctl/activity/complete", "tctl/activity/fail"],
            },
            {
              type: "category",
              label: "batch",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/batch/index",
              },
              items: [
                "tctl/batch/start",
                "tctl/batch/list",
                "tctl/batch/describe",
                "tctl/batch/terminate",
              ],
            },
            {
              type: "category",
              label: "cluster",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/cluster/index",
              },
              items: [
                "tctl/cluster/health",
                "tctl/cluster/list-search-attributes",
              ],
            },
            {
              type: "category",
              label: "data-converter",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/data-converter/index",
              },
              items: ["tctl/data-converter/web"],
            },
            {
              type: "category",
              label: "namespace",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/namespace/index",
              },
              items: [
                "tctl/namespace/describe",
                "tctl/namespace/list",
                "tctl/namespace/register",
                "tctl/namespace/update",
              ],
            },
            {
              type: "category",
              label: "task-queue",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/task-queue/index",
              },
              items: [
                "tctl/task-queue/describe",
                "tctl/task-queue/list-partition",
              ],
            },
            {
              type: "category",
              label: "workflow",
              collapsible: true,
              collapsed: true,
              link: {
                type: "doc",
                id: "tctl/workflow/index",
              },
              items: [
                "tctl/workflow/cancel",
                "tctl/workflow/count",
                "tctl/workflow/describe",
                "tctl/workflow/describeid",
                "tctl/workflow/list",
                "tctl/workflow/listall",
                "tctl/workflow/listarchived",
                "tctl/workflow/observe",
                "tctl/workflow/query",
                "tctl/workflow/reset",
                "tctl/workflow/reset-batch",
                "tctl/workflow/run",
                "tctl/workflow/scan",
                "tctl/workflow/show",
                "tctl/workflow/showid",
                "tctl/workflow/signal",
                "tctl/workflow/stack",
                "tctl/workflow/start",
                "tctl/workflow/terminate",
              ],
            },
          ],
        },
      ],
    },
  ],
  sidebarRefs: [
    {
      type: "category",
      label: "References",
      collapsed: true,
      items: ["reference/sdk-metrics"],
    },
  ],
};
