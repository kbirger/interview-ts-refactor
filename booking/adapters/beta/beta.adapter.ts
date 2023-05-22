import { Booking, BookingAdapter, CreateBooking, Paginated, PaginationOptions, Request, UpdateBooking } from '../../external.interfaces';
import { BetaClient } from './beta.client';

export class BetaAdapter implements BookingAdapter {
  name: 'BetaAdapter';
  
  // type excluded for brevity
  private db: any;
  private client: BetaClient;

  async createBooking(request: Request,data: CreateBooking): Promise<void> {
    await this.client.createBooking(data);
  }

  updateBooking(request: Request, data: UpdateBooking) {
    return this.client.updateBooking(data);
  }
  
  async getBookings(request: Request, paginationOptions: PaginationOptions): Promise<Paginated<Booking>> {
    const result = await this.client.getBookings(paginationOptions);
    return {
      data: result.data,
      total: result.total,
      count: result.count,
      start: paginationOptions.start
    } 
  }
  getBooking(request: Request, id: string | number): Promise<Booking> {
    return this.client.getBooking(String(id));
  }

  private createNotification() {
    return 'a notification';
  }
  
}
