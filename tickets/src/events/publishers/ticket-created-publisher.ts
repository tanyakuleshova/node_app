import {Publisher, Subjects, TicketCreatedEvent } from "@ticketfuncs/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    readonly subject = Subjects.TicketCreated;
}