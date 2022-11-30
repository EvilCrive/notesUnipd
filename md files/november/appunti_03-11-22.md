# 03 November 2022

## Distibuted Systems

design principle n.1 : Scalability (vertical and horizontal). Distributed filesystem, from a user point of view is just a regular file system, but behind the scenes files are divided in different blocks, e.g. HDFS. 

Architecture for big data: layers with ditributed file system (HDFS), resource manager (yarn), engine and application. 
Map reduce was first programming paradigm in distributed system. To reduce replication of nodes, to get only 1 replica of one resource. Each node runs map code locally, then we have an hidden phase called shuffling, which is moving replicas to a single node (containing many replicas).
HIVE is a SQL interface for map reduce (e.g. select user.country, count(*) from table group by user.country). From the sql developer point of view, he doesnt care its distributed, since the sql operations are the same,behind the scene tho...

An example of map reduce paradigm: word count.
Word count, suppose we have set of documents, e.g. "Hello Mike", "Hello my dear", "My doc is here", "You cute". <hello,1> <mike,1> <hello,1> <my,1>... <hello,1> etc... map between token and integer (MAP PHASE).
we "merge" pairs with same values and increase the count (REDUCE PHASE): <hello,3> <mike,1> <my,1>. 

We can run apache spark on kubernetes, other file systems for distributed system is s3, cassandra and others... functional programming languages are other programming languages e.g. scala

## Learning from Networks

Pr(u,v,z is a triangle) = cc(G)
3!(n 3) because 3! is the possibility of having 3 nodes in different order e.g abc, acb, cab,... while (n 3) is the binomial coefficient n over 3, that gives all possible triple of nodes (on n nodes)
