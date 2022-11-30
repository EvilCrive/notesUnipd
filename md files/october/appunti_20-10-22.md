# 20-10-2022

## Distributed Systems

## Learning from Networks

- proof of expectation is equal to true value
    - PROOF:

        let Xi be r.v. whose value is d(v,vi)*(n/(n-1))

        This 1/c(v) = 1/k * sum(Xi) -> expectation(1/c(v)) = E[1/k * sum(Xi)] = 1/k * sum(E(Xi))
    
        E(Xi) is k*d(v,vi) -> since in iteration i, we pick v_i uniformly at random from V, it has probability 1/n to be picked
        
        therefore, foreach i :  1<= i <= k --> E(Xi) = 1/n * ((d(1,v)*n/n-1)+ d(1,v)n/n-1 + d(2,v)n/n-1 + ... + d(n,v)n/n-1) 
    
       E(Xi) = 1/(n-1) * sum(d(v,u)) => E[1/c(v) ] = 1/k * sum(E(Xi)) = k/k * 1/n-1 * sum(d(v,u)) = 1/c(v)

- prove that estimates are close to expectations if k is large enough
    - hoeffding's inequality (probability that expectation of average is far from the actual average)
    - diameter of a graph - maximum distance of a pair of vertices of G (given all pairs)
    - PROP, formula to determine k (based on n, epsilon and delta - confidence probability)
        - Milgram's experiment - diameter of G is log(n)
            - six degree of separation (small world phenomenon)
        - PROOF
        
            consider v, let Xi r.v. with E(1/c(v)) = 1/c(v)
            
            0 <= Xi <= diameter(G)*(n/n-1), we can apply Hoeffding's inequality now ->
            
            (|$E(1/c(v)) - 1/c(v)| > epsilon_h$) <= confidencePr/n

            $\forall$ v : $U E_v$ $\leq$ delta 

            1 - P[*] $\geq$ 1 - $\delta$

- approximation algorithms are preferred in big data application
    - usually big datas are noisy and/or partial
    - exact algorithms take too much time with the millions or billions instances of data
- Chechik-Cohen-Kaplan
    - poisson sampling

- closeness centrality doesnt care of importance, but more of interconnectivity

## Algorithms

- prove at home that constraint is redundant ($x_u \leq 1$) in LP rounding (linear programming)

- traveling salesman problem (salesperson) (TSP)(not politial correct [kek ])
    - decision version
        - is there a hamiltonian cycle (tour)
        - minimization problem
        - homework : find the exact number of tours 
            ((n-1)!/2)
        - find tour of cost C($\gamma$)
    - reduction to hamilton
        
        Instance of hamilton is a arbitrary undirected graph G, reduction is :

        G -> f -> G',c,k
    - two interesting results
        - inapproximability result of general TSP ($\rho$(|v|)-approximation)
        - good approximation of TSP (metric cost function, metric TSP or triangle TSP)
            - 2approx is based on MST (minimum spanning tree)
            - 3/2 approx based on MST and min-cost matching (christofides' algorithm)