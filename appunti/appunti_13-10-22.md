
# Distributed Systems
Body of rest api contains payload. 

Servlet is a java concept.

REST standard use :
- GET
- POST
- PUT
- REPLACE

To create a deployable app application to manageprojects, build and dependency are used, such as :
- Maven
- Gradle
- Ants

For web APIs the deployable application is in .WAR format, that stands for Web ARchive.

Other tools are used :
- Version control system, like git or github or others
- Tomcat
- CI/CD
- Docker Images (separate business logic from database) (superpackage)

# Learning from Networks
- Graph analytics and network features
    1. node level features
        1. centralities
            - node scores that measure how central a node is in the network
            1. PageRank centrality
            1. Closeness
            1. Betweenness
        1. clustering coefficient
            - ego-networks
        1. graphlets
            - structure different from triangles(isomorphic connected)
                - wedge (end or middle of wedge)
            - graphlet degree vector
        - application of node-level features
            - we use them as a vector of node features, used then in a traditional machine learning pipeline
    1. graph-level features
        1. clustering coefficient
            - approximate and exact computation
        1. graphlet counts
        - application
            - to build a vector to represent the whole graph and then as input for ML to learn a prediction model
            - examples
                - protein seen as a graph (AA vertices)
                - population
                - prediction of molecular activity is positive or negative?
    1. network patterns and motifs
        - small patterns and graphlets may provide interesting information about a network
        - common analysis
        - p-value and statistically significant
    1. Embedding Nodes
        - nodes in the similar cluster tend to be closer together    
            - goal is to encode nodes so that similarity in the enmbedding space should approximate similarity in original networks
        - useful frameword in the encoder-decoder approach, jointly optimize them
        - example : random walk-based approach

        - graph neural networks (GNNs)
            - deep embeddings
                - key idea: generate node embeddings based on local network neighborhoods
                - 2/3 layers
            - applications
                - polypharmacy side effect
                    - predict side effects of multiple drugs taken together
                    - heterogenous graphs
                    - Decagon, starts to have enough accuracy(0.8 - 0.87) to be used in real-world scenario
        - Graph clustering
            - spectral clustering
    1. Advanced topics
	1. temporal patterns
	1. analysis of uncertain graphs          
- Project proposal example

# Advanced Algorithm Design
Exercise
- 1-complementary languages
    - Given $L^c$ = {0,1}* - L. Prove that $\forall$ L $\subseteq$ {0,1}*. 
    - (L $\in$ NPC) and ($L^c \in$ NP) => $L^c \in$ NPC
    - Hp1: L $\in$ NPC: (L $\in$ NP) $\cap (\forall$ L)
    - Hp2:
    - Hp3:
    - reduce npc language to np
    1. Corollary:
        - given L, L' => if L $<_p$ L' $< = > L^c < L'^c$

Co-NP : L s.t. L^c subset of NP, prove that
1. (P subest of NP)  intersect (co-NP)
1. (NPC) intersect (co-NP) = 0 (empty set)

Exercise
- Definition: Dominated set V' $\subseteq$ V is s.t. 

    $\forall s \in V: (v \in V') v (\exist \{u,v\} \in E: u \in V')$
    
    - a node is either in the dominated set or adjacent to a node in the dominated set 
    - not a vertex cover

- VC $<_p$ DS 
    - domination set
    - vertex cover