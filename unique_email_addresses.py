class Solution(object):
    def numUniqueEmails(self, emails):
        """
        :type emails: List[str]
        :rtype: int
        """
        valid_emails = set()
        for email in emails:
            valid_emails.add(self.get_valid_form(email))
        return len(valid_emails)

    def get_valid_form(self, email):
        valid = ''
        local, domain = email.split('@')
        for ch in local:
          if ch == '.':
            continue
          if ch == '+':
            break
          valid += ch
        valid += '@' + domain
        return valid


s = Solution()
# emails = input()
print(s.numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]))
