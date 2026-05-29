const header = document.querySelector("[data-header]");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const lifecycleContent = {
  discover: {
    kicker: "Discovery & Scope",
    title: "Turn ambiguity into a delivery-ready platform backlog.",
    body: "Clarify business outcomes, impacted systems, user journeys, vendors, controls, system-of-record questions, and dependencies. Translate the work into epics, features, stories, acceptance criteria, and PI objectives.",
    work: ["Product discovery and scope definition", "Dependency and stakeholder mapping", "Risk, control, and platform impact analysis", "System-of-record and operating model gap scan"],
    outputs: ["Delivery roadmap", "Prioritized backlog", "Acceptance criteria", "Platform gap map"]
  },
  design: {
    kicker: "Architecture & Controls",
    title: "Align the platform path before teams start building.",
    body: "Coordinate architecture review, security inputs, data flows, platform operating rules, operational controls, vendor responsibilities, settlement/posting logic, and downstream impacts across banking systems.",
    work: ["Architecture Review Board preparation", "Data flow and control alignment", "Operating-rule and access-control inputs", "Posting, settlement, and reconciliation path design"],
    outputs: ["Architecture decision package", "Control and access model", "Dependency plan", "System-of-record map"]
  },
  onboard: {
    kicker: "Vendor & Environment Readiness",
    title: "Bring vendors, environments, and teams into one delivery rhythm.",
    body: "Manage vendor onboarding, access needs, operating-rule inputs, lower-environment deployment readiness, integration planning, RACI alignment, and the practical handoffs needed for platform execution.",
    work: ["Vendor coordination and onboarding", "Lower-environment setup tracking", "Integration and configuration planning", "Bank/vendor ownership alignment"],
    outputs: ["Vendor readiness checklist", "Environment deployment plan", "Integration tracker", "Responsibility map"]
  },
  validate: {
    kicker: "QA, UAT & Stability",
    title: "Prove the platform before production becomes the test.",
    body: "Drive QA, UAT, performance stability setup, monitoring validation, DR planning, regression coverage, exception testing, reconciliation checks, and acceptance signoff across product, engineering, operations, and vendors.",
    work: ["QA/UAT strategy", "Performance and stability setup", "DR and monitoring validation", "Exception, return, repair, and reconciliation scenario testing"],
    outputs: ["Validation plan", "Defect and risk log", "Production readiness evidence", "Exception handling playbook"]
  },
  launch: {
    kicker: "Cutover & Release",
    title: "Move safely through release, cutover, and migration windows.",
    body: "Build runbooks, manage CAB submissions, coordinate cutover phases, align rollback paths, track dependencies, prepare command-center checkpoints, and keep business, technology, and vendor teams synchronized.",
    work: ["Release and cutover runbooks", "CAB and stakeholder readiness", "Rollback and dependency planning", "Command-center and client-impact readiness"],
    outputs: ["Cutover command plan", "CAB package", "Go-live checklist", "Operational handoff package"]
  },
  operate: {
    kicker: "Operate & Optimize",
    title: "Keep the platform stable after launch.",
    body: "Support production triage, RCA, monitoring, upgrades, incident response, operational handoff, control tuning, recurring governance, and continuous improvement for mission-critical banking platforms.",
    work: ["Production support and incident triage", "RCA and corrective actions", "Upgrade and operating model support", "Monitoring, controls, and support model tuning"],
    outputs: ["RCA summary", "Operational runbook", "Improvement backlog", "Support RACI"]
  }
};

const bankingFlows = {
  embedded: {
    kicker: "Embedded Banking",
    title: "From a simple partner experience to bank-grade operations.",
    summary: "Embedded banking works when the partner or digital experience is connected to bank controls, vendor/API behavior, core and ledger truth, payment rails, reconciliation, and support ownership.",
    tags: ["Client Journey", "KYC / KYB", "Core / Ledger", "Payment Rails", "Reconciliation"],
    steps: [
      {
        label: "Client Action",
        short: "Customer or client starts a banking action.",
        detail: "A fintech, digital channel, or business client experience initiates onboarding, account funding, payments, or servicing. The platform must define what the user sees, what data is captured, and what bank-side process happens next."
      },
      {
        label: "Onboard / Control",
        short: "KYC, KYB, risk, and account eligibility are checked.",
        detail: "Consumer or business onboarding validates identity, KYB/KYC, beneficial ownership, OFAC, fraud signals, eligibility, risk scoring, document exceptions, and account approval or decline paths."
      },
      {
        label: "Entitle / Approve",
        short: "Sponsor-bank rules and operating limits are applied.",
        detail: "Bank-side controls define user access, approval workflows, transaction limits, audit evidence, compliance monitoring, third-party risk expectations, and operational resilience requirements."
      },
      {
        label: "Core / Ledger",
        short: "Core and ledger decide account and balance truth.",
        detail: "Core banking and ledger behavior determine account creation, DDA validation, available balance, posting rules, fee/GL behavior, transaction status, and downstream reporting."
      },
      {
        label: "Fund / Pay",
        short: "Funding and payments move through bank rails.",
        detail: "Account funding and money movement use ACH, wire, RTP/FedNow instant payment paths, rail-specific validation, settlement timing, confirmations, returns, and exceptions."
      },
      {
        label: "Post / Settle",
        short: "Funds settle and account records update.",
        detail: "Posting and settlement must align across rail status, core ledger entries, available balance, transaction status, client-facing messages, fee/GL behavior, and operational reports."
      },
      {
        label: "Reconcile / Support",
        short: "Money, data, exceptions, and support close the loop.",
        detail: "Reconciliation ties together rail files, vendor status, core posting, GL entries, client reports, exception queues, monitoring, transaction alerts, RCA, production support, and continuous improvement."
      }
    ]
  },
  retail: {
    kicker: "Retail Banking",
    title: "From account opening to branch, digital, and support readiness.",
    summary: "Retail banking connects onboarding, identity checks, funding, core account creation, teller and branch servicing, digital access, posting, exceptions, reporting, and support.",
    tags: ["Account Opening", "KYC / Fraud", "Core Banking", "Branch", "Posting"],
    steps: [
      {
        label: "Onboard",
        short: "Customer or banker starts the account journey.",
        detail: "Customer or branch user starts an account opening or servicing journey. The platform needs clear product rules, customer data capture, required documents, and downstream handoffs."
      },
      {
        label: "KYC / Fraud",
        short: "Identity, funding, and eligibility are checked.",
        detail: "Identity, KYC, fraud, eligibility, funding source, and account rules are checked through internal controls and vendor integrations before the bank commits to the relationship."
      },
      {
        label: "Account Setup",
        short: "Operating rules are applied to the account.",
        detail: "Operating rules are applied: product setup, access, roles, branch behavior, transaction permissions, GL/print behavior, limits, reporting, and exception handling."
      },
      {
        label: "Fund Account",
        short: "Initial deposit and funding rules are validated.",
        detail: "Funding validates source, amount, timing, availability, returned-funding paths, initial deposit posting, and the operational handling of failed or delayed funding."
      },
      {
        label: "Core Posting",
        short: "Account and activity record in the core.",
        detail: "Approved account and transaction activity must post correctly to the core banking system, with downstream impacts visible to operations, reporting, and reconciliation teams."
      },
      {
        label: "Service / Support",
        short: "Issues, exceptions, and releases are governed.",
        detail: "Branch, teller, contact center, and digital teams need consistent account visibility, servicing actions, exception handling, monitoring, RCA, release governance, and support procedures."
      }
    ]
  },
  digital: {
    kicker: "Digital Banking",
    title: "From login to transaction completion.",
    summary: "Digital banking is the simple front door for complex platform work: authentication, entitlements, account data, transfer and payment requests, vendor services, APIs, core updates, alerts, and support.",
    tags: ["Authentication", "Entitlements", "APIs", "Transfers", "Core Updates"],
    steps: [
      {
        label: "Authenticate",
        short: "User access starts the digital session.",
        detail: "The user signs in through a digital channel. Identity, access, MFA, device signals, and user profile rules determine what the customer can see and do."
      },
      {
        label: "Entitle",
        short: "Roles and limits decide what the user can do.",
        detail: "Entitlements and roles control accounts, users, limits, approvals, transfer access, admin functions, and business-client permissions."
      },
      {
        label: "Account Data",
        short: "Balances and account details come from trusted systems.",
        detail: "Account lists, balances, transaction history, holds, account status, and profile data must align between the digital platform, core banking, and downstream services."
      },
      {
        label: "Request",
        short: "The user initiates a digital banking action.",
        detail: "The customer initiates an action such as account view, transfer, bill pay, Zelle-style payment, external transfer, card control, or account funding."
      },
      {
        label: "API / Vendor",
        short: "APIs and vendors execute the request.",
        detail: "APIs and vendor integrations connect the digital platform to the core, payment services, fraud tools, account opening, notifications, reporting, and servicing systems."
      },
      {
        label: "Core Posting",
        short: "Core and downstream systems reflect the change.",
        detail: "The core or downstream system records the action, updates balances or statuses, triggers alerts, and makes the result visible through digital and operational channels."
      },
      {
        label: "Status / Support",
        short: "Monitoring and support keep the channel reliable.",
        detail: "Digital production support requires monitoring, vendor coordination, incident triage, RCA, release notes, rollback paths, and clear ownership across teams."
      }
    ]
  },
  payments: {
    kicker: "Commercial Payments",
    title: "From client payment initiation to reconciliation.",
    summary: "Commercial payments bring together client access, approvals, validation, payment rails, core/DDA checks, message or file generation, settlement, posting, returns, reconciliation, reporting, and support.",
    tags: ["ACH", "Wire", "RTP / FedNow", "Settlement", "Reconciliation"],
    steps: [
      {
        label: "Initiate",
        short: "Business client creates a payment.",
        detail: "A business client creates an ACH, wire, RTP, or FedNow payment. The platform captures payee, amount, effective date, account, memo, and required payment details."
      },
      {
        label: "Entitle / Approve",
        short: "Roles, limits, and approvals control release.",
        detail: "User roles, dual control, limits, approval workflows, entitlements, and risk controls determine whether the payment can move forward."
      },
      {
        label: "Validate",
        short: "Rules and risk checks confirm payment readiness.",
        detail: "The platform validates account status, limits, OFAC/risk signals, formatting, rail-specific rules, cutoffs, DDA availability, and required data for the payment type."
      },
      {
        label: "Route Rail",
        short: "The payment is sent to the right rail.",
        detail: "The payment is routed to the right rail or partner path: ACH batch/NACHA, domestic or international wire, RTP, FedNow, vendor gateway, or bank integration layer."
      },
      {
        label: "Clear / Transmit",
        short: "Instructions are exchanged before money finally moves.",
        detail: "The platform transmits NACHA files, wire messages, instant-payment messages, vendor instructions, or bank integration messages. Clearing and status exchange establish obligations, validations, errors, and acknowledgements before final settlement or posting."
      },
      {
        label: "Settle / Post",
        short: "Funds settle and records update.",
        detail: "Settlement is the fund movement; posting is how the bank records the result. Both must align across the rail, payment platform, core banking, client account, GL behavior, fees, status updates, and operational reporting."
      },
      {
        label: "Returns / Exceptions",
        short: "Rejected, returned, or repaired payments are resolved.",
        detail: "ACH returns, wire repair, rejected payments, rail status updates, client notifications, exception queues, and operational resolution paths keep payment operations controlled."
      },
      {
        label: "Reconcile / Report",
        short: "Returns, exceptions, and reports close the loop.",
        detail: "Returns, exceptions, confirmations, status updates, reports, client visibility, operational queues, and reconciliation evidence close the loop after transmission."
      }
    ]
  },
  operations: {
    kicker: "Platform Operations",
    title: "From configuration to continuous improvement.",
    summary: "Platform operations keeps banking systems reliable by coordinating configuration, integrations, environments, testing, releases, monitoring, support, upgrades, controls, and governance.",
    tags: ["Configuration", "Integrations", "Release", "Monitoring", "RCA"],
    steps: [
      {
        label: "Configure",
        short: "Define how the platform should behave.",
        detail: "Define platform operating rules, users, roles, branches, transaction settings, GL/print behavior, approval paths, limits, reports, and operational controls."
      },
      {
        label: "Integrate",
        short: "Connect systems, vendors, data, and ownership.",
        detail: "Coordinate APIs, files, vendors, core banking, digital channels, risk tools, payment platforms, data flows, error handling, and ownership boundaries."
      },
      {
        label: "Test",
        short: "Prove behavior before production.",
        detail: "Validate lower environments, QA/UAT, regression coverage, performance stability, DR readiness, test data, defect triage, and acceptance criteria."
      },
      {
        label: "Release",
        short: "Control launch, rollback, and approvals.",
        detail: "Prepare runbooks, CAB submissions, ARB materials, cutover plans, rollback paths, communication plans, production evidence, and handoff checkpoints."
      },
      {
        label: "Monitor",
        short: "Watch platform health and transaction status.",
        detail: "Use observability, alerts, dashboards, batch/status monitoring, vendor checks, support queues, and operational metrics to understand platform health."
      },
      {
        label: "Improve",
        short: "Use RCA and upgrades to mature operations.",
        detail: "Close the loop with RCA, upgrade planning, recurring issues, control improvements, documentation, support model tuning, and a practical improvement backlog."
      }
    ]
  }
};

const mapContent = {
  payments: {
    kicker: "Commercial Payment Journey",
    title: "The user sees a payment. The operating platform has to coordinate everything behind it.",
    body: "Support ACH, wire, platform operating rules, access roles, GL/print behavior, transaction workflows, vendor coordination, validation, monitoring, lower-environment testing, release governance, and operational readiness.",
    tags: ["Payment Platform", "ACH", "Wire", "Operating Rules", "Access"]
  },
  account: {
    kicker: "Account Opening & Funding",
    title: "The customer sees onboarding. The bank needs coordinated platform behavior.",
    body: "Align digital onboarding, account funding, fraud controls, core posting, downstream exceptions, QA validation, and production support so the journey works cleanly end to end.",
    tags: ["Digital Banking", "Funding", "Core Posting", "Fraud", "QA"]
  },
  migration: {
    kicker: "Migration & Cutover",
    title: "The business sees a transition date. Delivery needs a controlled migration system.",
    body: "Coordinate dependency mapping, vendor readiness, environment validation, runbooks, cutoff phases, rollback paths, CAB approvals, communication plans, and post-cutover support.",
    tags: ["Runbooks", "Cutover", "Rollback", "CAB", "Vendors"]
  },
  reliability: {
    kicker: "Production Reliability",
    title: "The issue is visible for minutes. The operating model is built over months.",
    body: "Establish monitoring, DR readiness, production triage, RCA discipline, incident coordination, escalation paths, upgrade planning, operational handoff, and continuous improvement loops.",
    tags: ["Monitoring", "DR", "RCA", "Operations"]
  }
};

Object.assign(bankingFlows.embedded, {
  entities: ["Customer / Business", "Fintech or Digital Channel", "Bank Platform", "Core / Ledger", "Payment Rail", "Ops / Reporting"],
  matrix: [
    ["Experience -> Platform", "Onboarding, funding, payment, or servicing request", "Data capture, consent, required fields", "Accepted digital instruction"],
    ["Platform -> Controls", "KYC/KYB, OFAC, fraud, limits, approvals", "Bank policy, audit evidence, third-party risk", "Approved, declined, or exceptioned request"],
    ["Platform -> Core", "Account creation, DDA validation, balance/posting request", "Account rules, ledger behavior, fee/GL handling", "Core status and account truth"],
    ["Platform -> Rail", "ACH, wire, RTP/FedNow message or file", "Rail rules, cutoff, duplicate prevention, status tracking", "Transmission, confirmation, return, or exception"],
    ["Platform -> Ops", "Reports, alerts, reconciliation files, support queues", "Monitoring, RCA, support ownership, DR readiness", "Operational closure and improvement backlog"]
  ],
  truths: ["Customer truth: digital/onboarding channel", "Risk truth: KYC/KYB/fraud tools", "Account truth: core/ledger", "Payment truth: rail and platform status", "Financial truth: GL/reconciliation", "Operational truth: monitoring, tickets, runbooks"],
  gaps: [
    ["Sponsor-bank accountability", "Define who owns controls, third-party risk, audit evidence, exception decisions, and client-impacting status changes."],
    ["System-of-record conflict", "Separate customer, account, balance, payment, GL, reconciliation, and support truth before teams start testing."],
    ["Rail status mismatch", "Design how pending, failed, returned, repaired, reversed, settled, and posted states appear to users and operations."],
    ["Support handoff", "Prove support ownership, vendor escalation, monitoring, DR, RCA, and improvement backlog before go-live."]
  ]
});

Object.assign(bankingFlows.retail, {
  entities: ["Customer", "Branch / Digital Channel", "KYC / Fraud", "Core Banking", "Funding / Posting", "Servicing / Support"],
  matrix: [
    ["Customer -> Channel", "Account opening or servicing request", "Product rules and required documents", "Captured application or service request"],
    ["Channel -> KYC/Fraud", "Identity, eligibility, and risk checks", "KYC, fraud, funding source, exceptions", "Approved, declined, or pended relationship"],
    ["Channel -> Core", "Account setup and operating rules", "Access, branch, transaction, GL/print, reporting", "Core account and servicing status"],
    ["Funding -> Core", "Initial deposit or funding movement", "Availability, returned funding, posting rules", "Funded account and downstream records"],
    ["Core -> Support", "Account activity, exceptions, servicing needs", "Monitoring, RCA, release governance", "Stable branch/digital servicing model"]
  ],
  truths: ["Customer truth: onboarding/customer profile", "Risk truth: KYC/fraud decision", "Account truth: core banking", "Funding truth: posting and availability", "Operational truth: support queues and runbooks"],
  gaps: [
    ["Branch and digital parity", "Make sure the same account, customer, and servicing truth is visible across branch, teller, contact center, and digital."],
    ["Configuration drift", "Validate product, branch, access, GL/print, reporting, and transaction rules across environments before launch."],
    ["Funding exceptions", "Define returned funding, delayed availability, failed funding, and account-opening exception ownership."],
    ["Legacy sunset risk", "Map connected teller, desktop, scanning, and core upgrade dependencies so old workflows do not break new journeys."]
  ]
});

Object.assign(bankingFlows.digital, {
  entities: ["Customer", "Digital Banking Channel", "Entitlements", "API / Vendor Layer", "Core / Payments", "Alerts / Support"],
  matrix: [
    ["Customer -> Digital", "Login and digital action", "Authentication, MFA, device/user profile", "Authorized session"],
    ["Digital -> Entitlements", "Account access and action request", "Roles, limits, approvals, permissions", "Allowed or blocked action"],
    ["Digital -> API/Vendor", "Transfer, bill pay, Zelle-style, card, or funding request", "Data contract, error handling, vendor status", "Instruction submitted"],
    ["API/Vendor -> Core", "Posting or status update", "Core rules, balance, account state", "Updated account or transaction status"],
    ["Core/Vendor -> Support", "Alerts, confirmations, failures, exceptions", "Monitoring, RCA, rollback, ownership", "Client visibility and operational resolution"]
  ],
  truths: ["Session truth: authentication platform", "Access truth: entitlements", "Account truth: core", "Transaction truth: API/vendor status", "Client truth: digital status and alerts", "Operational truth: monitoring and tickets"],
  gaps: [
    ["Entitlement mismatch", "Align digital roles, limits, admin rights, approvals, business-client permissions, and downstream platform access."],
    ["Vendor blind spots", "Design status handling, retries, duplicate prevention, timeout behavior, and clear operational ownership for API failures."],
    ["Balance and posting timing", "Clarify when digital status updates before, during, or after core posting and payment settlement."],
    ["Release ownership", "Tie vendor releases, regression scope, rollback paths, monitoring, incident communications, and support handoff together."]
  ]
});

Object.assign(bankingFlows.payments, {
  entities: ["Business Client", "Payment Platform", "Bank Controls", "ACH / Wire / RTP / FedNow", "Core / Ledger", "Reconciliation / Reporting"],
  matrix: [
    ["Client -> Platform", "Payment instruction and beneficiary details", "User access, limits, dual control", "Created payment awaiting validation"],
    ["Platform -> Controls", "Approval, risk, cutoff, account checks", "OFAC, fraud, DDA, rail rules, formatting", "Approved, rejected, or exceptioned payment"],
    ["Platform -> Rail", "NACHA file, wire message, instant payment message", "Rail routing, transmission, status tracking", "Sent payment instruction"],
    ["Rail -> Core", "Settlement, confirmation, return, or repair status", "Posting, fee/GL behavior, client account status", "Settled/posted payment or exception"],
    ["Core/Rail -> Ops", "Reports, returns, exceptions, client status", "Reconciliation, operational queues, evidence", "Closed payment lifecycle"]
  ],
  truths: ["Payment truth: platform and rail status", "Account truth: core/DDA", "Money truth: settlement and posting", "Exception truth: returns/repair queues", "Financial truth: GL and reconciliation reports", "Client truth: payment status/reporting"],
  gaps: [
    ["Clearing versus settlement", "Separate instruction exchange, obligation calculation, actual fund movement, and account posting so status is not misleading."],
    ["Entitlements and dual control", "Validate roles, limits, approvals, templates, beneficiary controls, and release authority before transmission."],
    ["Cutoff and rail routing", "Define domestic/international wire, ACH batch, RTP/FedNow instant payment, holiday, return, and repair behavior."],
    ["Reconciliation evidence", "Tie confirmations, returns, exceptions, GL entries, client reports, platform status, and operational signoff together."]
  ]
});

Object.assign(bankingFlows.operations, {
  entities: ["Product / Business", "Platform Team", "Vendors / APIs", "Lower Environments", "Production", "Support / Governance"],
  matrix: [
    ["Business -> Platform", "Requirements and operating rules", "Scope, acceptance criteria, dependencies", "Delivery-ready backlog"],
    ["Platform -> Vendors", "Integrations, files, APIs, data contracts", "Ownership, error handling, lower-env access", "Validated integration path"],
    ["Platform -> QA/UAT", "Configuration, test data, regression, DR", "Evidence, defects, stability, signoff", "Production readiness"],
    ["Release -> Production", "Runbooks, CAB/ARB, cutover, rollback", "Approvals, communication, support coverage", "Controlled launch"],
    ["Production -> Support", "Monitoring, incidents, RCA, upgrades", "Support ownership, DR, improvement backlog", "Stable operating model"]
  ],
  truths: ["Scope truth: backlog and acceptance criteria", "Integration truth: API/file contracts", "Readiness truth: QA/UAT evidence", "Release truth: runbooks and CAB", "Operational truth: monitoring, RCA, support model"],
  gaps: [
    ["Environment drift", "Keep configuration, test data, integrations, access, batch jobs, and vendor connectivity aligned across lower environments."],
    ["Ownerless dependencies", "Make every API, file, vendor handoff, core touchpoint, control, defect, and release dependency visible and owned."],
    ["Weak readiness evidence", "Connect stories, acceptance criteria, QA/UAT results, DR validation, CAB/ARB materials, and release signoff."],
    ["Post-launch maturity", "Turn incidents into RCA, control improvements, upgrade runbooks, monitoring changes, and a practical improvement backlog."]
  ]
});

const engagementContent = {
  embedded: {
    kicker: "Embedded Banking Readiness",
    title: "Map the client experience to the bank infrastructure underneath.",
    body: "Review onboarding, KYC/KYB, account funding, payment rails, core/ledger posting, vendor/API dependencies, controls, reconciliation, monitoring, and support ownership.",
    bestFor: ["Fintech-bank integration programs", "Embedded finance or banking-as-a-service initiatives", "Teams connecting digital journeys to bank operations"],
    outputs: ["End-to-end banking flow map", "Controls and integration readiness review", "Posting, reconciliation, and support model"]
  },
  assessment: {
    kicker: "Delivery Readiness Assessment",
    title: "Find the delivery gaps before they become production issues.",
    body: "Review platform scope, vendor dependencies, architecture path, backlog quality, environment readiness, QA/UAT coverage, release governance, monitoring, DR posture, and support ownership.",
    bestFor: ["Teams entering PI planning or major delivery", "Programs with unclear ownership or dependencies", "Platforms preparing for vendor or bank review"],
    outputs: ["Risk and dependency map", "Delivery readiness scorecard", "Recommended execution plan"]
  },
  migration: {
    kicker: "Migration & Cutover Command Plan",
    title: "Bring structure to merger, upgrade, and platform migration work.",
    body: "Plan migration phases, cutoff windows, environment validation, data and configuration dependencies, rollback paths, vendor coordination, runbooks, and executive readiness checkpoints.",
    bestFor: ["Merger platform migrations", "Core or payment platform upgrades", "High-risk cutover windows"],
    outputs: ["Migration runbook", "Cutover plan", "Readiness and rollback checklist"]
  },
  payments: {
    kicker: "Commercial Payments Delivery Support",
    title: "Coordinate payment and digital platform readiness.",
    body: "Support payment workflow delivery, ACH/wire/RTP/FedNow readiness, platform operating rules, access setup, GL/print behavior, online banking integration, vendor issue resolution, QA validation, and production readiness.",
    bestFor: ["Commercial payment application teams", "Banks modernizing payment and digital workflows", "Programs involving payment or digital banking vendors"],
    outputs: ["Configuration plan", "Workflow and control documentation", "Testing and release checklist"]
  },
  reliability: {
    kicker: "Reliability & Support Model",
    title: "Move from reactive support to a managed operating model.",
    body: "Define monitoring, incident paths, RCA practices, DR readiness, upgrade cadence, production support ownership, vendor escalation standards, and operational handoff after delivery.",
    bestFor: ["Mission-critical banking applications", "Teams with repeat incidents or unclear ownership", "Platforms moving from project to operations"],
    outputs: ["Support model", "RCA and incident playbook", "Monitoring and DR readiness plan"]
  }
};

const hotspotContent = {
  onboarding: {
    kicker: "Onboarding",
    title: "The journey starts clean, but bank-side eligibility and exception paths are unclear.",
    failure: "KYC/KYB, document exceptions, funding source checks, product eligibility, and account-opening status do not move through one owned path.",
    impact: "Clients see delayed onboarding, unclear status, manual follow-up, duplicate data requests, or accounts that are not ready for funding and payments.",
    fix: "Map the journey to controls, exception queues, vendor responses, account setup rules, testing evidence, and support ownership.",
    artifact: "Onboarding flow map, controls checklist, exception playbook, and readiness scorecard."
  },
  controls: {
    kicker: "Controls",
    title: "The experience is built, but access, limits, approvals, and audit evidence are not launch-ready.",
    failure: "Entitlements, dual control, approval paths, transaction limits, OFAC/fraud checks, and audit evidence are treated as separate workstreams.",
    impact: "Payments or account actions may be blocked late, over-permissioned, under-tested, or difficult to defend during risk and audit review.",
    fix: "Translate bank policy into platform operating rules, test scenarios, control evidence, role matrices, and release signoff checkpoints.",
    artifact: "Control model, RBAC/entitlement matrix, approval workflow map, and audit evidence checklist."
  },
  integration: {
    kicker: "Integration",
    title: "The API works in a happy path, but operational behavior is not designed.",
    failure: "Timeouts, retries, duplicate prevention, webhook status, file acknowledgements, vendor ownership, and lower-environment parity are incomplete.",
    impact: "Teams cannot easily explain whether a request failed, succeeded, duplicated, reversed, or needs manual repair.",
    fix: "Define data contracts, status taxonomy, retry behavior, error ownership, environment readiness, and vendor escalation paths.",
    artifact: "API/data contract checklist, status model, integration tracker, and vendor readiness plan."
  },
  core: {
    kicker: "Core / Ledger",
    title: "Digital status says one thing, but core and ledger truth say another.",
    failure: "Account status, DDA validation, available balance, holds, posting rules, fee/GL behavior, and downstream reports are not aligned.",
    impact: "Clients see confusing balances or payment states, while operations has to reconcile mismatched platform, core, and ledger records.",
    fix: "Map system-of-record ownership, posting events, GL behavior, fee treatment, balance timing, reporting outputs, and support triggers.",
    artifact: "Core/ledger posting map, system-of-record matrix, GL behavior notes, and downstream impact checklist."
  },
  rails: {
    kicker: "Payment Rails",
    title: "Payment initiation is clear, but clearing, settlement, posting, and returns are mixed together.",
    failure: "ACH, wire, RTP/FedNow paths, cutoffs, holiday rules, repair, rejection, return, and settlement status are not separated cleanly.",
    impact: "A payment may appear sent before obligations are clear, funds settle, account posting happens, or the client report is reliable.",
    fix: "Separate initiation, validation, clearing/transmission, settlement, posting, returns, repair, and client-facing status.",
    artifact: "Clearing-settlement-reconciliation matrix, rail readiness checklist, return/repair playbook, and client status model."
  },
  recon: {
    kicker: "Reconciliation",
    title: "Money moved, but proof of movement is scattered across reports, GL, rail files, and support queues.",
    failure: "Rail confirmations, vendor reports, core postings, GL entries, exception queues, and client statements do not reconcile through one evidence path.",
    impact: "Operations spends time proving what happened instead of resolving exceptions and improving the platform.",
    fix: "Define reconciliation sources, variance rules, exception ownership, reporting cadence, evidence retention, and operational closeout.",
    artifact: "Reconciliation evidence map, exception workflow, reporting matrix, and closeout checklist."
  },
  operate: {
    kicker: "Support",
    title: "The platform launches, but ownership after launch is still too reactive.",
    failure: "Monitoring, DR, production triage, vendor escalation, incident communications, RCA, upgrade cadence, and improvement backlog are not tied together.",
    impact: "Incidents repeat, support teams chase symptoms, and delivery teams lose the learning loop after go-live.",
    fix: "Build the operating model before launch: monitoring signals, runbooks, escalation paths, RCA standards, support RACI, and improvement governance.",
    artifact: "Support RACI, monitoring checklist, RCA playbook, DR readiness plan, and improvement backlog."
  }
};

const renderList = (items) => items.map((item) => `<li>${item}</li>`).join("");

const setActiveButton = (buttons, activeButton) => {
  buttons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
    if (button.hasAttribute("aria-selected")) {
      button.setAttribute("aria-selected", String(isActive));
    }
  });
};

const playbookDownloads = {
  readiness: {
    fileName: "platform-readiness-checklist.md",
    content: `# Platform Readiness Checklist

Use this before a banking platform change moves toward production.

## 1. Change Summary
- Business goal:
- Client or user journey impacted:
- Platform/application:
- Target release date:
- Delivery owner:
- Business owner:
- Technology owner:
- Operations/support owner:

## 2. Impacted Systems
| System | Role | Owner | Change Needed | Ready? |
| --- | --- | --- | --- | --- |
| Digital/channel |  |  |  |  |
| Vendor/API/file |  |  |  |  |
| Core/ledger |  |  |  |  |
| Payment rail |  |  |  |  |
| Reporting/reconciliation |  |  |  |  |
| Monitoring/support |  |  |  |  |

## 3. Readiness Checks
- Requirements and scope are clear.
- System of record is defined.
- Data flow is documented.
- Control points are documented.
- Access/RBAC needs are approved.
- Test scenarios cover normal and exception paths.
- Lower environment validation is complete.
- Production monitoring is identified.
- Runbook and rollback path are ready.
- Support owner and escalation path are confirmed.

## 4. Go / No-Go
| Gate | Owner | Evidence | Status |
| --- | --- | --- | --- |
| Product acceptance |  |  |  |
| QA/UAT signoff |  |  |  |
| Security/risk approval |  |  |  |
| CAB/release approval |  |  |  |
| Operations handoff |  |  |  |
`
  },
  cutover: {
    fileName: "migration-cutover-runbook.md",
    content: `# Migration & Cutover Runbook

Use this for platform migration, merger migration, vendor upgrade, or a major release.

## 1. Cutover Summary
- Program/change:
- Cutover date/time:
- Systems impacted:
- Business impact:
- Cutover lead:
- Vendor lead:
- Technology lead:
- Business approver:

## 2. Timeline
| Time | Step | Owner | Validation | Status |
| --- | --- | --- | --- | --- |
| T-7 days | Final dependency review |  |  |  |
| T-2 days | Freeze readiness check |  |  |  |
| T-0 | Start cutover |  |  |  |
| T+1 hour | Validate critical flows |  |  |  |
| T+1 day | Post-cutover support review |  |  |  |

## 3. Dependency Tracker
| Dependency | Owner | Due Date | Risk | Status |
| --- | --- | --- | --- | --- |
| Vendor readiness |  |  |  |  |
| Environment access |  |  |  |  |
| Data/config migration |  |  |  |  |
| Test evidence |  |  |  |  |
| Support staffing |  |  |  |  |

## 4. Rollback Plan
- Rollback trigger:
- Rollback decision owner:
- Rollback steps:
- Customer/business communication:
- Post-rollback validation:

## 5. Command Center
- Bridge link:
- Start/end time:
- Decision log owner:
- Status update cadence:
- Escalation contact:
`
  },
  escalation: {
    fileName: "escalation-path-template.md",
    content: `# Escalation Path Template

Use this for incidents, defects, blockers, vendor delays, or production issues.

## 1. Issue Summary
- Issue:
- Severity:
- Client/business impact:
- First detected:
- Current owner:
- Target resolution:

## 2. Severity Guide
| Severity | Meaning | Response Target | Communication |
| --- | --- | --- | --- |
| Sev 1 | Critical outage or payment/client impact | Immediate | Executive and command center |
| Sev 2 | Major function impaired | Same day | Business and technology leads |
| Sev 3 | Limited impact or workaround exists | Planned | Delivery/support owners |
| Sev 4 | Question, enhancement, or minor defect | Backlog | Product owner |

## 3. Escalation Paths
| Area | Primary Owner | Backup Owner | When To Escalate |
| --- | --- | --- | --- |
| Business |  |  |  |
| Product/TPM |  |  |  |
| Engineering |  |  |  |
| Vendor |  |  |  |
| Operations/support |  |  |  |
| Risk/compliance |  |  |  |

## 4. Decision Log
| Time | Decision | Owner | Reason |
| --- | --- | --- | --- |
|  |  |  |  |

## 5. Closure Criteria
- Root cause or probable cause documented.
- Business impact confirmed.
- Corrective action owner assigned.
- Monitoring or control gap reviewed.
- Stakeholders notified.
`
  },
  vendor: {
    fileName: "vendor-onboarding-checklist.md",
    content: `# Vendor Onboarding Checklist

Use this when adding or changing a vendor, API, file exchange, or platform integration.

## 1. Vendor Summary
- Vendor:
- Product/service:
- Business purpose:
- Data shared:
- Integration type:
- Production target:
- Vendor owner:
- Bank/platform owner:

## 2. Readiness Areas
| Area | Questions | Owner | Status |
| --- | --- | --- | --- |
| Architecture | What systems connect? What is the data flow? |  |  |
| Security | What access, encryption, and evidence are required? |  |  |
| Environments | What lower environments are needed? |  |  |
| RBAC | Who needs access and approval? |  |  |
| SLA/support | What happens when the vendor service fails? |  |  |
| Testing | What normal and exception paths must pass? |  |  |
| Operations | Who owns monitoring, tickets, and escalation? |  |  |

## 3. Integration Checks
- API/file contract reviewed.
- Error handling defined.
- Retry and duplicate prevention defined.
- Status messages documented.
- Vendor support path confirmed.
- DR/business continuity expectations reviewed.

## 4. Production Handoff
- Runbook:
- Monitoring:
- Support queue:
- Escalation contact:
- Known failure points:
- Post-launch review date:
`
  },
  payments: {
    fileName: "payments-flow-checklist.md",
    content: `# Payments Flow Checklist

Use this for ACH, wire, RTP, FedNow-style, or commercial payment workflow readiness.

## 1. Payment Flow
- Payment type:
- Initiation channel:
- Debit account:
- Credit/beneficiary path:
- Rail/vendor:
- Cutoff rules:
- Settlement timing:
- Client reporting:

## 2. Flow Steps
| Step | Owner | Key Questions | Ready? |
| --- | --- | --- | --- |
| Initiation |  | What data does the client provide? |  |
| Entitlement/approval |  | Are roles, limits, and dual control defined? |  |
| Validation |  | Are OFAC, fraud, account, and rail rules covered? |  |
| Routing/transmission |  | Which rail, file, message, or API path is used? |  |
| Settlement/posting |  | When does money move and when does core post? |  |
| Exceptions |  | How are returns, repairs, rejects, and reversals handled? |  |
| Reconciliation |  | Who matches platform, rail, core, GL, and reports? |  |

## 3. Evidence Needed
- Test cases for normal payments.
- Test cases for rejected payments.
- Test cases for returns/repairs.
- Cutoff and holiday behavior.
- Posting and GL behavior.
- Client status/reporting behavior.
- Support and escalation path.
`
  },
  support: {
    fileName: "production-support-runbook.md",
    content: `# Production Support Runbook

Use after launch to manage monitoring, incidents, RCA, vendor tickets, and improvements.

## 1. Support Model
- Platform/application:
- Support hours:
- Tier 1 owner:
- Tier 2 owner:
- Tier 3/platform owner:
- Vendor support:
- Business owner:

## 2. Daily Health Checks
| Check | Owner | Frequency | Evidence |
| --- | --- | --- | --- |
| Application availability |  |  |  |
| Batch/file/API status |  |  |  |
| Payment or transaction exceptions |  |  |  |
| Reconciliation breaks |  |  |  |
| Vendor open items |  |  |  |
| Monitoring alerts |  |  |  |

## 3. Incident Triage
- What changed recently?
- What client/business function is impacted?
- Which systems show errors?
- Is money movement, posting, or reporting affected?
- Is there a workaround?
- Who must be notified?

## 4. RCA Summary
- Incident:
- Root cause:
- Client/business impact:
- Detection gap:
- Control or monitoring gap:
- Corrective action:
- Owner:
- Due date:

## 5. Improvement Backlog
| Improvement | Reason | Owner | Priority |
| --- | --- | --- | --- |
|  |  |  |  |
`
  }
};

const csv = (rows) => rows.map((row) => row.map((value) => {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}).join(",")).join("\n");

const playbookCsvRows = {
  readiness: [
    ["Section", "Item", "Owner", "Status", "Evidence/Link", "Notes"],
    ["Change Summary", "Business goal", "", "", "", ""],
    ["Change Summary", "Client or user journey impacted", "", "", "", ""],
    ["Change Summary", "Platform/application", "", "", "", ""],
    ["Change Summary", "Target release date", "", "", "", ""],
    ["Change Summary", "Delivery owner", "", "", "", ""],
    ["Impacted Systems", "Digital/channel", "", "", "", "Role and change needed"],
    ["Impacted Systems", "Vendor/API/file", "", "", "", "Role and change needed"],
    ["Impacted Systems", "Core/ledger", "", "", "", "Role and change needed"],
    ["Impacted Systems", "Payment rail", "", "", "", "Role and change needed"],
    ["Impacted Systems", "Reporting/reconciliation", "", "", "", "Role and change needed"],
    ["Readiness Checks", "Requirements and scope are clear", "", "", "", ""],
    ["Readiness Checks", "System of record is defined", "", "", "", ""],
    ["Readiness Checks", "Data flow is documented", "", "", "", ""],
    ["Readiness Checks", "Control points are documented", "", "", "", ""],
    ["Readiness Checks", "Access/RBAC needs are approved", "", "", "", ""],
    ["Readiness Checks", "Normal and exception test scenarios are covered", "", "", "", ""],
    ["Readiness Checks", "Monitoring and support owner are confirmed", "", "", "", ""],
    ["Go/No-Go", "Product acceptance", "", "", "", ""],
    ["Go/No-Go", "QA/UAT signoff", "", "", "", ""],
    ["Go/No-Go", "CAB/release approval", "", "", "", ""],
    ["Go/No-Go", "Operations handoff", "", "", "", ""]
  ],
  cutover: [
    ["Phase", "Time", "Step", "Owner", "Validation", "Status", "Notes"],
    ["Summary", "", "Program/change", "", "", "", ""],
    ["Summary", "", "Cutover date/time", "", "", "", ""],
    ["Summary", "", "Systems impacted", "", "", "", ""],
    ["Summary", "", "Business impact", "", "", "", ""],
    ["Pre-Cutover", "T-7 days", "Final dependency review", "", "", "", ""],
    ["Pre-Cutover", "T-2 days", "Freeze readiness check", "", "", "", ""],
    ["Cutover", "T-0", "Start cutover", "", "", "", ""],
    ["Cutover", "T+1 hour", "Validate critical flows", "", "", "", ""],
    ["Post-Cutover", "T+1 day", "Post-cutover support review", "", "", "", ""],
    ["Dependency", "", "Vendor readiness", "", "", "", ""],
    ["Dependency", "", "Environment access", "", "", "", ""],
    ["Dependency", "", "Data/config migration", "", "", "", ""],
    ["Dependency", "", "Test evidence", "", "", "", ""],
    ["Rollback", "", "Rollback trigger", "", "", "", ""],
    ["Rollback", "", "Rollback decision owner", "", "", "", ""],
    ["Command Center", "", "Bridge link and status cadence", "", "", "", ""],
    ["Command Center", "", "Decision log owner", "", "", "", ""]
  ],
  escalation: [
    ["Area", "Item", "Primary Owner", "Backup Owner", "Trigger/Target", "Status", "Notes"],
    ["Issue Summary", "Issue", "", "", "", "", ""],
    ["Issue Summary", "Severity", "", "", "", "", ""],
    ["Issue Summary", "Client/business impact", "", "", "", "", ""],
    ["Severity Guide", "Sev 1", "", "", "Critical outage or payment/client impact; immediate response", "", ""],
    ["Severity Guide", "Sev 2", "", "", "Major function impaired; same-day response", "", ""],
    ["Severity Guide", "Sev 3", "", "", "Limited impact or workaround exists", "", ""],
    ["Escalation Path", "Business", "", "", "Escalate for client impact or business decision", "", ""],
    ["Escalation Path", "Product/TPM", "", "", "Escalate for scope, priority, or delivery decision", "", ""],
    ["Escalation Path", "Engineering", "", "", "Escalate for defect, deployment, or technical fix", "", ""],
    ["Escalation Path", "Vendor", "", "", "Escalate for vendor platform or SLA issue", "", ""],
    ["Escalation Path", "Operations/support", "", "", "Escalate for incident triage or client support", "", ""],
    ["Closure", "Root cause documented", "", "", "", "", ""],
    ["Closure", "Corrective action assigned", "", "", "", "", ""],
    ["Closure", "Monitoring/control gap reviewed", "", "", "", "", ""]
  ],
  vendor: [
    ["Section", "Item", "Owner", "Status", "Evidence/Link", "Notes"],
    ["Vendor Summary", "Vendor name", "", "", "", ""],
    ["Vendor Summary", "Product/service", "", "", "", ""],
    ["Vendor Summary", "Business purpose", "", "", "", ""],
    ["Vendor Summary", "Data shared", "", "", "", ""],
    ["Vendor Summary", "Integration type", "", "", "", "API, file, SSO, webhook, batch"],
    ["Readiness", "Architecture review", "", "", "", "What systems connect?"],
    ["Readiness", "Security review", "", "", "", "Access, encryption, evidence"],
    ["Readiness", "Lower environments", "", "", "", "Dev, QA, UAT, test data"],
    ["Readiness", "RBAC/access model", "", "", "", "Users, roles, approvals"],
    ["Readiness", "SLA/support model", "", "", "", "What happens when service fails?"],
    ["Integration", "API/file contract reviewed", "", "", "", ""],
    ["Integration", "Error handling defined", "", "", "", ""],
    ["Integration", "Retry and duplicate prevention defined", "", "", "", ""],
    ["Integration", "Status messages documented", "", "", "", ""],
    ["Production Handoff", "Runbook", "", "", "", ""],
    ["Production Handoff", "Monitoring", "", "", "", ""],
    ["Production Handoff", "Escalation contact", "", "", "", ""]
  ],
  payments: [
    ["Step", "Key Question", "Owner", "Status", "Evidence/Link", "Notes"],
    ["Payment Setup", "Payment type", "", "", "", "ACH, wire, RTP, FedNow-style"],
    ["Payment Setup", "Initiation channel", "", "", "", "Commercial online, file, API, branch, ops"],
    ["Payment Setup", "Debit account and beneficiary path", "", "", "", ""],
    ["Payment Setup", "Cutoff and holiday rules", "", "", "", ""],
    ["Initiation", "What data does the client provide?", "", "", "", ""],
    ["Entitlement/Approval", "Are roles, limits, templates, and dual control defined?", "", "", "", ""],
    ["Validation", "Are OFAC, fraud, account, and rail rules covered?", "", "", "", ""],
    ["Routing/Transmission", "Which rail, file, message, or API path is used?", "", "", "", ""],
    ["Settlement/Posting", "When does money move and when does core post?", "", "", "", ""],
    ["Exceptions", "How are returns, repairs, rejects, and reversals handled?", "", "", "", ""],
    ["Reconciliation", "Who matches platform, rail, core, GL, and reports?", "", "", "", ""],
    ["Evidence", "Normal payment test cases", "", "", "", ""],
    ["Evidence", "Rejected/returned payment test cases", "", "", "", ""],
    ["Evidence", "Client status/reporting behavior", "", "", "", ""],
    ["Evidence", "Support and escalation path", "", "", "", ""]
  ],
  support: [
    ["Section", "Item", "Owner", "Frequency/Target", "Status", "Evidence/Link", "Notes"],
    ["Support Model", "Platform/application", "", "", "", "", ""],
    ["Support Model", "Support hours", "", "", "", "", ""],
    ["Support Model", "Tier 1 owner", "", "", "", "", ""],
    ["Support Model", "Tier 2 owner", "", "", "", "", ""],
    ["Support Model", "Tier 3/platform owner", "", "", "", "", ""],
    ["Support Model", "Vendor support", "", "", "", "", ""],
    ["Daily Health Checks", "Application availability", "", "Daily", "", "", ""],
    ["Daily Health Checks", "Batch/file/API status", "", "Daily", "", "", ""],
    ["Daily Health Checks", "Payment or transaction exceptions", "", "Daily", "", "", ""],
    ["Daily Health Checks", "Reconciliation breaks", "", "Daily", "", "", ""],
    ["Incident Triage", "What changed recently?", "", "At incident start", "", "", ""],
    ["Incident Triage", "Which systems show errors?", "", "At incident start", "", "", ""],
    ["Incident Triage", "Is money movement, posting, or reporting affected?", "", "At incident start", "", "", ""],
    ["RCA", "Root cause", "", "Post-incident", "", "", ""],
    ["RCA", "Client/business impact", "", "Post-incident", "", "", ""],
    ["RCA", "Corrective action", "", "Post-incident", "", "", ""],
    ["Improvement Backlog", "Improvement item", "", "Backlog", "", "", ""]
  ]
};

const downloadPlaybook = (key) => {
  const playbook = playbookDownloads[key];
  const rows = playbookCsvRows[key];
  if (!playbook || !rows) return;

  const fileName = playbook.fileName.replace(/\.md$/, ".csv");
  const blob = new Blob([csv(rows)], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

document.querySelectorAll("[data-playbook-download]").forEach((button) => {
  button.addEventListener("click", () => {
    downloadPlaybook(button.dataset.playbookDownload);
  });
});

const flowTabs = document.querySelectorAll("[data-flow]");
const flowDiagram = document.querySelector("[data-flow-diagram]");
const flowPanel = document.querySelector("[data-flow-panel]");
const entityRail = document.querySelector("[data-entity-rail]");
const flowMatrix = document.querySelector("[data-flow-matrix]");
const truthStrip = document.querySelector("[data-truth-strip]");
const flowGaps = document.querySelector("[data-flow-gaps]");
let activeFlow = "embedded";
let activeFlowStep = 0;

const renderFlow = (flowKey, stepIndex = 0) => {
  const flow = bankingFlows[flowKey];
  if (!flow || !flowDiagram || !flowPanel) return;
  activeFlowStep = stepIndex;

  flowDiagram.setAttribute("aria-label", `${flow.kicker} flow`);
  if (entityRail) {
    entityRail.setAttribute("aria-label", `${flow.kicker} entities`);
    entityRail.innerHTML = flow.entities.map((entity, index) => `
      <div class="entity-card">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${entity}</strong>
      </div>
    `).join("");
  }

  flowDiagram.innerHTML = flow.steps.map((step, index) => `
    <button class="sequence-card ${index === stepIndex ? "is-active" : ""}" type="button" data-flow-step="${index}" aria-current="${index === stepIndex ? "true" : "false"}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${step.label}</strong>
      <small>${step.short}</small>
    </button>
  `).join("");

  const step = flow.steps[stepIndex];
  flowPanel.innerHTML = `
    <p class="panel-kicker">${flow.kicker}</p>
    <h3>${flow.title}</h3>
    <p>${flow.summary}</p>
    <div class="flow-detail">
      <strong>${step.label}</strong>
      <p>${step.detail}</p>
    </div>
    <div class="map-tags">${flow.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
  `;

  if (flowMatrix) {
    flowMatrix.innerHTML = `
      <div class="matrix-title">Layer Hand-Offs: Action, Control, Output</div>
      <div class="matrix-row matrix-head">
        <span>Connection</span>
        <span>Data / Action</span>
        <span>Controls</span>
        <span>Output</span>
      </div>
      ${flow.matrix.map((row) => `
        <div class="matrix-row">
          <span>${row[0]}</span>
          <span>${row[1]}</span>
          <span>${row[2]}</span>
          <span>${row[3]}</span>
        </div>
      `).join("")}
    `;
  }

  if (truthStrip) {
    truthStrip.innerHTML = `
      <div class="truth-title">Where Truth Lives</div>
      <div class="truth-items">
        ${flow.truths.map((truth) => `<span>${truth}</span>`).join("")}
      </div>
    `;
  }

  if (flowGaps) {
    flowGaps.innerHTML = `
      <div class="gap-title">Readiness Gaps To Manage</div>
      <div class="gap-grid">
        ${flow.gaps.map((gap) => `
          <article>
            <strong>${gap[0]}</strong>
            <p>${gap[1]}</p>
          </article>
        `).join("")}
      </div>
    `;
  }

  flowDiagram.querySelectorAll("[data-flow-step]").forEach((button) => {
    button.addEventListener("click", () => {
      renderFlow(activeFlow, Number(button.dataset.flowStep));
    });
  });
};

if (flowPanel && flowDiagram) {
  flowTabs.forEach((button) => {
    button.addEventListener("click", () => {
      activeFlow = button.dataset.flow;
      activeFlowStep = 0;
      setActiveButton(flowTabs, button);
      renderFlow(activeFlow);
    });
  });
  renderFlow(activeFlow);
}

const lifecycleButtons = document.querySelectorAll("[data-lifecycle]");
const lifecyclePanel = document.querySelector("[data-lifecycle-panel]");

if (lifecyclePanel) {
  lifecycleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = lifecycleContent[button.dataset.lifecycle];
      setActiveButton(lifecycleButtons, button);
      lifecyclePanel.innerHTML = `
        <p class="panel-kicker">${item.kicker}</p>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <div class="panel-lists">
          <div>
            <strong>Key work</strong>
            <ul>${renderList(item.work)}</ul>
          </div>
          <div>
            <strong>Outputs</strong>
            <ul>${renderList(item.outputs)}</ul>
          </div>
        </div>
      `;
    });
  });
}

const mapButtons = document.querySelectorAll("[data-map]");
const mapPanel = document.querySelector("[data-map-panel]");

if (mapPanel) {
  mapButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = mapContent[button.dataset.map];
      setActiveButton(mapButtons, button);
      mapPanel.innerHTML = `
        <p class="panel-kicker">${item.kicker}</p>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <div class="map-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      `;
    });
  });
}

const engagementButtons = document.querySelectorAll("[data-engagement]");
const engagementPanel = document.querySelector("[data-engagement-panel]");

if (engagementPanel) {
  engagementButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = engagementContent[button.dataset.engagement];
      setActiveButton(engagementButtons, button);
      engagementPanel.innerHTML = `
        <p class="panel-kicker">${item.kicker}</p>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <div class="panel-lists">
          <div>
            <strong>Best for</strong>
            <ul>${renderList(item.bestFor)}</ul>
          </div>
          <div>
            <strong>Deliverables</strong>
            <ul>${renderList(item.outputs)}</ul>
          </div>
        </div>
      `;
    });
  });
}

const hotspotButtons = document.querySelectorAll("[data-hotspot]");
const hotspotPanel = document.querySelector("[data-hotspot-panel]");

if (hotspotPanel) {
  hotspotButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = hotspotContent[button.dataset.hotspot];
      setActiveButton(hotspotButtons, button);
      hotspotPanel.innerHTML = `
        <p class="panel-kicker">${item.kicker}</p>
        <h3>${item.title}</h3>
        <div class="risk-detail-grid">
          <div>
            <strong>Common Failure</strong>
            <p>${item.failure}</p>
          </div>
          <div>
            <strong>Business Impact</strong>
            <p>${item.impact}</p>
          </div>
          <div>
            <strong>Consultant Fix</strong>
            <p>${item.fix}</p>
          </div>
          <div>
            <strong>Artifact</strong>
            <p>${item.artifact}</p>
          </div>
        </div>
      `;
    });
  });
}

const scoreItems = document.querySelectorAll("[data-score-item]");
const scoreCount = document.querySelector("[data-score-count]");
const scoreBar = document.querySelector("[data-score-bar]");
const scoreTitle = document.querySelector("[data-score-title]");
const scoreCopy = document.querySelector("[data-score-copy]");
const scoreFocus = document.querySelector("[data-score-focus]");

const readinessStates = [
  {
    max: 2,
    title: "Early Discovery",
    copy: "The idea may be strong, but the operating model still has unclear ownership, evidence, and support paths.",
    focus: "Start by mapping systems of record, bank/vendor responsibility, controls, and delivery dependencies."
  },
  {
    max: 4,
    title: "Delivery Needs Control",
    copy: "The program has shape, but production readiness will depend on stronger testing, governance, and exception ownership.",
    focus: "Build the readiness plan around RACI, data contracts, QA/UAT scenarios, ARB/CAB evidence, and release gates."
  },
  {
    max: 6,
    title: "Near Production Readiness",
    copy: "The foundation is solid. The remaining work is proving operational behavior across edge cases and support handoff.",
    focus: "Pressure-test settlement, posting, reconciliation, monitoring, DR, rollback, and support ownership."
  },
  {
    max: 8,
    title: "Operating Model Ready",
    copy: "The platform has the right signs of a bank-grade launch path: ownership, controls, evidence, release discipline, and support readiness.",
    focus: "Move into final cutover planning, production validation, operational handoff, and continuous improvement governance."
  }
];

const updateReadinessScore = () => {
  if (!scoreItems.length || !scoreCount || !scoreBar || !scoreTitle || !scoreCopy || !scoreFocus) return;

  const checked = Array.from(scoreItems).filter((item) => item.checked).length;
  const percent = Math.round((checked / scoreItems.length) * 100);
  const state = readinessStates.find((item) => checked <= item.max) || readinessStates[readinessStates.length - 1];

  scoreCount.textContent = String(checked);
  scoreBar.style.width = `${percent}%`;
  scoreTitle.textContent = state.title;
  scoreCopy.textContent = state.copy;
  scoreFocus.textContent = state.focus;
};

if (scoreItems.length) {
  scoreItems.forEach((item) => {
    item.addEventListener("change", updateReadinessScore);
  });
  updateReadinessScore();
}
