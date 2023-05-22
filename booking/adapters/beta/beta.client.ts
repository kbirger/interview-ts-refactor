import { Booking, CreateBooking, PaginationOptions, UpdateBooking } from "../../external.interfaces";

export interface BetaBookingsResponse {
  data: Booking[],
  total: number;
  count: number,
}

/**
 * Wrapper for the Beta API. Each method makes HTTP request to third party service. Non-2XX responses throw an error.
 */
export class BetaClient {
  getBookings(paginationOptions: PaginationOptions): Promise<BetaBookingsResponse> {
    throw new Error('Method not implemented.');
  }

  getBooking(id: string): Promise<Booking> {
    throw new Error('Method not implemented.');
  }

  createBooking(data: CreateBooking): Promise<void> {
    throw new Error('Method not implemented.');
  }

  updateBooking(data: UpdateBooking): Promise<void> {
    throw new Error('Method not implemented.');
  }
}