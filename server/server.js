const express = require('express')
const path = require('path')
const { ApolloServer } = require('apollo-server-express');
const PORT = process.env.PORT || 3001;
const app = express()
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
