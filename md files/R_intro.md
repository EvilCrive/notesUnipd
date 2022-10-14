pag.45
https://www.youtube.com/watch?v=fDRa82lxzaU
- [1. Introduction to R](#1-introduction-to-r)
  - [1.1. Presentation and general notions](#11-presentation-and-general-notions)
  - [1.2. Very basic R](#12-very-basic-r)
- [2. Data types](#2-data-types)
- [3. Data Structures](#3-data-structures)
  - [3.1. vector](#31-vector)
  - [3.2. matrix](#32-matrix)
  - [3.3. list](#33-list)
  - [3.4. data.frame](#34-dataframe)
- [4. Importing and Exporting Data](#4-importing-and-exporting-data)
  - [4.1. Reading data](#41-reading-data)
  - [4.2. Writing data](#42-writing-data)
  - [4.3. CSV](#43-csv)
- [5. Control structures](#5-control-structures)
  - [5.1. If](#51-if)
  - [5.2. Switch](#52-switch)
  - [5.3. Loops](#53-loops)
- [6. Function](#6-function)
  - [6.1. Syntax](#61-syntax)
  - [6.2. Parameter](#62-parameter)
- [6.3. Return](#63-return)
  - [6.4. Invocation](#64-invocation)
- [7. Running and writing code](#7-running-and-writing-code)
  - [7.1. Saving and Loading Functions](#71-saving-and-loading-functions)
  - [7.2. Packages](#72-packages)
- [8. Graphs and descriptors of the statistical sample](#8-graphs-and-descriptors-of-the-statistical-sample)
  - [8.1. Plots](#81-plots)
  - [8.2. Population - Sample - Variable](#82-population---sample---variable)
  - [8.3. Sample descriptors](#83-sample-descriptors)
- [9. Loop functions and debugging](#9-loop-functions-and-debugging)
  - [9.1. Loop functions](#91-loop-functions)
  - [9.2. Debug in R](#92-debug-in-r)
  

# 1. Introduction to R
## 1.1. Presentation and general notions
- What is it?
  - interpreted metalanguage oriented to statistics (data analysis and bioinformatics)
- Why we use it?
  - bioinfornatics analysis packages, like bioconductor
- Useful links
- RStudio
  - areas
    1. source area
    2. console area
    3. workspace/history area
    4. utilities area
  - specify working directory
    - Tools/Session -> Set Working Directory -> Choose Directory
  - load workspace
    - Workspace/Session -> Load Workspace
- It's useful to save workspace and history from time to time
## 1.2. Very basic R
- Variable initialization
  - R doesn't need declaration of variable (interepreted language)
  - To initialize variable use either
    - =
    - <-
  - R is case-sensitive
  - variable names cannot contain special characters apart "." and "_"
- Arithmetic Operators  
  - \+
  - \-
  - \*
  - /
  - ^
  - %/% 
    - whole division
  - %%
    - integer remainder
  - main mathematical functions
    - sqrt()
    - sum()
    - prod()
    - mean()
    - median()
    - var()
    - sd() 
      - standard deviation
    - cv()
      - cross validation
    - min()
    - max()
    - sin()
    - cos()
    - log()
    - exp()
    - round()
    - ceiling()
    - floor()
    - sign()
- Instructions in R
  - semicolon arent necessary, can just start a new line
- Relational and logical operators
  - ==
  - >
  - <
  - >=
  - <=
  - !=
  - &
  - |
  - !
  - returns TRUE (T, in short form) or FALSE (F, in short)
  
# 2. Data types
- logical
- integer
- double 
  - real numbers
  - used if not specified if it's integer or real
- complex
- string 
  - or character
- raw 
  - vector containing bytes
- numeric  
  - used if not specified if it's real or complex
- NaN 
  - Not a Number
  - used for undefined mathematical operations
  - is.nan()
- NA 
  - Not Available
  - missing number
  - is.na()
  - A NaN is a NA, but a NA isn't a NaN
# 3. Data Structures
- intro
  - R is a OOP language 
  - It is possible to define new classes
  - is.matrix(), is.vector(), ... that returns T (or TRUE) or F (or FALSE)
## 3.1. vector
- 1d ordered collection of same type objects
- Create a vector
  - c()
    - as parameters the actual elements
  - vector()
    - as parameters
      1. mode (type, like "logical", "integer", etc...)
      2. length  
  - seq()
    - 3 parameters
      1. from (starting value)
      2. to (maximal end value)
      3. by (increment of sequence)
      - we can use length.out instead of by (desidered output length of sequence)
  - rep()
    - 2 parameters
      1. x (scalar or vector)
      2. times (number of times to repeat x)
- functions for vectors
  - length()
  - range()
    - min and max
  - sort()
    - 2 parameters
      1. v (the vector to sort)
      2. decreasing (give T or F, to decide order of sorting) 
  - factor()
    - encode vector as a categorical variable (a hashset more or less) 
- Indexing a vector
  - square brackets
    1. normal 
       - v[2]
    2. subsets 
      - v[c(3,6)]
    4. negative number 
       - v[-2]
       - v[c(-2,-9)] or v[-c(2,9)]
       - the corresponding element(s) is omitted from the resulting vector
## 3.2. matrix
- 2d collection
- Create a matrix
  - matrix()
    - nrow
    - ncol (default ncol=1)
- Can transform from vector to matrix and viceversa
  - as.matrix()
  - as.vector()
- Indexing a matrix 
  - square brackets (normal, negative, subsets)
- Extracting elements from a matrix  
  - relational operators
  - which()
    - gives the the indices of the values corresponding to TRUE
    - parameter: array.ind
      - if TRUE => u get indices of matrix of values TRUE
      - if FALSE => u get indices of equivalent vector of values TRUE
- Function for matrix
  - range(M)
    - min and max elements of M
  - length(M)
    - length of the equivalent vector of M
  - dim(M)
    - [rows, col] dimension of matrix M
  - diag(M)
    - returns the vector of elements in diagonal of M
  - t(M)
    - transpose of matrix M
  - solve(M)
    - inverse of matrix M
  - $M_1$ * $M_2$
    - product element per element
  - $M_1$ %*% $M_2$
    - matrix product
  - v * M
    - vector * matrix 
  - rbind(M1, M2)
    - row bind, concatenate it below
  - cbind(M1, M2)
    - column bind, concatenate it on the right
- coping with missing values (NA)
  - many functions, like max, min, sum,.. have a parameter "na.rm", if it's set to TRUE, omit those values before computation
## 3.3. list
- list are ordered collections of objects of different nature
- 
## 3.4. data.frame

# 4. Importing and Exporting Data
## 4.1. Reading data 
## 4.2. Writing data
## 4.3. CSV
- read.csv()
- write.csv()
- 
# 5. Control structures
## 5.1. If
## 5.2. Switch
## 5.3. Loops

# 6. Function
## 6.1. Syntax
## 6.2. Parameter
# 6.3. Return
## 6.4. Invocation

# 7. Running and writing code
## 7.1. Saving and Loading Functions
## 7.2. Packages
- install
- upload
  
# 8. Graphs and descriptors of the statistical sample
## 8.1. Plots
## 8.2. Population - Sample - Variable
## 8.3. Sample descriptors

# 9. Loop functions and debugging
## 9.1. Loop functions
## 9.2. Debug in R

