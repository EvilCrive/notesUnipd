# 9 Novembre 2022

## Distributed System

dht, fast - O(logn). low frequency insertion (not true) + stop search during each insertion (not feasible). We must accept some false failures in search. Perform parallel checking on FTs (finger tables) in a random way. 

n.join(n')
  predecessor <- null
  successor <- n.find_successor(n)      //search

n.stabilize()
  x <- successor.predecessor
  if (x e (n, successor))
    successor <- x
  successor.notify(n)

n.notify(n')
  if (predecessor is NULL || n' e (predecessor, n))
    predecessor <- n'

n.fix_fingers()
  i <- random[0, m-1]
  finger[i].node <- find_successor(finger[i].start)     //search

node failures disconnect from the ring. 
Challenge: 1) dht is more than a ring (there are some additional links, that help with robustness) 2) robust wrt single failures.
  3) routing via FTs reaches the most part of resource(s).  

To fix single failures we need another table per node, other than FTs, with the next m portions of rings.

## Computational genomics

alfa maximum value of error. on the right of the table we have the degree of freedom, on the top the probablility, and it give the values underlying a right tail of amount p, muste be greater than that value.power of student t test is the ability to see the true positivies.
Not all tests have the same ability to reject null hyposthesis when false.
good def on variable y and a proper descrpition of its distribution under the null hypothesis.

variants of t-test

using this other test that use the information of negative binomial, that wilcoxon doesnt use.

huge amount of points under null hyp.

## Learning from Networks

i need to be able to compute the measures of the random network and compare our observation to its. distribution of that measure in random networks of similar size/features. we use statistical hypothesis testing for assessing significance. (random graph). e.g.: does number of edges explain the value of cc(v) (our measured feature).
mygraph G is a random graph as well. (one of the graphh that can be generated randomly).
try to relate something about H0 being true or not. we need a way to assess (QUANTITATIVELY) how likely is it that the feature value f arises when H0 is true. can use z-score or p-value.
z-score is = f-E[X_f]/sigma(X_f). with f the feature value of feature F and X_f is a r.v. with value of feature F when the null hypothesis H0 is
  true. My observation is larger than the expectation by z-score standard-deviations.
p-value is the probability of observing a value for F at least as extreme as f when H0 is true. ("at least as extreme" depends on feature and
  situation, e.g.: >= or <= usually). if p-value is small, its unlikely that the observed value f is obtained when H0 is true. H0 should be 
  rejected, since p-value doesnt tell me how likely is it for H0 to be true.
  p-value of H0 : p(H0) = P[X_f at least as extreme as f| H0 is true]
Using p-value for random graphs, we use permutation testing.
rejection rule -> probability of a false positive is at most alfa (P[H0 rejected|H0 true] <= alfa) or type I error. no guarantees on false negatives 
  (H0 is not true but H1 isnt rejected, type II error).
In graph G (4,4) we have (6 4) (6 choose 4) graphs = 15, each of them has probability 1/15 to be chosen. G(4,p), p is a vector of value belonging to 
  [0,1] for each edge, indicating the probability that our edge is present -> 2^6 graphs. (6 are the edges, 2 because its either present or not).
  E[m(n,p)] = (n choose 2)*p. G(n,m) vs G(n,p): related, the difference is in G(n,p), p is basically m in expectation, especially similar with p = m/(n choose 2). not identical but really similar (with same properties). G(n,p) preferred for easier results. Calculating p-value and z-score is a pain (dependencies between triangles.
