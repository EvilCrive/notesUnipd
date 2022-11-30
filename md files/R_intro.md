# SKSKKSKSKS

pag.60
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
  - \>
  - <
  - \>=
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
    - data
    - nrow
    - ncol (default ncol=1)
    - byrow
    - dimnames
- Can transform from vector to matrix and viceversa
  - as.matrix()
  - as.vector()
- Indexing a matrix 
  - square brackets with 2 indexes (normal, negative, subsets)
    - M[1,2]
    - can do without one index, meaning all the indexes for that dimension
      - M[,1] means all rows and col = 1
      - M[1,] means row = 1 and all cols 
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
- create list
  - list()
- indexing list
  - double square brackets: [[]]
  - normal single square brackets
- naming element of list
  - either during initializing: u put name= before the element, and instead of name, the name you want to give
  - or with the function names() that want as parameter the list object
    - names(L) gives the set of names for list L
    - you can insert values inside names(L), inserting a vector of strings, by doing so you name the elements inside the list
  - it is not necessary to name elements of list
- it is possible to access the list by name (e.g we want to access the element with name "pippo" in list L => "L$pippo" access it) 
## 3.4. data.frame
- a 2d array to represent data of different nature (e.g numbers and strings)
- can be converted to matrix using "data.matrix()"
 - be careful for conversion of strings to numbers
- create a data.frame
  - data.frame()
    - as for the parameters there are many options:
      1. many vectors (used as column vectors)
      1. many matrices (concatenated column-wise, so on the right)
      1. one matrix (data.frame with same elements type)
      1. one vector or many numbers (1d data.frame)
- naming data.frame variables
  - names()
  - row.names()
- accessing data.frame objects
  - same as matrices -> df[2,4]
  - also columns can be accessed with $and name -> df$age (if there is a column named age)
- insert data.frame values/elements
  - the $ operator can also be used to insert a new variable to the data.frame
  - otherwise just use the square bracket to insert values
    - can insert rows, columns or just one elements
- functions on data.frame objects
  - mean(df$age) gives the mean of the column age, if elements are all numbers
    - mean(df) gives NA
- attributes()
  - gives the list of attributes of the object
  - row.names() colnames() names() dim() class() dimnames()
# 4. Importing and Exporting Data
## 4.1. Reading data 
- Reading data from file
  - read.table()
    - read a file (in table format) and create a data.frame
    - read.table(file, header = FALSE, sep = "", dec = ".")
      - file: name of file (with path if necessary)
      - header: if TRUE indicates that first line contains variable names (default is FALSE, unless if the first line of the file contains a value less than all the other lines)
      - sep: indicates how elements in file are separated(default is "", indicates any character between space, tab or new line)
      - dec: used decimal separator in the file (default ".")
      - colClasses : character vector indicating class of each column indata set (default is automatic conversion)
      - nrows: maximum number of rows to be read (default read until eof)
      - comment.char: commented character (default #)
      - skip: number of lines to skip from beginning (default 0)
      - stringsAsFactors: whether you want to encode character variables as factors (default #)
## 4.2. Writing data
  - write.table()
    - writes a matrix or dataframe into a file (table format)
    - write.table(x, file, sep, na, dec, row.names, col.names)
      - x is object to write from 
      - file is the name of the file (and if necessary path) (default is "")
      - sep is the character used as separator (default " ")
      - dec is character used as the decimal separator (default ".")
      - row.names is a vector of names of rows
        - possible value: TRUE, FALSE, vector of names (TRUE uses actual names of data.frame)(false says no names required)
      - col.names a vector of names of cols (TRUE, FALSE, vector of names)
## 4.3. CSV
- read.csv()
  - read.csv(file, header)
    - header can be either TRUE or FALSE
- write.csv()
  - write.csv(my.data, file, quote=FALSE, eol="", na="")
    - quote (TRUE means double quotes on chaacter or factor columns, or numerical vector as value for indices whose element will be quoted)
# 5. Control structures
## 5.1. If
- if-then
- if-else
- if-else if-else
## 5.2. Switch
- switch(expression, case1, case2,..., caseN)
- can have any number of cases
- if the expression gives result <1 or >(numbers of cases) => switch returns NULL
- example:
  - switch(x%%2+1, 'even', 'odd')
  - switch(a, foo={..}, bar ={..}, {})
    - unnamed element is default case
    - if the result of the expression is a string, you need cases named with the exactly same string as the result, in this example string "foo" or "bar"
 
## 5.3. Loops
- while 
- for
  - for(iterator in vector){...}
  - e.g.: for(i in (1:10)){...}
- repeat
  - similar to while
  - repeat{ ... if(condition) break;}
- next and break statements

# 6. Function
- set of statements organized to solve a task
- some pre-exist within R, others can be added with library (package) (by users)

## 6.1. Syntax
- name_function <- function(..) {...}
  - function is stored as an obj with this name
## 6.2. Parameters
- parameters are divided by comma
- can be optional
- can have default values
# 6.3. Return
- return()
  - return(data)
- it is better to return only once, at the end of the function (to avoid mistakes)
## 6.4. Invocation
- when calling a function, respect order of parameters or assign them by name
- within a function it is possible to call other functions 
# 7. Running and writing code
- Rstudio
  - SOURCE area
    - possible to write R commands and execute them by clicking on "Run"
    - it is possible to save a file of the commands in the source area    
    - can use the command source to run the code in a script, either from R cmd or from "Edit->Source"
      - variables and function are stored in the workspace
## 7.1. Saving/Loading Functions
- function can be written and saved (MUST)
- load them with source (source on save)
  - after I used source, I have to call the function by their name (not their file's name)
## 7.2. Packages  
- upload packages on RStudio
  - other functions can be used by loading packages into the workspace
    - click on the desired package to load it into the workspace or use "library(package_name)"
    - if the package is not already installed on the PC, click on "Install packages"
        - if the package isn't on the list use "setRepositories()"
- upload package in R
  - directly from command prompt (with source)
  - load it into the workspace: library(package_name)
  
# 8. Graphs and descriptors of the statistical sample
## 8.1 Graphs (plots)
- main functions to draw graphs :
  1. plot()
    - plot(x, y, type, col, pch, ylab, xlab, ylim)
      - type of graph are:
        1. "p" = points (default)
        1. "l" = lines
        1. "b" = both
      - col (colour in integer, default value is 1, 1 is black)
      - pch (default value is "o", character representing point)
      - ylab (label of y)
      - xlab (label of x)
      - ylim (axis range) 
  1. points()
    - points(x, y, col)
  1. lines()
    - lines(x, y, col)
- Legend for the plot
  - legend()
    - legend(x, y, legend, col, lty, pch, bty)
    - help(legend)
- Save graphs on files
  - pdf()
    - pdf("plot_fig1.pdf")
    - remember to close the file with "dev.off()"
  - png()
  - jpeg()
  - bmp()
  - tiff()
- par() for more graphs
## 8.2. Sample descriptors
- Measures for central tendency or position of sample
  - mean()
    - mean(..., trim=0.02)
  - median()
  - mode
- Measure of dispersion or variability of sample
  - var()
  - sd() 
    - standard deviation
  - variation coefficient : sd()/mean()
- Descriptor of sample distribution
  - histograms
    - hist()
    - density() 
      - plot(density()) 
      - lines(density())
  - boxplot()
  - quantiles
    - rnorm(N) (or qnorm, dnorm, pnorm)
      - N observation
    - quartiles
    - qqnorm()
    - qqplot(x, y, xlim, ylim)
      - abline(0, 1, col)
    - quantile()
      - plot(seq(0,1,0.01),quantile(x, probs=seq(0,1,0.01)))
# 9. Loop functions and debugging
## 9.1. Loop functions
- apply(M, 1, max)
  - allows to use functions on matrices rows or columns
  - second argument: 1 means by rows, 2 means by cols
  - M is matrix
  - max can be interchanged with other functions
- lapply(x, function)
  - applies the function on list x, on every element
  - can add a parameter "simplify=TRUE",that returns a vector or a matrix, if possible
- mapply(FUN, ...MoreArfs, SIMPLIFY)
  - multivariate version of apply() and sapply() 
- tapply()
  - apply FUN to a subset of X
- split(x, f, drop=FALSE)
## 9.2. Debug in R
- debug with cat()
- debug functions with "debug(function)"
  - "enter" for next instruction
  - "c + enter" for exit debug and continue execution
  - "Q + enter" for exiting function
  - "undebug(function)" to exit debugging mode
# 10. help(function)
- Other functions
  - readline()
  - cat()
  - as.numeric()
  - abline(0,1, col=2)
  - runif(N)
