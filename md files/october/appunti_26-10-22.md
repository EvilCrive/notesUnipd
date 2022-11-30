# 26 - 10 - 2022

## Distributed Systems

### Recap

lookup. namespace for nodes: [0 2^m]. namespace for resources: [0, 2^m -1]. n<< r<< 2^m, a node with id n (bar) has all resources.

The challenge for today is: devise an algorithm for lookup activity (given a well defined network, ring). Lookup activity : search for resource r starting from a node P.

Finger table (finger mean pointers). if r $\in$ p then OK, else "forward the request to a new node".

Insert node now: n node with FT each -> n+1 nodes with FT each.
succ(p+2^i), entry in FT, is the node >= his argument.
1. phantom search for positioning n 
2. link n to predecessor and successor
3. m phantom search for computing FT of n
4. n*m phantom search to recompile FT
5. move some resources to n

