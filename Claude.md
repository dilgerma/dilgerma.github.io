## Instructions

in temp you find either blog entries copied from LinkedIn ( or other sources ) or podcast episodes. Thy are numbered like 6.txt and all images that belong 
to the entry have the same number. 6.png will always be the title image, but there can be more images like 6-1.png, 6-2.png

in the articles, you´ll find placeholders like  "Artikelinhalte"

one by one replace them with the images in the right order.

First "Artikelinhalte" - image-1.png, second "Artikelinhalte" - image-2.png

Make sure to adjust the structure according to the extising blog entries. 
Add the same teasers at the end.

if it´s a blog entry - make these articles available on the blog page as well, so please make sure to properly link them

if it´s a podcast, make it available on the podcast page, match the structure of previous episodes


## YouTube videos

To add new videos from the YouTube channel (https://www.youtube.com/@nebulit/videos) to the videos page (`docs/basic-modeling-topics/videos.md`):

1. Fetch https://www.youtube.com/@nebulit/videos with a browser User-Agent and parse the `ytInitialData` JSON from the HTML.
   Videos are `lockupViewModel` entries with `contentType` `LOCKUP_CONTENT_TYPE_VIDEO` - `contentId` is the video id, the title is in `metadata.lockupMetadataViewModel.title.content`.
2. Only add the important/relevant videos (core Event Modeling, EM-Studio, AI/agents topics). Skip videos that are already on the page (compare video ids) and German-titled ones unless asked.
3. Add them under the "More from the YouTube Channel" section (before "Tutorial Videos"), one `### Title` per video, using the same embed block as the existing entries:

```html
<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

4. Don't invent descriptions - titles only, unless a description is provided.
