# CookieJar

Download browser cookies from Chrome in the Netscape format.

The Netscape format for cookies is described as follows:
```
<domain>    <include-subdomains>    <path>    <secure>    <expiration-date>    <name>    <value>
```
Note: Each value is separated by a single tab (`\t`) character.

| Placeholder | Description | Example Value |
| ----------- | ----------- | ------------- |
| domain | Domain that issued the cookie. | .github.com
| include-subdomains | Whether or not all machines within a given domain can access it. | FALSE
| path | Path on the domain indicating where the cookie is valid. | /
| secure | If the cookie was sent/received over HTTPS. | TRUE
| expiration-date | When the cookie expires in UNIX time. | 1462299218
| name | Name of the issued cookie. | wom
| value | Value of the issued cookie. | bat

You can read more about the Netscape format at the links below:
- [HTTP Cookies (curl.se)](https://curl.se/docs/http-cookies.html)
- [Format of cookies when using wget (StackExchange)](https://unix.stackexchange.com/questions/36531/format-of-cookies-when-using-wget/210282)
