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
│  │
│  ├─ MongoDB/
│  │  ├─ books.js
│  │  ├─ index.js
│  │  ├─ package.json
│  │  └─ package-lock.json
│  │
│  ├─ SQL/
│  │  ├─ mysql_queries.sql
│  │  ├─ practice1.sql
│  │  └─ practice2.sql
│  │
│  ├─ SQL_With_Node/
│  │  ├─ views/
│  │  │  ├─ add.ejs
│  │  │  ├─ delete.ejs
│  │  │  ├─ edit.ejs
│  │  │  ├─ home.ejs
│  │  │  └─ users.ejs
│  │  │
│  │  ├─ index.js
│  │  ├─ schema.sql
│  │  ├─ package.json
│  │  └─ package-lock.json
│  │
│  ├─ ExpressJS/
│  │  ├─ index.js
│  │  ├─ package.json
│  │  ├─ package-lock.json
│  │  │
│  │  └─ EJSDIR/
│  │     ├─ Gameof_Score/
│  │     ├─ views/
│  │     │  ├─ includes/
│  │     │  ├─ about.ejs
│  │     │  ├─ home.ejs
│  │     │  ├─ instagram.ejs
│  │     │  ├─ instahome.ejs
│  │     │  └─ rolldice.ejs
│  │     │
│  │     ├─ data.json
│  │     ├─ index.js
│  │     ├─ package.json
│  │     └─ package-lock.json
│  │
│  ├─ Rest_class/
│  │  ├─ public/
│  │  │  └─ Style.css
│  │  │
│  │  ├─ views/
│  │  │  ├─ index.ejs
│  │  │  ├─ edit.ejs
│  │  │  ├─ new.ejs
│  │  │  └─ show.ejs
│  │  │
│  │  ├─ index.js
│  │  ├─ package.json
│  │  └─ package-lock.json
│  │
│  ├─ Middlewares/
│  │  ├─ app.js
│  │  ├─ package.json
│  │  └─ package-lock.json
│  │
│  ├─ MongoXpress/
│  │  ├─ Models/
│  │  │  └─ chat.js
│  │  │
│  │  ├─ Views/
│  │  │  ├─ deletechat.ejs
│  │  │  ├─ editsms.ejs
│  │  │  ├─ index.ejs
│  │  │  └─ newchat.ejs
│  │  │
│  │  ├─ public/
│  │  │  └─ style.css
│  │  │
│  │  ├─ index.js
│  │  ├─ init.js
│  │  ├─ package.json
│  │  └─ package-lock.json
│  │
│  ├─ Miscellaneous/
│  │  ├─ Backend_Form/
│  │  │  ├─ index.js
│  │  │  ├─ package.json
│  │  │  └─ package-lock.json
│  │  │
│  │  └─ Frontend_Form/
│  │     ├─ app.js
│  │     └─ indexF.html
│  │
│  └─ nodejs-Basics/
│     ├─ Script.js
│     ├─ Math.js
│     ├─ Fruit/
│     ├─ RequireVsImport/
│     └─ FigletDir/
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
