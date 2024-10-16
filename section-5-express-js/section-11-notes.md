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