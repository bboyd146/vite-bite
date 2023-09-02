const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bio: String
        followers: [User]
        following: [User]
    }
    type Comment {
        _id: ID
        content: String
        author: User
        post: Post
        likes: [User]
        initialComment: Comment
        createdAt: String
    }
    type NewFollow {
        _id: ID
        sender: User
        receiver: User
        status: String
        createdAt: String
    }
    type Post {
        _id: ID
        content: String
        author: User
        likes: [User]
        re_post: [User]
    }

    type Query {
    user: User
    users: [User]
    posts: [Post]!
    post(postId: ID!): Post
    }
`

module.exports = typeDefs