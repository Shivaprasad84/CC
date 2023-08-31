#include <iostream>
#include <chrono>

using namespace std;

typedef long long int llint;

int main() {
  llint billion = 1000000000;
  llint count = 0;
  auto start = std::chrono::high_resolution_clock::now();
  for(llint i = 0; i < billion; i++) {
    count++;
  }
  auto end = std::chrono::high_resolution_clock::now();

  auto elapsedTime = std::chrono::duration_cast<std::chrono::seconds>(end - start);
  std::cout << "Elapsed time: " << elapsedTime.count() << " seconds" << std::endl;
  return 0;
}