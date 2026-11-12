// רשימת המתנה לכרטיסים שנגמרו
function joinWaitlist(list, email) {
  const clean = String(email).trim().toLowerCase();
  const at = clean.indexOf('@');
  const valid = at > 0 && clean.indexOf('.', at) > at + 1;

  // מערך חדש תמיד — גם כשלא מוסיפים
  const next = list.slice();
  if (!valid || next.includes(clean)) return next;
  next.push(clean);
  return next;
}

module.exports = { joinWaitlist };
