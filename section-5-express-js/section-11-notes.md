# Understanding Sequilize
## What is Sequilize?
An Object Relation Mapping Library

## Core Concepts
- Models --> e.q. User, Product
- Intances --> const user = User.build()
- Queries --> User.findAll()
- Associations --> User.hasMany(Product)

## Install Sequilize
npm install --save sequelize

Sequilize need mysql2

## Must Read
findById() in Sequelize 5
One quick note:

With Sequelize v5, findById() (which we'll use in this course) was replaced by findByPk().

You use it in the same way, so you can simply replace all occurrences of findById() with findByPk()

## Summary
### SQL
- SQL uses strict data schemas and relations
- You can connect your Node.js app via packages like mysql2
- Writting SQL queries is not directly related to Node.js and somethiing you have to learn in addition to Node.js

### Sequelize
- Instead of writting SQL queries manually, you can use packages (ORMs) like Sequelize to focus on the Node.js code and work with native JS object.
- Sequelize allows you define models and interact with database through them.
- You can also easily set up relations ("Associations") and interact with your related models through them.

## Useful resource:

Sequelize Official Docs: http://docs.sequelizejs.com/