def smallest_missing_positive(nums):
  # First, we will add all the numbers in the range [1, len(nums)] to a set.
  # This will allow us to quickly check if a number is in the range without having to iterate through the entire array.
  num_set = set(range(1, len(nums) + 1))
  
  # Next, we will iterate through the array and remove any numbers that are in the range [1, len(nums)] from the set.
  for num in nums:
    if num in num_set:
      num_set.remove(num)
  
  # Finally, we will return the first number in the set. This will be the smallest missing positive number in the array.
  return min(num_set)

# Test the function
print(smallest_missing_positive([1, 2, 0]))  # Should print 3
print(smallest_missing_positive([-5]))       # Should print 1
print(smallest_missing_positive([2, 3, 4]))  # Should print 1
