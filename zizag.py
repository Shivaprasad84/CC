row_counter = 0
col_counter = 0

def convert(s, n):
  arr = [[''] * 100 for i in range(100)]
  down_the_diagonal = True
  xyz = False
  for i in range(len(s)):
    if down_the_diagonal and row_counter < n:
      arr[row_counter][col_counter] = s[i]
      row_counter += 1
    elif down_the_diagonal and row_counter >= n:
      down_the_diagonal = False
      row_counter -= 2

    if not down_the_diagonal and row_counter >= 0:
      col_counter += 1
      arr[row_counter][col_counter] = s[i]
      row_counter -= 1
    elif not down_the_diagonal and row_counter < 0:
      down_the_diagonal = True

  for i in range(3):
    for j in range(7):
      print(arr[i][j], end=' ')
    print()
  return 'A'

s = 'PAYPALISHIRING'
convert(s, 3)