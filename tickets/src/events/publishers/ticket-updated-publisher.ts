import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketfuncs/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
