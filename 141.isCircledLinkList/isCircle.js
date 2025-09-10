function isCircle (head) {

  let cur = head;
  const seen = new Set();

  while (cur) {
    if (seen.has(cur)) return true;

    seen.add(cur);
    cur = cur.next;
  }

  return false;
}

function isValidCircle (head) {
  const seen = new Set();
  let cur = head
  while (head) {
    if (seen.has(cur)) return true;

    seen.add(cur);
    cur = cur.next;
  }

  return false;
}

function isListACircle (list) {
  const seen = new Set();

  let cur = list;

  while (cur) {
    if (seen.has(cur)) {
      return true;
    }
    seen.add(cur);
    cur = cur.next
  }

  return false;
}

function isValidCircle (list) {
  const seen = new Set();

  let cur = list;

  while (cur) {
    if (seen.has(cur)) {
      return true;
    }
    seen.add(cur);
    cur = cur.next
  }

  return false;
}