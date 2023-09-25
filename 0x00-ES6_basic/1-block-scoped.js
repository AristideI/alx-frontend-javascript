
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = false;
    task = true;
   
  }

  return [task, task2];
}

