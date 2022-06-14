import { getModelForClass, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

enum ReservationStatus {
  PENDING = "pending",
  CANCELED = "canceled",
  COMPLETED = "completed",
}

class Reservation {
  @prop({ required: true })
  public name!: string;

  @prop()
  public phoneNumber?: string;

  @prop({ required: true, transform: (value: string) => new Date(value) })
  public arrivalAt!: Date;

  @prop({ required: true, default: ReservationStatus.PENDING })
  public status!: ReservationStatus;

  @prop({ required: true, default: new Date() })
  public createdAt!: Date;

  @prop({ required: true, default: new Date() })
  public updatedAt!: Date;

  @prop()
  public editedByEmployeeId?: Types.ObjectId;
}

const ReservationModel = getModelForClass(Reservation);

export { Reservation, ReservationModel };
