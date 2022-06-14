import { gql } from "apollo-server";

const typeDefs = gql`
  type Employee {
    name: String
    role: String
    createdAt: String
  }

  type Reservation {
    id: String
    name: String
    status: String
    phoneNumber: String
    arrivalAt: String
    createdAt: String
  }

  type Query {
    employees: [Employee]
    reservations: [Reservation]
    login(username: String!, password: String!): String
  }

  type Mutation {
    createReservation(name: String!, phoneNumber: String!, arrivalAt: String!): ID
    updateReservation(id: ID!, name: String, phoneNumber: String, arrivalAt: String, status: String): ID
  }
`;

export { typeDefs };
