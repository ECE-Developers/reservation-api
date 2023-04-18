export interface ReservationRepositoryInterface {
  getReservations(date: string);
  deleteReservation(userId: number);
  getUserOne(userId: number);
  getReservationMany(userId: number);
}
