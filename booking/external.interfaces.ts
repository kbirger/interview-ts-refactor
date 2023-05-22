export interface Booking extends BookingData {
  id: string | number;
}

export interface CreateBooking extends BookingData {}

export interface UpdateBooking extends Partial<Booking> {
  status: string;
}

export interface BookingAdapter {
  name: string;
  createBooking(request: Request, data: CreateBooking): Promise<void>;
  updateBooking(request: Request, data: UpdateBooking): Promise<void>;
  getBookings(request: Request, paginationOptions: PaginationOptions): Promise<Paginated<Booking>>;
  getBooking(request: Request, id: string | number): Promise<Booking>;

  // notifications feature added much later, so not all adapters implement these
  getNotificationEmail?(request: Request);
  sendNotification?(request: Request, email: string);
}

export interface BookingData {
  createdAt: Date;
  createdBy: string;
  from: Date;
  to: Date;
  resourceUuid: string;
  resourceId: string | number;
}

/**
 * A request from some application framework
 */
export type Request = any;

export interface Paginated<T> {
  data: T[];
  total: number;
  count: number;
  start: number;
}

export interface AdapterFactory {
  getAdapter(request: Request): BookingAdapter;
}

export interface PaginationOptions {
  start: number;
  take: number;
}
