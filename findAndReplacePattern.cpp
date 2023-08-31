#include <bits/stdc++.h>
using namespace std;

vector<string> findAndReplacePattern(vector<string>& words, string pattern) {
  vector<string> results;

  if(pattern.length() == 0) {
    vector<string> x = {};
    return x;
  }

  if(pattern.length() == 1) {
    for(auto word : words) {
      if(word.length() == 1) {
        results.push_back(word);
      }
    }
    return results;
  }

  bool match;
  for(auto word : words) {
    match = false;
    if(word.length() != pattern.length()) {
      continue;
    }
    unordered_map<char, char> m;
    for(int i = 0; i < word.length(); i++) {
      if(!m[pattern[i]] && (!m[word[i]] || m[word[i]] != '_')) {
        m[pattern[i]] = word[i];
        m[word[i]] = '_';
      } else {
        if(word[i] == m[pattern[i]]) {
          match = true;
        } else {
          match = false;
          break;
        }
      }
    }

    if(match) {
      results.push_back(word);
    }
  }

  return results;
}

int main() {
  // vector<string> words = {"abc","deq","mee","aqq","dkd","ccc"};
  vector<string> words = {"aa","bb","ab","cd"}; // tulatl
  string pattern;
  cout << "Enter pattern: ";
  cin >> pattern;
  auto result = findAndReplacePattern(words, pattern);

  for(auto x : result) {
    cout << x << " ";
  }

  return 0;
}