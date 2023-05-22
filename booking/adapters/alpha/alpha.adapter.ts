import { Booking, BookingAdapter, CreateBooking, Paginated, PaginationOptions, Request, UpdateBooking } from '../../external.interfaces';
import { AlphaClient } from './alpha.client';

export class AlphaAdapter implements BookingAdapter {
  name: 'AlphaAdapter';
  
  // type excluded for brevity
  private db: any;
  private emailService: any;
  private client: AlphaClient;

  getNotificationEmail?(request: Request): Promise<string> {
    return this.db.getEmail(request.user.email);
  }

  sendNotification?(request: Request, email: string): Promise<void> {
    return this.emailService.send(email, this.createNotification());
  }

  async createBooking(request: Request,data: CreateBooking): Promise<void> {
    await this.client.createBooking(data);
  }

  updateBooking(request: Request, data: UpdateBooking) {
    return this.client.updateBooking(data);
  }
  async getBookings(request: Request, paginationOptions: PaginationOptions): Promise<Paginated<Booking>> {
    const data = await this.client.getBookings(paginationOptions);
    
    return {
      data: data.bookings,
      total: data.total,
      count: data.bookings.length,
      start: paginationOptions.start
    }
  }
  getBooking(request: Request, id: string | number) {
    return this.client.getBooking(id as number);
  }

  private createNotification() {
    return 'a notification';
  }
  
}
