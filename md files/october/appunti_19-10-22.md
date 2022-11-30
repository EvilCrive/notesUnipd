# 19-10-2022

## Distributed systems

callback is the main architecture for event based architecture

client server issues (C-S is N:1 (many to one/few)) :
1. messages problem
    - message lost
		- client C <- message M
		- semantics
	- wrong order
    - corrupted messages
		- are a problem
		- not this layer problem (either data layer, physical layer or tcp/ip) 
	- wrong destination

2. unavaiability of clients
    1. crashes (host problem)
		- final
    2. unreachable (net problem)
		- arbitrary failures (failures that can occur and disappear)
    - we need a mechanism to let S understand that C is not ON anymore
		- ack (acknowledgement) on low frequency
3. server S needs to know a list of Ci
    - multiple objects tends to different client
	- data structure with some essential methods (in server)
		1. insertion
		1. deletion
		1. search 
	- interface
		1. register()
		1. unregister()
    - multiple clients: 
		1. $C_i,j$
		1. $C_i,j,th$
		- Decoupling

## Algorithms

Vertex cover approx algorithms

ILP

## Learning from networks
### Statistic :
 
Computer engineer:
 - AI: 30
 - WIDE: 1
 - HPC & BD : 15
 - BIOINF : 4

Cybersecurity: 1 (julio)
Data science : 2
Erasmus : 4
Control Systems Engineer : 3
ICT : 1

### Node graph -scores
- degree(v) (2m -> n+m)
- measure centrality
	- closeness centrality
		- Intuition: node is "fairly" close to the other nodes in the network
		- G is connected (to simplify measure) (distance between 2 nodes in different connected components is infinite)
		- inverse of (avg distance of v to the other nodes in the graph) 
		- distance :
			- unweighted, number of edges in a shortest path between u and v
			- weighted, minimum length of a path between u and v (where path's length is sum of weights of edges)
				- (check dijkstra algorithm for sssp)(complexity depends on how the priority queue is implemented)(O(m+n) -> O(m))
				- can use dynamic programming
				- all pairs shortest paths (APSP) - Floyd-Warshall algorithms -> O(n^3) (not useful)
				                            	  - Johnson's algorithm
			- interested in approximations for large netowrks (idc of exact algorithms)
				- pick a subset of u_i's and calculate bfs from v1 and all u selected (not all, just k terms, with k <= |U|)
					- in practice you do BFS for the k vertices
				- refactor scale 
				- based on k value, we get diff aprox level
				- eppstein-wang algorithm
				- in expectation its the exact value
				