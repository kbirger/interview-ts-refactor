import { Booking, CreateBooking, PaginationOptions, UpdateBooking } from "../../external.interfaces";

export interface AlphaBookingsResponse {
  bookings: Booking[],
  total: number;
}
/**
 * Wrapper for the Alpha API. Each method makes HTTP request to third party service. Non-2XX responses throw an error.
 */
export class AlphaClient {
  getBookings(paginationOptions: PaginationOptions): Promise<AlphaBookingsResponse> {
    throw new Error('Method not implemented.');
  }

  getBooking(id: number): Promise<Booking> {
    throw new Error('Method not implemented.');
  }

  createBooking(data: CreateBooking): Promise<void> {
    throw new Error('Method not implemented.');
  }

  updateBooking(data: UpdateBooking): Promise<void> {
    throw new Error('Method not implemented.');
  }
}