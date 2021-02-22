def solution(s):
    answer = ''
    lst = list(s)
    print(lst)
    lst.sort(reverse=True)
    print(lst)
    answer = ''.join(lst)
    return answer