import { getModelForClass, prop } from "@typegoose/typegoose";

export enum EmployeeRole {
    ADMIN = "admin",
}

class Employee {
  @prop({ required: true, unique: true })
  public name!: string;
  
  @prop({ required: true })
  public role!: EmployeeRole;
  
  @prop({ required: true })
  public password!: string;

  @prop({ required: true, default: new Date() })
  public createdAt!: Date;
}

const EmployeeModel = getModelForClass(Employee);

export { Employee, EmployeeModel };
