import { Publisher, OrderCreatedEvent, Subjects } from '@ticketfuncs/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
