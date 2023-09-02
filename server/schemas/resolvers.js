const { AuthenticationError } = require('apollo-server-express');
const { User, Post, NewFollow, Comment } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('posts');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('posts');
        },
        posts: async () => {
            return Post.find().sort({ createdAt: -1 });
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
    }
}

module.exports = resolvers