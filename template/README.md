## BATCHING IN REACT ##

In both the cases this behaviour is happening due to the batching concept in React, 

## FIRST CASE ##
In 1st Case, as we update state by clicking the button, and it is visbile on display that we got a new state, but when we console we still go to see the previous value, 

As after updating the state, the react re - render the react component, to reflect the new state, but this re - render does not happens right away. As it is scheduled and manage by react reconciliation and it pending for upadte later. This batching is done in react for performance optimization.


## SECOND CASE ##

In 2nd case, as we are calling the setcount for 3 times, but still, we see our count to be increment by one only, because of batching in React.

How batching affect in this that, when three setcounts are called then the initial state for all the three are same because of batching their states are not beign updated rightway, due to which starting point of all three are same, and that's why we see only incerement of 1.


###  SOLUTION  ###

To overcome this asynchoronus case of setcount we can use functional form of updater  function. 

----> setCount((prevValue) => prevValue + 1);

by the use of this we can overcome this batching and this will let our states to implement immediately. 




