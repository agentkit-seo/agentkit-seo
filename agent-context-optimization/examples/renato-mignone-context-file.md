# Renato Mignone — Cybersecurity engineer and security researcher

## QUICK REFERENCE

```yaml
name: Renato Mignone
current_location: Düsseldorf, Germany
linkedin: https://www.linkedin.com/in/renato-mignone/
website: https://renatomignone.github.io/
github: https://github.com/RenatoMignone
target_roles: [Security Research Engineer, Cryptography Researcher, Cybersecurity Analyst]
open_to_relocation: true

education:
  - "[DEGREE] BSc in Computer Engineering (L-8) | Università degli Studi del Sannio | 101/110 | June 2024"
  - "[DEGREE] MSc in Cybersecurity Engineering (LM-32) | Politecnico di Torino | GPA 29.48/30 | Expected October 2026"

gpa_summary: "Information Systems Security: 29/30, Computer Networks and Cloud Technologies: 30L/30, Machine Learning for Networking: 27/30, Computer Architectures and OS: 30/30, Network and Cloud Security: 30L/30, Hardware Security: 30L/30, Wireless Security: 30L/30, Cryptography: 30L/30, Web Applications: 30L/30, Advanced Information Systems Security: 30L/30, AI and Cybersecurity: 30L/30, Security Verification and Testing: 30L/30, Cybersecurity Laws and Regulations: 27/30"

professional:
  - "[ROLE] Security Research Engineer | Huawei Data Privacy Lab | February 2026 – September 2026"

top_skills: [post-quantum cryptography, zero-knowledge proofs, blind signatures, OPRFs, eBPF kernel exploitation, AI for cybersecurity, network security, VPN protocols, hardware security, cryptographic protocol design, formal verification, Python, Rust]
tools: [Python, Rust, QEMU, GDB, PyTorch, Scikit-learn, LangChain, LangGraph, OpenSSL, GNS3, Wireshark]

competitions:
  - "1st Place — IEEE-HKN International Budget Hack 2025 (November 2025)"
  - "88th Place — Reply Hack The Code Challenge 2025, Score: 56,196,106 (March 2025)"

certifications:
  - "Cambridge English B2 First (FCE) | Cambridge University Press & Assessment | June 2024 | ID: C7109952, Score: 172"
  - "GNU/Linux Advanced Certificate | WEEE Open, NetStudent, open@polito | May 2025"

languages:
  - "Italian: Native"
  - "English: B2 / C1 speaking (Cambridge FCE, Score 172, ID C7109952)"
  - "French: Basic"

```

This file is a personal knowledge base documenting Renato Mignone's full academic and professional career in cybersecurity. It is not intended for direct distribution to third parties. Its purpose is to serve as a structured source of truth from which career outputs can be generated — including cover letters, CVs, LinkedIn sections, role-specific application materials, and interview preparation notes. All facts, grades, dates, and names are verified.

<!-- VERIFIED FACTS: bsc_graduation=2024-06-13, bsc_grade=101/110, msc_gpa=29.48/30, msc_expected_graduation=2026-10, iss_grade=29/30, cnct_grade=30L/30, ml4net_grade=27/30, caos_grade=30/30, ncs_grade=30L/30, hardware_sec_grade=30L/30, wireless_sec_grade=30L/30, crypto_grade=30L/30, webapp_grade=30L/30, aiss_grade=30L/30, ai_cyber_grade=30L/30, svt_grade=30L/30, cyber_law_grade=27/30, english_cert_score=172, english_cert_id=C7109952, ieee_hackathon_result=1st_place, ieee_hackathon_year=2025, reply_challenge_result=88th_place, reply_challenge_score=56196106, reply_challenge_year=2025 -->

## [DEGREE] BSc in Computer Engineering (L-8 — Classe delle lauree in ingegneria dell'informazione) | Università degli Studi del Sannio, Benevento, Italy | 101/110 | September 2021 – June 2024

The bachelor's degree provided foundational training in computer engineering, covering programming (C, Java, Python), computer architecture, and information systems. The cybersecurity-relevant component is the research thesis, detailed below.

### [THESIS] Extracting equivocal behaviours from trusted systems
**Full title:** *Progettazione e realizzazione di un sistema per l'estrazione di equivocal behaviour dai sistemi software*
**Supervisors:** Prof. Corrado Aaron Visaggio, Prof. Andrea di Sorbo, Ing. Gregorio Dalia
**Research area:** Software Supply Chain Security, Malware Analysis, Behavioural Analysis
**TL;DR:** Designed a multithreaded Python tool to automate parallel sandbox analysis of 36 goodware binaries, classifying 12 equivocal software behaviours using the MITRE ATT&CK framework.

#### Context and Problem Statement

The research addresses the threat posed by software supply chain attacks. The integration of third-party components (libraries, open-source software, COTS - Commercial Off-The-Shelf modules) into modern software has expanded the attack surface. According to data cited in the thesis (from ENISA and CISA sources), supply chain attacks grew from 1% of total attacks in 2020 to 17% in 2021. Notable incidents include the SolarWinds Orion framework compromise, the Colonial Pipeline ransomware attack, and the Log4j vulnerability.

The thesis emphasises the necessity of Software Transparency paradigms and the universal adoption of SBOM (Software Bill of Materials), promoted by government bodies (NTIA, CISA) and European directives (Digital Europe Programme, NIS Directive). It goes beyond the detection of overtly malicious code, focusing instead on the identification and classification of **equivocal behaviours** - actions performed by trusted software (goodware) that are not explicitly communicated to the user and may deviate from the stated specifications, raising concerns about privacy, integrity, or data confidentiality.

#### Equivocal Software Behaviour (ESB) Classification

Using the MITRE ATT&CK Enterprise Matrix (v4.0), the research defined and classified **12 Equivocal Software Behaviours (ESBs)** through a process of peer review and card-sorting applied to 60 ATT&CK techniques:

| ID    | Behaviour                              | Description                                                                                                                                                              | Experimental Finding                           |
| ----- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| ESB1  | System Analysis and Resource Discovery | Reconnaissance of OS, hardware, and resources (driver enumeration, environment variables). If performed covertly, constitutes a reconnaissance phase typical of malware. | **100%** of analysed systems                   |
| ESB2  | Network Enumeration and Analysis       | Acquisition of network topology data, service detection, open port scanning, sniffing. May precede unauthorised lateral movement.                                        | Limited percentage                             |
| ESB3  | Network Traffic Manipulation           | Non-standard traffic generation, covert channels, protocol tunneling.                                                                                                    | **0%** detected                                |
| ESB4  | Scripting and Code Execution           | Use of interpreters (PowerShell, Bash) or IPC for local code execution. Opacity in this domain favours arbitrary payload execution.                                      | Variable detection                             |
| ESB5  | Task Scheduling and System Automation  | Process scheduling at specific times or during boot. Exploitable to ensure persistence of unauthorised processes.                                                        | Detected in system software for covert updates |
| ESB6  | Advanced OS Utility Exploitation       | Advanced interaction with OS primitives (WMI, BITS) to perform complex tasks that bypass normal application controls.                                                    | **100%** of analysed systems                   |
| ESB7  | Privilege Manipulation                 | Silent modification of directory permissions, access tokens, or authentication mechanisms. Corresponds to privilege escalation techniques.                               | Limited percentage                             |
| ESB8  | Software Extension and Interaction     | Untracked installation of extensions, add-ons, or remote management tools, exposing the system to backdoors.                                                             | Moderate                                       |
| ESB9  | Control Evasion and Analysis Avoidance | Detection of debuggers, sandboxes, or anti-malware software; code obfuscation; direct volume access.                                                                     | Limited but critical                           |
| ESB10 | Logging Evasion and Indirect Execution | Targeted disabling or deletion of system/network logs to conceal activity traces (defence evasion).                                                                      | Very low                                       |
| ESB11 | Encryption Manipulation                | Attempts to weaken cryptographic protections (downgrade attacks) or alter session keys.                                                                                  | **0%** detected                                |
| ESB12 | Media Capture                          | Silent activation of audio/video streams (webcam) or screen capture. Often used for invasive marketing telemetry.                                                        | Low but present                                |

#### Methodology and Tooling

A custom analysis tool was designed and developed in Python using OOP principles. The tool features a fully asynchronous, multithreaded architecture that optimises execution time by automating parallel analysis on dozens of binaries simultaneously. The tool operates as a central orchestrator, interfacing via HTTP RESTful API calls with multiple commercial and open-source malware analysis sandbox platforms:

- **Hybrid Analysis (Falcon Sandbox):** Combines static analysis (string decoding, control flow analysis, API call extraction) and dynamic analysis (kernel/user process monitoring, registry access, network traffic logging). Binaries are submitted in parallel on both Windows 10 and Windows 11 environments via Environment ID specification.
- **VirusTotal:** Leverages its distributed sandbox network, interfacing with CAPA (a tool from Mandiant/FLARE for direct MITRE ATT&CK mapping), CAPE (detonation in virtual environments), and ZENBOX (Windows 10-specific analysis).
- **ANY.RUN:** Interactive, real-time analysis service. The tool manages ANY.RUN's inability to natively parallelise requests through a synchronised queue, collecting memory dumps, PCAP files, and forensic logs.

Evaluated but discarded platforms include Joe Sandbox (inaccessible API premium tier for academic accounts) and Cuckoo Sandbox (chronic instability in dependency resolution for local configurations).

**Dataset:** 36 goodware binaries, categorised using SourceForge taxonomy - system software (20%), productivity (15%), multimedia (15%), internet (13%), communications (11%), and others.

**Data Post-Processing:** JSON files generated from API calls were cleaned and post-processed using Pandas and Seaborn in Jupyter Notebooks to map MITRE ATT&CK technique codes to the ESB classification.

#### Results

The analysis confirmed that software classified as trusted (including major web browsers and streaming platforms) systematically exhibits behaviours classified as malware reconnaissance (ESB1 and ESB6 at 100%) for covert telemetry or system control purposes. The thesis demonstrates that, in the absence of transparent declarations (SBOM) from vendors, these undocumented actions constitute threats to enterprise privacy and represent silent attack vectors for advanced adversaries.



## [DEGREE] MSc in Cybersecurity Engineering (LM-32 — Ingegneria informatica) | Politecnico di Torino, Turin, Italy

GPA 29.48/30 | September 2024 – Expected October 2026

The master's degree in cybersecurity engineering focuses on threat analysis, cryptography, network security, hardware security, and AI-driven defence, delivered entirely in English and aligned with ECSO standards.

### First year — first semester

#### [COURSE] Information Systems Security | Grade: 29/30 | Code: 02TYMUV
Topics: sniffing, spoofing, denial of service, risk analysis, steganography, cryptography, digest, X.509 certificates, certification authorities, PKI, authentication, Kerberos, tokens, smart cards, PAP, CHAP, EAP, IEEE 802.1x, firewalls, IDS, VPN, PGP, S/MIME, SSL, TLS, SSH, web application security, social sciences for cybersecurity, cognitive biases, Risk Society, trust in expert systems

#### [COURSE] Computer Networks and Cloud Technologies | Grade: 30L/30 | Code: 01NXIUV
Topics: IPv4 network design, routing on the Internet, IPv6 protocol, IPv4/IPv6 coexistence, LAN and VLAN design, quality of service (QoS), computing virtualisation, Software Defined Networking (SDN), Network Functions Virtualisation (NFV), cloud computing models and technologies

#### [COURSE] Machine Learning for Networking | Grade: 27/30 | Code: 01DSMUV
Topics: supervised learning, unsupervised learning, semi-supervised learning, network traffic classification, feature engineering, IAT, packet length distributions, encrypted traffic analysis, FFNNs, RNNs, LSTM, GRU, TF-IDF, Word2Vec, BERT, UniXcoder, GraphSAGE, GCN, anomaly detection, One-Class SVM, autoencoders, DBSCAN, class imbalance, precision, recall, F1-score, ROC/AUC, network intrusion detection, malware classification, honeypot data analysis, PyTorch, Scikit-learn, Pandas

##### [PROJECT] SSH shell attacks analysis | Repo: https://github.com/RenatoMignone/SSH-Shell-Attacks
**TL;DR:** Applied ML and NLP pipelines to ~230,000 honeypot SSH sessions to classify attacker intents across 7 MITRE ATT&CK categories, achieving command-level intent classification with BERT and Doc2Vec.

**Description:** Machine learning analysis of SSH shell attack sessions from honeypot deployments to classify attacker intents, discover attack patterns, and explore NLP techniques for cybersecurity.
**Technologies:** Python, Pandas, NumPy, PyArrow, Matplotlib, Seaborn, Scikit-learn, PyTorch, Transformers (Hugging Face)
**Key areas:** Parquet ingestion, TF-IDF and Word2Vec feature engineering, binary and multi-class classification (Logistic Regression, Random Forest, SVM, neural networks), K-Means and DBSCAN clustering, PCA/t-SNE/UMAP dimensionality reduction, BERT contextual embeddings, Doc2Vec representations, confusion matrix analysis
**Results:** Large-scale honeypot analysis demonstrating systematically discovered attack patterns; practical framework for extracting IoCs from unstructured attack session logs; ACM-formatted report with reproducible Jupyter notebooks (sections 0–4)

#### [COURSE] Computer Architectures and Operating Systems | Grade: 30/30 | Code: 01GYKUV
Topics: pipelining, superscalar execution, instruction-level parallelism, branch prediction, cache hierarchies (L1/L2/L3), MMU, ARM Cortex-M7, Thumb-2, Harvard architecture, MPU, FreeRTOS, task scheduling, semaphores, mutexes, NVIC, UART, DMA, bare-metal programming, linker scripts, QEMU, GDB, ARM GCC cross-compilation

##### [PROJECT] Secure timeout system on NXP S32K3X8EVB | Repo: https://github.com/RenatoMignone/Secure-Timeout-System-NXPS32K3X8EVB
**TL;DR:** Ported FreeRTOS to an ARM Cortex-M7 evaluation board with full MPU support, hardware errata mitigation, and QEMU-based emulation to implement a priority-driven secure timeout application.

**Description:** Bare-metal programming and hardware emulation of a secure timeout application on the NXP S32K3X8EVB evaluation board (ARM Cortex-M7), using FreeRTOS and QEMU emulation.
**Technologies:** ARM GCC (gcc-arm-none-eabi), QEMU, GDB, FreeRTOS, Makefile/Ninja
**Key areas:** Custom FreeRTOS port adaptation from Cortex-M4 to Cortex-M7, MPU configuration for 16 isolated memory regions, hardware Errata 837070 mitigation, UART driver abstraction, interrupt-driven timer subsystem, priority-driven multi-task scheduling (ALERT at level 3, EVENT at level 4)
**Results:** Full build pipeline (configure, compile, emulate, debug) via Makefile automation without physical hardware; complete UART, timer, and MPU subsystems validated under QEMU

### First year — second semester

#### [COURSE] Network and Cloud Security | Grade: 30L/30 | Code: 01NXIUV
Topics: network security fundamentals, packet filtering, IDS/IPS, firewall design, IPsec VPN, IKEv1/IKEv2, ESP, AES-256, Perfect Forward Secrecy, Diffie-Hellman, TLS VPN, OpenVPN, SSL-VPN, X.509 PKI, cloud computing security, NAT traversal, anti-replay protection, Dead Peer Detection, Wireshark packet analysis

##### [PROJECT] SoftEther VPN laboratory | Repo: https://github.com/RenatoMignone/SoftEther-VPN-Guardian
**TL;DR:** Designed and deployed a dual-protocol enterprise VPN lab (IPsec/strongSwan and TLS/OpenVPN) over a GNS3-simulated ISP topology, validating encryption and firewall traversal via Wireshark packet forensics.

**Description:** Enterprise-grade VPN deployment laboratory using SoftEther VPN Server, demonstrating secure site-to-site connectivity across public Internet infrastructure. Three-repository structure: VPN Guardian (full implementation), Lab Activity Report, and Configuration Files Guide.
**Technologies:** GNS3, Cisco IOS, strongSwan, OpenVPN, SoftEther VPN Server, Docker, Wireshark, X.509 PKI, Linux iptables/nftables
**Key areas:** IPsec with IKEv1, AES-256 Phase 1 / AES-128 Phase 2, SHA-1 HMAC, Diffie-Hellman Group 14, NAT traversal; TLS/SSL tunnel over TCP/443 with AES-128-CBC and SHA-256; dual-factor authentication; ESP frame verification; Dead Peer Detection; restrictive ACL configuration
**Results:** Complete comparative analysis of IPsec vs TLS trade-offs (encryption strength, firewall evasion, CPU overhead, mobile connectivity); validated via Wireshark capture of TLS handshake and ESP framing

| Security Property             | IPSec                      | TLS/SSL                     | Context                                                  |
| ----------------------------- | -------------------------- | --------------------------- | -------------------------------------------------------- |
| **Encryption Strength**       | AES-256 Phase 1            | AES-128-CBC                 | IPSec offers higher strength, but both adequate with PFS |
| **Firewall Evasion**          | Moderate (port 500/4500)   | Excellent (port 443)        | TLS blends with HTTPS, bypasses restrictive policies     |
| **CPU Overhead**              | Lower (kernel space)       | Higher (user space)         | Trade-off: throughput vs flexibility                     |
| **Mobile Connectivity**       | Limited                    | Excellent                   | TLS adapts to mobile environments better                 |
| **Implementation Complexity** | Higher (IKE state machine) | Lower (simpler protocol)    | IKEv1 requires careful state management                  |
| **Packet Overhead**           | ESP headers (50+ bytes)    | TLS record layer (variable) | Similar practical efficiency                             |

#### [COURSE] Hardware Security | Grade: 30L/30 | Code: 01GYSUV
Topics: hardware security threat landscape, CIA triad, VLSI design, IP cores, IP watermarking, PCB security, secure elements, TPM, Trusted Computing Base, hardware counterfeiting, TRNGs, Physically Unclonable Functions (PUFs), side-channel attacks (power, EM, timing), fault attacks, invasive attacks, microprobing, reverse engineering, hardware trojans, Verilog, test-infrastructure exploits

#### [COURSE] Wireless Security | Grade: 30L/30 | Code: 01GYSUV
Topics: physical layer security, digital communications, jamming, anti-jamming, GNSS/GPS/Galileo, GNSS spoofing, GNSS countermeasures, IEEE 802.11, WEP, WPA, 802.11i, 802.11w, rogue access points, selfish MAC behaviour, Bluetooth pairing, BLE, bluesnarfing, bluejacking, MiTM, 3G/4G/5G authentication, cellular confidentiality, Weighted Least Squares positioning, pseudorange analysis, iperf, Wireshark, MATLAB

##### [PROJECT] Wireless security labs | Repo: https://github.com/WDCSecure/LabGNSS
**TL;DR:** Conducted two hardware-instrumented lab experiments: GNSS spoofing detection via Android device measurement processing in MATLAB, and WiFi goodput measurement under three network configurations using iperf and Wireshark.

**Description:** Two-part wireless security laboratory — GNSS Security Lab and WiFi Security Lab — generating LaTeX reports with experimental results.
**Technologies:** MATLAB, iperf/iperf3, Wireshark, tcpdump, zizzania
**Key areas:** GNSS — pseudorange analysis, C/N₀ signal quality, WLS positioning, spoofing experiments, ADR analysis; WiFi — goodput under Ethernet-to-Ethernet, WiFi-to-WiFi, and mixed-mode scenarios, TCP sequence analysis, round-trip time measurement
**Results:** Quantified spoofing detection strategies; goodput statistics (min, max, average, std dev) across 10+ repetitions per scenario; packet-level protocol analysis reports



#### [COURSE] Web Applications | Grade: 30L/30 | Code: 01GYOUV
Topics: HTTP/HTTPS, REST API design, HTML5, CSS3, JavaScript ES6+, React, SPA, Node.js, Express.js, SQLite3, ORM, session authentication, bcrypt, JWT, TOTP, role-based access control, OWASP Top 10, SQL injection, XSS, CSRF, CSP, HSTS, parameterised queries, Webpack, Vite, CORS

##### [PROJECT] Cybersecurity forum web application | Repo: https://github.com/RenatoMignone/WebApp_Project
**TL;DR:** Built a full-stack cybersecurity-themed forum in Node.js/React with bcrypt password hashing, TOTP 2FA for admins, role-based access control, and parameterised queries following OWASP guidelines.

**Description:** Cybersecurity-themed forum implemented as a full-stack JavaScript web application, demonstrating secure web development patterns aligned with OWASP guidelines.
**Technologies:** Node.js, Express.js, React, SQLite3, bcrypt, OTPAuth, JSON Web Tokens
**Key areas:** Session-based authentication, bcrypt with salt, TOTP 2FA (RFC 6238) for admin users, HTTP-only cookies, role-based API middleware (Admin/User), parameterised queries, anonymous comment support with nullable foreign keys
**Results:** Full RESTful API (authentication, posts, comments, engagement endpoints); modular React architecture with 8+ components; complete OWASP-compliant security implementation



### Second year — first semester

#### [COURSE] Advanced Information Systems Security | Grade: 30L/30 | Code: 02GYYUV
Topics: PKI features and threats, secure electronic documents, TLS, SSH, passkeys, federated authentication, SAML, OIDC, software security pitfalls, trusted computing, TEE, Confidential Computing, GDPR, NIS2, post-quantum security, Self-Sovereign Identity (SSI), Decentralized Identifiers (DID), Verifiable Credentials (VC), Verifiable Presentations (VP), Triangle of Trust

*Project: private repository (paper in preparation for publication).*

#### [COURSE] AI and Cybersecurity | Grade: 30L/30 | Code: 01GYZUV
Topics: AI and machine learning for cybersecurity, deep learning fundamentals, deep learning networks theory and implementation, deep NLP and embeddings techniques, supervised and unsupervised anomaly detection, data science pipelines for data analytics, deep learning frameworks, supervised traffic classification, NLP and clustering for botnet detection, unsupervised anomaly detection

##### [PROJECT] AI-driven threat detection research | Repo: https://github.com/RenatoMignone/AI-Driven-Threat-Detection-Research
**TL;DR:** Developed a multi-model AI defence suite across four lab modules covering network flow classification, malware API-call sequencing, zero-day anomaly detection, and NLP-based attack tactic recognition.

**Description:** Multi-model AI defence suite organised as four sequential laboratory modules (Git submodules) covering the full spectrum from foundational network flow analysis to advanced malware detection and NLP-based tactic recognition. Co-authored with C. Sanna and C. Iorio.
**Technologies:** Python, PyTorch, PyTorch Geometric, Scikit-learn, Pandas, Transformers (BERT, UniXcoder)
**Key areas:** Lab 1: deep learning on CICIDS2017, FFNNs, class imbalance (weighted CrossEntropyLoss), feature-bias analysis on destination port. Lab 2: malware API-call classification using GRU/LSTM and GraphSAGE/GCN on execution traces. Lab 3: zero-day anomaly detection using One-Class SVM, autoencoder reconstruction error, DBSCAN clustering, and PCA/t-SNE. Lab 4: bash session intent classification (MITRE ATT&CK) using custom tokenisation, TF-IDF, Word2Vec, and bidirectional LSTMs
**Results:** Achieved 97.5% in network flow classification, 98.1% in malware API classification, 95% precision in unsupervised anomaly detection; systematically mitigated feature-bias in security datasets; produced 4 ACM-formatted research reports with reproducible Jupyter notebooks



#### [COURSE] Security Verification and Testing | Grade: 30L/30 | Code: 02TYAUV
Topics: secure coding standards, ISO/IEC TS 17961, CERT C/C++, CWE, CVE, SAST, CFG, data flow analysis, taint analysis, symbolic execution, fuzzing, AFL/AFL++, LibFuzzer, DAST, Valgrind, AddressSanitizer, Ghidra, IDA Pro, radare2, reverse engineering, binary diffing, attack surface enumeration, buffer overflows, ROP, format string vulnerabilities, use-after-free, type confusion, stack canaries, ASLR, DEP/NX, CFI, shadow stacks, eBPF verifier analysis, kernel module testing, formal verification, model checking, theorem proving, unit testing, integration testing, penetration testing, CI/CD security

##### [PROJECT] Linux eBPF verifier bypass research | Repo: https://github.com/RenatoMignone/Linux-eBPF-Verifier-Bypass-Research
**TL;DR:** Discovered and exploited 5 local privilege escalation vulnerabilities in the Linux LTS 6.8 kernel by bypassing the eBPF static verifier using dynamic reverse engineering and QEMU emulation.

**Description:** Security analysis and exploitation of the eBPF verifier in the Linux kernel LTS 6.8. The eBPF verifier (~20,000 lines of code) is the security gatekeeper that performs static analysis on every eBPF program before allowing it to run in kernel space.
**Technologies:** QEMU, bpftool, GDB, C, Assembly, xvtlas
**Key areas:** eBPF bytecode semantics, JIT compilation flow, register state tracking, type confusion, range confusion, pruning bugs, out-of-bounds read/write (OOB-R/W), local privilege escalation (LPE), dynamic reverse engineering, Makefile-based compilation, tmux test environment
**Results:** 5 confirmed exploitable vulnerabilities from 60+ candidates, with functional proof-of-concept exploits demonstrating verifier logic bypass and paths to local privilege escalation

#### [COURSE] Cybersecurity Laws and Regulations | Grade: 27/30 | Code: 01GZBUV
Topics: GDPR, DPIA, DPO, NIS1, NIS2, Cybersecurity Act, ENISA, ePrivacy Directive, DORA, Cyber Resilience Act (CRA), AI Act, Budapest Convention on Cybercrime, Italian Penal Code (computer crimes), ISO/IEC 27001/27002, NIST Cybersecurity Framework, CIS Controls, SOC 2 compliance, CER Directive, digital evidence, chain of custody, intellectual property, responsible disclosure

### Second year — second semester

#### [COURSE] Computer Forensics and Cyber Crime Analysis | Grade: To be completed | Code: 01GZDUV
Topics: digital forensics fundamentals, Locard's exchange principle, chain of custody, forensic imaging, write blockers, hashing (MD5, SHA-256), FAT, NTFS, ext4, APFS, file carving, MAC times, volatile memory acquisition, Volatility, Rekall, rootkit detection, packet capture analysis, network flow reconstruction, syslog, Windows Event Logs, Windows registry analysis, mobile device forensics, iOS/Android extraction, steganography, timestomping, timeline analysis (log2timeline/plaso), Autopsy, Sleuth Kit, FTK, EnCase, Wireshark, CAINE, DEFT

##### [PROJECT] ARIA - AI-resistant investigator agent (computer forensics game) | Repo: https://github.com/RenatoMignone/ARIA_Computer_Forensics_Game
**TL;DR:** Developed an educational interactive game simulating a digital forensics workspace to train investigators in identifying AI hallucinations and validating claims against ground-truth evidence.

**Description:** Educational interactive serious game that operationalises a novel pedagogical frontier by pressure-testing students' ability to recognize AI hallucinations in high-stakes scenarios while validating conclusions against ground-truth evidence. Features scripted offline mode and live Gemini AI mode.
**Technologies:** React 19, TypeScript 5.9, Tailwind CSS 4.2, Vite 7.3, Google Gemini 2.5 Flash API, xterm.js
**Key areas:** Modular React context-based state, real-time Gemini API streaming with fallback timeouts, interactive metadata inspector, functional terminal emulator, chain-of-custody logging, multi-modal evidence files, hallucination recognition, metadata literacy
**Results:** Directly addresses 5 CFCCA learning objectives; game mechanics force validation of every AI claim against forensic ground truth before earning points, operationalising investigative rigor as the defining mark of expert analysts

### [THESIS] Post-quantum secure policy-based anonymous authentication tokens
**Full title:** Post-Quantum Secure Policy-Based Anonymous Authentication Tokens
**Supervisors:** Unknown
**Research area:** Post-Quantum Cryptography, Zero-Knowledge Proofs, Oblivious Pseudorandom Functions
**TL;DR:** Designed and implemented quantum-resistant anonymous authentication tokens using lattice-based cryptography and zero-knowledge proofs.

*This thesis was completed during the Security Research Engineer role at Huawei Data Privacy Lab documented in the Professional experience section.*

## Professional experience

### [ROLE] Security Research Engineer | Huawei Data Privacy Lab | Düsseldorf, Germany | Feb 2026 – Sep 2026
**TL;DR:** Researched and implemented quantum-resistant anonymous authentication token schemes bridging formal cryptography and practical Rust implementation.

*This role is the industry context for the [THESIS] documented under the Master's Degree section.*

- Addressed the "Q-Day" threat to public key infrastructure by researching post-quantum cryptography (PQC), blind signatures, zero-knowledge proofs (ZKP), and oblivious pseudorandom functions (OPRFs)
- Implemented NIST PQC standardisation candidates (CRYSTALS-Dilithium, SPHINCS+) and modified Pointcheval-Sanders signature schemes for policy-binding
- Developed formal security models (game-based and simulation-based proofs) to verify token integrity and unlinkability under quantum adversary models
- Engineered two construction approaches: Direct PQ Substitution (SPHINCS+ and STARK zero-knowledge proofs via RiscZero/SP1 zkVMs) and MPC-Based OPRF (symmetric-key MPC reducing proof overhead)
- Bridged formal cryptographic specification with practical implementation in Rust, establishing efficiency baselines for token issuance and redemption under Grover's and Shor's algorithm threat models

## Certifications and achievements

### [COMPETITION] IEEE-HKN International Budget Hack 2025 | 2025 | Result: 1st Place (Winner)
**TL;DR:** Built "Budget HQ", a full-stack financial management web application for IEEE-HKN chapters, winning 1st place globally.

**Description:** A full-stack web application designed as a financial management "cockpit" for IEEE-HKN chapter treasurers - engineering students managing chapter finances without spreadsheet complexity.
**Team:** Team 9 - Spaghetti Overflow (A. Botticella, E. Innocenti, R. Mignone [Backend lead, API design, security], S. Romano, E. Ruiz Giménez, C. Sanna)
**Technologies:** React 18, Vite, React Router, Recharts, Node.js, Express 4, JWT, bcrypt, otplib, PostgreSQL 16, Docker, Nginx, Makefile
**Key areas:** Authentication (OAuth, TOTP 2FA, JWT), database schema scoped to academic years, security (bcrypt, Helmet.js, rate limiting, parameterised queries), REST API architecture (Budget, Transactions, Events, Deadlines, Analytics, Exports, Admin), single-command deployment, zero-copy PDF generation, real-time balance projection
**Results:** 1st Place (Winner) globally; awarded at the 15th anniversary celebration of the IEEE-HKN organisational merger; all mandatory and multiple optional features implemented in 10 days
**Repository:** https://github.com/RenatoMignone/team9-spaghetti-overflow




### [COMPETITION] Reply Hack The Code Challenge 2025 - Standard Edition | 2025 | Result: 88th Place (Top 100) / Score: 56,196,106
**TL;DR:** Competed in an international 6-hour team competition combining algorithmic optimisation (graph theory, operations research) and Capture The Flag cybersecurity challenges (Miscellaneous, Crypto, Web).

**Description:** International team-based competition testing algorithmic optimisation under strict time constraints alongside cybersecurity skills. Teams receive an algorithm-based problem and unlock additional input files for higher scores by solving CTF challenges.
**Format:** 6-hour duration, live leaderboard, teams of 1-6 members
**Categories:** Algorithmic coding (graph theory, operations research), CTF challenges (Miscellaneous, Crypto, Web)
**URL:** https://challenges.reply.com/challenges/hack-the-code-standard/home/



### [COMPETITION] Reply Code Challenge 2026 - AI Agents Track | 2026 | Result: Final evaluation pending
**TL;DR:** Developed an agentic AI system for citizen welfare monitoring and anomaly detection, optimising for detection quality, token cost, and latency using LangChain, LangGraph, and OpenRouter.

**Description:** Agentic AI system where an LLM functions as the core decision-maker to identify patterns of anomalous behavior deviating from established baselines using citizen location GPS data, health event logs, and biometric indices. Rule-based systems were explicitly disqualified.
**Technologies:** Python 3.10–3.13, LangChain, LangGraph, OpenRouter, Langfuse, ulid-py, python-dotenv
**Key areas:** Multi-agent orchestration, ReAct agent execution engine, unified LLM API gateway, token counting, latency tracking, cost analysis, prompt optimisation, LLM-driven reasoning chains
**Scoring Criteria:** Detection quality (count-based and economic accuracy), system performance (LLM token cost, latency, architecture explainability), benchmark comparison against organizer-provided baseline
**Constraints & Workflow:** Strict token budgets ($40 for levels 1-3, extra $120 for hidden levels), mandatory Langfuse session IDs for observability, optimization for quality-per-token efficiency, 6-hour competition window (3 hours sandbox training, 2 hours evaluation generation, 1 hour validation)
**Repository:** https://github.com/RenatoMignone/AI_Agents_Hackathon



### [CERT] GNU/Linux Advanced and Open Technologies Certificate | NetStudent, WEEE Open, open@polito | May 2025 | ID: N/A
Score: Minimum 80% attendance across all lectures. Covers advanced GNU/Linux system administration and open technologies.



## Languages

| Language | Level  | Certificate                                              | Notes                                                                                                                    |
| -------- | ------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Italian  | Native | —                                                        | —                                                                                                                        |
| English  | B2/C1  | Cambridge English B2 First (FCE), Score 172, ID C7109952 | Score breakdown: Speaking (181, C1), Listening (177, B2), Writing (171, B2), Reading (168, B2), Use of English (164, B2) |
| French   | Basic  | —                                                        | —                                                                                                                        |



## Leadership and extracurricular activities

### [LEADERSHIP] Member with organisational responsibilities | IEEE-HKN Honor Society (Mu Nu Chapter) | Apr 2024 – Present
- Coordination of technical operations for 5+ STEM hackathons and events (150–250 participants per event), managing logistics, infrastructure setup, network management, and real-time participant support.
- Establishment and maintenance of industry partnerships with ARM, NXP, and STMicroelectronics for event sponsorship, technical resources, and development hardware.