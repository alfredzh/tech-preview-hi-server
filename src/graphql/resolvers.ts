import { EmployeeModel } from "../models/employee";
import { ReservationModel } from "../models/reservation";
import * as CryptoJS from "crypto-js";
import * as jwt from "jsonwebtoken";

const resolvers = {
  Query: {
    employees: async () => {
      const employees = await EmployeeModel.find();
      return employees;
    },
    reservations: async () => {
      const reservations = await ReservationModel.find();
      return reservations;
    },
    login: async (
      parent: unknown,
      args: { username: string; password: string }
    ) => {
      const id = await EmployeeModel.findOne({
        name: args.username,
        password: CryptoJS.SHA1(`${args.password}IM_SALT`).toString(),
      });

      if (id) {
        const token = jwt.sign({ employeeId: id.toString() }, "Temp key");
        return token;
      }
    },
  },
  Mutation: {
    createReservation: async (
      parent: unknown,
      args: { name: string; phoneNumber: string; arrivalAt: string }
    ) => {
      const reservationId = await ReservationModel.create({
        name: args.name,
        phoneNumber: args.phoneNumber,
        arrivalAt: args.arrivalAt,
      });
      return reservationId.toString();
    },
    updateReservation: async (
      parent: unknown,
      args: {
        id: string;
        name: string;
        phoneNumber: string;
        arrivalAt: string;
        status: string;
      }
    ) => {
      const res = await ReservationModel.updateOne(
        {
          _id: args.id,
        },
        {
          status: args.status,
        }
      );
      
      if (res.modifiedCount) {
        return args.id
      }
    },
  },
};

export { resolvers };
