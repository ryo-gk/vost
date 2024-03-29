# Vost 
Vost is a template to create a blog based on markdown posts.
What you have to do is just customize CSS variables, and adjust config.
And of course, don't forget to write posts!

## Getting started

### Create a repository
Create a repository from [here](https://github.com/ryo-gk/vost/generate)

### Configuration

- Basic config
  - `/blog.config.json`
- Css variables
  - `/src/styles/variables.css`

### Write posts
You can write markdown posts on /posts.

Vost provide a command to generate a markdown file for a new post.

```shell
> pnpm run create post -n {file_name}
```

Under the food, Vost uses[markdown-creator](https://github.com/ryo-gk/markdown-creator).

So more details, you can see the repository.

### Development
Run the below, and open http://localhost:5173

Here, you can see the posts which are on the `/posts` directory is displayed as blog post.

### Deployment
Follow the [Vite's document](https://vitejs.dev/guide/static-deploy.html).

