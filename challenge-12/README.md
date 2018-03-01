## Requirements
Create a function that will accept a linked list as it's input.  Your function should return the linked list in a reversed order and each node should still being interconnected.

```javascript
// given the following:

const ll = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

reverseList(ll);

// return the following:

{
  val: 4,
  next: {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
  }
}
```