# Payments Flow Checklist

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
