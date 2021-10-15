import { Subjects, Publisher, OrderCancelledEvent } from '@ticketfuncs/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
