# COuMIX

COuMIX website

## Run Locally

Build:

```
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll:pages \
  jekyll build
```

Serve:

```
docker run -dit --name my-apache-app -p 8080:80 -v "$PWD/_site:/usr/local/apache2/htdocs/" httpd:2.4
```


---

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/hoconomnom/hoconomnom/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/hoconomnom/hoconomnom/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
