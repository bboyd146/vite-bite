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
        all_posts: async () => {
            return Post.find().sort({ createdAt: -1 });
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('posts');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    }
}

module.exports = resolvers