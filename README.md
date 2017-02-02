## My hugo blog theme

### Installation

Firstly clone the theme repository to hugo themes folder.

```bash
    git clone https://github.com/rtgnx/hugo-blog-theme ./hugo-site/themes/rtgnx
```

Then run *Makefile* to build sass and js (NodeJS and NPM are required)

```bash
    cd ./hugo-stie/themes/rtgnx
    make
```

### Config

```toml
    baseurl = "https://<your-site/"
    languageCode = "en-gb"
    title = ""
    theme = "rtgnx"

    [params]
        DateFormat = "2 Jan 2006"
        description = ""
        twitterName = ""
        keybaseName = ""
        githubName = ""
```
