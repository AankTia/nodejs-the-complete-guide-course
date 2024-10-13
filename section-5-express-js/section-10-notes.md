# Section 10 : SQL Introduction
## SQL vs NoSQL
### What's SQL
Core SQL Database Characteristict:
- Data Schema (all data (in a Table) has to fit!)
- Data Relations (table are connected)
-- One-to-One
-- One-to-Many
-- Many to Many

SQL Queries example:
SELECT * FROM users WHERE age > 28
- SELECT => SQL Keywoard / Syntax
- * => Parameters / Data
- FROM => SQL Keywoard / Syntax
- users => Parameters / Data
- WHERE => SQL Keywoard / Syntax
- age > 28 => Parameters / Data

### NoSQL
NoSQL Characteristics
- No Data Schema (No structure required)
- No Data Relations (No / Few Connections)

## Comparing SQL & NoSQL
- Horizontal Scalling: Add more Servers (and merge Data into one Database)
- Vertical Scaling: Improve Server capacity / Hardware

### SQL
- Data uses Schemas
- Relations!
- Data is distributes across multiple tables
- Horizontal scalling is difficult / imposible; Vertical scalling is posible
- Limitations for lots of (thousands) read & write queries per second

### NoSQL
- Schema-less
- No (or very few) relations
- Data is typically merged / nested in a few collections
- Both horizontal and vertical scalling is possible.
- Great performance for mass read & write requests.

## Setting up MySQL
- From mysql.com
- Download & Install My SQL Server Comunity Edition
- Download & INstall My SQL Workbench Comunity

## Connecting our App to the SQL Database
npm install --save mysql2