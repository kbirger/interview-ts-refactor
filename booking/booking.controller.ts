import { AdapterFactory, Request } from './external.interfaces'
export class BookingController {
  private readonly adapterFactory: AdapterFactory;
  
  getBookings(request: Request) {
    const adapter = this.adapterFactory.getAdapter(request);
    let { start, take} = request.params;

    if(adapter.name === 'AlphaAdapter') { 
      
      // alpha has base-1 indexing
      start = start + 1;
      take = take;
    }
    return adapter.getBookings(request, { start, take});
  }

  getBooking(request: Request) {
    const adapter = this.adapterFactory.getAdapter(request);
    const { id } = request.params;

    return adapter.getBooking(request, id);
  }

  async createBooking(request: Request) {
    const adapter = this.adapterFactory.getAdapter(request);
    const data = request.body;

    await adapter.createBooking(request, data);

    if (adapter.getNotificationEmail) {
      const email = await adapter.getNotificationEmail(request);
      await adapter.sendNotification(request, email);
    }
  }
}