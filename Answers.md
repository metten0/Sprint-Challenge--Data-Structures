## Question Responses
1. What are the order of insertions/removals for the following data structures?
   - **Stack**
   _First In Last Out (FILO)_ 
   A stack class will have two primary operations:
        **push** -- adds an item onto the top of the stack
        **pop** -- removes the top item from the stack
   - **Queue**
   _First In First Out (FIFO)_
   A queue class will have two primary operations:
        **enqueue** -- adds an item into the queue (i.e. at the back of the line)
        **dequeue** -- removes an item from the queue (i.e. from the front of the line).

2. What is the retrieval time complexity for the following data structures?
   - **Linked List** - Search retrieval in a linked list is O(n).
   - **Hash Table** - Search retrieval in a hash table is O(n).
   - **Binary Search Trees** - Search retrieval in a binary search tree is O(n).
3. What are some advantages to using a Hash Table over an array in JavaScript?
    **Speed** - using a hash table, one could conceivably look up and insert information in one operation (O(1)), regardless of the size of the data structure.