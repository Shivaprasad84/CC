def is_anagram(s, t):
  if len(s) != len(t):
    return False
  hm1 = dict()
  hm2 = dict()

  for i in range(len(s)):
    hm1[s[i]] = hm1.get(s[i], 0) + 1
    hm2[t[i]] = hm2.get(t[i], 0) + 1

  for key in hm1.keys():
    if hm2.get(key, 0) != hm1[key]:
      return False

  return True

s1 = input('')
s2 = input('')
print(is_anagram(s1, s2))
print(is_anagram('anagram', 'gramana'))
print(is_anagram('rat', 'car'))
print(is_anagram('abcdefg', 'debcgfa'))
