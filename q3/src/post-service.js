export class PostService{
    constructor(postProvider){
        this.postProvider=postProvider;
    }

    async filterPosts() {
        const posts = await this.postProvider.getPosts();
        const userWhoMostPost = await this.count_most_post(posts.data)

        const userPosts=posts.data.filter( (post)=> post.userId===userWhoMostPost )

        const titles= userPosts.map(item => item.title)

        return titles;
    }

    async count_most_post(posts) {
        let counts = {};

        for (let i = 0; i < posts.length; i++) {
          if (counts[posts[i].userId]) {
            counts[posts[i].userId] += 1;
          } else {
            counts[posts[i].userId] = 1;
          }
        }
        let userId = 1;
        for (let prop in counts) {
          if (counts[prop] > counts[userId]) {
            userId = prop;
          }
        }
        return parseInt(userId);
    }
}