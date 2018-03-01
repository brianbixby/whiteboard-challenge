## Requirements
Create a function that accepts a linked list and a "find" value as it's input.  Your function should "find" the node value you passed it and should delete the node from the list.  Your list should remain interconnected after the removal.

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

removeNode(ll, 2);

// return the following:

{
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}
``` 