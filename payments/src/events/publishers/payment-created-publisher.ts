import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketfuncs/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
