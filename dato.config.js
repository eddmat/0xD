module.exports = (dato, root) => {
    root.directory("src/products", (booksDir) => {
      dato.books.forEach((book) => {
        booksDir.createPost(
          `${book.slug}.md`, "yaml", {
            frontmatter: { 
                layout: '../../layouts/Detail.astro',
                title: book.title, 
            },
            content: book.description
          }
        );
      });
    });
};