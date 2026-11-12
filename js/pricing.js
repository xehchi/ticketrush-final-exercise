// מחירון TicketRush
const TICKET_PRICE = 350;       // ₪ לכרטיס
const SERVICE_FEE = 12;         // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;          // מקסימום כרטיסים להזמנה – לקוחה רגילה
const MAX_TICKETS_MEMBER = 4;   // מקסימום כרטיסים להזמנה – חברת מועדון
const MEMBER_DISCOUNT = 0.2;    // 20% הנחה – חברת מועדון
const STUDENT_DISCOUNT = 0.15;  // 15% הנחה – סטודנטית

function maxTickets(isMember) {
  return isMember ? MAX_TICKETS_MEMBER : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  if (qty < 1 || qty > maxTickets(isMember)) return null;
  // ההנחות לא מצטברות – רק הגדולה (20% לחברת מועדון)
  var discount = isMember ? MEMBER_DISCOUNT : (isStudent ? STUDENT_DISCOUNT : 0);
  var ticket = TICKET_PRICE * (1 - discount);
  // עמלת השירות אף פעם לא מקבלת הנחה
  return qty * (ticket + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MAX_TICKETS_MEMBER, MEMBER_DISCOUNT, STUDENT_DISCOUNT, maxTickets, calcTotal };
}
