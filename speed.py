import time

billion = 1000000000

count = 0
start_time = time.time()
for i in range(billion):
  count += 1
end_time = time.time()

print(f'Time taken: {end_time - start_time}')
