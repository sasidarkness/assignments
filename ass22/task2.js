const book = {
  title: "Ponniyin Selvan",
  author: "Kalki Krishnamurthy",
  pages: 250,

  describe: function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
  }
};

book.describe();
