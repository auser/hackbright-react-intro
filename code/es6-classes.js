class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  fullName() {
    return this.first + ' ' + this.last;
  }
}