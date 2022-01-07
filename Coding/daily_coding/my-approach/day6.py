# https://www.hackerrank.com/challenges/sparse-arrays/
# https://www.freecodecamp.org/news/sparse-and-dense-arrays-in-javascript/

def matchingStrings(strings, queries):
    # Write your code here
    answers = []
    for query in queries:
        answers.append(strings.count(query))
    return answers