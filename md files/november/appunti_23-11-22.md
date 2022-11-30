# 23 November 2022

## Distributed Systems

maekawa's algorithm
election: start from a community of elements, all elements must partecipate and agreeing on election result; phase A and b

## Learning from network

shallow encoding.
similarity can be adjacency matrix, most of the embedding has as decoder the dot product of z\_u and z_v, \<zu,zv\>
loss least square loss (could use also cross entropy). similar to frobenius norm, two ways to solve: matrix decomposition and gradient descent. issues: computational cost, consider only direct connections as similar, we would like to capture indirect ones too.
extended-neighborhood, using jaccard-similarity (assume N(u)={u}U{v:{u,v}eE}), we use it instad of adjacency matrix, extended-neighborhoods: nodes within distance k from u, N_k(u) = {v:d(u,v)<=k}. we include the actual node into N(u) to have better similarity.
random walk approaches, probability that a random walk of length k starting from u visits v. (not symmetric)(here the aactual node is not art of its neighbour)


