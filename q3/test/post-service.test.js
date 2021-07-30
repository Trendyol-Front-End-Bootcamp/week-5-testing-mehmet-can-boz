import { PostService } from "../src/post-service";
import { PostProvider } from "../src/post-provider";

jest.mock("../src/post-provider")

describe("ProductService", () => {

  const postProvider = new PostProvider();
  const postService = new PostService(postProvider);
  const posts=[

    {
      "userId": 1,
      "id": 1,
      "title": "title 1",
      "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 2,
      "id": 2,
      "title": "title 2",
      "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 2,
      "id": 2,
      "title": "title 3",
      "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 3,
      "id": 2,
      "title": "title 4",
      "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },

  ]

  it("should return titles of user who post most", async () => {
      
      postProvider.getPosts.mockImplementation(() => {
        return Promise.resolve({
          data:posts });

      });

      expect(await postService.filterPosts()).toEqual(["title 2","title 3"]);
  });

  it("should return userId who post most", async () => {

    expect(await postService.count_most_post(posts)).toEqual(2);

  })

})