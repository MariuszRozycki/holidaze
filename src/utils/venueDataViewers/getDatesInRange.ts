export function getDatesInRange(dayStart: Date, dayEnd: Date): Date[] {
  const arr: Date[] = [];
  const current = new Date(dayStart);

  while (current <= dayEnd) {
    arr.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return arr;
}
