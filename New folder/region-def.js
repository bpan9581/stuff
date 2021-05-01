const { gql } = require('apollo-server');

const typeDefs = gql `
    type Region {
        _id: String
		id: Int
		owner: String
        map: Boolean
		sister: Int
        children: Int
        landmark: String
        capital: String
        leader: String
	}
    
    extend type Query {
		getAllRegions: [Region]
		getRegionById(_id: String): Region
	}

    extend type Mutation {}
`;

module.exports = { typeDefs: typeDefs }