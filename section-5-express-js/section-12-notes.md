# Working with NoSQL & Using MongoDB

## What is MongoDB
- Humongous, because it can store lots and lots of data
- Schemaless
- JSON (BSON) Data Format

## Relations - Options

## Setting Up MongoDB
### Inatalling MongoDB Driver
npm install --save mongodb

## Summary
### NoSQL / MoongoDB
- Alternative to SQL databases
- No strict schema, fewer relations.
- You can of course use schemas and reference-based relations but you got more flexibility.
- Often, relations are also created by embedding other documents/data.

### Working with MongoDB
- Use the official MongoDB Driver.
- Commands like insertOne(), find(), updateOne() and deleteOne() make CRUD-operations very simple.
- Check the official docs to learn about all available operations + configurations / operators.
- All operations are promise-based, hence you can easily chain them for more complex flows.

### Useful resource:

MongoDB Official Docs: https://docs.mongodb.com/manual/core/security-encryption-at-rest/https://docs.mongodb.com/manual/

SQL vs NoSQL: https://academind.com/learn/web-dev/sql-vs-nosql/

Learn more about MongoDB: https://academind.com/learn/mongodb