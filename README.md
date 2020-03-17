# DD BLOG
Data Driven Blog

## Basic Usage
To change posts

1. Download all files from "dist" folder
2. Open and edit ״posts.json״ with any text editor or https://jsoneditoronline.org/ tool.
3. Upload everything to your root folder.

Enjoy :)


## Json Structure
All posts are generated from this data. Nothing is necessary, post can contain any combination of data properties.
```
"photo": "img/filename.jpg",  path to an image, big thumbnail
"icon": "img/filename.svg", // path to an image, small icon
"title": "Post Title", 
"subtitle": "Subtitle",
"text": "Post body text, can be any length",
    "link": [
          {
            "href": "GitHub",
            "text": "https://github.com/artrayd/dd-blog"
          },

          {
            "href": "#",
            "text": "Link 2"
          }
  
        ],
    "tags": ["Main", "Example" ]
  }
```
## Tags and top menu
Top menu is auto generated from post tags, default starting tag is main. Post can appear at several menu pages, according to its tags.

## Advanced usage
With advanced usage you will be able to customize DD blog, change design or add new functionality.

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

Thank you, if you have any questions or suggest, please contact me.
