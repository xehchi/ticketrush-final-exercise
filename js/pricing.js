// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;         // מקסימום כרטיסים להזמנה – לקוחה רגילה
const MAX_TICKETS_MEMBER = 4;  // מקסימום כרטיסים להזמנה – חברת מועדון
const MEMBER_DISCOUNT = 0.2;   // 20% הנחה על מחיר הכרטיס לחברת מועדון

function maxTickets(isMember) {
  return isMember ? MAX_TICKETS_MEMBER : MAX_TICKETS;
}

function calcTotal(qty, isMember) {
  if (qty < 1 || qty > maxTickets(isMember)) return null;
  const ticket = isMember ? TICKET_PRICE * (1 - MEMBER_DISCOUNT) : TICKET_PRICE;
  // עמלת השירות אינה מקבלת הנחה
  return qty * (ticket + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MAX_TICKETS_MEMBER, MEMBER_DISCOUNT, maxTickets, calcTotal };
}
