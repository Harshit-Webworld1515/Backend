# Backend (Node.js)

A **general-purpose Node.js backend repository** for learning, experimenting, and building backend concepts step by step. This repository is **not tied to a single project**—it acts as a common workspace for multiple backend experiments, mini-projects, and practice modules.

---

## 🎯 Purpose of This Repository

* Learn **Node.js fundamentals**
* Practice **modules, scripts, and folder structuring**
* Experiment with **npm packages** (like figlet, utilities, etc.)
* Maintain **clean Git practices** for backend development

This repo will **grow over time** as more backend concepts are added.

---

## 📁 General Project Structure

```
Backend/
├─ NodeJs/
│  ├─ ExpressJS/
│  │  ├─ index.js
│  │  ├─ package.json
│  │  └─ package-lock.json
│  │
│  └─ nodejs-Basics/
│     ├─ Script.js          # 👈 direct child
│     ├─ Math.js            # 👈 direct child
│     │
│     ├─ Fruit/
│     │  ├─ Banana.js
│     │  ├─ Mango.js
│     │  ├─ Orange.js
│     │  └─ index.js
│     │
│     ├─ RequireVsImport/
│     │  ├─ export.js
│     │  ├─ import.js
│     │  ├─ package.json
│     │  └─ package-lock.json
│     │
│     └─ FigletDir/
│        ├─ index.js
│        ├─ package.json
│        └─ package-lock.json
│
├─ .gitignore
└─ README.md

```

> Each folder inside `NodeJs/` may represent **a separate concept or mini-project**.

---

## 🚀 Getting Started (General)

### Prerequisites

* **Node.js** (LTS recommended)
* **npm** (comes with Node.js)

### Install Dependencies (per project)

Each sub-folder can have its own dependencies:

```bash
cd NodeJs/<project-folder>
npm install
```

Run files using:

```bash
node index.js
```

(or any entry file inside that folder)

---

## 🧠 Concepts Covered (Growing List)

* Node.js runtime basics
* CommonJS modules (`require` / `module.exports`)
* npm & package management
* Using third‑party packages
* File & folder organization
* CLI scripts

---

## 🛡️ Git Best Practices

* `node_modules/` is **ignored globally**
* `.env` files are **never committed**
* Only source code and configuration files are tracked

```gitignore
node_modules/
.env
```

---

## 📌 Notes

* This repository is **for learning and experimentation**
* Code quality and structure may improve as skills grow
* Older folders may contain beginner-level examples

---

## 👤 Author

**Harshit Pandit**

---

## 📄 License

Free to use for learning and personal practice.
