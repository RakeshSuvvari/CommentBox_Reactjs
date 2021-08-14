# RateLimiter
The ratelimiter is build to accept arguments R and S followed by sequence of timestamps in ascending order.
where,
R: maximum number of requests allowed in sliding window
S: sliding window time period in seconds
Assuming R<=S, if R>S every request is always allowed.

## Environment used:
Operating System: Linux(Ubuntu 20.14LTS)
Compiler used: g++ (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0

## How to run:
Run the following Command
`g++ rate_limiter.cpp  -o ratelimiter`
followed by ./ratelimiter R S a1 a2 a3 . . . 

### Sample Testcases:

#### Sample1
##### input: (R<S)
./ratelimiter 3 5 2 6 8 10 100 256 789 1024 1642 4215 5025 633256 1628679347

##### output:
2 allowed
6 allowed
8 allowed
10 blocked
100 blocked
256 allowed
789 allowed
1024 allowed
1642 blocked
4215 blocked
5025 allowed
633256 allowed
1628679347 allowed

#### Sample2
##### input: (R=S)
./ratelimiter 6 6 2 5 8 9 12 23 45 56 78 89 123 456 789 3698 6987 9874 1789562

##### output:
2 allowed
5 allowed
8 allowed
9 allowed
12 allowed
23 allowed
45 allowed
56 allowed
78 allowed
89 allowed
123 allowed
456 allowed
789 allowed
3698 allowed
6987 allowed
9874 allowed
1789562 allowed
