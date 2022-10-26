from bisect import bisect_left, bisect_right

arr = [3, 4, 4, 4, 5, 5, 6, 7, 7, 8, 9]

print(bisect_left(arr, 4))
print(bisect_right(arr, 4))
