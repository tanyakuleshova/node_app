import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ticketfuncs/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
